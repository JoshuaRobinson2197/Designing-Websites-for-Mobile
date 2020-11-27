import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { StringTypePipePipe } from './string-type-pipe.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import {FormsModule} from '@angular/forms';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data/in-memory-data.service';
import { CreateContentComponent } from './create-content/create-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    StringTypePipePipe,
    HoverStyleDirective,
    AppMessagesComponent,
    CreateContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 1000 }
    )
  ],
  providers: [],
  bootstrap: [AppComponent, ContentListComponent]
})
export class AppModule { }
