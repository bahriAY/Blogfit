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

  // Generation automatique de tiles
 /* Grid 
    tiles = [
    {text: 'admin panel', cols: 4, rows: 2, color: 'gray'},
    {text: 'posts', cols: 3, rows: 20.4, color: '#DDBDF1'},
    {text: 'app-chat', cols: 1, rows: 20.4, color: 'lightgreen'}
  ];
 */
}
