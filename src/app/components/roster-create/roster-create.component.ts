import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'mc-roster-create',
  templateUrl: './roster-create.component.html',
  styleUrls: ['./roster-create.component.scss']
})
export class RosterCreateComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) 
  { }

  rosterForm: FormGroup;
  name:string='';
  jerseyNumber:number;
  height:string='';
  weight:string='';
  DOB:string='';
  playoffPPG:number;
  playoffRPG:number;
  playoffAPG:number;

  ngOnInit() {
    this.rosterForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'jerseyNumber' : [null, Validators.required],
      'height' : [null, Validators.required],
      'weight' : [null, Validators.required],
      'DOB' : [null, Validators.required],
      'playoffPPG' : [null, Validators.required],
      'playoffRPG' : [null, Validators.required],
      'playoffAPG' : [null, Validators.required]
    })
  }

  onFormSubmit(form:NgForm) {
    this.api.postPlayer(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/roster-details', id]);
        }, (err) => {
          console.log(err);
        });
  }

}
