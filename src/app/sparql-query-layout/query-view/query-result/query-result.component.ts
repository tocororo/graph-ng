import { Component, OnInit } from '@angular/core';
import { Node, Edge } from '@swimlane/ngx-graph';
import { SparqlService } from 'src/services/sparql.service';

@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss']
})
export class QueryResultComponent implements OnInit {
  code:any=JSON.stringify({
    "type": "team",
    "test": {
      "testPage": "tools/testing/run-tests.htm",
      "enabled": true
    }
  })
  json_array_to_display:any[]=[]
  editorOptions = {theme: 'vs-light', language: 'json'};

  nodes: Node[] = [
    {
      id: 'first',
      label: 'hagagabab'
    }, {
      id: 'second',
      label: 'B'
    }, {
      id: 'third',
      label: 'C'
    }, {
      id: 'four',
      label: 'd'
    }
  ]
  links: Edge[]=[
    {
      id: 'a',
      source: 'first',
    target: 'second',
      label: 'is parent of'
    }, {
      id: 'b',
      source: 'first',
      target: 'third',
      label: 'custom label'
    }
  ]

  constructor(private sparql_service: SparqlService) {

  }
  public ngOnInit(): void {
    this.sparql_service.getQueryResponse().subscribe((response) => {
      if (response) {
        const results: Array<any> = response.results
        this.nodes = []
        this.links=[]
        this.code=[]
        results.forEach((element,index) => {
          if (element) {
            this.parseToJson(element,index)

            if (element[0]) {

              this.addNode(element[0])
              if (element[1]) {
                this.addNode(element[1])
              this.addLink(Math.random(),element[0],element[1],"")
              if (element[2]) {
                this.addNode(element[2])
              this.addLink(Math.random(),element[1],element[2],"")
                
              }


                
              }

            }     }
          

        }
        

        );
        this.code=JSON.stringify(this.json_array_to_display)

        

    
  }

    })
  }

 parseToJson(array,index){
  console.log("entro a parse");
  
    const json={[index]:{
      subject:array[0],
      predicate:array[1],
    object_value:array[2]}
    }
  console.log(json);
  this.json_array_to_display.push(json)
  
  
  
}
  addNode(id_node: string): void {
    const new_node: Node = {
      id: '',
      label: ''
    };
    new_node.id = id_node;
    new_node.label = id_node;
  
    try {
      // Validar que el id del nodo no esté vacío
      if (new_node.id === "") {
        throw new Error("El id del nodo no puede estar vacío");
      }
      // Validar que el id del nodo no exista ya
      if (this.nodes.find(node => node.id === new_node.id)) {
        console.log("El id del nodo ya existe");
      }
      // Añadir el nodo a la lista de nodos
      this.nodes.push(new_node);
    } catch (error) {
      // Manejar el error
      console.error(error);
      // Realizar cualquier acción adicional necesaria, como mostrar un mensaje de error al usuario
    }
  }
  addLink(id_link: any, source: string, target: string, label_link: string): void {
    const new_link: Edge = {
      id: '',
      source: '',
      target: '',
      label: ''
    };
    new_link.id = id_link.toString();
    new_link.source = source;
    new_link.target = target;
    new_link.label = label_link;
  
    try {
      // Validar que el id del enlace no esté vacío
      if (new_link.id === '') {
        throw new Error('El id del enlace no puede estar vacío');
      }
      // Validar que el id del enlace no exista ya
      if (this.links.find(link => link.id === new_link.id)) {
        throw new Error('El id del enlace ya existe');
      }
      // Añadir el enlace a la lista de enlaces
      this.links.push(new_link);
    } catch (error) {
      // Manejar el error
      console.error(error);
      // Realizar cualquier acción adicional necesaria, como mostrar un mensaje de error al usuario
    }
  }
}
