import { Component } from '@angular/core';

@Component({
  selector: 'app-entity-panel',
  templateUrl: './entity-panel.component.html',
  styleUrls: ['./entity-panel.component.scss']
})
export class EntityPanelComponent {
public items=[1,2,3,4,5,6,7]
public size:string="large"
}
