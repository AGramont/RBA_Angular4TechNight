import { 
    Component, OnInit, Directive, ElementRef, Renderer2, Input, HostListener 
 } from "@angular/core";
import { Observable } from 'rxjs/Rx'; // <-- Use ractive extensions instead of Promises

import { PersonService, Person } from '../services/person.service';

@Component({
    styles: [`
    .ngif-target {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        border: 4px solid #1675A1;
        background-color: #888888;
        padding-top: 10px;
        padding-bottom: 7px;
        padding-right: 20px;
        padding-left: 20px;
        font-weight: bold;
        color: white;
    }
    .even-row {
        background-color: #ADC7D7;
    }
`],
    templateUrl: '../templates/if-for.template.html'
})
export class IfForComponent {

    private isLoading: boolean;
    private people: Array<Person>;

    constructor(private personService: PersonService){}

    private getPeople() {
        this.isLoading = true;
        this.personService.getPeople().subscribe(p => {
            this.people = p;
            this.isLoading = false;
        });
    }

}