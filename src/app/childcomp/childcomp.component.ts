import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  template: `
    <p>
childcomp works ! with Parent Component from {{venue}}
</p>
  `,
  styles: [
  ]
})
export class ChildcompComponent implements OnInit {
@Input() venue :any
  constructor() { }

  ngOnInit(): void {
  }

}
