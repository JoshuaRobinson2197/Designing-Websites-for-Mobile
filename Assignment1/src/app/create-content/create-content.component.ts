import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content-service/content.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newArticleEvent = new EventEmitter<Content>();
  newArticle: Content;
  tags: string;
  errorMessage: string;
  constructor(private contentService: ContentService, public dialog: MatDialog) {
    this.newArticle = {
      id: 0,
      author: '',
      imgUrl: '',
      type: '',
      title: '',
      body: '',
      tags: []
    };
  }

  ngOnInit(): void {
  }

  openAddContentDialog(): void {
    const contentDialogRef = this.dialog.open(AddContentDialog, {
      width: '400px'
    });
    contentDialogRef.afterClosed().subscribe(newContentFromDialog => {
      this.newArticle = newContentFromDialog;
      this.addContent();
    });
  }

  addContent(): void {
    let newArticleFromServer: Content;
    this.contentService.addContent(this.newArticle).subscribe(serverArticle => {
      newArticleFromServer = serverArticle;
      this.newArticleEvent.emit(newArticleFromServer);
    });
  }
}

@Component({
  selector: 'app-create-content-dialog',
  templateUrl: './create-content-dialog.component.html',
})
export class AddContentDialog {
  newArticle: Content;
  tags: string;
  constructor(public dialogRef: MatDialogRef<AddContentDialog>) {
    this.newArticle = {
      id: null,
      author: '',
      imgUrl: '',
      type: '',
      title: '',
      body: '',
      tags: []
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
