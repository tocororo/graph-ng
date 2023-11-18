import { Component } from '@angular/core';
import { SparqlService } from 'src/services/sparql.service';

@Component({
  selector: 'app-sparql-input',
  templateUrl: './sparql-input.component.html',
  styleUrls: ['./sparql-input.component.scss']
})
export class SparqlInputComponent {
  editorOptions = {theme: 'vs-light', language: 'json'};
  code: string = 'SELECT ?s ?p ?o WHERE { ?s ?p ?o FILTER (?o = "active") }';
  originalCode: string = 'function x() { // TODO }';
constructor(private sparql_service:SparqlService){}


    getQuery(){
      console.log(this.code,"code");
      this.sparql_service.getQuery(this.code)
      
    }
}
