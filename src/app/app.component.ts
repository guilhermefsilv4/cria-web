import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { MenuComponent } from "@components/menu/menu.component";
import { MainComponent } from "./screens/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, MenuComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cria-web';

  teste() {
    console.log("chamei")
    alert("botão 1")
  }
}
