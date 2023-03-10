import { Component } from '@angular/core';

import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent {
  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Regions',
      icon: 'location_on'
    }
  }
}
