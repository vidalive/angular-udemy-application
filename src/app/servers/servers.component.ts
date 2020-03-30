import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  // allowNewUser is a property. It is not a variable. 
  allowNewServer = false;

  
  constructor() {
    // you set a timeout that after 2 seconds button gets enabled.
    setTimeout(
      () => {
        this.allowNewServer = true;

    },2000);
   }

  ngOnInit(): void {
  }

}
