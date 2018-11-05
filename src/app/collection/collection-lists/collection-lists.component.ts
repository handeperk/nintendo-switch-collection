import {Component, ViewChild} from '@angular/core';
import {CollectionList} from '../shared/collection-list.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CollectionService} from '../shared/collection.service';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {AppConfig} from '../../config/app.config';

@Component({
  selector: 'app-remove-collection-list-dialog',
  templateUrl: './remove-collection-list.dialog.html',
})

export class RemoveCollectionListDialogComponent {
  constructor() {
  }
}


@Component({
  selector: 'app-collection-lists',
  templateUrl: './collection-lists.component.html',
  styleUrls: ['./collection-lists.component.scss']
})
export class CollectionListsComponent {

  collectionLists: CollectionList[];
  newCollectionListForm: FormGroup;

  @ViewChild('form') myNgForm; // just to call resetForm method

  constructor(private collectionService: CollectionService,
              private dialog: MatDialog,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.newCollectionListForm = this.formBuilder.group({
      'name': ['', [Validators.required]]
    });
    this.collectionLists = this.collectionService.getAllCollectionLists().sort(
      (a, b) => {
        return b.id - a.id;
      }
    );
  }

  createNewCollectionList(newShoppingList: CollectionList) {
    const newSLWithId = this.collectionService.createCollectionList(newShoppingList);
    this.collectionLists.unshift(newSLWithId);
    this.myNgForm.resetForm();
    this.collectionService.showWarning('collectionListCreated');
  }

  seeCollectionListDetails(shoppingList): void {
    this.router.navigate([AppConfig.routes.collection + '/' + shoppingList.id]);
  }

  remove(shoppingListToRemove: CollectionList): void {
    const dialogRef = this.dialog.open(RemoveCollectionListDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.collectionService.deleteCollectionListById(shoppingListToRemove.id);
        this.collectionLists = this.collectionLists.filter(sl => sl.id !== shoppingListToRemove.id);
        this.collectionService.showWarning('collectionListRemoved');
      }
    });
  }

}
