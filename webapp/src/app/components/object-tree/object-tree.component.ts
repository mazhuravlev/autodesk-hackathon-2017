import {Component, OnDestroy, OnInit} from '@angular/core';
import {ViewerService} from "../../services/viewer.service";

import "rxjs/add/operator/mergeMap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PanelDto} from "../../dto/panel.dto";

import * as _ from 'lodash';
import {ApiService} from "../../services/api.service";
import {PanelOrderDto} from "../../dto/panel-order.dto";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-object-tree',
  templateUrl: './object-tree.component.html',
  styleUrls: ['./object-tree.component.scss']
})
export class ObjectTreeComponent implements OnInit, OnDestroy {
  public levels: Map<string, PanelDto[]>;
  private allIds: number[] = [];

  public form: FormGroup;
  public currentLevel: string;
  private selectedPanel: PanelDto[] = [];

  private subscriptions: Subscription[] = [];

  constructor(private viewerService: ViewerService, private api: ApiService, private fB: FormBuilder) {
    this.form = this.fB.group({
      level: ' ',
      objects: this.fB.array([])
    });
  }

  ngOnInit() {
    this.subscriptions.push(this.viewerService.onModel.subscribe(m => {
      this.levels = this.viewerService.getLevelsMap();
      this.allIds = Array.from(this.levels.values()).reduce((a, b) => a.concat(b)).map(x => x.forgeId);
    }));
  }

  onLevelChange(event: any) {
    this.currentLevel = event.value;
    const idsToIsolate = Array.from(this.levels.values())
      .reduce((a, b) => a.concat(b))
      .filter(x => x.level === this.currentLevel)
      .map(x => x.forgeId);
    this.viewerService.setGhosting(false);
    this.viewerService.isolateElements(idsToIsolate);
  }

  getLevels() {
    return Array.from(this.levels.keys());
  }

  getPanels(): PanelDto[] {
    if (this.currentLevel) return this.levels.get(this.currentLevel).filter(x => !x.name.startsWith('Плита'));
    return [];
  }

  getFloors(): PanelDto[] {
    if (this.currentLevel) return this.levels.get(this.currentLevel).filter(x => x.name.startsWith('Плита'));
    return [];
  }

  onPanelClick(event: any, panelId: number) {
    const panel = _.find(Array.from(this.levels.values()).reduce((a, b) => a.concat(b)), {forgeId: panelId});
    if (event.checked) this.selectedPanel.push(panel);
    else this.selectedPanel.splice(this.selectedPanel.indexOf(panel), 1)
    this.viewerService.selectElement(this.selectedPanel.map(x => x.forgeId));
  }

  onSelecAllPanels(event: any) {
    this.getPanels().forEach(p => {
      this.onPanelClick(event, p.forgeId);
    });
  }

  onSend() {
    const panels = {panelsForgeIds: this.selectedPanel.map(x => x.forgeId)} as PanelOrderDto;
    this.api.makePanelOrder(panels).subscribe();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
