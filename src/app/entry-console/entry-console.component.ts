import { Component, OnInit, Input, Injectable, Output } from '@angular/core';
import { ControlpanelComponent } from '../controlpanel/controlpanel.component';

@Component({
  selector: 'entry-console',
  //templateUrl: './entry-console.component.html',
  template:`
<div>
   <label>Student Number</label><input type="text" [(ngModel)]="studNo"><br>
   <label>Student First Name</label><input type="text" [(ngModel)]="studFname"><br>
   <label>Student Last Name</label><input type="text" [(ngModel)]="studLname"><br>
   <label>Student Program</label><input type="text" [(ngModel)]="studProg"><br>
   <label>Student Year</label><input type="text" [(ngModel)]="studYr"><br>
</div>  
<controlpanel [studentRecord] = "getStudentRecord()" ></controlpanel>
  `,
  styleUrls: ['./entry-console.component.css'],
})


export class EntryConsoleComponent implements OnInit {

  studNo: number = null;
  studFname: string = null;
  studLname: string = null;
  studProg: string = null;
  studYr: number = null;

  studentRecord: object;

  
  resetFlag = false;

  constructor() { 

  } 

  ngOnInit() {
  }

  getStudentRecord(){
    this.studentRecord = {
      studNo: this.studNo, 
      studFirstName: this.studFname, 
      studLastName: this.studLname,  
      studProgram: this.studProg, 
      studYear: this.studYr
    };

    this.resetFlag = true;
    return { studentRecord: this.studentRecord, resetFlag: this.resetFlag };
  }

  // clearEnteredValues(){
  //     this.resetFlag =  
  // }

}
