import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactivedemoComponent } from './components/reactivedemo/reactivedemo.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactivedemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ReactivedemoComponent]
})
export class AppModule { }
