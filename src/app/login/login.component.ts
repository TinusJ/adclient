import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    title = 'Login';
    registerID: string;

    constructor(private router: Router) { }

    ngOnInit() {

    }

    goToMonitor() {
        this.router.navigate(['monitor']);
    }

}
