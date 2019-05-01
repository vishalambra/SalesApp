import { Component, OnInit } from '@angular/core';
import { TotalService } from '~/app/services/total.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
s:number;


  constructor(private sum:TotalService) { }

  ngOnInit() {
    this.s=this.sum.count;
    console.log("heyy");
    console.log(this.s);

  }

}
