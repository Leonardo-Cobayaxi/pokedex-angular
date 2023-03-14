import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-paldea',
  templateUrl: './paldea.component.html',
  styleUrls: ['./paldea.component.css']
})
export class PaldeaComponent {
  pokemons: any[] = []
  sprite: boolean = false
  loading: boolean = true
  public changeSprite() {
    this.sprite = !this.sprite
  }
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getPokemonsPaldea().subscribe((response: any) => {
      this.loading = false
      response.results.forEach((result: any) => {
        this.dataService.getMoreData(result.name).subscribe((dataResponse: any) => {
          this.pokemons.push(dataResponse)
          let ascID = this.pokemons.sort(function (first, second) {
            return first.id - second.id
          })
          console.log(this.pokemons)
        })
      });
    });
  }
}
