import { Component } from '@angular/core';
import { GetBreakpointService } from '../../services/shared-services/get-breakpoint.service';

@Component({
  selector: 'app-sparql-query-view',
  templateUrl: './sparql-query-view.component.html',
  styleUrls: ['./sparql-query-view.component.scss']
})
export class SparqlQueryViewComponent {
public currentBreakpoint:String

constructor(
  public get_breakpoint_service:GetBreakpointService
 ) {

   this.currentBreakpoint = get_breakpoint_service.getBreakpoint();
 }

}
