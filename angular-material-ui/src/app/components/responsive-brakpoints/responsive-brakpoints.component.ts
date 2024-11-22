import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-responsive-brakpoints',
  standalone: true,
  imports: [],
  templateUrl: './responsive-brakpoints.component.html',
  styleUrl: './responsive-brakpoints.component.css'
})
export class ResponsiveBrakpointsComponent implements OnInit {
  currentBreakpoint: string = '';

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web,
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait,
      Breakpoints.WebPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletLandscape,
      Breakpoints.WebLandscape
    ]).subscribe(result => {
      const breakpoints = result.breakpoints;
      if (breakpoints[Breakpoints.XSmall]) {
        this.currentBreakpoint = 'XSmall';
      } else if (breakpoints[Breakpoints.Small]) {
        this.currentBreakpoint = 'Small';
      } else if (breakpoints[Breakpoints.Medium]) {
        this.currentBreakpoint = 'Medium';
      } else if (breakpoints[Breakpoints.Large]) {
        this.currentBreakpoint = 'Large';
      } else if (breakpoints[Breakpoints.XLarge]) {
        this.currentBreakpoint = 'XLarge';
      } else if (breakpoints[Breakpoints.Handset]) {
        this.currentBreakpoint = 'Handset';
      } else if (breakpoints[Breakpoints.Tablet]) {
        this.currentBreakpoint = 'Tablet';
      } else if (breakpoints[Breakpoints.Web]) {
        this.currentBreakpoint = 'Web';
      }
    });
  }
}
