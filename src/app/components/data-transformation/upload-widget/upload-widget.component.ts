import { Component } from '@angular/core';
import { ConfigurationJsonService } from 'src/services/configuration-json.service';

@Component({
  selector: 'app-upload-widget',
  templateUrl: './upload-widget.component.html',
  styleUrls: ['./upload-widget.component.scss']
})
export class UploadWidgetComponent {
  files: File[] = [];
constructor(private configurationService: ConfigurationJsonService) { }
  async onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    await this.processFile();
    
  }
  
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSave(event){
    console.log(this.files);
 
  }
  // Process the selected file
async processFile() {
  // Get the first selected file
  let selectedFile = this.files[0];
  
  // Validate that the file has a .json extension
  if (selectedFile.name.endsWith('.json')) {
    // Read the content of the file
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      try {
        // Parse the file content as JSON
        const parsedData = JSON.parse(fileReader.result as string);
       //Set the parsed  JSON data in the ConfigurationJsonService
        this.configurationService.setConfigurationJson(parsedData);
        // The 'parsedData' now contains the parsed JSON object from the file
        console.log('Valid JSON file:', parsedData);
        this.configurationService.getConfigurationJson().subscribe(json => {
          console.log("asdsd",json);
          
          // Realiza acciones adicionales con el JSON de configuración
        });
      } catch (error) {
        console.error('The file is not a valid JSON.', error);
        selectedFile = null;
      }
    };
    fileReader.readAsText(selectedFile);
    
  } else {
    console.error('The file does not have a .json extension');
  }
}
  }