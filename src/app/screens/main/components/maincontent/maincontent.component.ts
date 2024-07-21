import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { MainButtonComponent } from '../mainbutton/button.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-maincontent',
    standalone: true,
    imports: [ButtonComponent, MainButtonComponent, NgOptimizedImage],
    templateUrl: './maincontent.component.html',
    styleUrl: './maincontent.component.scss',
})
export class MainContentComponent {}
