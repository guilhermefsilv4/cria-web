import {
    Component
} from '@angular/core';
import { MenuComponent } from '@components/menu/menu.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { AboutComponent } from '../about/about.component';
import { MainButtonComponent } from "./components/mainbutton/button.component";

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [
    MenuComponent,
    CardComponent,
    ButtonComponent,
    AboutComponent,
    MainButtonComponent
],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
})
export class MainComponent {
}
