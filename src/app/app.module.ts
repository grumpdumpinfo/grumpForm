import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { GrumpFormComponent } from './grump-form/grump-form.component';
import { SafeURLPipe } from './safe-url.pipe'
import { HttpClientModule } from '@angular/common/http';
import { DataEntryComponent } from './data-entry/data-entry.component'

@NgModule({
  declarations: [
    AppComponent,
    GrumpFormComponent,
    SafeURLPipe,
    DataEntryComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
