import { Directive, ElementRef, Renderer, Input, HostListener, OnChanges, SimpleChanges } from "@angular/core";
 
@Directive({ selector: '[rba-input-numeric]' })
export class InputNumericDirective {
 
    @Input('rba-input-numeric') inputNumeric: any;
    @Input('decimal-places') decimalPlaces: number = 2;
 
    private isActive: boolean = true;
    private validKeyList = ["Up", "Down", "Right", "Left", "Del", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    private uniqueKeyList = ["."];
 
    constructor(private el: ElementRef, private renderer: Renderer) {
        console.log('input numeric created')
        renderer.setElementStyle(el.nativeElement, 'text-align', 'right');
    }
 
    ngOnChanges(changes: SimpleChanges) {
        if (changes['inputNumeric']) {
            if (this.inputNumeric != undefined &&
                this.inputNumeric != '' &&
                (this.inputNumeric == false || this.inputNumeric == 'false')) {
                    console.log('input numeric disabled')
                this.isActive = false;
            } else {
                console.log('input numeric enabled')
                this.isActive = true;
            }
        }
    }

    @HostListener('keydown',['$event'])
    private _keydown(event) {
        if (this.isActive) {
            let keyCode = <number>event.keyCode;
            return this._isCharacterValid(keyCode, event.key, event.altKey, event.ctrlKey, event.shiftKey);
        } else {
            return true;
        }
    }
 
    @HostListener('change',['$event'])
    private change(event) {
        let value = <string>this.el.nativeElement.value;
    }

    private _isCharacterValid(keyCode: number, key: string, isAlt: boolean, isCtrl: boolean, isShift: boolean) {
        if ((keyCode >= 48 && keyCode <= 57) ||
            (keyCode == 8 || keyCode == 9 || keyCode == 127 || keyCode == 16 || keyCode == 17)) { // single key code is valid
            return true;
            } else
                if (isCtrl && (keyCode == 86 || keyCode == 67 || keyCode == 88)) { // allow ctrl + v, ctrl + c, ctrl + x
                    return true;
            } else
                if (this.validKeyList.includes(key)) { // special key is valid
                    return true;
            } else
                if (this.uniqueKeyList.includes(key)) { // only allow one of these keys
                    let value = <string>this.el.nativeElement.value;
                    return !value.includes(key);
            }
            
        return false;
    }
 
}