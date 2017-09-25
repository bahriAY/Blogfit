import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSidenavModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import { ChatComponent } from './chat/chat.component';
import { DsService } from './services/ds.service';
import {MdChipsModule} from '@angular/material';
import {MdListModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ChatComponent,

  ],
  entryComponents: [AuthentificationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdGridListModule,
    MdChipsModule,
    MdListModule
  ],
  providers: [DsService],
  exports: [FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
