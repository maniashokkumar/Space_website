import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loancalculator',
  templateUrl: './loancalculator.component.html',
  styleUrls: ['./loancalculator.component.css']
})
export class LoancalculatorComponent implements OnInit {
  check1=10.5;
  
  constructor() { }
  bgimg="url('../../assets/img2.jpg')";
  selectedday=10.5;
  b:any = "";
  mydata:any="";
  selectedid:any;
  check2: any;
 
  selected(event:any){
    this.selectedday=event.target.value;
    console.log(this.selectedday)
 
  }
  abc(phone:any,tenure:any){
    console.log(phone,tenure,this.check1);
    var a=phone*tenure*this.check1
     this.b=a/100;
     
    console.log(this.b)
  }

  check(event:any){
      this.check1=event.target.value;
      console.log(this.check1);


      this.check2=event.target.id;
      console.log(this.check2)
      if(this.check2=="personal"){
        
        this.bgimg="url('../../assets/img4.jpg')";
      }
      else if(this.check2=="Home"){
        this.bgimg="url('../../assets/img5.jpg')";
      }
      else if(this.check2=="Vehicle"){
        this.bgimg="url('../../assets/img6.jpg')";
      }
      else if(this.check2=="Education"){
        this.bgimg="url('../../assets/img7.jpg')";
      }
    
  }
  
  ngOnInit(): void {
  }

  
}
