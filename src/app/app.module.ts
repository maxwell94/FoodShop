import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard as AuthGuard } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    RouterModule.forRoot([
      { path:'' , component: HomeComponent},
      { path:'products' , component: ProductsComponent},
      { path:'shopping-cart' , component: ShoppingCartComponent},
      { path:'login' , component: LoginComponent},

      { path:'my/orders' , component: MyOrdersComponent,canActivate:[AuthGuard]},
      { path:'order-sucess' , component: OrderSuccessComponent,canActivate:[AuthGuard]},
      { path:'check-out' , component: CheckOutComponent,canActivate:[AuthGuard]},
      
      { path:'admin/orders' , component: AdminOrdersComponent,canActivate:[AuthGuard,AdminAuthGuardService]},
      { path:'admin/products' , component: AdminProductsComponent,canActivate:[AuthGuard,AdminAuthGuardService]},
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
