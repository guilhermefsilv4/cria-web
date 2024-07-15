import { Component, computed, signal } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { MenuitensComponent } from "../menuitens/menuitens.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonComponent, CommonModule, MenuitensComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuOpen = signal(false)

  getIconClass = computed(() => this.menuOpen() ? 'list-close-icon' : 'list-icon')

  handleIconClick() {
    this.menuOpen.update(open => !open)
  }
}
