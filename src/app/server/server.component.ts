
// import the component from @angular/core package
import { Component } from '@angular/core';


// this is a decorator
@Component(
    // and we pass a JS abject to it 
    {

    // and any JS object has a propery and a value
  selector: 'app-server',
  templateUrl: './server.component.html'
}
)
export class ServerComponent {

}