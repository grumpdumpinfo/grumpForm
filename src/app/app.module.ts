import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { GrumpFormComponent } from './grump-form/grump-form.component';
import { SafeURLPipe } from './safe-url.pipe'
@NgModule({
  declarations: [
    AppComponent,
    GrumpFormComponent,
    SafeURLPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
