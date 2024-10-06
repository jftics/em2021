import { Component } from '@angular/core';
import Map from 'ol/Map'
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON.js';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import OSM from 'ol/source/OSM';
import { FullScreen, defaults as defaultControls } from 'ol/control';
import Style from 'ol/style/Style';
import { Stroke } from 'ol/style';
import { Fill } from 'ol/style';
import { Text } from 'ol/style';
import Chart from 'ol-ext/style/Chart'
import LayerSwitcher from 'ol-ext/control/LayerSwitcher';
import LayerGroup from 'ol/layer/Group.js';
import XYZ from 'ol/source/XYZ.js';
import CircleStyle from 'ol/style/Circle';
import Select from 'ol/interaction/Select';
import LegendControl from 'ol-ext/control/Legend';
import Legend from 'ol-ext/legend/Legend';
import { register } from 'ol/proj/proj4';
import proj4 from 'proj4';
import {RegularShape} from 'ol/style';
@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent {

  map!: Map

  ngOnInit(): void {
    let self = this;
    let lg_capas_base = new LayerGroup({
      properties: { title: 'Capas Base', openInLayerSwitcher: true },
      layers: [
        new TileLayer({
          source: new OSM(),
          properties: { title: 'OSM', baseLayer: true },
          visible: true
        }),
        new TileLayer({
          source: new XYZ({
            url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
          }),
          properties: { title: 'Google Maps', baseLayer: true },
          visible: false
        })
      ]
    });
    let lg_capas_sobrepuestas = new LayerGroup({
      properties: { title: 'Capas Temáticas', openInLayerSwitcher: true },
      layers: [
        new VectorLayer({
          source: new VectorSource({
            url: 'data/recintos.json',
            format: new GeoJSON()
          }),
          properties: { title: 'Recintos', baseLayer: false },
          style: function (f: any) {
            return self.getFeatureStyleRecinto(f, false);
          },
          visible: false
        }),
        new VectorLayer({
          source: new VectorSource({
            url: 'data/zonas.json',
            format: new GeoJSON()
          }),
          properties: { title: 'Zonas', baseLayer: false },
          style: function (f: any) {
            return self.getFeatureStyleZona(f);
          },
          visible: true
        })

      ]
    });

    proj4.defs('EPSG:32719', '+proj=utm +zone=19 +south +datum=WGS84 +units=m +no_defs');
    register(proj4);

    this.map = new Map({
      controls: defaultControls({ zoom: true, zoomOptions: { zoomInTipLabel: 'Acercar', zoomOutTipLabel: 'Alejar' } }).extend([new FullScreen({ tipLabel: 'Pantalla completa' })]),
      target: 'map',
      layers: [
        lg_capas_base,
        lg_capas_sobrepuestas
      ],
      view: new View({
        projection: 'EPSG:32719',
        center: [594019.091, 8175106.283],
        zoom: 13
      })
    });

    this.map.addControl(new LayerSwitcher({collapsed:false}))

    // Control Select 
    var select = new Select({
      style: function (f) { return self.getFeatureStyleRecinto(f, true); }
    });
    this.map.addInteraction(select);

    // 30 random features with data: array of 4 values
    var ext = this.map.getView().calculateExtent(this.map.getSize());
    var features = [];
    for (var i = 0; i < 30; ++i) {
      var n, nb = 0, data = [];
      for (var k = 0; k < 4; k++) {
        n = Math.round(8 * Math.random());
        data.push(n);
        nb += n;
      }
      features[i] = new Feature({
        geometry: new Point([ext[0] + (ext[2] - ext[0]) * Math.random(), ext[1] + (ext[3] - ext[1]) * Math.random()]),
        data: data,
        size: nb
      });
    }
    var vector = new VectorLayer({
      //name: 'Vecteur',
      source: new VectorSource({ features: features }),
      // y ordering
      //renderOrder: ol.ordering.yOrdering(),
      style: function (f) { return self.getFeatureStyle(f, false); }
    })
    //this.map.addLayer(vector);



    // Define a new legend
    var legend = new Legend({
      title: 'Referencias',
      style: this.getFeatureStyleZona
    })
    var legendCtrl = new LegendControl({
      legend: legend,
      collapsed: false
    });

    this.map.addControl(legendCtrl);

    //var form = { Trianle:3, Square:4, Pentagon: 5, Hexagon: 6 };
    legend.addItem({ 
      title: "PBCSP", 
      typeGeom: 'Point',
      style: new Style({
        image: new RegularShape({
          points: 4,
          radius: 15,
          stroke: new Stroke({ color: [40,140,138,1 ], width: 1.5 }),
          fill: new Fill({ color: [40,140,138,.3 ]})
        })
      })
    });
    legend.addItem({ 
      title: "MAS-IPSP", 
      typeGeom: 'Point',
      style: new Style({
        image: new RegularShape({
          points: 4,
          radius: 15,
          stroke: new Stroke({ color: [2,4,201,1 ], width: 1.5 }),
          fill: new Fill({ color: [2,4,201,.3 ]})
        })
      })
    });
    legend.addItem({ 
      title: "Otros", 
      typeGeom: 'Point',
      style: new Style({
        image: new RegularShape({
          points: 4,
          radius: 15,
          stroke: new Stroke({ color: [181,197,19,1 ], width: 1.5 }),
          fill: new Fill({ color: [181,197,19,.3 ]})
        })
      })
    });

    
  }

  //styleCache: any = {};
  getFeatureStyleRecinto(feature: any, sel: any) {
    //data
    var recinto = feature.get("NOMBRE_REC")
    var p_pbsp = feature.get("Suma_de_PB")
    var p_mas = feature.get("Suma_de_MA")
    var p_otros = feature.get("Suma_de_AS") + feature.get("Suma_de_MT") + feature.get("Suma_de_MP") + feature.get("Suma_de_V") + feature.get("Suma_de_UC") + feature.get("Suma_de_J_") + feature.get("Suma_de_UN") + feature.get("Suma_de_PA") + feature.get("Suma_de_SO")
    var total = p_pbsp + p_mas + p_otros

    feature.values_['data'] = [p_pbsp, p_mas, p_otros]
    feature.values_['sum'] = total

    var k = "pie-classic-" + (sel ? "1-" : "") + feature.get("data");
    var style = this.styleCache[k];
    if (!style) {
      var radius = 15;
      // area proportional to data size: s=PI*r^2
      radius = 8 * Math.sqrt(15 / Math.PI);
      // Create chart style

      this.styleCache[k] = style = [
        new Style({
          image: new Chart({
            type: 'pie',
            radius: (sel ? 1.2 : 1) * radius,
            //displacement:0,// [0,0],
            data: feature.get("data") || [10, 30, 20],
            colors: '#288C8A,#0204c9,#b5c513'.split(","),
            rotateWithView: true,
            //animation: this.animation,
            stroke: new Stroke({
              color: "#fff",
              width: 2
            }),
          }),
          text: new Text({
            text: recinto,
            offsetY: 20,
            stroke: new Stroke({
              color: "#fff",
              width: 2
            }),
          })
        })

        /*new Style({
          image: new CircleStyle({
            radius: 5,
            stroke: new Stroke({ color: '#fff', width: 1.5 }),
            fill: new Fill({ color: '#f00' })
          })
        })*/

      ];


      // Show values on select
      if (sel) {
        var data = feature.get("data")
        var sum = feature.get("sum");

        var s = 0;
        for (var i = 0; i < data.length; i++) {
          var d = data[i];
          var a = (2 * s + d) / sum * Math.PI - Math.PI / 2;
          var v = Math.round(d / sum * 1000);
          if (v > 0) {
            style.push(new Style({
              text: new Text({
                text: (v / 10) + "%", /* d.toString() */
                offsetX: Math.cos(a) * (radius + 3),
                offsetY: Math.sin(a) * (radius + 3),
                textAlign: (a < Math.PI / 2 ? "left" : "right"),
                textBaseline: "middle",
                stroke: new Stroke({ color: "#fff", width: 2.5 }),
                fill: new Fill({ color: "#333" })
              })
            }));
          }
          s += d;
        }
      }

    }
    style[0].getImage()//.setAnimation(this.animation);
    return style;
  }
  getFeatureStyleZona(feature: any) {
    //data
    var zona = feature.get("zona")
    var mas = feature.get("MAS_IPSP")
    var pbcsp = feature.get("PBCSP")

    var style
    if (pbcsp > mas) {
      style = new Style({
        stroke: new Stroke({
          color: '#288c8a',
          width: 2
        }),
        fill: new Fill({
          color: 'rgba(40,140,138,0.5)'
        }),
        text: new Text({
          text: zona + "\nVotos:\nPBCSP: " + pbcsp + "\nMAS-IPSP:" + mas,
          stroke: new Stroke({
            color: '#288c8a',
            width: 2
          }),
          fill: new Fill({
            color: '#fff'
          }),
        })
      })

    }
    else {
      style = new Style({
        stroke: new Stroke({
          color: '#0204c9',
          width: 2
        }),
        fill: new Fill({
          color: 'rgba(2,4,201,0.5)'
        }),
        text: new Text({
          text: zona + "\nVotos:\nPBCSP: " + pbcsp + "\nMAS-IPSP:" + mas,
          stroke: new Stroke({
            color: '#0204c9',
            width: 2
          }),
          fill: new Fill({
            color: '#fff'
          }),
        })
      })

    }



    return style;
  }


  animation = 0;
  styleCache: any = {};
  getFeatureStyle(feature: any, sel: any) {
    var k = "pie-classic-" + (sel ? "1-" : "") + feature.get("data");
    var style = this.styleCache[k];
    if (!style) {
      var radius = 15;
      // area proportional to data size: s=PI*r^2
      radius = 8 * Math.sqrt(feature.get("size") / Math.PI);
      // Create chart style

      this.styleCache[k] = style = [
        new Style({
          image: new Chart({
            type: 'pie',
            radius: (sel ? 1.2 : 1) * radius,
            //displacement:0,// [0,0],
            data: feature.get("data") || [10, 30, 20],
            colors: 'classic',
            //rotateWithView: true,
            //animation: this.animation,
            stroke: new Stroke({
              color: "#fff",
              width: 2
            }),
          })
        })

        /*new Style({
          image: new CircleStyle({
            radius: 5,
            stroke: new Stroke({ color: '#fff', width: 1.5 }),
            fill: new Fill({ color: '#f00' })
          })
        })*/

      ];
    }
    style[0].getImage()//.setAnimation(this.animation);
    return style;
  }



}
