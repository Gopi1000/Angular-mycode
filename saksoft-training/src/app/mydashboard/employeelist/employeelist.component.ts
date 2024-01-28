import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  dataSourceEmpty = []

  p: number = 1;
  employeeList: any;
  searchText: string;
  constructor() {

    this.searchText = "";
    this.employeeList =
      [

        {
          "userId": 101,
          "firstName": "gopi",
          "lastName": "kannan",
          "phoneNumber": "9442622499",
          "emailaddress": "gopi@gmail.com"
        },
        {
          "userId": 102,
          "firstName": "raj",
          "lastName": "kumar",
          "phoneNumber": "5845157856",
          "emailaddress": "raj@gmail.com"
        },
        {
          "userId": 103,
          "firstName": "gokul",
          "lastName": "kannan",
          "phoneNumber": "4785156985",
          "emailaddress": "gokul@gmail.com"
        },
        {
          "userId": 104,
          "firstName": "ananth",
          "lastName": "kumar",
          "phoneNumber": "9854751564",
          "emailaddress": "ananth@gmail.com"
        },
        {
          "userId": 105,
          "firstName": "anbu",
          "lastName": "raj",
          "phoneNumber": "8754125635",
          "emailaddress": "anbu@gmail.com"
        },
        {
          "userId": 106,
          "firstName": "saravana",
          "lastName": "kumar",
          "phoneNumber": "9442622499",
          "emailaddress": "saravanakumar@gmail.com"
        },
        {
          "userId": 107,
          "firstName": "vel",
          "lastName": "murugan",
          "phoneNumber": "7541256865",
          "emailaddress": "vel@gmail.com"
        }
      ];
  }

  ngOnInit(): void {
  }

}
