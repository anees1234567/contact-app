import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mycontact } from 'src/model/mycontacts';
import { mygroup } from 'src/model/mygroup';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit{
  contact:mycontact={}
  allgroup:mygroup[]=[]
  constructor(private api:ApiService,private router:Router){
    this.contact.groupId="select the group"
  }
 
  ngOnInit(): void {
    this.api.getAllgroup().subscribe((result:any)=>{
      this.allgroup=result;
      console.log(this.allgroup);
      
      
      console.log(this.contact.groupId);
      

    })
  }

  addcontact(){
    this.api.addcontact(this.contact)
    .subscribe((result:any)=>{
      console.log(result)
      this.router.navigateByUrl('')

    })
  }



}
