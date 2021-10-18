import { Component, OnInit } from '@angular/core';
import {Category} from "./category";
import {CategoryService} from "../services/category.service";
import {AlertifyService} from "../services/alertify.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService,private alertifyService:AlertifyService,private router:Router) { }
  title ="Kategori Listesi";
  categories!:Category[];


  ngOnInit(){
    this.categoryService.getCategories().subscribe(data=>{this.categories=data})
  }

  click(id:number){
  this.router.navigate(["products/category/"+id])
  }

}
