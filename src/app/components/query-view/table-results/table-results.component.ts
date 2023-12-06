import { Component } from '@angular/core';
import { SparqlService } from 'src/services/sparql.service';

@Component({
  selector: 'app-table-results',
  templateUrl: './table-results.component.html',
  styleUrls: ['./table-results.component.scss']
})
export class TableResultsComponent {
  json_array_to_display: any[] = []

  temp_data:any
  ELEMENT_DATA:any[]=[]
   dataSource:any
   columns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: any) => `${element.position}`,
    },
    {
      columnDef: 'subject',
      header: 'Subject',
      cell: (element: any) => `${element.subject}`,
    },
    {
      columnDef: 'predicate',
      header: 'Predicate',
      cell: (element: any) => `${element.predicate}`,
    },
    {
      columnDef: 'object',
      header: 'Object',
      cell: (element: any) => `${element.object_value}`,
    },
  ];
  displayedColumns = this.columns.map(c => c.columnDef);


  constructor(private sparql_service: SparqlService) {

  }

  public ngOnInit(): void {
    this.sparql_service.getQueryResponse().subscribe((response) => {
      if (response) {        
        const results: Array<any> = response.results
        this.ELEMENT_DATA=[]
        this.dataSource = this.ELEMENT_DATA;
        results.forEach((element:Array<any>, index) => {
          if (element) {
            if (element.length===3) {
              this.temp_data={position:index,subject:element[0].value,predicate:element[1].value,object_value:element[2].value}
this.ELEMENT_DATA.push(this.temp_data)
            }
            if (element.length===2) {
              this.temp_data={position:index,subject:element[0].value,predicate:element[1].value,object_value:"---"}
              this.ELEMENT_DATA.push(this.temp_data)
            }
            if (element.length===1) {
              this.temp_data={position:index,subject:element[0].value,predicate:"---",object_value:"---"}
              this.ELEMENT_DATA.push(this.temp_data)
            }
            this.parseToJson(element, index)
            this.dataSource=this.ELEMENT_DATA
            console.log("this.ELEMENT_DATA",this.ELEMENT_DATA);}
});}})}
  parseToJson(array, index) {

    const json = {
      [index]: {
        subject: array[0],
        predicate: array[1],
        object_value: array[2]
      }
    }
    console.log(json);
    this.json_array_to_display.push(json)



  }
}
