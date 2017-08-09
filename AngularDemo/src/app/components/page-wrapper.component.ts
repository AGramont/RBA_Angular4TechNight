import { Component, Input } from "@angular/core";

@Component({
    selector: 'rba-page-wrapper',
    template: `
    <div class="panel panel-default">
        <div class="panel-heading component-page-heading">
            {{panelTitle}}
        </div>

        <div class="panel-body">
            <ng-content></ng-content>
        </div>
    </div>
    `
})
export class PageWrapperComponent {
    @Input('panel-title') panelTitle: string;
}