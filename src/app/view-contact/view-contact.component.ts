import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mycontact } from 'src/model/mycontacts';
import { mygroup } from 'src/model/mygroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contact_id:any
  contact:mycontact={}
  groupid:string=''
  groupname: mygroup={}

      constructor( private api:ApiService,private activatedROute:ActivatedRoute){ }

      ngOnInit(): void {
        this.activatedROute.params
        .subscribe((data:any)=>{
          // console.log(data['id']); 
          this.contact_id=data['id']
          })
          this.api.getviewcontacts(this.contact_id)
          .subscribe((result:any)=>{
            // console.log(result);
            this.contact=result
            this.groupid=result.groupId
            // console.log(this.groupid);
          
            this.api.getGroup(this.groupid)
            .subscribe((result:any)=>{
              console.log(result);
              
              this.groupname=result
            })
               
            })
            
            
          }

          
        }

      //call api
      
    
