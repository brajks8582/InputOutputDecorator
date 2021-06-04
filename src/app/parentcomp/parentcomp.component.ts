import { Component, OnInit } from '@angular/core';
import {ChildcompComponent} from '../childcomp/childcomp.component';
@Component({
  selector: 'app-parentcomp',
  template: `
   <p>
      parentcomp works!
    </p>
    <hr>
    <app-childcomp [venue]="a"></app-childcomp>
  `,
  styles: [
  ]
})
export class ParentcompComponent implements OnInit {
  public a:string="Cognizant Training";
  constructor() { }

  ngOnInit(): void {
  }

}
