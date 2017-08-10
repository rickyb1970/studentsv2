import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'controlpanel',
  //templateUrl: './controlpanel.component.html',
  template: `
    <div id="options">
      <button id="addStudents" (click)="addStudentEntry()">
          Add Student Entry 
      </button>
      <button id="listStudents" (click)="listStudents()">
          List Students
      </button>   
    </div>
    <div>
        {{ messages }}
    </div>  
  `,
  styleUrls: ['./controlpanel.component.css'],
//  providers: [ EntryConsoleComponent ]
})

export class ControlpanelComponent implements OnInit {  

  studentCollection: Array<object> = [];

  @Input() studentRecord;

  messages = '';

  resetFlag;

  constructor() { 

  }

  ngOnInit() {
  
  }

  checkPattern(value: any, pattern: RegExp): Boolean {
      if (pattern.test(value))
         return true;
      else
         return false;
  }

  getResetFlagState() {
     this.resetFlag = this.studentRecord.resetFlag;

     return {resetValue: this.resetFlag};
  }

  addStudentEntry(): Boolean {
      console.log(this.studentRecord);

      //this.studentEntry.printing;
      const stringPattern = /^[A-z\s]+$/;
      const studNumberPattern = /^[0-9]+$/;
      const studYearPattern = /^[1-5]+$/;

      if (this.checkPattern(this.studentRecord.studentRecord.studNo,studNumberPattern) && 
          this.checkPattern(this.studentRecord.studentRecord.studFirstName,stringPattern) && 
          this.checkPattern(this.studentRecord.studentRecord.studLastName,stringPattern) && 
          this.checkPattern(this.studentRecord.studentRecord.studProgram,stringPattern) && 
          this.checkPattern(this.studentRecord.studentRecord.studYear,studYearPattern)){

        this.studentCollection.push(this.studentRecord.studentRecord);

          // console.log(this.studentRecord);
        console.log(this.studentCollection);
        this.messages = null;

      } else {

        this.messages = 'Errors have been encountered and therefore cannot continue to process requested operation.';
        return false;

      }

      return true;
  }

  listStudents(): void {
          console.log('Listing');
  }

}
