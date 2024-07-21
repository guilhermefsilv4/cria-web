import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

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
