import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BoldDirective } from '@app/directives/bold/bold.directive';
import { TitleDirective } from '@app/directives/title/title.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BoldDirective, TitleDirective, NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
