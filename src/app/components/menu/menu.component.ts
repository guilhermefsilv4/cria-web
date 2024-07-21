import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { MenuitensComponent } from "../menuitens/menuitens.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonComponent, CommonModule, MenuitensComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
}
