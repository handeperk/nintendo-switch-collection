import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CollectionComponent} from './collection.component';
import {CollectionListsComponent} from './collection-lists/collection-lists.component';
import {CollectionListDetailComponent} from './collection-list-detail/collection-list-detail.component';

const collectionRoutes: Routes = [
  {
    path: '',
    component: CollectionComponent,
    children: [
      {path: '', component: CollectionListsComponent, data: {'title': 'Collection'} },
      {path: ':id', component: CollectionListDetailComponent, data: {'title': 'CollectionList'}}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(collectionRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CollectionRoutingModule {
}
