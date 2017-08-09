import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PersonService, Person } from "../services/person.service";

@Component({
    templateUrl: '../templates/template-form.template.html',
    styles: [`
    form .form-control { border-left: 5px solid green; }
    form .has-errors { 
        border-left: 5px solid red;
        border-top: 2px solid red;
        border-right: 2px solid red;
        border-bottom: 2px solid red;
    }`]
})
export class TemplateFormComponent implements OnInit {

    private id: string;
    private person: Person = new Person();

    constructor(private personService: PersonService, private router: Router, r: ActivatedRoute) {
        r.params.subscribe(r => {
            this.id = r['id'];
            this.loadForm();
        });

    }

    ngOnInit() {

    }

    private loadForm() {
        this.personService.getPerson(this.id).subscribe(p => {
            console.log(p);
            this.person = p;
        });
    }

    private onSubmit(event) {
        this.personService.savePerson(this.person).subscribe(response => {
            this.router.navigateByUrl('/form-list');
        });
    }
}