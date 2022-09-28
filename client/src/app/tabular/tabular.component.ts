import { Component, Input, OnInit } from '@angular/core';
import { UserModel, columnName} from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.css']
})
export class TabularComponent implements OnInit {
  prevArray:string[] = [];
  @Input ('userdata') userData:UserModel[];
  saveEnable = false;
  header = Object.values(columnName);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onUpdatedData(){
    this.userService.getUsers().subscribe(newData=>{
      this.userData = newData;
    });
  }

  onEdit(event:any){
    event.path[0].value = "Save";
    event.path[1].childNodes[1].value = "Cancel";
    for(let j=0;j<event.path[2].cells.length-4;j++){
      event.path[2].cells[j].childNodes[0].disabled = false;
      this.prevArray.push(event.path[2].cells[j].childNodes[0].value);
    }
    this.saveEnable = true
  }
  
  onSave(event:any,data:UserModel){
    this.saveEnable = false;
    let editData: {[key: string]: string|number}={};
    event.path[0].value = "Edit";
    event.path[1].childNodes[1].value = "Delete";
    let j:number=0;
    for(j=0;j<event.path[2].cells.length-4;j++){
      event.path[2].cells[j].childNodes[0].disabled = true;
      editData[event.path[2].cells[j].childNodes[0].name]=event.path[2].cells[j].childNodes[0].value;
      this.prevArray[j]=event.path[2].cells[j].childNodes[0].value;
    }
    editData["phone_number"]=+editData["phone_number"];
    this.userService.editUser(data.id as string,editData).subscribe(_=>{
      this.userService.getUsers().subscribe(newData=>{
        this.userData = newData;
      });
    });

  }

  onCancel(event:any){
    this.saveEnable = false;
    event.path[0].value = "Delete";
    event.path[1].childNodes[0].value = "Edit";
    let j:number=0;
    for(j=0;j<event.path[2].cells.length-4;j++){
      event.path[2].cells[j].childNodes[0].disabled = true;
      event.path[2].cells[j].childNodes[0].value = this.prevArray[j];
    }
  }

  onDelete(selectedUser:UserModel){
    this.userService.deleteUser(selectedUser.id as string).subscribe(_=>{
      this.userService.getUsers().subscribe(newData=>{
        this.userData = newData;
      });
    })
  }


}
