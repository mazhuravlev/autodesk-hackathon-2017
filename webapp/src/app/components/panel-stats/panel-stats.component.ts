import {Component, Input, OnInit} from '@angular/core';
import {PanelDto} from "../../dto/panel.dto";

@Component({
  selector: 'app-panel-stats',
  templateUrl: './panel-stats.component.html',
  styleUrls: ['./panel-stats.component.scss']
})
export class PanelStatsComponent implements OnInit {

  @Input() panels: PanelDto[];

  constructor() { }

  ngOnInit() {
  }

  stats(){
    return {
      total: this.panels.length,
      mounted: this.panels.filter(x => x.isMounted).length
    };
  }
}
