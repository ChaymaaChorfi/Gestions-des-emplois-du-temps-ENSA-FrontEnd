import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profs } from 'src/app/models/profs.models';
import { ProfServiceService } from 'src/app/services/prof-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.css']
})
export class EditProfComponent implements OnInit {
  editProfFormGroup!: FormGroup;
  prof!: Profs;

  programList: string[] = ['p1', 'p2'];
  selectedPrograms: string[] = []; 

  
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

   // This method toggles the selection of a program
   toggleProgramSelection(program: string): void {
    const index = this.selectedPrograms.indexOf(program);
    if (index === -1) {
      this.selectedPrograms.push(program); 
    } else {
      this.selectedPrograms.splice(index, 1); 
    }
    this.editProfFormGroup.get('programNames')?.setValue(this.selectedPrograms);

    console.log('Selected Values:', this.editProfFormGroup.get('programNames'));  
  }

  // This method checks if a program is selected
  isSelected(program: string): boolean {
    return this.selectedPrograms.includes(program);
  }


  setFormValues() {
    if (this.prof) {
      console.log("program prof :", this.prof.programNames)
      this.editProfFormGroup.patchValue({
        name: this.prof.name,
        email: this.prof.email,
        programNames: this.prof.programNames,
      });
    }
  }

  handleUpdateProf() {
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
