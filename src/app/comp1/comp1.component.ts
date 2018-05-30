import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goto_comp2(){

    

    this.router.navigate(["comp2"]);
  }

  goto_comp2_query(){

    // let naviagationExtras:NavigationExtras={
    //   queryParams: {
    //     {'sport':'Basketball'}
    //   }
    // }

    this.router.navigate(["comp2"], {queryParams: { sport: 'Basketball', date: '20-05-1018' } });
  }
}
