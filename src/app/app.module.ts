import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/**
 * Routes => Me permite crear una constante de tipo Routes
 */
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';
import { LoginComponent } from './Components/login/login.component';
import { CreateBookComponent } from './Components/create-book/create-book.component';
import { ListBookComponent } from './Components/list-book/list-book.component';

const routesApp:Routes = [
 {
   path:'home',component:HomeComponent
  },
 {
   path:'sing-up',component:SingUpComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'create-book',component: CreateBookComponent
  },
  {
    path: 'list-book',component: ListBookComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SingUpComponent,
    LoginComponent,
    CreateBookComponent,
    ListBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
