import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OptimalBorderDirective } from './directives/optimal-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    OptimalBorderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
