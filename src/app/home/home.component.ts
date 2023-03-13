import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderService } from '../header/header.service';

import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  private allMons: any
  searchMon: any[] = []
  showSearchCard: boolean = false

  public search(value: string) {
    let filter = this.allMons.filter((mon: any) => mon.name === value.toLocaleLowerCase())
    if (value === '' || value.length !== filter[0].name.length) {
      this.searchMon = []
      this.showSearchCard = false
    }
    this.dataService.getMoreData(filter[0].name).subscribe((dataResponse: any) => {

      this.searchMon.push(dataResponse)
      this.showSearchCard = true

    })
  }
  randomon: any[] = []
  randomNumber = function (min: number = 0, max: number = 1010) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }
  mudar() {
    console.log(this.randomNumber(0, 1010))
    this.randomon = []
    this.dataService.getMoreData(this.randomNumber(0, 1010)).subscribe((dataResponse: any) => {
      dataResponse[dataResponse.lenght - 1]
      this.randomon.push(dataResponse)
    })
  }
  constructor(private dataService: DataService, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Home',
      icon: 'home'
    }
  }

  ngOnInit(): void {
    this.dataService.getMoreData(this.randomNumber(0, 1010)).subscribe((dataResponse: any) => {
      dataResponse[dataResponse.lenght - 1]
      this.randomon.push(dataResponse)
    })
    this.dataService.getAllPokemons().subscribe((dataResponse: any) => {
      this.allMons = dataResponse.results

    })

  }
}
