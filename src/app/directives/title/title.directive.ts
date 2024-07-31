import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[title]',
  standalone: true
})
export class TitleDirective implements OnInit {
  el = inject(ElementRef).nativeElement as HTMLElement

  constructor() { }

  ngOnInit() {
    this.el.classList.add("title") 
  }
}
