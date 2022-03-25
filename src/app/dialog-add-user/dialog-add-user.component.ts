import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  user: any = new User();
  loading: boolean = false;
  birthDate: Date;
  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {
    // this.user = firestore.collection('user').valueChanges();
  }

  ngOnInit(): void {}
  onNoClick() {}
  closeDialog() {
    this.dialogRef.close('Pizza!');
  }
  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        console.log('added user', result);
        this.dialogRef.close();
      });
    this.loading = false;
  }
}
