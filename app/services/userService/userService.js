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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
// import {USERS} from '../mock-users';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'app/services/user-data.json'; //URL to JSON - not web api
    }
    // getUsers() {
    //     return Promise.resolve(USERS);
    // }
    // getUser(id: number) {
    //     return this.getUsers().then(users => users.filter(user => user.id === id)[0]);
    // }
    UserService.prototype.getUsersFromJSON = function () {
        return this.http.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getUserFromJSON = function (id) {
        return this.http.get(this.usersUrl)
            .map(function (res) {
            if (res.status < 200 || res.status >= 300) {
                throw new Error('Bad response status: ' + res.status);
            }
            var body = res.json();
            // let userToReturn: User = body.filter(user=> user.Id === id)[0];
            var userToReturn;
            body.forEach(function (user) { return user.Id == id ? userToReturn = user : ''; });
            console.log(body);
            return userToReturn || {};
        })
            .catch(this.handleError);
    };
    UserService.prototype.addUser = function (name) {
        var body = JSON.stringify({ name: name });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.usersUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //won't work with JSON
    UserService.prototype.updateUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.usersUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body || {};
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.log(error.message);
        //console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map