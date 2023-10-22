import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'method',
})
export class MethodPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'promises':
        return 'Handled with Promises';
      case 'subscription':
        return 'Handled with Observables and subscription in .ts component';
      case 'pipe':
        return 'Handled with Observables and subscription in .html component with async pipe';
      default:
        return '';
        break;
    }
  }
}
