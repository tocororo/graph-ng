import {
  BreakpointObserver,
  Breakpoints,
  MediaMatcher,
} from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";

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
    private breakpointObserver: BreakpointObserver,
    private mediaMatcher: MediaMatcher
  ) {
    this.mobileQuery = this.mediaMatcher.matchMedia("(max-width: 599.98px)");
    this.currentBreakpoint = this.getBreakpoint();
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
    if (this.getBreakpoint() === "Handset") {
      this.cols_section1 = 1;
      this.cols_section2 = 1;
    } else if (this.getBreakpoint() === "Tablet") {
      this.cols_section1 = 2;
      this.cols_section2 = 3;
    } else {
      console.log(2);
      this.cols_section1 = 2;
      this.colspan_section2 = 2;
    }
  }
  /**
   * get the name of the current breakpoint based on the screen size
   * @returns the name of the current breakpoint
   */
  public getBreakpoint(): string {
    if (this.mobileQuery.matches) {
      return "Handset";
    } else if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
      return "Tablet";
    } else if (this.breakpointObserver.isMatched(Breakpoints.Web)) {
      return "Web";
    } else {
      return "Unknown";
    }
  }
}
