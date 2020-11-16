import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogUrl='api/allBlogs';
  constructor(private httpClient:HttpClient){ }
  getAllBlogs(){
    return this.httpClient.get(this.blogUrl);
  }

  addBlog(blog:any){
    return this.httpClient.post(this.blogUrl, blog);
  }
  
  getBlogById(id:number){
    return this.httpClient.get(`${this.blogUrl}/${id}`)
    
    }

  deleteBlog(id:number){
    return this.httpClient.delete(`${this.blogUrl}/${id}`);
  }

  editBlog(blog:any){
    return this.httpClient.put(`${this.blogUrl}/${blog.id}`,blog);
  }
}
