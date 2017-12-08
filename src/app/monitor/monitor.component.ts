import { Component, OnInit } from '@angular/core';
import 'tracking';
import 'tracking/build/data/face';
//import 'tracking/build/data/mouth';
//import 'tracking/build/data/eye';

@Component({
    selector: 'monitor',
    templateUrl: './monitor.component.html',
    styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {


    trackingTask: any;
    trackingList: Array<string> = ["face"];// "mouth", "eye"


    constructor() { }

    ngOnInit() {
        this.startTracking();
    }

    startTracking() {
        let video = document.getElementById('video');
        let canvas = <HTMLCanvasElement>document.getElementById('canvas');
        let context = canvas.getContext('2d');
        let c = new tracking.ObjectTracker(this.trackingList);

        this.trackingTask = tracking.track(video, c, { camera: true });
        this.trackingTask.run();

        c.on('track', function (event) {
            context.clearRect(0, 0, canvas.width, canvas.height);

            event.data.forEach(function (rect) {
                console.log('PICKED UP [x: ' + rect.x + 'px ' + rect.x + rect.width + 5, rect.y + 11 + "]");
                context.strokeStyle = '#a64ceb';
                context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                context.font = '11px Helvetica';
                context.fillStyle = "#fff";
                context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
                context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
            });
        });
    }

    stopTracking() {
        this.trackingTask.stop();
    }





}
