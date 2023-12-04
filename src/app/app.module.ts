import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent  //it needs to be declared here for the component to be usable, generated automatically when creting the component 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule     //to be able to update the field after typing in input, second approach 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }