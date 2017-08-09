import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: '../templates/binding-data.template.html',
    styles: [`        
        .local-highlight {
            background-color: #FFD300;
            padding: 2px;
        }
        .local-color-box {
            height: 50px;
            width: 100px;
            padding: 10px;
            background: #FFD300;
        }
        .checked-color-box {
            background-color: #1675A1;
            color: white;
            font-weight: bold;
        }`
    ]
})                                      // OnInit is one of many life hooks
export class BindingDataComponent implements OnInit {

    currentTime: Date;

    // The calling method for life hook OnInit
    ngOnInit() {
        setInterval(() => {
            
            this.currentTime = new Date();

        }, 500);
    }    

    changeInput: string;
    keyupInput: string;
    changeInput2: string;
    isChecked: boolean;

}