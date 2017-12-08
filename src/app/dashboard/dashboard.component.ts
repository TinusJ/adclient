import { Component, OnInit } from '@angular/core';
import 'tracking';
import 'tracking/build/data/face';
import 'tracking/build/data/mouth';
import 'tracking/build/data/eye';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
    }

}
