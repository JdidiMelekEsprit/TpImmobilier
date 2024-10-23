import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Ensure this is imported

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Ensure AppRoutingModule is listed in imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
