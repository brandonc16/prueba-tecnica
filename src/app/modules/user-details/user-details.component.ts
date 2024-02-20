import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  constructor(@Inject(DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<UserDetailsComponent>) {}

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
