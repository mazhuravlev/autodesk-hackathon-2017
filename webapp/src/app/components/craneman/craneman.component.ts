import {Component, OnDestroy, OnInit} from '@angular/core';
import {ViewerService} from "../../services/viewer.service";
import {ApiService} from "../../services/api.service";
import {PanelDto} from "../../dto/panel.dto";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-craneman',
  templateUrl: './craneman.component.html',
  styleUrls: ['./craneman.component.scss']
})
export class CranemanComponent implements OnInit, OnDestroy {
  private panels: PanelDto[];
  private subscriptions: Subscription[] = [];

  constructor(private api: ApiService, private viewerService: ViewerService) {
  }

  ngOnInit() {
    this.subscriptions.push(this.viewerService.onViewer.subscribe(v => {
      this.viewerService.setCraneCamera();
    }));

    this.subscriptions.push(this.api.getPanels().subscribe(panels => {
      this.panels = [];
      this.panels = panels.filter(p => p.isShipped && !p.isMounted);
    }));
  }

  mount(panel: PanelDto) {
    this.api.mount(panel).subscribe();
    // this.panels.splice(this.panels.indexOf(panel), 1);
  }

  public selectPanel(panel: PanelDto) {
    this.viewerService.setGhosting(false);
    this.viewerService.selectElement([panel.forgeId]);
  }

  ngOnDestroy(){
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
