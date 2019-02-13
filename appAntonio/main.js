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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro/registro.component */ "./src/app/registro/registro.component.ts");
/* harmony import */ var _listado_listado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listado/listado.component */ "./src/app/listado/listado.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'registro', component: _registro_registro_component__WEBPACK_IMPORTED_MODULE_3__["RegistroComponent"] },
    { path: 'listado', component: _listado_listado_component__WEBPACK_IMPORTED_MODULE_4__["ListadoComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content\r\n{\r\n    min-height: 100vh;\r\n    margin-bottom: -63px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div id=\"content\">\r\n        <app-header></app-header>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'appAntonio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro/registro.component */ "./src/app/registro/registro.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-service.service */ "./src/app/user-service.service.ts");
/* harmony import */ var _listado_listado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./listado/listado.component */ "./src/app/listado/listado.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _registro_registro_component__WEBPACK_IMPORTED_MODULE_6__["RegistroComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _listado_listado_component__WEBPACK_IMPORTED_MODULE_11__["ListadoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_user_service_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row\r\n{\r\n    height: 60px;\r\n    background-color:#eee;\r\n    padding-top: 25px;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col\"></div>\n\n  <div class=\"col-11\">\n      <p class=\"text-left text-muted\">APP | Pie de página</p>\n  </div>\n\n  <div class=\"col\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* The sidebar menu */\r\n.sidebar {\r\n    height: 100%; /* 100% Full-height */\r\n    width: 0; /* 0 width - change this with JavaScript */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 99999; /* Stay on top */\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111; /* Black*/\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    padding-top: 60px; /* Place content 60px from the top */\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */\r\n  }\r\n/* The sidebar links */\r\n.sidebar a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n  }\r\n/* When you mouse over the navigation links, change their color */\r\n.sidebar a:hover {\r\n    color: #f1f1f1;\r\n  }\r\n/* Position and style the close button (top right corner) */\r\n.sidebar .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n  }\r\n/* The button used to open the sidebar */\r\n.openbtn {\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    background-color: rgba(51, 51, 51, 0);\r\n    color: white;\r\n    padding: 10px 0px 10px 15px;\r\n    border: none;\r\n  }\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    .sidebar {padding-top: 15px;}\r\n    .sidebar a {font-size: 18px;}\r\n  }\r\n/* ------------------------------------------------------------------------------------------- */\r\n.logo\r\n  {\r\n      /*font-size: large;\r\n      font-weight: bold;\r\n      font-style: italic;*/\r\n      color: whitesmoke;\r\n      font-size: medium;\r\n      font-weight: bolder;\r\n      letter-spacing: 2px;\r\n      text-decoration: none;\r\n      transition: all 0.2s;\r\n      margin-top: -6px;\r\n  }\r\n.logo:hover\r\n  {\r\n      color: orange;\r\n      background-color: rgba(51, 51, 51, 0)\r\n  }\r\n.white\r\n  {\r\n      color: whitesmoke;\r\n      font-size: smaller!important;\r\n      margin-top: 7px;\r\n  }\r\n.row\r\n  {\r\n    /*background: url('https://cdn.pixabay.com/photo/2016/12/29/18/44/background-1939128_960_720.jpg') center center;*/\r\n    background-color: #a94442;\r\n  }\r\n.modal-header\r\n  {\r\n    padding: 30px;\r\n  }\r\n.modal-title\r\n  {\r\n    font-size: small;\r\n  }\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidebar\" class=\"sidebar\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <a href=\"\" routerLink=\"/home\">Home</a>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n        <button class=\"openbtn\" (click)=\"openNav()\">&#9776;</button>\n        <button routerLink=\"/home\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect logo\">APP</button>\n    </div>\n    <div class=\"col-auto\">\n        <button type=\"button\" *ngIf=\"!login\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect white text-capitalize\" data-toggle=\"modal\" data-target=\"#modalAcceder\" (click)=\"resetAcceder()\">Acceder</button>\n        <button routerLink=\"/registro\" *ngIf=\"!login\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect white text-capitalize\">Regístrate</button>\n\n        <button *ngIf=\"login\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect white text-lowercase text-warning\">{{actualUser}}</button>\n        <button *ngIf=\"login\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect white text-capitalize\">Cerrar Sesión</button>\n    </div>\n  </div>\n\n  <!-- Modal -->\n<div class=\"modal fade\" id=\"modalAcceder\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">INICIAR SESIÓN</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n\n          <form id=\"loginForm\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\">\n\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Usuario\" id=\"usuario\" name=\"usuario\" [(ngModel)]=\"user.usuario\" #usuario=\"ngModel\" required>\n            </div>\n\n            <div [hidden]=\"usuario.valid || usuario.pristine\" class=\"alert alert-danger\">Nombre requerido</div>\n\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"Contraseña\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required>\n            </div>\n\n            <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">Contraseña requerida</div>\n\n            <div id=\"error\"></div>\n\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-success btn-large btn-block\">Acceder</button>\n            </div>\n\n            <div id=\"spinner\"></div>\n\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](0, '', '', '', '', '', '', '', true);
        this.userList = [];
        this.login = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    HeaderComponent.prototype.getUsers = function () {
        var _this = this;
        return this.userService.getUsers().subscribe(function (results) { return _this.userList = results; });
    };
    HeaderComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var username = form.controls.usuario.value;
        var password = form.controls.password.value;
        if (form.valid) {
            this.userList.forEach(function (usuario) {
                if (usuario.usuario == username && usuario.password == password) {
                    _this.actualUser = username;
                    $('#spinner').append('<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>');
                    setTimeout(function () {
                        $('#modalAcceder').modal('hide');
                    }, 500);
                    _this.login = true;
                }
                else {
                    $('#error').empty();
                    $('#error').append("<p class='text-danger'>Usuario y/o contraseña erróneos</p>");
                }
            });
        }
        else {
            console.log(form.controls.usuario.value);
            if ((form.controls.usuario.value == "" || form.controls.usuario.value == null) && (form.controls.password.value == "" || form.controls.password.value == null)) {
                $('#error').empty();
                $('#error').append("<p class='text-danger'>Usuario y contraseña requeridos</p>");
            }
            else if (form.controls.usuario.value == "" || form.controls.usuario.value == null) {
                $('#error').empty();
                $('#error').append("<p class='text-danger'>Usuario requerido</p>");
            }
            else if (form.controls.password.value == "" || form.controls.password.value == null) {
                $('#error').empty();
                $('#error').append("<p class='text-danger'>Contraseña requerida</p>");
            }
        }
    };
    HeaderComponent.prototype.resetAcceder = function () {
        $("#loginForm")[0].reset();
    };
    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
    HeaderComponent.prototype.openNav = function () {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    };
    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    HeaderComponent.prototype.closeNav = function () {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row\r\n{\r\n    margin-top: 50px;\r\n}\r\n\r\n.mdl-card__title\r\n{\r\n    height: 150px;\r\n    background-color: aquamarine;\r\n}\r\n\r\n.mdl-card\r\n{\r\n    width: 100%;\r\n}\r\n\r\n/* Bubble Float Top */\r\n\r\n.hvr-bubble-float-top {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px transparent;\r\n    position: relative;\r\n    transition-duration: 0.3s;\r\n    transition-property: -webkit-transform;\r\n    transition-property: transform;\r\n    transition-property: transform, -webkit-transform;\r\n  }\r\n\r\n.hvr-bubble-float-top:before {\r\n    position: absolute;\r\n    z-index: -1;\r\n    content: '';\r\n    left: calc(50% - 10px);\r\n    top: 0;\r\n    border-style: solid;\r\n    border-width: 0 10px 10px 10px;\r\n    border-color: transparent transparent #e1e1e1 transparent;\r\n    transition-duration: 0.3s;\r\n    transition-property: -webkit-transform;\r\n    transition-property: transform;\r\n    transition-property: transform, -webkit-transform;\r\n  }\r\n\r\n.hvr-bubble-float-top:hover, .hvr-bubble-float-top:focus, .hvr-bubble-float-top:active {\r\n    -webkit-transform: translateY(10px);\r\n    transform: translateY(10px);\r\n  }\r\n\r\n.hvr-bubble-float-top:hover:before, .hvr-bubble-float-top:focus:before, .hvr-bubble-float-top:active:before {\r\n    -webkit-transform: translateY(-10px);\r\n    transform: translateY(-10px);\r\n  }\r\n\r\n.carousel\r\n  {\r\n    height: 400px;\r\n    overflow: hidden;\r\n  }\r\n\r\n.carousel-item > img\r\n  {\r\n    width: 100%;\r\n  }\r\n\r\n.carousel-inner\r\n  {\r\n    width: 100%;\r\n    height: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"col\"></div>\r\n\r\n    <div class=\"col-9\">\r\n\r\n        <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\r\n            <div class=\"carousel-inner\">\r\n                <div class=\"carousel-item active\" style=\"background-color: yellow; width: 100%; height: 100%;\">\r\n                <!--<img src=\"https://cdn.pixabay.com/photo/2018/11/22/23/57/london-3833039_960_720.jpg\" class=\"d-block w-100\" alt=\"...\">-->\r\n                </div>\r\n                <div class=\"carousel-item\" style=\"background-color: orange; width: 100%; height: 100%;\">\r\n                <!--<img src=\"https://cdn.pixabay.com/photo/2013/11/05/19/12/urban-205986_960_720.jpg\" class=\"d-block w-100\" alt=\"...\">-->\r\n                </div>\r\n                <div class=\"carousel-item\" style=\"background-color: orangered; width: 100%; height: 100%;\">\r\n                <!--<img src=\"https://cdn.pixabay.com/photo/2015/05/15/14/21/architecture-768432_960_720.jpg\" class=\"d-block w-100\" alt=\"...\">-->\r\n                </div>\r\n            </div>\r\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n            </a>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col\"></div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col\"></div>\r\n\r\n    <div class=\"col-3 hvr-bubble-float-top animated fadeIn\">\r\n\r\n            <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\">\r\n                <div class=\"mdl-card__title\">\r\n                    <h2 class=\"mdl-card__title-text\">Welcome</h2>\r\n                </div>\r\n                <div class=\"mdl-card__supporting-text\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                    Mauris sagittis pellentesque lacus eleifend lacinia...\r\n                </div>\r\n                <div class=\"mdl-card__actions mdl-card--border\">\r\n                    <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\r\n                    Get Started\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-3 hvr-bubble-float-top animated fadeIn\">\r\n\r\n            <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\">\r\n                <div class=\"mdl-card__title\">\r\n                    <h2 class=\"mdl-card__title-text\">Welcome</h2>\r\n                </div>\r\n                <div class=\"mdl-card__supporting-text\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                    Mauris sagittis pellentesque lacus eleifend lacinia...\r\n                </div>\r\n                <div class=\"mdl-card__actions mdl-card--border\">\r\n                    <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\r\n                    Get Started\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-3 hvr-bubble-float-top animated fadeIn\">\r\n\r\n            <div class=\"demo-card-wide mdl-card mdl-shadow--2dp\">\r\n                <div class=\"mdl-card__title\">\r\n                    <h2 class=\"mdl-card__title-text\">Welcome</h2>\r\n                </div>\r\n                <div class=\"mdl-card__supporting-text\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                    Mauris sagittis pellentesque lacus eleifend lacinia...\r\n                </div>\r\n                <div class=\"mdl-card__actions mdl-card--border\">\r\n                    <a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">\r\n                    Get Started\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col\"></div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/listado/listado.component.css":
/*!***********************************************!*\
  !*** ./src/app/listado/listado.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid\r\n{\r\n    padding-top: 50px;\r\n}"

/***/ }),

/***/ "./src/app/listado/listado.component.html":
/*!************************************************!*\
  !*** ./src/app/listado/listado.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n\n    <select class=\"form-control\" [(ngModel)]=\"user.nombre\" [value]=\"userActual.nombre\" name=\"usuario\" id=\"username\">\n      <option [value]=\"userActual.nombre\">{{userActual.nombre}}</option>\n      <option *ngFor=\"let usuario of userList\" [hidden]=\"userActual.nombre == usuario.nombre\" [value]=\"usuario.nombre\">{{usuario.nombre}}</option>\n    </select>\n\n    <button type=\"submit\" class=\"btn btn-success\" style=\"margin-top: 10px;\">Aceptar</button>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/listado/listado.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listado/listado.component.ts ***!
  \**********************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;

var ListadoComponent = /** @class */ (function () {
    function ListadoComponent(userService) {
        this.userService = userService;
        this.userList = [];
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](0, '', '', '', '', '', '', '', true);
    }
    ListadoComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getUserActual();
        this.user.nombre = this.userActual.nombre;
    };
    ListadoComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) { _this.userList = data; });
    };
    ListadoComponent.prototype.getUserActual = function () {
        this.userActual = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](4, 'Pepe', '', '', '', '', '', '', true);
    };
    ListadoComponent.prototype.onSubmit = function (form) {
        console.log(form.controls.usuario.value);
    };
    ListadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listado',
            template: __webpack_require__(/*! ./listado.component.html */ "./src/app/listado/listado.component.html"),
            styles: [__webpack_require__(/*! ./listado.component.css */ "./src/app/listado/listado.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ListadoComponent);
    return ListadoComponent;
}());



/***/ }),

/***/ "./src/app/registro/registro.component.css":
/*!*************************************************!*\
  !*** ./src/app/registro/registro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row\r\n{\r\n    margin-top: 60px;\r\n}\r\n\r\n.mdl-card__title\r\n{\r\n    height: 150px;\r\n    background-color: #ddd;\r\n}\r\n\r\n.mdl-card\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.mdl-card__title-text\r\n{\r\n    color: #666;\r\n}\r\n\r\n.mdl-card__supporting-text\r\n{\r\n    width: 100%;\r\n    padding-top: 30px;\r\n}\r\n\r\n.btnGuardar\r\n{\r\n    font-size: medium;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n}"

/***/ }),

/***/ "./src/app/registro/registro.component.html":
/*!**************************************************!*\
  !*** ./src/app/registro/registro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col\"></div>\n\n  <div class=\"col-10\">\n\n    <div class=\"demo-card-wide mdl-card mdl-shadow--2dp animated fadeIn\">\n\n      <div class=\"mdl-card__title\">\n        <h2 class=\"mdl-card__title-text\">Registro</h2>\n      </div>\n\n      <div class=\"mdl-card__supporting-text\">\n\n      <form id=\"registroForm\" #registroForm=\"ngForm\" (ngSubmit)=\"onSubmit(registroForm)\">\n\n        <div class=\"form-group col-6 float-left\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\" name=\"nombre\" id=\"nombre\" [(ngModel)]=\"user.nombre\" #nombre=\"ngModel\" required minlength=\"2\">\n          <div *ngIf=\"registroForm.submitted && nombre.invalid\"class=\"text-danger\">\n            <p *ngIf=\"nombre.errors.required\">Nombre requerido</p>\n            <p *ngIf=\"nombre.errors.minlength\">Longitud mínima de 2 carácteres.</p>\n          </div>\n        </div>\n\n        <div class=\"form-group col-6 float-left\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Apellidos\" name=\"apellidos\" id=\"apellidos\" [(ngModel)]=\"user.apellidos\" #apellidos=\"ngModel\" required minlength=\"4\">\n          <div *ngIf=\"registroForm.submitted && apellidos.invalid\"class=\"text-danger\">\n            <p *ngIf=\"apellidos.errors.required\">Apellidos requeridos</p>\n            <p *ngIf=\"apellidos.errors.minlength\">Longitud mínima de 4 carácteres.</p>\n          </div>\n        </div>\n\n      <div class=\"form-group col-6 float-left\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Ciudad\" name=\"ciudad\" id=\"ciudad\" [(ngModel)]=\"user.ciudad\" #ciudad=\"ngModel\" required minlength=\"4\">\n        <div *ngIf=\"registroForm.submitted && ciudad.invalid\"class=\"text-danger\">\n          <p *ngIf=\"ciudad.errors.required\">Ciudad requerida</p>\n          <p *ngIf=\"ciudad.errors.minlength\">Longitud mínima de 4 carácteres.</p>\n        </div>\n      </div>\n\n      <div class=\"form-group col-6 float-left\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Teléfono\" name=\"telefono\" id=\"telefono\" [(ngModel)]=\"user.telefono\" #telefono=\"ngModel\" required pattern=\"(6|7){1}[0-9]{8}\">\n        <div *ngIf=\"registroForm.submitted && telefono.invalid\"class=\"text-danger\">\n          <p>Debe introducir un número real</p>\n        </div>\n      </div>\n\n      <div class=\"form-group col-6 float-left\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" id=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" required pattern=\"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.([a-zA-Z]{2,4})+$\">\n        <div *ngIf=\"registroForm.submitted && email.invalid\"class=\"text-danger\">\n          <p>Debe introducir un email real</p>\n        </div>\n      </div>\n\n      <div class=\"form-group col-6 float-left\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Usuario\" name=\"usuario\" id=\"username\" [(ngModel)]=\"user.usuario\" #usuario=\"ngModel\" required minlength=\"4\">\n        <div *ngIf=\"registroForm.submitted && usuario.invalid\"class=\"text-danger\">\n          <p *ngIf=\"usuario.errors.required\">Usuario requerido</p>\n          <p *ngIf=\"usuario.errors.minlength\">Longitud mínima de 4 carácteres.</p>\n        </div>\n      </div>\n\n      <div class=\"form-group col-6 float-left\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Contraseña\" name=\"password\" id=\"pass\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required pattern=\"^(?=\\w*\\d)(?=\\w*[A-Z])(?=\\w*[a-z])\\S{8,16}$\">\n        <div *ngIf=\"registroForm.submitted && password.invalid\"class=\"text-danger\">\n          <p>Debe contener alguna mayúscula, minúcula y dígito. Longitud entre 8 y 16 carácteres.</p>\n        </div>\n      </div>\n\n      <div class=\"form-group col-3 float-left\">\n          <button type=\"submit\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect white text-capitalize btn-success btn-lg btn-block btnGuardar\">Guardar</button>\n      </div>\n\n      <div class=\"form-group col-3 float-left\">\n          <button type=\"reset\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect white text-capitalize btn-danger btn-lg btn-block btnGuardar\">Limpiar</button>\n      </div>\n\n    </form>\n\n    </div>\n\n  </div>\n\n  </div>\n\n  <div clasS=\"col\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/registro/registro.component.ts":
/*!************************************************!*\
  !*** ./src/app/registro/registro.component.ts ***!
  \************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-service.service */ "./src/app/user-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(userService) {
        this.userService = userService;
        this.userList = [];
        this.user = new _user__WEBPACK_IMPORTED_MODULE_1__["User"](0, '', '', '', '', '', '', '', true);
    }
    RegistroComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    RegistroComponent.prototype.getUsers = function () {
        var _this = this;
        return this.userService.getUsers().subscribe(function (results) { return _this.userList = results; });
    };
    RegistroComponent.prototype.onSubmit = function (form) {
        if (form.valid) {
            var id = this.userList.length + 1;
            var nombre = form.controls.nombre.value;
            var apellidos = form.controls.apellidos.value;
            var ciudad = form.controls.ciudad.value;
            var telefono = form.controls.telefono.value;
            var email = form.controls.email.value;
            var usuario = form.controls.usuario.value;
            var password = form.controls.password.value;
            this.userService.addUser(new _user__WEBPACK_IMPORTED_MODULE_1__["User"](id, nombre, apellidos, ciudad, telefono, email, usuario, password, true)).subscribe();
        }
    };
    RegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/user-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/user-service.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('http://localhost:3000/usuario');
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post('http://localhost:3000/usuario', user.id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, nombre, apellidos, ciudad, telefono, email, usuario, password, active) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.email = email;
        this.usuario = usuario;
        this.password = password;
        this.active = active;
    }
    return User;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Antonio\Desktop\Workspace\appAntonio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map