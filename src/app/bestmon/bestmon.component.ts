import { Component } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-bestmon',
  templateUrl: './bestmon.component.html',
  styleUrls: ['./bestmon.component.css']
})

export class BestmonComponent {
  loading: boolean = true
  bestmon: any[] = []
  pokeEntry: any[] = []
  pokeFlavor: any[] = []
  cardBack: boolean = false
  showShiny: boolean = false
  constructor(private dataService: DataService, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Best Mon',
      icon: 'favorite'
    }
  }
  public changeCard() {
    this.cardBack = !this.cardBack
  }
  public changeShiny() {
    this.showShiny = !this.showShiny
  }
  ngOnInit(): void {

    this.dataService.getMoreData(553).subscribe((dataResponse: any) => {
      this.dataService.getPokemonEntry(dataResponse.name).subscribe((entry: any) => {
        this.pokeEntry.push(entry)
        const fileterdFlavorTextEntries = entry.flavor_text_entries.filter(
          (element: any) => element.language.name === "en"
        );
        const flavorTextEntry = fileterdFlavorTextEntries.length > 0 ? fileterdFlavorTextEntries[0] : {};
        this.pokeFlavor.push(flavorTextEntry)

      })
      this.loading = false
      this.bestmon.push(dataResponse)
    })
  }
}
