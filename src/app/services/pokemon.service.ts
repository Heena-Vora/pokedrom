import { Injectable } from '@angular/core';
import { LocalStoreService } from './local-store.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private localStore: LocalStoreService) { }

  getPokemons() {
    // https://pokeapi.co/api/v2/pokemon?offset=300&limit=100
  }

}
