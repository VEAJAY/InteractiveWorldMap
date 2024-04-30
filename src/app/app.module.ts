import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { SvgMapComponent } from './svg-map/svg-map.component';
import { DataService } from './data.service';

const appRoutes: Routes = [
  {path: '', component: WorldComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    SvgMapComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
