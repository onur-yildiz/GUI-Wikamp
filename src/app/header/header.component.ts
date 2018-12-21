import { Component, OnInit } from '@angular/core';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  prof;
  msg;
  ntf;
  lan;
  constructor() { }

  ngOnInit() {
    document.addEventListener("click", (e) => {
      if(e.target != document.getElementById("profile")) {
        this.prof = false;
      }
    }, true);
    document.addEventListener("click", (e) => {
      if(e.target != document.getElementById("ntf")) {
        this.ntf = false;
      }
    }, true);
    document.addEventListener("click", (e) => {
      if(e.target != document.getElementById("msg")) {
        this.msg = false;
      }
    }, true);
    document.addEventListener("click", (e) => {
      if(e.target != document.getElementById("lan")) {
        this.lan = false;
      }
    }, true);
  }

}
