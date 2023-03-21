import { Component, ViewChild } from '@angular/core';
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
  constructor(private dataService: DataService, headerService: HeaderService) {
    headerService.headerData = {
      title: 'Best Mon',
      icon: 'favorite'
    }
  }
  showShiny: boolean = false

  public changeShiny() {
    this.showShiny = !this.showShiny
  }
  ngOnInit(): void {

    this.dataService.getMoreData(553).subscribe((dataResponse: any) => {
      this.bestmon.push(dataResponse)
      this.loading = false
    })
  }
}
