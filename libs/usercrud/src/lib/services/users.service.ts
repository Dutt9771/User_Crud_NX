import { environment } from './../../../../../apps/crud/src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(private http: HttpClient) {}
    baseurl = environment.baseurl;
    AddUser(data: UserModel){
      try {
        return this.http.post<UserModel>(this.baseurl, data);
      } catch (error: any) {
        return throwError(() => new Error(error));
      }
    }

    EditUser(data: any,id:any){
      try {
        return this.http.put<any>(this.baseurl+'/'+id, data);
      } catch (error: any) {
        return throwError(() => new Error(error));
      }
    }
  
    GetUser(){
      try {
        return this.http.get(this.baseurl);
      } catch (error: any) {
        return throwError(() => new Error(error));
      }
    }
  
  
    DeleteUser(id:any){
      try {
        return this.http.delete(this.baseurl+'/'+id);
      } catch (error: any) {
        return throwError(() => new Error(error));
      }
    }
  }
  
