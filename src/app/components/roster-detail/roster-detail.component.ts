import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'mc-roster-detail',
  templateUrl: './roster-detail.component.html',
  styleUrls: ['./roster-detail.component.scss']
})
export class RosterDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  player = {}

  getRosterDetails(id) {
    this.api.getPlayer(id)
      .subscribe(data => {
        console.log(data);
        this.player = data;
      });
  }

  ngOnInit() {
    this.getRosterDetails(this.route.snapshot.params['id']);
  }

}
