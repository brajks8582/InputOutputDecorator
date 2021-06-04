import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compdirectives1Component } from './compdirectives1/compdirectives1.component';
import { ParentcompComponent } from './parentcomp/parentcomp.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { ChildoutputComponent } from './childoutput/childoutput.component';
import { ParentoutputComponent } from './parentoutput/parentoutput.component';

@NgModule({
  declarations: [
    AppComponent,
    Compdirectives1Component,
    ParentcompComponent,
    ChildcompComponent,
    ChildoutputComponent,
    ParentoutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
