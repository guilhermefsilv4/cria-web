import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../components/button/button.component";
import { MainButtonComponent } from "../mainbutton/button.component";

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [ButtonComponent, MainButtonComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MainContentComponent {

}
