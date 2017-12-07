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

    public myList: Array<string> = [];

    constructor() {
        this.myList = [];
    }

    ngOnInit() {
        var video = document.getElementById('video');
        var canvas = <HTMLCanvasElement>document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var list = ["face", "mouth", "eye"];
        const o = new tracking.ObjectTracker(list);

        var tracker = tracking.track(video, o, { camera: true });

        tracker.run();

        console.log(tracker)
        o.on('track', function (event) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            event.data.forEach(function (rect) {
                this.myList.push(JSON.stringify(rect));
                console.log(JSON.stringify(rect));
                context.strokeStyle = '#a64ceb';
                context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                context.font = '11px Helvetica';
                context.fillStyle = "#fff";
                context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
                context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
            });
        });
    }



}
