import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'transformNull'
})
export class TransformNull implements PipeTransform {
  transform(value: any): string | number {
    if (value === null) {
      return 'It`s unknown'
    }
    return value;
  }
}
