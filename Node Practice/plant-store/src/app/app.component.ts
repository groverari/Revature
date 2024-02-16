import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantComponent } from './plant/plant.component';
import { PlantListComponent } from './plant-list/plant-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlantComponent, PlantListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'plant-store';
}
