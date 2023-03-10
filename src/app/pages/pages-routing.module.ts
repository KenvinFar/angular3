import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  //rutas protegidas
  { path: 'pages',component: PagesComponent,children:[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'product', component: PagesComponent },
    //{ path: 'product', component, PagesComponent}
  ]
},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
})
export class PagesRoutingModule { }
