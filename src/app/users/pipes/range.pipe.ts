import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: number | any[], chunks = 1): number[] {
    if (Array.isArray(value)) {
      return  Array.from(Array(Math.ceil(value.length / chunks)).keys())
    } 

    return Array.from(Array(value).keys())
  }

}
