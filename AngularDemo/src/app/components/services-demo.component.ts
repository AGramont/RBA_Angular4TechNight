import { 
    Component, OnInit, Directive, ElementRef, Renderer2, Input, HostListener 
 } from "@angular/core";
import { Observable, Subscription } from 'rxjs/Rx'; // <-- Use ractive extensions instead of Promises

import { RandomService } from "../services/random.service";
import { PersonService, Person } from "../services/person.service";
import { StreamService } from "../services/stream.service";


 @Component({
     styles: [`
    .wait-spinner-container {
         width: 100%;
     }
    .wait-spinner {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .stream-result {
        padding-top: 10ps;
        padding-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
        background-color: #1675A1;
        color: white;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 30px;
    }
    .stream-error {
        background-color: red;
    }
    .stream-complete {
        border: 4px solid green;
    }`],
     templateUrl: '../templates/services-demo.template.html'
     
 })
export class ServiceDemoComponent {
    
    private randomResult: string = '';
    private people: Array<Person>;
    private isLoading: boolean = false;

    // The RandomService is injected as a singleton (by default)
    constructor(private randomService: RandomService, 
        private personService: PersonService, private streamService: StreamService) {

    }

    private pushMe() {
        this.randomResult = this.randomService.getRandom();
    }

    private getPeople() {
        this.people = null;
        this.isLoading = true;
        this.personService.getPeople().subscribe(p => {
            this.people = p;
            this.isLoading = false;
        });
    }


    private streamValue: string = '';
    private subscription: Subscription;
    private streamResult: string = '';
    private hasStreamError: boolean = false;
    private isStreamComplete: boolean = false;

    private startStream() {
        this.isStreamComplete = false;
        console.log(`startStream: streamValue = "${this.streamValue}"`)
        if (this.subscription) {
            this.subscription.unsubscribe();
            console.log('unsubscribe')
        }
        this.streamResult = '';
        if (this.streamValue) {
            this.subscription = this.streamService.streamMe(this.streamValue).subscribe(r => {
                setTimeout(() => {
                    this.streamResult = this.streamResult + r;
                    console.log(`streamResult: "${this.streamResult}"`)
                });

            }, error => {
                this.hasStreamError = true;
            }, () => {
                this.isStreamComplete = true;
            });
        }

    }

}

