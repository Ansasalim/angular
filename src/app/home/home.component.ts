import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any

  // acno=""
  // pswd=""
  // amount=""

  // acno1=""
  // pswd1=""
  // amount1=""

  lDate: any
  acnodel: any

  depositeForm = this.fb.group({
    // form array create
    acno: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({
    // form array create
    acno1: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    if (localStorage.getItem('currentUname')) {
      this.user = JSON.parse(localStorage.getItem('currentUname') || '')
    }
    this.lDate = new Date()
  }


  ngOnInit(): void {
    if (!localStorage.getItem("currentAcno")) {
      alert("Please Log In")
      this.router.navigateByUrl("")
    }
  }

  // deposite
  deposit() {
    var acno = this.depositeForm.value.acno
    var pswd = this.depositeForm.value.pswd
    var amount = this.depositeForm.value.amount

    // const result = this.ds.deposit(acno, pswd, amount)
    // console.log(result);

    if (this.depositeForm.valid) {
      // calling deposit function of dataservice -asynchronous
      this.ds.deposit(acno, pswd, amount)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
        },
          (result) => {
            alert(result.error.message)
          }
        )
    }
    // if(result){
    //   alert(amount + "successfully deposit....and new balance" + result)
    // }
    else {
      alert("invalid form")
    }
  }

  withdraw() {

    var acno = this.withdrawForm.value.acno1
    var pswd = this.withdrawForm.value.pswd1
    var amount = this.withdrawForm.value.amount1

    // const result = this.ds.withdraw(acno, pswd, amount)

    if (this.withdrawForm.valid) {

      // calling withdraw function of dataservice -asynchronous
      this.ds.withdraw(acno, pswd, amount)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
        },
          (result) => {
            alert(result.error.message)
          }
        )
    }
    else {
            alert("invalid form")
          }
        }


      //     const result = this.ds.withdraw(acno, pswd, amount)

      //     if (result) {
      //       alert(amount + "successfully debited....and new bal" + result)
      //     }
      //     else {
      //       alert("invalid form")
      //     }
      //   }
    

    logOut() {
      localStorage.removeItem("currentAcno")
      localStorage.removeItem("currentUname")
      localStorage.removeItem("token")

      this.router.navigateByUrl("")
    }

    deleteAccount() {
      this.acnodel = JSON.parse(localStorage.getItem("currentAcno") || '')
    }

    cancel() {
      this.acnodel = ""
    }

    delete (event: any) {
// alert("delete account "+event+"from parent")
// asynchronous
      this.ds.delete(event)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          localStorage.removeItem("currentAcno")
          localStorage.removeItem("currentUname")
          localStorage.removeItem("token")
          this.router.navigateByUrl("")
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
      // this.router.navigateByUrl("")
    }
  }

