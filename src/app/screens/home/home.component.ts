import { Component } from '@angular/core';
import { AboutComponent } from "@app/screens/about/about.component";
import { ContactComponent } from "@app/screens/contact/contact.component";
import { MainComponent } from "@app/screens/main/main.component";
import { MenuComponent } from "@components/menu/menu.component";
import { PillarsComponent } from "@app/screens/pillars/pillars.component";
import { ReasonsComponent } from "@app/screens/reasons/reasons.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        AboutComponent,
        ContactComponent,
        MainComponent,
        MenuComponent,
        PillarsComponent,
        ReasonsComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
