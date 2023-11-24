import { Component } from '@angular/core';
import { Edge,Node } from '@swimlane/ngx-graph';
import { SparqlService } from 'src/services/sparql.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {
  nodes: Node[] = []
  links: Edge[] = []
  constructor(private sparql_service: SparqlService) {

  }

  public ngOnInit(): void {
    this.sparql_service.getQueryResponse().subscribe((response) => {
      if (response) {
        console.log("response",response.results);
        
        const results: Array<any> = response.results
        this.nodes = []
        this.links = []
        results.forEach((element:Array<any>, index) => {
          if (element) {

            if (element.length===3) {
              console.log(22222);
              element.forEach((item)=>{
                this.addNode(item.value,this.checkSubstring(item.type))

              })
              this.addLink(Math.random(), element[0].value, element[1].value, "")
              this.addLink(Math.random(), element[1].value, element[2].value, "")
              
            }
            
            if (element.length===2) {
              console.log(22222);
              element.forEach((item)=>{
                this.addNode(item.value,this.checkSubstring(item.type))

              })
              this.addLink(Math.random(), element[0].value, element[1].value, "---")

              
              
            }
            if (element.length===1) {
              console.log(1111);
              this.addNode(element[0].value,this.checkSubstring(element[0].type))
              
              
              
            }

            
          }
        

        }
        


        );

      }

    })
  }

  checkSubstring(texto) {
    if (texto.includes("URIRef")) {
      return "URIRef"
      
    }
    if (texto.includes("Literal")) {
      return "Literal"
      
    }
  }
  addNode(id_node: string,type?:string): void {
    const new_node: Node = {
      id: '',
      label: ''
    };
    new_node.id = id_node;
    new_node.label = type;

    try {
      // Validar que el id del nodo no esté vacío
      if (new_node.id === "") {
        throw new Error("El id del nodo no puede estar vacío");
      }
      // Validar que el id del nodo no exista ya
      if (this.nodes.find(node => node.id === new_node.id)) {
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
