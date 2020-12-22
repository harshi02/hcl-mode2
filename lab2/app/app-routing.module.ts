import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductlistComponent } from './productlist/productlist.component';


const routes: Routes = [
  { path : '', redirectTo: '/departments', pathMatch: 'full'},
  { path : 'category', component: CategoryComponent},
  { path : 'products', component: ProductlistComponent},
  { path : 'products/:id', component: ProductDetailComponent},
  { path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
