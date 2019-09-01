import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(items: any[], filter: Object): any {

    if (!items || !filter) {
      return items;
    }

    // filter items array, items which match and return true will be
    // kept, false will be filtered out

    return _.filter(items, filter);
  }

}
