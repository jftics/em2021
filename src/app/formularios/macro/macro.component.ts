import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Dark from '@amcharts/amcharts5/themes/Dark';
import * as am5radar from '@amcharts/amcharts5/radar'
import am5locales_es_ES from "@amcharts/amcharts5/locales/es_ES";
import * as am5p from "@amcharts/amcharts5/percent";


@Component({
  selector: 'app-macro',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatSelectModule, MatFormFieldModule, FormsModule],
  templateUrl: './macro.component.html',
  styleUrl: './macro.component.scss'
})
export class MacroComponent {


  dataOrigen: any = {}
  dataGeneral: any = {}
  macroSelected: any


  listaChart: any = {}

  ngOnInit(): void {
    this.dataOrigen = this.getData()
    this.dataGeneral = this.groupByProperties(this.dataOrigen);
    console.log(this.dataGeneral)
  }

  ngAfterViewInit() {


  }


  getData() {
    return [
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "CENTRAL",
        "recinto": "Col. Daniel Sanchez Bustamante",
        "suma_asp": 32,
        "suma_mts": 30,
        "suma_mas_ipsp": 3174,
        "suma_mps": 124,
        "suma_v": 33,
        "suma_ucs": 43,
        "suma_jallallalp": 546,
        "suma_unidos": 45,
        "suma_pbcsp": 2924,
        "suma_panbol": 30,
        "suma_solbo": 111
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "CENTRAL",
        "recinto": "Liceo La Paz",
        "suma_asp": 4,
        "suma_mts": 6,
        "suma_mas_ipsp": 273,
        "suma_mps": 10,
        "suma_v": 0,
        "suma_ucs": 6,
        "suma_jallallalp": 30,
        "suma_unidos": 6,
        "suma_pbcsp": 643,
        "suma_panbol": 3,
        "suma_solbo": 50
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "CENTRAL",
        "recinto": "U.E. Vicenta Juariste Eguino (Temporal)",
        "suma_asp": 1,
        "suma_mts": 1,
        "suma_mas_ipsp": 223,
        "suma_mps": 12,
        "suma_v": 4,
        "suma_ucs": 5,
        "suma_jallallalp": 35,
        "suma_unidos": 8,
        "suma_pbcsp": 571,
        "suma_panbol": 1,
        "suma_solbo": 23
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "CENTRAL",
        "recinto": "Colegio Don Bosco",
        "suma_asp": 13,
        "suma_mts": 20,
        "suma_mas_ipsp": 2032,
        "suma_mps": 86,
        "suma_v": 17,
        "suma_ucs": 50,
        "suma_jallallalp": 215,
        "suma_unidos": 44,
        "suma_pbcsp": 2139,
        "suma_panbol": 6,
        "suma_solbo": 123
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "CENTRAL",
        "recinto": "Col. Santa Ana",
        "suma_asp": 7,
        "suma_mts": 5,
        "suma_mas_ipsp": 294,
        "suma_mps": 21,
        "suma_v": 6,
        "suma_ucs": 5,
        "suma_jallallalp": 60,
        "suma_unidos": 13,
        "suma_pbcsp": 867,
        "suma_panbol": 1,
        "suma_solbo": 41
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "CENTRAL",
        "recinto": "Col. Nacional Ayacucho",
        "suma_asp": 4,
        "suma_mts": 3,
        "suma_mas_ipsp": 381,
        "suma_mps": 32,
        "suma_v": 6,
        "suma_ucs": 10,
        "suma_jallallalp": 89,
        "suma_unidos": 15,
        "suma_pbcsp": 885,
        "suma_panbol": 7,
        "suma_solbo": 37
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "EL ROSARIO",
        "recinto": "Esc. Mcal Santa Cruz",
        "suma_asp": 1,
        "suma_mts": 2,
        "suma_mas_ipsp": 151,
        "suma_mps": 9,
        "suma_v": 3,
        "suma_ucs": 1,
        "suma_jallallalp": 28,
        "suma_unidos": 6,
        "suma_pbcsp": 294,
        "suma_panbol": 1,
        "suma_solbo": 11
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "EL ROSARIO",
        "recinto": "Unidad Educativa Arabe De Egipto",
        "suma_asp": 4,
        "suma_mts": 2,
        "suma_mas_ipsp": 416,
        "suma_mps": 34,
        "suma_v": 4,
        "suma_ucs": 4,
        "suma_jallallalp": 79,
        "suma_unidos": 5,
        "suma_pbcsp": 786,
        "suma_panbol": 1,
        "suma_solbo": 21
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "EL ROSARIO",
        "recinto": "Col. San Francisco",
        "suma_asp": 5,
        "suma_mts": 9,
        "suma_mas_ipsp": 341,
        "suma_mps": 23,
        "suma_v": 3,
        "suma_ucs": 6,
        "suma_jallallalp": 56,
        "suma_unidos": 9,
        "suma_pbcsp": 964,
        "suma_panbol": 1,
        "suma_solbo": 42
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "SAN JORGE",
        "recinto": "Facultad de Tecnologia (U.M.S.A)",
        "suma_asp": 12,
        "suma_mts": 4,
        "suma_mas_ipsp": 161,
        "suma_mps": 14,
        "suma_v": 2,
        "suma_ucs": 4,
        "suma_jallallalp": 20,
        "suma_unidos": 11,
        "suma_pbcsp": 679,
        "suma_panbol": 0,
        "suma_solbo": 38
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "SAN JORGE",
        "recinto": "Col. Amor de Dios",
        "suma_asp": 23,
        "suma_mts": 2,
        "suma_mas_ipsp": 525,
        "suma_mps": 38,
        "suma_v": 5,
        "suma_ucs": 9,
        "suma_jallallalp": 72,
        "suma_unidos": 23,
        "suma_pbcsp": 2043,
        "suma_panbol": 12,
        "suma_solbo": 115
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "SAN SEBASTIAN",
        "recinto": "Colegio German Busch",
        "suma_asp": 8,
        "suma_mts": 3,
        "suma_mas_ipsp": 360,
        "suma_mps": 31,
        "suma_v": 5,
        "suma_ucs": 7,
        "suma_jallallalp": 55,
        "suma_unidos": 18,
        "suma_pbcsp": 732,
        "suma_panbol": 1,
        "suma_solbo": 21
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "SAN SEBASTIAN",
        "recinto": "Colegio San Antonio de Padua (Temporal)",
        "suma_asp": 5,
        "suma_mts": 1,
        "suma_mas_ipsp": 264,
        "suma_mps": 21,
        "suma_v": 4,
        "suma_ucs": 3,
        "suma_jallallalp": 37,
        "suma_unidos": 10,
        "suma_pbcsp": 638,
        "suma_panbol": 0,
        "suma_solbo": 34
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "SAN SEBASTIAN",
        "recinto": "U.E. 16 de Julio (Temporal)",
        "suma_asp": 11,
        "suma_mts": 12,
        "suma_mas_ipsp": 658,
        "suma_mps": 41,
        "suma_v": 6,
        "suma_ucs": 5,
        "suma_jallallalp": 116,
        "suma_unidos": 18,
        "suma_pbcsp": 1019,
        "suma_panbol": 9,
        "suma_solbo": 38
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "SANTA BARBARA",
        "recinto": "Coop. Educacional San Marcos Ltda.",
        "suma_asp": 5,
        "suma_mts": 5,
        "suma_mas_ipsp": 178,
        "suma_mps": 9,
        "suma_v": 1,
        "suma_ucs": 5,
        "suma_jallallalp": 18,
        "suma_unidos": 5,
        "suma_pbcsp": 413,
        "suma_panbol": 2,
        "suma_solbo": 27
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 1",
        "zona": "SANTA BARBARA",
        "recinto": "Dir. Distrital de Educación",
        "suma_asp": 5,
        "suma_mts": 4,
        "suma_mas_ipsp": 451,
        "suma_mps": 27,
        "suma_v": 6,
        "suma_ucs": 11,
        "suma_jallallalp": 50,
        "suma_unidos": 15,
        "suma_pbcsp": 1269,
        "suma_panbol": 2,
        "suma_solbo": 54
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 2",
        "zona": "MIRAFLORES",
        "recinto": "Tecnico Ayacucho",
        "suma_asp": 31,
        "suma_mts": 34,
        "suma_mas_ipsp": 2405,
        "suma_mps": 159,
        "suma_v": 29,
        "suma_ucs": 38,
        "suma_jallallalp": 314,
        "suma_unidos": 78,
        "suma_pbcsp": 6644,
        "suma_panbol": 9,
        "suma_solbo": 321
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 2",
        "zona": "MIRAFLORES",
        "recinto": "Col. Guillen Pinto",
        "suma_asp": 9,
        "suma_mts": 47,
        "suma_mas_ipsp": 2020,
        "suma_mps": 81,
        "suma_v": 26,
        "suma_ucs": 28,
        "suma_jallallalp": 380,
        "suma_unidos": 30,
        "suma_pbcsp": 1743,
        "suma_panbol": 12,
        "suma_solbo": 83
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 2",
        "zona": "MIRAFLORES",
        "recinto": "Col. Experimental Hugo Davila",
        "suma_asp": 32,
        "suma_mts": 6,
        "suma_mas_ipsp": 1007,
        "suma_mps": 59,
        "suma_v": 5,
        "suma_ucs": 9,
        "suma_jallallalp": 123,
        "suma_unidos": 53,
        "suma_pbcsp": 3095,
        "suma_panbol": 14,
        "suma_solbo": 142
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 2",
        "zona": "MIRAFLORES",
        "recinto": "Esc. Panama",
        "suma_asp": 19,
        "suma_mts": 42,
        "suma_mas_ipsp": 519,
        "suma_mps": 176,
        "suma_v": 5,
        "suma_ucs": 10,
        "suma_jallallalp": 74,
        "suma_unidos": 29,
        "suma_pbcsp": 2288,
        "suma_panbol": 2,
        "suma_solbo": 108
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 2",
        "zona": "MIRAFLORES",
        "recinto": "E.N.S.A.F.",
        "suma_asp": 8,
        "suma_mts": 1,
        "suma_mas_ipsp": 298,
        "suma_mps": 40,
        "suma_v": 6,
        "suma_ucs": 8,
        "suma_jallallalp": 23,
        "suma_unidos": 14,
        "suma_pbcsp": 1245,
        "suma_panbol": 8,
        "suma_solbo": 62
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 2",
        "zona": "MIRAFLORES",
        "recinto": "Escuela Piloto Naciones Unidas",
        "suma_asp": 3,
        "suma_mts": 5,
        "suma_mas_ipsp": 238,
        "suma_mps": 17,
        "suma_v": 1,
        "suma_ucs": 4,
        "suma_jallallalp": 9,
        "suma_unidos": 10,
        "suma_pbcsp": 693,
        "suma_panbol": 0,
        "suma_solbo": 32
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 2",
        "zona": "MIRAFLORES",
        "recinto": "(Cárcel) C.O.F. Miraflores",
        "suma_asp": 0,
        "suma_mts": 0,
        "suma_mas_ipsp": 12,
        "suma_mps": 1,
        "suma_v": 1,
        "suma_ucs": 0,
        "suma_jallallalp": 3,
        "suma_unidos": 0,
        "suma_pbcsp": 12,
        "suma_panbol": 0,
        "suma_solbo": 1
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 2",
        "zona": "MIRAFLORES",
        "recinto": "Col. Cervantes",
        "suma_asp": 13,
        "suma_mts": 3,
        "suma_mas_ipsp": 386,
        "suma_mps": 37,
        "suma_v": 2,
        "suma_ucs": 14,
        "suma_jallallalp": 28,
        "suma_unidos": 10,
        "suma_pbcsp": 1921,
        "suma_panbol": 1,
        "suma_solbo": 84
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 2",
        "zona": "MIRAFLORES SUR",
        "recinto": "Colegio Dora Schmidt",
        "suma_asp": 35,
        "suma_mts": 7,
        "suma_mas_ipsp": 615,
        "suma_mps": 44,
        "suma_v": 11,
        "suma_ucs": 19,
        "suma_jallallalp": 94,
        "suma_unidos": 26,
        "suma_pbcsp": 2384,
        "suma_panbol": 3,
        "suma_solbo": 114
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 2",
        "zona": "MIRAFLORES SUR",
        "recinto": "Col. Felipe 2do. Guzman",
        "suma_asp": 13,
        "suma_mts": 5,
        "suma_mas_ipsp": 437,
        "suma_mps": 31,
        "suma_v": 12,
        "suma_ucs": 11,
        "suma_jallallalp": 66,
        "suma_unidos": 15,
        "suma_pbcsp": 1327,
        "suma_panbol": 2,
        "suma_solbo": 63
      },
      {
        "macro": "Centro",
        "distrito": "Distrito 2",
        "zona": "MIRAFLORES SUR",
        "recinto": "Esc. Alonzo De Mendoza",
        "suma_asp": 2,
        "suma_mts": 1,
        "suma_mas_ipsp": 121,
        "suma_mps": 9,
        "suma_v": 3,
        "suma_ucs": 4,
        "suma_jallallalp": 11,
        "suma_unidos": 5,
        "suma_pbcsp": 431,
        "suma_panbol": 0,
        "suma_solbo": 35
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 3",
        "zona": "SOPOCACHI",
        "recinto": "Esc. Republica Del Peru",
        "suma_asp": 2,
        "suma_mts": 7,
        "suma_mas_ipsp": 82,
        "suma_mps": 8,
        "suma_v": 2,
        "suma_ucs": 2,
        "suma_jallallalp": 12,
        "suma_unidos": 6,
        "suma_pbcsp": 371,
        "suma_panbol": 0,
        "suma_solbo": 20
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 3",
        "zona": "SOPOCACHI",
        "recinto": "Escuela Agustin Aspiazu",
        "suma_asp": 17,
        "suma_mts": 4,
        "suma_mas_ipsp": 707,
        "suma_mps": 41,
        "suma_v": 9,
        "suma_ucs": 16,
        "suma_jallallalp": 74,
        "suma_unidos": 21,
        "suma_pbcsp": 2232,
        "suma_panbol": 1,
        "suma_solbo": 140
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 3",
        "zona": "SOPOCACHI",
        "recinto": "Liceo Bolivia",
        "suma_asp": 6,
        "suma_mts": 6,
        "suma_mas_ipsp": 189,
        "suma_mps": 21,
        "suma_v": 3,
        "suma_ucs": 3,
        "suma_jallallalp": 16,
        "suma_unidos": 6,
        "suma_pbcsp": 757,
        "suma_panbol": 2,
        "suma_solbo": 39
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 3",
        "zona": "SOPOCACHI",
        "recinto": "Col. Gregorio Reynolds",
        "suma_asp": 19,
        "suma_mts": 12,
        "suma_mas_ipsp": 868,
        "suma_mps": 50,
        "suma_v": 11,
        "suma_ucs": 12,
        "suma_jallallalp": 106,
        "suma_unidos": 31,
        "suma_pbcsp": 2221,
        "suma_panbol": 3,
        "suma_solbo": 130
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 3",
        "zona": "SOPOCACHI",
        "recinto": "Instituto Americano",
        "suma_asp": 25,
        "suma_mts": 13,
        "suma_mas_ipsp": 759,
        "suma_mps": 64,
        "suma_v": 9,
        "suma_ucs": 15,
        "suma_jallallalp": 79,
        "suma_unidos": 27,
        "suma_pbcsp": 2861,
        "suma_panbol": 1,
        "suma_solbo": 132
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 3",
        "zona": "SOPOCACHI",
        "recinto": "Kinder Bolivia",
        "suma_asp": 8,
        "suma_mts": 14,
        "suma_mas_ipsp": 1266,
        "suma_mps": 35,
        "suma_v": 12,
        "suma_ucs": 11,
        "suma_jallallalp": 235,
        "suma_unidos": 19,
        "suma_pbcsp": 767,
        "suma_panbol": 10,
        "suma_solbo": 57
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 3",
        "zona": "SOPOCACHI",
        "recinto": "Esc. Ecuador",
        "suma_asp": 11,
        "suma_mts": 4,
        "suma_mas_ipsp": 352,
        "suma_mps": 40,
        "suma_v": 6,
        "suma_ucs": 7,
        "suma_jallallalp": 46,
        "suma_unidos": 13,
        "suma_pbcsp": 1500,
        "suma_panbol": 2,
        "suma_solbo": 75
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 3",
        "zona": "SOPOCACHI ALTO",
        "recinto": "Complejo Deportivo San Luis",
        "suma_asp": 5,
        "suma_mts": 2,
        "suma_mas_ipsp": 188,
        "suma_mps": 18,
        "suma_v": 0,
        "suma_ucs": 8,
        "suma_jallallalp": 35,
        "suma_unidos": 3,
        "suma_pbcsp": 679,
        "suma_panbol": 2,
        "suma_solbo": 36
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 3",
        "zona": "SOPOCACHI ALTO",
        "recinto": "Col. Cristo Rey",
        "suma_asp": 20,
        "suma_mts": 27,
        "suma_mas_ipsp": 1789,
        "suma_mps": 66,
        "suma_v": 16,
        "suma_ucs": 25,
        "suma_jallallalp": 205,
        "suma_unidos": 47,
        "suma_pbcsp": 2165,
        "suma_panbol": 12,
        "suma_solbo": 229
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 3",
        "zona": "SOPOCACHI BAJO",
        "recinto": "Kinder Nazario Pardo",
        "suma_asp": 6,
        "suma_mts": 4,
        "suma_mas_ipsp": 665,
        "suma_mps": 26,
        "suma_v": 2,
        "suma_ucs": 11,
        "suma_jallallalp": 70,
        "suma_unidos": 11,
        "suma_pbcsp": 899,
        "suma_panbol": 2,
        "suma_solbo": 52
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 4",
        "zona": "ALPACOMA",
        "recinto": "Esc. San Miguel",
        "suma_asp": 1,
        "suma_mts": 2,
        "suma_mas_ipsp": 451,
        "suma_mps": 11,
        "suma_v": 5,
        "suma_ucs": 5,
        "suma_jallallalp": 58,
        "suma_unidos": 1,
        "suma_pbcsp": 119,
        "suma_panbol": 3,
        "suma_solbo": 11
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 4",
        "zona": "BAJO LLOJETA",
        "recinto": "U.E. Hugo Chavez Frías",
        "suma_asp": 5,
        "suma_mts": 8,
        "suma_mas_ipsp": 543,
        "suma_mps": 27,
        "suma_v": 3,
        "suma_ucs": 2,
        "suma_jallallalp": 62,
        "suma_unidos": 2,
        "suma_pbcsp": 523,
        "suma_panbol": 4,
        "suma_solbo": 23
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 4",
        "zona": "BAJO LLOJETA",
        "recinto": "Esc. San Jose",
        "suma_asp": 12,
        "suma_mts": 3,
        "suma_mas_ipsp": 809,
        "suma_mps": 38,
        "suma_v": 6,
        "suma_ucs": 11,
        "suma_jallallalp": 108,
        "suma_unidos": 15,
        "suma_pbcsp": 1102,
        "suma_panbol": 6,
        "suma_solbo": 78
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 4",
        "zona": "BELLO HORIZONTE",
        "recinto": "Colegio San Luis",
        "suma_asp": 30,
        "suma_mts": 18,
        "suma_mas_ipsp": 1659,
        "suma_mps": 74,
        "suma_v": 15,
        "suma_ucs": 28,
        "suma_jallallalp": 181,
        "suma_unidos": 41,
        "suma_pbcsp": 3366,
        "suma_panbol": 10,
        "suma_solbo": 134
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 4",
        "zona": "BELLO HORIZONTE",
        "recinto": "U. E. Pantaleon Dalence",
        "suma_asp": 7,
        "suma_mts": 4,
        "suma_mas_ipsp": 474,
        "suma_mps": 24,
        "suma_v": 4,
        "suma_ucs": 10,
        "suma_jallallalp": 61,
        "suma_unidos": 15,
        "suma_pbcsp": 1026,
        "suma_panbol": 3,
        "suma_solbo": 49
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 4",
        "zona": "BELLO HORIZONTE",
        "recinto": "Colegio Ignacio Calderon",
        "suma_asp": 29,
        "suma_mts": 19,
        "suma_mas_ipsp": 1410,
        "suma_mps": 55,
        "suma_v": 15,
        "suma_ucs": 25,
        "suma_jallallalp": 216,
        "suma_unidos": 25,
        "suma_pbcsp": 2449,
        "suma_panbol": 6,
        "suma_solbo": 129
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 4",
        "zona": "INCA LLOJETA",
        "recinto": "Esc. Jose Santos",
        "suma_asp": 15,
        "suma_mts": 18,
        "suma_mas_ipsp": 2091,
        "suma_mps": 72,
        "suma_v": 22,
        "suma_ucs": 44,
        "suma_jallallalp": 317,
        "suma_unidos": 36,
        "suma_pbcsp": 1089,
        "suma_panbol": 5,
        "suma_solbo": 93
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 4",
        "zona": "LAS LOMAS",
        "recinto": "Unid. Educ. Raul Salmon De La Barra",
        "suma_asp": 18,
        "suma_mts": 5,
        "suma_mas_ipsp": 1708,
        "suma_mps": 40,
        "suma_v": 5,
        "suma_ucs": 24,
        "suma_jallallalp": 265,
        "suma_unidos": 19,
        "suma_pbcsp": 895,
        "suma_panbol": 3,
        "suma_solbo": 49
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 4",
        "zona": "PASANKERI",
        "recinto": "U.E. Alto Pasankeri Sur",
        "suma_asp": 12,
        "suma_mts": 2,
        "suma_mas_ipsp": 479,
        "suma_mps": 11,
        "suma_v": 2,
        "suma_ucs": 4,
        "suma_jallallalp": 138,
        "suma_unidos": 4,
        "suma_pbcsp": 257,
        "suma_panbol": 1,
        "suma_solbo": 26
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 4",
        "zona": "TEMBLADERANI",
        "recinto": "Unidad Educativa Carlos Medinacelli",
        "suma_asp": 30,
        "suma_mts": 10,
        "suma_mas_ipsp": 1294,
        "suma_mps": 63,
        "suma_v": 15,
        "suma_ucs": 18,
        "suma_jallallalp": 178,
        "suma_unidos": 23,
        "suma_pbcsp": 2127,
        "suma_panbol": 7,
        "suma_solbo": 98
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 4",
        "zona": "TEMBLADERANI",
        "recinto": "U.E. Las Nieves",
        "suma_asp": 6,
        "suma_mts": 1,
        "suma_mas_ipsp": 517,
        "suma_mps": 17,
        "suma_v": 5,
        "suma_ucs": 1,
        "suma_jallallalp": 92,
        "suma_unidos": 15,
        "suma_pbcsp": 688,
        "suma_panbol": 1,
        "suma_solbo": 24
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 4",
        "zona": "TEMBLADERANI",
        "recinto": "Unidad Educativa Puerto Rico",
        "suma_asp": 17,
        "suma_mts": 16,
        "suma_mas_ipsp": 1210,
        "suma_mps": 49,
        "suma_v": 7,
        "suma_ucs": 17,
        "suma_jallallalp": 188,
        "suma_unidos": 13,
        "suma_pbcsp": 1636,
        "suma_panbol": 7,
        "suma_solbo": 72
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 5",
        "zona": "ALTO TACAGUA",
        "recinto": "Unid. Educ. Jaime Escalante",
        "suma_asp": 12,
        "suma_mts": 19,
        "suma_mas_ipsp": 1498,
        "suma_mps": 61,
        "suma_v": 13,
        "suma_ucs": 29,
        "suma_jallallalp": 295,
        "suma_unidos": 12,
        "suma_pbcsp": 693,
        "suma_panbol": 3,
        "suma_solbo": 62
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 5",
        "zona": "ALTO TACAGUA",
        "recinto": "U.E. Artemio Camargo (Temporal)",
        "suma_asp": 1,
        "suma_mts": 3,
        "suma_mas_ipsp": 419,
        "suma_mps": 20,
        "suma_v": 3,
        "suma_ucs": 6,
        "suma_jallallalp": 112,
        "suma_unidos": 9,
        "suma_pbcsp": 231,
        "suma_panbol": 1,
        "suma_solbo": 25
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 5",
        "zona": "SAN JUAN DE COTAHUMA",
        "recinto": "Esc. Alto Tembladerani",
        "suma_asp": 6,
        "suma_mts": 6,
        "suma_mas_ipsp": 633,
        "suma_mps": 22,
        "suma_v": 7,
        "suma_ucs": 12,
        "suma_jallallalp": 131,
        "suma_unidos": 9,
        "suma_pbcsp": 251,
        "suma_panbol": 2,
        "suma_solbo": 26
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 5",
        "zona": "TACAGUA",
        "recinto": "Escuela Republica de Japon",
        "suma_asp": 31,
        "suma_mts": 29,
        "suma_mas_ipsp": 2634,
        "suma_mps": 78,
        "suma_v": 21,
        "suma_ucs": 34,
        "suma_jallallalp": 409,
        "suma_unidos": 48,
        "suma_pbcsp": 2252,
        "suma_panbol": 15,
        "suma_solbo": 138
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 5",
        "zona": "VILLA NUEVO POTOSÍ",
        "recinto": "Esc. Remberto Tapia",
        "suma_asp": 17,
        "suma_mts": 19,
        "suma_mas_ipsp": 1834,
        "suma_mps": 88,
        "suma_v": 9,
        "suma_ucs": 32,
        "suma_jallallalp": 291,
        "suma_unidos": 28,
        "suma_pbcsp": 1639,
        "suma_panbol": 13,
        "suma_solbo": 99
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 5",
        "zona": "VILLA NUEVO POTOSÍ",
        "recinto": "Seminario Nazareno",
        "suma_asp": 2,
        "suma_mts": 0,
        "suma_mas_ipsp": 112,
        "suma_mps": 5,
        "suma_v": 1,
        "suma_ucs": 4,
        "suma_jallallalp": 9,
        "suma_unidos": 1,
        "suma_pbcsp": 413,
        "suma_panbol": 0,
        "suma_solbo": 32
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 6",
        "zona": "BELÉN",
        "recinto": "Col. Maria Auxiliadora",
        "suma_asp": 6,
        "suma_mts": 8,
        "suma_mas_ipsp": 487,
        "suma_mps": 37,
        "suma_v": 6,
        "suma_ucs": 7,
        "suma_jallallalp": 77,
        "suma_unidos": 23,
        "suma_pbcsp": 1420,
        "suma_panbol": 0,
        "suma_solbo": 51
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 6",
        "zona": "BELÉN",
        "recinto": "U.E. San Fernando \"A\"",
        "suma_asp": 15,
        "suma_mts": 10,
        "suma_mas_ipsp": 566,
        "suma_mps": 37,
        "suma_v": 7,
        "suma_ucs": 16,
        "suma_jallallalp": 82,
        "suma_unidos": 18,
        "suma_pbcsp": 1485,
        "suma_panbol": 2,
        "suma_solbo": 64
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 6",
        "zona": "BELÉN",
        "recinto": "Colegio Villarroel",
        "suma_asp": 15,
        "suma_mts": 7,
        "suma_mas_ipsp": 943,
        "suma_mps": 48,
        "suma_v": 9,
        "suma_ucs": 16,
        "suma_jallallalp": 177,
        "suma_unidos": 19,
        "suma_pbcsp": 1563,
        "suma_panbol": 1,
        "suma_solbo": 65
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 6",
        "zona": "SAN PEDRO",
        "recinto": "Unidad Educativa Republica de Cuba",
        "suma_asp": 18,
        "suma_mts": 4,
        "suma_mas_ipsp": 525,
        "suma_mps": 35,
        "suma_v": 9,
        "suma_ucs": 6,
        "suma_jallallalp": 77,
        "suma_unidos": 11,
        "suma_pbcsp": 1460,
        "suma_panbol": 7,
        "suma_solbo": 65
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 6",
        "zona": "SAN PEDRO",
        "recinto": "Colegio Saint Peters",
        "suma_asp": 11,
        "suma_mts": 4,
        "suma_mas_ipsp": 260,
        "suma_mps": 21,
        "suma_v": 3,
        "suma_ucs": 7,
        "suma_jallallalp": 37,
        "suma_unidos": 9,
        "suma_pbcsp": 993,
        "suma_panbol": 0,
        "suma_solbo": 57
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 6",
        "zona": "SAN PEDRO",
        "recinto": "Colegio Canadiense",
        "suma_asp": 7,
        "suma_mts": 3,
        "suma_mas_ipsp": 239,
        "suma_mps": 12,
        "suma_v": 3,
        "suma_ucs": 8,
        "suma_jallallalp": 33,
        "suma_unidos": 13,
        "suma_pbcsp": 713,
        "suma_panbol": 4,
        "suma_solbo": 32
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 6",
        "zona": "SAN PEDRO",
        "recinto": "Col. Canada",
        "suma_asp": 11,
        "suma_mts": 5,
        "suma_mas_ipsp": 1032,
        "suma_mps": 62,
        "suma_v": 10,
        "suma_ucs": 22,
        "suma_jallallalp": 149,
        "suma_unidos": 31,
        "suma_pbcsp": 1402,
        "suma_panbol": 9,
        "suma_solbo": 62
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 6",
        "zona": "SAN PEDRO",
        "recinto": "Colegio Bolivar",
        "suma_asp": 9,
        "suma_mts": 8,
        "suma_mas_ipsp": 323,
        "suma_mps": 29,
        "suma_v": 3,
        "suma_ucs": 4,
        "suma_jallallalp": 41,
        "suma_unidos": 14,
        "suma_pbcsp": 1030,
        "suma_panbol": 3,
        "suma_solbo": 47
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 6",
        "zona": "SAN PEDRO",
        "recinto": "(Cárcel) Panóptico",
        "suma_asp": 5,
        "suma_mts": 15,
        "suma_mas_ipsp": 220,
        "suma_mps": 14,
        "suma_v": 2,
        "suma_ucs": 9,
        "suma_jallallalp": 89,
        "suma_unidos": 3,
        "suma_pbcsp": 79,
        "suma_panbol": 6,
        "suma_solbo": 20
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 6",
        "zona": "SAN PEDRO",
        "recinto": "Instituto Mendez Arcos",
        "suma_asp": 13,
        "suma_mts": 12,
        "suma_mas_ipsp": 680,
        "suma_mps": 48,
        "suma_v": 10,
        "suma_ucs": 14,
        "suma_jallallalp": 87,
        "suma_unidos": 27,
        "suma_pbcsp": 2156,
        "suma_panbol": 12,
        "suma_solbo": 93
      },
      {
        "macro": "Cotahuma",
        "distrito": "Distrito 6",
        "zona": "SAN PEDRO ALTO",
        "recinto": "Esc. Alcides Arguedas",
        "suma_asp": 5,
        "suma_mts": 7,
        "suma_mas_ipsp": 308,
        "suma_mps": 20,
        "suma_v": 5,
        "suma_ucs": 5,
        "suma_jallallalp": 51,
        "suma_unidos": 10,
        "suma_pbcsp": 614,
        "suma_panbol": 1,
        "suma_solbo": 28
      },
      {
        "macro": "Hampaturi",
        "distrito": "Distrito 22",
        "zona": " ",
        "recinto": "U.E. Pantini",
        "suma_asp": 2,
        "suma_mts": 5,
        "suma_mas_ipsp": 168,
        "suma_mps": 7,
        "suma_v": 0,
        "suma_ucs": 3,
        "suma_jallallalp": 9,
        "suma_unidos": 4,
        "suma_pbcsp": 28,
        "suma_panbol": 0,
        "suma_solbo": 2
      },
      {
        "macro": "Mallasa",
        "distrito": "Distrito 20",
        "zona": "JUPAPINA",
        "recinto": "Unidad Educativa Jupapina",
        "suma_asp": 3,
        "suma_mts": 8,
        "suma_mas_ipsp": 642,
        "suma_mps": 22,
        "suma_v": 2,
        "suma_ucs": 12,
        "suma_jallallalp": 68,
        "suma_unidos": 9,
        "suma_pbcsp": 510,
        "suma_panbol": 0,
        "suma_solbo": 47
      },
      {
        "macro": "Mallasa",
        "distrito": "Distrito 20",
        "zona": "MALLASA",
        "recinto": "Unidad Educativa Mallasa",
        "suma_asp": 4,
        "suma_mts": 8,
        "suma_mas_ipsp": 862,
        "suma_mps": 25,
        "suma_v": 6,
        "suma_ucs": 14,
        "suma_jallallalp": 82,
        "suma_unidos": 7,
        "suma_pbcsp": 656,
        "suma_panbol": 5,
        "suma_solbo": 74
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 10",
        "zona": "ALTO PURA PURA",
        "recinto": "Unid. Educ. 20 De Octubre N° 1",
        "suma_asp": 4,
        "suma_mts": 8,
        "suma_mas_ipsp": 900,
        "suma_mps": 30,
        "suma_v": 8,
        "suma_ucs": 11,
        "suma_jallallalp": 182,
        "suma_unidos": 2,
        "suma_pbcsp": 217,
        "suma_panbol": 7,
        "suma_solbo": 23
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 10",
        "zona": "ALTO PURA PURA",
        "recinto": "Col. Luis Velasco Flores",
        "suma_asp": 6,
        "suma_mts": 16,
        "suma_mas_ipsp": 908,
        "suma_mps": 25,
        "suma_v": 4,
        "suma_ucs": 24,
        "suma_jallallalp": 163,
        "suma_unidos": 16,
        "suma_pbcsp": 300,
        "suma_panbol": 7,
        "suma_solbo": 17
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 10",
        "zona": "CAJA FERROVIARIA",
        "recinto": "Sede Social Caja Ferroviaria",
        "suma_asp": 4,
        "suma_mts": 5,
        "suma_mas_ipsp": 845,
        "suma_mps": 21,
        "suma_v": 9,
        "suma_ucs": 29,
        "suma_jallallalp": 130,
        "suma_unidos": 9,
        "suma_pbcsp": 236,
        "suma_panbol": 7,
        "suma_solbo": 28
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 10",
        "zona": "CIUDADELA FERROVIARIA",
        "recinto": "Esc. Gil Tapia Rada",
        "suma_asp": 15,
        "suma_mts": 25,
        "suma_mas_ipsp": 2080,
        "suma_mps": 72,
        "suma_v": 8,
        "suma_ucs": 32,
        "suma_jallallalp": 390,
        "suma_unidos": 28,
        "suma_pbcsp": 1624,
        "suma_panbol": 5,
        "suma_solbo": 117
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 10",
        "zona": "PURA PURA",
        "recinto": "Escuela Eloy Alvarez Plata",
        "suma_asp": 2,
        "suma_mts": 3,
        "suma_mas_ipsp": 393,
        "suma_mps": 14,
        "suma_v": 7,
        "suma_ucs": 7,
        "suma_jallallalp": 53,
        "suma_unidos": 10,
        "suma_pbcsp": 886,
        "suma_panbol": 4,
        "suma_solbo": 43
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 10",
        "zona": "PURA PURA",
        "recinto": "Esc. Sagrado Corazon De Jesus",
        "suma_asp": 19,
        "suma_mts": 36,
        "suma_mas_ipsp": 1922,
        "suma_mps": 71,
        "suma_v": 55,
        "suma_ucs": 29,
        "suma_jallallalp": 436,
        "suma_unidos": 19,
        "suma_pbcsp": 931,
        "suma_panbol": 19,
        "suma_solbo": 73
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 10",
        "zona": "PURA PURA",
        "recinto": "Unidad Educativa Fabril 18 de Mayo",
        "suma_asp": 14,
        "suma_mts": 57,
        "suma_mas_ipsp": 722,
        "suma_mps": 55,
        "suma_v": 118,
        "suma_ucs": 19,
        "suma_jallallalp": 96,
        "suma_unidos": 28,
        "suma_pbcsp": 1475,
        "suma_panbol": 8,
        "suma_solbo": 75
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 10",
        "zona": "PURA PURA",
        "recinto": "Unidad Educativa Privada La Paz",
        "suma_asp": 3,
        "suma_mts": 3,
        "suma_mas_ipsp": 424,
        "suma_mps": 39,
        "suma_v": 6,
        "suma_ucs": 7,
        "suma_jallallalp": 88,
        "suma_unidos": 10,
        "suma_pbcsp": 588,
        "suma_panbol": 5,
        "suma_solbo": 18
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 10",
        "zona": "PURA PURA",
        "recinto": "Colegio Italia",
        "suma_asp": 18,
        "suma_mts": 45,
        "suma_mas_ipsp": 1962,
        "suma_mps": 101,
        "suma_v": 24,
        "suma_ucs": 33,
        "suma_jallallalp": 484,
        "suma_unidos": 29,
        "suma_pbcsp": 1582,
        "suma_panbol": 6,
        "suma_solbo": 82
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 10",
        "zona": "PURA PURA",
        "recinto": "Sede Social Pura Pura",
        "suma_asp": 6,
        "suma_mts": 8,
        "suma_mas_ipsp": 789,
        "suma_mps": 33,
        "suma_v": 4,
        "suma_ucs": 7,
        "suma_jallallalp": 104,
        "suma_unidos": 15,
        "suma_pbcsp": 906,
        "suma_panbol": 0,
        "suma_solbo": 47
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 10",
        "zona": "PURA PURA",
        "recinto": "Esc. Eduardo Avaroa",
        "suma_asp": 12,
        "suma_mts": 10,
        "suma_mas_ipsp": 993,
        "suma_mps": 60,
        "suma_v": 13,
        "suma_ucs": 18,
        "suma_jallallalp": 185,
        "suma_unidos": 37,
        "suma_pbcsp": 1386,
        "suma_panbol": 5,
        "suma_solbo": 49
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 7",
        "zona": "CHAMOCO CHICO",
        "recinto": "Col. San Martin",
        "suma_asp": 19,
        "suma_mts": 6,
        "suma_mas_ipsp": 542,
        "suma_mps": 29,
        "suma_v": 10,
        "suma_ucs": 15,
        "suma_jallallalp": 80,
        "suma_unidos": 17,
        "suma_pbcsp": 917,
        "suma_panbol": 3,
        "suma_solbo": 34
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 7",
        "zona": "GRAN PODER",
        "recinto": "C. E. Adventista Bello Horizonte",
        "suma_asp": 1,
        "suma_mts": 2,
        "suma_mas_ipsp": 93,
        "suma_mps": 4,
        "suma_v": 6,
        "suma_ucs": 1,
        "suma_jallallalp": 18,
        "suma_unidos": 3,
        "suma_pbcsp": 190,
        "suma_panbol": 1,
        "suma_solbo": 6
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 7",
        "zona": "LOS ANDES",
        "recinto": "Esc. Gral. Jose Manuel Pando",
        "suma_asp": 8,
        "suma_mts": 12,
        "suma_mas_ipsp": 768,
        "suma_mps": 38,
        "suma_v": 9,
        "suma_ucs": 17,
        "suma_jallallalp": 127,
        "suma_unidos": 13,
        "suma_pbcsp": 769,
        "suma_panbol": 1,
        "suma_solbo": 37
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 7",
        "zona": "OBISPO INDABURO",
        "recinto": "U.E. Jorge Cabrera (Temporal)",
        "suma_asp": 9,
        "suma_mts": 13,
        "suma_mas_ipsp": 1288,
        "suma_mps": 43,
        "suma_v": 9,
        "suma_ucs": 20,
        "suma_jallallalp": 276,
        "suma_unidos": 11,
        "suma_pbcsp": 758,
        "suma_panbol": 16,
        "suma_solbo": 31
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 7",
        "zona": "OBISPO INDABURO",
        "recinto": "Esc. Ladislao Cabrera",
        "suma_asp": 14,
        "suma_mts": 19,
        "suma_mas_ipsp": 1793,
        "suma_mps": 75,
        "suma_v": 23,
        "suma_ucs": 23,
        "suma_jallallalp": 331,
        "suma_unidos": 32,
        "suma_pbcsp": 1811,
        "suma_panbol": 17,
        "suma_solbo": 70
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 8",
        "zona": "CALLAMPAYA",
        "recinto": "Colegio Holanda",
        "suma_asp": 48,
        "suma_mts": 62,
        "suma_mas_ipsp": 4774,
        "suma_mps": 213,
        "suma_v": 44,
        "suma_ucs": 59,
        "suma_jallallalp": 1049,
        "suma_unidos": 71,
        "suma_pbcsp": 4036,
        "suma_panbol": 16,
        "suma_solbo": 153
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 8",
        "zona": "CALLAMPAYA",
        "recinto": "Colegio Max Toledo",
        "suma_asp": 22,
        "suma_mts": 39,
        "suma_mas_ipsp": 2228,
        "suma_mps": 116,
        "suma_v": 26,
        "suma_ucs": 35,
        "suma_jallallalp": 442,
        "suma_unidos": 65,
        "suma_pbcsp": 2734,
        "suma_panbol": 7,
        "suma_solbo": 105
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 8",
        "zona": "VILLA VICTORIA",
        "recinto": "Col. Franz Tamayo",
        "suma_asp": 13,
        "suma_mts": 21,
        "suma_mas_ipsp": 1226,
        "suma_mps": 52,
        "suma_v": 6,
        "suma_ucs": 21,
        "suma_jallallalp": 204,
        "suma_unidos": 44,
        "suma_pbcsp": 1746,
        "suma_panbol": 21,
        "suma_solbo": 66
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 8",
        "zona": "VILLA VICTORIA",
        "recinto": "U.E. Santa Maria Mazzarello(Temporal)",
        "suma_asp": 14,
        "suma_mts": 13,
        "suma_mas_ipsp": 907,
        "suma_mps": 43,
        "suma_v": 7,
        "suma_ucs": 11,
        "suma_jallallalp": 170,
        "suma_unidos": 15,
        "suma_pbcsp": 1331,
        "suma_panbol": 4,
        "suma_solbo": 60
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 9",
        "zona": "ALTO VILLA VICTORIA",
        "recinto": "Esc. Mscal. Antonio Jose De Sucre",
        "suma_asp": 3,
        "suma_mts": 2,
        "suma_mas_ipsp": 496,
        "suma_mps": 10,
        "suma_v": 5,
        "suma_ucs": 7,
        "suma_jallallalp": 41,
        "suma_unidos": 5,
        "suma_pbcsp": 120,
        "suma_panbol": 3,
        "suma_solbo": 9
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 9",
        "zona": "ALTO VILLA VICTORIA",
        "recinto": "Col. Luis Espinal Camps",
        "suma_asp": 22,
        "suma_mts": 47,
        "suma_mas_ipsp": 3302,
        "suma_mps": 109,
        "suma_v": 37,
        "suma_ucs": 61,
        "suma_jallallalp": 779,
        "suma_unidos": 38,
        "suma_pbcsp": 1714,
        "suma_panbol": 9,
        "suma_solbo": 162
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 9",
        "zona": "EL TEJAR",
        "recinto": "Esc. Club De Leones",
        "suma_asp": 27,
        "suma_mts": 49,
        "suma_mas_ipsp": 3158,
        "suma_mps": 155,
        "suma_v": 31,
        "suma_ucs": 61,
        "suma_jallallalp": 616,
        "suma_unidos": 56,
        "suma_pbcsp": 2965,
        "suma_panbol": 21,
        "suma_solbo": 130
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 9",
        "zona": "HUACATAQUI",
        "recinto": "U.E. Filadelfia",
        "suma_asp": 4,
        "suma_mts": 10,
        "suma_mas_ipsp": 474,
        "suma_mps": 27,
        "suma_v": 11,
        "suma_ucs": 8,
        "suma_jallallalp": 118,
        "suma_unidos": 2,
        "suma_pbcsp": 133,
        "suma_panbol": 1,
        "suma_solbo": 18
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 9",
        "zona": "LA PORTADA",
        "recinto": "U.E. Manuel Bernal Mariaca",
        "suma_asp": 7,
        "suma_mts": 20,
        "suma_mas_ipsp": 1035,
        "suma_mps": 53,
        "suma_v": 9,
        "suma_ucs": 7,
        "suma_jallallalp": 140,
        "suma_unidos": 28,
        "suma_pbcsp": 1509,
        "suma_panbol": 7,
        "suma_solbo": 59
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 9",
        "zona": "LA PORTADA",
        "recinto": "U.E. Copacabana (Fe y Alegria)",
        "suma_asp": 17,
        "suma_mts": 35,
        "suma_mas_ipsp": 2510,
        "suma_mps": 83,
        "suma_v": 33,
        "suma_ucs": 54,
        "suma_jallallalp": 631,
        "suma_unidos": 37,
        "suma_pbcsp": 1729,
        "suma_panbol": 7,
        "suma_solbo": 100
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 9",
        "zona": "LA PORTADA",
        "recinto": "U.E. Abraham Reyes (Fe y Alegria)",
        "suma_asp": 11,
        "suma_mts": 10,
        "suma_mas_ipsp": 953,
        "suma_mps": 34,
        "suma_v": 11,
        "suma_ucs": 16,
        "suma_jallallalp": 215,
        "suma_unidos": 12,
        "suma_pbcsp": 614,
        "suma_panbol": 1,
        "suma_solbo": 30
      },
      {
        "macro": "Max Paredes",
        "distrito": "Distrito 9",
        "zona": "RINCÓN LA PORTADA",
        "recinto": "Col. Marien Garten",
        "suma_asp": 19,
        "suma_mts": 44,
        "suma_mas_ipsp": 2065,
        "suma_mps": 80,
        "suma_v": 23,
        "suma_ucs": 26,
        "suma_jallallalp": 441,
        "suma_unidos": 43,
        "suma_pbcsp": 1880,
        "suma_panbol": 9,
        "suma_solbo": 94
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "ACHACHICALA",
        "recinto": "Esc. Educacional Luis  Ernest",
        "suma_asp": 16,
        "suma_mts": 6,
        "suma_mas_ipsp": 663,
        "suma_mps": 32,
        "suma_v": 7,
        "suma_ucs": 6,
        "suma_jallallalp": 106,
        "suma_unidos": 6,
        "suma_pbcsp": 1051,
        "suma_panbol": 7,
        "suma_solbo": 29
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "ACHACHICALA",
        "recinto": "Esc. Ind. Pedro Domingo Murillo",
        "suma_asp": 15,
        "suma_mts": 11,
        "suma_mas_ipsp": 1634,
        "suma_mps": 80,
        "suma_v": 6,
        "suma_ucs": 28,
        "suma_jallallalp": 215,
        "suma_unidos": 22,
        "suma_pbcsp": 2013,
        "suma_panbol": 3,
        "suma_solbo": 68
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "AGUA DE LA VIDA",
        "recinto": "Esc. Natalia Palacios",
        "suma_asp": 9,
        "suma_mts": 4,
        "suma_mas_ipsp": 507,
        "suma_mps": 34,
        "suma_v": 6,
        "suma_ucs": 9,
        "suma_jallallalp": 80,
        "suma_unidos": 26,
        "suma_pbcsp": 1515,
        "suma_panbol": 5,
        "suma_solbo": 77
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "CHALLAPAMPA",
        "recinto": "Colegio Francia",
        "suma_asp": 4,
        "suma_mts": 7,
        "suma_mas_ipsp": 586,
        "suma_mps": 23,
        "suma_v": 2,
        "suma_ucs": 3,
        "suma_jallallalp": 85,
        "suma_unidos": 8,
        "suma_pbcsp": 886,
        "suma_panbol": 7,
        "suma_solbo": 42
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "CHALLAPAMPA",
        "recinto": "Kinder Flora Perez De Saavedra",
        "suma_asp": 4,
        "suma_mts": 12,
        "suma_mas_ipsp": 548,
        "suma_mps": 40,
        "suma_v": 6,
        "suma_ucs": 6,
        "suma_jallallalp": 70,
        "suma_unidos": 12,
        "suma_pbcsp": 831,
        "suma_panbol": 1,
        "suma_solbo": 33
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "CHALLAPAMPA",
        "recinto": "Escuela Republica del Brasil",
        "suma_asp": 12,
        "suma_mts": 3,
        "suma_mas_ipsp": 610,
        "suma_mps": 41,
        "suma_v": 4,
        "suma_ucs": 7,
        "suma_jallallalp": 73,
        "suma_unidos": 18,
        "suma_pbcsp": 1292,
        "suma_panbol": 8,
        "suma_solbo": 42
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "LIMANIPATA",
        "recinto": "Esc. Limanipata 10 De Junio",
        "suma_asp": 3,
        "suma_mts": 5,
        "suma_mas_ipsp": 1237,
        "suma_mps": 37,
        "suma_v": 4,
        "suma_ucs": 17,
        "suma_jallallalp": 115,
        "suma_unidos": 9,
        "suma_pbcsp": 353,
        "suma_panbol": 0,
        "suma_solbo": 22
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "PLAN AUTOPISTA",
        "recinto": "Sede Social Plan Autopista",
        "suma_asp": 5,
        "suma_mts": 10,
        "suma_mas_ipsp": 763,
        "suma_mps": 28,
        "suma_v": 5,
        "suma_ucs": 8,
        "suma_jallallalp": 128,
        "suma_unidos": 14,
        "suma_pbcsp": 675,
        "suma_panbol": 0,
        "suma_solbo": 50
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "VILLA 18 DE MAYO",
        "recinto": "Esc. Abraham Lincoln",
        "suma_asp": 3,
        "suma_mts": 14,
        "suma_mas_ipsp": 1510,
        "suma_mps": 55,
        "suma_v": 11,
        "suma_ucs": 17,
        "suma_jallallalp": 190,
        "suma_unidos": 25,
        "suma_pbcsp": 1182,
        "suma_panbol": 7,
        "suma_solbo": 60
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "VILLA DE LA CRUZ",
        "recinto": "Esc. Sergio Suarez",
        "suma_asp": 26,
        "suma_mts": 18,
        "suma_mas_ipsp": 3253,
        "suma_mps": 101,
        "suma_v": 18,
        "suma_ucs": 43,
        "suma_jallallalp": 478,
        "suma_unidos": 42,
        "suma_pbcsp": 2366,
        "suma_panbol": 25,
        "suma_solbo": 126
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "VILLA PABÓN",
        "recinto": "Unidad Educativa Republica de China",
        "suma_asp": 8,
        "suma_mts": 8,
        "suma_mas_ipsp": 873,
        "suma_mps": 46,
        "suma_v": 5,
        "suma_ucs": 15,
        "suma_jallallalp": 126,
        "suma_unidos": 30,
        "suma_pbcsp": 1691,
        "suma_panbol": 1,
        "suma_solbo": 69
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "VINO TINTO",
        "recinto": "Esc. Nicolas  Fernandez Naranjo",
        "suma_asp": 27,
        "suma_mts": 31,
        "suma_mas_ipsp": 3687,
        "suma_mps": 110,
        "suma_v": 37,
        "suma_ucs": 44,
        "suma_jallallalp": 469,
        "suma_unidos": 57,
        "suma_pbcsp": 2963,
        "suma_panbol": 9,
        "suma_solbo": 159
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "VINO TINTO",
        "recinto": "Escuela John F. Kennedy",
        "suma_asp": 5,
        "suma_mts": 4,
        "suma_mas_ipsp": 400,
        "suma_mps": 10,
        "suma_v": 3,
        "suma_ucs": 5,
        "suma_jallallalp": 36,
        "suma_unidos": 7,
        "suma_pbcsp": 668,
        "suma_panbol": 0,
        "suma_solbo": 22
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "ZONA NORTE",
        "recinto": "Col. American School",
        "suma_asp": 8,
        "suma_mts": 5,
        "suma_mas_ipsp": 367,
        "suma_mps": 19,
        "suma_v": 3,
        "suma_ucs": 11,
        "suma_jallallalp": 81,
        "suma_unidos": 12,
        "suma_pbcsp": 924,
        "suma_panbol": 2,
        "suma_solbo": 37
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "ZONA NORTE",
        "recinto": "Liceo Tec. H. Nuestra Sra. De La Paz",
        "suma_asp": 6,
        "suma_mts": 4,
        "suma_mas_ipsp": 234,
        "suma_mps": 12,
        "suma_v": 4,
        "suma_ucs": 3,
        "suma_jallallalp": 33,
        "suma_unidos": 8,
        "suma_pbcsp": 509,
        "suma_panbol": 1,
        "suma_solbo": 17
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "ZONA NORTE",
        "recinto": "Colegio Antonio Diaz Villamil",
        "suma_asp": 17,
        "suma_mts": 9,
        "suma_mas_ipsp": 747,
        "suma_mps": 57,
        "suma_v": 6,
        "suma_ucs": 10,
        "suma_jallallalp": 117,
        "suma_unidos": 26,
        "suma_pbcsp": 1948,
        "suma_panbol": 12,
        "suma_solbo": 77
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 11",
        "zona": "ZONA NORTE",
        "recinto": "Colegio Luis Alberto Pabon",
        "suma_asp": 8,
        "suma_mts": 1,
        "suma_mas_ipsp": 406,
        "suma_mps": 26,
        "suma_v": 5,
        "suma_ucs": 3,
        "suma_jallallalp": 47,
        "suma_unidos": 11,
        "suma_pbcsp": 869,
        "suma_panbol": 1,
        "suma_solbo": 34
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 12",
        "zona": "27 DE MAYO",
        "recinto": "Colegio  Adolfo  Costa Du Rels",
        "suma_asp": 14,
        "suma_mts": 36,
        "suma_mas_ipsp": 4915,
        "suma_mps": 191,
        "suma_v": 39,
        "suma_ucs": 121,
        "suma_jallallalp": 804,
        "suma_unidos": 33,
        "suma_pbcsp": 2180,
        "suma_panbol": 39,
        "suma_solbo": 199
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 12",
        "zona": "MIRAFLORES ALTO",
        "recinto": "Esc. Alfredo Vargas",
        "suma_asp": 22,
        "suma_mts": 23,
        "suma_mas_ipsp": 1449,
        "suma_mps": 80,
        "suma_v": 19,
        "suma_ucs": 31,
        "suma_jallallalp": 203,
        "suma_unidos": 29,
        "suma_pbcsp": 2393,
        "suma_panbol": 8,
        "suma_solbo": 127
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 12",
        "zona": "SAN JUAN LAZARETO",
        "recinto": "U.E. Bicentenario",
        "suma_asp": 5,
        "suma_mts": 8,
        "suma_mas_ipsp": 547,
        "suma_mps": 30,
        "suma_v": 5,
        "suma_ucs": 13,
        "suma_jallallalp": 74,
        "suma_unidos": 10,
        "suma_pbcsp": 969,
        "suma_panbol": 8,
        "suma_solbo": 46
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 12",
        "zona": "SANTA ROSA",
        "recinto": "U.E. Santa Rosa Grande",
        "suma_asp": 1,
        "suma_mts": 0,
        "suma_mas_ipsp": 133,
        "suma_mps": 2,
        "suma_v": 4,
        "suma_ucs": 0,
        "suma_jallallalp": 22,
        "suma_unidos": 0,
        "suma_pbcsp": 108,
        "suma_panbol": 0,
        "suma_solbo": 3
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 13",
        "zona": "3 DE MAYO",
        "recinto": "Colegio Jerusalem",
        "suma_asp": 13,
        "suma_mts": 10,
        "suma_mas_ipsp": 1487,
        "suma_mps": 54,
        "suma_v": 11,
        "suma_ucs": 28,
        "suma_jallallalp": 161,
        "suma_unidos": 19,
        "suma_pbcsp": 1261,
        "suma_panbol": 8,
        "suma_solbo": 66
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 13",
        "zona": "BARRIO GRÁFICO",
        "recinto": "U.E. Ricardo José Bustamante",
        "suma_asp": 0,
        "suma_mts": 0,
        "suma_mas_ipsp": 39,
        "suma_mps": 2,
        "suma_v": 2,
        "suma_ucs": 0,
        "suma_jallallalp": 12,
        "suma_unidos": 0,
        "suma_pbcsp": 114,
        "suma_panbol": 1,
        "suma_solbo": 1
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 13",
        "zona": "CHUQUIAGUILLO",
        "recinto": "Esc. Pablo Iturri",
        "suma_asp": 22,
        "suma_mts": 24,
        "suma_mas_ipsp": 2944,
        "suma_mps": 83,
        "suma_v": 18,
        "suma_ucs": 42,
        "suma_jallallalp": 548,
        "suma_unidos": 36,
        "suma_pbcsp": 1318,
        "suma_panbol": 8,
        "suma_solbo": 87
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 13",
        "zona": "LA MERCED",
        "recinto": "Esc. La Merced",
        "suma_asp": 17,
        "suma_mts": 29,
        "suma_mas_ipsp": 3306,
        "suma_mps": 86,
        "suma_v": 32,
        "suma_ucs": 50,
        "suma_jallallalp": 639,
        "suma_unidos": 38,
        "suma_pbcsp": 2107,
        "suma_panbol": 19,
        "suma_solbo": 149
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 13",
        "zona": "LA MERCED",
        "recinto": "Colegio Ave Maria",
        "suma_asp": 20,
        "suma_mts": 28,
        "suma_mas_ipsp": 2646,
        "suma_mps": 115,
        "suma_v": 17,
        "suma_ucs": 44,
        "suma_jallallalp": 458,
        "suma_unidos": 34,
        "suma_pbcsp": 4376,
        "suma_panbol": 19,
        "suma_solbo": 230
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 13",
        "zona": "VILLA EL CARMEN",
        "recinto": "U. E. Andina",
        "suma_asp": 9,
        "suma_mts": 7,
        "suma_mas_ipsp": 641,
        "suma_mps": 35,
        "suma_v": 6,
        "suma_ucs": 19,
        "suma_jallallalp": 117,
        "suma_unidos": 9,
        "suma_pbcsp": 796,
        "suma_panbol": 4,
        "suma_solbo": 40
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 13",
        "zona": "VILLA EL CARMEN",
        "recinto": "Colegio Irene Nava",
        "suma_asp": 25,
        "suma_mts": 44,
        "suma_mas_ipsp": 2468,
        "suma_mps": 102,
        "suma_v": 32,
        "suma_ucs": 51,
        "suma_jallallalp": 502,
        "suma_unidos": 60,
        "suma_pbcsp": 2870,
        "suma_panbol": 19,
        "suma_solbo": 148
      },
      {
        "macro": "Periferica",
        "distrito": "Distrito 13",
        "zona": "VILLA FÁTIMA",
        "recinto": "Colegio Simon Rodriguez",
        "suma_asp": 11,
        "suma_mts": 16,
        "suma_mas_ipsp": 1554,
        "suma_mps": 52,
        "suma_v": 17,
        "suma_ucs": 31,
        "suma_jallallalp": 256,
        "suma_unidos": 22,
        "suma_pbcsp": 1840,
        "suma_panbol": 7,
        "suma_solbo": 91
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 14",
        "zona": "VALLE HERMOSO",
        "recinto": "Unidad Educativa Valle Hermoso",
        "suma_asp": 7,
        "suma_mts": 20,
        "suma_mas_ipsp": 1387,
        "suma_mps": 54,
        "suma_v": 8,
        "suma_ucs": 11,
        "suma_jallallalp": 191,
        "suma_unidos": 20,
        "suma_pbcsp": 1155,
        "suma_panbol": 3,
        "suma_solbo": 62
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 14",
        "zona": "VILLA COPACABANA",
        "recinto": "Unidad Educativa Cristiana Vida Nueva",
        "suma_asp": 16,
        "suma_mts": 4,
        "suma_mas_ipsp": 789,
        "suma_mps": 44,
        "suma_v": 7,
        "suma_ucs": 10,
        "suma_jallallalp": 106,
        "suma_unidos": 18,
        "suma_pbcsp": 1566,
        "suma_panbol": 5,
        "suma_solbo": 69
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 14",
        "zona": "VILLA COPACABANA",
        "recinto": "Escuela 6 de Agosto",
        "suma_asp": 8,
        "suma_mts": 7,
        "suma_mas_ipsp": 550,
        "suma_mps": 35,
        "suma_v": 6,
        "suma_ucs": 13,
        "suma_jallallalp": 64,
        "suma_unidos": 14,
        "suma_pbcsp": 1287,
        "suma_panbol": 6,
        "suma_solbo": 67
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 14",
        "zona": "VILLA COPACABANA",
        "recinto": "Col. Copacabana",
        "suma_asp": 24,
        "suma_mts": 20,
        "suma_mas_ipsp": 1890,
        "suma_mps": 94,
        "suma_v": 12,
        "suma_ucs": 28,
        "suma_jallallalp": 245,
        "suma_unidos": 39,
        "suma_pbcsp": 3182,
        "suma_panbol": 8,
        "suma_solbo": 191
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 15",
        "zona": "ESCOBAR URÍA",
        "recinto": "Col. Caracas",
        "suma_asp": 9,
        "suma_mts": 6,
        "suma_mas_ipsp": 1054,
        "suma_mps": 31,
        "suma_v": 7,
        "suma_ucs": 31,
        "suma_jallallalp": 132,
        "suma_unidos": 19,
        "suma_pbcsp": 694,
        "suma_panbol": 5,
        "suma_solbo": 31
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 15",
        "zona": "SAN ANTONIO",
        "recinto": "Sindicato Mixto de Transporte Simón Bolivar",
        "suma_asp": 9,
        "suma_mts": 5,
        "suma_mas_ipsp": 540,
        "suma_mps": 23,
        "suma_v": 7,
        "suma_ucs": 16,
        "suma_jallallalp": 69,
        "suma_unidos": 7,
        "suma_pbcsp": 600,
        "suma_panbol": 2,
        "suma_solbo": 36
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 15",
        "zona": "SAN ANTONIO",
        "recinto": "Esc. Genoveva Rios",
        "suma_asp": 12,
        "suma_mts": 30,
        "suma_mas_ipsp": 2210,
        "suma_mps": 103,
        "suma_v": 14,
        "suma_ucs": 45,
        "suma_jallallalp": 264,
        "suma_unidos": 34,
        "suma_pbcsp": 2261,
        "suma_panbol": 7,
        "suma_solbo": 152
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 15",
        "zona": "SAN ANTONIO",
        "recinto": "U.E. Carlos Salinas",
        "suma_asp": 2,
        "suma_mts": 1,
        "suma_mas_ipsp": 128,
        "suma_mps": 9,
        "suma_v": 2,
        "suma_ucs": 5,
        "suma_jallallalp": 12,
        "suma_unidos": 4,
        "suma_pbcsp": 271,
        "suma_panbol": 0,
        "suma_solbo": 19
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 15",
        "zona": "SAN ANTONIO",
        "recinto": "Col. Sergio Almaraz",
        "suma_asp": 29,
        "suma_mts": 10,
        "suma_mas_ipsp": 1362,
        "suma_mps": 63,
        "suma_v": 8,
        "suma_ucs": 18,
        "suma_jallallalp": 178,
        "suma_unidos": 30,
        "suma_pbcsp": 2043,
        "suma_panbol": 10,
        "suma_solbo": 127
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 15",
        "zona": "SAN ANTONIO",
        "recinto": "Esc. San Martin",
        "suma_asp": 24,
        "suma_mts": 13,
        "suma_mas_ipsp": 1859,
        "suma_mps": 111,
        "suma_v": 15,
        "suma_ucs": 39,
        "suma_jallallalp": 213,
        "suma_unidos": 45,
        "suma_pbcsp": 3620,
        "suma_panbol": 13,
        "suma_solbo": 131
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 16",
        "zona": "CHINCHAYA",
        "recinto": "Escuela 13 de Junio Chinchaya",
        "suma_asp": 1,
        "suma_mts": 3,
        "suma_mas_ipsp": 426,
        "suma_mps": 24,
        "suma_v": 1,
        "suma_ucs": 5,
        "suma_jallallalp": 42,
        "suma_unidos": 3,
        "suma_pbcsp": 133,
        "suma_panbol": 6,
        "suma_solbo": 15
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 16",
        "zona": "PAMPAHASI",
        "recinto": "Unidad Educativa 24 de Junio",
        "suma_asp": 19,
        "suma_mts": 18,
        "suma_mas_ipsp": 2661,
        "suma_mps": 107,
        "suma_v": 13,
        "suma_ucs": 60,
        "suma_jallallalp": 301,
        "suma_unidos": 38,
        "suma_pbcsp": 2355,
        "suma_panbol": 11,
        "suma_solbo": 140
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 16",
        "zona": "PAMPAHASI",
        "recinto": "U.E. San Jose II (Temporal)",
        "suma_asp": 4,
        "suma_mts": 11,
        "suma_mas_ipsp": 799,
        "suma_mps": 34,
        "suma_v": 6,
        "suma_ucs": 6,
        "suma_jallallalp": 123,
        "suma_unidos": 11,
        "suma_pbcsp": 1060,
        "suma_panbol": 3,
        "suma_solbo": 60
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 16",
        "zona": "PAMPAHASI",
        "recinto": "Colegio Delia Gambarte",
        "suma_asp": 9,
        "suma_mts": 13,
        "suma_mas_ipsp": 813,
        "suma_mps": 27,
        "suma_v": 8,
        "suma_ucs": 21,
        "suma_jallallalp": 124,
        "suma_unidos": 15,
        "suma_pbcsp": 586,
        "suma_panbol": 1,
        "suma_solbo": 44
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 16",
        "zona": "PAMPAHASI",
        "recinto": "Colegio Topater",
        "suma_asp": 12,
        "suma_mts": 10,
        "suma_mas_ipsp": 1674,
        "suma_mps": 78,
        "suma_v": 10,
        "suma_ucs": 42,
        "suma_jallallalp": 193,
        "suma_unidos": 22,
        "suma_pbcsp": 1217,
        "suma_panbol": 8,
        "suma_solbo": 78
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 16",
        "zona": "VILLA SALOMÉ",
        "recinto": "Escuela Ciudad Del Niño",
        "suma_asp": 6,
        "suma_mts": 7,
        "suma_mas_ipsp": 1084,
        "suma_mps": 50,
        "suma_v": 6,
        "suma_ucs": 16,
        "suma_jallallalp": 145,
        "suma_unidos": 20,
        "suma_pbcsp": 1096,
        "suma_panbol": 3,
        "suma_solbo": 62
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 17",
        "zona": "CALLAPA",
        "recinto": "Escuela Callapa (Plaza De Callapa)",
        "suma_asp": 2,
        "suma_mts": 4,
        "suma_mas_ipsp": 989,
        "suma_mps": 26,
        "suma_v": 11,
        "suma_ucs": 15,
        "suma_jallallalp": 123,
        "suma_unidos": 18,
        "suma_pbcsp": 419,
        "suma_panbol": 0,
        "suma_solbo": 36
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 17",
        "zona": "CUARTO CENTENARIO",
        "recinto": "Escuela Pedro Poveda",
        "suma_asp": 14,
        "suma_mts": 16,
        "suma_mas_ipsp": 1144,
        "suma_mps": 45,
        "suma_v": 9,
        "suma_ucs": 12,
        "suma_jallallalp": 158,
        "suma_unidos": 20,
        "suma_pbcsp": 1696,
        "suma_panbol": 4,
        "suma_solbo": 90
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 17",
        "zona": "KUPINI",
        "recinto": "Colegio Sergio Villegas",
        "suma_asp": 21,
        "suma_mts": 20,
        "suma_mas_ipsp": 2328,
        "suma_mps": 70,
        "suma_v": 20,
        "suma_ucs": 30,
        "suma_jallallalp": 267,
        "suma_unidos": 22,
        "suma_pbcsp": 1724,
        "suma_panbol": 10,
        "suma_solbo": 86
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 17",
        "zona": "VILLA ARMONÍA",
        "recinto": "Polifuncional San Isidro (Iglesia San Isidro)",
        "suma_asp": 3,
        "suma_mts": 5,
        "suma_mas_ipsp": 529,
        "suma_mps": 13,
        "suma_v": 4,
        "suma_ucs": 9,
        "suma_jallallalp": 67,
        "suma_unidos": 5,
        "suma_pbcsp": 739,
        "suma_panbol": 4,
        "suma_solbo": 43
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 17",
        "zona": "VILLA ARMONÍA",
        "recinto": "U.E. Waldo Ballivian",
        "suma_asp": 20,
        "suma_mts": 21,
        "suma_mas_ipsp": 1600,
        "suma_mps": 67,
        "suma_v": 10,
        "suma_ucs": 31,
        "suma_jallallalp": 230,
        "suma_unidos": 35,
        "suma_pbcsp": 2523,
        "suma_panbol": 10,
        "suma_solbo": 131
      },
      {
        "macro": "San Antonio",
        "distrito": "Distrito 17",
        "zona": "VILLA ARMONÍA",
        "recinto": "Colegio Rene Barrientos",
        "suma_asp": 33,
        "suma_mts": 3,
        "suma_mas_ipsp": 467,
        "suma_mps": 39,
        "suma_v": 3,
        "suma_ucs": 6,
        "suma_jallallalp": 45,
        "suma_unidos": 17,
        "suma_pbcsp": 1964,
        "suma_panbol": 2,
        "suma_solbo": 106
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 18",
        "zona": "ALTO ACHUMANI",
        "recinto": "Escuela Alto Achumani",
        "suma_asp": 39,
        "suma_mts": 11,
        "suma_mas_ipsp": 2523,
        "suma_mps": 87,
        "suma_v": 23,
        "suma_ucs": 34,
        "suma_jallallalp": 255,
        "suma_unidos": 33,
        "suma_pbcsp": 4178,
        "suma_panbol": 0,
        "suma_solbo": 264
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 18",
        "zona": "ALTO IRPAVI",
        "recinto": "Escuela Victor Paz Estensoro",
        "suma_asp": 15,
        "suma_mts": 37,
        "suma_mas_ipsp": 1354,
        "suma_mps": 56,
        "suma_v": 9,
        "suma_ucs": 14,
        "suma_jallallalp": 143,
        "suma_unidos": 20,
        "suma_pbcsp": 1642,
        "suma_panbol": 4,
        "suma_solbo": 63
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 18",
        "zona": "CALACOTO",
        "recinto": "Instituto Domingo Savio",
        "suma_asp": 14,
        "suma_mts": 6,
        "suma_mas_ipsp": 413,
        "suma_mps": 37,
        "suma_v": 12,
        "suma_ucs": 15,
        "suma_jallallalp": 56,
        "suma_unidos": 14,
        "suma_pbcsp": 1380,
        "suma_panbol": 2,
        "suma_solbo": 72
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 18",
        "zona": "CALACOTO",
        "recinto": "U.E. Cesar Patiño",
        "suma_asp": 7,
        "suma_mts": 0,
        "suma_mas_ipsp": 123,
        "suma_mps": 4,
        "suma_v": 1,
        "suma_ucs": 1,
        "suma_jallallalp": 11,
        "suma_unidos": 0,
        "suma_pbcsp": 429,
        "suma_panbol": 0,
        "suma_solbo": 23
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 18",
        "zona": "COTA COTA",
        "recinto": "U.E. San Andrés",
        "suma_asp": 19,
        "suma_mts": 2,
        "suma_mas_ipsp": 425,
        "suma_mps": 29,
        "suma_v": 5,
        "suma_ucs": 6,
        "suma_jallallalp": 38,
        "suma_unidos": 8,
        "suma_pbcsp": 1293,
        "suma_panbol": 0,
        "suma_solbo": 67
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 18",
        "zona": "COTA COTA",
        "recinto": "Esc. Walter Straub",
        "suma_asp": 21,
        "suma_mts": 8,
        "suma_mas_ipsp": 1576,
        "suma_mps": 66,
        "suma_v": 15,
        "suma_ucs": 18,
        "suma_jallallalp": 125,
        "suma_unidos": 25,
        "suma_pbcsp": 2817,
        "suma_panbol": 6,
        "suma_solbo": 156
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 18",
        "zona": "IRPAVI",
        "recinto": "Escuela Rosemari de Barrientos",
        "suma_asp": 47,
        "suma_mts": 12,
        "suma_mas_ipsp": 1560,
        "suma_mps": 101,
        "suma_v": 21,
        "suma_ucs": 29,
        "suma_jallallalp": 180,
        "suma_unidos": 61,
        "suma_pbcsp": 6063,
        "suma_panbol": 4,
        "suma_solbo": 257
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 18",
        "zona": "LA FLORIDA",
        "recinto": "Escuela Santa Rosa La Florida",
        "suma_asp": 23,
        "suma_mts": 6,
        "suma_mas_ipsp": 904,
        "suma_mps": 32,
        "suma_v": 8,
        "suma_ucs": 25,
        "suma_jallallalp": 98,
        "suma_unidos": 26,
        "suma_pbcsp": 1980,
        "suma_panbol": 4,
        "suma_solbo": 72
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 18",
        "zona": "LOS PINOS",
        "recinto": "Unidad Educativa Los Pinos",
        "suma_asp": 47,
        "suma_mts": 3,
        "suma_mas_ipsp": 539,
        "suma_mps": 63,
        "suma_v": 6,
        "suma_ucs": 13,
        "suma_jallallalp": 47,
        "suma_unidos": 18,
        "suma_pbcsp": 3406,
        "suma_panbol": 1,
        "suma_solbo": 239
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 18",
        "zona": "LOS ROSALES",
        "recinto": "Sede Social de Cusicancha",
        "suma_asp": 2,
        "suma_mts": 14,
        "suma_mas_ipsp": 532,
        "suma_mps": 21,
        "suma_v": 10,
        "suma_ucs": 14,
        "suma_jallallalp": 182,
        "suma_unidos": 10,
        "suma_pbcsp": 295,
        "suma_panbol": 8,
        "suma_solbo": 22
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 18",
        "zona": "MESETA ACHUMANI",
        "recinto": "Colegio Franco Boliviano",
        "suma_asp": 63,
        "suma_mts": 16,
        "suma_mas_ipsp": 1582,
        "suma_mps": 91,
        "suma_v": 22,
        "suma_ucs": 31,
        "suma_jallallalp": 125,
        "suma_unidos": 37,
        "suma_pbcsp": 5733,
        "suma_panbol": 3,
        "suma_solbo": 381
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 18",
        "zona": "SAN MIGUEL",
        "recinto": "Col. Loretto",
        "suma_asp": 24,
        "suma_mts": 0,
        "suma_mas_ipsp": 307,
        "suma_mps": 26,
        "suma_v": 9,
        "suma_ucs": 4,
        "suma_jallallalp": 30,
        "suma_unidos": 20,
        "suma_pbcsp": 1918,
        "suma_panbol": 0,
        "suma_solbo": 109
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 19",
        "zona": " ",
        "recinto": "Unid. Educ. Joaquin Hernann",
        "suma_asp": 5,
        "suma_mts": 5,
        "suma_mas_ipsp": 1033,
        "suma_mps": 15,
        "suma_v": 8,
        "suma_ucs": 16,
        "suma_jallallalp": 95,
        "suma_unidos": 3,
        "suma_pbcsp": 137,
        "suma_panbol": 2,
        "suma_solbo": 7
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 19",
        "zona": "CASEGURAL",
        "recinto": "U.E. Jacha Uru",
        "suma_asp": 4,
        "suma_mts": 3,
        "suma_mas_ipsp": 1051,
        "suma_mps": 15,
        "suma_v": 8,
        "suma_ucs": 6,
        "suma_jallallalp": 116,
        "suma_unidos": 8,
        "suma_pbcsp": 300,
        "suma_panbol": 0,
        "suma_solbo": 18
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 19",
        "zona": "CHASQUIPAMPA",
        "recinto": "Escuela Chasquipampa",
        "suma_asp": 45,
        "suma_mts": 24,
        "suma_mas_ipsp": 3960,
        "suma_mps": 104,
        "suma_v": 12,
        "suma_ucs": 39,
        "suma_jallallalp": 368,
        "suma_unidos": 40,
        "suma_pbcsp": 2039,
        "suma_panbol": 13,
        "suma_solbo": 108
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 19",
        "zona": "CHASQUIPAMPA",
        "recinto": "U.E. Bolivian High School",
        "suma_asp": 7,
        "suma_mts": 5,
        "suma_mas_ipsp": 770,
        "suma_mps": 19,
        "suma_v": 5,
        "suma_ucs": 7,
        "suma_jallallalp": 79,
        "suma_unidos": 10,
        "suma_pbcsp": 624,
        "suma_panbol": 4,
        "suma_solbo": 40
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 19",
        "zona": "COQUENI",
        "recinto": "U.E. LYNNS (Temporal)",
        "suma_asp": 11,
        "suma_mts": 5,
        "suma_mas_ipsp": 1438,
        "suma_mps": 40,
        "suma_v": 7,
        "suma_ucs": 14,
        "suma_jallallalp": 131,
        "suma_unidos": 9,
        "suma_pbcsp": 784,
        "suma_panbol": 2,
        "suma_solbo": 59
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 19",
        "zona": "LOS ROSALES ALTO CALACOTO",
        "recinto": "U.E. Betesta",
        "suma_asp": 10,
        "suma_mts": 12,
        "suma_mas_ipsp": 1714,
        "suma_mps": 50,
        "suma_v": 12,
        "suma_ucs": 28,
        "suma_jallallalp": 142,
        "suma_unidos": 15,
        "suma_pbcsp": 840,
        "suma_panbol": 4,
        "suma_solbo": 45
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 19",
        "zona": "OVEJUYO",
        "recinto": "Esc. Santa Rosa De Lima",
        "suma_asp": 7,
        "suma_mts": 13,
        "suma_mas_ipsp": 3165,
        "suma_mps": 61,
        "suma_v": 17,
        "suma_ucs": 41,
        "suma_jallallalp": 285,
        "suma_unidos": 19,
        "suma_pbcsp": 766,
        "suma_panbol": 4,
        "suma_solbo": 51
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 19",
        "zona": "PEDREGAL",
        "recinto": "U.E. El Pedregal (Urb. Pedregal)",
        "suma_asp": 15,
        "suma_mts": 5,
        "suma_mas_ipsp": 968,
        "suma_mps": 33,
        "suma_v": 3,
        "suma_ucs": 8,
        "suma_jallallalp": 91,
        "suma_unidos": 19,
        "suma_pbcsp": 514,
        "suma_panbol": 2,
        "suma_solbo": 34
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 21",
        "zona": "ALTO OBRAJES",
        "recinto": "Escuela Superior de Formación de Maestros Simon Bolivar",
        "suma_asp": 10,
        "suma_mts": 13,
        "suma_mas_ipsp": 750,
        "suma_mps": 49,
        "suma_v": 3,
        "suma_ucs": 7,
        "suma_jallallalp": 69,
        "suma_unidos": 18,
        "suma_pbcsp": 1668,
        "suma_panbol": 2,
        "suma_solbo": 63
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 21",
        "zona": "ALTO OBRAJES",
        "recinto": "Colegio 6 de Junio",
        "suma_asp": 35,
        "suma_mts": 15,
        "suma_mas_ipsp": 1670,
        "suma_mps": 108,
        "suma_v": 13,
        "suma_ucs": 24,
        "suma_jallallalp": 153,
        "suma_unidos": 44,
        "suma_pbcsp": 4081,
        "suma_panbol": 9,
        "suma_solbo": 233
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 21",
        "zona": "ALTO OBRAJES",
        "recinto": "U.E. Gran Bretaña",
        "suma_asp": 9,
        "suma_mts": 1,
        "suma_mas_ipsp": 314,
        "suma_mps": 6,
        "suma_v": 4,
        "suma_ucs": 5,
        "suma_jallallalp": 33,
        "suma_unidos": 5,
        "suma_pbcsp": 636,
        "suma_panbol": 3,
        "suma_solbo": 36
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 21",
        "zona": "ALTO SEGUENCOMA",
        "recinto": "Escuela Juan Pablo II",
        "suma_asp": 16,
        "suma_mts": 2,
        "suma_mas_ipsp": 619,
        "suma_mps": 43,
        "suma_v": 5,
        "suma_ucs": 5,
        "suma_jallallalp": 43,
        "suma_unidos": 15,
        "suma_pbcsp": 1847,
        "suma_panbol": 2,
        "suma_solbo": 96
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 21",
        "zona": "BAJO LLOJETA",
        "recinto": "Unidad Educativa Rosario (Urb. El Rosario)",
        "suma_asp": 6,
        "suma_mts": 5,
        "suma_mas_ipsp": 490,
        "suma_mps": 13,
        "suma_v": 4,
        "suma_ucs": 10,
        "suma_jallallalp": 49,
        "suma_unidos": 16,
        "suma_pbcsp": 611,
        "suma_panbol": 0,
        "suma_solbo": 29
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 21",
        "zona": "BELLA VISTA",
        "recinto": "Esc. Francisco De Miranda",
        "suma_asp": 15,
        "suma_mts": 18,
        "suma_mas_ipsp": 2245,
        "suma_mps": 52,
        "suma_v": 11,
        "suma_ucs": 21,
        "suma_jallallalp": 288,
        "suma_unidos": 32,
        "suma_pbcsp": 1547,
        "suma_panbol": 11,
        "suma_solbo": 96
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 21",
        "zona": "BOLOGNIA",
        "recinto": "U. E. Ff. Aa. De La Nación",
        "suma_asp": 22,
        "suma_mts": 9,
        "suma_mas_ipsp": 1121,
        "suma_mps": 76,
        "suma_v": 9,
        "suma_ucs": 13,
        "suma_jallallalp": 115,
        "suma_unidos": 16,
        "suma_pbcsp": 1531,
        "suma_panbol": 5,
        "suma_solbo": 75
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 21",
        "zona": "OBRAJES",
        "recinto": "Col. Herschell",
        "suma_asp": 30,
        "suma_mts": 3,
        "suma_mas_ipsp": 980,
        "suma_mps": 54,
        "suma_v": 10,
        "suma_ucs": 13,
        "suma_jallallalp": 105,
        "suma_unidos": 27,
        "suma_pbcsp": 2791,
        "suma_panbol": 8,
        "suma_solbo": 158
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 21",
        "zona": "OBRAJES",
        "recinto": "Colegio Nuestra Señora de Fatima",
        "suma_asp": 8,
        "suma_mts": 9,
        "suma_mas_ipsp": 892,
        "suma_mps": 47,
        "suma_v": 7,
        "suma_ucs": 10,
        "suma_jallallalp": 139,
        "suma_unidos": 19,
        "suma_pbcsp": 1051,
        "suma_panbol": 5,
        "suma_solbo": 49
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 21",
        "zona": "OBRAJES",
        "recinto": "(Cárcel) C.O.F. Obrajes",
        "suma_asp": 0,
        "suma_mts": 1,
        "suma_mas_ipsp": 35,
        "suma_mps": 3,
        "suma_v": 1,
        "suma_ucs": 2,
        "suma_jallallalp": 13,
        "suma_unidos": 0,
        "suma_pbcsp": 67,
        "suma_panbol": 0,
        "suma_solbo": 4
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 21",
        "zona": "OBRAJES",
        "recinto": "Instituto Americano Obrajes",
        "suma_asp": 29,
        "suma_mts": 4,
        "suma_mas_ipsp": 762,
        "suma_mps": 67,
        "suma_v": 11,
        "suma_ucs": 10,
        "suma_jallallalp": 76,
        "suma_unidos": 23,
        "suma_pbcsp": 2894,
        "suma_panbol": 8,
        "suma_solbo": 163
      },
      {
        "macro": "Sur",
        "distrito": "Distrito 21",
        "zona": "SEGUENCOMA BAJO",
        "recinto": "Colegio San Ignacio",
        "suma_asp": 22,
        "suma_mts": 13,
        "suma_mas_ipsp": 524,
        "suma_mps": 57,
        "suma_v": 8,
        "suma_ucs": 15,
        "suma_jallallalp": 102,
        "suma_unidos": 10,
        "suma_pbcsp": 1717,
        "suma_panbol": 3,
        "suma_solbo": 72
      }
    ]
  }
  groupByProperties = (data: any) => {
    const macros: any = [];

    data.forEach((item: any) => {
      // Encontramos o creamos la entrada para el macro
      let macro = macros.find((m: any) => m.macro === item.macro);
      if (!macro) {
        macro = { macro: item.macro, distritos: [] };
        macros.push(macro);
      }

      // Encontramos o creamos la entrada para el distrito
      let distrito = macro.distritos.find((d: any) => d.distrito === item.distrito);
      if (!distrito) {
        distrito = { distrito: item.distrito, zonas: [] };
        macro.distritos.push(distrito);
      }

      // Encontramos o creamos la entrada para la zona
      let zona = distrito.zonas.find((z: any) => z.zona === item.zona);
      if (!zona) {
        zona = { zona: item.zona, recintos: [] };
        distrito.zonas.push(zona);
      }

      // Encontramos o creamos la entrada para el recinto
      let recinto = zona.recintos.find((r: any) => r.recinto === item.recinto);
      if (!recinto) {
        recinto = { recinto: item.recinto, datos: [] };
        zona.recintos.push(recinto);
      }

      // Agregamos el dato al recinto
      recinto.datos.push({ "partido": "ASP", "votos": item.suma_asp });
      recinto.datos.push({ "partido": "MTS", "votos": item.suma_mts });
      recinto.datos.push({ "partido": "MAS-IPSP", "votos": item.suma_mas_ipsp });
      recinto.datos.push({ "partido": "MPS", "votos": item.suma_mps });
      recinto.datos.push({ "partido": "V", "votos": item.suma_v });
      recinto.datos.push({ "partido": "UCS", "votos": item.suma_ucs });
      recinto.datos.push({ "partido": "J.A. LLALLA.L.P.", "votos": item.suma_jallallalp });
      recinto.datos.push({ "partido": "UNIDOS", "votos": item.suma_unidos });
      recinto.datos.push({ "partido": "PBCSP", "votos": item.suma_pbcsp });
      recinto.datos.push({ "partido": "PAN-BOL", "votos": item.suma_panbol });
      recinto.datos.push({ "partido": "SOL.BO", "votos": item.suma_solbo });

    });

    return macros;
  };

  seleccionarMacro() {
    console.log(this.macroSelected)
    const dataTotalesMacro = this.getDataPieTotalesMacro(this.macroSelected, this.dataGeneral)
    this.graficoTotales('chartPieTotalesMacro', dataTotalesMacro)

    const dataTotalesDistrito = this.getDataDistritos(this.macroSelected, this.dataGeneral)
    this.graficoDistritos('chartBarDistritos', dataTotalesDistrito)
  }

  getDataPieTotalesMacro(macrodistrito: string, dataOrigen: any) {
    // {
    //   category: "Lithuania",
    //   value: 501.9
    // }

    let p_asp = 0;
    let p_mts = 0;
    let p_mas_ipsp = 0;
    let p_mps = 0;
    let p_v = 0;
    let p_ucs = 0;
    let p_jallalla = 0;
    let p_unidos = 0;
    let p_pbcsp = 0;
    let p_panbol = 0;
    let p_solbo = 0;

    dataOrigen.forEach((macro: any) => {
      //console.log(macro);
      if (macro.macro == macrodistrito) {
        macro.distritos.forEach((distrito: any) => {
          //console.log(distrito);
          distrito.zonas.forEach((zona: any) => {
            //console.log(zona);
            zona.recintos.forEach((recinto: any) => {
              //console.log(recinto);
              recinto.datos.forEach((dato: any) => {
                //console.log(dato);
                switch (dato.partido) {
                  case "ASP":
                    p_asp = p_asp + dato.votos
                    break;
                  case "MTS":
                    p_mts = p_mts + dato.votos
                    break;
                  case "MAS-IPSP":
                    p_mas_ipsp = p_mas_ipsp + dato.votos
                    break;
                  case "MPS":
                    p_mps = p_mps + dato.votos
                    break;
                  case "V":
                    p_v = p_v + dato.votos
                    break;
                  case "UCS":
                    p_ucs = p_ucs + dato.votos
                    break;
                  case "J.A. LLALLA.L.P.":
                    p_jallalla = p_jallalla + dato.votos
                    break;
                  case "UNIDOS":
                    p_unidos = p_unidos + dato.votos
                    break;
                  case "PBCSP":
                    p_pbcsp = p_pbcsp + dato.votos
                    break;
                  case "PAN-BOL":
                    p_panbol = p_panbol + dato.votos
                    break;
                  case "SOL.BO":
                    p_solbo = p_solbo + dato.votos
                    break;
                }
              })
            })
          })
        })
      }

    })

    return [
      {
        "category": "ASP",
        "value": p_asp
      },

      {
        "category": "MTS",
        "value": p_mts
      },
      {
        "category": "MAS-IPSP",
        "value": p_mas_ipsp
      },
      {
        "category": "MPS",
        "value": p_mps
      },
      {
        "category": "V",
        "value": p_v
      },
      {
        "category": "UCS",
        "value": p_ucs
      },
      {
        "category": "J.A. LLALLA.L.P.",
        "value": p_jallalla
      },
      {
        "category": "UNIDOS",
        "value": p_unidos
      },
      {
        "category": "PBCSP",
        "value": p_pbcsp
      },
      {
        "category": "PAN-BOL",
        "value": p_panbol
      },
      {
        "category": "SOL.BO",
        "value": p_solbo
      }

    ]

  }
  getDataDistritos(macrodistrito: any, dataOrigen: any) {
    // {"year": "2021",
    //   "europe": 2.5,
    //   "namerica": 2.5,
    //   "asia": 2.1,
    //   "lamerica": 1,
    //   "meast": 0.8,
    //   "africa": 0.4
    // } 

    let p_asp = 0;
    let p_mts = 0;
    let p_mas_ipsp = 0;
    let p_mps = 0;
    let p_v = 0;
    let p_ucs = 0;
    let p_jallalla = 0;
    let p_unidos = 0;
    let p_pbcsp = 0;
    let p_panbol = 0;
    let p_solbo = 0;

    let res: any = []

    dataOrigen.forEach((macro: any) => {
      //console.log(macro);
      if (macro.macro == macrodistrito) {
        macro.distritos.forEach((distrito: any) => {
          console.log("...", distrito);
          distrito.zonas.forEach((zona: any) => {
            //console.log(zona);
            zona.recintos.forEach((recinto: any) => {
              //console.log(recinto);
              recinto.datos.forEach((dato: any) => {
                //console.log(dato);
                switch (dato.partido) {
                  case "ASP":
                    p_asp = p_asp + dato.votos
                    break;
                  case "MTS":
                    p_mts = p_mts + dato.votos
                    break;
                  case "MAS-IPSP":
                    p_mas_ipsp = p_mas_ipsp + dato.votos
                    break;
                  case "MPS":
                    p_mps = p_mps + dato.votos
                    break;
                  case "V":
                    p_v = p_v + dato.votos
                    break;
                  case "UCS":
                    p_ucs = p_ucs + dato.votos
                    break;
                  case "J.A. LLALLA.L.P.":
                    p_jallalla = p_jallalla + dato.votos
                    break;
                  case "UNIDOS":
                    p_unidos = p_unidos + dato.votos
                    break;
                  case "PBCSP":
                    p_pbcsp = p_pbcsp + dato.votos
                    break;
                  case "PAN-BOL":
                    p_panbol = p_panbol + dato.votos
                    break;
                  case "SOL.BO":
                    p_solbo = p_solbo + dato.votos
                    break;
                }
              })
            })
          })

          res.push(
            {
              "year": distrito.distrito,
              "PBCSP": p_pbcsp,
              "MAS-IPSP": p_mas_ipsp,
              "J.A. LLALLA.L.P.": p_jallalla,
              "SOL.BO": p_solbo,
              "MPS": p_mps,
              "UNIDOS": p_unidos,
              "UCS": p_ucs,
              "ASP": p_asp,
              "MTS": p_mts,
              "V": p_v,
              "PAN-BOL": p_panbol
            })
        })
      }

    })

    return res
  }

  graficoTotales(idChart: string, data: any) {

    if (this.listaChart[idChart]) {   //check if exist chart dispose that
      this.listaChart[idChart].dispose()
    }

    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("chartdivPieMacro");
    root.locale = am5locales_es_ES;
    root._logo!.dispose();
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Dark.new(root)
    ]);



    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    let chart = root.container.children.push(am5p.PieChart.new(root, {
      layout: root.verticalLayout
    }));


    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    let series = chart.series.push(am5p.PieSeries.new(root, {
      valueField: "value",
      categoryField: "category"
    }));


    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll(data);

    series.slices.template.set("tooltipText", "{category}: [bold]{valuePercentTotal.formatNumber('0.00')}%[/] (Votos: {value})");
    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    let legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      marginTop: 15,
      marginBottom: 15
    }));

    legend.data.setAll(series.dataItems);


    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);

    this.listaChart[idChart] = root
  }
  graficoDistritos___(idChart: string, data: any) {

    if (this.listaChart[idChart]) {   //check if exist chart dispose that
      this.listaChart[idChart].dispose()
    }

    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("chartdivBarDistrito");
    root.locale = am5locales_es_ES;
    root._logo!.dispose();
    // Set themes


    let myTheme = am5.Theme.new(root);

    myTheme.rule("Grid", ["base"]).setAll({
      strokeOpacity: 0.1
    });

    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Dark.new(root),
      myTheme
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panY",
      wheelY: "zoomY",
      paddingLeft: 0,
      layout: root.verticalLayout
    }));

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarY", am5.Scrollbar.new(root, {
      orientation: "vertical"
    }));

    console.log(data);
    let data2 = [{
      "year": "2021",
      "europe": 2.5,
      "namerica": 2.5,
      "asia": 2.1,
      "lamerica": 1,
      "meast": 0.8,
      "africa": 0.4
    }, {
      "year": "2022",
      "europe": 2.6,
      "namerica": 2.7,
      "asia": 2.2,
      "lamerica": 0.5,
      "meast": 0.4,
      "africa": 0.3
    }, {
      "year": "2023",
      "europe": 2.8,
      "namerica": 2.9,
      "asia": 2.4,
      "lamerica": 0.3,
      "meast": 0.9,
      "africa": 0.5
    }]


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let yRenderer = am5xy.AxisRendererY.new(root, {});
    let yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      renderer: yRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    yRenderer.grid.template.setAll({
      location: 1
    })

    yAxis.data.setAll(data);

    let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      maxPrecision: 0,
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 40,
        strokeOpacity: 0.1
      })
    }));

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    let legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name: any, fieldName: any) {
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        stacked: true,
        xAxis: xAxis,
        yAxis: yAxis,
        baseAxis: yAxis,
        valueXField: fieldName,
        categoryYField: "year"
      }));

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryY}: {valueX}",
        tooltipY: am5.percent(90)
      });
      series.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Label.new(root, {
            text: "{valueX}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true
          })
        });
      });

      legend.data.push(series);
    }

    makeSeries("PBCSP", "PBCSP");
    makeSeries("MAS-IPSP", "MAS-IPSP");
    makeSeries("J.A. LLALLA.L.P.", "J.A. LLALLA.L.P.");
    makeSeries("SOL.BO", "SOL.BO");
    makeSeries("MPS", "MPS");
    makeSeries("UNIDOS", "UNIDOS");
    makeSeries("UCS", "UCS");
    makeSeries("ASP", "ASP");
    makeSeries("MTS", "MTS");
    makeSeries("V", "V");
    makeSeries("PAN-BOL", "PAN-BOL");


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);



    this.listaChart[idChart] = root
  }
  graficoDistritos(idChart: string, data: any) {

    if (this.listaChart[idChart]) {   //check if exist chart dispose that
      this.listaChart[idChart].dispose()
    }

    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("chartdivBarDistrito");
    root.locale = am5locales_es_ES;
    root._logo!.dispose();
    // Set themes


    // let myTheme = am5.Theme.new(root);

    // myTheme.rule("Grid", ["base"]).setAll({
    //   strokeOpacity: 0.1
    // });

    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Dark.new(root)
      //myTheme
    ]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      paddingLeft: 0,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: root.verticalLayout
    }));


    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );

    let data2 = [{
      "year": "2021",
      "europe": 2.5,
      "namerica": 2.5,
      "asia": 2.1,
      "lamerica": 1,
      "meast": 0.8,
      "africa": 0.4
    }, {
      "year": "2022",
      "europe": 2.6,
      "namerica": 2.7,
      "asia": 2.2,
      "lamerica": 0.5,
      "meast": 0.4,
      "africa": 0.3
    }, {
      "year": "2023",
      "europe": 2.8,
      "namerica": 2.9,
      "asia": 2.4,
      "lamerica": 0.3,
      "meast": 0.9,
      "africa": 0.5
    }]


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9,
      minorGridEnabled: true
    })

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));

    xRenderer.grid.template.setAll({
      location: 1
    })

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name:any, fieldName:any) {
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: fieldName,
        categoryXField: "year"
      }));

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}. Total votos: {valueY}",
        width: am5.percent(90),
        tooltipY: 0,
        strokeOpacity: 0
      });

      series.data.setAll(data);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          locationY: 0,
          sprite: am5.Label.new(root, {
            text: "{valueY}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: 0,
            centerX: am5.p50,
            populateText: true
          })
        });
      });

      legend.data.push(series);
    }

    makeSeries("PBCSP", "PBCSP");
    makeSeries("MAS-IPSP", "MAS-IPSP");
    makeSeries("J.A. LLALLA.L.P.", "J.A. LLALLA.L.P.");
    makeSeries("SOL.BO", "SOL.BO");
    makeSeries("MPS", "MPS");
    makeSeries("UNIDOS", "UNIDOS");
    makeSeries("UCS", "UCS");
    makeSeries("ASP", "ASP");
    makeSeries("MTS", "MTS");
    makeSeries("V", "V");
    makeSeries("PAN-BOL", "PAN-BOL");



    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);

    



    this.listaChart[idChart] = root
  }
}
