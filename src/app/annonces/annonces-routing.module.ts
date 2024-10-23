import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnoncesComponent } from './annonces.component';
import { DetailsAnnonceComponent } from './details-annonce/details-annonce.component';
import { ListeAnnoncesComponent } from './liste-annonces/liste-annonces.component';


const routes: Routes = [
  { path: '', component: AnnoncesComponent },
  { path: '', component: ListeAnnoncesComponent },
  { path: ':id', component: DetailsAnnonceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnoncesRoutingModule { }
