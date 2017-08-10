import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.css']
})
export class PrintingComponent implements OnInit {

  @Output() tobePrinted = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
