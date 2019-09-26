import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsResolver } from './resolvers/products.resolver';
import { ProductResolver } from './resolvers/product.resolver';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', resolve: {products: ProductsResolver} ,component:ProductsComponent},
  {path: 'product/:id', resolve: {product: ProductResolver}, component: ProductDetailsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
