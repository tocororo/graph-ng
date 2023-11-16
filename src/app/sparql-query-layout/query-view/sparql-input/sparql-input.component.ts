import { Component } from '@angular/core';

@Component({
  selector: 'app-sparql-input',
  templateUrl: './sparql-input.component.html',
  styleUrls: ['./sparql-input.component.scss']
})
export class SparqlInputComponent {
  editorOptions = {theme: 'vs-light', language: 'sparql'};
  code: string = 'SELECT * WHERE { ?s ?p ?o . }';
  originalCode: string = 'function x() { // TODO }';

}
