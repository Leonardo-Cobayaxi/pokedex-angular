import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPokemons() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0')
  }
  getPokemonsKanto() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
  }
  getPokemonsJohto() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=151`)
  }
  getPokemonsHoenn() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=135&offset=251`)
  }
  getPokemonsSinnoh() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=108&offset=386`)
  }
  getPokemonUnova() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=155&offset=494`)
  }
  getPokemonsKalos() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=72&offset=649`)
  }
  getPokemonsAlola() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=88&offset=721`)
  }
  getPokemonsGalar() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=96&offset=809`)
  }
  getPokemonsPaldea() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=105&offset=905`)
  }
  getMoreData(name: any) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
