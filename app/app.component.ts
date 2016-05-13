import { Component } from '@angular/core';
import { LoginComponent } from './login-component/login.component';
import { RegisterComponent } from './register-component/register.component';
import { UserListComponent } from './user-list-component/user-list.component';
import { UserDetailComponent } from './user-detail-component/user-detail.component';
import { UserService } from './services/userService/userService';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h3>{{subtitle}}</h3>
  <router-outlet></router-outlet><a [routerLink]="['Registration']">Register</a><a [routerLink]="['Login']">Login</a>`,
  directives: [LoginComponent, RegisterComponent, UserListComponent, ROUTER_DIRECTIVES],
  providers: [UserService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})


@RouteConfig([
   {
       path: '/register',
       name: 'Registration',
       component: RegisterComponent,
       useAsDefault: false
   },{
   		path: '/login',
   		name: 'Login',
   		component: LoginComponent,
   		useAsDefault: false
   },{
   		path: '/users',
   		name: 'UserList',
   		component: UserListComponent,
   		useAsDefault: false
   },{
   		path: '/user/:id',
   		name: 'UserDetail',
   		component: UserDetailComponent,
   		useAsDefault: false
   }
])


export class AppComponent { title: 'Login'; subtitle: 'sub-login' }