import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
//showFiller = false;
  sideNavigationItems: Array<{ name: string, link: string }> = [
    { 'name': 'Basic Elements', 'link': 'BasicElements' },
    { 'name': 'Advanced Elements', 'link': 'AdvancedElements' },
    { 'name': 'Reactive Forms', 'link': 'ReactiveForms' }];

    selectedNavItem(event: Event,selectedNavItem: string) {
    console.log(event)
    console.log(selectedNavItem);

  }
  constructor() { }

  ngOnInit() {
  }

}