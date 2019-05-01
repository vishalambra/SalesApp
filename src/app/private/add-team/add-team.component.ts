import { Component, OnInit } from '@angular/core';
import { TeamService } from "../../team.service";
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  constructor(public teamservice: TeamService,public fb:FormBuilder) { }

  ngOnInit() {
    
  }

  addTeam(data){
    this.teamservice.addTeam(this.addTeam).subscribe(res =>{

    })
  }

  // addForm 
  addTeamForm= this.fb.group({
    team: ['', [Validators.required]],
    amount: ['', [Validators.required]]
  });

}
