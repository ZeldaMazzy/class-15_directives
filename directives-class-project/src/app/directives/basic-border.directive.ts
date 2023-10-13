import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[appBasicBorder]"
})
export class BasicBorderDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        this.elementRef.nativeElement.style.border = "4px solid black";
    }
}