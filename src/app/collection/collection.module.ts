import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CollectionRoutingModule} from './collection-routing.module';
import {SharedModule} from '../shared/shared.module';


import {CollectionListsComponent, RemoveCollectionListDialogComponent} from './collection-lists/collection-lists.component';
import {CollectionService} from './shared/collection.service';
import {CollectionComponent} from './collection.component';
import {SharedComponentsModule} from '../shared/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CollectionRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  declarations: [
    CollectionComponent,
    CollectionListsComponent,
    RemoveCollectionListDialogComponent
  ],
  entryComponents: [
    RemoveCollectionListDialogComponent
  ],
  providers: [
    CollectionService
  ]
})
export class CollectionModule {
}
