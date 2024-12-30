import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profs } from 'src/app/models/profs.models';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import Swal from 'sweetalert2';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.css']
})

export class EditProfComponent implements OnInit {
  editProfFormGroup!: FormGroup;
  prof!: Profs;

  programList: string[] = ['p1', 'p2'];

  selectedPrograms = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  
  constructor(private profService: ProfServiceService,
    private fb: FormBuilder,
    private router: Router,private route : ActivatedRoute) {
    this.prof=this.router.getCurrentNavigation()?.extras.state as Profs;
  }

  
  ngOnInit(): void {
    this.editProfFormGroup = this.fb.group({
      name: [''],
      email: [''],     
      programNames: [[]], 
    });

    this.setFormValues();
  }


  setFormValues() {
    if (this.prof) {
      console.log("program prof :", this.prof.programNames)
      this.emailFormControl.setValue(this.prof.email);
      this.nameFormControl.setValue(this.prof.name);
      //TODO : finish this 
      for(const program in this.prof.programNames){
        this.selectedPrograms.setValue(program);
      }

      this.editProfFormGroup.patchValue({
        name: this.prof.name,
        email: this.prof.email,
        programNames: this.prof.programNames,
      });
    }
  }

  handleUpdateProf() {
    console.log("t", this.selectedPrograms.value);
    this.editProfFormGroup.get('programNames')?.setValue(this.selectedPrograms.value);
    this.editProfFormGroup.get('email')?.setValue(this.emailFormControl.value);
    this.editProfFormGroup.get('name')?.setValue(this.nameFormControl.value);


    if (this.editProfFormGroup.valid && this.prof) {
      const updatedProf: Profs = {
        ...this.prof,
        ...this.editProfFormGroup.value
      };


      console.log('Selected Values:', this.editProfFormGroup.get('programNames'));
      console.log('Selected nom:', this.editProfFormGroup.get('name'));
 

      this.profService.updateProf(updatedProf.id,updatedProf).subscribe({
              next: (response) => {
                // Check if the status is 200 OK
                if (response.status === 200) {
                  // Display the message from the backend directly
                  const message = typeof response.body === 'string' ? response.body : response.body|| 'Operation successful';
      
                  Swal.fire('Succès', message, 'success');
                  this.router.navigateByUrl('/profs');
                } else {
                  Swal.fire('Erreur', 'Une erreur est survenue lors de la modification du professeur.', 'error');
                }
              },
              error: (err) => {
                console.error(err);
                Swal.fire('Erreur', 'Une erreur est survenue lors de  modification du professeur.', 'error');
              }
            });
    }
  }
}
