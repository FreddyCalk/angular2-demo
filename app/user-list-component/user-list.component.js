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
var user_detail_component_1 = require('./../user-detail-component/user-detail.component');
var UserListComponent = (function () {
    function UserListComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        // @Input()
        this.user = user_1.User.Empty;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsersFromJSON().subscribe(function (users) {
            _this.users = users;
            console.log(_this.users);
        }, function (error) {
            console.log("Error");
        });
    };
    UserListComponent.prototype.onSelect = function (user) {
        console.log(user);
        this.selectedUser = JSON.stringify(user);
    };
    UserListComponent.prototype.goToUserInfo = function (param) {
        this.router.navigate(["UserDetail", { id: param.Id }]);
    };
    UserListComponent.prototype.logChange = function (e) {
        console.log(e);
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: 'app/user-list-component/user-list.component.html',
            styleUrls: ['app/user-list-component/user-list.component.css'],
            directives: [user_detail_component_1.UserDetailComponent]
        }), 
        __metadata('design:paramtypes', [userService_1.UserService, router_deprecated_1.Router])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map