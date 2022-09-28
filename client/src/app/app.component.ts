import { Component } from '@angular/core';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData: UserModel[] = [];
  loadButton="Load Data";
  showTable = false;

  constructor(private userService: UserService) { }

  onLoadData(){
    this.loadButton = "Refresh data";
    this.showTable = true;
    this.userService.getUsers().subscribe(
      responseData=>{
        this.userData = responseData;
      }
    )
  }
}
