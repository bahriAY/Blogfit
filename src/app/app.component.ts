import { Component, Inject, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DsService } from './services/ds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

username;
  text;
  chats;

  chatArray = [];
constructor(public dialog: MdDialog, private ds: DsService) {}

// Dialog pour la connexion
  openDialog(): void {
  let dialogRef = this.dialog.open(AuthentificationComponent, {
  height: '220px',
  width: '400px',
});
  }

  addChat() {

    const recordName = 'chat/' + this.ds.dsInstance.getUid();

    const chatRecord = this.ds.getRecord(recordName);
    chatRecord.set({username: this.username, text: this.text});
    this.text = '';
    // Update the chats list
    this.chats.addEntry(recordName);
  }

  ngOnInit() {



    // Get username from
    // window prompt and use 'anonymous' for
    // null or invalid response
    const defaultUsername = 'anonymous';
    const username = window.prompt('Please enter your username', defaultUsername);
    
    this.username = username || defaultUsername
    // Login without credentials
    this.ds.login(null, this.loginHandler);

    this.chats = this.ds.getList('chats');

    this.chats.on('entry-added', recordName => {
            
      this.ds.getRecord( recordName ).whenReady( record => {

        record.subscribe( (data) => {
          if(data.username && data.text) {
            // Update bindable property  
            this.chatArray.push(data);
          }
        }, true );

      });
    })

  }

  loginHandler(success, data) {
    console.log('logged in', success, data);
  }

}
