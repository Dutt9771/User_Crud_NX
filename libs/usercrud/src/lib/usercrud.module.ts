import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DialogComponent,
} from './dialog/dialog.component';
import { CardComponent } from './card/card.component';
// import { DialogOverviewExampleDialog } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { OpendialogComponent } from './opendialog/opendialog.component';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MdbValidationModule,
    MdbFormsModule,
  ],
  declarations: [
    DialogComponent,
    CardComponent,
    OpendialogComponent
  ],
  exports: [DialogComponent, CardComponent, OpendialogComponent],
})
export class UsercrudModule {}
