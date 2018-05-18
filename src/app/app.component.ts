import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = '';

  ngOnInit(){
   this.user = ' ';
  }

  validateUserName(){
    console.log("entro validateUserName");
  }
}
