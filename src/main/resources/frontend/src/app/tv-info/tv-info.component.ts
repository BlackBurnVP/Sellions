import {Component, OnInit} from '@angular/core';
import {Tv} from "../tv";
import {AppService} from "../app.service";
import {TvListComponent} from "../tv-list/tv-list.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-tv-info',
  templateUrl: './tv-info.component.html',
  styleUrls: ['./tv-info.component.css'],
  providers:[TvListComponent]
})
export class TvInfoComponent implements OnInit {

  tv:any = {};
  sub:Subscription;

  constructor(
    private app:AppService,
    private tvList: TvListComponent,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
      const id = params['id'];
      if(id){
        this.app.getTv(id).subscribe((tv:any)=>{
          if(tv){
            this.tv = tv;
          }else{
            console.log('Not Found');
            this.gotoList()
          }
        });
      }
    });
  }

  gotoList(){
    this.router.navigateByUrl('/list')
  }

  upTv(){
    this.app.updateTv(this.tv.id,this.tv).subscribe(data=>{
        console.log(data);
      this.gotoList()
    }, error=>console.log(error));
    this.tv = new Tv();
  }
}
