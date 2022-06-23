import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'isBollean'
})

export class TransformBollean implements PipeTransform {
  transform(value: any) : string | number {
    if(value === true) {
      return "Yes"
    }else if(value === false) {
      return 'No'
    }

    return value;
  }
}
