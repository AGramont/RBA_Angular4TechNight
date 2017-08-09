import { 
    Component, OnInit, Directive, ElementRef, Renderer2, Input, 
    HostListener, Injectable
 } from "@angular/core";
import { Http, Response } from "@angular/http";

// This is ugly but makes observables more efficient.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // <-- explicitly add the map operator to observables
import { BaseService } from "./base.service";


export class Person {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    age: number = 0;
}

@Injectable() // <-- I am a service and can be injected
export class PersonService extends BaseService {

    private url = 'http://localhost:61417/api/person/';

    constructor(private http: Http) {
        super(http); // <-- Required when using a base class
    }

    // First pass at creating an http call
    public getPeople(): Observable<Array<Person>> {
                                    // call map() to pull the body from the response
        return this.http.get(this.url)
            .map(r => {
                return <Array<Person>>JSON.parse(r.text());
            });
    }


    
    // let's start using some OO savvy here
    public getPeople2() : Observable<Array<Person>> {
        return this.get<Array<Person>>(this.url);
    }

    public getPerson(id: string): Observable<Person> {
        return this.get<Person>(`${this.url}/${id}`);
    }

    public savePerson(person: Person): Observable<Response> {
        return this.post(this.url, person);
    }
}