import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'crud-opendialog',
  templateUrl: './opendialog.component.html',
  styleUrls: ['./opendialog.component.scss'],
})
export class OpendialogComponent {
  
}
//   constructor(public dialogRef: MatDialogRef<OpendialogComponent>) {}
//   //Dialog close function 
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//    /*Form validations*/
//    unameFormControl = new FormControl('', [
//     Validators.required,   
//     ]);
//     emailFormControl = new FormControl('', [
//       Validators.required,
//       Validators.email,
//     ]);
//     pwdFormControl = new FormControl('', [
//       Validators.required,   
//       Validators.minLength(8),
//     ]);  
//     matcher = new MyErrorStateMatcher();
// }

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     //condition true
//     const isSubmitted = form && form.submitted;
//     //false
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }