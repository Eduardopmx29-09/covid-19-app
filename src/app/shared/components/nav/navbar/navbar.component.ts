import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router,) { }

  ngOnInit(): void {
  }
  toHome(){
    this._router.navigate(["/home"])
  }
  toAbout(){
    this._router.navigate(["/about"])
  }
}
