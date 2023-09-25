import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

 baseUrl = "https://api.onnes.in/api";

  constructor(private http: HttpClient) { }

  addMessageForm(form:any){
   return this.http.post(`${this.baseUrl}/Form`,form);
  }
}
