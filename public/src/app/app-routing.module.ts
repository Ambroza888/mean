import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { CreatepetComponent } from './createpet/createpet.component';
import { PetinfoComponent } from './petinfo/petinfo.component';
import { EditpetComponent } from './editpet/editpet.component';


const routes: Routes = [
  {path: 'pets', component:PetsComponent},
  {path: 'createpet', component:CreatepetComponent},
  {path: 'pets/:id', component:PetinfoComponent},
  {path: 'editpet/:id',component:EditpetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
