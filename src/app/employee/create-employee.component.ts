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

  validationMessages = {
    "fullname": {
      "required": "Full Name is required",
      "maxlength": "Full Name must be less than 10 characters",
      "minlength": "Full Name must be greater than 2 characters"
    },
    "email": {
      "required": "Email is required"
    },
    "skillName": {
      "required": "Skill Name is required"
    },
    "totalexperience": {
      "required": "Total Experience is required"
    },
    "proficiency": {
      "required": "Proficiency is required"
    }
  };
  formErrors = {
    "fullname":"",
    "email":"",
    "skillName":"",
    "totalexperience":"",
    "proficiency":""
  }

  ngOnInit() {
    // Modify the code to include required validators on
    // all form controls
    this.employeeForm = this.fb.group({
      fullname: ['', [Validators.required,
      Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', Validators.required],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        totalexperience: ['', Validators.required],
        proficiency: ['', Validators.required]
      }),
    });
  } // ngOnInit
  
  // logKeyValuePairs(group: FormGroup): void {
  //   console.log(Object.keys(group.controls));
  // }

  logValidationErrorMessages(group: FormGroup): void {
    // Loop through each control key in the FormGroup
    Object.keys(group.controls).forEach((key: string) => {
      // Get the control. The control can be a nested form group
      const abstractControl = group.get(key);
      // If the control is nested form group, recursively call
      // this same method
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrorMessages(abstractControl);
        // If the control is a FormControl
      } else {
        // Clear the existing validation errors
         this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid) {
          // Get all the validation messages of the form control
          // that has failed the validation
          const messages = this.validationMessages[key];
          // Find which validation has failed. For example required,
          // minlength or maxlength. Store that error message in the
          // formErrors object. The UI will bind to this object to
          // display the validation errors
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }

  onLoadDataClick(): void {
    this.logValidationErrorMessages(this.employeeForm);
    console.log('Form Error Object : ' ,this.formErrors);
  }

  onsubmit(): void {
    console.log(this.employeeForm);
    console.log(this.employeeForm.touched);

    console.log(this.employeeForm.controls.fullname.value)
    console.log(this.employeeForm.get("fullname").value)
  }

}
