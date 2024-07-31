import { Component } from '@angular/core';
import { TitleDirective } from '@app/directives/title/title.directive';
import { MenuComponent } from '@components/menu/menu.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { AboutComponent } from '../about/about.component';
import { MainButtonComponent } from './components/mainbutton/button.component';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [
        MenuComponent,
        CardComponent,
        ButtonComponent,
        AboutComponent,
        MainButtonComponent,
        TitleDirective,
    ],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
})
export class MainComponent {
    scrollToSection(section) {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
