import { Injectable } from '@angular/core';
import { Product} from './product';
import { PRODUCT_ITEMS } from './product-data';
import { findIndex } from 'lodash';

@Injectable()
export class ProductService {

	private pItems = PRODUCT_ITEMS;

	getProductFromData():Product[]{
		console.log(this.pItems);
		return this.pItems;
	}

	addNewProduct(product:Product){
		this.pItems.push(product);
		console.log(this.pItems);
	}

	updateProducts(product:Product){
		let index = findIndex(this.pItems,(p:Product)=>{
			return p.id === product.id;
		});

		this.pItems[index]=product;
	}

	deleteProduct(product:Product){
		this.pItems.splice(this.pItems.indexOf(product),1);
	}

	
}

// getProductsFromService() : Product[]{
	// 	return[{
	// 		id: 1,
	// 		name: 'Scissor',
	// 		description: 'used to cutt stuff',
	// 		price: 10
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Knives',
	// 		description: 'Used in kitchen ',
	// 		price: 15
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Shot Glasses',
	// 		description: 'used in taking',
	// 		price: 10
	// 	}]

	// }
