import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  transform(value: any[], startAt = 0, size = 8): any[] {
    return [...value].splice(startAt * size, size);
  }
}
