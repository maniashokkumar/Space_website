import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  id:number;
  constructor() { 
    this.id = 0;
  }

  ngOnInit(): void {
  }
  create(name:any,email:any){
    let userData={
     name,email 
    };
    console.log(userData)
   localStorage.setItem(email,JSON.stringify(userData));
    

  }

  

 
 
}
