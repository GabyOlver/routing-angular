import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { MenuComponent } from './menu/menu.component';
import { PedidosComponent } from './pedidos/pedidos.component';

import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

//Login
//Menu
//Pedidos

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'menu',
  component: MenuComponent,
},
{
  path: 'pedidos',
  component: PedidosComponent,
},
{
  path: '',
  redirectTo: '/login',
  pathMatch: "full"
},
{
  path: '**',
  component: NotFoundComponent,
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PedidosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    //forRoot especifica que lo que tenga dentro es el enrutador principal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
