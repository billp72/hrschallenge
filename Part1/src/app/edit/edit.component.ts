import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../services';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  updateForm: FormGroup;
  loading = false;
  submitted = false;
  id: number;
  user = [];
  constructor(
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserId();   
  }
  // convenience getter for easy access to form fields
  get f() { return this.updateForm.controls; }

  private getUserId() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.loadUser();
  }

  private loadUser() {
    this.userService.getUser(this.id)
        .pipe(first())
        .subscribe((user) => { 
          this.user = user;
          this.populateForm();
        });
    
   }

   private populateForm() {
    this.updateForm = this.formBuilder.group({
      firstName: [this.user[0].firstName, Validators.required],
      lastName: [this.user[0].lastName, Validators.required],
      id: [this.id]
    });
   }
   
   onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.updateForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.update(this.updateForm.value)
        .pipe(first())
        .subscribe(
            () => {
              this.loading = false;
            },
            error => {
              this.loading = false;
            });
  }
}
