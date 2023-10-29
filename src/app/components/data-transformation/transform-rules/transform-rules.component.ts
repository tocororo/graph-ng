import { Component } from "@angular/core";
import { Configuration, Entity } from "src/app/models/configuration.interface";
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
  entities: Entity[] = []

  checked: boolean = true
  constructor(private configurationService: ConfigurationJsonService) { }
  ngOnInit(): void {
    this.chargeEntitiesbyConfiguration()
     this.getRulesbyEntityName()

  }
  chargeEntitiesbyConfiguration() {
    this.configurationService.getConfigurationJson().subscribe((configuration: Configuration) => {
      if (configuration) {
        this.entities = configuration.entities


      } else {
        this.items = [0, 1, 2, 3, 4]
      }
    })

  }
 /** 
 * Retrieves the rules based on the entity name obtained from the configuration service. 
 * It subscribes to the observable returned by the  getRulesPropertiesLabel()  method of the configuration service. 
 * If a valid label is received, it sets the  entity_label  property and proceeds to search for the corresponding entity in the  entities  array. 
 * It logs the entity name and the obtained label for debugging purposes. 
 * If a matching entity is found, it sets the  items  property to the properties of the entity's mapping. 
 * If no label is received, it logs a message indicating that the label is null. 
 */ 
  getRulesbyEntityName() {
    this.configurationService.getRulesPropertiesLabel().subscribe((label: string) => {
      try {

      if (label) {
        this.entity_label = label
        this.entities.map((entity) => {
          console.log("entity", entity.name);
          console.log("entity_label", this.entity_label);
          if (entity.name === this.entity_label) {
            console.log("es la q busco", entity);
            this.items = Object.entries(entity.mapping.properties);



          }
        })
      } else {
        throw new Error("The label is null.");

      }

    } catch (error) {
      console.error(error);
    }})
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
    console.log("label", this.items);
    console.log("entity_label", this.entity_label);





  }
}
