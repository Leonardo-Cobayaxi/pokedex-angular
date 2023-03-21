import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HeaderService } from 'src/app/header/header.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.component.html',
  styleUrls: ['./kanto.component.css']
})
export class KantoComponent {
  pokemons: any[] = []
  sprite: boolean = false
  loading: boolean = true
  openModal: boolean = false
  pokeDetails: any[] = []
  showShiny: boolean = false

  public changeShiny() {
    this.showShiny = !this.showShiny
  }
  public handleModal(pokemon: any) {
    this.openModal = true
    this.pokeDetails.push(pokemon)
    this.openSnackBar('Click on the artwork to see a shiny form.', 'X', 'snack')

  }
  public closeModal() {
    this.openModal = false
    this.pokeDetails = []
    this.showShiny = false

  }
  public changeSprite() {
    this.sprite = !this.sprite
  }

  constructor(private dataService: DataService, headerService: HeaderService, private _snackBar: MatSnackBar) {
    headerService.headerData = {
      title: 'Gen 1 - Kanto',
      icon: ''
    }
  }
  openSnackBar(message: string, action: string, className: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: [className],
    });
  }
  ngOnInit(): void {
    this.dataService.getPokemonsKanto().subscribe((response: any) => {
      this.loading = false
      response.results.forEach((result: any) => {
        this.dataService.getMoreData(result.name).subscribe((dataResponse: any) => {
          this.pokemons.push(dataResponse)
          let ascID = this.pokemons.sort(function (first, second) {
            return first.id - second.id
          })
        })
      });
    });
  }

}
