import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any }| null {
//     const forbidden = /admin/.test(control.value);
//     return forbidden? {'forbiddenName': {value: control.value}} : null;
// }

// drawback can't pass multiple value 
// so create a factor function

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any }| null => {
        const forbidden = forbiddenName.test(control.value);
        return forbidden? {'forbiddenName': {value: control.value}} : null;
    }
}