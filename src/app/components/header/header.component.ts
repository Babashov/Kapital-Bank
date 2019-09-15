import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSearchFormShow:boolean = false;
  @ViewChild('localInputRef',{static:true}) newInputEl:ElementRef;

  constructor() {
    
   }

  ngOnInit() {
  }

  showSearchForm(event):void
  {
    event.preventDefault();
    
    
    this.isSearchFormShow = !this.isSearchFormShow;
    if(this.isSearchFormShow)
    {
      setTimeout(() => {
        this.newInputEl.nativeElement.autofocus = true;
        this.newInputEl.nativeElement.focus();
      }, 0);
    }
  }

}
