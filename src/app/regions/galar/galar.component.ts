import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HeaderService } from 'src/app/header/header.service';
@Component({
  selector: 'app-galar',
  templateUrl: './galar.component.html',
  styleUrls: ['./galar.component.css']
})
export class GalarComponent {
  pokemons: any[] = []
  sprite: boolean = false
  loading: boolean = true
  openModal: boolean = false
  pokeDetails: any[] = []
  showShiny: boolean = false
  pokeEntry: any[] = []
  pokeFlavor: any[] = []
  cardBack: boolean = false
  public changeCard() {
    this.cardBack = !this.cardBack
  }
  public changeShiny() {
    this.showShiny = !this.showShiny
  }
  public handleModal(pokemon: any) {
    this.openModal = true
    this.pokeDetails.push(pokemon)
    this.dataService.getPokemonEntry(pokemon.name).subscribe((entry: any) => {
      this.pokeEntry.push(entry)
      const fileterdFlavorTextEntries: any = entry.flavor_text_entries.filter(
        (element: any) => element.language.name === "en"
      );
      const flavorTextEntry = fileterdFlavorTextEntries.length > 0 ? fileterdFlavorTextEntries[0] : {};
      this.pokeFlavor.push(flavorTextEntry)
    })


  }
  public closeModal() {
    this.openModal = false
    this.pokeDetails = []
    this.showShiny = false
    this.pokeEntry = []
    this.pokeFlavor = []
    this.cardBack = false
  }
  public changeSprite() {
    this.sprite = !this.sprite
  }
  constructor(private dataService: DataService, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Gen 8 - Galar',
      icon: ''
    }
  }
  ngOnInit(): void {
    this.dataService.getPokemonsGalar().subscribe((response: any) => {
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
