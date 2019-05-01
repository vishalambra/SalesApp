(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/private/add-team/add-team.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/private/add-team/add-team.component.html":
/***/ (function(module, exports) {

module.exports = "<Button text=\"add-team works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/private/add-team/add-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeamComponent", function() { return AddTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/team.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTeamComponent = /** @class */ (function () {
    function AddTeamComponent(teamservice, fb) {
        this.teamservice = teamservice;
        this.fb = fb;
        // addForm 
        this.addTeamForm = this.fb.group({
            team: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    AddTeamComponent.prototype.ngOnInit = function () {
    };
    AddTeamComponent.prototype.addTeam = function (data) {
        this.teamservice.addTeam(this.addTeam).subscribe(function (res) {
        });
    };
    AddTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-team',
            template: __webpack_require__("./app/private/add-team/add-team.component.html"),
            styles: [__webpack_require__("./app/private/add-team/add-team.component.css")]
        }),
        __metadata("design:paramtypes", [_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddTeamComponent);
    return AddTeamComponent;
}());



/***/ }),

/***/ "./app/private/edit-team/edit-team.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/private/edit-team/edit-team.component.html":
/***/ (function(module, exports) {

module.exports = "<Button text=\"edit-team works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/private/edit-team/edit-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamComponent", function() { return EditTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditTeamComponent = /** @class */ (function () {
    function EditTeamComponent() {
    }
    EditTeamComponent.prototype.ngOnInit = function () {
    };
    EditTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-team',
            template: __webpack_require__("./app/private/edit-team/edit-team.component.html"),
            styles: [__webpack_require__("./app/private/edit-team/edit-team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditTeamComponent);
    return EditTeamComponent;
}());



/***/ }),

/***/ "./app/private/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/private/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <GridLayout columns=\"*,auto\" verticalAlignment=\"top\" padding=\"25\" fontSize=\"13\" color=\"white\">\n    <Label row=\"1\" col=\"0\" text=\"total\" (tap)=\"logout()\"></Label>\n    <Label row=\"1\" col=\"1\" text=\"{{sum.count}}\" style.textAlignment=\"right\"></Label>\n</GridLayout> -->\n<!--  -->\n<GridLayout columns=\"*,auto\" backgroundColor=\"rgb(81,197,247, 0.8)\" verticalAlignment=\"bottom\" padding=\"10\" fontSize=\"13\" color=\"white\">\n    <Label row=\"1\" text=\"Total Amount\"> \n</Label>\n    <Label row=\"1\" col=\"2\" text={{sum.count}}></Label>\n</GridLayout>"

/***/ }),

/***/ "./app/private/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_total_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/total.service.ts");
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
    function FooterComponent(sum) {
        this.sum = sum;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.s = this.sum.count;
        console.log("heyy");
        console.log(this.s);
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./app/private/footer/footer.component.html"),
            styles: [__webpack_require__("./app/private/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_total_service__WEBPACK_IMPORTED_MODULE_1__["TotalService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./app/private/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/private/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar backgroundColor=\"rgb(81,197,247, 0.8)\">\n    <GridLayout columns=\"auto,*,auto\" verticalAlignment=\"top\" padding=\"25\" fontSize=\"13\" color=\"white\">\n        <Label row=\"1\" col=\"0\" text=\"Log out\" (tap)=\"logout()\"></Label>\n        <Label row=\"1\" col=\"1\" text=\"Sales Master App\" style.textAlignment=\"center\"></Label>\n        <Label row=\"1\" col=\"2\" text=\"Add\" (tap)=\"add()\"></Label>\n    </GridLayout>\n</ActionBar>"

/***/ }),

/***/ "./app/private/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/team.service.ts");
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
    function HeaderComponent(router, teamService) {
        this.router = router;
        this.teamService = teamService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    // logout function 
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.teamService.logout().subscribe(function (response) {
            localStorage.removeItem('accessToken');
            _this.router.navigate(['']);
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./app/private/header/header.component.html"),
            styles: [__webpack_require__("./app/private/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./app/private/private-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoutingModule", function() { return PrivateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _private_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/private/private.common.ts");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrivateRoutingModule = /** @class */ (function () {
    function PrivateRoutingModule() {
    }
    PrivateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["NativeScriptRouterModule"].forChild(_private_common__WEBPACK_IMPORTED_MODULE_1__["routes"])],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["NativeScriptRouterModule"]]
        })
    ], PrivateRoutingModule);
    return PrivateRoutingModule;
}());



/***/ }),

/***/ "./app/private/private.common.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentDeclarations", function() { return componentDeclarations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providerDeclarations", function() { return providerDeclarations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/private/team/team.component.ts");
/* harmony import */ var _edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/private/edit-team/edit-team.component.ts");
/* harmony import */ var _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/private/add-team/add-team.component.ts");



var componentDeclarations = [];
var providerDeclarations = [];
var routes = [
    {
        path: 'team',
        component: _team_team_component__WEBPACK_IMPORTED_MODULE_0__["TeamComponent"]
    },
    {
        path: 'editTeam',
        component: _edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_1__["EditTeamComponent"]
    },
    {
        path: 'addTeam',
        component: _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_2__["AddTeamComponent"]
    }
];


/***/ }),

/***/ "./app/private/private.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateModule", function() { return PrivateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _private_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/private/private-routing.module.ts");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/private/add-team/add-team.component.ts");
/* harmony import */ var _edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/private/edit-team/edit-team.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/private/team/team.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/private/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/private/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PrivateModule = /** @class */ (function () {
    function PrivateModule() {
    }
    PrivateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_4__["AddTeamComponent"], _edit_team_edit_team_component__WEBPACK_IMPORTED_MODULE_5__["EditTeamComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]],
            imports: [
                _private_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrivateRoutingModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_3__["NativeScriptCommonModule"],
                nativescript_ui_listview_angular_listview_directives__WEBPACK_IMPORTED_MODULE_1__["NativeScriptUIListViewModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], PrivateModule);
    return PrivateModule;
}());

;
    if (false) {}


/***/ }),

/***/ "./app/private/team/team.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\n"

/***/ }),

/***/ "./app/private/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<GridLayout>\n    <RadListView [items]=\"teams\" class=\"list-group\">\n        <ng-template let-item=\"item\">\n            <StackLayout class=\"list-group-item\" orientation=\"horizontal\">\n                <Label [text]=\"item.team_name\" class=\"p-15\" (tap)=\"edit()\"></Label>\n                <Label [text]=\"item.amount\" class=\"p-15\" (tap)=\"edit()\" style.textAlignment=\"right\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>\n<app-footer></app-footer>"

/***/ }),

/***/ "./app/private/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/team.service.ts");
/* harmony import */ var _app_services_total_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/total.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamComponent = /** @class */ (function () {
    function TeamComponent(teamservice, sum) {
        this.teamservice = teamservice;
        this.sum = sum;
        this.teams = [];
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamservice.getTeams().subscribe(function (res) {
            // console.log(res);
            _this.teams = res.data;
            //  console.log(this.teams)
            _this.total = res.data.reduce(function (sum, item) { return sum + item.amount; }, 0);
            _this.sum.count = _this.total;
            console.log(_this.sum.count);
        });
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__("./app/private/team/team.component.html"),
            styles: [__webpack_require__("./app/private/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"], _app_services_total_service__WEBPACK_IMPORTED_MODULE_2__["TotalService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./app/services/total.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalService", function() { return TotalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TotalService = /** @class */ (function () {
    function TotalService() {
    }
    TotalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TotalService);
    return TotalService;
}());



/***/ }),

/***/ "./app/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamService = /** @class */ (function () {
    function TeamService(http) {
        this.http = http;
    }
    TeamService.prototype.getTeams = function () {
        var accessToken = localStorage.getItem('accessToken');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + 'teams/get', { 'access_token': accessToken });
    };
    TeamService.prototype.login = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + 'user/login', data);
    };
    TeamService.prototype.logout = function () {
        var accessToken = localStorage.getItem('accessToken');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + 'user/logout', { 'access_token': accessToken });
    };
    TeamService.prototype.updateTeam = function (data) {
        var accessToken = localStorage.getItem('accessToken');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + 'teams/edit', Object.assign({ 'access_token': accessToken }, data));
    };
    TeamService.prototype.addTeam = function (data) {
        var accessToken = "053e66cdb01042181c152b3e151322461aecc6fb2f";
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + 'teams/add', Object.assign({ 'access_token': accessToken }, data));
    };
    TeamService.prototype.deleteTeam = function (data) {
        var accessToken = localStorage.getItem('accessToken');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + 'teams/delete', Object.assign({ 'access_token': accessToken }, data));
    };
    TeamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_URL: 'http://13.233.150.141:3001/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ })

}]);