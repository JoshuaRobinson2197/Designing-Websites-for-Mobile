import {Content} from './content-interface';
import {tryCatch} from "rxjs/internal-compatibility";

export class ContentList{
  private _contentItems: Content[];

  constructor() {
    this._contentItems = [];
  }

  get contentItems(): Content[]{
    return this._contentItems;
  }

  addContentItem(id: number, author: string, title: string, body: string, imgUrl?: string, type?: string, tags?: string[]): void {
    const newContentItem: Content = {
      id,
      author,
      imgUrl,
      type,
      title,
      body,
      tags
    };
    this._contentItems.push(newContentItem);
  }

  numberOfContentItems(): number{
    return this._contentItems.length;
  }

  itemAtIndex(index: number): string{
    let output: string;
    try {
      const itemProperties = `<li>id: ${this._contentItems[index].id}</li><li>author: ${this._contentItems[index].author}</li><li>imgUrl: ${this._contentItems[index].imgUrl}</li>
        <li>type: ${this._contentItems[index].type}</li><li>title: ${this._contentItems[index].title}</li><li>body: ${this._contentItems[index].body}</li><li>tags: ${this._contentItems[index].tags}</li>`;
      output = itemProperties;
    } catch (e){
     output = e;
    }
    return output;
  }
}
