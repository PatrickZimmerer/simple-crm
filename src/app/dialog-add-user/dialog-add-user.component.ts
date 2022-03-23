import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  user: any = {};

  birthDate: Date;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  onNoClick() {}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is', this.user);
  }
}
