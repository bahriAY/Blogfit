import { Component, Inject, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DsService } from './services/ds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  username;
  text;
  chats;
  chatArray = [];
  connectedUsers = [];
  newuser;

  constructor(public dialog: MdDialog, private ds: DsService) { }


  // Dialog pour la connexion ( pop up connexion )
  openDialog(): void {
    let dialogRef = this.dialog.open(AuthentificationComponent, {
      height: '220px',
      width: '400px',
    });
  }

  // Ajout d'un message au chat
  addChat() {
    const recordName = 'chat/' + this.ds.dsInstance.getUid();
    const chatRecord = this.ds.getRecord(recordName);
    chatRecord.set({ username: this.username, text: this.text });
    this.text = '';
    // Update the chats list

    this.chats.addEntry(recordName);
  }

  ngOnInit() {


    // Un username par defaut est attribué
    const defaultUsername = 'anonymous';

    // Recupération de l'username saisie
    const username = window.prompt('Veuillez entrer votre surnom pour le chat instantannée:', defaultUsername);

    // Remplacement du défaut par l'username saisie
    this.username = username || defaultUsername;
    
    // Login without credentials
    this.ds.login(null, this.loginHandler);
    
    // Récupère la liste des messages à partir du moment où on s'est identifié
    this.chats = this.ds.getList('chats');

    // Aprés la connexion au tchat en tant que visiteur
    this.chats.on('entry-added', recordName => {

      this.ds.getRecord(recordName).whenReady(record => {

        record.subscribe((data) => {
          if (data.username && data.text) {
            // Update bindable property  
            this.chatArray.push(data);
          }
        }, true);
      });
    })
  }

  getConnectedUserList() {
    
  }
 // this.updateConnectedUser(this.username);
  
  loginHandler(success, data) {
    console.log('logged in', success, data);
  }

}
