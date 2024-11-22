import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/validators/name.validator';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';
import { PasswordValidator } from '../shared/validators/password.validator';
import { tap } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  // registrationForm = new FormGroup({
    // name: new FormControl('Ashu'),
    // email: new FormControl(''),
    // password: new FormControl(''),
    // confirmPassword: new FormControl(''),
    // address: new FormGroup({
    //   city: new FormControl(''),
    //   state: new FormControl(''),
    //   postalCode: new FormControl('')
    // })
  // })

  loadAPIData(){
    console.log(this.registrationForm)
    // this.registrationForm.setValue({
    //   name: 'Ashu',
    //   email: 'asd@gmail',
    //   password: 'asd',
    //   confirmPassword: 'asd',
    //   address: {
    //     state: 'UP',
    //     city: 'Allahabad',
    //     postalCode: '12345',
    //   }
    // })

    // this.registrationForm.patchValue({
    //   name: 'Ashu',
    //   email: 'asd@gmail',
    //   password: 'asd',
    //   confirmPassword: 'asd',
    // })
  }

  registrationForm!: FormGroup;

  constructor(
    private formBuilderService: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) {}
  
  ngOnInit(){
    this.registrationForm = this.formBuilderService.group({
      name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      address: this.formBuilderService.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      }),
      promotionalOffers: [false]
    }, {validators: PasswordValidator});

    this.registrationForm.get('subscribe')?.valueChanges.subscribe(checkedValue => {
      const email = this.registrationForm.get('email')
      if(checkedValue) {
        email?.setValidators(Validators.required)
      }else {
        email?.clearValidators()
      }
      email?.updateValueAndValidity()
    })

  }

  
  onSubmit() {
    if (this.registrationForm.valid) {
      this.registrationService.register(this.registrationForm.value)
      .pipe(
        // if you want to read anything or do something before going to subscribe with data, you can do it here
        tap(res => {
          if(res.type === 0){
            console.log('req sent')
          }
        })
      )
      .subscribe({next: response => {
        // to handle the subscribe data next is used
        console.log('Registration successful', response);
        this.router.navigate(['/user-list']);
      },
      error: error => {
        console.error('Registration failed', error);
      },
      complete: () => {
        // The complete notification indicates that the observable has finished emitting values.
        // The complete callback is not executed because the observable terminated with an error. 
        console.log('Once an observable completes, it will not emit any more values. Useful for Resource Cleanup:')
      }});
    } else {
      console.log('Form is invalid');
      // this.logFormErrors(this.registrationForm);
    }
  }
  
  // logFormGroupErrors() {
  //   if (this.registrationForm.errors) {
  //     console.log('Form Group Errors: ', this.registrationForm.errors);
  //   }
  // }
  
  // logFormErrors(formGroup: FormGroup) {
  //   Object.keys(formGroup.controls).forEach(key => {
  //     const control = formGroup.get(key);
  
  //     if (control instanceof FormGroup) {
  //       this.logFormErrors(control);
  //     } else if (control instanceof FormControl) {
  //       if (control.errors) {
  //         console.log(`Control: ${key}, Errors: `, control.errors);
  //       } else {
  //         console.log(`Control: ${key} is valid.`);
  //       }
  //     }
  //   });
  
  //   if (formGroup.errors) {
  //     console.log('Form Group Errors: ', formGroup.errors);
  //   }
  // }
  
}
