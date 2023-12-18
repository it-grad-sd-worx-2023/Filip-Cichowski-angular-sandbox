import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {
  myName = 'Akhilesh';
  catNAME = 'Meow';
  showCard: boolean = false;

  // Method update name
  updateName(name: string) {
    console.log('Update Name :', name);
    this.myName = name;
  }
  toggleCard(){
    this.showCard = !this.showCard;
  }
}
