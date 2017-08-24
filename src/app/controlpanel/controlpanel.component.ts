import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css'],
})

export class ControlpanelComponent implements OnInit {

  @Output() AddClicked = new EventEmitter<any>();
  @Output() PrintClicked = new EventEmitter<any>();

  flag;
  
  @Input() messages: string;

  resetFlag;

  constructor() {
  }

  ngOnInit() {

  }

  addOption() {
    //console.log('add option clicked');
    this.flag = 'add';
    this.AddClicked.emit({mode: this.flag});
    //console.log(this.AddClicked.emit({mode: this.flag}));
  }

  listOption() {
    this.flag = 'print'
    this.PrintClicked.emit({mode: this.flag});
  }


}
