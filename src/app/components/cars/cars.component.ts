import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Cars } from '../../models/cars';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  carList: Cars[] = [];
  searchText: string = '';
  filteredCarList: Cars[] = [];
  constructor(private dataService: DataService,private storageService:StorageService) {}

  ngOnInit(): void {
    console.log('Inside cars component');
   // this.dataService.seedcar();
    this.getCarList();

  }
  getCarList() {
    this.carList = this.storageService.get('cars');
    console.log('car List : ', this.carList);
    this.filteredCarList = this.carList;
  }
  searchCar() {
    console.log('Search text :', this.searchText);
    const updatedSearchText = this.searchText.toLowerCase();
    if (this.searchText) {
      this.filteredCarList = this.carList.filter((car) => {
        return (
          car.name.toLowerCase().includes(updatedSearchText) ||
          car.body_type.toLowerCase().includes(updatedSearchText)
        );
      });
      return;
    }
    this.filteredCarList = this.carList;

    console.log('filteredCarList :', this.filteredCarList);
  }
  clearSearch() {
    this.searchText = '';
    this.searchCar();
  }
  deleteCar(ref: string) {
    console.log('ref', ref);
    this.carList = this.carList.filter((car) => car.ref != ref);
    this.filteredCarList = this.carList;
    this.storageService.set('cars',this.carList)
  }
  showCard: boolean = false;
  showCard2: boolean=false;
  toggleCard() {
    if (this.showCard) {
      this.showCard = false;
      this.showCard2 = true; // Activate the second toggle
    } else {
      this.showCard = true;
      this.showCard2 = false; // Activate the first toggle
    }
  }
}
