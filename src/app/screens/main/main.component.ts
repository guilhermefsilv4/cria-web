import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '@components/menu/menu.component';
import { CardComponent } from '../../components/card/card.component';
import { MainContentComponent } from './components/maincontent/maincontent.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [
        MenuComponent,
        NgOptimizedImage,
        CardComponent,
        MainContentComponent,
        ButtonComponent,
    ],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
})
export class MainComponent {}
