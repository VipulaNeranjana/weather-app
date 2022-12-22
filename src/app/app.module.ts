import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperPartComponent } from './upper-part/upper-part.component';
import { LowerPartComponent } from './lower-part/lower-part.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperPartComponent,
    LowerPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
