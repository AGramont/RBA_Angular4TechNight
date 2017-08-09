import { 
    Component, OnInit, Directive, ElementRef, Renderer2, Input, 
    HostListener, Injectable
 } from "@angular/core";
import { Http, Response } from "@angular/http";

// This is ugly but makes observables more efficient.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // <-- explicitly add the map operator to observables


// NOTE: When created an injection source in the same file as the target, 
// the injection source needs to come BEFORE the target
@Injectable() // <-- Now I am a service
export class RandomService {

    constructor() {}

    public getRandom(): string {
        let r = Math.random() * 10;
        return r.toFixed(0);
    }

}