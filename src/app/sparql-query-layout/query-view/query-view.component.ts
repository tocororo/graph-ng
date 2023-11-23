import { Component } from '@angular/core';
import { ConfigurationJsonService } from 'src/services/configuration-json.service';

@Component({
  selector: 'app-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.scss']
})
export class QueryViewComponent {
  graph_label:string
  constructor( private  configurationService: ConfigurationJsonService){
    this.configurationService.getConfigurationJson().subscribe((config)=>{
      if (config) {
        this.graph_label=config.name
        
      }
    })
  }

}
