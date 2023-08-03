import {
  BreakpointObserver,
  Breakpoints,
  MediaMatcher,
} from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { GetBreakpointService } from "../../services/shared-services/get-breakpoint.service";

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
  public buttons_array: any[] = [
    { label: "GUARDAR", color: "basic" },
    { label: "CANCELAR", color: "primary" },
    { label: "TRANSFORMAR", color: "accent" },
  ];

  constructor(
   public get_breakpoint_service:GetBreakpointService
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
    } else {

      this.cols_section1 = 2;
      this.colspan_section2 = 2;
    }
  }


}
