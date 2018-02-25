import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { Owner } from '../owner';
import { OwnerService } from '../owner.service';
import { error } from 'util';
import { Router } from '@angular/router';
import { PetCellRenderer } from 'app/common/aggrid-cellrenderer/petCellRenderer';
import { EventEmitter } from '@angular/core/src/event_emitter';


@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})

export class OwnerListComponent implements OnInit {

  owners: Owner[];
  errorMessage: string;
  private gridOptions: GridOptions;
  selectedOwner: Owner;

  ngOnInit() {

  }

  constructor(private ownerService: OwnerService, private route: Router) {
    this.initialiseOwnerGrid();
  }

  private initialiseOwnerGrid() {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = [
      { headerName: 'ID', field: 'id' },
      { headerName: 'First Name', field: 'firstName' },
      { headerName: 'Last Name', field: 'lastName' },
      { headerName: 'Address', field: 'address' },
      { headerName: 'City', field: 'city' },
      { headerName: 'Telephone', field: 'telephone' },
      { 
        headerName: 'Pets', 
        field: 'pets',
        cellRenderer: "PetCellRenderer",
        colId: "params",
       }
    ];
    this.getOwners();
  }

  getOwners() {
    this.ownerService.getOwners().subscribe(
      ownersList => {
        this.owners = ownersList; 
      });
  }

  addOwner(){
    this.route.navigate(['/owners/add']);
  }
  
  public onRowSelect(owner: Owner): void{
    //owner: Owner  = JSON.parse(owner);
    console.log("Row Selected : "+ JSON.stringify(owner) );
    this.ownerService.changeOwnerData(owner);
  }

}
