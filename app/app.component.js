"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var login_component_1 = require('./login-component/login.component');
var register_component_1 = require('./register-component/register.component');
var user_list_component_1 = require('./user-list-component/user-list.component');
var user_detail_component_1 = require('./user-detail-component/user-detail.component');
var userService_1 = require('./services/userService/userService');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1><h3>{{subtitle}}</h3>\n  <router-outlet></router-outlet><a [routerLink]=\"['Registration']\">Register</a><a [routerLink]=\"['Login']\">Login</a>",
            directives: [login_component_1.LoginComponent, register_component_1.RegisterComponent, user_list_component_1.UserListComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [userService_1.UserService, http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/register',
                name: 'Registration',
                component: register_component_1.RegisterComponent,
                useAsDefault: false
            }, {
                path: '/login',
                name: 'Login',
                component: login_component_1.LoginComponent,
                useAsDefault: false
            }, {
                path: '/users',
                name: 'UserList',
                component: user_list_component_1.UserListComponent,
                useAsDefault: false
            }, {
                path: '/user/:id',
                name: 'UserDetail',
                component: user_detail_component_1.UserDetailComponent,
                useAsDefault: false
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map