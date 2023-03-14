import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // get all contact function
  getAllContacts(){
   return this.http.get('http://localhost:3000/contacts')

  }

  // get view contact function
  getviewcontacts(contactid:any){
    return this.http.get('http://localhost:3000/contacts/'+contactid)

  }

  //api call to get details of a particular group

  getGroup(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }

  //api call to get all group data
  getAllgroup(){
    return this.http.get('http://localhost:3000/groups')
 }

 //api call to add /store contact etailsto the server

 addcontact(contact:any){
  return this.http.post('http://localhost:3000/contacts',contact)
 }


 //api call to delete contact details from the server

 Removecontact(id:any){
  return this.http.delete('http://localhost:3000/contacts/'+id) 
 }

 //api call to update an existing contact 
 updatecontact(id:any,contact:any){
  return this.http.put('http://localhost:3000/contacts/'+id,contact)
 }
}
