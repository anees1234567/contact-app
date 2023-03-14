import { Component, OnInit } from '@angular/core';
import { mycontact } from 'src/model/mycontacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-allcontacts',
  templateUrl: './allcontacts.component.html',
  styleUrls: ['./allcontacts.component.css']
})
export class AllcontactsComponent implements OnInit {


  allcontacts:mycontact[]=[]

  constructor(private api:ApiService){ }

  ngOnInit(): void {
      this.getallcontacts()
    }

    getallcontacts(){
    this.api.getAllContacts()
    .subscribe((result:any)=>{
      console.log(result);
      this.allcontacts=result;

   })
  }

    //deletecontact
    deletecontact(id:any){
      this.api.Removecontact(id)
      .subscribe((result:any)=>{
        console.log(result);
        this.getallcontacts()
       })
    }


  }


