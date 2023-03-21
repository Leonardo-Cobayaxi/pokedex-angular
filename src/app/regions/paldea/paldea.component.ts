import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'app-paldea',
  templateUrl: './paldea.component.html',
  styleUrls: ['./paldea.component.css']
})
export class PaldeaComponent {
  pokemons: any[] = []
  sprite: boolean = false
  loading: boolean = true
  openModal: boolean = false
  pokeDetails: any[] = []
  showShiny: boolean = false

  public changeShiny() {
    this.showShiny = !this.showShiny
  }
  public handleModal(pokemon: any) {
    this.openModal = true
    this.pokeDetails.push(pokemon)

  }
  public closeModal() {
    this.openModal = false
    this.pokeDetails = []
    this.showShiny = false

  }
  public changeSprite() {
    this.sprite = !this.sprite
  }
  constructor(private dataService: DataService, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Gen 9 - Paldea',
      icon: ''
    }
  }
  ngOnInit(): void {
    this.dataService.getPokemonsPaldea().subscribe((response: any) => {
      this.loading = false
      response.results.forEach((result: any) => {
        this.dataService.getMoreData(result.name).subscribe((dataResponse: any) => {
          this.pokemons.push(dataResponse)
          let ascID = this.pokemons.sort(function (first, second) {
            return first.id - second.id
          })

        })
      });
    });
  }
}
