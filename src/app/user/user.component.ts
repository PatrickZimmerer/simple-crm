import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: any = new User();
  allUsers: any = [];

  constructor(
    public dialog: MatDialog,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({ idField: 'customIdName' })
      .subscribe((changes: any) => {
        //immer wenn eine änderung eintritt =>
        console.log('received changes from db', changes);
        this.allUsers = changes; // wird der wert dem array allUsers hinzugefügt
      });
  }
  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
  goToUserId() {
    this.router.navigateByUrl('/user/' + this.user.id);
  }
}
