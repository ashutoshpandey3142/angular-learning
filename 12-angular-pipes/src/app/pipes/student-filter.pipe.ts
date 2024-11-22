import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../component/models/student.model";

@Pipe({
    name: 'studentFilter',
    // pure: false // to make pipe impure, by default it is true
})
export class StudentFilterPipe implements PipeTransform {
    transform(items: Student[], filterText: string): Student[] {
        console.log(filterText, items)
        if(filterText.toLowerCase() === 'all' || filterText === "" || items.length === 0) return items
        return items.filter(stu => stu.gender.toLowerCase() === filterText.toLowerCase())
    }
}