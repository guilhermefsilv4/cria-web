import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  customStyle = input({})
  @Output() click = new EventEmitter()

  handleClick(evt) {
    evt.stopPropagation();
    evt.preventDefault()
    this.click.emit()
  }
}
