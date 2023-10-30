import { Component, ElementRef, ViewChild } from "@angular/core";
import { Configuration, Entity, Rule } from "src/app/models/configuration.interface";
import { ConfigurationJsonService } from "src/services/configuration-json.service";



@Component({
  selector: 'app-transform-rules',
  templateUrl: './transform-rules.component.html',
  styleUrls: ['./transform-rules.component.scss'],



})
export class TransformRulesComponent {
  panelOpenState = false;
  items: any
  entity_label: string
  entities: Entity[] = []

  @ViewChild('inputField') inputField: ElementRef;


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
        this.items = []
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
          const rules: any[] = []

          this.entity_label = label
          this.entities.map((entity) => {
            console.log("entity", entity.name);
            console.log("entity_label", this.entity_label);
            if (entity.name === this.entity_label) {
              console.log("es la q busco", entity.mapping.properties);
              const properties = entity.mapping.properties;
              Object.entries(properties).forEach(([key, value]) => {
                rules.push({ key, value });
              }
              );
              this.items = rules
            }
          })
        } else {
          throw new Error("The label is null.");

        }
      } catch (error) {
        console.error(error);
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


  }
  /**
 * Adds a value to the value array of an item or converts it to an array if it's not already.
 * 
 * @param key The key to identify the item.
 */
  toAddValue(key) {

    const inputValue = this.inputField.nativeElement.value;
    if (inputValue) {
 // Find the item with the matching key
 this.items.map((obj: Rule) => {
  // Check if the value is already an array
  if (obj.key === key) {

    if (Array.isArray(obj.value)) {
      obj.value.push(inputValue)
    } else {
      // If it's not an array, convert it to an array and add both the existing value and the inputValue
      obj.value = [obj.value, inputValue];

    }

  }
})
// Clear the input field

this.inputField.nativeElement.value = ""
    }
   
  }
 
  /**
   * 
   * @param value 
   * @returns 
   */
  /** 
 * Checks if the given value is an array. 
 *  
 * @param value The value to be checked. 
 * @returns True if the value is an array, false otherwise. 
 */ 
isAnArrayofValues(value): boolean { 
  return Array.isArray(value); 
}

/**
 * Deletes a rule from the items array based on the given value and optional key.
 * If a key is provided, it will only delete the rule with a matching key.
 * If no key is provided, it will delete all rules with the given value.
 * 
 * @param value The value to be deleted from the rules.
 * @param key (Optional) The key of the rule to be deleted.
 */
ToDeleteRule(value: string, key?: string){
  if (key) {
    console.log(key);
    this.items.map((item)=>{
      if (item.key===key) {
        item.value = item.value.filter(item => item !== value);
      }
    })
  } else {
    this.items.value = this.items.value.filter(item => item !== value);
  }
}

}

