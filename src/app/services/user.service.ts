import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor (private http: HttpClient){}
    //méytodo para consumir servicios de backend
  getUsersService(){
    
    return this.http.get(`${environment.URIS}/users`)}; 
  }