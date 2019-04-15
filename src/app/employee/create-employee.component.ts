import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormControlName, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  fullnameLength = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: [''],
      skills: this.fb.group({
        skillName: ['Mongodb'],
        totalexperience: 5,
        proficiency: ['beginner']
      })
    })

  } // ngOnInit

  // logKeyValuePairs(group: FormGroup): void {
  //   console.log(Object.keys(group.controls));
  // }

  // onLoadDataClick(): void {
  //   this.logKeyValuePairs(this.employeeForm);
  // }

  logKeyValuePairs(group: FormGroup): void {
    // loop through each key in the FormGroup
    Object.keys(group.controls).forEach((key: string) => {
      // Get a reference to the control using the FormGroup.get() method
      const abstractControl = group.get(key);
      // If the control is an instance of FormGroup i.e a nested FormGroup
      // then recursively call this same method (logKeyValuePairs) passing it
      // the FormGroup so we can get to the form controls in it
      if (abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
        // If the control is not a FormGroup then we know it's a FormControl
      } else {
        // abstractControl.disable();
        // abstractControl.markAsDirty();
        console.log('Key = ' + key + ' && Value = ' + abstractControl.value);
      }
    });
  }

  onLoadDataClick(): void {
    this.logKeyValuePairs(this.employeeForm);
  }

  onsubmit(): void {
    console.log(this.employeeForm);
    console.log(this.employeeForm.touched);

    console.log(this.employeeForm.controls.fullname.value)
    console.log(this.employeeForm.get("fullname").value)
  }

}
