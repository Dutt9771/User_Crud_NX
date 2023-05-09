import { UsersService } from '../services/users.service';
import { Component, Output, EventEmitter } from '@angular/core';
import {Input} from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'crud-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})  
export class CardComponent {

@Input() userObj:any;
@Output() EditUser:EventEmitter<string> = new EventEmitter();
obj={
  id:"",
  title:"Edit User",
  btn_value:"Edit",
  modal:"Edit"
}

constructor(private _usersService: UsersService) {
  
}

Edituser(id:any) {
  console.log("id",id)
  this.obj.id=id
 this.EditUser.emit(id)
}


  Deleteuser(id:any){
   
      this._usersService.DeleteUser(id).subscribe({next:(user_res:any)=>{
        if(user_res){
          console.log("User Res",user_res)
        }
      },error:(users_error:any)=>{
        console.log("Error",users_error)
      }})
  }
}


