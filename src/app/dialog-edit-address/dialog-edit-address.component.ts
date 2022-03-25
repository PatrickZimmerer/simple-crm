import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'],
})
export class DialogEditAddressComponent implements OnInit {
  user: User;
  loading: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DialogEditAddressComponent>,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  saveUser() {
    console.log('current user is', this.user);
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
