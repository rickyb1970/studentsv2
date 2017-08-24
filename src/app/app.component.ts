import { Component, Input } from '@angular/core';

import { EntryConsoleComponent } from './entry-console/entry-console.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    studentCollection: Array<object> = [];
    
    studentRecord: {studNo: number, studFirstName: string, studLastName: string, studProgram: string, studYear: number};

    messages; 

    printing: boolean = false;

  checkPattern(value: any, pattern: RegExp): boolean {
      if (pattern.test(value))
         return true;
      else
         return false;
  } 

  selectMode(event,dataset?) {
    console.log(dataset); 
    if (event.mode === 'add'){
       this.studentRecord = dataset;
       this.addStudentEntry();
    } else if(event.mode === 'print') {
       this.listStudents();
       console.log('Printing mode....');
    }
       
       //console.log(this.studentRecord); 
     
  }

  addStudentEntry(): boolean {
      //console.log('contents of holder: '+this.studentRecord.studNo);

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

  listStudents(): boolean {
          this.printing = true;
          return this.printing;
  }
}
