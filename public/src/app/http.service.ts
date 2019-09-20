import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }


  getPets(){
    return this._http.get('/api/pet')
  }
  addPet(pet){
    return this._http.post('/api/pet',pet)
  }
  getOnePet(id){
    return this._http.get(`/api/pet/findOne/${id}`)
  }
  removePet(id){
    return this._http.delete(`/api/pet/${id}`)
  }
  editPet(id,pet){
    return this._http.put(`/api/pet/updatePet/${id}`,pet)
  }
  likeUP(id){
    return this._http.put(`api/pet/likeUP/${id}`,id)
  }
}
