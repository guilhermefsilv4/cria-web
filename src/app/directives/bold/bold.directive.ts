import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[bold]',
  standalone: true
})
export class BoldDirective implements OnInit {
  el = inject(ElementRef).nativeElement as HTMLElement

  constructor() { }

  ngOnInit() {
    this.el.classList.add("bold") 
  }
}
