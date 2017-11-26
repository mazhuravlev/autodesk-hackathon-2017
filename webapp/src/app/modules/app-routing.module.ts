import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "../components/index/index.component";
import {ForemanComponent} from "../components/foreman/foreman.component";
import {CranemanComponent} from "../components/craneman/craneman.component";
import {FactoryComponent} from "../components/factory/factory.component";
import {SessionComponent} from "../components/session/session.component";
import {SimpleGuard} from "../guards/simple.guard";
import {CustomerComponent} from "../components/customer/customer.component";

const routes: Routes = [
  {
    path: '',
    component: SessionComponent,
    canDeactivate: [SimpleGuard],
    children: []
  },
  {
    path: 'foreman',
    component: ForemanComponent,
    children: []
  },
  {
    path: 'craneman',
    component: CranemanComponent,
    children: []
  },
  {
    path: 'factory',
    component: FactoryComponent,
    children: []
  },
  {
    path: 'customer',
    component: CustomerComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
