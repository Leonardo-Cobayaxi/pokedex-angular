import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { RegionsComponent } from './regions/regions.component'
import { BestmonComponent } from './bestmon/bestmon.component'
import { KantoComponent } from './regions/kanto/kanto.component';
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
