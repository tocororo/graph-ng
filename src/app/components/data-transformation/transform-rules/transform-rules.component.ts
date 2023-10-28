import { Component } from "@angular/core";
import { ConfigurationJsonService } from "src/services/configuration-json.service";



@Component({
  selector: 'app-transform-rules',
  templateUrl: './transform-rules.component.html',
  styleUrls: ['./transform-rules.component.scss'],



})
export class TransformRulesComponent {
  panelOpenState = false;
  items = []
  entity_label: string

  checked: boolean = true
  constructor(private configurationService: ConfigurationJsonService) { }
  ngOnInit(): void {
    this.chargeRulesbyConfiguration()

  }
  chargeRulesbyConfiguration() {
    this.configurationService.getRulesPropertiesLabel().subscribe(label => {
      console.log("alalal",label);
      
      this.entity_label = label
    })
    this.configurationService.getConfigurationJson().subscribe(json => {
      if (json) {
        const entries = Object.entries(json.entities);
        entries.map(([key, value]) => {
          if (value["name"]==this.entity_label) {
            console.log("value",value);
         }
         console.log(this.entity_label);

          console.log(key + ": " + value["name"]);
        })

      } else {
        this.items = [0, 1, 2, 3, 4]
      }
    })
  }



  /**
   * stop the event propagation of the click in the checkbox and add the rule to the rulesarray
   * @param event the click event
   * @param item the rule to add
   */
  public toAddRule(event, item) {
    event.stopPropagation()
    console.log(event);
    console.log(item);



  }
}
