import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenuComponent, ButtonComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
