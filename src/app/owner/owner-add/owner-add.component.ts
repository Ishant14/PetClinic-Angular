import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, NgForm } from '@angular/forms';
import { OwnerService } from '../owner.service';
import { Owner } from '../owner';


@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  ownerForm: FormGroup;
  selectedOwnerData : Owner;

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.createForm();
    this.ownerService.currentOwnerData.subscribe(owner => this.selectedOwnerData = owner);
    console.log("Add Owner Selected Row:" +this.selectedOwnerData);
  }

  private createForm(){
    this.ownerForm = new FormGroup({
      id: new FormControl({value:'', disabled: true}),
      firstName : new FormControl('',[Validators.required,Validators.minLength(2)]),
      lastName : new FormControl('',[Validators.required,Validators.minLength(2)]),
      address : new FormControl('',Validators.required),
      city : new FormControl('',[Validators.required,Validators.minLength(4)]),
      telephone : new FormControl('',[Validators.required,Validators.pattern("[0-9]{0-10}")])
   });
   
  }

  updateOnwer(ownerForm: NgForm){
    console.log("Form Submmitted Successfull");
    console.log(ownerForm.value);
  }

}
