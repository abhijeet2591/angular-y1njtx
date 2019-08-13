import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

export interface dept{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-basic-elecments',
  templateUrl: './basic-elecments.component.html',
  styleUrls: ['./basic-elecments.component.css']
})
export class BasicElecmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 department : dept[] =[
      {value:"1",viewValue:"Finanace"},
      {value:"2",viewValue:"IT"},
      {value:"3",viewValue:"HR"},
    ]
}