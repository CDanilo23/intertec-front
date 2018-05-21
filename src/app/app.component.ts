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
  usedUserNames:  Username[] = [];
  available: any;
  kindOfList: string;
  
  constructor(private intertecService: IntertecService ){}
  
  ngOnInit(){
    this.user = '';
  }

  validateUserName(){
    this.restrictedWords = [];
    this.usedUserNames = [];
    return this.intertecService.getAvailableUserName(this.user).subscribe(p => {
      this.available = p.t1;
      this.kindOfList = p.t3;
      if(this.available==false && this.kindOfList=='restricted'){
         this.restrictedWords= p.t2;
      }
      else if(this.available==false && this.kindOfList=='not available'){
        this.usedUserNames= p.t2;
      }
    });

  }
}
