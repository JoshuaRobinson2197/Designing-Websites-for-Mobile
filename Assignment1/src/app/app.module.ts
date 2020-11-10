import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { StringTypePipePipe } from './string-type-pipe.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    StringTypePipePipe,
    HoverStyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ContentListComponent]
})
export class AppModule { }
