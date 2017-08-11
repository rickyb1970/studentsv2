import { Component, OnInit, Input, Output } from '@angular/core';
import { ControlpanelComponent } from '../controlpanel/controlpanel.component';

@Component({
  selector: 'entry-console',
  templateUrl: './entry-console.component.html',
//   template:`
// <div>
//    <label>Student Number</label><input type="text" [(ngModel)]="studNo"><br>
//    <label>Student First Name</label><input type="text" [(ngModel)]="studFname"><br>
//    <label>Student Last Name</label><input type="text" [(ngModel)]="studLname"><br>
//    <label>Student Program</label><input type="text" [(ngModel)]="studProg"><br>
//    <label>Student Year</label><input type="text" [(ngModel)]="studYr"><br>
// </div>  
// <controlpanel [studentRecord] = "getStudentRecord()" ></controlpanel>
//   `,
  styleUrls: ['./entry-console.component.css'],
})


export class EntryConsoleComponent implements OnInit {

  studNo: number = null;
  studFname: string = null;
  studLname: string = null;
  studProg: string = null;
  studYr: number = null;
  
  @Input() studentRecord: {studNo: number, studFirstName: string, studLastName: string, studProgram: string, studYear: number};
  // @Input() studentRecord = {
  //                           studNo: this.studNo, 
  //                           studFirstName: this.studFname, 
  //                           studLastName: this.studLname,
  //                           studProgram: this.studProg, 
  //                           studYear: this.studYr
  //                          };

  resetFlag: boolean = false;

  constructor() { 
  } 

  ngOnInit() {
  }

  getStudentRecord(): object {
      this.studentRecord = {
                            studNo: this.studNo, 
                            studFirstName: this.studFname, 
                            studLastName: this.studLname,
                            studProgram: this.studProg, 
                            studYear: this.studYr
                           };    

      return this.studentRecord;                     
  }

}
