import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { PrivateRoutingModule } from './private-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { TeamComponent } from './team/team.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AddTeamComponent, EditTeamComponent, TeamComponent, HeaderComponent, FooterComponent],
  imports: [
    PrivateRoutingModule,
    NativeScriptCommonModule,
    NativeScriptUIListViewModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PrivateModule { }
