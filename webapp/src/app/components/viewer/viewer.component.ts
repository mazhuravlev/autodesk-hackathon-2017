import {
    AfterViewInit, Component, EventEmitter, NgZone, OnDestroy, OnInit, Output, ViewChild,
    ViewEncapsulation
} from '@angular/core';
import InitializerOptions = Autodesk.Viewing.InitializerOptions;
import {ApiService} from "../../services/api.service";
import {TokenDto} from "../../dto/token.dto";
import {Observable} from "rxjs/Observable";
import {SnackService} from "../../services/snack.service";
import {ViewerService} from "../../services/viewer.service";

@Component({
    selector: 'app-viewer',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ViewerComponent implements OnInit, OnDestroy {
    @ViewChild('viewerContainer') viewerContainer: any;
    private viewer: any;
    private viewerService: ViewerService;

    constructor(private ngZone: NgZone, private apiService: ApiService, private snackService: SnackService,
                viewerService: ViewerService) {
        this.viewerService = viewerService;
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.viewer && this.viewer.running) {
            this.viewer.tearDown();
            this.viewer.finish();
        }
    }

    public init() {
        this.apiService.getToken().subscribe(
            token => {
                if (token) {
                    this.launchViewer(token);
                }
            },
            e => {
                this.snackService.error('Ошибка получения токена: ' + (e && e.message) || 'ошибка');
            });
    }

    private launchViewer(token: TokenDto) {
        if (this.viewer) return;
        const options: InitializerOptions = {
            env: 'AutodeskProduction',
            accessToken: token.access_token
        };

        this.viewer = new Autodesk.Viewing.Private.GuiViewer3D(this.viewerContainer.nativeElement);

        const documentUrn = _DOCUMENT_URN_;

        this.ngZone.runOutsideAngular(() => Autodesk.Viewing.Initializer(
            options,
            () => Autodesk.Viewing.Document.load(documentUrn, doc => this.onDocumentLoadSuccess(doc),
                viewerErrorCode => this.onDocumentLoadFailure(viewerErrorCode))));

        this.viewerService.setViewer(this.viewer);
        // this.viewer.setReverseZoomDirection(true);
    }

    private onDocumentLoadSuccess(doc: Autodesk.Viewing.Document) {
        const viewables = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {
            type: 'geometry'
        }, true);
        if (viewables.length === 0) {
            this.snackService.error('Документ не содержит моделей');
            return;
        }
        const initialViewable = viewables[0];
        const svfUrl = doc.getViewablePath(initialViewable);
        const modelOptions = {
            sharedPropertyDbPath: doc.getPropertyDbPath()
        };
        this.viewer.start(svfUrl, modelOptions, model => this.onLoadModelSuccess(model), err => this.onLoadModelError(err));
    }

    private onLoadModelSuccess(model) {
        this.viewerService.setModel(model);
    }

    private onLoadModelError(viewerErrorCode) {
        this.snackService.error('Не удалось загрузить модель: ' + viewerErrorCode);
    }

    private onDocumentLoadFailure(viewerErrorCode: string) {
        this.snackService.error('Не удалось загрузить документ: ' + viewerErrorCode);
    }
}



