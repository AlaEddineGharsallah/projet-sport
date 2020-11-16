import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user:any;
  id:any;
  editUserForm:any;
    constructor(private activatedRoute:ActivatedRoute,
      private userService:UserService,
      private router:Router,
      private formBuilder:FormBuilder) { }
  
    ngOnInit(): void {
      this.editUserForm = this.formBuilder.group({
        fName: [''],
        lName: [''],
        email:[''],
        pwd: [''],
        tel: [''],
        description:['']
      }) 
  
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
      this.userService.getUserById(this.id).subscribe(
        data=>{
          console.log('data from db', data);
          this.user=data;
        }
      )
  
    }
    validateEditUser(){
      this.userService.editUser(this.user).subscribe(
        ()=>{
          this.router.navigate(['admin']);
        }
      )
    }
  }
  