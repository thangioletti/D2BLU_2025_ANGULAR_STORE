import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName',
  standalone: true
})
export class ShortNamePipe implements PipeTransform {

  transform(value: string): string {
    const partes = value.split(' ');
    return `${partes[0]} ${partes[partes.length - 1][0]}.`;
  }

}
