import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SnackService} from "../../services/snack.service";
import {ApiService} from "../../services/api.service";
import {ViewerComponent} from "../viewer/viewer.component";
import {ObjectTreeComponent} from "../object-tree/object-tree.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(ViewerComponent) viewer: ViewerComponent;
  @ViewChild(ObjectTreeComponent) objectTree: ObjectTreeComponent;

  public sessionUrl;

  constructor(private snackService: SnackService,
              private apiService: ApiService,
              private router: Router) {

  }

  ngOnInit() {
    this.apiService.onSessionSet.startWith(null).subscribe(() => {
      this.sessionUrl = this.apiService.sessionId ? 'http://' + window.location.host + '/' + this.apiService.queryString : '';
    });
  }

  ngAfterViewInit() {
    this.apiService.init();
    setTimeout(() => this.viewer.init(), 100);
  }

  logout() {
    this.apiService.setSession({id: null});
    this.router.navigateByUrl('/')
  }
}
