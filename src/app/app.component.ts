import { Component } from '@angular/core';

import { EntryConsoleComponent } from './entry-console/entry-console.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    studentCollection: Array<object>;
    studentRecord: {studNo: number, studFirstName: string, studLastName: string, studProgram: string, studYear: number};

    messages; 

  checkPattern(value: any, pattern: RegExp): boolean {
      if (pattern.test(value))
         return true;
      else
         return false;
  } 

  trapthis() {
     console.log("Emitted event...."); 
  }

  addStudentEntry(): boolean {
      console.log(this.studentRecord);

      //this.studentEntry.printing;
      const stringPattern = /^[A-z\s]+$/;
      const studNumberPattern = /^[0-9]+$/;
      const studYearPattern = /^[1-5]+$/;

      if (this.checkPattern(this.studentRecord.studNo, studNumberPattern) &&
          this.checkPattern(this.studentRecord.studFirstName, stringPattern) &&
          this.checkPattern(this.studentRecord.studLastName, stringPattern) &&
          this.checkPattern(this.studentRecord.studProgram, stringPattern) &&
          this.checkPattern(this.studentRecord.studYear, studYearPattern)){

        this.studentCollection.push(this.studentRecord);

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
