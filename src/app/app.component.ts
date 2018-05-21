import { Component, OnInit } from '@angular/core';
import {Restrictedword} from './model/restrictedword';
import {Username} from './model/username';
import {IntertecService} from './service/intertec.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user=' ';
  restrictedWords: Restrictedword[] = [];
  usedUserNames:  Username[] = []
  
  constructor(private intertecService: IntertecService ){}
  
  ngOnInit(){
    this.user = '';
    console.log('entro');
  }

  validateUserName(){
    console.log("se fue al servicio el username "+this.user);
    this.intertecService.getAvailableUserName(this.user);

  }
}
