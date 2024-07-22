import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { MenuComponent } from '@components/menu/menu.component';
import ScrollReveal from 'scrollreveal';
import { AboutComponent } from "./screens/about/about.component";
import { MainComponent } from './screens/main/main.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ButtonComponent, MenuComponent, MainComponent, AboutComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    animation = {
        distance: '150%',
        origin: 'left',
        opacity: 1,
        easing: 'ease-in-out',
        reset: true,
    };
    ngOnInit() {
        ScrollReveal().reveal('.main-text', {
            ...this.animation,
            origin: 'left',
        });
        ScrollReveal().reveal('.photo-container', {
            ...this.animation,
            origin: 'right',
        });
        ScrollReveal().reveal('.title', { ...this.animation, origin: 'bottom' });
    }
}
