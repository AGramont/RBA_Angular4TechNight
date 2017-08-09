import { 
    Component, OnInit, Directive, ElementRef, Renderer2, Input, 
    HostListener, Injectable
 } from "@angular/core";
import { Http, Response } from "@angular/http";

// This is ugly but makes observables more efficient.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // <-- explicitly add the map operator to observables


@Injectable()
export class StreamService {

    streamMe(value: string): Observable<string> {
        let data: Array<string> = value.split('');
        return new Observable<string>(o => {
            console.log(`received value = "${value}"`)
            let limit = data.length - 1;
            let index = 0;
            console.log(`limit: ${limit}, index: ${index}`)
            let token = setInterval(() => {
                console.log('interval called');
                if (limit < index) {
                    clearInterval(token);
                    console.log('complete');
                    o.complete();
                } else {
                    console.log(value[index]);
                    if (value[index] == '*') {
                        o.error('* not allowed!');
                        clearInterval(token); // nothing more we can do here
                    } else {
                        o.next(value[index]);
                        index++;
                    }
                }
            }, 500);
        });
    }

}