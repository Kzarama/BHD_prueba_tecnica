import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: string): { integer: string; decimal: string } {
    const values = value.split('.');
    return { integer: values[0], decimal: values[1] };
  }
}
