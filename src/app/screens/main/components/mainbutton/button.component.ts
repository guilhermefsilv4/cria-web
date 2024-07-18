import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-mainbutton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../../../../components/button/button.component.html',
  styleUrl: './button.component.scss'
})
export class MainButtonComponent extends ButtonComponent {
}
