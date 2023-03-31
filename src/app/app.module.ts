import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { EyecatcherComponent } from './eyecatcher/eyecatcher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    AboutmeComponent,
    ReferencesComponent,
    ContactComponent,
    ServicesComponent,
    EyecatcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
