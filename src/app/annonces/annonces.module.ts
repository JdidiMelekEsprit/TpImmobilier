import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnoncesRoutingModule } from './annonces-routing.module';
import { AnnoncesComponent } from './annonces.component';
import { DetailsAnnonceComponent } from './details-annonce/details-annonce.component';
import { RechercheAnnonceComponent } from './recherche-annonce/recherche-annonce.component';
import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';


@NgModule({
  declarations: [
    AnnoncesComponent,
    DetailsAnnonceComponent,
    RechercheAnnonceComponent,
    ListeAnnoncesComponent
  ],
  imports: [
    CommonModule,
    AnnoncesRoutingModule
  ]
})
export class AnnoncesModule { }
