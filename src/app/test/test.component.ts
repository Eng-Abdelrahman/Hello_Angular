import { Component, OnInit } from '@angular/core';
import { GetStagesService } from '../get-stages.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

test:any;
  constructor(public stage : GetStagesService ) { }

  ngOnInit(): void {

   this.stage.GetStages().subscribe(q => {
    this.test=q;
    console.log(this.test);

   });

  }


}
