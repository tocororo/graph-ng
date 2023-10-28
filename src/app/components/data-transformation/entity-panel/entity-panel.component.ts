import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationJsonService } from 'src/services/configuration-json.service';

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
constructor(private  configurationService: ConfigurationJsonService){}
ngOnInit(): void {
  this.chargeEntitiesbyConfiguration()

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
/** 
 * This method retrieves the configuration JSON from the  ConfigurationJsonService  and populates the  items  array based on the JSON data. 
 * If the JSON data is available, it updates the  items  array with the values from the  order_for_mapping  property. Otherwise, it sets a default value of  [1]  for the  items  array. 
 */ 
chargeEntitiesbyConfiguration() {
  this.configurationService.getConfigurationJson().subscribe(json => {
    if (json) {
      this.items = [1, ...json.order_for_mapping];
    }else{
      this.items = [1];
    }
  });

}
chargeProperties(event){
  event.target.click(); 
  const label =  event.target.querySelector('.entity-label').textContent;
  this.configurationService.setRulesPropertiesLabel(label)
  console.log("Label:", label);
}
}
