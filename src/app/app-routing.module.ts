import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { RegionsComponent } from './regions/regions.component'
import { BestmonComponent } from './bestmon/bestmon.component'
import { KantoComponent } from './regions/kanto/kanto.component';
import { JohtoComponent } from './regions/johto/johto.component';
import { HoennComponent } from './regions/hoenn/hoenn.component';
import { SinnohComponent } from './regions/sinnoh/sinnoh.component';
import { UnovaComponent } from './regions/unova/unova.component';
import { KalosComponent } from './regions/kalos/kalos.component';
import { AlolaComponent } from './regions/alola/alola.component';
import { GalarComponent } from './regions/galar/galar.component';
import { PaldeaComponent } from './regions/paldea/paldea.component';
const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "regions",
  component: RegionsComponent
},
{
  path: "bestmon",
  component: BestmonComponent
},
{
  path: "regions/kanto",
  component: KantoComponent

},
{
  path: "regions/johto",
  component: JohtoComponent

}, {
  path: "regions/hoenn",
  component: HoennComponent

}, {
  path: "regions/sinnoh",
  component: SinnohComponent

}, {
  path: "regions/unova",
  component: UnovaComponent

}, {
  path: "regions/kalos",
  component: KalosComponent

}, {
  path: "regions/alola",
  component: AlolaComponent

}, {
  path: "regions/galar",
  component: GalarComponent

}, {
  path: "regions/paldea",
  component: PaldeaComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
