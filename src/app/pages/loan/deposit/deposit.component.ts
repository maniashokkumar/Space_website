import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  check1: any;
  check2: any;
  b: any;
  intrest:any;
  total:any;
  result:any;
  result1:any;
  recuIntrest:any;
  Loan:any='Tenure';

  constructor() { }

  check(event:any){
    this.check1=event.target.value;
    console.log(this.check1)
    this.check2=event.target.id;
    console.log(this.check2)

  if(this.check2=="Recursion"){
    this.recuIntrest='For recursion deposit we offer intrest  percentage of :'
    this.Loan="Loan Tenure(In months)"}
    else{
      this.recuIntrest='For Fixed deposit we offer intrest percentage of :'
      this.Loan="Loan Tenure(In Years)"
    }
}

calculate(principle:any,month:any){
  if(principle!=""){
              if(this.check2=="Fixed"){
                var int2=JSON.parse(this.check1);
                var int3=int2/100;
                var int=(1+int3)
                var year=JSON.parse(month);
                var int1=Math.pow(int,year);
                var prin=JSON.parse(principle);
                this.total=(prin*int1).toFixed(2);
                this.intrest=this.total-prin;
                this. result="Total Intrest you get from us for your planned period : Rs."
                this. result1="Your Total Maturity Amount is : Rs."
                
              }
              else{
                let b=JSON.parse(month);
                let e=b+1;
                let c=e*b;
                let d=c/24;
                
                /*rade of intrest */
                let rI=this.check1/100;
                console.log(rI);
                this.intrest=principle*d*rI;
                let talPrincpl=JSON.parse(principle)*b;
                this.total=talPrincpl+this.intrest;
                console.log(this.total);
                
                  this. result="Total Intrest you get from us for your planned period : Rs."
                  this. result1="Your Total Maturity Amount is : Rs."
                
              }
            }
    else(
      alert("Enter your Principle amount")
    )
}
  ngOnInit(): void {
  }

}
