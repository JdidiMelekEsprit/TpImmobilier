import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Define routes for the application
const routes: Routes = [
  // Redirect to 'home' if the path is empty (default route)
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Lazy-load the 'home' module
  { 
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },

  // Add other routes as you create more modules, like 'annonces'
  { 
    path: 'annonces',
   loadChildren: () => import('./annonces/annonces.module').then(m => m.AnnoncesModule)
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'annonces', loadChildren: () => import('./annonces/annonces.module').then(m => m.AnnoncesModule) }
];

@NgModule({
  imports: [
  //  CommonModule,
    RouterModule.forRoot(routes) // Apply the routes to the RouterModule
  ],
  exports: [
    RouterModule // Export RouterModule so it can be used by AppModule
  ]
})
export class AppRoutingModule { }
