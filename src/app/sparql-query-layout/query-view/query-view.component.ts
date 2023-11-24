import { Component } from '@angular/core';
import { ConfigurationJsonService } from 'src/services/configuration-json.service';
import { SparqlService } from 'src/services/sparql.service';

@Component({
  selector: 'app-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.scss']
})
export class QueryViewComponent {
  editorOptions = {theme: 'vs-light', language: 'sparql'};
  editorOptionsjson={theme: 'vs-light', language: 'json'}
  code: string = 'SELECT ?s ?p ?o WHERE { ?s ?p ?o FILTER (?o = "active") }';
  selectedOutput:string='Grafo'

  originalCode: string = 'SELECT ?s ?p ?o WHERE { ?s ?p ?o FILTER (?o = "active") }';
  label_response:string
  graph_label:string
  constructor( private  configurationService: ConfigurationJsonService,private sparql_service:SparqlService){
    this.selectedOutput='Grafo'

    this.configurationService.getConfigurationJson().subscribe((config)=>{
      if (config) {
        this.graph_label=config.name
        
      }
    })
  }
  getQuery(){
    console.log(this.code,"code");
    this.sparql_service.getQuery(this.code)
    
  }
  onSelectOutput(label){
    this.selectedOutput = label;
    console.log(label);
    

  }

}
