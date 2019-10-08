import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  userForm: FormGroup;
  interests: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];
  buttonText = 'Sign Up Now >';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(){ 

    if(this.userForm.valid){
      console.log('Registration successful!');
      this.buttonText = "Submitting...";
    } else {
      console.log('Invalid email address entered.');
    }
  }

  onClick() {

  }

}


