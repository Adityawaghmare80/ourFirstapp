import { Component } from "@angular/core";
import { StudentArr } from "../modules/interface";

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
  })

export class StudentComponent {
    stdArr: Array<StudentArr> = [
        {
            fname: "Jhon",
            lname: "Doe",
            email: "jd@gmail.com",
            contact: 1231231231
        },
        {
            fname: "James",
            lname: "Bond",
            email: "jbond@gmail.com",
            contact: 45645644564
        },
        {
            fname: "Tony",
            lname: "Stark",
            email: "ts@gmail.com",
            contact: 7897897897
        },
        {
            fname: "Captain",
            lname: "America",
            email: "ca@gmail.com",
            contact: 8908908908
        },
        {
            fname: "Andre",
            lname: "Russel",
            email: "russal@gmail.com",
            contact: 1231231231
        }
    ]
}