import { Component, OnInit } from '@angular/core';
import { Istudent } from '../modules/student';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss']
})
export class StudentformComponent implements OnInit {

  stdArr: Array<Istudent> = [
    {
      fname: 'Aditya',
      lname: 'Waghmare',
      contact: '8080254641',
      email: 'adiwagh007@gmail.com'

    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onStdAdd(name: HTMLInputElement, lname: HTMLInputElement, email: HTMLInputElement, contact: HTMLInputElement) {
    console.log(name.value);
    let sdtOBj: Istudent = {
      fname: name.value,
      lname: lname.value,
      email: email.value,
      contact: contact.value
    }
    this.stdArr.push(sdtOBj)
    name.value = '';
    lname.value = '';
    email.value = '';
    contact.value = '';

  }

}
