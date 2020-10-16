import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, ellipsis = 15): string {
    return value.toString().length <= 15 ? value : value.toString().substring(0, ellipsis).concat('...');
  }

}
