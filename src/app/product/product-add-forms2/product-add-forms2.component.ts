import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../product";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../category/category";
import {ProductService} from "../../services/product.service";
import {AlertifyService} from "../../services/alertify.service";

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.scss'],
  providers:[CategoryService,ProductService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder:FormBuilder,
              private categoryService:CategoryService,
              private productService:ProductService,
              private alertifyService:AlertifyService) { }

  productAddForm!:FormGroup;
  product:Product =new Product();
  categories!:Category[];



  ngOnInit(){
    this.createProductAddForm();

    this.categoryService.getCategories().subscribe(data=>{this.categories=data})

  }

  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required],
      imageUrl:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required]
    });
  }

  add(){
    if(this.productAddForm.valid){
      this.product=Object.assign({},this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data=>{
      this.alertifyService.success(data.name+" başarıyla eklendi")
    });
  }

}
