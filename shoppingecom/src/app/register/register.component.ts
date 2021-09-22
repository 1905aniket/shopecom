import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formbuiler:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.formbuiler.group({ 
      firstName: new FormControl('',[ Validators.required,
                                      Validators.minLength(2),
                                      Validators.maxLength(12)]),
                              
      lastName: new FormControl('',[ Validators.required,
                                     Validators.minLength(2),
                                     Validators.maxLength(12)]),
                            
    })
  }
 get firstName(){
    return this.registerForm.get('firstName');
 }
 get lastName(){
  return this.registerForm.get('lastName');
}
}
