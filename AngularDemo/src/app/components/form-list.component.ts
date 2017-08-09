import { Component, OnInit } from "@angular/core";
import { PersonService, Person } from "../services/person.service";

@Component({
    selector: 'app-root',
    templateUrl: '../templates/form-list.template.html',
    styles: [`.even-row {
        background-color: #659DBD;
        color: black;
    }
    .even-row:hover {
        background-color: #DAAD86;
        color: white;
    }
    .odd-row {
        background-color: #FBEEC1;    
        color: black;
    }
    .odd-row:hover {
        background-color: #DAAD86;
        color: white;
    }`]
})
export class FormListComponent {
    
    private isLoading: boolean;
    private people: Array<Person>;

    constructor(private personService: PersonService){}

    ngOnInit() {
        this.getPeople();
    }

    private getPeople() {
        this.isLoading = true;
        this.personService.getPeople().subscribe(p => {
            this.people = p;
            this.isLoading = false;
        });
    }


    // submit the form
    private onSubmit() {

    }
}