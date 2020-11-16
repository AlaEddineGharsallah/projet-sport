import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from 'src/app/validatros/comparePwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(5), Validators.required]],
      lastName: [''],
      email: ['', Validators.email],
      pwd: ['', [Validators.minLength(8), Validators.maxLength(12)]],
      confirmPwd: [''],
      tel: ['']
    },
    {validators: MustMatch('pwd','confirmPwd')
                                            })
  }

  signup(user:any) {
    console.log('This is my user', user);
    alert('Btn clicked');
  }

}
