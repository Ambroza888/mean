import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createpet',
  templateUrl: './createpet.component.html',
  styleUrls: ['./createpet.component.css']
})
export class CreatepetComponent implements OnInit {
takePet:any;
errors:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.takePet = {name:'',type:'',description:'',skills:[{skill:null},{skill:null},{skill:null}]}
  }
  addPet(){
    const obs = this._httpService.addPet(this.takePet)
    obs.subscribe(data=>{
      // console.log(data['message'])
      if(data['message']){
        this.errors = data['message'];
      }
      else{
        this.goBack()
      }
    })
  }
  goBack(){
    this._router.navigate(['/pets']);
  }
}
