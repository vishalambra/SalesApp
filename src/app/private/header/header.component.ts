import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../../team.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router, private teamService: TeamService) { }

    ngOnInit() {
    }
    // addTeam 
    addTeam() //Function to check log in credentials 
        // {
        //     if (this.add_TeamForm.controls.team.valid && this.add_TeamForm.controls.revenue.valid) {
        //         console.log(this.add_TeamForm.get('team').value);
        //         data = { team_name: this.add_TeamForm.controls.team.value, amount: this.add_TeamForm.controls.revenue.value };
        //         console.log(data);
        //         this.addservice.addTeam(data).subscribe(response => {
        //             console.log(response);
        //             if (response && response.status == 200) {
        //                 console.log("add-success");
        //                 this.router.navigate(['private/team/editTeam']);
        //             }
        //         });
        //     }
        //     else {
        //         console.log("something went wrong in login service");
        //     }

        // }
        {
        this.router.navigate(['private/team/editTeam']);
        }

    // logout function 
    logout() {
        this.teamService.logout().subscribe(response => {
            localStorage.clear();
            this.router.navigate(['/login']);
        });
    }

}