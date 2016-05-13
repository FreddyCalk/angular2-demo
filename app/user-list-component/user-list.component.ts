import { Component, OnInit } from '@angular/core';
import { User } from './../models/user/user';
import { UserService } from './../services/userService/userService';
import { Router } from '@angular/router-deprecated';
import { UserDetailComponent } from './../user-detail-component/user-detail.component';


@Component({
  selector: 'user-list',
  templateUrl: 'app/user-list-component/user-list.component.html',
  styleUrls: ['app/user-list-component/user-list.component.css'],
  directives: [UserDetailComponent]
})

export class UserListComponent implements OnInit {  
	// @Input()
	user: User = User.Empty;
	users: User[];
	selectedUser: User;
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
	onSelect(user){
		console.log(user)
		this.selectedUser = JSON.stringify(user);
	}
	goToUserInfo(param){
		this.router.navigate(["UserDetail", {id: param.Id} ])
	}
	logChange(e){
		console.log(e);
	}	
}
