import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css'],
})

export class ControlpanelComponent implements OnInit {

  @Output() add = new EventEmitter<{mode: string}>();
  @Output() print = new EventEmitter<{mode: string}>();

  flag;
  messages = '';

  resetFlag;

  constructor() {
  }

  ngOnInit() {

  }

  addOption() {
    this.flag = 'add';
    this.add.emit({mode: this.flag});
    console.log(this.add.emit({mode: this.flag}));
  }

  listOption() {
    console.log('list option clicked');
    this.print.emit({mode: this.flag});
    console.log(this.print.emit({mode: this.flag}));
    //this.PrintClicked.emit(data);
  }


}
