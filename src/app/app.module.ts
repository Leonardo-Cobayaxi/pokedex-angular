import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component'
import { RegionsComponent } from './regions/regions.component';
import { HeaderComponent } from './header/header.component';
import { BestmonComponent } from './bestmon/bestmon.component';
import { KantoComponent } from './regions/kanto/kanto.component';
import { JohtoComponent } from './regions/johto/johto.component';
import { HoennComponent } from './regions/hoenn/hoenn.component';
import { SinnohComponent } from './regions/sinnoh/sinnoh.component';
import { UnovaComponent } from './regions/unova/unova.component';
import { KalosComponent } from './regions/kalos/kalos.component';
import { AlolaComponent } from './regions/alola/alola.component';
import { GalarComponent } from './regions/galar/galar.component';
import { PaldeaComponent } from './regions/paldea/paldea.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    RegionsComponent,
    BestmonComponent,
    KantoComponent,
    JohtoComponent,
    HoennComponent,
    SinnohComponent,
    UnovaComponent,
    KalosComponent,
    AlolaComponent,
    GalarComponent,
    PaldeaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
