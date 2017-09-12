import { Component, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { AuthentificationComponent } from './authentification/authentification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(public dialog: MdDialog) {}

// Dialog pour la connexion
  openDialog(): void {
  let dialogRef = this.dialog.open(AuthentificationComponent, {
  height: '220px',
  width: '400px',
});
  }

 // Grid 
    tiles = [
    {text: 'Admin', cols: 4, rows: 2, color: 'gray'},
    {text: 'Mur', cols: 3, rows: 20, color: '#DDBDF1'},
    {text: 'Messagerie instantannée', cols: 1, rows: 20, color: 'lightgreen'}
  ];
}
