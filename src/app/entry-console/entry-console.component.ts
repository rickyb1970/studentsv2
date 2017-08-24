import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'entry-console',
  templateUrl: './entry-console.component.html',
  styleUrls: ['./entry-console.component.css'],
})


export class EntryConsoleComponent implements OnInit {

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;
  studentRecord;

  getStudentRecord() {
  this.studentRecord = {
        studNo: this.studNo, 
        studFirstName: this.studFname, 
        studLastName: this.studLname,
        studProgram: this.studProg, 
        studYear: this.studYr
        };

    return this.studentRecord;
  }

  //resetFlag = false;

  constructor() {

  }

  ngOnInit() {
  }

}
