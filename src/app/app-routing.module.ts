import { HomeComponent } from './home/home.component';
import { GrabByDistrictComponent } from './grab-by-district/grab-by-district.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrabByPinComponent } from './grab-by-pin/grab-by-pin.component';

const routes: Routes = [
  { path: 'grabByPin', component: GrabByPinComponent },
  { path: 'grabByDistrict', component: GrabByDistrictComponent },
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
