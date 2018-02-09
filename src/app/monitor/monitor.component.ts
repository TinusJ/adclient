import { Component, OnInit } from '@angular/core';
import 'tracking';
import 'tracking/build/data/face';
import 'tracking/build/data/mouth';
import 'tracking/build/data/eye';

@Component({
    selector: 'monitor',
    templateUrl: './monitor.component.html',
    styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {


    trackingTask: any;
    trackingList: Array<string> = ["face"];// "mouth", "eye"
    monitor: boolean = false;


    constructor() { }

    ngOnInit() {
        console.log();
    }

    startTrackingJS() {
        let video = document.getElementById('video');
        let canvas = <HTMLCanvasElement>document.getElementById('canvas');
        let c = new tracking.ObjectTracker(this.trackingList);

        this.trackingTask = tracking.track(video, c, { camera: true });


        c.on('track', function (event) {

            event.data.forEach(element => {
                console.log(JSON.stringify(element));
            });
        });
    }

    stopTrackingJS() {
        this.trackingTask.stop();
    }


    switch() {
        this.monitor = !this.monitor;

        if (this.monitor) {
            this.startTrackingJS();
        } else {
            //this.stopTrackingJS();
        }
    }
}
