import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ChangepassworduserComponent } from './changepassworduser/changepassworduser.component';
import { ListComponent } from './list/list.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { UserComponent } from './user/user.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    AdminComponent,
    AdmindashboardComponent,
    AdminlogoutComponent,
    ChangepasswordComponent,
    ChangepassworduserComponent,
    ListComponent,
    OrderdetailsComponent,
    PurchaseComponent,
    RemoveproductComponent,
    SearchproductComponent,
    UserComponent,
    UserdashboardComponent,
    UserlogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
