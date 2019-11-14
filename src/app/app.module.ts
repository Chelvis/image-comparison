import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ComparisonModule } from './modules/image-comparison/image-comparison.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComparisonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
