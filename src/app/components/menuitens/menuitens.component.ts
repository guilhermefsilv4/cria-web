import { Component, computed, input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menuitens',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './menuitens.component.html',
  styleUrl: './menuitens.component.scss'
})
export class MenuitensComponent {
  mobile = input(false)

  getClass = computed(() => this.mobile() ? "d-flex list-mobile" : "d-flex list")
}
