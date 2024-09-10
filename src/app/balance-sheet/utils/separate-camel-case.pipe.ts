import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'separateCamelCase'
})
export class SeparateCamelCasePipe implements PipeTransform {
    transform(value: string){
        return value.replace(/([a-z])([A-Z])/g, '$1 $2'); 
    }
}