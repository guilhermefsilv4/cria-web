import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TitleDirective } from '@app/directives/title/title.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage, TitleDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
}
