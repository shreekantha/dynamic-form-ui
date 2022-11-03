import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'objectValue'
})
export class ObjectValuePipe implements PipeTransform {

  transform(object: any, keyName: string, ...args: unknown[]): unknown {
    // console.log("object :",{...object});
    
    return object[keyName];
  }

}
