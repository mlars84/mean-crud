import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'mc-roster-edit',
  templateUrl: './roster-edit.component.html',
  styleUrls: ['./roster-edit.component.scss']
})
export class RosterEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService,
  private formBuilder: FormBuilder) { }

  rosterForm: FormGroup;
  id:string = '';
  name:string = '';
  jerseyNumber:Number;
  height:string = '';
  weight:string = '';
  DOB:string = '';
  playoffPPG:number;
  playoffRPG:number;
  playoffAPG:number;

  ngOnInit() {
    this.getPlayer(this.route.snapshot.params['id']);
    this.rosterForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'jerseyNumber': [null, Validators.required],
      'height': [null, Validators.required],
      'weight': [null, Validators.required],
      'DOB': [null, Validators.required],
      'playoffPPG': [null, Validators.required],
      'playoffRPG': [null, Validators.required],
      'playoffAPG': [null, Validators.required]
    });
  }

  getPlayer (id) {
    this.api.getPlayer(id).subscribe(data => {
      this.id = data._id;
      this.rosterForm.setValue({
        name: data.name,
        jerseyNumber: data.jerseyNumber,
        height: data.height,
        weight: data.weight,
        DOB: data.DOB,
        playoffPPG: data.playoffPPG,
        playoffRPG: data.playoffRPG,
        playoffAPG: data.playoffAPG
      });
    });
  }

  onFormSubmit (form:NgForm) {
    this.api.updatePlayer(this.id, form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/roster-details', id]);
      }, (err) => {
        console.log(err);
      }
    );
  }

  playerDetails () {
    this.router.navigate(['/roster-details', this.id]);
  }

}
