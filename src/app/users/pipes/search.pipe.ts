import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: { [key: string]: any }[], keyword: string): { [key: string]: any }[] {
    return keyword
      ? value.filter(value =>
        Object.values(value)
          .some(innerValue =>
            innerValue.toString().toLowerCase().includes(keyword.toLowerCase())
          ) 
      )
      : value
  }

}
