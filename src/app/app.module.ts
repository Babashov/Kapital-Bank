import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { Globals } from './Injectable/Globals';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WrapperMainComponent } from './components/wrapper-main/wrapper-main.component';
import { LeftSideComponent } from './components/wrapper-main/left-side/left-side.component';
import { RightSideComponent } from './components/wrapper-main/right-side/right-side.component';
import { NavComponent } from './components/wrapper-main/left-side/nav/nav.component';
import { SliderComponent } from './components/wrapper-main/right-side/slider/slider.component';
import { BookmarksComponent } from './components/wrapper-main/right-side/bookmarks/bookmarks.component';
import { CurrencyComponent } from './components/wrapper-main/right-side/currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WrapperMainComponent,
    LeftSideComponent,
    RightSideComponent,
    NavComponent,
    SliderComponent,
    BookmarksComponent,
    CurrencyComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule    
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
