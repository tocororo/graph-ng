import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-snakbar',
  templateUrl: './custom-snakbar.component.html',
  styleUrls: ['./custom-snakbar.component.scss']
})
export class CustomSnakbarComponent {
 @Input() backgroundColor: string;
  @Input() content: string;
}
