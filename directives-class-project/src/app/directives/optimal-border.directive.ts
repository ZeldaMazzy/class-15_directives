import { ElementRef, HostListener, Input, Renderer2,Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appOptimalBorder]'
})
export class OptimalBorderDirective implements OnInit {

  @Input() mouseOverBorder: string = "4px solid black";
  @Input() mouseLeaveBorder: string = "4px solid gold";

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "border",
      this.mouseOverBorder
    )
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setDefaultStyle();
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.setDefaultStyle()
  }

  private setDefaultStyle(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "border",
      this.mouseLeaveBorder
    )
  }
}
