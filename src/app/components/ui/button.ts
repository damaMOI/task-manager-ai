import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  // Inputs réutilisables (Signals Angular 21)
  label = input<string>('Bouton');
  variant = input<'primary' | 'danger' | 'secondary'>('primary');

  // Output : événement de clic
  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}