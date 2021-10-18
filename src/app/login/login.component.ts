import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {AccountService} from "../services/account.service";
import {User} from "./user";
import {validateAndRewriteCoreSymbol} from "@angular/compiler-cli/src/ngtsc/imports";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!:FormGroup


  constructor(private accountService:AccountService,private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.form=this.formBuilder.group({
      userName:["",[Validators.required]],
      password:["",[Validators.required]]
    })

  }


  login(){

    if(this.form.valid){
      let payload={
        userName:this.form?.controls["userName"].value,
        password:this.form?.controls["password"].value

      }
      this.accountService.login(payload)
    }


  }

}
