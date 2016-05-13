import { Component, OnInit, Input } from '@angular/core';
import { User } from './../models/user/user';
import { UserService } from './../services/userService/userService';
import { Router, RouteParams } from '@angular/router-deprecated';



@Component({
  selector: 'user-detail',
  templateUrl: 'app/user-detail-component/user-detail.component.html',
  styleUrls: ['app/user-detail-component/user-detail.component.css']
})

export class UserDetailComponent {  
	@Input()
	user: User;
	constructor(private userService: UserService, private router: Router, private routeParams: RouteParams){

	}
	// ngOnInit(){
	// 	let id = +this.routeParams.get('id');
	// 	this.getUser(id);
	// }
	getUser(id){
		this.userService.getUserFromJSON(id).subscribe(
			user => {
				this.user = JSON.stringify(user);
				console.log(this.user);
			},
			error => {
				console.log("Error");
			}
		);
	}
	logChange(e){
		console.log(e);
	}	
}
