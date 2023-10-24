import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'request'
})
export class RequestPipe implements PipeTransform {

  transform(value:string): string {
    const date = new Date().toLocaleString(); // Get the current date and time
    return `[${date}] GET ${value}`;
  }

}
