import { Component, OnInit } from '@angular/core';
import { Node, Edge } from '@swimlane/ngx-graph';
import { SparqlService } from 'src/services/sparql.service';

@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss']
})
export class QueryResultComponent implements OnInit {
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
        console.log(results);
        results.forEach((element,index) => {
          if (element) {
            if (element[0]) {
              console.log("element[0]", element[0]);

              this.addNode(element[0])
              if (element[2]) {
                this.addNode(element[2])
              this.addLink(index.toString(),element[0],element[2],element[1])

                
              }

            }     }
          

        }

        );
        console.log("links",this.links);
        

    
  }

    })
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
  addLink(id_link: string, source: string, target: string, label_link: string): void {
    const new_link: Edge = {
      id: '',
      source: '',
      target: '',
      label: ''
    };
    new_link.id = id_link;
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
      console.log('============================', this.links);
    } catch (error) {
      // Manejar el error
      console.error(error);
      // Realizar cualquier acción adicional necesaria, como mostrar un mensaje de error al usuario
    }
  }
}
