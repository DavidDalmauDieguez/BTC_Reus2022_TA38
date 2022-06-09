import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPersonajesComponent } from './info-personajes/info-personajes.component';

import { PersonajesComponent} from './personajes/personajes.component';

const routes: Routes = [{
  path: 'personajes',
  component:PersonajesComponent
},{
  path: 'infopj',
  component:InfoPersonajesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
