import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { DebugElement } from '@angular/core/src/debug/debug_node';


const ownerRoutes: Routes = [
  {path: 'owners', component: OwnerListComponent},
  {path: 'owners/add', component: OwnerAddComponent},
  {path: 'owners/:id', component: OwnerDetailComponent},
  {path: 'owners/:id/edit', component: OwnerEditComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(ownerRoutes)],
  exports: [RouterModule]
})

export class OwnerRoutingModule { }
