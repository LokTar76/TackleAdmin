import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReelComponent } from './reel/reel.component';
import { RodComponent } from './rod/rod.component';
import { ComboComponent } from './combo/combo.component';
import { LureComponent } from './lure/lure.component';
import { LineComponent } from './line/line.component';


const routes: Routes = [
  { path: 'reel', component: ReelComponent },
  { path: 'rod', component: RodComponent },
  { path: 'combo', component: ComboComponent },
  { path: 'lure', component: LureComponent },
  { path: 'line', component: LineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
