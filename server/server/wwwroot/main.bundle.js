webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_app_routing_module__ = __webpack_require__("../../../../../src/app/modules/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_app_app_component__ = __webpack_require__("../../../../../src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_material_module__ = __webpack_require__("../../../../../src/app/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_yandex_maps__ = __webpack_require__("../../../../angular2-yandex-maps/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_yandex_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_yandex_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_simple_guard__ = __webpack_require__("../../../../../src/app/guards/simple.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_window_window_component__ = __webpack_require__("../../../../../src/app/components/window/window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_viewer_viewer_component__ = __webpack_require__("../../../../../src/app/components/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_index_index_component__ = __webpack_require__("../../../../../src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_toast_service__ = __webpack_require__("../../../../../src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_snack_service__ = __webpack_require__("../../../../../src/app/services/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_draggable_directive__ = __webpack_require__("../../../../../src/app/directives/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_object_tree_object_tree_component__ = __webpack_require__("../../../../../src/app/components/object-tree/object-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_foreman_foreman_component__ = __webpack_require__("../../../../../src/app/components/foreman/foreman.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_craneman_craneman_component__ = __webpack_require__("../../../../../src/app/components/craneman/craneman.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_factory_factory_component__ = __webpack_require__("../../../../../src/app/components/factory/factory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_viewer_service__ = __webpack_require__("../../../../../src/app/services/viewer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_session_session_component__ = __webpack_require__("../../../../../src/app/components/session/session.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_panel_stats_panel_stats_component__ = __webpack_require__("../../../../../src/app/components/panel-stats/panel-stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_customer_customer_component__ = __webpack_require__("../../../../../src/app/components/customer/customer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_viewer_viewer_component__["a" /* ViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_window_window_component__["a" /* WindowComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_16__directives_draggable_directive__["a" /* DraggableDirective */],
                __WEBPACK_IMPORTED_MODULE_19__components_foreman_foreman_component__["a" /* ForemanComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_craneman_craneman_component__["a" /* CranemanComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_factory_factory_component__["a" /* FactoryComponent */],
                __WEBPACK_IMPORTED_MODULE_16__directives_draggable_directive__["a" /* DraggableDirective */],
                __WEBPACK_IMPORTED_MODULE_18__components_object_tree_object_tree_component__["a" /* ObjectTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_session_session_component__["a" /* SessionComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_panel_stats_panel_stats_component__["a" /* PanelStatsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_customer_customer_component__["a" /* CustomerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__modules_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__modules_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_yandex_maps__["YaCoreModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__guards_simple_guard__["a" /* SimpleGuard */], __WEBPACK_IMPORTED_MODULE_12__services_window_service__["a" /* WindowService */], __WEBPACK_IMPORTED_MODULE_13__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_14__services_snack_service__["a" /* SnackService */], __WEBPACK_IMPORTED_MODULE_15__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_22__services_viewer_service__["a" /* ViewerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__components_app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"position: absolute; left: 270px; top: -5px; z-index:10000; min-width: 300px;\">\r\n<mat-form-field>\r\n  <input matInput [value]=\"sessionUrl\" style=\"min-width: 655px;\">\r\n</mat-form-field>\r\n</div>\r\n<app-viewer></app-viewer>\r\n<button class=\"menu-button\" mat-button [matMenuTriggerFor]=\"menu\"><i class=\"material-icons\">menu</i></button>\r\n<mat-menu #menu=\"matMenu\">\r\n  <button mat-menu-item [matMenuTriggerFor]=\"roles\">Роли</button>\r\n  <a mat-menu-item href=\"/assets/brandbook.pdf\">Скачать брендбук</a>\r\n  <button mat-menu-item (click)=\"logout()\"><mat-icon>exit_to_app</mat-icon>Новая сессия</button>\r\n</mat-menu>\r\n<mat-menu #roles=\"matMenu\">\r\n  <button mat-menu-item routerLink=\"/customer\">Заказчик</button>\r\n  <button mat-menu-item routerLink=\"/foreman\">Прораб</button>\r\n  <button mat-menu-item routerLink=\"/factory\">Склад</button>\r\n  <button mat-menu-item routerLink=\"/craneman\">Кран</button>\r\n</mat-menu>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav-container {\n  height: 100vh; }\n\nmat-sidenav {\n  padding: 20px;\n  width: 250px;\n  background-color: aliceblue; }\n\nya-map {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -1; }\n\n.top-menu, .top-menu-left, .top-menu-right {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  top: 1vh; }\n\n.top-menu-left {\n  left: 1vw; }\n\n.top-menu-right {\n  right: 1vw; }\n\n.user-icon {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba2.jpg\");\n  background-size: cover; }\n\n.toolbar-buttons {\n  margin-left: 0.5vw; }\n\n.username {\n  padding: 10px; }\n\n.menu-button {\n  position: fixed;\n  top: 4px;\n  left: 4px;\n  z-index: 100;\n  min-width: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_snack_service__ = __webpack_require__("../../../../../src/app/services/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__ = __webpack_require__("../../../../../src/app/components/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__object_tree_object_tree_component__ = __webpack_require__("../../../../../src/app/components/object-tree/object-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(snackService, apiService, router) {
        this.snackService = snackService;
        this.apiService = apiService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.onSessionSet.startWith(null).subscribe(function () {
            _this.sessionUrl = _this.apiService.sessionId ? 'http://' + window.location.host + '/' + _this.apiService.queryString : '';
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.apiService.init();
        setTimeout(function () { return _this.viewer.init(); }, 100);
    };
    AppComponent.prototype.logout = function () {
        this.apiService.setSession({ id: null });
        this.router.navigateByUrl('/');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__["a" /* ViewerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__viewer_viewer_component__["a" /* ViewerComponent */])
    ], AppComponent.prototype, "viewer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__object_tree_object_tree_component__["a" /* ObjectTreeComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__object_tree_object_tree_component__["a" /* ObjectTreeComponent */])
    ], AppComponent.prototype, "objectTree", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/components/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_snack_service__["a" /* SnackService */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/craneman/craneman.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"activeRole\">Крановщик</h1>\r\n\r\n<app-window title=\" Крановщик\">\r\n  <!--<img src=\"/assets/tenor.gif\" width=\"300\">-->\r\n\r\n  <div *ngIf=\"!panels\" style=\"padding: 8px;\">\r\n    Загрузка..\r\n  </div>\r\n  <div *ngIf=\"panels\">\r\n    <div *ngIf=\"panels.length < 1\" style=\"padding: 8px;\">\r\n      Нет заказов\r\n    </div>\r\n\r\n    <mat-list>\r\n      <mat-list-item *ngFor=\"let panel of panels\">\r\n        <button mat-button (click)=\"selectPanel(panel)\">{{panel.name}} - {{panel.type}}</button>\r\n        <button mat-button (click)=\"mount(panel)\">Смонтировано</button>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <!--<ul *ngFor=\"let panel of panels\">-->\r\n      <!--<li *ngFor=\"let panel of panels\">-->\r\n        <!--<div>{{panel.name}} - {{panel.forgeId}}</div>-->\r\n        <!--<button mat-button (click)=\"mount(panel)\">Отправить</button>-->\r\n      <!--</li>-->\r\n    <!--</ul>-->\r\n  </div>\r\n\r\n</app-window>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/craneman/craneman.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/craneman/craneman.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CranemanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_viewer_service__ = __webpack_require__("../../../../../src/app/services/viewer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CranemanComponent = (function () {
    function CranemanComponent(api, viewerService) {
        this.api = api;
        this.viewerService = viewerService;
        this.subscriptions = [];
    }
    CranemanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.viewerService.onViewer.subscribe(function (v) {
            _this.viewerService.setCraneCamera();
        }));
        this.subscriptions.push(this.api.getPanels().subscribe(function (panels) {
            _this.panels = [];
            _this.panels = panels.filter(function (p) { return p.isShipped && !p.isMounted; });
        }));
    };
    CranemanComponent.prototype.mount = function (panel) {
        this.api.mount(panel).subscribe();
        // this.panels.splice(this.panels.indexOf(panel), 1);
    };
    CranemanComponent.prototype.selectPanel = function (panel) {
        this.viewerService.setGhosting(false);
        this.viewerService.selectElement([panel.forgeId]);
    };
    CranemanComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (x) { return x.unsubscribe(); });
    };
    CranemanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-craneman',
            template: __webpack_require__("../../../../../src/app/components/craneman/craneman.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/craneman/craneman.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__services_viewer_service__["a" /* ViewerService */]])
    ], CranemanComponent);
    return CranemanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"activeRole\">Заказчик</h1>\r\n\r\n<app-window title=\"Статистика\">\r\n  <app-panel-stats [panels]=\"panels\"></app-panel-stats>\r\n</app-window>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/customer/customer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_viewer_service__ = __webpack_require__("../../../../../src/app/services/viewer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerComponent = (function () {
    function CustomerComponent(apiService, router, viewerService) {
        this.apiService = apiService;
        this.router = router;
        this.viewerService = viewerService;
        this.subscriptions = [];
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.viewerService.onModel.do(function () { return _this.viewerService.setForemanCamera(); })
            .flatMap(function () { return _this.apiService.getPanels(); }).subscribe(function (panels) {
            if (!panels) {
                _this.apiService.setSession(null);
                _this.router.navigateByUrl('/');
            }
            _this.panels = panels;
            var unmountedPanels = panels.filter(function (x) { return !x.isMounted; }).map(function (x) { return x.forgeId; });
            var mountedPanels = panels.filter(function (x) { return x.isMounted; }).map(function (x) { return x.forgeId; });
            _this.viewerService.setGhosting(false);
            _this.viewerService.hide(unmountedPanels);
            _this.viewerService.show(mountedPanels);
        }));
    };
    CustomerComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (x) { return x.unsubscribe(); });
    };
    CustomerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__("../../../../../src/app/components/customer/customer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_viewer_service__["a" /* ViewerService */]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/factory/factory.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"activeRole\">Склад</h1>\r\n\r\n<app-window title=\"Склад\">\r\n  <div *ngIf=\"!orders\" style=\"padding: 8px;\">\r\n    Загрузка..\r\n  </div>\r\n  <div *ngIf=\"orders\" style=\"padding: 8px;\">\r\n    <div *ngIf=\"orders.length < 1\" style=\"padding: 8px;\">\r\n      Нет заказов\r\n    </div>\r\n  <mat-list>\r\n    <mat-list-item *ngFor=\"let order of orders; let i = index\" (click)=\"selectOrder(order)\">\r\n      <button mat-button>Заказ №{{i+1}}, панелей: {{order.panels.length}}</button>\r\n    </mat-list-item>\r\n  </mat-list>\r\n  </div>\r\n</app-window>\r\n\r\n<app-window title=\"Заказ\">\r\n  <div *ngIf=\"!selectedOrder\" style=\"padding: 8px;\">\r\n    Выберите заказ\r\n  </div>\r\n  <div *ngIf=\"selectedOrder\">\r\n  <mat-list>\r\n    <mat-list-item *ngFor=\"let panel of selectedOrder.panels\" (click)=\"selectPanel(panel)\">\r\n      <button mat-button>{{panel.name}}</button>\r\n    </mat-list-item>\r\n  </mat-list>\r\n    <button mat-button mat-raised-button color=\"primary\" type=\"button\" (click)=\"shipOrder(selectedOrder)\">На монтаж</button>\r\n  </div>\r\n</app-window>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/factory/factory.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/factory/factory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_snack_service__ = __webpack_require__("../../../../../src/app/services/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_viewer_service__ = __webpack_require__("../../../../../src/app/services/viewer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FactoryComponent = (function () {
    function FactoryComponent(apiService, viewerService, snackService) {
        this.apiService = apiService;
        this.viewerService = viewerService;
        this.snackService = snackService;
    }
    FactoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getPanelOrders().subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    FactoryComponent.prototype.selectOrder = function (order) {
        this.selectedOrder = order;
    };
    FactoryComponent.prototype.shipOrder = function (order) {
        var _this = this;
        this.selectedOrder = null;
        this.apiService.shipOrder(order).subscribe(function () {
            _this.snackService.success('Заказ отгружен');
        }, function (err) {
            _this.snackService.error(err.error ? err.error.error.message : err.message);
        });
    };
    FactoryComponent.prototype.selectPanel = function (panel) {
        this.viewerService.showOneElement(panel.forgeId);
    };
    FactoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-factory',
            template: __webpack_require__("../../../../../src/app/components/factory/factory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/factory/factory.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__services_viewer_service__["a" /* ViewerService */],
            __WEBPACK_IMPORTED_MODULE_2__services_snack_service__["a" /* SnackService */]])
    ], FactoryComponent);
    return FactoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/foreman/foreman.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"activeRole\">Прораб</h1>\r\n\r\n<app-window title=\"Статистика\">\r\n  <app-panel-stats [panels]=\"panels\"></app-panel-stats>\r\n</app-window>\r\n\r\n<app-window title=\"Панели\">\r\n  <app-object-tree></app-object-tree>\r\n</app-window>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/foreman/foreman.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scrollList {\n  overflow-y: scroll;\n  max-height: 400px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/foreman/foreman.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForemanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_snack_service__ = __webpack_require__("../../../../../src/app/services/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_viewer_service__ = __webpack_require__("../../../../../src/app/services/viewer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForemanComponent = (function () {
    function ForemanComponent(apiService, viewerService, snackService) {
        this.apiService = apiService;
        this.viewerService = viewerService;
        this.snackService = snackService;
        this.subscriptions = [];
    }
    ForemanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getPanels().subscribe(function (panels) { return _this.panels = panels; });
        this.subscriptions.push(this.viewerService.onModel.subscribe(function (m) {
            _this.viewerService.setForemanCamera();
        }));
    };
    ForemanComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (x) { return x.unsubscribe(); });
    };
    ForemanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-foreman',
            template: __webpack_require__("../../../../../src/app/components/foreman/foreman.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/foreman/foreman.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__services_viewer_service__["a" /* ViewerService */],
            __WEBPACK_IMPORTED_MODULE_2__services_snack_service__["a" /* SnackService */]])
    ], ForemanComponent);
    return ForemanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/components/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/object-tree/object-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div *ngIf=\"!levels\"  style=\"padding: 8px;\">\r\n    Загрузка..\r\n  </div>\r\n  <form [formGroup]=\"form\" novalidate *ngIf=\"levels\">\r\n    <mat-form-field>\r\n      <mat-select placeholder=\"Этажи\" formControlName=\"level\" (change)=\"onLevelChange($event)\">\r\n        <mat-option *ngFor=\"let level of getLevels()\" [value]=\"level\"> {{ level }}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <button mat-button (click)=\"onSend()\">Отправить</button>\r\n\r\n    <!--<mat-list>-->\r\n      <!--<mat-list-item *ngFor=\"let panel of checkedPanels\">{{panel.name}} - {{panel.forgeId}}-->\r\n      <!--</mat-list-item>-->\r\n    <!--</mat-list>-->\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Стены\r\n          </mat-panel-title>\r\n          <!--<mat-panel-description>-->\r\n            <!--<mat-checkbox (change)=\"onSelecAllPanels($event)\">Выделить все</mat-checkbox>-->\r\n\r\n          <!--</mat-panel-description>-->\r\n        </mat-expansion-panel-header>\r\n        <div class=\"scrollList\">\r\n          <mat-list>\r\n            <mat-list-item *ngFor=\"let panel of getPanels()\">\r\n              <div><mat-checkbox (change)=\"onPanelClick($event, panel.forgeId)\"></mat-checkbox></div>\r\n              <div>{{panel.name}} - {{panel.type}}</div>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Перекрытия\r\n          </mat-panel-title>\r\n          <!--<mat-panel-description>-->\r\n            <!--&lt;!&ndash;<mat-checkbox (change)=\"onSelecAllPanels($event)\">Выделить все</mat-checkbox>&ndash;&gt;-->\r\n            <!--&lt;!&ndash;<button mat-button (click)=\"onSend()\">Отправить</button>&ndash;&gt;-->\r\n          <!--</mat-panel-description>-->\r\n        </mat-expansion-panel-header>\r\n        <div class=\"scrollList\">\r\n          <mat-list>\r\n            <mat-list-item *ngFor=\"let panel of getFloors()\">\r\n              <div><mat-checkbox (change)=\"onPanelClick($event, panel.forgeId)\"></mat-checkbox></div>\r\n              <div>{{panel.name}} - {{panel.type}}</div>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </div>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n\r\n\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/object-tree/object-tree.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scrollList {\n  overflow-y: scroll;\n  max-height: 400px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/object-tree/object-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_viewer_service__ = __webpack_require__("../../../../../src/app/services/viewer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ObjectTreeComponent = (function () {
    function ObjectTreeComponent(viewerService, api, fB) {
        this.viewerService = viewerService;
        this.api = api;
        this.fB = fB;
        this.allIds = [];
        this.selectedPanel = [];
        this.subscriptions = [];
        this.form = this.fB.group({
            level: ' ',
            objects: this.fB.array([])
        });
    }
    ObjectTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.viewerService.onModel.subscribe(function (m) {
            _this.levels = _this.viewerService.getLevelsMap();
            _this.allIds = Array.from(_this.levels.values()).reduce(function (a, b) { return a.concat(b); }).map(function (x) { return x.forgeId; });
        }));
    };
    ObjectTreeComponent.prototype.onLevelChange = function (event) {
        var _this = this;
        this.currentLevel = event.value;
        var idsToIsolate = Array.from(this.levels.values())
            .reduce(function (a, b) { return a.concat(b); })
            .filter(function (x) { return x.level === _this.currentLevel; })
            .map(function (x) { return x.forgeId; });
        this.viewerService.setGhosting(false);
        this.viewerService.isolateElements(idsToIsolate);
    };
    ObjectTreeComponent.prototype.getLevels = function () {
        return Array.from(this.levels.keys());
    };
    ObjectTreeComponent.prototype.getPanels = function () {
        if (this.currentLevel)
            return this.levels.get(this.currentLevel).filter(function (x) { return !x.name.startsWith('Плита'); });
        return [];
    };
    ObjectTreeComponent.prototype.getFloors = function () {
        if (this.currentLevel)
            return this.levels.get(this.currentLevel).filter(function (x) { return x.name.startsWith('Плита'); });
        return [];
    };
    ObjectTreeComponent.prototype.onPanelClick = function (event, panelId) {
        var panel = __WEBPACK_IMPORTED_MODULE_4_lodash__["find"](Array.from(this.levels.values()).reduce(function (a, b) { return a.concat(b); }), { forgeId: panelId });
        if (event.checked)
            this.selectedPanel.push(panel);
        else
            this.selectedPanel.splice(this.selectedPanel.indexOf(panel), 1);
        this.viewerService.selectElement(this.selectedPanel.map(function (x) { return x.forgeId; }));
    };
    ObjectTreeComponent.prototype.onSelecAllPanels = function (event) {
        var _this = this;
        this.getPanels().forEach(function (p) {
            _this.onPanelClick(event, p.forgeId);
        });
    };
    ObjectTreeComponent.prototype.onSend = function () {
        var panels = { panelsForgeIds: this.selectedPanel.map(function (x) { return x.forgeId; }) };
        this.api.makePanelOrder(panels).subscribe();
    };
    ObjectTreeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (x) { return x.unsubscribe(); });
    };
    ObjectTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-object-tree',
            template: __webpack_require__("../../../../../src/app/components/object-tree/object-tree.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/object-tree/object-tree.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_viewer_service__["a" /* ViewerService */], __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]])
    ], ObjectTreeComponent);
    return ObjectTreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/panel-stats/panel-stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!panels\">\r\n  Панели не получены\r\n</div>\r\n<div *ngIf=\"panels\">\r\n  <mat-list>\r\n    <mat-list-item>Всего: {{stats().total}}</mat-list-item>\r\n    <mat-list-item>Смонтировано: {{stats().mounted}}</mat-list-item>\r\n  </mat-list>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/panel-stats/panel-stats.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/panel-stats/panel-stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelStatsComponent = (function () {
    function PanelStatsComponent() {
    }
    PanelStatsComponent.prototype.ngOnInit = function () {
    };
    PanelStatsComponent.prototype.stats = function () {
        return {
            total: this.panels.length,
            mounted: this.panels.filter(function (x) { return x.isMounted; }).length
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PanelStatsComponent.prototype, "panels", void 0);
    PanelStatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-panel-stats',
            template: __webpack_require__("../../../../../src/app/components/panel-stats/panel-stats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/panel-stats/panel-stats.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelStatsComponent);
    return PanelStatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/session/session.component.html":
/***/ (function(module, exports) {

module.exports = "<app-window title=\"Инициализация\">\r\n  <div style=\"padding: 8px; max-width: 250px;\">\r\n    <div *ngIf=\"!isUploading\"  style=\"padding: 8px;\">\r\n      При первом использовании надо загрузить данные модели на сервер.\r\n      Сейчас происходит анализ данных, это может занять некоторое время.\r\n      Дождитесь активации кнопки и загрузите данные.\r\n    </div>\r\n    <button mat-button mat-raised-button color=\"primary\" (click)=\"uploadPanels()\"\r\n            [disabled]=\"!model\" *ngIf=\"!isUploading\">Загрузить данные\r\n    </button>\r\n    <div *ngIf=\"isUploading\">\r\n      <h3>Идет загрузка..</h3>\r\n      <img src=\"assets/tenor.gif\" width=\"250\">\r\n    </div>\r\n  </div>\r\n</app-window>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/session/session.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/session/session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_viewer_service__ = __webpack_require__("../../../../../src/app/services/viewer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_snack_service__ = __webpack_require__("../../../../../src/app/services/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SessionComponent = (function () {
    function SessionComponent(viewerService, apiService, router, snackService) {
        var _this = this;
        this.viewerService = viewerService;
        this.apiService = apiService;
        this.router = router;
        this.snackService = snackService;
        this.isUploading = false;
        this.panelsLoaded = false;
        this.subscriptions = [];
        var sessionId = this.getParameterByName('sessionId', window.location.href);
        if (sessionId)
            this.apiService.setSession({ id: sessionId });
        this.subscriptions.push(this.apiService.getPanels().subscribe(function (models) {
            if (!models)
                localStorage.removeItem('session');
            if (models && models.length > 0) {
                _this.panelsLoaded = true;
                _this.router.navigateByUrl('/customer');
            }
        }));
        this.subscriptions.push(this.viewerService.onModel.subscribe(function (x) {
            _this.panelsLoaded = true;
            _this.model = x;
        }));
    }
    SessionComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (x) { return x.unsubscribe(); });
    };
    SessionComponent.prototype.ngOnInit = function () {
    };
    SessionComponent.prototype.canDeactivate = function () {
        if (!this.panelsLoaded)
            alert('Ошибка навигации: панели не загружены');
        return this.panelsLoaded;
    };
    SessionComponent.prototype.uploadPanels = function () {
        var _this = this;
        this.viewerService.setForemanCamera();
        this.isUploading = true;
        setTimeout(function () {
            _this.viewerService.getAllPanels()
                .flatMap(function (panels) { return _this.apiService.createSession(panels); })
                .subscribe(function (session) {
                _this.apiService.setSession(session);
                _this.panelsLoaded = true;
                _this.router.navigateByUrl('/customer');
            }, function (err) {
                _this.isUploading = false;
                _this.snackService.error(err.message);
            });
        }, 1);
    };
    SessionComponent.prototype.getParameterByName = function (name, url) {
        if (!url)
            url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    SessionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-session',
            template: __webpack_require__("../../../../../src/app/components/session/session.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/session/session.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_viewer_service__["a" /* ViewerService */],
            __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_snack_service__["a" /* SnackService */]])
    ], SessionComponent);
    return SessionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div #viewerContainer class=\"viewer\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/viewer/viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewer {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 0px);\n  z-index: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_snack_service__ = __webpack_require__("../../../../../src/app/services/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_viewer_service__ = __webpack_require__("../../../../../src/app/services/viewer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewerComponent = (function () {
    function ViewerComponent(ngZone, apiService, snackService, viewerService) {
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.snackService = snackService;
        this.viewerService = viewerService;
    }
    ViewerComponent.prototype.ngOnInit = function () {
    };
    ViewerComponent.prototype.ngOnDestroy = function () {
        if (this.viewer && this.viewer.running) {
            this.viewer.tearDown();
            this.viewer.finish();
        }
    };
    ViewerComponent.prototype.init = function () {
        var _this = this;
        this.apiService.getToken().subscribe(function (token) {
            if (token) {
                _this.launchViewer(token);
            }
        }, function (e) {
            _this.snackService.error('Ошибка получения токена: ' + (e && e.message) || 'ошибка');
        });
    };
    ViewerComponent.prototype.launchViewer = function (token) {
        var _this = this;
        if (this.viewer)
            return;
        var options = {
            env: 'AutodeskProduction',
            accessToken: token.access_token
        };
        this.viewer = new Autodesk.Viewing.Private.GuiViewer3D(this.viewerContainer.nativeElement);
        var documentUrn = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6aGFja2F0aG9uL21vZGVsMy5ydnQ';
        this.ngZone.runOutsideAngular(function () { return Autodesk.Viewing.Initializer(options, function () { return Autodesk.Viewing.Document.load(documentUrn, function (doc) { return _this.onDocumentLoadSuccess(doc); }, function (viewerErrorCode) { return _this.onDocumentLoadFailure(viewerErrorCode); }); }); });
        this.viewerService.setViewer(this.viewer);
        // this.viewer.setReverseZoomDirection(true);
    };
    ViewerComponent.prototype.onDocumentLoadSuccess = function (doc) {
        var _this = this;
        var viewables = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), {
            type: 'geometry'
        }, true);
        if (viewables.length === 0) {
            this.snackService.error('Документ не содержит моделей');
            return;
        }
        var initialViewable = viewables[0];
        var svfUrl = doc.getViewablePath(initialViewable);
        var modelOptions = {
            sharedPropertyDbPath: doc.getPropertyDbPath()
        };
        this.viewer.start(svfUrl, modelOptions, function (model) { return _this.onLoadModelSuccess(model); }, function (err) { return _this.onLoadModelError(err); });
    };
    ViewerComponent.prototype.onLoadModelSuccess = function (model) {
        this.viewerService.setModel(model);
    };
    ViewerComponent.prototype.onLoadModelError = function (viewerErrorCode) {
        this.snackService.error('Не удалось загрузить модель: ' + viewerErrorCode);
    };
    ViewerComponent.prototype.onDocumentLoadFailure = function (viewerErrorCode) {
        this.snackService.error('Не удалось загрузить документ: ' + viewerErrorCode);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('viewerContainer'),
        __metadata("design:type", Object)
    ], ViewerComponent.prototype, "viewerContainer", void 0);
    ViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewer',
            template: __webpack_require__("../../../../../src/app/components/viewer/viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/viewer/viewer.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__services_snack_service__["a" /* SnackService */],
            __WEBPACK_IMPORTED_MODULE_3__services_viewer_service__["a" /* ViewerService */]])
    ], ViewerComponent);
    return ViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/window/window.component.html":
/***/ (function(module, exports) {

module.exports = "<div ngDraggable [handle]=\"Title\" class=\"window window-small-right\">\r\n  <div #Title class=\"window-title\">\r\n    <button *ngIf=\"closeButton\" mat-button style=\"min-width: 60px; float: right;\" (click)=\"toggleCollapse()\"><i class=\"material-icons\">remove</i></button>\r\n    <span>{{title}}</span>\r\n  </div>\r\n  <div class=\"window-body\" [class.collapsed]=\"collapsed\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/window/window.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".window, .window-small {\n  position: fixed;\n  background-color: white;\n  border: 1px solid antiquewhite;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.window-small {\n  width: 400px;\n  height: 300px; }\n\n.window-small-right {\n  top: 20vh;\n  right: 10vw; }\n\n.window-tall-left {\n  top: calc(5vh + 60px);\n  bottom: 5vh;\n  left: 5vw; }\n\n.window-title {\n  min-height: 32px;\n  padding: 4px 8px 4px 12px;\n  background: #3f51b5;\n  margin-bottom: 0;\n  border-bottom: 1px solid #cfd8dc;\n  cursor: move;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: rgba(255, 255, 255, 0.87);\n  font: 500 20px/32px Roboto,\"Helvetica Neue\",sans-serif; }\n\n.window-body {\n  overflow: hidden;\n  transition: max-height 0.2s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  max-height: 500px; }\n\n.window-body.collapsed {\n  transition: max-height 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);\n  max-height: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/window/window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WindowComponent = (function () {
    function WindowComponent(windowService) {
        this.windowService = windowService;
        this.title = null;
        this.closeButton = true;
        this._order = 0;
        this.collapsed = false;
        windowService.register(this);
    }
    WindowComponent.prototype.ngOnInit = function () {
    };
    WindowComponent.prototype.ngOnDestroy = function () {
        this.windowService.unregister(this);
    };
    WindowComponent.prototype.toggleCollapse = function () {
        this.collapsed = !this.collapsed;
    };
    Object.defineProperty(WindowComponent.prototype, "order", {
        get: function () {
            return this._order;
        },
        set: function (value) {
            this._order = value;
            console.log(this.title, value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], WindowComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], WindowComponent.prototype, "closeButton", void 0);
    WindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-window',
            template: __webpack_require__("../../../../../src/app/components/window/window.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/window/window.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_window_service__["a" /* WindowService */]])
    ], WindowComponent);
    return WindowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Position = (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());
var DraggableDirective = (function () {
    function DraggableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.allowDrag = true;
        this.moving = false;
        this.orignal = null;
        this.oldTrans = new Position(0, 0);
        this.tempTrans = new Position(0, 0);
        this.oldZIndex = '';
        this.oldPosition = '';
        this.started = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.stopped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.edge = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(DraggableDirective.prototype, "ngDraggable", {
        set: function (setting) {
            if (setting !== undefined && setting !== null && setting !== '') {
                this.allowDrag = !!setting;
                var element = this.handle ? this.handle : this.el.nativeElement;
                if (this.allowDrag) {
                    this.renderer.setElementClass(element, 'ng-draggable', true);
                }
                else {
                    this.renderer.setElementClass(element, 'ng-draggable', false);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.ngAfterViewInit = function () {
        this.handle = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](this.el.nativeElement.children, { className: 'window-title' });
        if (this.allowDrag) {
            var element = this.handle ? this.handle : this.el.nativeElement;
            this.renderer.setElementClass(element, 'ng-draggable', true);
        }
    };
    DraggableDirective.prototype.getPosition = function (x, y) {
        return new Position(x, y);
    };
    DraggableDirective.prototype.moveTo = function (x, y) {
        if (this.orignal) {
            this.tempTrans.x = x - this.orignal.x;
            this.tempTrans.y = y - this.orignal.y;
            var value = "translate(" + (this.tempTrans.x + this.oldTrans.x) + "px, " + (this.tempTrans.y + this.oldTrans.y) + "px)";
            this.renderer.setElementStyle(this.el.nativeElement, 'transform', value);
            this.renderer.setElementStyle(this.el.nativeElement, '-webkit-transform', value);
            this.renderer.setElementStyle(this.el.nativeElement, '-ms-transform', value);
            this.renderer.setElementStyle(this.el.nativeElement, '-moz-transform', value);
            this.renderer.setElementStyle(this.el.nativeElement, '-o-transform', value);
            this.edge.emit(this.boundsCheck());
        }
    };
    DraggableDirective.prototype.pickUp = function () {
        // get old z-index and position:
        this.oldZIndex = this.el.nativeElement.style.zIndex ? this.el.nativeElement.style.zIndex : '';
        this.oldPosition = this.el.nativeElement.style.position ? this.el.nativeElement.style.position : '';
        if (window) {
            this.oldZIndex = window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("z-index");
            this.oldPosition = window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("position");
        }
        // setup default position:
        var position = 'relative';
        // check if old position is draggable:
        if (this.oldPosition && (this.oldPosition === 'absolute' ||
            this.oldPosition === 'fixed' ||
            this.oldPosition === 'relative')) {
            position = this.oldPosition;
        }
        this.renderer.setElementStyle(this.el.nativeElement, 'position', position);
        this.renderer.setElementStyle(this.el.nativeElement, 'z-index', '99999');
        if (!this.moving) {
            this.started.emit(this.el.nativeElement);
            this.moving = true;
        }
    };
    DraggableDirective.prototype.boundsCheck = function () {
        if (!this.bounds)
            return;
        var boundary = this.bounds.getBoundingClientRect();
        var elem = this.el.nativeElement.getBoundingClientRect();
        return {
            'top': boundary.top < elem.top,
            'right': boundary.right > elem.right,
            'bottom': boundary.bottom > elem.bottom,
            'left': boundary.left < elem.left
        };
    };
    DraggableDirective.prototype.putBack = function () {
        if (this.oldZIndex) {
            this.renderer.setElementStyle(this.el.nativeElement, 'z-index', this.oldZIndex);
        }
        else {
            this.el.nativeElement.style.removeProperty('z-index');
        }
        if (this.moving) {
            this.stopped.emit(this.el.nativeElement);
            this.edge.emit(this.boundsCheck());
            this.moving = false;
            this.oldTrans.x += this.tempTrans.x;
            this.oldTrans.y += this.tempTrans.y;
            this.tempTrans.x = this.tempTrans.y = 0;
        }
    };
    // Support Mouse Events:
    DraggableDirective.prototype.onMouseDown = function (event) {
        // 1. skip right click;
        // 2. if handle is set, the element can only be moved by handle
        if (event.button == 2 || (this.handle !== undefined && event.target !== this.handle && !this.handle.contains(event.target))) {
            return;
        }
        this.orignal = this.getPosition(event.clientX, event.clientY);
        this.pickUp();
    };
    DraggableDirective.prototype.onMouseUp = function () {
        this.putBack();
    };
    DraggableDirective.prototype.onMouseLeave = function () {
        this.putBack();
    };
    DraggableDirective.prototype.onMouseMove = function (event) {
        if (this.moving && this.allowDrag) {
            this.moveTo(event.clientX, event.clientY);
        }
    };
    // Support Touch Events:
    DraggableDirective.prototype.onTouchEnd = function () {
        this.putBack();
    };
    DraggableDirective.prototype.onTouchStart = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.handle !== undefined && event.target !== this.handle) {
            return;
        }
        this.orignal = this.getPosition(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
        this.pickUp();
    };
    DraggableDirective.prototype.onTouchMove = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.moving && this.allowDrag) {
            this.moveTo(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "started", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "stopped", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "edge", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", HTMLElement)
    ], DraggableDirective.prototype, "handle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", HTMLElement)
    ], DraggableDirective.prototype, "bounds", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DraggableDirective.prototype, "ngDraggable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onMouseDown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:mouseup'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onMouseUp", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onMouseLeave", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onMouseMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:touchend'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onTouchEnd", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('touchstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onTouchStart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:touchmove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onTouchMove", null);
    DraggableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[ngDraggable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/dto/panel.dto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelDto; });
var PanelDto = (function () {
    function PanelDto() {
        this.id = '';
        this.forgeId = 0;
        this.name = '';
        this.type = '';
        this.level = '';
        this.isMounted = false;
        this.isShipped = false;
    }
    return PanelDto;
}());



/***/ }),

/***/ "../../../../../src/app/guards/simple.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SimpleGuard = (function () {
    function SimpleGuard() {
    }
    SimpleGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    SimpleGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    SimpleGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SimpleGuard);
    return SimpleGuard;
}());



/***/ }),

/***/ "../../../../../src/app/modules/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_foreman_foreman_component__ = __webpack_require__("../../../../../src/app/components/foreman/foreman.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_craneman_craneman_component__ = __webpack_require__("../../../../../src/app/components/craneman/craneman.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_factory_factory_component__ = __webpack_require__("../../../../../src/app/components/factory/factory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_session_session_component__ = __webpack_require__("../../../../../src/app/components/session/session.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_simple_guard__ = __webpack_require__("../../../../../src/app/guards/simple.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_customer_customer_component__ = __webpack_require__("../../../../../src/app/components/customer/customer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__components_session_session_component__["a" /* SessionComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__guards_simple_guard__["a" /* SimpleGuard */]],
        children: []
    },
    {
        path: 'foreman',
        component: __WEBPACK_IMPORTED_MODULE_2__components_foreman_foreman_component__["a" /* ForemanComponent */],
        children: []
    },
    {
        path: 'craneman',
        component: __WEBPACK_IMPORTED_MODULE_3__components_craneman_craneman_component__["a" /* CranemanComponent */],
        children: []
    },
    {
        path: 'factory',
        component: __WEBPACK_IMPORTED_MODULE_4__components_factory_factory_component__["a" /* FactoryComponent */],
        children: []
    },
    {
        path: 'customer',
        component: __WEBPACK_IMPORTED_MODULE_7__components_customer_customer_component__["a" /* CustomerComponent */],
        children: []
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSnackBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSnackBarModule */]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client__ = __webpack_require__("../../../../@aspnet/signalr-client/dist/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__snack_service__ = __webpack_require__("../../../../../src/app/services/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_never__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/never.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ApiService = (function () {
    function ApiService(snackService, http) {
        this.snackService = snackService;
        this.http = http;
        this.endpoint = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint;
        this.jsonHeaders = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.orderCreatedSubject = new __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__["Subject"]();
        this.orderShippedSubject = new __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__["Subject"]();
        this.panelMountedSubject = new __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__["Subject"]();
        this.onSessionSet = new __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__["Subject"]();
        this.panelsChanged = this.orderShippedSubject.merge(this.panelMountedSubject);
        if (localStorage.getItem('session')) {
            this.setSession({ id: localStorage.getItem('session') });
        }
    }
    Object.defineProperty(ApiService.prototype, "queryString", {
        get: function () {
            return '?sessionId=' + this._sessionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "sessionId", {
        get: function () {
            return this._sessionId;
        },
        enumerable: true,
        configurable: true
    });
    ApiService.prototype.init = function () {
        var _this = this;
        var connection = this.connection = new __WEBPACK_IMPORTED_MODULE_1__aspnet_signalr_client__["HubConnection"](__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + "/hub", { transport: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].signalrTransport });
        connection.onclose(function (e) {
            _this.snackService.error('Соединение с сервером разорвано: ' + (e && e.message) || 'ошибка');
        });
        connection.start().then(function () {
            _this.snackService.success('Сервер подключен');
        }).catch(function (e) {
            _this.snackService.error('Ошибка подключения: ' + (e && e.message) || 'ошибка');
        });
        this.connection.on('OrderCreated', function () {
            _this.orderCreatedSubject.next();
            _this.snackService.success('Создан заказ');
        });
        this.connection.on('OrderShipped', function () {
            _this.orderShippedSubject.next();
            _this.snackService.success('Отгружен заказ');
        });
        this.connection.on('PanelMounted', function (panel) {
            _this.panelMountedSubject.next();
            _this.snackService.success('Панель смонтирована: ' + panel.name);
        });
    };
    ApiService.prototype.getToken = function () {
        return this.http.get(this.endpoint + '/user/token', { headers: this.jsonHeaders })
            .map(function (x) { return x; });
    };
    ApiService.prototype.createSession = function (panels) {
        return this.http.post(this.endpoint + '/user/session', panels, { headers: this.jsonHeaders })
            .map(function (x) { return x; });
    };
    ApiService.prototype.getPanels = function () {
        var _this = this;
        return this.panelsChanged.startWith(null).flatMap(function () { return _this.http.get(_this.endpoint + '/panels' + _this.queryString).map(function (x) { return x; }); });
    };
    ApiService.prototype.makePanelOrder = function (orderDto) {
        if (orderDto.panelsForgeIds.length < 1) {
            this.snackService.error('Нельзя сделать пустой заказ');
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].of(null);
        }
        return this.http.post(this.endpoint + '/panels/order' + this.queryString, orderDto, { headers: this.jsonHeaders });
    };
    ApiService.prototype.getPanelOrders = function () {
        var _this = this;
        return this.orderCreatedSubject.merge(this.orderShippedSubject).startWith(null).flatMap(function () {
            return _this.http.get(_this.endpoint + '/panels/orders' + _this.queryString, { headers: _this.jsonHeaders }).map(function (x) { return x; });
        });
    };
    ApiService.prototype.shipOrder = function (order) {
        return this.http.post(this.endpoint + '/panels/orders/ship' + this.queryString, order, { headers: this.jsonHeaders });
    };
    ApiService.prototype.mount = function (panelDto) {
        return this.http.post(this.endpoint + '/panels/orders/mount' + this.queryString, panelDto, { headers: this.jsonHeaders });
    };
    ApiService.prototype.setSession = function (session) {
        this._sessionId = session.id;
        localStorage.setItem('session', session.id);
        this.onSessionSet.next();
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__snack_service__["a" /* SnackService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/snack.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SnackService = (function () {
    function SnackService(snackBar) {
        this.snackBar = snackBar;
    }
    SnackService.prototype.info = function (message, options) {
        var config = __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"]({
            duration: 3000,
        }, options || {});
        this.snackBar.open(message, null, config);
    };
    SnackService.prototype.success = function (message, options) {
        var config = __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"]({
            duration: 2000,
            panelClass: 'success'
        }, options || {});
        this.snackBar.open(message, null, config);
    };
    SnackService.prototype.error = function (message, options) {
        var config = __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"]({
            duration: 5000,
            panelClass: 'error'
        }, options || {});
        this.snackBar.open(message, null, config);
    };
    SnackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */]])
    ], SnackService);
    return SnackService;
}());



/***/ }),

/***/ "../../../../../src/app/services/toast.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = (function () {
    function ToastService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.toastObservable = this.subject.asObservable();
    }
    ToastService.prototype.info = function (message, title, options) {
        this.makeToast('info', message, title, options);
    };
    ToastService.prototype.error = function (message, title, options) {
        this.makeToast('error', message, title, options);
    };
    ToastService.prototype.success = function (message, title, options) {
        this.makeToast('success', message, title, options);
    };
    ToastService.prototype.warning = function (message, title, options) {
        this.makeToast('warning', message, title, options);
    };
    ToastService.prototype.makeToast = function (type, message, title, options) {
        this.subject.next({ type: type, message: message, title: title, options: options });
    };
    Object.defineProperty(ToastService.prototype, "errorToastOptions", {
        get: function () {
            var errorToastOptions = new __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastOptions"]();
            errorToastOptions.toastLife = 10000;
            errorToastOptions.showCloseButton = true;
            return errorToastOptions;
        },
        enumerable: true,
        configurable: true
    });
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "../../../../../src/app/services/viewer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dto_panel_dto__ = __webpack_require__("../../../../../src/app/dto/panel.dto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewerService = (function () {
    function ViewerService() {
        this.viewerSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.modelSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.allIds = [];
        this.levels = new Map();
    }
    ViewerService.prototype.init = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.getIds().flatMap(function (id) { return _this.getLevelAndPanel(id); })
                .subscribe(function (levelAndPanel) {
                if (!_this.levels.has(levelAndPanel.level))
                    _this.levels.set(levelAndPanel.level, [levelAndPanel.panel]);
                else
                    _this.levels.get(levelAndPanel.level).push(levelAndPanel.panel);
            }, function (err) {
            }, function () {
                observer.complete();
            });
        });
    };
    Object.defineProperty(ViewerService.prototype, "onViewer", {
        get: function () {
            return this.viewer ? this.viewerSubject.asObservable().startWith(this.viewer) : this.viewerSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerService.prototype, "onModel", {
        get: function () {
            return this.model ? this.modelSubject.asObservable().startWith(this.model) : this.modelSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ViewerService.prototype.setViewer = function (viewer) {
        this.viewer = viewer;
        this.viewerSubject.next(viewer);
    };
    ViewerService.prototype.setModel = function (model) {
        var _this = this;
        this.model = model;
        this.init().subscribe(function (q) {
        }, function (e) {
        }, function () {
            _this.modelSubject.next(model);
        });
    };
    ViewerService.prototype.getLevelsMap = function () {
        return this.levels;
    };
    ViewerService.prototype.getAllPanels = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var panels = Array.from(_this.levels.values()).reduce(function (a, b) { return a.concat(b); });
            observer.next(panels);
            observer.complete();
        });
    };
    ViewerService.prototype.getIds = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.model.getObjectTree(function (tree) {
                var root = tree.getRootId();
                tree.enumNodeChildren(root, function (id) {
                    tree.enumNodeChildren(id, function (id1) {
                        tree.enumNodeChildren(id1, function (id2) {
                            tree.enumNodeChildren(id2, function (id3) {
                                _this.allIds.push(id3);
                                observer.next(id3);
                            });
                        });
                    });
                });
                observer.complete();
            });
        });
    };
    ViewerService.prototype.getLevelAndPanel = function (id) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.model.getProperties(id, function (result) {
                var panel = new __WEBPACK_IMPORTED_MODULE_3__dto_panel_dto__["a" /* PanelDto */]();
                panel.forgeId = id;
                result.properties.filter(function (x) { return x.displayName === 'Уровень' || x.displayName === 'Имя типа' || x.displayName === 'Марка'; })
                    .forEach(function (p) {
                    switch (p.displayName) {
                        case 'Уровень':
                            panel.level = p.displayValue;
                            break;
                        case 'Имя типа':
                            panel.name = p.displayValue;
                            break;
                        case 'Марка':
                            panel.type = p.displayValue;
                            break;
                    }
                });
                if (panel.level !== '') {
                    observer.next({
                        level: panel.level,
                        panel: panel
                    });
                }
                observer.complete();
            });
        });
    };
    ViewerService.prototype.getSelection = function () {
        return this.viewer.getSelection();
    };
    ViewerService.prototype.selectElement = function (ids) {
        this.viewer.select(ids);
    };
    ViewerService.prototype.isolateElements = function (ids) {
        this.viewer.isolateById(ids);
        this.viewer.fitToView(ids);
    };
    ViewerService.prototype.setGhosting = function (isHideGhost) {
        this.viewer.setGhosting(isHideGhost);
    };
    ViewerService.prototype.hide = function (ids) {
        var _this = this;
        ids.forEach(function (x) {
            _this.viewer.hideById(x);
        });
    };
    ViewerService.prototype.show = function (ids) {
        var _this = this;
        ids.forEach(function (x) {
            _this.viewer.show(x);
        });
    };
    ViewerService.prototype.showOneElement = function (id) {
        var idsToHide = this.allIds
            .filter(function (x) { return x !== id; });
        this.isolateElements([id]);
        this.setGhosting(false);
        this.viewer.fitToView([id], this.model);
    };
    ViewerService.prototype.setForemanCamera = function () {
        // this.viewer.setNavigationLock(false);
        var allIds = Array.from(this.levels.values()).reduce(function (a, b) { return a.concat(b); }).map(function (x) { return x.forgeId; });
        this.show(this.allIds);
        this.viewer.fitToView(allIds, this.model);
        var cameraState = "[0.901192843914032,0.4334183931350708,-4.7960204696551045e-9,0,0.00451158732175827,-0.009380770847201347,0.9999458193778992,0,0.4333949089050293,-0.9011439681053162,-0.010409287177026272,0,140.44810485839844,-292.04559326171875,-3.3732967376708984,1]";
        var camera = this.viewer.getCamera();
        camera.matrix.fromArray(JSON.parse(cameraState));
        camera.matrix.decompose(camera.position, camera.quaternion, camera.scale);
        this.viewer.applyCamera(camera);
        this.viewer.setFocalLength(29);
        // this.viewer.setFOV(47.78850646894349);
        // this.getCameraSettings();
    };
    ViewerService.prototype.setCraneCamera = function () {
        // this.viewer.setNavigationLock(false);
        this.show(this.allIds);
        this.viewer.fitToView(this.allIds, this.model);
        var cameraState = "[1,0,0,0,0,0.7071067690849304,0.7071067690849304,0,0,-0.7071067690849304,0.7071067690849304,0,5.963771820068359,-136.01742553710938,187.14556884765625,1]";
        var camera = this.viewer.getCamera();
        camera.matrix.fromArray(JSON.parse(cameraState));
        camera.matrix.decompose(camera.position, camera.quaternion, camera.scale);
        this.show(this.allIds);
        this.viewer.applyCamera(camera);
        this.viewer.setFocalLength(29);
        // this.viewer.setFOV(0);
        // this.viewer.setNavigationLock(true);
    };
    ViewerService.prototype.getCameraSettings = function () {
        var v = new THREE.Vector3(0, 0, 0);
        var position = this.viewer.navigation.getPosition();
        var target = this.viewer.navigation.getTarget();
        var cameraUpVector = this.viewer.navigation.getCameraUpVector();
        var navigationtool = this.viewer.getActiveNavigationTool();
    };
    ViewerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ViewerService);
    return ViewerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WindowService = (function () {
    function WindowService() {
        this.windowComponents = [];
    }
    WindowService.prototype.register = function (windowComponent) {
        this.windowComponents.push(windowComponent);
    };
    WindowService.prototype.unregister = function (windowComponent) {
        this.windowComponents.splice(this.windowComponents.indexOf(windowComponent), 1);
    };
    WindowService.prototype.setTopmost = function (windowComponent) {
        windowComponent.order = __WEBPACK_IMPORTED_MODULE_1_lodash__["maxBy"](this.windowComponents, function (x) { return x.order; }).order + 1;
    };
    WindowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], WindowService);
    return WindowService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aspnet_signalr_client__ = __webpack_require__("../../../../@aspnet/signalr-client/dist/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aspnet_signalr_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__aspnet_signalr_client__);

var environment = {
    production: false,
    signalrTransport: __WEBPACK_IMPORTED_MODULE_0__aspnet_signalr_client__["TransportType"].LongPolling,
    apiEndpoint: '/api'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map