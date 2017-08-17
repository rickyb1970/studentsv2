import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css'],
})

export class ControlpanelComponent implements OnInit {

  @Output() AddClicked = new EventEmitter<any>();
  @Output() PrintClicked = new EventEmitter<any>();

  flag;
  messages = '';

  resetFlag;

  constructor() {
  }

  ngOnInit() {

  }

  addOption(data) {
    //console.log('add option clicked');
    this.flag = 'add';
    this.AddClicked.emit();
    console.log(this.AddClicked.emit());
  }

  listOption() {
    console.log('list option clicked');
    //this.PrintClicked.emit(data);
  }


}
