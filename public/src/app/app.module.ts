import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PetsComponent } from './pets/pets.component';
import { CreatepetComponent } from './createpet/createpet.component';
import { PetinfoComponent } from './petinfo/petinfo.component';
import { EditpetComponent } from './editpet/editpet.component'
@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    CreatepetComponent,
    PetinfoComponent,
    EditpetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
