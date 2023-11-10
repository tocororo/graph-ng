import {
  BreakpointObserver,
  Breakpoints,
  MediaMatcher,
} from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { GetBreakpointService } from "src/services/shared-services/get-breakpoint.service";
import { UploadWidgetComponent } from "./upload-widget/upload-widget.component";
import { MatDialog } from "@angular/material/dialog";
import { ConfigurationJsonService } from "src/services/configuration-json.service";

@Component({
  selector: "app-data-transformation",
  templateUrl: "./data-transformation.component.html",
  styleUrls: ["./data-transformation.component.scss"],
})
export class DataTransformationComponent implements OnInit{
  mobileQuery: MediaQueryList;
  currentBreakpoint: string;
  cols_section1: number = 2;
  cols_section2: number = 3;
  colspan_section2: number = 1;
  modal_height: string="45vh";
  modal_widht: string="50vh";

  public buttons_array: any[] = [
    { label: "IMPORT", color: "basic", },

    { label: "EXPORT", color: "primary", },
    { label: "CANCELAR", color: "accent" },
    { label: "TRANSFORMAR", color: "ligth-green" },

  ];

  constructor(
   public get_breakpoint_service:GetBreakpointService,public dialog: MatDialog, public config_service:ConfigurationJsonService
  ) {

    this.currentBreakpoint = get_breakpoint_service.getBreakpoint();
  }

  ngOnInit() {
    this.addGridStyle();
  }

  /**
   * check if it is mobile view, if so, assign 1 to my column variable and
   * to the height of my rows of 30 em and so on with all my breakpoints
   *
   */
  public addGridStyle() {
    if (this.get_breakpoint_service.getBreakpoint() === "Handset") {
      this.cols_section1 = 1;
      this.cols_section2 = 1;
   
    } else if (this.get_breakpoint_service.getBreakpoint() === "Tablet") {
      this.cols_section1 = 2;
      this.cols_section2 = 3;
      this.colspan_section2=2;
    } else if (this.get_breakpoint_service.getBreakpoint() === "Mobil"){
   
      this.cols_section1 = 2;
      this.colspan_section2 = 2;
    }
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(UploadWidgetComponent, {
      width: this.modal_widht,
      height: this.modal_height,
      maxHeight:this.modal_height,
      
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  handleButtonClick(label: string) {
    if (label === 'IMPORT') {
      this.openDialog('0ms', '0ms');
    } else if (label === 'EXPORT') {
console.log("save");
    } 
    else if (label === 'TRANSFORMAR') {
      console.log("TRANSFORMAR");
      this.transformWithConfigurationFile()

          }else {
            console.log("CANCELAR");

      // Otra condición o acción por defecto
    }
  }
  transformWithConfigurationFile(){
    this.config_service.getConfigurationJson().subscribe(configuration=>{

     this.config_service.sendConfiguracionFile(configuration)

    })
  }

}
