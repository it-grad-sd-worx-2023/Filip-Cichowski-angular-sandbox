import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private _currentTheme = '';
  public outsetTheme: Subject<string> = new Subject();

  constructor() {
    this.loadTheme();
  }

  get theme() {
    return this._currentTheme;
  }

  set theme(value: string) {
    this._currentTheme = value;
    localStorage.setItem('theme', value);
    this.outsetTheme.next(value);
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this._currentTheme = savedTheme;
      this.outsetTheme.next(savedTheme);
    }
  }
}
