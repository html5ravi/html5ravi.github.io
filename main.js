(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, AppRoutingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingComponents", function() { return AppRoutingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _court_share_court_share_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./court-share/court-share.component */ "./src/app/court-share/court-share.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _contributors_contributors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contributors/contributors.component */ "./src/app/contributors/contributors.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/videos/videos.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pages_tournaments_tournaments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/tournaments/tournaments.component */ "./src/app/pages/tournaments/tournaments.component.ts");
/* harmony import */ var _pages_players_players_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/players/players.component */ "./src/app/pages/players/players.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: 'tournaments', pathMatch: 'full' },
    {
        path: 'home',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
    },
    {
        path: 'videos',
        component: _videos_videos_component__WEBPACK_IMPORTED_MODULE_6__["VideosComponent"],
    },
    {
        path: 'people',
        component: _contributors_contributors_component__WEBPACK_IMPORTED_MODULE_5__["ContributorsComponent"]
    },
    {
        path: 'share',
        component: _court_share_court_share_component__WEBPACK_IMPORTED_MODULE_3__["CourtShareComponent"]
    },
    {
        path: 'tournaments',
        component: _pages_tournaments_tournaments_component__WEBPACK_IMPORTED_MODULE_8__["TournamentsComponent"]
    },
    {
        path: 'players',
        component: _pages_players_players_component__WEBPACK_IMPORTED_MODULE_9__["PlayersComponent"]
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    {
        path: '**',
        // redirectTo:'home',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var AppRoutingComponents = [
    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
    _contributors_contributors_component__WEBPACK_IMPORTED_MODULE_5__["ContributorsComponent"],
    _court_share_court_share_component__WEBPACK_IMPORTED_MODULE_3__["CourtShareComponent"],
    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["AppShareDataDialogComponent"],
    _videos_videos_component__WEBPACK_IMPORTED_MODULE_6__["VideosComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-main {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n  .mt20{\n    margin-top:20px;\n  }\n  .app-is-mobile .app-toolbar {\n    position: fixed;\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n    z-index: 2;\n  }\n  h1.app-ranger {\n    margin-left: 8px;\n  }\n  .app-sidenav-container {\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n    flex: 1;\n  }\n  .mat-sidenav{\n\n    width: 250px;\n  }\n  button[mat-icon-button]{\n    background-color: transparent;\n    border: aliceblue;\n    color: #fff;\n  }\n  .app-is-mobile .app-sidenav-container {\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n    flex: 1 0 auto;\n  }\n  button,a, a:link, a:hover, a:visited, a:focus{\n      outline: none !important;\n  }\n  .mat-list-item i{\n    margin-right: 20px;\n    position: relative;\n    top: -1px;\n    color:#3f51b5;\n  }\n  .brand{\n    text-align:center;\n    border-bottom: 1px solid #3f51b5;\n    margin-bottom: 10px;\n    padding: 0 0 10px 0;\n  }\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\nbdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"timer\"></ngx-spinner>\n<div class=\"app-main\">\n  <mat-toolbar color=\"primary\" class=\"app-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"app-ranger\">Ranger Shuttlers</h1>\n  </mat-toolbar>\n  <mat-sidenav-container class=\"app-sidenav-container\">\n    <mat-sidenav #snav >\n      <mat-nav-list>\n        <div class=\"brand\"><img src=\"./assets/icons/icon-96x96.png\" alt=\"\"></div>\n        <a mat-list-item (click)=\"closeMenu()\" [routerLink]=\"['/home']\" routerLinkActive=\"active\"><i class=\"material-icons\">home</i> Home</a>\n        <a mat-list-item (click)=\"closeMenu()\" [routerLink]=\"['/share']\" routerLinkActive=\"active\">\n          <i class=\"material-icons\">\n              add_to_queue </i> Add court share</a>\n        <a mat-list-item (click)=\"closeMenu()\" [routerLink]=\"['/people']\" routerLinkActive=\"active\">\n          <i class=\"material-icons\">\n            supervisor_account\n            </i>Add people</a>\n            <a mat-list-item (click)=\"closeMenu()\" [routerLink]=\"['/tournaments']\" routerLinkActive=\"active\">\n              <i class=\"material-icons\">\n                dashboard\n                </i>Tournaments</a>\n\n        <a mat-list-item (click)=\"closeMenu()\" [routerLink]=\"['/videos']\" routerLinkActive=\"active\">\n            <i class=\"material-icons\"> play_circle_filled </i> Videos\n        </a>\n        <a mat-list-item routerLinkActive=\"active\" (click)=\"logout()\"> <i class=\"material-icons\">play_circle_filled </i> Logout</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <div class=\"container mt20\">\n          <router-outlet></router-outlet>\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n<!--\n -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firestore_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firestore-data.service */ "./src/app/firestore-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _core_security_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/security/auth.service */ "./src/app/core/security/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(_data, ar, _router, swUpdate, auth, route) {
        this._data = _data;
        this._router = _router;
        this.swUpdate = swUpdate;
        this.auth = auth;
        this.route = route;
        this.arr = [];
        this.model = { firstname: '', lastname: '', mobile: '' };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.swUpdate.available.subscribe(function () {
            _this.swUpdate.activateUpdate().then(function () { return document.location.reload(); });
            if (confirm('New version available. Load New Version?')) {
                window.location.reload();
            }
        });
    };
    AppComponent.prototype.closeMenu = function () {
        this.drawer.close();
    };
    AppComponent.prototype.logout = function () {
        this.auth.logout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"]),
        __metadata("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"])
    ], AppComponent.prototype, "drawer", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_firestore_data_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["SwUpdate"],
            _core_security_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/esm5/ngx-youtube-player.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _core_security_safe_url_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/security/safe-url.pipe */ "./src/app/core/security/safe-url.pipe.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _core_security_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/security/auth.service */ "./src/app/core/security/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _pages_tournaments_tournaments_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/tournaments/tournaments.component */ "./src/app/pages/tournaments/tournaments.component.ts");
/* harmony import */ var _pages_players_players_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/players/players.component */ "./src/app/pages/players/players.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// import { PagesModule } from './pages/pages.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingComponents"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["MyFilterPipe"],
                _core_security_safe_url_pipe__WEBPACK_IMPORTED_MODULE_15__["SafeUrlPipe"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_21__["EventsComponent"],
                _pages_tournaments_tournaments_component__WEBPACK_IMPORTED_MODULE_22__["TournamentsComponent"],
                _pages_tournaments_tournaments_component__WEBPACK_IMPORTED_MODULE_22__["AppAddDialogComponent"],
                _pages_players_players_component__WEBPACK_IMPORTED_MODULE_23__["PlayersComponent"]
            ],
            entryComponents: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["AppShareDataDialogComponent"], _pages_tournaments_tournaments_component__WEBPACK_IMPORTED_MODULE_22__["AppAddDialogComponent"]],
            imports: [
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_10__["YoutubePlayerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                // shared module
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTreeModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase, { databaseURL: 'https://rscs-5d73d.firebaseio.com' }),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabaseModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
            ],
            providers: [
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
                _core_security_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuth"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_24__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_24__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contributors/contributors.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contributors/contributors.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width{\n    width: 100%;\n}\n.mt20{\n    margin-top: 20px;\n}"

/***/ }),

/***/ "./src/app/contributors/contributors.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contributors/contributors.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt20 justify-content-center\">\n  <table class=\"table table-hover\">\n      <thead>\n      <tr>\n          <td>Id</td>\n          <td>Player Name</td>\n          <!-- <td colspan=\"2\">Actions</td> -->\n      </tr>\n      </thead>\n\n      <tbody>\n          <tr *ngFor=\"let item of people; let i= index\">\n              <td>{{i+1}}</td>\n              <td>{{ item.name }}</td>\n              <!-- <td><a (click)=\"edit(item)\" class=\"btn btn-primary\">Edit</a></td> -->\n              <!-- <td><a (click)=\"delete(item)\" class=\"btn btn-danger\">Delete</a></td> -->\n          </tr>\n      </tbody>\n    </table>\n</div>\n<div class=\"mt20 row justify-content-center\">\n  <div class=\"col-10\">\n      <form [formGroup]=\"addPlayerForm\" (ngSubmit)=\"onSubmit()\">\n\n\n          <div class=\"form-group\">\n              <mat-form-field class=\"full-width\">\n                <input type=\"text\" matInput placeholder=\"Full Name\" formControlName=\"name\">\n              </mat-form-field>\n              <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.name.errors.required\">Court Fee is required</div>\n              </div>\n          </div>\n\n          <div class=\"form-group\">\n              <button class=\"btn btn-primary\">Add People</button>\n          </div>\n      </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contributors/contributors.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contributors/contributors.component.ts ***!
  \********************************************************/
/*! exports provided: ContributorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributorsComponent", function() { return ContributorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firestore_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firestore-data.service */ "./src/app/firestore-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContributorsComponent = /** @class */ (function () {
    function ContributorsComponent(formBuilder, _data) {
        this.formBuilder = formBuilder;
        this._data = _data;
        this.submitted = false;
    }
    ContributorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addPlayerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this._data.getPeople().subscribe(function (user) {
            _this.people = user;
            console.log(_this.people);
        });
    };
    Object.defineProperty(ContributorsComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.addPlayerForm.controls; },
        enumerable: true,
        configurable: true
    });
    ContributorsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.addPlayerForm.invalid) {
            return;
        }
        this._data.addPeople(this.addPlayerForm.value);
        // console.log(this.addPlayerForm.value)
    };
    ContributorsComponent.prototype.delete = function (user) {
        this._data.deletePeople(user);
    };
    ContributorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contributors',
            template: __webpack_require__(/*! ./contributors.component.html */ "./src/app/contributors/contributors.component.html"),
            styles: [__webpack_require__(/*! ./contributors.component.css */ "./src/app/contributors/contributors.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _firestore_data_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreDataService"]])
    ], ContributorsComponent);
    return ContributorsComponent;
}());



/***/ }),

/***/ "./src/app/core/security/auth-info.ts":
/*!********************************************!*\
  !*** ./src/app/core/security/auth-info.ts ***!
  \********************************************/
/*! exports provided: AuthInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInfo", function() { return AuthInfo; });
var AuthInfo = /** @class */ (function () {
    function AuthInfo(uid) {
        this.uid = uid;
    }
    AuthInfo.prototype.isLoggedIn = function () {
        return !!this.uid;
    };
    return AuthInfo;
}());



/***/ }),

/***/ "./src/app/core/security/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/security/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-info */ "./src/app/core/security/auth-info.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.authInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](AuthService_1.UNKNOWN_USER);
    }
    AuthService_1 = AuthService;
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
                _this.router.navigate(['/home']);
            });
        });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.authInfo$.next(AuthService_1.UNKNOWN_USER);
        this.router.navigate(['/home']);
    };
    var AuthService_1;
    AuthService.UNKNOWN_USER = new _auth_info__WEBPACK_IMPORTED_MODULE_3__["AuthInfo"](null);
    AuthService = AuthService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/security/safe-url.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/core/security/safe-url.pipe.ts ***!
  \************************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeUrlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeUrl'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());



/***/ }),

/***/ "./src/app/court-share/court-share.component.css":
/*!*******************************************************!*\
  !*** ./src/app/court-share/court-share.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width{\n    width: 100%;\n}\n.mt20{\n    margin-top: 20px;\n}\n.red{\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/court-share/court-share.component.html":
/*!********************************************************!*\
  !*** ./src/app/court-share/court-share.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row justify-content-center\">\n  <div class=\"col-10\">\n      <form [formGroup]=\"addShareForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n              <mat-form-field class=\"full-width\">\n                  <input matInput [matDatepicker]=\"picker\"  (dateChange)=\"compareDate($event)\"  placeholder=\"Choose a date\" formControlName=\"when\">\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n                <div *ngIf=\"submitted && f.when.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.when.errors.required\">Date is required</div>\n                </div>\n\n          </div>\n          <div *ngIf=\"existDate\" class=\"form-group red\" >\n              {{checkExistingMsg}}\n          </div>\n          <div class=\"form-group\">\n            <mat-form-field class=\"full-width\">\n                <mat-select placeholder=\"Who played\" formControlName=\"whoPlayed\" multiple>\n                  <mat-option *ngFor=\"let item of people\" [value]=\"item.id\">\n                    {{item.name}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            <div *ngIf=\"submitted && f.whoPlayed.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.whoPlayed.errors.required\">Court Paid By is required</div>\n            </div>\n        </div>\n          <div class=\"form-group\">\n              <mat-form-field class=\"full-width\">\n                <input type=\"number\" matInput placeholder=\"Court fee\" formControlName=\"courtFee\">\n                <span matPrefix>&#8377; &nbsp;</span>\n                <span matSuffix>.00</span>\n              </mat-form-field>\n              <div *ngIf=\"submitted && f.courtFee.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.courtFee.errors.required\">Court Fee is required</div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <mat-form-field class=\"full-width\">\n                  <mat-select placeholder=\"Court paid by\" formControlName=\"courtPaidBy\">\n                    <mat-option *ngFor=\"let item of people\" [value]=\"item.id\">\n                      {{item.name}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              <div *ngIf=\"submitted && f.courtPaidBy.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.courtPaidBy.errors.required\">Court Paid By is required</div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <mat-form-field class=\"full-width\">\n                <input type=\"number\" matInput placeholder=\"Shuttlecock cost\" formControlName=\"shuttleCost\">\n                <span matPrefix>&#8377; &nbsp;</span>\n                <span matSuffix>.00</span>\n              </mat-form-field>\n              <div *ngIf=\"submitted && f.shuttleCost.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.shuttleCost.errors.required\">Shuttle Cost is required</div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <mat-form-field class=\"full-width\">\n                  <mat-select placeholder=\"Shuttlecock paid by\" formControlName=\"shuttleTookBy\">\n                    <mat-option *ngFor=\"let item of people\" [value]=\"item.id\">\n                      {{item.name}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              <div *ngIf=\"submitted && f.shuttleTookBy.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.shuttleTookBy.errors.required\">Shuttle Took By is required</div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <section class=\"example-section\">\n              <mat-checkbox formControlName=\"extraHours\">Extra hours if any?</mat-checkbox>\n            </section>\n          </div>\n          <div class=\"form-group\" *ngIf=\"addShareForm.value.extraHours\">\n            <div class=\"form-group\">\n                <mat-form-field class=\"full-width\">\n                  <input type=\"number\" matInput placeholder=\"Extra hour(s) amount\" formControlName=\"extraCourtFee\">\n                  <span matPrefix>&#8377; &nbsp;</span>\n                  <span matSuffix>.00</span>\n                </mat-form-field>\n                <div *ngIf=\"submitted && f.extraCourtFee.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.extraCourtFee.errors.required\">Court Fee is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <mat-form-field class=\"full-width\">\n                    <mat-select placeholder=\"Who played\" formControlName=\"extraWhoPlayed\" multiple>\n                      <mat-option *ngFor=\"let item of people\" [value]=\"item.id\">\n                        {{item.name}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                <div *ngIf=\"submitted && f.extraWhoPlayed.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.extraWhoPlayed.errors.required\">Court Paid By is required</div>\n                </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <button class=\"btn btn-primary\">Register</button>\n          </div>\n      </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/court-share/court-share.component.ts":
/*!******************************************************!*\
  !*** ./src/app/court-share/court-share.component.ts ***!
  \******************************************************/
/*! exports provided: CourtShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourtShareComponent", function() { return CourtShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _firestore_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firestore-data.service */ "./src/app/firestore-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourtShareComponent = /** @class */ (function () {
    function CourtShareComponent(formBuilder, _share, _router, spinner, route, _people) {
        this.formBuilder = formBuilder;
        this._share = _share;
        this._router = _router;
        this.spinner = spinner;
        this.route = route;
        this._people = _people;
        this.submitted = false;
        this.balance_sheet = [];
        this.today = new Date();
        this.existDate = false;
    }
    CourtShareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.addShareForm = this.formBuilder.group({
            when: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            courtFee: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            courtPaidBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            shuttleCost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            shuttleTookBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            extraHours: [false],
            totalAmount: [''],
            whoPlayed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            extraWhoPlayed: [''],
            extraCourtFee: ['']
            // email: ['', [Validators.required, Validators.email]],
            // password: ['', [Validators.required, Validators.minLength(6)]]
        });
        this.getPeopleList();
        this._share.getShare().subscribe(function (data) {
            _this.spinner.hide();
            _this.checkExistingDate = data;
            // console.log(data);
        });
    };
    CourtShareComponent.prototype.compareDate = function (event) {
        var tests = null;
        // console.log(event.value.toDateString());
        this.checkExistingDate.forEach(function (val) {
            // console.log(new Date(val.when.toDate()).toDateString())
            if (new Date(val.when.toDate()).toDateString() === event.value.toDateString()) {
                tests = 'This date is already updated!';
            }
        });
        this.checkExistingMsg = tests;
        if (tests) {
            this.existDate = true;
        }
        console.log(this.checkExistingMsg);
    };
    CourtShareComponent.prototype.getPeopleList = function () {
        var _this = this;
        // console.log("calling")
        this.spinner.show();
        this._people.getPeople().subscribe(function (data) {
            _this.people = data;
            _this.spinner.hide();
            console.log(data);
        });
    };
    Object.defineProperty(CourtShareComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.addShareForm.controls; },
        enumerable: true,
        configurable: true
    });
    CourtShareComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        this.submitted = true;
        // stop here if form is invalid
        if (this.addShareForm.invalid) {
            return;
        }
        // Total Amount
        this.addShareForm.value.totalAmount = this.addShareForm.value.courtFee + this.addShareForm.value.shuttleCost;
        // Divide total into who played
        var divideAmount = this.addShareForm.value.totalAmount / this.addShareForm.value.whoPlayed.length;
        // console.log(divideAmount)
        var shareSheet = [];
        var courtBy = this.addShareForm.value.courtPaidBy;
        var courtAmt = this.addShareForm.value.courtFee;
        var shuttleBy = this.addShareForm.value.shuttleTookBy;
        var shuttleCost = this.addShareForm.value.shuttleCost;
        this.addShareForm.value.whoPlayed.forEach(function (value) {
            console.log(value);
            if (courtBy === value && shuttleBy === value) {
                shareSheet.push({
                    id: value,
                    played: divideAmount,
                    court: courtAmt,
                    shuttle: shuttleCost
                });
            }
            else if (courtBy === value) {
                shareSheet.push({
                    id: value,
                    played: divideAmount,
                    court: courtAmt,
                    shuttle: 0
                });
            }
            else if (shuttleBy === value) {
                shareSheet.push({
                    id: value,
                    played: divideAmount,
                    court: 0,
                    shuttle: shuttleCost
                });
            }
            else {
                shareSheet.push({
                    id: value,
                    played: divideAmount,
                    court: 0,
                    shuttle: 0
                });
            }
        });
        //  console.log(shareSheet)
        this.addShareForm.value.shareSheet = shareSheet;
        this.addShareForm.value.createdAt = this.today;
        this._share.addShare(this.addShareForm.value).then(function () {
            _this.spinner.hide();
            _this._router.navigate([''], { relativeTo: _this.route });
        }).catch(function () {
            this.spinner.hide();
        });
    };
    CourtShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-court-share',
            template: __webpack_require__(/*! ./court-share.component.html */ "./src/app/court-share/court-share.component.html"),
            styles: [__webpack_require__(/*! ./court-share.component.css */ "./src/app/court-share/court-share.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _firestore_data_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreDataService"]])
    ], CourtShareComponent);
    return CourtShareComponent;
}());

// export function requiredIf(requiredIf:{value:boolean}): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//    let value = control.value;
//    if ((value == null || value == undefined || value == "") && requiredIf.value) {
//               return {
//                   requiredIf: {condition:requiredIf.value}
//               };
//       }
//    return null;
//   }
// }


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .dashboard{\n    margin: 0;\n    padding: 0;\n}\n.dashboard li{\n    margin: 0;\n    padding: 15px 10px;\n    background: #f2f2f2;\n    list-style-type: none;\n    border-bottom: 1px solid #dedede;\n}\n.dashboard li h3{\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n}\n.dotMenu:after {\n    content: '\\2807';\n    font-size: 30px;\n    position: relative;\n    top: -7px;\n} */\ntable {\n  width: 100%;\n}\ntable td.negative {\n  color: #ff2500;\n  font-weight: 700;\n}\ntable td.postive {\n  color: #00ff16;\n}\n.dashboard_table {\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content *ngIf=\"sum\">\n  <table class=\"table table-striped table-dark dashboard_table\">\n    <tr>\n      <th>Players</th>\n      <th>Paid Total</th>\n      <th>Played Total</th>\n      <th>To Pay / Get</th>\n    </tr>\n    <tr *ngFor=\"let item of sum\">\n      <td>\n        <div *ngFor=\"let name of peopleList\">\n          {{item.id == name.id ? name.name:''}}\n        </div>\n      </td>\n      <td>&#8377; {{item.totalPaid | number: '1.1-1'}}</td>\n      <td>&#8377; {{item.totalPlayed | number:'1.1-1'}}</td>\n      <td [ngClass]=\"item.toPay >= 0 ? 'postive':'negative'\">&#8377; {{item.toPay | number:'1.1-1'}}</td>\n    </tr>\n\n  </table>\n</div>\n <div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- Position Column -->\n    <!-- <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container> -->\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"when\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.when.toDate() | date: 'mediumDate':'asc'}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"courtFee\">\n      <th mat-header-cell *matHeaderCellDef> Amount </th>\n      <td mat-cell *matCellDef=\"let element\">&#8377; {{element.totalAmount}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> Action </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-raised-button (click)=\"showPop(element)\">More</button>\n        <button *ngIf=\"deleteRecord\" mat-raised-button (click)=\"delete(element)\">Delete</button>\n      </td>\n    </ng-container>\n    <!-- Symbol Column -->\n    <!-- <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      </ng-container> -->\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[10, 20, 30]\" showFirstLastButtons></mat-paginator>\n</div>\n\n<!-- <div mat-dialog-content>\n    <table class=\"table table-stripped\">\n        <tr>\n            <th>Players</th>\n            <th>Court</th>\n            <th>Shuttle</th>\n            <th>Share</th>\n        </tr>\n        <tr *ngFor=\"let item of _datas.shareSheet\">\n            <td>\n                <div *ngFor=\"let name of _datas.people\">\n                    {{item.id == name.id ? name.name:''}}\n                </div>\n            </td>\n            <td>{{item.court}}</td>\n            <td>{{item.shuttle}}</td>\n            <td>{{item.played}}</td>\n        </tr>\n\n    </table>\n</div> -->\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent, AppShareDataDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppShareDataDialogComponent", function() { return AppShareDataDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firestore_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firestore-data.service */ "./src/app/firestore-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_data, route, spinner, _shareData, dialog) {
        this._data = _data;
        this.route = route;
        this.spinner = spinner;
        this._shareData = _shareData;
        this.dialog = dialog;
        this.displayedColumns = ['when', 'courtFee', 'id'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.sum = [];
        this.hidden = false;
        this.deleteRecord = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            if (params.delete === 's') {
                _this.deleteRecord = true;
            }
        });
        this.spinner.show();
        this._data.getPeople().subscribe(function (res) {
            _this.peopleList = res;
            _this.spinner.hide();
        });
        this._shareData.getShare().subscribe(function (data) {
            _this.shareData = data;
            _this.dataSource.data = _this.shareData;
            _this.spinner.hide();
            console.log(data);
            if (data) {
                _this.calculateShareAmount(_this.shareData);
            }
        });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    DashboardComponent.prototype.calculateShareAmount = function (arr) {
        // Calculate Shares total by id
        var totalPaid = [];
        if (this.peopleList.length > 0) {
            var _loop_1 = function (ids) {
                // console.log('start', ids.id);
                var a = 0;
                var p = 0;
                // console.log(a);
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var s = arr_1[_i];
                    s.shareSheet.forEach(function (i) {
                        if (i.id === ids.id) {
                            // if (i.court > 0) {
                            a = a + i.court + i.shuttle;
                            // }
                            p = p + i.played;
                        }
                    });
                }
                // console.log(a, ids.id);
                this_1.sum.push({ id: ids.id, totalPaid: a, totalPlayed: p, toPay: a - p });
            };
            var this_1 = this;
            for (var _i = 0, _a = this.peopleList; _i < _a.length; _i++) {
                var ids = _a[_i];
                _loop_1(ids);
            }
            console.log(this.sum);
        }
    };
    DashboardComponent.prototype.ngAfterContentInit = function () { };
    DashboardComponent.prototype.ngOnDestroy = function () { };
    DashboardComponent.prototype.delete = function (id) {
        // console.log(id.id)
        this._shareData.deleteShare(id);
    };
    DashboardComponent.prototype.showPop = function (element) {
        element.people = this.peopleList;
        // console.log(element)
        var dialogRef = this.dialog.open(AppShareDataDialogComponent, {
            data: element
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DashboardComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DashboardComponent.prototype, "sort", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_firestore_data_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _services_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

// Dialog Box
var AppShareDataDialogComponent = /** @class */ (function () {
    function AppShareDataDialogComponent(dialogRef, _datas) {
        this.dialogRef = dialogRef;
        this._datas = _datas;
        console.log(this._datas);
    }
    AppShareDataDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AppShareDataDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share-data-dialog-component',
            template: __webpack_require__(/*! ./share-data-dialog.component.html */ "./src/app/dashboard/share-data-dialog.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AppShareDataDialogComponent);
    return AppShareDataDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/share-data-dialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/share-data-dialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-6\" mat-dialog-title>Amount:\n    <span class=\"text-muted\">₹{{_datas.totalAmount}}</span>\n    <!-- <label>{{ _datas.when.toDate() | date: 'mediumDate'}}:</label> -->\n</h1>\n\n<span *ngFor=\"let o of _datas.whoPlayed\"></span><br>\n<div mat-dialog-content>\n    <table class=\"table table-stripped\">\n        <tr>\n            <th>Players</th>\n            <th>Court</th>\n            <th>Shuttle</th>\n            <th>Share</th>\n        </tr>\n        <tr *ngFor=\"let item of _datas.shareSheet\">\n            <td>\n                <div *ngFor=\"let name of _datas.people\">\n                    {{item.id == name.id ? name.name:''}}\n                </div>\n            </td>\n            <td>{{item.court | number: '1.1-1'}}</td>\n            <td>{{item.shuttle | number: '1.1-1'}}</td>\n            <td>{{item.played | number: '1.1-1'}}</td>\n        </tr>\n    </table>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  events works!\n</p>\n"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/firestore-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/firestore-data.service.ts ***!
  \*******************************************/
/*! exports provided: FirestoreDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreDataService", function() { return FirestoreDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirestoreDataService = /** @class */ (function () {
    function FirestoreDataService(_afs) {
        this._afs = _afs;
        this.peoplecollection = this._afs.collection('people', function (x) { return x.orderBy('name', 'asc'); });
    }
    FirestoreDataService.prototype.ngOnInit = function () { };
    FirestoreDataService.prototype.getPeople = function () {
        this.people = this.peoplecollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        return this.people;
    };
    FirestoreDataService.prototype.addPeople = function (user) {
        this.peoplecollection.add(user);
    };
    FirestoreDataService.prototype.deletePeople = function (user) {
        this.peopleDoc = this._afs.doc("people/" + user.id);
        this.peopleDoc.delete();
    };
    FirestoreDataService.prototype.getPeopleById = function (id) {
        this.peopleDoc = this._afs.doc("people/" + id);
        // return this.peopleDoc.get();
        // this.peopleDoc.get().subscribe(res =>
        //   {
        //     // console.log(res)
        //   }
        // )
    };
    FirestoreDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], FirestoreDataService);
    return FirestoreDataService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"login()\">Login</button>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_security_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/security/auth.service */ "./src/app/core/security/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.authService.doGoogleLogin()
            .then(function (res) {
            console.log(res);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_security_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/players/players.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/players/players.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/players/players.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/players/players.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  players works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/players/players.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/players/players.component.ts ***!
  \****************************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayersComponent = /** @class */ (function () {
    function PlayersComponent() {
    }
    PlayersComponent.prototype.ngOnInit = function () {
    };
    PlayersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players',
            template: __webpack_require__(/*! ./players.component.html */ "./src/app/pages/players/players.component.html"),
            styles: [__webpack_require__(/*! ./players.component.css */ "./src/app/pages/players/players.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/app/pages/tournaments/add-dialog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/tournaments/add-dialog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addTourney\" (ngSubmit)=\"onSubmit(addTourney)\">\n<h1 class=\"display-6\" mat-dialog-title>Add Tournament</h1>\n<div mat-dialog-content>\n\n\n            <div class=\"row\">\n              <div class=\"col-6\">\n                  <mat-form-field class=\"addTourneyInput\">\n                    <input matInput placeholder=\"Title\" formControlName=\"title\">\n                  </mat-form-field>\n              </div>\n              <div class=\"col-6\">\n                  <mat-form-field class=\"addTourneyInput\">\n                    <input matInput placeholder=\"Sub Title\" formControlName=\"subTitle\">\n                  </mat-form-field>\n              </div>\n              <div class=\"col-6\">\n                  <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"eventDate\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                  </mat-form-field>\n              </div>\n              <div class=\"col-6\">\n                <mat-form-field class=\"addTourneyInput\">\n                  <input type=\"text\" placeholder=\"Select Type\" aria-label=\"Type\" matInput formControlName=\"type\" [matAutocomplete]=\"auto1\">\n                  <mat-autocomplete #auto1=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let item of tTypes\" [value]=\"item\">\n                      {{item}}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n              <div class=\"col-6\">\n                <mat-form-field class=\"addTourneyInput\">\n                  <input type=\"text\" placeholder=\"City\" aria-label=\"City\" matInput formControlName=\"city\" [matAutocomplete]=\"auto\">\n                  <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of cities\" [value]=\"option\">\n                      {{option}}\n                    </mat-option>\n                  </mat-autocomplete>\n                </mat-form-field>\n              </div>\n              <div class=\"col-6\">\n                  <label class=\"btn btn-default\"> Choose Poster:\n                      <input type=\"file\" (change)=\"selectFile($event)\" accept=\"image/*\">\n                    </label>\n              </div>\n\n            </div>\n\n\n\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>Close</button>\n  <button mat-button [disabled]=\"!selectedFiles\">Submit</button>\n</div>\n<div *ngIf=\"currentFileUpload\" class=\"progress\">\n    <div class=\"progress-bar progress-bar-info progress-bar-striped\"\n      role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n      aria-valuemin=\"0\" aria-valuemax=\"100\"\n      [ngStyle]=\"{width:progress.percentage+'%'}\">\n      {{progress.percentage}}%</div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/tournaments/tournaments.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/tournaments/tournaments.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-header-text {\n  margin: 0 0px;\n}\nmat-grid-tile {\n  background: lightblue;\n}\n.addTourneyInput{\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/pages/tournaments/tournaments.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/tournaments/tournaments.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col\">\n      <button mat-fab color=\"primary\" (click)=\"showPop()\">\n        <i class=\"material-icons\"> add </i>\n      </button>\n  </div>\n  <div class=\"col\">\n    <mat-form-field>\n      <mat-select placeholder=\"Select Types\" [(value)]=\"selectedFuture\">\n        <mat-option *ngFor=\"let food of future\" [value]=\"food\">\n          {{food}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div class=\"col\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n  </div>\n  <div class=\"col\">\n    <mat-form-field>\n      <mat-select placeholder=\"Select Types\" [(value)]=\"selectedtTypes\">\n        <mat-option *ngFor=\"let food of tTypes\" [value]=\"food\">\n          {{food}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field></div>\n  <div class=\"col\"><mat-form-field>\n      <mat-select placeholder=\"Select State / City\" [(ngModel)]=\"selectedCity\" >\n        <mat-option *ngFor=\"let food of cities\" [value]=\"food\">\n          {{food}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field></div>\n</div>\n\n<!-- {{selectedCity}} -->\n<div class=\"row\" *ngIf=\"fileUploads.length > 0\">\n  <div class=\"col-4\" *ngFor=\"let file of fileUploads\">\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n        <mat-card-title>{{file.title}}</mat-card-title>\n        <mat-card-subtitle>{{file.subTitle}}</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"{{file.url}}\">\n      <mat-card-content>\n        <p>\n          {{convertDate(file.eventDate) | date: 'dd MMM yyy'}}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>GOING</button>\n        <button mat-button (click)=\"removeItem(file)\">REMOVE</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n\n\n<!-- <div *ngFor=\"let file of fileUploads\">\n\t{{file.name}}\n  <img src=\"{{file.url}}\"/>\n  <button (click)=\"removeItem(file)\">Delete</button>\n</div> -->\n\n\n\n\n<!-- <div *ngIf=\"currentFileUpload\" class=\"progress\">\n\t<div class=\"progress-bar progress-bar-info progress-bar-striped\"\n\t\trole=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n\t\taria-valuemin=\"0\" aria-valuemax=\"100\"\n\t\t[ngStyle]=\"{width:progress.percentage+'%'}\">\n\t\t{{progress.percentage}}%</div>\n</div> -->\n\n\n\n<!-- <label class=\"btn btn-default\">\n  <input type=\"file\" (change)=\"selectFile($event)\">\n</label>\n\n<button class=\"btn btn-success\" [disabled]=\"!selectedFiles\"\n\t(click)=\"upload()\">Upload</button> -->\n"

/***/ }),

/***/ "./src/app/pages/tournaments/tournaments.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/tournaments/tournaments.component.ts ***!
  \************************************************************/
/*! exports provided: TournamentsComponent, AppAddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentsComponent", function() { return TournamentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAddDialogComponent", function() { return AppAddDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TournamentsComponent = /** @class */ (function () {
    function TournamentsComponent(uploadService, dialog) {
        this.uploadService = uploadService;
        this.dialog = dialog;
        this.cities = ['Bangalore', 'Chennai', 'Hydrabad', 'Kerala'];
        this.tTypes = ['Kids', "Adults", "Kids & Adults"];
        // progress: { percentage: number } = { percentage: 0 };
        // myControl = new FormControl();
        this.future = ['Upcoming', 'Past'];
        this.selectedFuture = this.future[0];
        this.selectedtTypes = this.tTypes[2];
        this.selectedCity = this.cities[0];
    }
    TournamentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //   this.myForm = this.fb.group({
        //     title: [''],
        //     subTitle: [''],
        //     eventDate: [''],
        //     city: ['']
        // });
        // Use snapshotChanges().pipe(map()) to store the key
        this.uploadService.getFileUploads(6).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        })).subscribe(function (fileUploads) {
            _this.fileUploads = fileUploads;
            console.log('firebase:', _this.fileUploads);
        });
    };
    // selectFile(event) {
    //   const file = event.target.files.item(0);
    //   if (file.type.match('image.*')) {
    //     this.selectedFiles = event.target.files;
    //   } else {
    //     alert('invalid format!');
    //   }
    // }
    TournamentsComponent.prototype.upload = function () {
        // const file = this.selectedFiles.item(0);
        // this.selectedFiles = undefined;
        // this.currentFileUpload = new FileUpload(file);
        // console.log(this.currentFileUpload);
        // this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
    };
    TournamentsComponent.prototype.convertDate = function (obj) {
        return new Date(obj);
    };
    TournamentsComponent.prototype.removeItem = function (fileUpload) {
        // console.log(fileUpload);
        this.uploadService.deleteFileUpload(fileUpload);
    };
    TournamentsComponent.prototype.showPop = function () {
        var dialogRef = this.dialog.open(AppAddDialogComponent);
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    TournamentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tournaments',
            template: __webpack_require__(/*! ./tournaments.component.html */ "./src/app/pages/tournaments/tournaments.component.html"),
            styles: [__webpack_require__(/*! ./tournaments.component.css */ "./src/app/pages/tournaments/tournaments.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], TournamentsComponent);
    return TournamentsComponent;
}());

// Dialog Box
var AppAddDialogComponent = /** @class */ (function () {
    function AppAddDialogComponent(dialogRef, fb, uploadService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.uploadService = uploadService;
        this.progress = { percentage: 0 };
        this.cities = ['Bangalore', 'Chennai', 'Hydrabad', 'Kerala'];
        this.tTypes = ['Kids', "Adults", "Both"];
        // console.log(this._datas);
    }
    AppAddDialogComponent.prototype.ngOnInit = function () {
        this.addTourney = this.fb.group({
            title: [''],
            subTitle: [''],
            eventDate: [''],
            city: [''],
            type: ['']
        });
        // this.uploadService.getFileUploads(6).snapshotChanges().pipe(
        //   map(changes =>
        //     changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        //   )
        // ).subscribe((fileUploads: any) => {
        //   this.fileUploads = fileUploads;
        //   console.log('firebase:', fileUploads);
        // });
    };
    AppAddDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AppAddDialogComponent.prototype.convertDate = function (obj) {
        return new Date(obj);
    };
    AppAddDialogComponent.prototype.selectFile = function (event) {
        var file = event.target.files.item(0);
        if (file.type.match('image.*')) {
            this.selectedFiles = event.target.files;
        }
        else {
            alert('invalid format!');
        }
    };
    AppAddDialogComponent.prototype.onSubmit = function (obj) {
        var file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_2__["FileUpload"](file);
        // console.log(obj.value);
        obj.value.eventDate = obj.value.eventDate.toString();
        this.uploadService.pushFileToStorage(this.currentFileUpload, obj.value, this.progress);
        this.dialogRef.close();
    };
    AppAddDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-dialog-component',
            template: __webpack_require__(/*! ./add-dialog.component.html */ "./src/app/pages/tournaments/add-dialog.component.html"),
            styles: [__webpack_require__(/*! ./tournaments.component.css */ "./src/app/pages/tournaments/tournaments.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileService"]])
    ], AppAddDialogComponent);
    return AppAddDialogComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: MyFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFilterPipe", function() { return MyFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyFilterPipe = /** @class */ (function () {
    function MyFilterPipe() {
    }
    MyFilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            console.log(items, filter);
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        // return items.filter(item => item.indexOf(filter) !== -1);
    };
    MyFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'myfilter',
            pure: false
        })
    ], MyFilterPipe);
    return MyFilterPipe;
}());



/***/ }),

/***/ "./src/app/services/share.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/share.service.ts ***!
  \*******************************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShareService = /** @class */ (function () {
    function ShareService(_afs) {
        this._afs = _afs;
        this.shareCollection = this._afs.collection('share', function (ref) { return ref.orderBy('when', 'desc'); });
    }
    ShareService.prototype.getShare = function () {
        this.share = this.shareCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
        return this.share;
    };
    ShareService.prototype.addShare = function (obj) {
        return this.shareCollection.add(obj).then(function (res) { });
    };
    ShareService.prototype.deleteShare = function (obj) {
        this.shareDoc = this._afs.doc("share/" + obj.id);
        this.shareDoc.delete();
    };
    ShareService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ShareService);
    return ShareService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: FileUpload, UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileUpload = /** @class */ (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());

var UploadFileService = /** @class */ (function () {
    function UploadFileService(db) {
        this.db = db;
        this.basePath = '/tournaments';
    }
    UploadFileService.prototype.pushFileToStorage = function (fileUpload, obj, progress) {
        var _this = this;
        console.log(obj);
        var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + fileUpload.file.name).put(fileUpload.file);
        uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // in progress
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            // fail
            console.log(error);
        }, function () {
            // success
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', obj.eventDate);
                fileUpload.url = downloadURL;
                fileUpload.name = fileUpload.file.name;
                fileUpload.title = obj.title;
                fileUpload.subTitle = obj.subTitle;
                fileUpload.city = obj.city;
                fileUpload.tType = obj.type;
                fileUpload.createdAt = Date.now();
                fileUpload.eventDate = obj.eventDate;
                console.log(fileUpload);
                if (fileUpload) {
                    _this.saveFileData(fileUpload);
                }
            });
        });
    };
    UploadFileService.prototype.saveFileData = function (fileUpload) {
        this.db.list(this.basePath + "/").push(fileUpload);
    };
    UploadFileService.prototype.getFileUploads = function (numberItems) {
        return this.db.list(this.basePath, function (ref) {
            return ref.limitToLast(numberItems);
        });
    };
    UploadFileService.prototype.deleteFileUpload = function (fileUpload) {
        var _this = this;
        this.deleteFileDatabase(fileUpload.key)
            .then(function () {
            _this.deleteFileStorage(fileUpload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    UploadFileService.prototype.deleteFileDatabase = function (key) {
        return this.db.list(this.basePath + "/").remove(key);
    };
    UploadFileService.prototype.deleteFileStorage = function (name) {
        var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    UploadFileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "./src/app/videos/videos.component.css":
/*!*********************************************!*\
  !*** ./src/app/videos/videos.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td, .table th{\n  padding: 0px;\n}\n.table td iframe{\n  width: 100% !important;\n}\n.table{\n  width:90%;\n}\n"

/***/ }),

/***/ "./src/app/videos/videos.component.html":
/*!**********************************************!*\
  !*** ./src/app/videos/videos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"prevFn(videoArray.prevPageToken)\" *ngIf=\"videoArray.prevPageToken\">Prev</button>\n<button (click)=\"nextFn(videoArray.nextPageToken)\" *ngIf=\"videoArray.nextPageToken\">Next</button>\n    <table class=\"table\">\n      <tr *ngFor=\"let item of videoArray.items\">\n        <td>\n          <youtube-player [videoId]=\"item.id.videoId\"></youtube-player>\n        </td>\n      </tr>\n    </table>\n    <button (click)=\"prevFn(videoArray.prevPageToken)\" *ngIf=\"videoArray.prevPageToken\">Prev</button>\n    <button (click)=\"nextFn(videoArray.nextPageToken)\" *ngIf=\"videoArray.nextPageToken\">Next</button>\n\n\n"

/***/ }),

/***/ "./src/app/videos/videos.component.ts":
/*!********************************************!*\
  !*** ./src/app/videos/videos.component.ts ***!
  \********************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideosComponent = /** @class */ (function () {
    function VideosComponent(spinner, http) {
        // this.http.get(this.ytURL)
        // .subscribe(
        //   data => {
        //     console.log(data);
        //     this.videoArray = data;
        //   },
        //   error => {
        //     console.log('Error', error);
        //   }
        // );
        this.spinner = spinner;
        this.http = http;
        this.videoArray = [];
        this.ytURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ytBaseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ytKey + '&channelId=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].channelId + '&part=snippet,id&order=date&maxResults=5';
    }
    VideosComponent.prototype.ngOnInit = function () {
        this.fetchToken('');
    };
    VideosComponent.prototype.prevFn = function (token) {
        this.fetchToken(token);
    };
    VideosComponent.prototype.nextFn = function (token) {
        this.fetchToken(token);
    };
    VideosComponent.prototype.fetchToken = function (token) {
        var _this = this;
        this.spinner.show();
        this.http.get(this.ytURL + '&pageToken=' + token)
            .subscribe(function (data) {
            _this.spinner.hide();
            _this.videoArray = data;
            console.log(data);
        }, function (error) {
            console.log('Error', error);
        });
    };
    VideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.css */ "./src/app/videos/videos.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    isContentLoading: false,
    firebase: {
        apiKey: 'AIzaSyD6lHaY0h-DNQKxKGeDKLkmDfsRg5UqDH8',
        authDomain: 'rscs-5d73d.firebaseapp.com',
        databaseURL: 'https://rscs-5d73d.firebaseio.com',
        projectId: 'rscs-5d73d',
        storageBucket: 'rscs-5d73d.appspot.com',
        messagingSenderId: '1054174777846'
    },
    ytBaseUrl: 'https://www.googleapis.com/youtube/v3/search?key=',
    ytKey: 'AIzaSyD49Q_iaWCzYyZnUvGJgofQ5N7vVf61ONY',
    channelId: 'UC7T_wTPNhAVl3qSr4i5ThoQ',
    playlistId: 'PLS2sSCeEuo-WiwHidasFy7rA5cqukkj0y',
    ytUserId: '7T_wTPNhAVl3qSr4i5ThoQ'
};
/*
*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/ngsw-worker.js');
    }
})
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/onyxmac/Documents/Projects/gotoplay/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map