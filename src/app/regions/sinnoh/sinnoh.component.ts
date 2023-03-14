import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sinnoh',
  templateUrl: './sinnoh.component.html',
  styleUrls: ['./sinnoh.component.css']
})
export class SinnohComponent {
  pokemons: any[] = []
  sprite: boolean = false
  loading: boolean = true
  openModal: boolean = false
  pokeDetails: any[] = []
  public handleModal(pokemon: any) {
    this.openModal = true
    this.pokeDetails.push(pokemon)
    console.log(this.pokeDetails)
  }
  public closeModal() {
    this.openModal = false
    this.pokeDetails = []

  }
  public changeSprite() {
    this.sprite = !this.sprite
  }
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getPokemonsSinnoh().subscribe((response: any) => {
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
