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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding{\n  padding-top:10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWRkaW5ne1xuICBwYWRkaW5nLXRvcDoxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-top-area></app-top-area>\n</div>\n<div class=\"container-fluid padding\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <app-side-bar></app-side-bar>\n    </div>\n    <div class=\"col-xs-12 col-md-8\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "./src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var _components_top_area_top_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/top-area/top-area.component */ "./src/app/components/top-area/top-area.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_pin_ball_pin_ball_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pin-ball/pin-ball.component */ "./src/app/pages/pin-ball/pin-ball.component.ts");
/* harmony import */ var _pages_view_3d_area_view_3d_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/view-3d-area/view-3d-area.component */ "./src/app/pages/view-3d-area/view-3d-area.component.ts");
/* harmony import */ var _services_page_event_page_event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/page-event/page-event.service */ "./src/app/services/page-event/page-event.service.ts");
/* harmony import */ var _directives_page_animation_page_animation_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/page-animation/page-animation.directive */ "./src/app/directives/page-animation/page-animation.directive.ts");
/* harmony import */ var _directives_page_fixed_page_fixed_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/page-fixed/page-fixed.directive */ "./src/app/directives/page-fixed/page-fixed.directive.ts");
/* harmony import */ var _pages_posteffect_posteffect_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/posteffect/posteffect.component */ "./src/app/pages/posteffect/posteffect.component.ts");
/* harmony import */ var _pages_movie_one_movie_one_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/movie-one/movie-one.component */ "./src/app/pages/movie-one/movie-one.component.ts");















var appRoutes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: '3dview', component: _pages_view_3d_area_view_3d_area_component__WEBPACK_IMPORTED_MODULE_9__["View3dAreaComponent"] },
    { path: 'pinball', component: _pages_pin_ball_pin_ball_component__WEBPACK_IMPORTED_MODULE_8__["PinBallComponent"] },
    { path: 'posteffect', component: _pages_posteffect_posteffect_component__WEBPACK_IMPORTED_MODULE_13__["PosteffectComponent"] },
    { path: 'movie1', component: _pages_movie_one_movie_one_component__WEBPACK_IMPORTED_MODULE_14__["MovieOneComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_view_3d_area_view_3d_area_component__WEBPACK_IMPORTED_MODULE_9__["View3dAreaComponent"],
                _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["SideBarComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _directives_page_animation_page_animation_directive__WEBPACK_IMPORTED_MODULE_11__["PageAnimationDirective"],
                _components_top_area_top_area_component__WEBPACK_IMPORTED_MODULE_6__["TopAreaComponent"],
                _directives_page_fixed_page_fixed_directive__WEBPACK_IMPORTED_MODULE_12__["PageFixedDirective"],
                _directives_page_fixed_page_fixed_directive__WEBPACK_IMPORTED_MODULE_12__["PageFixedSideBarDirective"],
                _pages_pin_ball_pin_ball_component__WEBPACK_IMPORTED_MODULE_8__["PinBallComponent"],
                _pages_posteffect_posteffect_component__WEBPACK_IMPORTED_MODULE_13__["PosteffectComponent"],
                _pages_movie_one_movie_one_component__WEBPACK_IMPORTED_MODULE_14__["MovieOneComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            providers: [_services_page_event_page_event_service__WEBPACK_IMPORTED_MODULE_10__["PageEventService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\n  <a *ngFor=\"let page of pages;let idx = index;\"\n      routerLink=\"{{page.link}}\"\n      routerLinkActive=\"active\"\n      [routerLinkActiveOptions]=\"{ exact: true }\"\n      (click)=\"clickLink(idx)\"\n      class=\"list-group-item\">\n      {{page.name}}\n    </a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_event_page_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-event/page-event.service */ "./src/app/services/page-event/page-event.service.ts");



var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(pageEvent) {
        this.pageEvent = pageEvent;
        this.beforeIndex = 0;
        this.animeState = "";
        this.pages = [
            {
                link: "./",
                name: "Top"
            },
            {
                link: "./3dview",
                name: "3D/fps"
            },
            {
                link: "./pinball",
                name: "3D/pinball"
            },
            {
                link: "./posteffect",
                name: "3D/posteffect"
            },
            {
                link: "./movie1",
                name: "3D/movie1"
            },
        ];
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageEvent.eventData.subscribe(function () {
            _this.pageEvent.sendStateData(_this.animeState);
        });
    };
    SideBarComponent.prototype.clickLink = function (index) {
        if (index < this.beforeIndex) {
            this.animeState = "slideInDown";
        }
        else {
            this.animeState = "slideInUp";
        }
        this.beforeIndex = index;
    };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/components/side-bar/side-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_event_page_event_service__WEBPACK_IMPORTED_MODULE_2__["PageEventService"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/components/top-area/top-area.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/top-area/top-area.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\n  width: 100%;\n  height: 200px;\n}\n.canvas{\n  width: 100% !important;\n  height: 100%;\n  height: 200px;\n  background-color: #FFF;\n  position: relative;\n  z-index: 100;\n}\n.fixed {\n  position: fixed;\n  top: -100px;\n}\n.title{\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  height: 50px;\n  z-index: 100;\n  top:100px;\n}\n.title-text{\n  color: #FFFFFF;\n  font-size: 20px;\n\n}\n.blur {\n  background: #5F5F5F;\n  position: absolute;\n  top:-5px;\n  left: 25%;\n  width: 50%;\n  height: 50px;\n  z-index: 99;\n  -webkit-filter: blur(5px);\n  -moz-filter: blur(5px);\n  -o-filter: blur(5px);\n  -ms-filter: blur(5px);\n  filter: blur(5px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b3AtYXJlYS90b3AtYXJlYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTs7QUFFakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b3AtYXJlYS90b3AtYXJlYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uY2FudmFze1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xufVxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IC0xMDBweDtcbn1cblxuLnRpdGxle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogMTAwO1xuICB0b3A6MTAwcHg7XG59XG4udGl0bGUtdGV4dHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjBweDtcblxufVxuLmJsdXIge1xuICBiYWNrZ3JvdW5kOiAjNUY1RjVGO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDotNXB4O1xuICBsZWZ0OiAyNSU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogOTk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XG4gIC1tb3otZmlsdGVyOiBibHVyKDVweCk7XG4gIC1vLWZpbHRlcjogYmx1cig1cHgpO1xuICAtbXMtZmlsdGVyOiBibHVyKDVweCk7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/top-area/top-area.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/top-area/top-area.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\n    <canvas #canvas appPageFixed class=\"canvas\"></canvas>\n    <!--div appPageFixed class=\"title\">\n      <div class=\"blur\"></div>\n      <p class=\"title-text\">hogehoge</p>\n    <div-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/top-area/top-area.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/top-area/top-area.component.ts ***!
  \***********************************************************/
/*! exports provided: TopAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopAreaComponent", function() { return TopAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paper */ "./node_modules/paper/dist/paper-full.js");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var TopAreaComponent = /** @class */ (function () {
    function TopAreaComponent() {
    }
    TopAreaComponent.prototype.ngOnInit = function () {
        this.scope = new paper__WEBPACK_IMPORTED_MODULE_2__["PaperScope"]();
        this.project = new paper__WEBPACK_IMPORTED_MODULE_2__["Project"](this.canvasElement.nativeElement);
        var canvas = this.canvasElement.nativeElement;
        var pathArray = [];
        var pathAddNumber = [];
        for (var i = 0; i < canvas.scrollWidth / 10; i++) {
            var radius = Math.random() * 35;
            var path = new paper__WEBPACK_IMPORTED_MODULE_2__["Path"].Circle({
                center: [Math.random() * canvas.scrollWidth, Math.random() * canvas.scrollHeight],
                radius: radius,
                fillColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
            });
            pathArray.push(path);
            this.project.activeLayer.addChild(path);
            pathAddNumber[i] = {
                x: Math.random() - 0.5,
                y: Math.random()
            };
        }
        var result = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(10).subscribe(function () {
            for (var i = 0; i < canvas.scrollWidth / 10; i++) {
                if (canvas.scrollHeight < pathArray[i].position.y || pathArray[i].position.y < 0) {
                    pathAddNumber[i].y *= -1;
                }
                if (pathArray[i].position.x > canvas.scrollWidth || pathArray[i].position.x < 0) {
                    pathAddNumber[i].x *= -1;
                }
                pathArray[i].position.y += pathAddNumber[i].y;
                pathArray[i].position.x += pathAddNumber[i].x;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TopAreaComponent.prototype, "canvasElement", void 0);
    TopAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-area',
            template: __webpack_require__(/*! ./top-area.component.html */ "./src/app/components/top-area/top-area.component.html"),
            styles: [__webpack_require__(/*! ./top-area.component.css */ "./src/app/components/top-area/top-area.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopAreaComponent);
    return TopAreaComponent;
}());



/***/ }),

/***/ "./src/app/directives/page-animation/page-animation.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/directives/page-animation/page-animation.directive.ts ***!
  \***********************************************************************/
/*! exports provided: PageAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAnimationDirective", function() { return PageAnimationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_event_page_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-event/page-event.service */ "./src/app/services/page-event/page-event.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var PageAnimationDirective = /** @class */ (function () {
    function PageAnimationDirective(element, pageEvent) {
        this.element = element;
        this.pageEvent = pageEvent;
        var elem = this.element.nativeElement;
        var classList = elem.classList;
        classList.add("animated");
        jquery__WEBPACK_IMPORTED_MODULE_3__("html,body").animate({ scrollTop: 0 }, '500');
    }
    PageAnimationDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.pageEvent.stateData.subscribe(function (className) {
            var elem = _this.element.nativeElement;
            var classList = elem.classList;
            if (className != "") {
                classList.add(className);
            }
        });
        this.pageEvent.sendEventData("ok");
    };
    PageAnimationDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PageAnimationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appPageAnimation]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_page_event_page_event_service__WEBPACK_IMPORTED_MODULE_2__["PageEventService"]])
    ], PageAnimationDirective);
    return PageAnimationDirective;
}());



/***/ }),

/***/ "./src/app/directives/page-fixed/page-fixed.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/directives/page-fixed/page-fixed.directive.ts ***!
  \***************************************************************/
/*! exports provided: PageFixedDirective, PageFixedSideBarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFixedDirective", function() { return PageFixedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFixedSideBarDirective", function() { return PageFixedSideBarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var PageFixedDirective = /** @class */ (function () {
    function PageFixedDirective(element) {
        this.element = element;
        window.addEventListener('scroll', function () {
            var elem = element.nativeElement;
            if (window.pageYOffset > 100) {
                elem.classList.add('fixed');
            }
            else {
                elem.classList.remove('fixed');
            }
        });
    }
    PageFixedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appPageFixed]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], PageFixedDirective);
    return PageFixedDirective;
}());

var PageFixedSideBarDirective = /** @class */ (function () {
    function PageFixedSideBarDirective(element) {
        this.element = element;
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_2__(element.nativeElement);
        window.addEventListener('scroll', function () {
            $sidebar.stop();
            if (window.pageYOffset > 100) {
                $sidebar.animate({ 'padding-top': jquery__WEBPACK_IMPORTED_MODULE_2__(window).scrollTop() - 100 }, '500');
            }
            else {
                $sidebar.animate({ 'padding-top': 0 }, '500');
            }
        });
    }
    PageFixedSideBarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appPageFixedSidebar]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], PageFixedSideBarDirective);
    return PageFixedSideBarDirective;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div appPageAnimation>\n  <p>\n    This page is testing to WebGL by eee_nbnb.\n  </p>\n  <p>\n    Thank you!!\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/movie-one/movie-one.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/movie-one/movie-one.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllLW9uZS9tb3ZpZS1vbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/movie-one/movie-one.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/movie-one/movie-one.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div appPageAnimation>\n  <p>movie1</p>\n  <div style=\"padding:10px\">\n    <div #canvasArea style=\"width:75%;\"></div>\n  </div>\n<div>\n"

/***/ }),

/***/ "./src/app/pages/movie-one/movie-one.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/movie-one/movie-one.component.ts ***!
  \********************************************************/
/*! exports provided: MovieOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieOneComponent", function() { return MovieOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



window.THREE = three__WEBPACK_IMPORTED_MODULE_2__;
__webpack_require__(/*! ../../../../node_modules/three/examples/js/postprocessing/EffectComposer.js */ "./node_modules/three/examples/js/postprocessing/EffectComposer.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/postprocessing/RenderPass.js */ "./node_modules/three/examples/js/postprocessing/RenderPass.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/shaders/CopyShader.js */ "./node_modules/three/examples/js/shaders/CopyShader.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/postprocessing/MaskPass.js */ "./node_modules/three/examples/js/postprocessing/MaskPass.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/postprocessing/ShaderPass.js */ "./node_modules/three/examples/js/postprocessing/ShaderPass.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/shaders/DotScreenShader.js */ "./node_modules/three/examples/js/shaders/DotScreenShader.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/shaders/RGBShiftShader.js */ "./node_modules/three/examples/js/shaders/RGBShiftShader.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/postprocessing/BloomPass.js */ "./node_modules/three/examples/js/postprocessing/BloomPass.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/shaders/DigitalGlitch.js */ "./node_modules/three/examples/js/shaders/DigitalGlitch.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/postprocessing/GlitchPass.js */ "./node_modules/three/examples/js/postprocessing/GlitchPass.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/shaders/ConvolutionShader.js */ "./node_modules/three/examples/js/shaders/ConvolutionShader.js");
var MovieOneComponent = /** @class */ (function () {
    function MovieOneComponent() {
    }
    MovieOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canvasAreaElement = this.canvasArea.nativeElement;
        var rendererSize = this.canvasAreaElement.scrollWidth;
        var heightSize = rendererSize / (16 / 9);
        var renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({ antialias: true });
        var coverObjects = [];
        renderer.setSize(rendererSize, heightSize);
        this.canvasAreaElement.appendChild(renderer.domElement);
        //scene
        var scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0x3e3e3e);
        //camera
        var camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](45, rendererSize / heightSize, 1, 10000);
        camera.position.set(0, 0, 0);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        scene.add(camera);
        //light1
        scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](0xF0F0F0));
        //object
        for (var i = 1; i <= 41; i++) {
            var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](1, 50, 1);
            var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: Math.random() * 0xffffff, emissive: Math.random() * 0xffffff });
            var d = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);
            d.position.set((-21 + i) - 50, -50, -10);
            //d.lookAt(camera.position)
            d.rotation.z = -Math.PI / 4;
            scene.add(d);
            coverObjects.push({ item: d, isMoved: false });
        }
        //effect
        var composer = new window.THREE.EffectComposer(renderer);
        composer.setSize(rendererSize, rendererSize);
        composer.addPass(new window.THREE.RenderPass(scene, camera));
        //composer.addPass( new (window as any).THREE.BloomPass(1.0, 25, 1.0, 512) );
        var effectDotScreen = new window.THREE.ShaderPass(window.THREE.DotScreenShader);
        effectDotScreen.uniforms['scale'].value = 2;
        //composer.addPass( effectDotScreen );
        var effectRGBShift = new window.THREE.ShaderPass(window.THREE.RGBShiftShader);
        effectRGBShift.uniforms['amount'].value = 0.01;
        effectRGBShift.renderToScreen = true;
        //composer.addPass( effectRGBShift );
        var effectGlitch = new window.THREE.GlitchPass(128);
        effectGlitch.renderToScreen = true;
        effectGlitch.goWild = true;
        //composer.addPass(effectGlitch);
        var toScreen = new window.THREE.ShaderPass(window.THREE.CopyShader);
        toScreen.renderToScreen = true;
        composer.addPass(toScreen);
        var dg = 0;
        var circleDg = 0;
        var isAddGlith = false;
        var tick = function () {
            _this.animationFrame = requestAnimationFrame(tick);
            dg += 0.125;
            if (coverObjects.filter(function (d) { return d.isMoved == false; }).length >= 10) {
                coverObjects.forEach(function (d, i) {
                    if (i < dg && d.item.position.y < 0 && !d.isMoved) {
                        d.item.position.y += 1;
                        d.item.position.x += 1;
                    }
                    if (d.item.position.y >= 0) {
                        d.isMoved = true;
                    }
                });
            }
            else {
                if (!isAddGlith) {
                    composer.addPass(effectGlitch);
                    isAddGlith = true;
                }
            }
            circleDg += 0.025;
            composer.render();
            //renderer.render(scene, camera);
        };
        tick();
    };
    MovieOneComponent.prototype.ngOnDestroy = function () {
        cancelAnimationFrame(this.animationFrame);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasArea'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MovieOneComponent.prototype, "canvasArea", void 0);
    MovieOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-one',
            template: __webpack_require__(/*! ./movie-one.component.html */ "./src/app/pages/movie-one/movie-one.component.html"),
            styles: [__webpack_require__(/*! ./movie-one.component.css */ "./src/app/pages/movie-one/movie-one.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieOneComponent);
    return MovieOneComponent;
}());



/***/ }),

/***/ "./src/app/pages/pin-ball/pin-ball.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/pin-ball/pin-ball.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bpbi1iYWxsL3Bpbi1iYWxsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/pin-ball/pin-ball.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/pin-ball/pin-ball.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div appPageAnimation>\n  <p>This is PinBall.Play to click to canvas.</p>\n  <div style=\"padding:10px\">\n    <div #canvasArea style=\"width:75%;\"></div>\n  </div>\n<div>\n"

/***/ }),

/***/ "./src/app/pages/pin-ball/pin-ball.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/pin-ball/pin-ball.component.ts ***!
  \******************************************************/
/*! exports provided: PinBallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinBallComponent", function() { return PinBallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



var PinBallComponent = /** @class */ (function () {
    function PinBallComponent() {
    }
    PinBallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canvasAreaElement = this.canvasArea.nativeElement;
        var rendererSize = this.canvasAreaElement.scrollWidth;
        var xObjects = [];
        var barObjects = [];
        var deleteObjects = [];
        var ballMoveAmout = {
            x: 0.5,
            z: 0.5
        };
        var barMoveAmout = {
            x: 0.0,
            startD: 0
        };
        var dg = 0;
        var renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]();
        renderer.setSize(rendererSize, rendererSize);
        this.canvasAreaElement.appendChild(renderer.domElement);
        //scene
        var scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0x5e5e5e);
        //scene.add( new THREE.GridHelper( 1000, 1000 ) );
        //scene.add( new THREE.AxisHelper(20) );
        //camera
        var camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](45, rendererSize / rendererSize, 1, 10000);
        camera.position.set(0, 150, 0);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        scene.add(camera);
        //light
        //scene.add( new THREE.AmbientLight( 0xF0F0F0 ) );
        var light = new three__WEBPACK_IMPORTED_MODULE_2__["PointLight"](0x000000, 1, 100);
        light.position.set(0, 0, 10);
        scene.add(light);
        var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["IcosahedronGeometry"](1, 5);
        var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0x000000, emissive: 0xf0f0f0 });
        var ball = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);
        ball.position.set(0, 0.5, -39);
        scene.add(ball);
        var barGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](10, 2, 1);
        var barMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0x000000, emissive: 0xf0f0f0 });
        var bar = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](barGeometry, barMaterial);
        bar.position.set(0, 1, -40);
        scene.add(bar);
        barObjects.push(bar);
        //foller
        {
            var geometry_1 = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](40, 0, 100);
            var material_1 = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0xf0f0f0 });
            var box = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry_1, material_1);
            box.position.set(0, 0, 0);
            scene.add(box);
        }
        //side
        {
            var boxGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](1, 2, 100);
            var material_2 = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0x000000, emissive: 0xfefefe });
            var leftBar = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](boxGeometry, material_2);
            var rightBar = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](boxGeometry, material_2);
            leftBar.position.set(20, 1, 0);
            rightBar.position.set(-20, 1, 0);
            scene.add(leftBar);
            scene.add(rightBar);
            xObjects.push(leftBar);
            xObjects.push(rightBar);
        }
        //front back
        {
            var boxGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](41, 2, 1);
            var material_3 = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0xfefefe, emissive: 0xfefefe });
            var upBar = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](boxGeometry, material_3);
            var underBar = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](boxGeometry, material_3);
            upBar.position.set(0, 1, 50);
            underBar.position.set(0, 1, -50);
            scene.add(upBar);
            scene.add(underBar);
        }
        for (var i = 0; i < 10; i++) {
            var geometry_2 = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](5, 1, 5);
            var material_4 = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0xff0000, emissive: 0xff0000 });
            for (var j = 0; j < 8; j++) {
                var d = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry_2, material_4);
                d.position.set(17 - j * 5, 0.5, 47 - i * 5);
                scene.add(d);
                deleteObjects.push(d);
            }
        }
        window.addEventListener('keydown', function (e) {
            barMoveAmout.startD = 0;
            switch (e.code) {
                case "ArrowRight":
                    barMoveAmout.x = -1;
                    break;
                case "ArrowLeft":
                    barMoveAmout.x = 1;
                    break;
            }
        });
        window.addEventListener('keyup', function (e) {
            switch (e.code) {
                case "ArrowRight":
                case "ArrowLeft":
                    barMoveAmout.startD = 1;
                    break;
            }
        });
        renderer.domElement.addEventListener('click', function () {
            cancelAnimationFrame(_this.animationFrame);
            tick();
        });
        var tick = function () {
            var ballRay = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"](ball.position, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0).sub(ball.position).normalize());
            var barRay = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"](bar.position, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, -40).sub(bar.position).normalize());
            var intersections = ballRay.intersectObjects(deleteObjects);
            var ballBarIntersections = ballRay.intersectObjects(barObjects);
            var barIntersections = barRay.intersectObjects(xObjects);
            if (ball.position.x > 19.5 || ball.position.x < -19.5) {
                ballMoveAmout.x *= -1;
            }
            if (ball.position.z > 49.5 || ball.position.z < -49.5) {
                ballMoveAmout.z *= -1;
            }
            if (intersections.length > 0) {
                if (intersections[0].distance < 2.5 + Math.abs(ballMoveAmout.x)) {
                    ballMoveAmout.x *= -1;
                    ballMoveAmout.z *= -1;
                    intersections[0].object.visible = false;
                }
            }
            if (ballBarIntersections.length > 0) {
                if (ballBarIntersections[0].distance < 1) {
                    ballMoveAmout.x = ballMoveAmout.x > 0 ? 1 : -1 * (Math.abs(barMoveAmout.x));
                    ballMoveAmout.z *= -1;
                }
            }
            bar.position.x += barMoveAmout.x;
            if (bar.position.x > 15) {
                bar.position.x = 15;
            }
            if (bar.position.x < -15) {
                bar.position.x = -15;
            }
            if (barMoveAmout.x > 0 && barMoveAmout.startD == 1) {
                barMoveAmout.x -= 0.1;
            }
            if (barMoveAmout.x < 0 && barMoveAmout.startD == 1) {
                barMoveAmout.x += 0.1;
            }
            if (barMoveAmout.x < 0.2 && barMoveAmout.x > -0.2 && barMoveAmout.startD == 1) {
                barMoveAmout.x = 0.0;
            }
            ball.position.x += ballMoveAmout.x;
            ball.position.z += ballMoveAmout.z;
            dg += 0.25;
            camera.position.x = Math.cos(three__WEBPACK_IMPORTED_MODULE_2__["Math"].degToRad(dg)) * 100;
            camera.position.z = Math.sin(three__WEBPACK_IMPORTED_MODULE_2__["Math"].degToRad(dg)) * 100;
            camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
            _this.animationFrame = requestAnimationFrame(tick);
            renderer.render(scene, camera);
        };
    };
    PinBallComponent.prototype.ngOnDestroy = function () {
        cancelAnimationFrame(this.animationFrame);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasArea'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PinBallComponent.prototype, "canvasArea", void 0);
    PinBallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pin-ball',
            template: __webpack_require__(/*! ./pin-ball.component.html */ "./src/app/pages/pin-ball/pin-ball.component.html"),
            styles: [__webpack_require__(/*! ./pin-ball.component.css */ "./src/app/pages/pin-ball/pin-ball.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PinBallComponent);
    return PinBallComponent;
}());



/***/ }),

/***/ "./src/app/pages/posteffect/posteffect.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/posteffect/posteffect.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RlZmZlY3QvcG9zdGVmZmVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/posteffect/posteffect.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/posteffect/posteffect.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div appPageAnimation>\n  <p>This is posteffect sandbox.</p>\n  <div style=\"padding:10px\">\n    <div #canvasArea style=\"width:75%;\"></div>\n  </div>\n<div>\n"

/***/ }),

/***/ "./src/app/pages/posteffect/posteffect.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/posteffect/posteffect.component.ts ***!
  \**********************************************************/
/*! exports provided: PosteffectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosteffectComponent", function() { return PosteffectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



window.THREE = three__WEBPACK_IMPORTED_MODULE_2__;
__webpack_require__(/*! ../../../../node_modules/three/examples/js/postprocessing/EffectComposer.js */ "./node_modules/three/examples/js/postprocessing/EffectComposer.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/postprocessing/RenderPass.js */ "./node_modules/three/examples/js/postprocessing/RenderPass.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/shaders/CopyShader.js */ "./node_modules/three/examples/js/shaders/CopyShader.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/postprocessing/MaskPass.js */ "./node_modules/three/examples/js/postprocessing/MaskPass.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/postprocessing/ShaderPass.js */ "./node_modules/three/examples/js/postprocessing/ShaderPass.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/shaders/DotScreenShader.js */ "./node_modules/three/examples/js/shaders/DotScreenShader.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/shaders/RGBShiftShader.js */ "./node_modules/three/examples/js/shaders/RGBShiftShader.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/postprocessing/BloomPass.js */ "./node_modules/three/examples/js/postprocessing/BloomPass.js");
__webpack_require__(/*! ../../../../node_modules/three/examples/js/shaders/ConvolutionShader.js */ "./node_modules/three/examples/js/shaders/ConvolutionShader.js");
var PosteffectComponent = /** @class */ (function () {
    function PosteffectComponent() {
    }
    PosteffectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canvasAreaElement = this.canvasArea.nativeElement;
        var rendererSize = this.canvasAreaElement.scrollWidth;
        var renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({ antialias: true });
        var boxObjects = [];
        var upBoxObjects = [];
        renderer.setSize(rendererSize, rendererSize);
        this.canvasAreaElement.appendChild(renderer.domElement);
        //scene
        var scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xf0f0f0);
        //scene.add( new THREE.GridHelper( 1000, 1000 ) );
        //scene.add( new THREE.AxisHelper(20) );
        //camera
        var camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](45, rendererSize / rendererSize, 1, 10000);
        camera.position.set(5, 50, -50);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        scene.add(camera);
        //light1
        //scene.add( new THREE.AmbientLight( 0xF0F0F0 ) );
        for (var i = 0; i < 100; i++) {
            var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](0.5, 0.5, 0.5);
            var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: Math.random() * 0xffffff, emissive: Math.random() * 0xffffff });
            var d = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);
            d.position.set(0, i / 10, 0);
            scene.add(d);
            boxObjects.push(d);
        }
        for (var i = 0; i < boxObjects.length; i++) {
            var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](0.5, 0.5, 0.5);
            var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: Math.random() * 0xffffff, emissive: Math.random() * 0xffffff });
            var d = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);
            d.position.set(0, (boxObjects.length + i) / 10, 0);
            scene.add(d);
            upBoxObjects.push(d);
        }
        for (var i = 0; i < 500; i++) {
            var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](0.1, 0.1, 0.1);
            var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0x000000, emissive: Math.random() * 0x000000 });
            var d = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);
            d.position.set((Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50);
            scene.add(d);
        }
        //effect
        var composer = new window.THREE.EffectComposer(renderer);
        composer.setSize(rendererSize, rendererSize);
        composer.addPass(new window.THREE.RenderPass(scene, camera));
        composer.addPass(new window.THREE.BloomPass(1.0, 25, 1.0, 512));
        var effectDotScreen = new window.THREE.ShaderPass(window.THREE.DotScreenShader);
        effectDotScreen.uniforms['scale'].value = 2;
        //composer.addPass( effectDotScreen );
        var effectRGBShift = new window.THREE.ShaderPass(window.THREE.RGBShiftShader);
        effectRGBShift.uniforms['amount'].value = 0.01;
        effectRGBShift.renderToScreen = true;
        composer.addPass(effectRGBShift);
        //var toScreen = new (window as any).THREE.ShaderPass( (window as any).THREE.CopyShader );
        //toScreen.renderToScreen = true;
        //composer.addPass( toScreen );
        var dg = 0;
        var circleDg = 0;
        var tick = function () {
            _this.animationFrame = requestAnimationFrame(tick);
            dg += 1;
            circleDg += 0.025;
            camera.position.x = Math.cos(three__WEBPACK_IMPORTED_MODULE_2__["Math"].degToRad(dg)) * 30;
            camera.position.z = Math.sin(three__WEBPACK_IMPORTED_MODULE_2__["Math"].degToRad(dg)) * 30;
            camera.position.y = Math.sin(three__WEBPACK_IMPORTED_MODULE_2__["Math"].degToRad(dg)) * 30;
            camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, boxObjects.length / 10, 0));
            boxObjects.forEach(function (v, i) {
                v.position.x = Math.cos(three__WEBPACK_IMPORTED_MODULE_2__["Math"].degToRad(circleDg * i)) * Math.sqrt((Math.pow(boxObjects.length / 10, 2) - Math.pow((boxObjects.length - i) / 10, 2)));
                v.position.z = Math.sin(three__WEBPACK_IMPORTED_MODULE_2__["Math"].degToRad(circleDg * i)) * Math.sqrt((Math.pow(boxObjects.length / 10, 2) - Math.pow((boxObjects.length - i) / 10, 2)));
            });
            upBoxObjects.forEach(function (v, i) {
                v.position.x = Math.cos(three__WEBPACK_IMPORTED_MODULE_2__["Math"].degToRad(circleDg * (i + boxObjects.length))) * Math.sqrt((Math.pow(boxObjects.length / 10, 2) - Math.pow(i / 10, 2)));
                v.position.z = Math.sin(three__WEBPACK_IMPORTED_MODULE_2__["Math"].degToRad(circleDg * (i + boxObjects.length))) * Math.sqrt((Math.pow(boxObjects.length / 10, 2) - Math.pow(i / 10, 2)));
            });
            composer.render();
            //renderer.render(scene, camera);
        };
        tick();
    };
    PosteffectComponent.prototype.ngOnDestroy = function () {
        cancelAnimationFrame(this.animationFrame);
        this.canvasAreaElement.removeEventListener('click', function (e) { console.log(e); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasArea'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PosteffectComponent.prototype, "canvasArea", void 0);
    PosteffectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posteffect',
            template: __webpack_require__(/*! ./posteffect.component.html */ "./src/app/pages/posteffect/posteffect.component.html"),
            styles: [__webpack_require__(/*! ./posteffect.component.css */ "./src/app/pages/posteffect/posteffect.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PosteffectComponent);
    return PosteffectComponent;
}());



/***/ }),

/***/ "./src/app/pages/view-3d-area/view-3d-area.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/view-3d-area/view-3d-area.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXctM2QtYXJlYS92aWV3LTNkLWFyZWEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/view-3d-area/view-3d-area.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/view-3d-area/view-3d-area.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>This is PointerLockControls.Play to click to canvas.</p>\n  <div style=\"padding:10px\">\n    <div #canvasArea style=\"width:75%;\"></div>\n  </div>\n<div>\n"

/***/ }),

/***/ "./src/app/pages/view-3d-area/view-3d-area.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/view-3d-area/view-3d-area.component.ts ***!
  \**************************************************************/
/*! exports provided: View3dAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View3dAreaComponent", function() { return View3dAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



window.THREE = three__WEBPACK_IMPORTED_MODULE_2__;
__webpack_require__(/*! ../../../../node_modules/three/examples/js/controls/PointerLockControls */ "./node_modules/three/examples/js/controls/PointerLockControls.js");
var View3dAreaComponent = /** @class */ (function () {
    function View3dAreaComponent() {
    }
    View3dAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canvasAreaElement = this.canvasArea.nativeElement;
        var rendererSize = this.canvasAreaElement.scrollWidth;
        var renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]();
        renderer.setSize(rendererSize, rendererSize);
        this.canvasAreaElement.appendChild(renderer.domElement);
        //scene
        var scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xf0f0f0);
        scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["GridHelper"](1000, 1000));
        scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["AxisHelper"](20));
        //camera
        var camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](45, rendererSize / rendererSize, 1, 100000);
        camera.position.set(0, 1.7, -1.5);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 1.7, 0));
        scene.add(camera);
        //light
        scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](0xF0F0F0));
        var controls = new window.THREE.PointerLockControls(camera);
        scene.add(controls.getObject());
        var tick = function () {
            _this.animationFrame = requestAnimationFrame(tick);
            renderer.render(scene, camera);
        };
        tick();
        this.canvasAreaElement.addEventListener('click', function (event) {
            var element = _this.canvasAreaElement;
            element.requestPointerLock = element.requestPointerLock;
            element.requestPointerLock();
        }, false);
        document.addEventListener('pointerlockchange', function (e) {
            if (document.pointerLockElement == _this.canvasAreaElement) {
                controls.enabled = true;
            }
            else {
                controls.enabled = false;
            }
        }, false);
    };
    View3dAreaComponent.prototype.ngOnDestroy = function () {
        cancelAnimationFrame(this.animationFrame);
        this.canvasAreaElement.removeEventListener('click', function (e) { console.log(e); });
        document.removeEventListener('pointerlockchange', function (e) { console.log(e); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasArea'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], View3dAreaComponent.prototype, "canvasArea", void 0);
    View3dAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-3d-area',
            template: __webpack_require__(/*! ./view-3d-area.component.html */ "./src/app/pages/view-3d-area/view-3d-area.component.html"),
            styles: [__webpack_require__(/*! ./view-3d-area.component.css */ "./src/app/pages/view-3d-area/view-3d-area.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], View3dAreaComponent);
    return View3dAreaComponent;
}());



/***/ }),

/***/ "./src/app/services/page-event/page-event.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/page-event/page-event.service.ts ***!
  \***********************************************************/
/*! exports provided: PageEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEventService", function() { return PageEventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");



var PageEventService = /** @class */ (function () {
    function PageEventService() {
        this.eventSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stateSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.eventData = this.eventSource.asObservable();
        this.stateData = this.stateSource.asObservable();
    }
    PageEventService.prototype.sendEventData = function (msg) {
        this.eventSource.next(msg);
    };
    PageEventService.prototype.sendStateData = function (msg) {
        this.stateSource.next(msg);
    };
    PageEventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageEventService);
    return PageEventService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! /Users/eee/Desktop/work/sandbox3d/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./node/self.js (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************************!*\
  !*** ./node/extend.js (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map