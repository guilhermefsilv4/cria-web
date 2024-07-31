import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { MenuComponent } from '@components/menu/menu.component';
import { AboutComponent } from './screens/about/about.component';
import { MainComponent } from './screens/main/main.component';
import { PillarsComponent } from './screens/pillars/pillars.component';
import { ReasonsComponent } from './screens/reasons/reasons.component';
import { ContactComponent } from './screens/contact/contact.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        ButtonComponent,
        MenuComponent,
        MainComponent,
        AboutComponent,
        PillarsComponent,
        ReasonsComponent,
        ContactComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {

}
