import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }
  getPokemonsKanto() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
  }
  getPokemonsJohto() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=235&offset=151`)
  }
  getPokemonsHoen() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=368&offset=252`)
  }
  getPokemonsSinnoh() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=493&offset=387`)
  }
  getPokemonUnova() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=649&offset=494`)
  }
  getPokemonsKalos() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=721&offset=650`)
  }
  getPokemonsAlola() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=368&offset=722`)
  }
  getPokemonsGalar() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=905&offset=910`)
  }
  getPokemonsPaldea() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=1010&offset=906`)
  }

  getMoreData(name: any) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
