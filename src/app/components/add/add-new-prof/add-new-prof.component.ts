import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profs } from 'src/app/models/profs.models';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import Swal from 'sweetalert2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-add-new-prof',
  templateUrl: './add-new-prof.component.html',
  styleUrls: ['./add-new-prof.component.css'],
})
export class AddNewProfComponent {

  programNames = new FormControl('');
  programList: string[] = ['p1', 'p2'];
  selectedPrograms: string[] = []; 

  newProfFormGroup!: FormGroup;
  
  constructor(private fb: FormBuilder,private profService : ProfServiceService, private router:Router) {}

  ngOnInit(): void {
    this.newProfFormGroup = this.fb.group({
      name: this.fb.control(null),
      email: this.fb.control(null),
      programNames: this.fb.control([]),
    });
  }


  // This method toggles the selection of a program
  toggleProgramSelection(program: string): void {
    const index = this.selectedPrograms.indexOf(program);
    if (index === -1) {
      this.selectedPrograms.push(program); // Add the program if not already selected
    } else {
      this.selectedPrograms.splice(index, 1); // Remove the program if already selected
    }
    this.newProfFormGroup.get('programNames')?.setValue(this.selectedPrograms);

    console.log('Selected Values:', this.selectedPrograms);  // Should log an array like ['p1', 'p2']

  }

  // This method checks if a program is selected
  isSelected(program: string): boolean {
    return this.selectedPrograms.includes(program);
  }

  
  
  

  handleAddProf() {
    if (this.newProfFormGroup.valid) {
      const newProf: Profs = this.newProfFormGroup.value;
      this.profService.saveProf(newProf).subscribe({
        next: (response) => {
          // Check if the status is 200 OK
          if (response.status === 200) {
            // Display the message from the backend directly
            const message = typeof response.body === 'string' ? response.body : response.body|| 'Operation successful';

            Swal.fire('Succès', message, 'success');
            this.router.navigateByUrl('/profs');
          } else {
            Swal.fire('Erreur', 'Une erreur est survenue lors de l\'ajout du professeur.', 'error');
          }
        },
        error: (err) => {
          console.error(err);
          Swal.fire('Erreur', 'Une erreur est survenue lors de l\'ajout du professeur.', 'error');
        }
      });
    } else {
      Swal.fire('Erreur', 'Veuillez remplir correctement tous les champs du formulaire', 'error');
    }
  }
  
}


/*
 nom: this.fb.control(null, [Validators.required]),
       cne: this.fb.control(null, [Validators.required]),
      prenom: this.fb.control(null, [Validators.required]),
      tel: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
       filliere: this.fb.control(null, [Validators.required]),
      login: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null, [Validators.required]),
      specialite: this.fb.control(null, [Validators.required])
*/