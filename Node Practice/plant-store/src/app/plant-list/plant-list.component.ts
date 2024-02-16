import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PlantComponent } from '../plant/plant.component';
import { Plant } from '../models/plant';
@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [PlantComponent, NgFor],
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css',
})
export class PlantListComponent {
  plantList: Plant[] = [
    {
      id: 1,
      commonName: 'Potato',
      scientificName: 'Potato',
      description: 'Potato',
      price: 1,
      img: 'assets/images/potato.jpg',
    },
    {
      id: 2,
      commonName: 'Carrot',
      scientificName: 'Carrot',
      description: 'Carrot',
      price: 1,
      img: 'assets/images/carrot.jpg',
    },
    {
      id: 3,
      commonName: 'Tomato',
      scientificName: 'Tomato',
      description: 'Tomato',
      price: 1,
      img: 'assets/images/tomato.jpg',
    },
    {
      id: 4,
      commonName: 'Cabbage',
      scientificName: 'Cabbage',
      description: 'Cabbage',
      price: 1,
      img: 'assets/images/cabbage.jpg',
    },
  ];

  trackByPlantId(index: number, plant: any): any {
    return plant.id;
  }
}
