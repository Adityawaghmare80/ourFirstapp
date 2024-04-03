import { Component } from '@angular/core';
import { StudentArr } from './modules/interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ourFirstapp';
    skills: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "Angular"]
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
    
    product: string = `<p class="alert-alert-bg-primary">Samsung Mobile Photo Is Added :-</p>`;
    imgUrl: string = `https://images.unsplash.com/photo-1597762470488-3877b1f538c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbXN1bmd8ZW58MHx8MHx8fDA%3D`;
    productStatus: string = `No Product Is Added Yet`;
    productCount: number = 0;
    valueAdd: string ='';

    getProductStatus() {
        console.log(`New Product Is Added`)
        this.productCount++
        this.productStatus = `${this.productCount} Product Is Added In Cart !!!`
    }

    removeProducts() {
        this.productCount--
        if(this.productCount < 1){
            this.productStatus = `NO Product Is Added In Cart !!!`
        }else{
            this.productStatus = `${this.productCount} Product Is In Cart !!!`
        }
    }
    addValue(eve: Event){
        let val = (eve.target as HTMLInputElement).value;
        console.log(val)
        this.valueAdd = val;
    }
}
