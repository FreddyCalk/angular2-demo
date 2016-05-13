import { Component, OnInit } from '@angular/core';
import { User } from './../models/user/user';
import { UserService } from './../services/userService/userService';
import { Router } from '@angular/router-deprecated';


@Component({
  selector: 'register',
  templateUrl: 'app/register-component/register.component.html',
  styleUrls: ['app/register-component/register.component.css']
})

export class RegisterComponent {  
	// @Input()
	user: User = User.Empty;
	users: User[];
	constructor(private userService: UserService){

	}
	
	// ngOnInit(){
	// 	this.getUsers();
	// }
	// getUsers(){
	// 	this.userService.getUsersFromJSON().subscribe(
	// 		users => {
	// 			this.users = users;
	// 			console.log(this.users);
	// 		},
	// 		error => {
	// 			console.log("Error");
	// 		}
	// 	);
	// }
	// logChange(e){
	// 	console.log(e);
	// }	
}
