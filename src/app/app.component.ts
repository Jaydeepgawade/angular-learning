import { Component } from '@angular/core';
import { StudentInfoComponent } from './student-info/student-info.component';
import { RouterOutlet } from '@angular/router';
import { TrainerInfoComponent } from "./trainer-info/trainer-info.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentInfoComponent, TrainerInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
}
