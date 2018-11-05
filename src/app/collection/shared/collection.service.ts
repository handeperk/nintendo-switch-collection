import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {AppConfig} from '../../config/app.config';

import {CollectionList} from './collection-list.model';
import {Observable} from 'rxjs/Observable';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import {catchError, map} from 'rxjs/operators';
import {Product} from './product.model';
import {_throw} from 'rxjs/observable/throw';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CollectionService {

  private headers: HttpHeaders;
  private productsGetUrl: string;
  private productsBaseUrl: string;
  private translations: any;
  private shoppinglistPrefix: string;
  private shoppinglistsPrefix: string;
  private maxTitleLength: number;
  private defaultSL: string;
  private avaliableSL: string;

  constructor(private http: HttpClient,
              private translateService: TranslateService,
              private snackBar: MatSnackBar) {
    this.productsGetUrl = AppConfig.endpoints.productsBaseUrl + AppConfig.endpoints.productsGetPath;
    this.productsBaseUrl = AppConfig.endpoints.productsBaseUrl;
    this.defaultSL = AppConfig.defultSHContent;
    this.avaliableSL = AppConfig.avaliableSHContent;

    this.shoppinglistPrefix = 'shopping-list-';
    this.shoppinglistsPrefix = 'shopping-lists';
    this.maxTitleLength = 50;

    this.headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.translateService.get(
      ['collectionListCreated', 'saved', 'collectionListRemoved', 'productAdded', 'productCanNotAdded','productRemovedFromCollectionList'])
      .subscribe((texts) => {
        this.translations = texts;
      });
  }

  private handleError(error: any) {
    if (error instanceof Response) {
      return _throw(error.json()['error'] || 'backend server error');
    }
    // in a case server returns 400 error, which means no data found
    return of([]);
  }

  private cropText(text: string): string {
    if (text.length > this.maxTitleLength) {
      return text.substring(0, this.maxTitleLength) + '...';
    } else {
      return text;
    }
  }

  getProducts():Product[] {
    return JSON.parse(this.avaliableSL);

  }

  getProductsByCollectionList(collectionList: CollectionList): Product[] {
    return JSON.parse(localStorage.getItem(this.shoppinglistPrefix + collectionList.id)) || [];
  }

  addProductToCollectionList(product, collectionList) {
    const products = this.getProductsByCollectionList(collectionList);
    products.unshift(product);
    localStorage.setItem(this.shoppinglistPrefix + collectionList.id, JSON.stringify(products));
    return product;
  }

  removeProductFromCollectionList(product: Product, collectionList: CollectionList) {
    let slProducts = this.getProductsByCollectionList(collectionList);
    slProducts = slProducts.filter(sl => sl.id !== product.id);
    localStorage.setItem(this.shoppinglistPrefix + collectionList.id, JSON.stringify(slProducts));
  }

  isThereShoppingLists(): boolean {
    if (!this.getAllCollectionLists().length) {
      return false;
    }
    return true;
  }

  getFirstShoppingList(): CollectionList {
    const shLists = this.getAllCollectionLists();
    if (shLists.length) {
      return shLists[0];
    } else {
      return null;
    }
  }

  initCollectionListsWithDefault(): CollectionList {
    const collectionList = new CollectionList(0, 'Default');
    const collectionLists = [collectionList];
    localStorage.setItem(this.shoppinglistsPrefix, JSON.stringify(collectionLists));
    localStorage.setItem(this.shoppinglistPrefix + 0, this.defaultSL);
    return collectionList;
  }

  getAllCollectionLists(): CollectionList[] {
    return JSON.parse(localStorage.getItem(this.shoppinglistsPrefix)) || [];
  }

  getCollectionListById(slId: string): CollectionList {
    const collectionLists = this.getAllCollectionLists().sort((a, b) => a.id - b.id);
    return collectionLists.filter(sl => sl.id === parseInt(slId))[0];
  }

  createCollectionList(collectionList: any): CollectionList {
    const collectionLists = this.getAllCollectionLists().sort((a, b) => a.id - b.id);
    collectionList.id = collectionLists.length ? collectionLists[collectionLists.length - 1].id + 1 : 0;
    collectionLists.push(collectionList);
    localStorage.setItem(this.shoppinglistsPrefix, JSON.stringify(collectionLists));
    return collectionList;
  }

  updateCollectionList(collectionList: CollectionList): CollectionList {
    let collectionLists = this.getAllCollectionLists();
    collectionLists = collectionLists.map((sl: CollectionList) => sl.id === collectionList.id ? collectionList : sl);
    localStorage.setItem(this.shoppinglistsPrefix, JSON.stringify(collectionLists));
    return collectionList;
  }

  deleteCollectionListById(id: any) {
    let collectionLists = this.getAllCollectionLists().sort((a, b) => a.id - b.id);
    localStorage.removeItem(this.shoppinglistPrefix + id);
    collectionLists = collectionLists.filter(sl => sl.id !== id);
    localStorage.setItem(this.shoppinglistsPrefix, JSON.stringify(collectionLists));
  }

  showWarning(name): void {
    const config: any = new MatSnackBarConfig();
    config.duration = AppConfig.snackBarDuration;
    this.snackBar.open(this.translations[name], 'OK', config);
  }

}
