import { Component, OnInit } from '@angular/core';
import {  ChildoutputComponent} from '../childoutput/childoutput.component';
@Component({
  selector: 'app-parentoutput',
  template: `
    Your Message will he shown here : <h1>{{ChildComponentMsg}}</h1>
  <app-childoutput (notifyMsg)="handlenotify($event)">Data</app-childoutput>
  `,
  styles: [
  ]
})
export class ParentoutputComponent implements OnInit {
  ChildComponentMsg:any;
  constructor() { }

  ngOnInit(): void {
  }
handlenotify(msg:string){
  this.ChildComponentMsg = msg;
}
}
