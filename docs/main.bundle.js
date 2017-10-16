webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".padding{\r\n  padding-top:10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-top-area></app-top-area>\r\n</div>\r\n<div class=\"container-fluid padding\">\r\n  <div class=\"row\">\r\n    <div class=\"hidden-xs col-md-4\">\r\n      <app-side-bar></app-side-bar>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-8\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_top_area_top_area_component__ = __webpack_require__("../../../../../src/app/components/top-area/top-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pin_ball_pin_ball_component__ = __webpack_require__("../../../../../src/app/pages/pin-ball/pin-ball.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_view_3d_area_view_3d_area_component__ = __webpack_require__("../../../../../src/app/pages/view-3d-area/view-3d-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_page_event_page_event_service__ = __webpack_require__("../../../../../src/app/services/page-event/page-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_page_animation_page_animation_directive__ = __webpack_require__("../../../../../src/app/directives/page-animation/page-animation.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_page_fixed_page_fixed_directive__ = __webpack_require__("../../../../../src/app/directives/page-fixed/page-fixed.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */] },
    { path: '3dview', component: __WEBPACK_IMPORTED_MODULE_8__pages_view_3d_area_view_3d_area_component__["a" /* View3dAreaComponent */] },
    { path: 'pinball', component: __WEBPACK_IMPORTED_MODULE_7__pages_pin_ball_pin_ball_component__["a" /* PinBallComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_view_3d_area_view_3d_area_component__["a" /* View3dAreaComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__directives_page_animation_page_animation_directive__["a" /* PageAnimationDirective */],
            __WEBPACK_IMPORTED_MODULE_5__components_top_area_top_area_component__["a" /* TopAreaComponent */],
            __WEBPACK_IMPORTED_MODULE_11__directives_page_fixed_page_fixed_directive__["a" /* PageFixedDirective */],
            __WEBPACK_IMPORTED_MODULE_11__directives_page_fixed_page_fixed_directive__["b" /* PageFixedSideBarDirective */],
            __WEBPACK_IMPORTED_MODULE_7__pages_pin_ball_pin_ball_component__["a" /* PinBallComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_page_event_page_event_service__["a" /* PageEventService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\" appPageFixedSidebar>\r\n  <a *ngFor=\"let page of pages;let idx = index;\"\r\n      routerLink=\"{{page.link}}\"\r\n      routerLinkActive=\"active\"\r\n      [routerLinkActiveOptions]=\"{ exact: true }\"\r\n      (click)=\"clickLink(idx)\"\r\n      class=\"list-group-item\">\r\n      {{page.name}}\r\n    </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_event_page_event_service__ = __webpack_require__("../../../../../src/app/services/page-event/page-event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarComponent = (function () {
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
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-side-bar',
        template: __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_event_page_event_service__["a" /* PageEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_event_page_event_service__["a" /* PageEventService */]) === "function" && _a || Object])
], SideBarComponent);

var _a;
//# sourceMappingURL=side-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/top-area/top-area.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top{\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n.canvas{\r\n  width: 100%;\r\n  height: 100%;\r\n  height: 200px;\r\n  background-color: #FFF;\r\n  position: relative;\r\n  z-index: 100;\r\n}\r\n.fixed {\r\n  position: fixed;\r\n  top: -100px;\r\n}\r\n\r\n.title{\r\n  position: absolute;\r\n  width: 100%;\r\n  text-align: center;\r\n  height: 50px;\r\n  z-index: 100;\r\n  top:100px;\r\n}\r\n.title-text{\r\n  color: #FFFFFF;\r\n  font-size: 20px;\r\n\r\n}\r\n.blur {\r\n  background: #5F5F5F;\r\n  position: absolute;\r\n  top:-5px;\r\n  left: 25%;\r\n  width: 50%;\r\n  height: 50px;\r\n  z-index: 99;\r\n  -webkit-filter: blur(5px);\r\n  -moz-filter: blur(5px);\r\n  -o-filter: blur(5px);\r\n  -ms-filter: blur(5px);\r\n  filter: blur(5px);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/top-area/top-area.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\r\n    <canvas #canvas appPageFixed class=\"canvas\"></canvas>\r\n    <!--div appPageFixed class=\"title\">\r\n      <div class=\"blur\"></div>\r\n      <p class=\"title-text\">hogehoge</p>\r\n    <div-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/top-area/top-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_paper__ = __webpack_require__("../../../../paper/dist/paper-full.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_paper__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopAreaComponent = (function () {
    function TopAreaComponent() {
    }
    TopAreaComponent.prototype.ngOnInit = function () {
        this.scope = new __WEBPACK_IMPORTED_MODULE_1_paper__["PaperScope"]();
        this.project = new __WEBPACK_IMPORTED_MODULE_1_paper__["Project"](this.canvasElement.nativeElement);
        var canvas = this.canvasElement.nativeElement;
        var pathArray = [];
        var pathAddNumber = [];
        for (var i = 0; i < 100; i++) {
            var radius = Math.random() * 35;
            var path = new __WEBPACK_IMPORTED_MODULE_1_paper__["Path"].Circle({
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
        setInterval(function () {
            for (var i = 0; i < 100; i++) {
                if (canvas.scrollHeight < pathArray[i].position.y || pathArray[i].position.y < 0) {
                    pathAddNumber[i].y *= -1;
                }
                if (pathArray[i].position.x > canvas.scrollWidth || pathArray[i].position.x < 0) {
                    pathAddNumber[i].x *= -1;
                }
                pathArray[i].position.y += pathAddNumber[i].y;
                pathArray[i].position.x += pathAddNumber[i].x;
            }
        }, 1);
    };
    return TopAreaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('canvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], TopAreaComponent.prototype, "canvasElement", void 0);
TopAreaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-top-area',
        template: __webpack_require__("../../../../../src/app/components/top-area/top-area.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/top-area/top-area.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TopAreaComponent);

var _a;
//# sourceMappingURL=top-area.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/page-animation/page-animation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageAnimationDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_event_page_event_service__ = __webpack_require__("../../../../../src/app/services/page-event/page-event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageAnimationDirective = (function () {
    function PageAnimationDirective(element, pageEvent) {
        this.element = element;
        this.pageEvent = pageEvent;
        var elem = this.element.nativeElement;
        var classList = elem.classList;
        classList.add("animated");
        __WEBPACK_IMPORTED_MODULE_2_jquery__("html,body").animate({ scrollTop: 0 }, '500');
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
    return PageAnimationDirective;
}());
PageAnimationDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appPageAnimation]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_event_page_event_service__["a" /* PageEventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_event_page_event_service__["a" /* PageEventService */]) === "function" && _b || Object])
], PageAnimationDirective);

var _a, _b;
//# sourceMappingURL=page-animation.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/page-fixed/page-fixed.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFixedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageFixedSideBarDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageFixedDirective = (function () {
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
    return PageFixedDirective;
}());
PageFixedDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appPageFixed]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], PageFixedDirective);

var PageFixedSideBarDirective = (function () {
    function PageFixedSideBarDirective(element) {
        this.element = element;
        var $sidebar = __WEBPACK_IMPORTED_MODULE_1_jquery__(element.nativeElement);
        window.addEventListener('scroll', function () {
            $sidebar.stop();
            if (window.pageYOffset > 100) {
                $sidebar.animate({ 'padding-top': __WEBPACK_IMPORTED_MODULE_1_jquery__(window).scrollTop() - 100 }, '500');
            }
            else {
                $sidebar.animate({ 'padding-top': 0 }, '500');
            }
        });
    }
    return PageFixedSideBarDirective;
}());
PageFixedSideBarDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appPageFixedSidebar]'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], PageFixedSideBarDirective);

var _a, _b;
//# sourceMappingURL=page-fixed.directive.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div appPageAnimation>\r\n  <p>\r\n    This page is testing to WebGL by eee_nbnb.\r\n  </p>\r\n  <p>\r\n    Thank you!!\r\n  </p>\r\n  <p style=\"height:1000px\">\r\n    すごく下に長いテキスト\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pin-ball/pin-ball.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pin-ball/pin-ball.component.html":
/***/ (function(module, exports) {

module.exports = "<div appPageAnimation>\n  <p>This is PinBall.Play to click to canvas.</p>\n  <div style=\"padding:10px\">\n    <div #canvasArea style=\"width:75%;\"></div>\n  </div>\n<div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/pin-ball/pin-ball.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinBallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PinBallComponent = (function () {
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
        var renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]();
        renderer.setSize(rendererSize, rendererSize);
        this.canvasAreaElement.appendChild(renderer.domElement);
        //scene
        var scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0x5e5e5e);
        //scene.add( new THREE.GridHelper( 1000, 1000 ) );
        //scene.add( new THREE.AxisHelper(20) );
        //camera
        var camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](45, rendererSize / rendererSize, 1, 10000);
        camera.position.set(0, 150, 0);
        camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        scene.add(camera);
        //light
        //scene.add( new THREE.AmbientLight( 0xF0F0F0 ) );
        var light = new __WEBPACK_IMPORTED_MODULE_1_three__["PointLight"](0x000000, 1, 100);
        light.position.set(0, 0, 10);
        scene.add(light);
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["IcosahedronGeometry"](1, 5);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x000000, emissive: 0xf0f0f0 });
        var ball = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry, material);
        ball.position.set(0, 0.5, -39);
        scene.add(ball);
        var barGeometry = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](10, 2, 1);
        var barMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x000000, emissive: 0xf0f0f0 });
        var bar = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](barGeometry, barMaterial);
        bar.position.set(0, 1, -40);
        scene.add(bar);
        barObjects.push(bar);
        //foller
        {
            var geometry_1 = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](40, 0, 100);
            var material_1 = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0xf0f0f0 });
            var box = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry_1, material_1);
            box.position.set(0, 0, 0);
            scene.add(box);
        }
        //side
        {
            var boxGeometry = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](1, 2, 100);
            var material_2 = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x000000, emissive: 0xfefefe });
            var leftBar = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](boxGeometry, material_2);
            var rightBar = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](boxGeometry, material_2);
            leftBar.position.set(20, 1, 0);
            rightBar.position.set(-20, 1, 0);
            scene.add(leftBar);
            scene.add(rightBar);
            xObjects.push(leftBar);
            xObjects.push(rightBar);
        }
        //front back
        {
            var boxGeometry = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](41, 2, 1);
            var material_3 = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0xfefefe, emissive: 0xfefefe });
            var upBar = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](boxGeometry, material_3);
            var underBar = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](boxGeometry, material_3);
            upBar.position.set(0, 1, 50);
            underBar.position.set(0, 1, -50);
            scene.add(upBar);
            scene.add(underBar);
        }
        for (var i = 0; i < 10; i++) {
            var geometry_2 = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](5, 1, 5);
            var material_4 = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0xff0000, emissive: 0xff0000 });
            for (var j = 0; j < 8; j++) {
                var d = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geometry_2, material_4);
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
            var ballRay = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"](ball.position, new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0).sub(ball.position).normalize());
            var barRay = new __WEBPACK_IMPORTED_MODULE_1_three__["Raycaster"](bar.position, new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, -40).sub(bar.position).normalize());
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
            camera.position.x = Math.cos(__WEBPACK_IMPORTED_MODULE_1_three__["Math"].degToRad(dg)) * 100;
            camera.position.z = Math.sin(__WEBPACK_IMPORTED_MODULE_1_three__["Math"].degToRad(dg)) * 100;
            camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
            _this.animationFrame = requestAnimationFrame(tick);
            renderer.render(scene, camera);
        };
    };
    PinBallComponent.prototype.ngOnDestroy = function () {
        cancelAnimationFrame(this.animationFrame);
    };
    return PinBallComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('canvasArea'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], PinBallComponent.prototype, "canvasArea", void 0);
PinBallComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pin-ball',
        template: __webpack_require__("../../../../../src/app/pages/pin-ball/pin-ball.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/pin-ball/pin-ball.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PinBallComponent);

var _a;
//# sourceMappingURL=pin-ball.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/view-3d-area/view-3d-area.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/view-3d-area/view-3d-area.component.html":
/***/ (function(module, exports) {

module.exports = "<div appPageAnimation>\n  <p>This is PointerLockControls.Play to click to canvas.</p>\n  <div style=\"padding:10px\">\n    <div #canvasArea style=\"width:75%;\"></div>\n  </div>\n<div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/view-3d-area/view-3d-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View3dAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


window.THREE = __WEBPACK_IMPORTED_MODULE_1_three__;
__webpack_require__("../../../../three/examples/js/controls/PointerLockControls.js");
var View3dAreaComponent = (function () {
    function View3dAreaComponent() {
    }
    View3dAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canvasAreaElement = this.canvasArea.nativeElement;
        var rendererSize = this.canvasAreaElement.scrollWidth;
        var renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]();
        renderer.setSize(rendererSize, rendererSize);
        this.canvasAreaElement.appendChild(renderer.domElement);
        //scene
        var scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        scene.background = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"](0xf0f0f0);
        scene.add(new __WEBPACK_IMPORTED_MODULE_1_three__["GridHelper"](1000, 1000));
        scene.add(new __WEBPACK_IMPORTED_MODULE_1_three__["AxisHelper"](20));
        //camera
        var camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](45, rendererSize / rendererSize, 1, 100000);
        camera.position.set(0, 1.7, -1.5);
        camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 1.7, 0));
        scene.add(camera);
        //light
        scene.add(new __WEBPACK_IMPORTED_MODULE_1_three__["AmbientLight"](0xF0F0F0));
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
    return View3dAreaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('canvasArea'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], View3dAreaComponent.prototype, "canvasArea", void 0);
View3dAreaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-view-3d-area',
        template: __webpack_require__("../../../../../src/app/pages/view-3d-area/view-3d-area.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/view-3d-area/view-3d-area.component.css")]
    }),
    __metadata("design:paramtypes", [])
], View3dAreaComponent);

var _a;
//# sourceMappingURL=view-3d-area.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/page-event/page-event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageEventService = (function () {
    function PageEventService() {
        this.eventSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.stateSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.eventData = this.eventSource.asObservable();
        this.stateData = this.stateSource.asObservable();
    }
    PageEventService.prototype.sendEventData = function (msg) {
        this.eventSource.next(msg);
    };
    PageEventService.prototype.sendStateData = function (msg) {
        this.stateSource.next(msg);
    };
    return PageEventService;
}());
PageEventService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PageEventService);

//# sourceMappingURL=page-event.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map