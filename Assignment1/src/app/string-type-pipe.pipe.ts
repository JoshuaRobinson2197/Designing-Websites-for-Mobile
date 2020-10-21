import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'specificType'
})
export class StringTypePipePipe implements PipeTransform {

  transform(contentList: Content[], specificType: string): unknown {
    return contentList.filter(c => c.type === specificType);
  }

}
