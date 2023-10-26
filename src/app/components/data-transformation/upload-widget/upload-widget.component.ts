import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-widget',
  templateUrl: './upload-widget.component.html',
  styleUrls: ['./upload-widget.component.scss']
})
export class UploadWidgetComponent {
  files: File[] = [];

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
     async processFile() {
    let selectedFile =this.files[0]
    console.log(this.files[0]);
   // Validar que el archivo tenga la extensión .json
   if (selectedFile.name.endsWith('.json')) {
    // Leer el contenido del archivo
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      try {
        const parsedData = JSON.parse(fileReader.result as string);
        // Ahora 'parsedData' contiene el objeto JSON parseado del archivo
        console.log('Archivo JSON válido:', parsedData);
      } catch (error) {
        console.error('El archivo no es un JSON válido.', error);
        selectedFile = null;
      }
    };
    fileReader.readAsText(selectedFile);
  } else {
    console.error('El archivo no tiene la extensión .json');
  }}
  }