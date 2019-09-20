import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-petinfo',
  templateUrl: './petinfo.component.html',
  styleUrls: ['./petinfo.component.css']
})
export class PetinfoComponent implements OnInit {
  petId:any;
  onePet:any;
  up:any;
  clicked = false;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
    // console.log(params['id'])
    this.petId = params['id']
    })
    this.getOnePet()
  }
  getOnePet(){
    const obs = this._httpService.getOnePet(this.petId)
    obs.subscribe(data=>{
      // console.log(data)
      this.onePet = data;
    })
  }
  removePet(id){
    const obs = this._httpService.removePet(id)
    obs.subscribe(data=>{
      console.log(data)
      this._router.navigate(['/pets'])
    })
  }
  likeUP(id){
    const obs = this._httpService.likeUP(id)
    obs.subscribe(data=>{
      console.log(data)
      this.getOnePet()
      this.up = data;
    })
  }
}
