import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-panel',
  templateUrl: './entity-panel.component.html',
  styleUrls: ['./entity-panel.component.scss'],
})
export class EntityPanelComponent implements OnInit {

public items=[1]
public size:string="medium"
public isMobile: boolean=true;

/**
 * use to know the actual breakpoint(handset,table or desktop)
 */
@Input() breakpoint: string;

ngOnInit(): void {

}

getItemSize() {
  return this.breakpoint==="Handset" ? 40 : 50; // Adjust the item size for mobile and desktop
}
/**
 * use to know if the scream is a mobile scream
 * @returns the boolean value of the expresion
 */
getOrientation() {


  return this.breakpoint==="Handset" ? 'horizontal' : 'vertical'; // Set the orientation based on mobile or desktop
}
}
