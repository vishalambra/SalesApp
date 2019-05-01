import { Component, OnInit } from '@angular/core';
import { TeamService } from "../../team.service";
import { TotalService } from '~/app/services/total.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(public teamservice: TeamService, private sum: TotalService,private router: Router) { }

  teams: any = [];
  total: number;

  ngOnInit() {
    this.teamservice.getTeams().subscribe(res => {
      this.teams = res.data;
      console.log(res);
      this.total = res.data.reduce((sum, item) => sum + item.amount, 0);
      this.sum.count = this.total;
    })
  }

  edit(){
    console.log("edit hua");
    this.router.navigate(['private/team/editTeam']);
  }
}
