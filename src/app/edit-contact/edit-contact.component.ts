import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mycontact } from 'src/model/mycontacts';
import { mygroup } from 'src/model/mygroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent  implements OnInit{
  contactId:any
  contact:mycontact={}
  groupid:string=''
  groupname:string=""
  groups:mygroup[]=[]
  constructor(private activatedroute:ActivatedRoute,private api:ApiService,private router:Router){}

  ngOnInit(): void {
    //to fetch contact id from url
    this.activatedroute.params.subscribe((data:any)=>{
      console.log(data['id'])
      this.contactId=data['id']
      console.log(this.contactId);
      
    })

    //fetching details of particular view contact
    if(this.contactId){
      this.api.getviewcontacts(this.contactId).subscribe((result:any)=>{
        console.log(result);
        this.contact=result
        this.groupid=result.groupId
        // to fetch details of a aprticular group
        this.api.getGroup(this.groupid).subscribe((data:any)=>{
          this.groupname=data['name']
        })
        
      })
    }

    //to fetch all group
    this.api.getAllgroup().subscribe((result:any)=>{
      console.log(result);
      this.groups=result
      
    })
     
}
 //edit all contact

 editcontact(conatct:mycontact){

  this.api.updatecontact(this.contactId,this.contact).subscribe((result:any)=>{
    alert("contact updated successfully")
    this.router.navigateByUrl('')
  })
}

}


