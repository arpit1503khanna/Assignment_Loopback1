import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from './user.model';
import { map } from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<{[key: string]:UserModel}>(environment.apiURL+'/users').pipe(
      map((responseData)=>{
        const userArray:UserModel[] = [];
        for (const key in responseData){
          if(responseData.hasOwnProperty(key)){
            userArray.push({...responseData[key]});
          }
        }
        return userArray;
      })
    )
  }

  deleteUser(id:string){
    return this.http.delete(`${environment.apiURL}/users/${id}`);
  }

  addUser(userData:UserModel){
    return this.http.post(environment.apiURL+'/users',userData);
  }

  editUser(id:string,userData:{[key: string]: string|number}){
    console.log(userData);
    return this.http.patch(`${environment.apiURL}/users/${id}`,userData);
  }
}
