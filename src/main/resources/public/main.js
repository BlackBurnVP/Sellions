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
/*! exports provided: AppRoutingModule, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tv_list_tv_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tv-list/tv-list.component */ "./src/app/tv-list/tv-list.component.ts");
/* harmony import */ var _tv_info_tv_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tv-info/tv-info.component */ "./src/app/tv-info/tv-info.component.ts");
/* harmony import */ var _tv_create_tv_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tv-create/tv-create.component */ "./src/app/tv-create/tv-create.component.ts");






var routes = [
    { path: 'list', component: _tv_list_tv_list_component__WEBPACK_IMPORTED_MODULE_3__["TvListComponent"] },
    { path: 'info', component: _tv_info_tv_info_component__WEBPACK_IMPORTED_MODULE_4__["TvInfoComponent"] },
    { path: 'info/:id', component: _tv_info_tv_info_component__WEBPACK_IMPORTED_MODULE_4__["TvInfoComponent"] },
    { path: 'add', component: _tv_create_tv_create_component__WEBPACK_IMPORTED_MODULE_5__["TvCreateComponent"] },
    { path: '', component: _tv_list_tv_list_component__WEBPACK_IMPORTED_MODULE_3__["TvListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Sellions task</title>\n<div class=\"container-fluid\">\n  <nav xmlns:th=\"http://www.thymeleaf.org\"\n       xmlns=\"http://www.w3.org/1999/xhtml\"\n       th:fragment=\"nav\"\n       class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"/\">Sellions</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"list\">List</a>\n        </li>\n      </ul>\n      <div class=\"navbar-text\"></div>\n      <form class=\"form-inline my-2 my-lg-0 ml-3\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Sign out</button>\n      </form>﻿\n    </div>\n  </nav>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(app, http, router) {
        this.app = app;
        this.http = http;
        this.router = router;
        this.title = 'Sellions task';
        this.data = {};
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: XhrInterceptor, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrInterceptor", function() { return XhrInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _tv_info_tv_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tv-info/tv-info.component */ "./src/app/tv-info/tv-info.component.ts");
/* harmony import */ var _tv_list_tv_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tv-list/tv-list.component */ "./src/app/tv-list/tv-list.component.ts");
/* harmony import */ var _tv_create_tv_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tv-create/tv-create.component */ "./src/app/tv-create/tv-create.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");












var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/list' },
    { path: 'list', component: _tv_list_tv_list_component__WEBPACK_IMPORTED_MODULE_9__["TvListComponent"] },
    { path: 'info', component: _tv_info_tv_info_component__WEBPACK_IMPORTED_MODULE_8__["TvInfoComponent"] }
];
var XhrInterceptor = /** @class */ (function () {
    function XhrInterceptor() {
    }
    XhrInterceptor.prototype.intercept = function (req, next) {
        var xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    };
    XhrInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], XhrInterceptor);
    return XhrInterceptor;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _tv_info_tv_info_component__WEBPACK_IMPORTED_MODULE_8__["TvInfoComponent"],
                _tv_list_tv_list_component__WEBPACK_IMPORTED_MODULE_9__["TvListComponent"],
                _tv_create_tv_create_component__WEBPACK_IMPORTED_MODULE_10__["TvCreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: XhrInterceptor, multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getTvs = function () {
        var url = 'http://localhost:8080';
        return this.http.get(url + '/tvs');
    };
    AppService.prototype.addTv = function (tv) {
        var url = 'http://localhost:8080';
        return this.http.post(url + '/tvs', tv);
    };
    AppService.prototype.getTv = function (id) {
        var url = 'http://localhost:8080';
        return this.http.get(url + '/tvs/' + id);
    };
    AppService.prototype.updateTv = function (id, tv) {
        var url = 'http://localhost:8080';
        return this.http.put(url + '/tvs/' + id, tv);
    };
    AppService.prototype.deleteTv = function (id) {
        var url = 'http://localhost:8080/tvs/delete/' + id;
        console.log(url);
        return this.http.get(url);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/tv-create/tv-create.component.css":
/*!***************************************************!*\
  !*** ./src/app/tv-create/tv-create.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R2LWNyZWF0ZS90di1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/tv-create/tv-create.component.html":
/*!****************************************************!*\
  !*** ./src/app/tv-create/tv-create.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n<h3>Create Tv</h3>\n<div [hidden]=\"submitted\">\n  <form (ngSubmit)=\"onSubmit()\" class=\"mt-4\">\n    <div *ngFor=\"let e of paramRows\">\n      <div class=\"row mt-3\">\n        <select name=\"tvParam+{{paramIndex}}}\" class=\"form-control col-md-3\" [(ngModel)]=\"selectedParam[e]\">\n          <option *ngFor=\"let param of parametrs\">{{param}}</option>\n        </select>\n        <div class=\"col\" *ngIf=\"selectedParam[paramIndex]=='Condition'\">\n          <select name=\"tvParamCondition\" class=\"form-control\" [(ngModel)] = \"paramet[e]\" >\n            <option>Working</option>\n            <option>Broken</option>\n          </select>\n        </div>\n        <div class=\"col\" *ngIf=\"selectedParam[paramIndex]!='Condition'\">\n          <input type=\"text\" class=\"form-control\" name=\"tvParamValue\" [(ngModel)] = \"paramet[e]\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success mt-3\">Submit</button>\n  </form>\n</div>\n\n<div [hidden]=\"!submitted\">\n  <h4>You submitted successfully!</h4>\n  <a href=\"/list\">Go to List</a>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/tv-create/tv-create.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tv-create/tv-create.component.ts ***!
  \**************************************************/
/*! exports provided: TvCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvCreateComponent", function() { return TvCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tv */ "./src/app/tv.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TvCreateComponent = /** @class */ (function () {
    function TvCreateComponent(app, router) {
        this.app = app;
        this.router = router;
        this.tv = new _tv__WEBPACK_IMPORTED_MODULE_2__["Tv"]();
        this.submitted = false;
        this.parametrs = ["Brand", "Model", "Color", "Display technology", "Screen size", "Refresh rate", "Weight", "Condition", "Inputs"];
        this.selectedParam = [];
        this.paramIndex = 0;
        this.paramet = [];
        this.paramRows = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.r = 0;
    }
    TvCreateComponent.prototype.checkSelect = function () {
        for (var p in this.parametrs) {
            var index = this.selectedParam.indexOf(this.parametrs[p]);
            if (index > -1) {
                console.log(index);
                var ind = this.parametrs.indexOf(this.selectedParam[index]);
                this.parametrs.splice(ind, 1);
            }
        }
    };
    TvCreateComponent.prototype.passData = function () {
        for (var _i = 0, _a = this.selectedParam; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.indexOf(' ') > 0) {
                s = s.split(' ').join('_');
            }
            var temp = s.toLocaleLowerCase();
            console.log(this.r);
            console.log(this.paramet);
            this.tv[temp] = this.paramet[this.r];
            this.r = this.r + 1;
        }
    };
    TvCreateComponent.prototype.newTv = function () {
        this.submitted = false;
        this.tv = new _tv__WEBPACK_IMPORTED_MODULE_2__["Tv"]();
    };
    TvCreateComponent.prototype.saveTv = function () {
        var _this = this;
        this.app.addTv(this.tv).subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl('/list');
        }, function (error) { return console.log(error); });
        this.tv = new _tv__WEBPACK_IMPORTED_MODULE_2__["Tv"]();
    };
    TvCreateComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.passData();
        this.saveTv();
    };
    TvCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tv-create',
            template: __webpack_require__(/*! ./tv-create.component.html */ "./src/app/tv-create/tv-create.component.html"),
            styles: [__webpack_require__(/*! ./tv-create.component.css */ "./src/app/tv-create/tv-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TvCreateComponent);
    return TvCreateComponent;
}());



/***/ }),

/***/ "./src/app/tv-info/tv-info.component.css":
/*!***********************************************!*\
  !*** ./src/app/tv-info/tv-info.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R2LWluZm8vdHYtaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tv-info/tv-info.component.html":
/*!************************************************!*\
  !*** ./src/app/tv-info/tv-info.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <h1>{{tv.brand}}  {{tv.model}}</h1>\r\n  </div>\r\n  <form>\r\n  <div class=\"panel-body\">\r\n    <table class=\"table table-striped table-bordered\">\r\n      <tbody>\r\n      <tr>\r\n        <th>Id</th>\r\n        <td>{{tv.id}}</td>\r\n      </tr>\r\n      <tr>\r\n        <th>Brand</th>\r\n        <td><input type=\"text\" name=\"brand\" class=\"form-control\" [(value)] = tv.brand [(ngModel)] = \"tv.brand\"></td>\r\n      </tr>\r\n      <tr>\r\n        <th>Model</th>\r\n        <td><input type=\"text\" name=\"model\" class=\"form-control\" [(value)] = tv.model [(ngModel)] = \"tv.model\"></td>\r\n      </tr>\r\n      <tr>\r\n        <th>Color</th>\r\n        <td><input type=\"text\" name=\"color\" class=\"form-control\" [(value)] = tv.color [(ngModel)] = \"tv.color\"></td>\r\n      </tr>\r\n      <tr>\r\n        <th>Display Technology</th>\r\n        <td><input type=\"text\" name=\"display_technology\" class=\"form-control\" [(value)] = tv.display_technology [(ngModel)] = \"tv.display_technology\"></td>\r\n      </tr>\r\n      <tr>\r\n        <th >Screen Size</th>\r\n        <td><input type=\"text\" name=\"screen_size\" class=\"form-control\" [(value)] = tv.screen_size [(ngModel)] = \"tv.screen_size\"></td>\r\n      </tr>\r\n      <tr>\r\n        <th >Refresh Rate</th>\r\n        <td><input type=\"text\" name=\"refresh_rate\" class=\"form-control\" [(value)] = tv.refresh_rate [(ngModel)] = \"tv.refresh_rate\"></td>\r\n      </tr>\r\n      <tr>\r\n        <th >Weight</th>\r\n        <td><input type=\"text\" name=\"weight\" class=\"form-control\" [(value)] = tv.weight [(ngModel)] = \"tv.weight\"></td>\r\n      </tr>\r\n      <tr>\r\n        <th>Condition</th>\r\n        <td>\r\n          <select class=\"form-control\" name=\"condition\" [(value)] = \"tv.condition\" [(ngModel)] = \"tv.condition\">\r\n            <option>Working</option>\r\n            <option>Broken</option>\r\n          </select>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <th >Inputs</th>\r\n        <td><input type=\"text\" name=\"inputs\" class=\"form-control\" [(value)] = tv.inputs [(ngModel)] = \"tv.inputs\"></td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n    <button class=\"btn btn-success\" type=\"submit\" (click)=\"upTv()\">Update</button>\r\n    <button class=\"btn btn-danger ml-2\" (click)=\"router.navigateByUrl(['/list'])\">Cancel</button>\r\n  </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tv-info/tv-info.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tv-info/tv-info.component.ts ***!
  \**********************************************/
/*! exports provided: TvInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvInfoComponent", function() { return TvInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tv */ "./src/app/tv.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _tv_list_tv_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tv-list/tv-list.component */ "./src/app/tv-list/tv-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var TvInfoComponent = /** @class */ (function () {
    function TvInfoComponent(app, tvList, router, route) {
        this.app = app;
        this.tvList = tvList;
        this.router = router;
        this.route = route;
        this.tv = {};
    }
    TvInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.app.getTv(id).subscribe(function (tv) {
                    if (tv) {
                        _this.tv = tv;
                    }
                    else {
                        console.log('Not Found');
                        _this.gotoList();
                    }
                });
            }
        });
    };
    TvInfoComponent.prototype.gotoList = function () {
        this.router.navigateByUrl('/list');
    };
    TvInfoComponent.prototype.upTv = function () {
        var _this = this;
        this.app.updateTv(this.tv.id, this.tv).subscribe(function (data) {
            console.log(data);
            _this.gotoList();
        }, function (error) { return console.log(error); });
        this.tv = new _tv__WEBPACK_IMPORTED_MODULE_2__["Tv"]();
    };
    TvInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tv-info',
            template: __webpack_require__(/*! ./tv-info.component.html */ "./src/app/tv-info/tv-info.component.html"),
            providers: [_tv_list_tv_list_component__WEBPACK_IMPORTED_MODULE_4__["TvListComponent"]],
            styles: [__webpack_require__(/*! ./tv-info.component.css */ "./src/app/tv-info/tv-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _tv_list_tv_list_component__WEBPACK_IMPORTED_MODULE_4__["TvListComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], TvInfoComponent);
    return TvInfoComponent;
}());



/***/ }),

/***/ "./src/app/tv-list/tv-list.component.css":
/*!***********************************************!*\
  !*** ./src/app/tv-list/tv-list.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R2LWxpc3QvdHYtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tv-list/tv-list.component.html":
/*!************************************************!*\
  !*** ./src/app/tv-list/tv-list.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h1>Tv's</h1>\n  </div>\n  <div class=\"panel-body\">\n    <button class=\"btn btn-primary\" [routerLink]=\"['/add']\">Add</button>\n    <table class=\"table table-striped table-bordered\">\n      <thead>\n      <tr>\n        <th>Id</th>\n        <th>Brand</th>\n        <th>Model</th>\n        <th>Actions</th>\n      </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let tv of Tvs | async\">\n          <td>{{tv.id}}</td>\n          <td>{{tv.brand}}</td>\n          <td>{{tv.model}}</td>\n          <td>\n            <button class=\"btn btn-info\" [routerLink] = \"['/info',tv.id]\">Edit</button>\n            <button class=\"btn btn-danger ml-2\" (click)=\"delTv(tv.id)\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tv-list/tv-list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tv-list/tv-list.component.ts ***!
  \**********************************************/
/*! exports provided: TvListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvListComponent", function() { return TvListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TvListComponent = /** @class */ (function () {
    function TvListComponent(app, router) {
        this.app = app;
        this.router = router;
    }
    TvListComponent.prototype.ngOnInit = function () {
        this.Tvs = this.app.getTvs();
    };
    TvListComponent.prototype.delTv = function (id) {
        this.Tvs = this.app.deleteTv(id);
    };
    TvListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tv-list',
            template: __webpack_require__(/*! ./tv-list.component.html */ "./src/app/tv-list/tv-list.component.html"),
            styles: [__webpack_require__(/*! ./tv-list.component.css */ "./src/app/tv-list/tv-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TvListComponent);
    return TvListComponent;
}());



/***/ }),

/***/ "./src/app/tv.ts":
/*!***********************!*\
  !*** ./src/app/tv.ts ***!
  \***********************/
/*! exports provided: Tv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tv", function() { return Tv; });
var Tv = /** @class */ (function () {
    function Tv() {
    }
    return Tv;
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
    production: false
};
/*
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Study\Spring\Sellions\Sellions\src\main\resources\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map