import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CubeComponent } from './components/cube/cube.component';
import { MapComponent } from './components/mapCore/components/map/map.component';
import { LandComponent } from './components/mapCore/components/land/land.component';
import { OceanComponent } from './components/mapCore/components/ocean/ocean.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    MapComponent,
    LandComponent,
    OceanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
