import { 
    OnInit, Directive, ElementRef, Renderer2, Input, HostListener 
 } from "@angular/core";

@Directive({
    selector: '[rba-highlight]'
})
export class HighlightDirective implements OnInit {
    @Input('rba-highlight') text: string;

    constructor(private el: ElementRef, private renderer: Renderer2) {
        
    }

    ngOnInit() {
        this.applyInit();
    }

    private applyInit() {
        this.renderer.setStyle(this.el.nativeElement, 'font-size','14px');
        this.renderer.setStyle(this.el.nativeElement, 'font-weight','normal');
        this.renderer.setStyle(this.el.nativeElement, 'color','#990000');
        // this.renderer.setAttribute(this.el.nativeElement, 'title', this.text);
    }

    @HostListener('mouseenter', ['$event'])
    mouseEnter(e) {
        //this.renderer.setStyle(this.el.nativeElement, 'font-size','18px');
        this.renderer.setStyle(this.el.nativeElement, 'font-weight','bold');
        this.renderer.setStyle(this.el.nativeElement, 'color','red');
    }

    @HostListener('mouseleave', ['$event'])
    mouseLeave(e) {
        this.applyInit();
    }

    @HostListener('click',['$event'])
    click(e) {
        let inner = <string>e.target.innerHTML;
        alert(`"${inner.toUpperCase()}": ${this.text}`);
    }
}