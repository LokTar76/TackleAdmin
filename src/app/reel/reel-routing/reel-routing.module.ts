import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShowReelComponent } from '../show-reel/show-reel.component';
import { AddEditReelComponent } from '../add-edit-reel/add-edit-reel.component';

const routes: Routes = [
  { path: 'show-reel', component: ShowReelComponent },
  { path: 'reel/add-reel', component: AddEditReelComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReelRoutingModule { }
