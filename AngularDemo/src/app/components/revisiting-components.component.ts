import { 
    Component, OnInit, Input, OnChanges, 
    SimpleChanges, Output, HostListener,
    ViewChild, ElementRef, EventEmitter 
 } from "@angular/core";

@Component({
  selector: 'revisiting-component',
  template: `
  <rba-page-wrapper panel-title="Revisiting Components">
    <aside>
        A quick look at components again.  Components can be used over and over.  They
        can even call themselves to create a chain of content:
    </aside>
    <rba-sub-component text="This is my {0} sub component" 
                        [count]="4"
                        (total)="total = $event"></rba-sub-component>
    <br />
    Total: {{total}}
  </rba-page-wrapper>`  
})
export class RevisitingComponentsComponent {
    total: number = 0;
}







@Component({
    selector: 'rba-sub-component',
    template: `
        <div class="local-highlight">
            Add number: <input type="text" (change)="onValueChange($event.target.value)" /> --- {{displayText}}
        </div>
                                                        <!-- what is *ngIf? -->
        <rba-sub-component [text]="text" [count]="count-1" *ngIf="count >= 2"
                            (total)="onChildValueChanged($event)"></rba-sub-component>
    `,
    styles: [`
    .local-highlight {
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 4px;
        padding: 6px;
        background-color: #1675A1;
        box-shadow: 2px 2px 5px #1675A1;
        color: white;
    }
    .local-highlight input {
        color: black;
    }`]
})
export class SomeSubComponent {
    @Input('text') text: string;
    @Input('count') count: number;
    
    displayText: string;

    // life hook for handling changes to Input items
    ngOnChanges(changes: SimpleChanges) {
        if (this.count && this.text) {
            let suffix = "th";
            switch(this.count) {
                case 1:
                    suffix = 'st'
                    break;
                case 2:
                    suffix = 'nd';
                    break;
                case 3:
                    suffix = 'rd';
                    break;
            }
            let replace = this.count + suffix;
            this.displayText = this.text.replace('{0}', replace);
            
        }
    }

    // sending values back up chaing for add
    @Output('total') total = new EventEmitter<number>(); // <-- This is an event emitter
    myValue: number = 0;
    childTotal: number = 0;

    publishTotal() {
        this.total.emit(this.childTotal + this.myValue);
    }

    onValueChange(content: string) {
        let v = +content;
        if (!isNaN(v)) {
            this.myValue = v;
        } else {
            this.myValue = 0;
        }
        this.publishTotal();
    }

    onChildValueChanged(childTotal: number) {
        this.childTotal = childTotal;
        this.publishTotal();
    }
}