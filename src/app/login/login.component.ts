import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "perfect banking partner"
  accno = "account number please"
  acno = ""
  pswd = ""

  // register form model creation
  loginForm = this.fb.group({
    // form array create
    acno: ['' ,[Validators.required, Validators.pattern('[0-9 ]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    
  })

  constructor(private routerLogin: Router, private ds: DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // login using event binding

  login() {

    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd
    // var acno = this.acno
    // var pswd = this.pswd
if(this.loginForm.valid){
  // asynchronous call -login
  this.ds.login(acno, pswd) 
  .subscribe((result:any)=>{
    if(result){
      localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
      localStorage.setItem('currentUname',JSON.stringify(result.currentUname))
      localStorage.setItem('token',JSON.stringify(result.token))
alert(result.message)
this.routerLogin.navigateByUrl("home")
    }
  },
  (result)=>{
    alert(result.error.message)

  }
  )
}
    // const result = this.ds.login(acno, pswd)
    // if (result) {

    //   alert("login in success")
    //   this.routerLogin.navigateByUrl("home")
    // }
    else{
      alert("invalid form")
    }
  }
}




  // login -using template variable

//   login(a:any,p:any){
//     console.log(a);
// var acno=a.value
// var pswd=p.value

// let database=this.database
//  if(acno in database){

//    if(pswd==database[acno]["password"]){
//    alert("login in success")
//  }
//  else{
//    alert("incorrect password")
// }
// }

// else{
//   alert("user does not exist!!!!!!")
// }
// }
// }


  // database:any={
  //   1000:{acno:1000,uname:"Neer",password:1000,balance:5000},
  //   1001:{acno:1001,uname:"veer",password:1001,balance:5000},
  //   1002:{acno:1002,uname:"seer",password:1002,balance:5000},
  // }


    //ac change
  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno);
  // }

  // pswd change
  // pswdChange(event:any){
  //   this.pswd=event.target.value
  //   console.log(this.pswd);
  // }