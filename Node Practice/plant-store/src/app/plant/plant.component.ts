import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Plant } from '../models/plant';
import { PlantListComponent } from '../plant-list/plant-list.component';

@Component({
  selector: 'app-plant',
  standalone: true,
  imports: [PlantListComponent],
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css',
})
export class PlantComponent {
  //every plant component will have this plant property
  @Input() plant: Plant;
  addToCartHandler(): void {
    console.log(this.plant.id);
  }
}
