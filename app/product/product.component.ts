import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { clone } from 'lodash';



@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})

export class ProductComponent implements OnInit {

	products:Product[];
	productServcie: ProductService;
	productForm:Boolean = false;
	editproductForm:Boolean = false;
	newForm:Boolean;
	newProduct: any = {};
	editedProduct: any = {};
 
	constructor(productService: ProductService){
		this.productServcie = productService;

	}

	ngOnInit(){
		this.getProduct();

	}

	getProduct(){
		this.products = this.productServcie.getProductFromData();
	}

	showEditProductForm(product:Product){
		if(!product){
			this.productForm = false;
			return;
		}

		this.editproductForm = true;
		this.productForm = false;
		this.editedProduct = clone(product);
	}

	showNewProductForm() {
		if(this.products.length){
			this.newProduct = {};
		}
		this.productForm = true;
		this.editproductForm = false;
		this.newForm  = true;


	}

	removeProduct(product:Product){
		this.productServcie.deleteProduct(product);
	}

	saveProduct(product:Product){
		if(this.newForm){
			this.productServcie.addNewProduct(product);
		}
		this.productForm = false;
	}


	cancelNewForm(){
		this.productForm = false;
	}

	updateProduct(){
		this.productServcie.updateProducts(this.editedProduct);
		this.editproductForm= false
		this.editedProduct={};
		
	}

	cancelEditForm(){
		this.editproductForm = false; 	
	}

}
