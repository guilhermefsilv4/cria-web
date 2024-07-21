import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { MenuComponent } from '@components/menu/menu.component';
import { MainComponent } from './screens/main/main.component';
import ScrollReveal from 'scrollreveal';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ButtonComponent, MenuComponent, MainComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    slideUp = {
        distance: '150%',
        origin: 'left',
        opacity: 1,
        easing: 'ease-in-out',
        reset: true,
    };
    ngOnInit() {
        ScrollReveal().reveal('.main-text', {
            ...this.slideUp,
            origin: 'left',
        });
        ScrollReveal().reveal('.photo-container', {
            ...this.slideUp,
            origin: 'right',
        });
        ScrollReveal().reveal('.title', { ...this.slideUp, origin: 'bottom' });
    }
}
