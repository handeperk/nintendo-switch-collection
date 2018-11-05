import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {Error404Component} from './core/error404/error404.component';
import {AppConfig} from './config/app.config';
import {CollectionListDetailComponent} from './collection/collection-list-detail/collection-list-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '', component: DashboardComponent, data: {title: 'Dashboard'}
  },
  {path: AppConfig.routes.collection, loadChildren: 'app/collection/collection.module#CollectionModule'},
  {path: AppConfig.routes.error404, component: Error404Component},
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
}
