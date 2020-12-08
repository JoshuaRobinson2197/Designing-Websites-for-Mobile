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
import {AddContentDialog, CreateContentComponent} from './create-content/create-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    StringTypePipePipe,
    HoverStyleDirective,
    AppMessagesComponent,
    CreateContentComponent,
    AddContentDialog,
    ContentDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 1000 }
    ),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: 'content/:id', component: ContentDetailComponent },
      { path: 'content', component: ContentListComponent },
      { path: '**', component: NotFoundComponent }
      ])
  ],
  providers: [],
  entryComponents: [AddContentDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
