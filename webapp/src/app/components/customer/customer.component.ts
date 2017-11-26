import {Component, OnDestroy, OnInit} from '@angular/core';
import {PanelDto} from "../../dto/panel.dto";
import {ApiService} from "../../services/api.service";
import {ViewerService} from "../../services/viewer.service";
import {Subscription} from "rxjs/Subscription";
import "rxjs/add/operator/do";
import "rxjs/add/operator/mergeMap";
import {Router} from "@angular/router";

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {
    private panels: PanelDto[];
    private subscriptions: Subscription[] = [];

    constructor(private apiService: ApiService,
                private router: Router,
                private viewerService: ViewerService) {
    }

    ngOnInit() {
        this.subscriptions.push(this.viewerService.onModel.do(() => this.viewerService.setForemanCamera())
            .flatMap(() => this.apiService.getPanels()).subscribe(panels => {
                if(!panels) {
                    this.apiService.setSession(null);
                    this.router.navigateByUrl('/');
                }
                this.panels = panels;
                const unmountedPanels = panels.filter(x => !x.isMounted).map(x => x.forgeId);
                const mountedPanels = panels.filter(x => x.isMounted).map(x => x.forgeId);
                this.viewerService.setGhosting(false);
                this.viewerService.hide(unmountedPanels);
                this.viewerService.show(mountedPanels);
            }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(x => x.unsubscribe());
    }
}
