import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admins } from 'src/app/models/admins.models';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import Swal from 'sweetalert2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ErrorStateMatcher } from '@angular/material/core';
import { Program } from 'src/app/models/program.model';
import { ProgramServiceService } from 'src/app/services/program-service.service';

@Component({
  selector: 'app-add-new-program',
  templateUrl: './add-new-program.component.html',
  styleUrl: './add-new-program.component.css'
})
export class AddNewProgramComponent {
  nameFormControl = new FormControl('', [Validators.required]);
  semesterFormControl = new FormControl('', [Validators.required]);

  newFormGroup!: FormGroup;
  
  constructor(private fb: FormBuilder,private programService : ProgramServiceService, private router:Router) {}

  ngOnInit(): void {
    this.newFormGroup = this.fb.group({
      programName: this.fb.control(null),
      semester: this.fb.control(null),
    });
  }

  handleAdd() {
    this.newFormGroup.get('programName')?.setValue(this.nameFormControl.value);
    this.newFormGroup.get('semester')?.setValue(this.semesterFormControl.value);

    if (this.newFormGroup.valid) {
      const newProgram: Program = this.newFormGroup.value;
      this.programService.saveProgram(newProgram).subscribe({
        next: (response) => {
          console.log(response);
          if (response.status === 200) {
            // Display the message from the backend directly
            const message = typeof response.body === 'string' ? response.body : response.body|| 'Operation successful';

            Swal.fire('Succès', message, 'success');
            this.router.navigateByUrl('/programs');
          } else {
            Swal.fire('Erreur', 'Une erreur est survenue lors de l\'ajout du program.', 'error');
          }
        },
        error: (err) => {
          console.error(err);
          Swal.fire('Erreur', 'Une erreur est survenue lors de l\'ajout du program.', 'error');
        }
      });
    } else {
      Swal.fire('Erreur', 'Veuillez remplir correctement tous les champs du formulaire', 'error');
    }
  }
  
}


