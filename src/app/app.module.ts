import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RangersService} from './core/services/rangers.service';
import { RangersListComponent } from './core/rangers-list/rangers-list.component';
import { RangerItemComponent } from './core/rangers-list/ranger-item/ranger-item.component';
import {RequestBinService} from './core/services/request-bin.service';

@NgModule({
  declarations: [
    AppComponent,
    RangersListComponent,
    RangerItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RangersService,
    RequestBinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
