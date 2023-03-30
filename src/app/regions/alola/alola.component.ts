import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HeaderService } from 'src/app/header/header.service';
@Component({
  selector: 'app-alola',
  templateUrl: './alola.component.html',
  styleUrls: ['./alola.component.css']
})
export class AlolaComponent {
  showShiny: boolean = false
  pokemons: any[] = []
  sprite: boolean = false
  loading: boolean = true
  openModal: boolean = false
  pokeDetails: any[] = []
  pokeEntry: any[] = []
  pokeFlavor: any[] = []
  cardBack: boolean = false
  public changeCard() {
    this.cardBack = !this.cardBack
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


  public changeShiny() {
    this.showShiny = !this.showShiny
  }
  constructor(private dataService: DataService, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Gen 7 - Alola',
      icon: ''
    }
  }
  ngOnInit(): void {
    this.dataService.getPokemonsAlola().subscribe((response: any) => {
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
