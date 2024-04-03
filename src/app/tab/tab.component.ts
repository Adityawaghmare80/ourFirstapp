import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  selectedCity: string = 'paris';

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(eve: Event) {
    this.selectedCity = (eve.target as HTMLAnchorElement).dataset['data-cities'] as string
  }

  
}
