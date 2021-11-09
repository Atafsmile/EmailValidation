import { Component, OnInit } from '@angular/core';
import { EmailVService } from '../email-v.service';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrls: ['./email-validation.component.css']
})
export class EmailValidationComponent implements OnInit {

  email:any;
  emails: any;
  
   
  constructor(private services:EmailVService) { }

  ngOnInit() {
    
  }
getData(){
this.services.getEmailValiData(this.email).subscribe(data=>{
console.log(data);
this.emails=data;
if(data.is_valid_format.value==true){
  alert('this emails is: '+data.email+" Valid ")
  const jsondata=JSON.stringify(data.email);
  localStorage.setItem('mydata',jsondata);
  

}else{
  alert('this emails is: '+data.email+"Not Valid ")
   const jsondata=JSON.stringify(data.email);
  localStorage.setItem('mydata',jsondata);
 

}

})

}
 test=JSON.stringify(localStorage.getItem('mydata'));
 clearEmail(){
   this.email='';
 }

}
