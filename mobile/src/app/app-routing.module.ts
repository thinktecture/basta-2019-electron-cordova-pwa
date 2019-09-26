import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { FaceIdGuard } from './guards/faceid.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'protected', canActivate: [FaceIdGuard],  component: ProtectedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
