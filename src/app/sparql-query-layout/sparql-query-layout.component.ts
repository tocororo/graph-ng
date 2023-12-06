import { Component } from '@angular/core';
import { GetBreakpointService } from '../../services/shared-services/get-breakpoint.service';

@Component({
  selector: 'app-sparql-query-layout',
  templateUrl: './sparql-query-layout.component.html',
  styleUrls: ['./sparql-query-layout.component.scss']
})
export class SparqlQueryLayoutComponent {
public currentBreakpoint:String

constructor(
  public get_breakpoint_service:GetBreakpointService
 ) {

   this.currentBreakpoint = get_breakpoint_service.getBreakpoint();
 }

}
