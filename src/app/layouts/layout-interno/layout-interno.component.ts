import { Component,ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatDrawer } from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {RouterLink} from '@angular/router';

import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
@Component({
  selector: 'app-layout-interno',
  standalone: true,
  imports: [MatSidenavModule , RouterOutlet, MatIconModule ,MatButtonModule, MatToolbarModule, MatExpansionModule, MatListModule, RouterLink,  HeaderComponent, FooterComponent],
  templateUrl: './layout-interno.component.html',
  styleUrl: './layout-interno.component.scss'
})
export class LayoutInternoComponent {
  @ViewChild(MatDrawer) menu!: MatDrawer;

  ocultarMenu(){
    if(window.screen.width<500){ //movil
      this.menu.close()
    }
  }
}
