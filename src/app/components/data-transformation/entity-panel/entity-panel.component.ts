import { Component, Input, OnInit } from '@angular/core';
import { Configuration } from 'src/app/models/configuration.interface';
import { ConfigurationJsonService } from 'src/services/configuration-json.service';
import { MatDialog } from "@angular/material/dialog";
import { UploadWidgetComponent } from '../upload-widget/upload-widget.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-entity-panel',
  templateUrl: './entity-panel.component.html',
  styleUrls: ['./entity-panel.component.scss'],
})
export class EntityPanelComponent implements OnInit {

public items:string[]=["1"]

public size:string="medium"
public isMobile: boolean=true;

/**
 * use to know the actual breakpoint(handset,table or desktop)
 */
@Input() breakpoint: string;
constructor(private  configurationService: ConfigurationJsonService,public dialog: MatDialog,private snackBar: MatSnackBar){}
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
  this.configurationService.getConfigurationJson().subscribe((configuration:Configuration) => {
    if (configuration ) {
      if (configuration.order_for_mapping) {
        this.items = ["1", ...configuration.order_for_mapping];

      }
      else{
        this.items = ["1"];
    

      }
    }else{
      this.items = ["1"];
    }
  });

}
chargeProperties(event){
  const label =  event.target.querySelector('.entity-label').textContent;
  if (label) {
    this.configurationService.setRulesPropertiesLabel(label)
    console.log("label entity",label);
    

  }
}
deleteEntity(){
  console.log(1234);
  
}
openEditDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  if (this.items.length>1) {
    this.dialog.open(EditDialogComponent, {
      width: "450px",
      height: "350px",
     
      
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  else{
    this.snackBar.open("Este fichero .json  no cumple con la estructura de fichero de configuracion", 'Cerrar', {
      duration: 3000,
      panelClass: 'my-snackbar' // Agrega la clase CSS personalizada

    });
    

  }
  
}

}
