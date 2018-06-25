import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../../api.service'
import { log } from 'util';

@Component({
  selector: 'mc-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {

  constructor(private api: ApiService) { }

  roster: any

  ngOnInit() {
    this.api.getRoster()
      .subscribe(res => {
        this.roster = res
      }, err => {
        console.log(err)
      })
  }

}
