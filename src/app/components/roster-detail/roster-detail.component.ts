import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'mc-roster-detail',
  templateUrl: './roster-detail.component.html',
  styleUrls: ['./roster-detail.component.scss']
})
export class RosterDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  player = {}

  getRosterDetails(id) {
    this.api.getPlayer(id)
      .subscribe(data => {
        this.player = data;
      });
  }

  deletePlayer (id) {
    this.api.deletePlayer(id)
      .subscribe(res => {
        this.router.navigate(['/roster'])
      }, (err) => {
        console.log(err)
      });
  }

  ngOnInit() {
    this.getRosterDetails(this.route.snapshot.params['id']);
  }

}
