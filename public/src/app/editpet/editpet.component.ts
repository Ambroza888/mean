import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { observable } from 'rxjs';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {
  petId:any;
  pet:any;
  errors:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      console.log(params['id'])
      this.petId = params['id']
    })
    this.getPet()
  }
  getPet(){
    const obs = this._httpService.getOnePet(this.petId)
    obs.subscribe(data=>{
      this.pet = data;
    })
  }
  editPet(id){
    const obs = this._httpService.editPet(id,this.pet)
    obs.subscribe(data=>{
      if(data['message']){
        console.log(data)
        this.errors = data
      }
      else{
        this._router.navigate(['/pets']);
      }
    })
  }
}
