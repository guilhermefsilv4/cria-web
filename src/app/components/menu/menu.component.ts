import { CommonModule } from '@angular/common';
import {
  Component
} from '@angular/core';
import { BoldDirective } from '@app/directives/bold/bold.directive';
import { ButtonComponent } from '../button/button.component';
import { MenuitensComponent } from '../menuitens/menuitens.component';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-menu',
    standalone: true,
  imports: [ButtonComponent, CommonModule, MenuitensComponent, BoldDirective, RouterLink],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
})
export class MenuComponent {
}
