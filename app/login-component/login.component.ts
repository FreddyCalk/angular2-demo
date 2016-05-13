import { Component, OnInit } from '@angular/core';
import { User } from './../models/user/user';
import { UserService } from './../services/userService/userService';
import { Router } from '@angular/router-deprecated';



@Component({
  selector: 'login',
  templateUrl: 'app/login-component/login.component.html',
  styleUrls: ['app/login-component/login.component.css']
})

export class LoginComponent implements OnInit {  
	// @Input()
	user: User = User.Empty;
	users: User[];
	constructor(private userService: UserService, private router: Router){

	}
	ngOnInit(){
		this.getUsers();
	}
	getUsers(){
		this.userService.getUsersFromJSON().subscribe(
			users => {
				this.users = users;
				console.log(this.users);
			},
			error => {
				console.log("Error");
			}
		);
	}
	logChange(e){
		console.log(e);
	}
	goToRegister(){
		this.router.navigate(['Registration',{}]);

	}	
}
