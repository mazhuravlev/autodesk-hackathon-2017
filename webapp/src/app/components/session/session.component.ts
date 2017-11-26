import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ViewerService} from "../../services/viewer.service";
import "rxjs/add/operator/startWith";
import {ApiService} from "../../services/api.service";
import "rxjs/add/operator/do";
import {SnackService} from "../../services/snack.service";
import {Router} from "@angular/router";
import "rxjs/add/operator/mergeMap";
import {ICanDeactivate} from "../../guards/can-deactivate.interface";
import {Subscription} from "rxjs/Subscription";
import {SessionDto} from "../../dto/session.dto";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit, ICanDeactivate, OnDestroy {

  private model;
  private isUploading = false;
  private panelsLoaded = false;
  private subscriptions: Subscription[] = [];


  constructor(private viewerService: ViewerService,
              private apiService: ApiService,
              private router: Router,
              private snackService: SnackService) {
    const sessionId = this.getParameterByName('sessionId', window.location.href);
    if(sessionId) this.apiService.setSession({id: sessionId});
    this.subscriptions.push(this.apiService.getPanels().subscribe(models => {
      if(!models) localStorage.removeItem('session');
      if(models && models.length > 0) {
        this.panelsLoaded = true;
        this.router.navigateByUrl('/customer');
      }
    }));
    this.subscriptions.push(this.viewerService.onModel.subscribe(x => {
      this.panelsLoaded = true;
      this.model = x;
    }));

  }

  ngOnDestroy(){
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  ngOnInit() {
  }

  public canDeactivate(){
    if(!this.panelsLoaded) alert('Ошибка навигации: панели не загружены');
    return this.panelsLoaded;
  }

  public uploadPanels() {
    this.viewerService.setForemanCamera();
    this.isUploading = true;
    setTimeout(() => {
    this.viewerService.getAllPanels()
      .flatMap(panels => this.apiService.createSession(panels))
      .subscribe((session: SessionDto) => {
        this.apiService.setSession(session);
        this.panelsLoaded = true;
        this.router.navigateByUrl('/customer');
      }, err => {
        this.isUploading = false;
        this.snackService.error(err.message);
      });
    }, 1);
  }

    private getParameterByName(name, url): string|null {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
}
