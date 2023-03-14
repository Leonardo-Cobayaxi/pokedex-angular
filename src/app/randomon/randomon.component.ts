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
  randomNumber = function (min: number = 0, max: number = 1010) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }
  mudar() {
    this.randomon = []
    this.dataService.getMoreData(this.randomNumber(0, 1010)).subscribe((dataResponse: any) => {
      dataResponse[dataResponse.lenght - 1]
      this.randomon.push(dataResponse)
    })
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
      this.randomon.push(dataResponse)
    })
  }
}
