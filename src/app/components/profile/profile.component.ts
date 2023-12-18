import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  implements OnInit{
  selectedTheme : string;
  constructor(public settingService : SettingsService){
    this.selectedTheme = this.settingService.theme;
  }
  ngOnInit(): void {
  }
  updatedTheme(){
    this.settingService.theme= this.selectedTheme;
  }
}
