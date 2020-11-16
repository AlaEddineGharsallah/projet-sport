import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent implements OnInit {
  blog: any;
  id: any;
  constructor(private activatedRoute: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.blogService.getBlogById(this.id).subscribe(
      (data) => {
        console.log('data', data);
        this.blog = data;
      }
    )
  }
 
}
