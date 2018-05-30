import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private activityroute:ActivatedRoute) { }

  ngOnInit() {
    this.activityroute.queryParams
    .subscribe(params => {
     this. doThis(params.sport);
      
    })
  }

  doThis(anything:String){
    console.log(anything);
  }
}
