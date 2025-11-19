import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShortNamePipe } from "../../core/short-name.pipe";
import { HighlightDirective } from '../../core/highlight.directive';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [CommonModule, ShortNamePipe, HighlightDirective],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {

  protected pipeExemples = {
    date: new Date(),
    currency: 1234.50,
    percent: 0.875,
    json: { name: 'Angular', version: '15' },
    title: "oi tuDo bem",
    name: "Maria Clara de Souza"
  }
}
