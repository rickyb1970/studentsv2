import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css'],
})

export class ControlpanelComponent implements OnInit {  
  
  studentCollection: Array<object> = [];
  studentInfo: {studNo: number, studFirstName: string, studLastName: string, studProgram: string, studYear: number};

  messages = '';

  resetFlag;

  constructor() { 
  }

  ngOnInit() {
  
  }

  checkPattern(value: any, pattern: RegExp): boolean {
      if (pattern.test(value))
         return true;
      else
         return false;
  } 

  addStudentEntry(): boolean {
      console.log(this.studentInfo);

      //this.studentEntry.printing;
      const stringPattern = /^[A-z\s]+$/;
      const studNumberPattern = /^[0-9]+$/;
      const studYearPattern = /^[1-5]+$/;

      if (this.checkPattern(this.studentInfo.studNo,studNumberPattern) && 
          this.checkPattern(this.studentInfo.studFirstName,stringPattern) && 
          this.checkPattern(this.studentInfo.studLastName,stringPattern) && 
          this.checkPattern(this.studentInfo.studProgram,stringPattern) && 
          this.checkPattern(this.studentInfo.studYear,studYearPattern)){

        this.studentCollection.push(this.studentInfo);

          // console.log(this.studentRecord);
        console.log(this.studentCollection);
        this.messages = null;

      } else {

        this.messages = 'Errors have been encountered and therefore cannot continue to process requested operation.';
        return false;

      }

      return true;
  }

  getResetFlagState() {
    //  this.resetFlag = this.studentRecord.resetFlag;

    //  return {resetValue: this.resetFlag};
  }



  listStudents(): void {
          console.log('Listing');
  }

}
