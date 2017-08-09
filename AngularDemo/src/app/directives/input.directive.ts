import { Directive, ElementRef, Renderer, Input, HostListener, OnChanges, SimpleChanges } from "@angular/core";
 
@Directive({ selector: '[rba-input]' })
export class InputDirective {
    constructor(private el: ElementRef) {

    }

    @HostListener('blur')
    private blur() {
        if (this.el.nativeElement.value) {
            let value = <string>this.el.nativeElement.value;
            let modifiedValue = value.charAt(0).toUpperCase() + (value.length == 1? '' : value.substr(1, value.length - 1));
            this.el.nativeElement.value = modifiedValue;
        }
    } 
}