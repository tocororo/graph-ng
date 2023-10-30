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
              this.items = rules }
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
    console.log(event);
    console.log(item);
    console.log("label", this.items);
    console.log("entity_label", this.entity_label);





  }
  toAddValue(key){
    const inputValue = this.inputField.nativeElement.value;
    this.items.map((obj:Rule )=> {
      if (obj.key=== key) {
        if (Array.isArray(obj.value)) {
          obj.value.push(inputValue)

          
        }else{
          const array_of_values:string[]=[]
          array_of_values.push(obj.value)
          array_of_values.push(inputValue)
          obj.value=array_of_values



        }
        
        console.log("obj.value.",obj.value);
        
        
      }
    })
    
    console.log(inputValue);
    console.log(key);
    
    
    
  }
  isAnArrayofValues(value):boolean{
    if (Array.isArray(value)) {
      return true
    }
return false
  }

}

