import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  myName = "Yeshan";
  catName = "Tom";

  updateName(name: string) {
    console.log("Update Name: ", name);
    this.myName = name;
  }
}