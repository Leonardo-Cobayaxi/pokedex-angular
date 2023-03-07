import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pkm-list',
  templateUrl: './pkm-list.component.html',
  styleUrls: ['pkm-list.component.css']
})
export class PkmListComponent {
  pokemons: any[] = []
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getPokemons().subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this.dataService.getMoreData(result.name).subscribe((dataResponse: any) => {
          this.pokemons.push(dataResponse)
          console.log(dataResponse)
        })
      });
    });
  }
}
