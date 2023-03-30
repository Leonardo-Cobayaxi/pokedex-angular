import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { HeaderService } from '../header/header.service';


@Component({
  selector: 'app-randomon',
  templateUrl: './randomon.component.html',
  styleUrls: ['./randomon.component.css']
})
export class RandomonComponent {
  randomon: any[] = []
  randomonEntry: any[] = []
  randomFlavor: any[] = []
  showShiny: boolean = false
  loading: boolean = true
  cardBack: boolean = false
  randomNumber = function (min: number = 0, max: number = 1010) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }
  change() {
    this.randomon = []
    this.randomonEntry = []
    this.randomFlavor = []
    this.loading = true
    this.showShiny = false
    this.cardBack = false
    this.dataService.getMoreData(this.randomNumber(0, 1010)).subscribe((dataResponse: any) => {
      dataResponse[dataResponse.lenght - 1]
      this.dataService.getPokemonEntry(dataResponse.name).subscribe((entry: any) => {
        this.randomonEntry.push(entry)
        const fileterdFlavorTextEntries = entry.flavor_text_entries.filter(
          (element: any) => element.language.name === "en"
        );
        const flavorTextEntry = fileterdFlavorTextEntries.length > 0 ? fileterdFlavorTextEntries[0] : {};
        this.randomFlavor.push(flavorTextEntry)

      })
      this.loading = false
      this.randomon.push(dataResponse)
    })
  }

  public changeCard() {
    this.cardBack = !this.cardBack
  }
  public changeShiny() {
    this.showShiny = !this.showShiny
  }
  constructor(private dataService: DataService, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Randomon',
      icon: 'whatshot'
    }
  }
  ngOnInit(): void {
    this.dataService.getMoreData(this.randomNumber(0, 1010)).subscribe((dataResponse: any) => {
      dataResponse[dataResponse.lenght - 1]
      this.dataService.getPokemonEntry(dataResponse.name).subscribe((entry: any) => {
        this.randomonEntry.push(entry)
        console.log(this.randomonEntry)
        const fileterdFlavorTextEntries = entry.flavor_text_entries.filter(
          (element: any) => element.language.name === "en"
        );
        const flavorTextEntry = fileterdFlavorTextEntries.length > 0 ? fileterdFlavorTextEntries[0] : {};
        this.randomFlavor.push(flavorTextEntry)

      })
      this.loading = false
      this.randomon.push(dataResponse)
      console.log(this.randomon)
    })
  }
}
