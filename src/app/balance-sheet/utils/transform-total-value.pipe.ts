import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone: true,
    name: 'transformTotalValue'
})
export class TransformTotalValuePipe implements PipeTransform {
    transform(value:number):number | string{
        return value >= 0 ? value : `(${Math.abs(value)})`;
    }
}