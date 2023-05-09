import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'
import { UsersService } from '@crud/usercrud'

@Component({
  selector: 'crud-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(private _usersService: UsersService) {}
Users=[]
  userObj={
  name:"Dutt",
  email:"d@gmail.com",
  mobile:"1234567890"
}
  obj={
    title:"Add User",
    btn_value:"ADD",
    modal:"Add"
}

  ngOnInit(){
    this.Get_User_Details()
  }
  User_Add_Data:any
  ADD_User(data:any) { 
    this.User_Add_Data=data
    console.log("Add User Data",data)
    console.log("Add User Data",this.User_Add_Data)

      this.ADD()

   }
   Edit_Data:any
   Edit_User(id:any) { 
     console.log("Edit User Id",id)
     console.log("Edit User data",this.Edit_Data)
     const Edit_User=this.Users.find((user:any)=>user.id===id)
     // this.Edit_Data=data

      // this.Edit(Edit_User,id)

   }


  Get_User_Details() { 
    this._usersService.GetUser().subscribe({next:(user_res:any)=>{
      if(user_res){
        this.Users=user_res
        console.log("User Res",this.Users)

      }
    },error:(users_error:any)=>{
      console.log("Error",users_error)
    }})
   }
  ADD(){
    this._usersService.AddUser(this.User_Add_Data).subscribe({next:(user_res:any)=>{
      if(user_res){
        console.log("user_res",user_res)
        this.Get_User_Details()
      }
    },error:(users_error:any)=>{
      console.log("Error",users_error)
    }})
  }

  Edit(data:any,id:any){
    this._usersService.EditUser(data,id).subscribe({next:(user_res:any)=>{
      if(user_res){
        console.log("user_res",user_res)
        this.Get_User_Details()
      }
    },error:(users_error:any)=>{
      console.log("Error",users_error)
    }})
  }

  Delete(id:any){
    this._usersService.DeleteUser(id).subscribe({next:(user_res:any)=>{
      if(user_res){
        console.log("User Res",user_res)
      }
    },error:(users_error:any)=>{
      console.log("Error",users_error)
    }})
}
  }

