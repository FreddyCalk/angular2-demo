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
var user_1 = require('./../models/user/user');
var userService_1 = require('./../services/userService/userService');
var router_deprecated_1 = require('@angular/router-deprecated');
var UserDetailComponent = (function () {
    function UserDetailComponent(userService, router, routeParams) {
        this.userService = userService;
        this.router = router;
        this.routeParams = routeParams;
    }
    // ngOnInit(){
    // 	let id = +this.routeParams.get('id');
    // 	this.getUser(id);
    // }
    UserDetailComponent.prototype.getUser = function (id) {
        var _this = this;
        this.userService.getUserFromJSON(id).subscribe(function (user) {
            _this.user = JSON.stringify(user);
            console.log(_this.user);
        }, function (error) {
            console.log("Error");
        });
    };
    UserDetailComponent.prototype.logChange = function (e) {
        console.log(e);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserDetailComponent.prototype, "user", void 0);
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'user-detail',
            templateUrl: 'app/user-detail-component/user-detail.component.html',
            styleUrls: ['app/user-detail-component/user-detail.component.css']
        }), 
        __metadata('design:paramtypes', [userService_1.UserService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map