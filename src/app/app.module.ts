import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TransformNull } from './сomponents/pipes/transformNull-pipe';
import { TransformBollean } from './сomponents/pipes/transformBoolean';
import { AppComponent } from './app.component';
import { ListComponent } from './сomponents/list/list.component';
import { DataService } from './сomponents/service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TransformNull,
    TransformBollean,
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
