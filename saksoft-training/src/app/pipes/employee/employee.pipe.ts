import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employee'
})
export class EmployeePipe implements PipeTransform {

  transform(empList: any[], searchText: string, ...args: unknown[]): any {
    if (!searchText) {
      return empList;
    }

    if (empList){
      return empList.filter(obj =>{
        return (obj.firstName.toString().toLowerCase().includes(searchText.toLowerCase())) ||
        (obj.lastName.toString().toLowerCase().includes(searchText.toLowerCase()));

      });

    } else {
      return [];
    }
  }

}
