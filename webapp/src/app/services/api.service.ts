import {Injectable} from "@angular/core";
import {HubConnection} from "@aspnet/signalr-client";
import {environment} from "../../environments/environment";
import {SnackService} from "./snack.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {TokenDto} from "../dto/token.dto";
import "rxjs/add/operator/map";
import "rxjs/add/observable/never";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import {PanelDto} from "../dto/panel.dto";
import {PanelOrderDto} from "../dto/panel-order.dto";
import {PanelOrderInboundDto} from "../dto/panel-order-inbound.dto";
import {ToastService} from "./toast.service";
import {SessionDto} from "../dto/session.dto";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/startWith";

@Injectable()
export class ApiService {

    private endpoint = environment.apiEndpoint;

    private connection: HubConnection;
    private jsonHeaders: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

    private orderCreatedSubject = new Subject<any>();
    private orderShippedSubject = new Subject<any>();
    private panelMountedSubject = new Subject<PanelDto>();

    public onSessionSet = new Subject();

    private _sessionId: string;


    private panelsChanged = this.orderShippedSubject.merge(this.panelMountedSubject);

    constructor(private snackService: SnackService,
                private http: HttpClient) {
        if (localStorage.getItem('session')) {
            this.setSession({id: localStorage.getItem('session')});
        }
    }

    public get queryString(){
        return '?sessionId=' + this._sessionId;
    }

    get sessionId(): string {
        return this._sessionId;
    }

    public init() {
        const connection = this.connection = new HubConnection(`${environment.apiEndpoint}/hub`,
            {transport: environment.signalrTransport});
        connection.onclose(e => {
            this.snackService.error('Соединение с сервером разорвано: ' + (e && e.message) || 'ошибка');
        });
        connection.start().then(() => {
            this.snackService.success('Сервер подключен');
        }).catch(e => {
            this.snackService.error('Ошибка подключения: ' + (e && e.message) || 'ошибка');
        });
        this.connection.on('OrderCreated', () => {
            this.orderCreatedSubject.next();
            this.snackService.success('Создан заказ');
        });
        this.connection.on('OrderShipped', () => {
            this.orderShippedSubject.next();
            this.snackService.success('Отгружен заказ');
        });
        this.connection.on('PanelMounted', (panel: PanelDto) => {
            this.panelMountedSubject.next();
            this.snackService.success('Панель смонтирована: ' + panel.name);
        });
    }

    public getToken(): Observable<TokenDto> {
        return this.http.get(this.endpoint + '/user/token', {headers: this.jsonHeaders})
            .map(x => x as TokenDto);
    }

    public createSession(panels: PanelDto[]): Observable<SessionDto> {
        return this.http.post(this.endpoint + '/user/session', panels, {headers: this.jsonHeaders})
            .map(x => x as SessionDto);
    }

    public getPanels(): Observable<PanelDto[]> {
        return this.panelsChanged.startWith(null).flatMap(() => this.http.get(this.endpoint + '/panels'+this.queryString).map(x => x as PanelDto[]));
    }

    public makePanelOrder(orderDto: PanelOrderDto): Observable<any> {
        if (orderDto.panelsForgeIds.length < 1) {
            this.snackService.error('Нельзя сделать пустой заказ');
            return Observable.of(null);
        }
        return this.http.post(this.endpoint + '/panels/order'+this.queryString, orderDto, {headers: this.jsonHeaders});
    }

    public getPanelOrders(): Observable<PanelOrderInboundDto[]> {
        return this.orderCreatedSubject.merge(this.orderShippedSubject).startWith(null).flatMap(() =>
            this.http.get(this.endpoint + '/panels/orders'+this.queryString, {headers: this.jsonHeaders}).map(x => x as PanelOrderInboundDto[]));
    }

    public shipOrder(order: PanelOrderDto) {
        return this.http.post(this.endpoint + '/panels/orders/ship'+this.queryString, order, {headers: this.jsonHeaders})
    }

    public mount(panelDto: PanelDto) {
        return this.http.post(this.endpoint + '/panels/orders/mount'+this.queryString, panelDto, {headers: this.jsonHeaders})
    }

    public setSession(session: SessionDto) {
        this._sessionId = session.id;
        localStorage.setItem('session', session.id);
        this.onSessionSet.next();
    }

}
