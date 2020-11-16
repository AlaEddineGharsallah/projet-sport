import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  blog:any;
  id:any;
  editBlogForm:any;
    constructor(private activatedRoute:ActivatedRoute,
      private blogService:BlogService,
      private router:Router,
      private formBuilder:FormBuilder) { }
  
    ngOnInit(): void {

      this.editBlogForm = this.formBuilder.group({
        blogTitle: [''],
        lNafNameAuthorme: [''],
        email:[''],
        lNameAuthor: [''],
        tel: [''],
        description:[''],
        date:[]
      }) 
  
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
      this.blogService.getBlogById(this.id).subscribe(
        data=>{
          console.log('data from db', data);
          this.blog=data;
        }
      )
  
    }
    validateEditBlog(){
      this.blogService.editBlog(this.blog).subscribe(
        ()=>{
          this.router.navigate(['admin']);
        }
      )
    }
}
