import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {SnackService} from "../../services/snack.service";
import {PanelDto} from "../../dto/panel.dto";
import {ViewerService} from "../../services/viewer.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-foreman',
  templateUrl: './foreman.component.html',
  styleUrls: ['./foreman.component.scss']
})
export class ForemanComponent implements OnInit, OnDestroy {
  private panels: PanelDto[];
  private subscriptions: Subscription[] = [];

  constructor(private apiService: ApiService,
              private viewerService:ViewerService,
              private snackService: SnackService) { }

  ngOnInit() {
    this.apiService.getPanels().subscribe(panels => this.panels = panels);
    this.subscriptions.push(this.viewerService.onModel.subscribe(m=>{
      this.viewerService.setForemanCamera();
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
