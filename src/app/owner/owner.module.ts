import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerAddComponent } from './owner-add/owner-add.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerService } from './owner.service';
import { AgGridModule } from "ag-grid-angular";
import { OwnerMainComponent } from './owner-main/owner-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwnerRoutingModule,
    AgGridModule.withComponents([OwnerListComponent])
  ],
  declarations: [OwnerAddComponent, OwnerListComponent, OwnerEditComponent, OwnerDetailComponent, OwnerMainComponent],
  providers : [OwnerService]
})

export class OwnerModule {
  
 }
  
