import {Component} from '@angular/core';
import {CollectionList} from '../shared/collection-list.model';
import {CollectionService} from '../shared/collection.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../shared/product.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-collection-list-detail',
  templateUrl: './collection-list-detail.component.html',
  styleUrls: ['./collection-list-detail.component.scss']
})
export class CollectionListDetailComponent {

  collectionList: CollectionList;
  products: Product[];
  search: string;
  collectionListProducts: Product[];
  listNameEditMode: boolean;
  editCollectionListNameForm: FormGroup;

  constructor(private collectionService: CollectionService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.editCollectionListNameForm = this.formBuilder.group({
      'shoppingListName': ['', [Validators.required]]
    });
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.collectionList = this.collectionService.getCollectionListById(params['id']);
      } else {
        if (this.collectionService.isThereShoppingLists()) {
          // if there are any collection - get the first one
          this.collectionList = this.collectionService.getFirstShoppingList();

        } else {
          // if there are no collection
          this.collectionList = this.collectionService.initCollectionListsWithDefault();
        }
      }
      this.collectionListProducts = this.collectionService.getProductsByCollectionList(this.collectionList);
    });

    this.products = this.collectionService.getProducts();

    this.listNameEditMode = false;
  }

  saveCollectionListName(formData: object) {
    const slName = formData['shoppingListName'];
    this.collectionList.name = slName;
    this.collectionService.updateCollectionList(this.collectionList);
    this.collectionService.showWarning('saved');

  }

  editCollectionListName() {
    if (this.listNameEditMode) {
      this.listNameEditMode = false;
    } else {
      this.listNameEditMode = true;
    }
  }

  removeProductFromCollectionList(product: Product) {
    this.collectionListProducts = this.collectionListProducts.filter(pr => pr.id !== product.id);
    this.collectionService.removeProductFromCollectionList(product, this.collectionList);
    this.collectionService.showWarning('productRemovedFromCollectionList');

  }

  getProducts() {
    this.products  = this.collectionService.getProducts();
  }

  addProductToCurrentList(product) {

    let result = [];
    for (let index = 0; index < this.collectionListProducts.length; index++) {
      let el = this.collectionListProducts[index].id;
      if (!result.includes(el)){
        result.push(el);
      } 
    }
    if(!result.includes(product.id)){
      this.collectionService.addProductToCollectionList(product, this.collectionList);
      this.collectionService.showWarning('productAdded');
      this.collectionListProducts.unshift(product);
    }
    else {
      this.collectionService.showWarning('productCanNotAdded');

    }
    console.log("result: " + JSON.stringify(result));       
  }
}
