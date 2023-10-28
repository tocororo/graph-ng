import { Component } from "@angular/core";
import { ConfigurationJsonService } from "src/services/configuration-json.service";



@Component({
  selector: 'app-transform-rules',
  templateUrl: './transform-rules.component.html',
  styleUrls: ['./transform-rules.component.scss'],



})
export class TransformRulesComponent {
  panelOpenState = false;
  items =[1,2,3,4,5,6,7,8,9,0,11,12,13]
  checked:boolean=true
  constructor(private  configurationService: ConfigurationJsonService){}
  ngOnInit(): void {
    this.chargeRulesbyConfiguration()
  
  }
  chargeRulesbyConfiguration() {
    this.configurationService.getRulesPropertiesLabel().subscribe(label => {
     console.log("label",label);
     
    });
  
  }
/**
 * stop the event propagation of the click in the checkbox and add the rule to the rulesarray
 * @param event the click event
 * @param item the rule to add
 */
  public toAddRule(event,item){
    event.stopPropagation()
    console.log(event);
    console.log(item);



  }
}
