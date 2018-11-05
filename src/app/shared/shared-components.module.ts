import {ModuleWithProviders, NgModule} from '@angular/core';
import {CollectionListDetailComponent} from '../collection/collection-list-detail/collection-list-detail.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from './material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule
  ],
  declarations: [
    CollectionListDetailComponent
  ],
  exports: [
    CollectionListDetailComponent
  ]
})

export class SharedComponentsModule {
}
