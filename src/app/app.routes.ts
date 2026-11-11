import { Routes } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { TipusComponent } from './tipus/tipus.component';
import { RegionsComponent } from './regions/regions.component';

// Cada ruta relaciona una URL amb un component
export const routes: Routes = [
  {path: '', component: IniciComponent, pathMatch: 'full'},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'tipus', component: TipusComponent},
  {path: 'regions', component: RegionsComponent},
];