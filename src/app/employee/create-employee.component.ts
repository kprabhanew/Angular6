import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      "fullname": new FormControl(),
      "email": new FormControl(),
      "skills": new FormGroup({
        "skillName": new FormControl(),
        "totalexperience": new FormControl(),
        "proficiency": new FormControl()
      })
    })
  }
  onSubmit(): void {
    console.log(this.employeeForm);
    console.log(this.employeeForm.touched);

    console.log(this.employeeForm.controls.fullname.value)
    console.log(this.employeeForm.get("fullname").value)
  }

}
