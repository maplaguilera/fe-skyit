import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Movies} from '../../Models/movie.models';



@Component({
  selector: 'dialogBox',
  templateUrl: 'dialogBox.component.html',
  styleUrls:['dialogBox.component.css']
})
export class DialogPoupBox {

  constructor(
    public dialogRef: MatDialogRef<DialogPoupBox>,
    @Inject(MAT_DIALOG_DATA) public data: Movies) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
