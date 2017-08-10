import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { PrintingComponent } from './printing/printing.component';
import { EntryConsoleComponent } from './entry-console/entry-console.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlpanelComponent,
    PrintingComponent,
    EntryConsoleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
