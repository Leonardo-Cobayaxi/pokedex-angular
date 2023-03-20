import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  private allMons: any
  searchMon: any[] = []
  showSearchCard: boolean = false
  showTitleCard: boolean = true
  showEmptyCard: boolean = true
  loading: boolean = false

  public search(value: string) {
    let filter = this.allMons.filter((mon: any) => mon.name === value.toLocaleLowerCase())
    if (value === '') {
      this.searchMon = []
      this.showSearchCard = false
      this.showEmptyCard = true
      this.loading = false

    }
    if (value !== '') {
      this.loading = true
      this.showEmptyCard = false
    }
    this.dataService.getMoreData(filter[0].name).subscribe((dataResponse: any) => {
      this.searchMon.push(dataResponse)
      this.showSearchCard = true
      this.showTitleCard = false
      this.loading = false

    })
  }

  constructor(private dataService: DataService, headerService: HeaderService, private _snackBar: MatSnackBar) {
    headerService.headerData = {
      title: 'Home',
      icon: 'home'
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnInit(): void {
    this.dataService.getAllPokemons().subscribe((dataResponse: any) => {
      this.allMons = dataResponse.results
    })

  }
}
