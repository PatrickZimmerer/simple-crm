import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
})
export class DialogEditUserComponent implements OnInit {
  birthDate: Date;
  user: User = new User();
  userId: string;
  loading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DialogEditUserComponent>,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  saveUser() {
    if (this.userId) {
      this.firestore
        .collection('users')
        .doc(this.userId)
        .update(this.user.toJSON())
        .then(() => {
          this.loading = false;
          this.dialogRef.close();
          console.log('edited details', this.user);
        });
    }
  }
}
