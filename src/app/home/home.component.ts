import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  randomon: any[] = []
  randomNumber = function (min: number = 0, max: number = 1010) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    console.log(rand)
    return rand;
  }
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getMoreData(this.randomNumber(0, 1010)).subscribe((dataResponse: any) => {
      this.randomon.push(dataResponse)
      console.log(this.randomon)
    })
  }
}