import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    return value ? moment(value).format("DD MMM YYYY") : "";
  }

}
