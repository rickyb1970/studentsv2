import { Component, OnInit, Input } from '@angular/core';
import { ControlpanelComponent } from '../controlpanel/controlpanel.component';

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

  resetFlag = false;

  constructor() {

  }

  getStudentRecord(){
     this.studentRecord = {
      studNo: this.studNo, 
      studFirstName: this.studFname, 
      studLastName: this.studLname,
      studProgram: this.studProg, 
      studYear: this.studYr
     };
     
     this.studNo = null;
     this.studFname = null;
     this.studLname = null;
     this.studProg = null;
     this.studYr = null;
     return this.studentRecord;
  }

  ngOnInit() {
  }

}
