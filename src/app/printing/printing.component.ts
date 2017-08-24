import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.css']
})
export class PrintingComponent implements OnInit {

  @Input() printing: boolean;
  @Input() studentCollection: Array<object>;

  constructor() { }

  ngOnInit() {
  }

}
