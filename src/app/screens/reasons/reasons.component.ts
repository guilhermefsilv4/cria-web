import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { TitleDirective } from '@app/directives/title/title.directive';

@Component({
  selector: 'app-reasons',
  standalone: true,
  imports: [NgOptimizedImage, TitleDirective],
  templateUrl: './reasons.component.html',
  styleUrl: './reasons.component.scss'
})
export class ReasonsComponent {

}
