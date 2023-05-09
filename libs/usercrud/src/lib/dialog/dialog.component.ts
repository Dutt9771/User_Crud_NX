import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'crud-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit{
constructor(private _usersService:UsersService) {}
@Input() obj:any
@Output() AddUser:EventEmitter<string> = new EventEmitter();
@Output() EditUser:EventEmitter<string> = new EventEmitter();
Users = []
User_data:any
data=false
  ngOnInit(){
    this.User_Login_Form()
    if(this.obj && this.obj.id){
      console.log("OBJ",this.obj.id)

        this._usersService.GetUser().subscribe({next:(user_res:any)=>{
          if(user_res){
            this.Users=user_res
            this.User_data=this.Users.find((item:any)=>item.id===this.obj.id)
            console.log("User Res",this.Users)
            console.log("User_data",this.User_data)
            this.user_login.patchValue({
              name: this.User_data.value.name,
              email: this.User_data.value.email,
              mobile: this.User_data.value.mobile,
            })
          }
        },error:(users_error:any)=>{
          console.log("Error",users_error)
        }})
    
    }
  }

      user_login:any
      User_Login_Form() {
        this.user_login = new FormGroup({
          name: new FormControl('', [Validators.required]),
          email: new FormControl('', [
            Validators.required,
            Validators.email,
          ]),
          mobile: new FormControl('', [
            Validators.required,
            Validators.pattern(/^[6-9]\d{9}$/),
          ]),
        });
      }
      get get_user_login() {
        return this.user_login.controls;
      }
Clear(){
  this.user_login.reset()
}
UserObj:any
Save_User_Login(){
  this.UserObj={
    name:this.user_login.value.name,
    email:this.user_login.value.email,
    mobile:this.user_login.value.mobile
  }
  // console.log("btn_val",btn_val)
        this.user_login.markAllAsTouched()
        if(this.user_login.valid){
          if(this.obj.modal=="Add"){

            this.AddUser.emit(this.UserObj)
            console.log("data",this.UserObj)
            this.user_login.reset()
          }else{
            if(this.obj && this.obj.id){

              const Edit_user_Data=this.Users.find((user:any)=>user.id===this.obj.id)
              this.EditUser.emit(this.UserObj)
              console.log("data",this.UserObj)
              this.user_login.reset()
            }
            
          }
        }
      }
      
      Save_User(btn_val:any){
        console.log("btn_val",btn_val)
      }
}
  