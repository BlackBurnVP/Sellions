import {Component, OnInit, ViewChild} from '@angular/core';
import {Tv} from "../tv";
import {Observable} from "rxjs/index";
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {MatSort} from "@angular/material";

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css']
})
export class TvListComponent implements OnInit {

  constructor(
    private app:AppService,
    private router:Router
  ) { }
  Tvs:Observable<Tv[]>;

  ngOnInit() {
    this.Tvs = this.app.getTvs();
  }

  delTv(id:number){
    this.Tvs = this.app.deleteTv(id)
  }
}
