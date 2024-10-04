import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {RouterLink} from '@angular/router';

import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-layout-interno',
  standalone: true,
  imports: [MatSidenavModule , RouterOutlet, MatIconModule ,MatButtonModule, MatToolbarModule, MatExpansionModule, MatListModule, RouterLink,  HeaderComponent],
  templateUrl: './layout-interno.component.html',
  styleUrl: './layout-interno.component.scss'
})
export class LayoutInternoComponent {

}
