import {Component, OnInit} from '@angular/core';
import {Product} from "./product";
import {AlertifyService} from "../services/alertify.service";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {ActivatedRoute} from "@angular/router";

//declare let alertify:any; //sistemdeki javascript dosyasında alertify bulur.

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers:[ProductService] //Service import ettik
})
export class ProductComponent implements OnInit {


  constructor(private alertifyService: AlertifyService, private productService:ProductService,private activatedRoute:ActivatedRoute) {
  }

  title = "Ürün Listesi"
  filterText = "" //burayı ngModel ile bağladık buradaki değişiklik orayı etkiler canlıdaki değişiklik burayı etkiler
  products!: Product[] ;

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
      this.productService.getProductsByCategory(params["categoryId"]).subscribe(data => {
        this.products = data
      });
      }else{
        this.productService.getProducts().subscribe(data=>this.products=data)
      }


    })

  }


  addToCard(product: Product) {
    this.alertifyService.success(product.name + "added")
  }

}
