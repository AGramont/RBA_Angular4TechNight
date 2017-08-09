import { 
    Component, OnInit, Directive, ElementRef, Renderer2, Input, 
    HostListener, Injectable
 } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ActivatedRoute } from "@angular/router";

// This is ugly but makes observables more efficient.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // <-- explicitly add the map operator to observables


export class BaseService {

    protected httpService: Http;

    constructor(http: Http){
        this.httpService = http;
    }

    protected get<T>(url: string): Observable<T> {
        return this.httpService.get(url)
            .map(r => {
                return <T>JSON.parse(r.text());
            });
    }

    protected post<T>(url: string, value: T): Observable<Response> {
        return this.httpService.post(url, value);
    }
}