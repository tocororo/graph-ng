import { Component } from '@angular/core';
import { SparqlService } from 'src/services/sparql.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  label_response: any=""
  constructor(private sparql_service:SparqlService){}
  public ngOnInit(): void {
    this.sparql_service.getLabelResponse().subscribe(response=>{
      if (response) {
        if (response.success) {
          this.label_response=response

        }
        this.label_response=response

  
      }else{
        this.label_response=""
      }
    })
  }
}
