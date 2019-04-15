import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormControlName, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: [''],
      skills: this.fb.group({
        skillName: [''],
        totalexperience: 5,
        proficiency: 'beginner'
      })
    })
  }
  onLoadDataClick(): void {
  //   this.employeeForm.setValue({
  //     fullname: "John smith",
  //     email: "john@abc.com",
  //     skills: {
  //       skillName: "Nodejs",
  //       totalexperience: 10,
  //       proficiency: 'beginner'
  //   }
  // });

  this.employeeForm.patchValue({
    fullname: "John smith",
    email: "john@abc.com"
    // skills: {
    //   skillName: "Nodejs",
    //   totalexperience: 10,
    //   proficiency: 'beginner'
    // }
});

}

  onsubmit(): void {
    console.log(this.employeeForm);
    console.log(this.employeeForm.touched);

    console.log(this.employeeForm.controls.fullname.value)
    console.log(this.employeeForm.get("fullname").value)
  }

}
