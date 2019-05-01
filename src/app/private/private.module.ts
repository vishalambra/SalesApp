import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { TeamComponent } from './team/team.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TotalService } from '../services/total.service';

@NgModule({
  declarations: [AddTeamComponent, EditTeamComponent, TeamComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ],
  providers:[TotalService]
})
export class PrivateModule { }
