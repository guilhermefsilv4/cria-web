import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() click = new EventEmitter()

  handleClick(evt) {
    evt.stopPropagation();
    evt.preventDefault()
    this.click.emit()
  }
}
