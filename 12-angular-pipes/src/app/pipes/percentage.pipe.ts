import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "percentage",
})
export class PercentagePipe implements PipeTransform {
    transform(value: number, total: number, decimal: number = 0): string {
        console.log('Percentage pipe called: Whenever the value of the primitive type changes that changes is called as pure change')
        return `${((value/total) * 100).toFixed(decimal) } %`;
    }
}