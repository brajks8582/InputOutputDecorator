import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-childoutput',
  template: `<Button (click)="sendMsgtoparent()">Important Message</Button>
  
  `,
  styles: [
  ]
})
export class ChildoutputComponent implements OnInit {
  @Output() notifyMsg: EventEmitter<string>= new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  
  }
  sendMsgtoparent(){
    this.notifyMsg.emit("Angular is Interesting!!!!-Braj Singh ");
    } 

}
