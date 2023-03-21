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
  showShiny: boolean = false
  loading: boolean = true
  randomNumber = function (min: number = 0, max: number = 1010) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }
  change() {
    this.randomon = []
    this.loading = true
    this.showShiny = false
    this.dataService.getMoreData(this.randomNumber(0, 1010)).subscribe((dataResponse: any) => {
      this.loading = false
      dataResponse[dataResponse.lenght - 1]
      this.randomon.push(dataResponse)

    })
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
      this.loading = false
      this.randomon.push(dataResponse)
    })
  }
}
