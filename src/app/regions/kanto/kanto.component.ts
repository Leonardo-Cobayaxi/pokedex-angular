import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.component.html',
  styleUrls: ['./kanto.component.css']
})
export class KantoComponent {
  pokemons: any[] = []
  sprite: boolean = false
  public changeSprite() {
    this.sprite = !this.sprite
    console.log(this.sprite)
  }
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getPokemons().subscribe((response: any) => {
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
