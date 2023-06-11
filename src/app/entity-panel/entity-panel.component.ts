import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-panel',
  templateUrl: './entity-panel.component.html',
  styleUrls: ['./entity-panel.component.scss'],
})
export class EntityPanelComponent implements OnInit {

public items=[1,2,3,4,5,6,7]
public size:string="medium"
public isMobile: boolean=true;
/**
 * use to know the actual breakpoint(handset,table or desktop)
 */
@Input() breakpoint: string;

ngOnInit(): void {
  console.log(this.breakpoint==="Handset");
}

getItemSize() {
  return this.isMobile ? 40 : 50; // Adjust the item size for mobile and desktop
}

getOrientation() {
  console.log(this.breakpoint);

  return this.breakpoint==="Handset" ? 'horizontal' : 'vertical'; // Set the orientation based on mobile or desktop
}
}
