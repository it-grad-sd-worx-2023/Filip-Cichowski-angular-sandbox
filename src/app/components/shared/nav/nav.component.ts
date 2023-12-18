import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  currentNavTheme = 'blue'
  constructor (private settingService : SettingsService){


  }
  ngOnInit(): void {
    if(this.settingService.theme){
      this.currentNavTheme= this.settingService.theme
    }
    this.settingService.outsetTheme.subscribe(newTheme => {
      console.log("New nav theme:", newTheme)
      this.currentNavTheme = newTheme;
    })
  }


}
