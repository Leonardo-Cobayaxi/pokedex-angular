import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'app-unova',
  templateUrl: './unova.component.html',
  styleUrls: ['./unova.component.css']
})
export class UnovaComponent {
  pokemons: any[] = []
  sprite: boolean = false
  loading: boolean = true
  openModal: boolean = false
  pokeDetails: any[] = []
  public handleModal(pokemon: any) {
    this.openModal = true
    this.pokeDetails.push(pokemon)
    console.log(this.pokeDetails)
  }
  public closeModal() {
    this.openModal = false
    this.pokeDetails = []

  }
  public changeSprite() {
    this.sprite = !this.sprite
  }
  constructor(private dataService: DataService, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Gen 5 - Unova',
      icon: ''
    }
  }
  ngOnInit(): void {
    this.dataService.getPokemonUnova().subscribe((response: any) => {
      this.loading = false
      response.results.forEach((result: any) => {
        this.dataService.getMoreData(result.name).subscribe((dataResponse: any) => {
          this.pokemons.push(dataResponse)
          let ascID = this.pokemons.sort(function (first, second) {
            return first.id - second.id
          })
          console.log(this.pokemons)
        })
      });
    });
  }
}
