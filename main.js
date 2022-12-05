(self["webpackChunkblack_scholes"] = self["webpackChunkblack_scholes"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal/personal.component */ 3254);
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./professional/professional.component */ 1026);
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./links/links.component */ 7907);
/* harmony import */ var _black_scholes_black_scholes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./black-scholes/black-scholes.component */ 1504);
/* harmony import */ var _rubix_rubix_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rubix/rubix.component */ 4071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const appRoutes = [{
  path: '',
  component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_0__.PersonalComponent,
  data: {
    title: 'Personal'
  }
}, {
  path: 'personal',
  component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_0__.PersonalComponent,
  data: {
    title: 'Personal'
  }
}, {
  path: 'professional',
  component: _professional_professional_component__WEBPACK_IMPORTED_MODULE_1__.ProfessionalComponent,
  data: {
    title: 'Professional'
  }
}, {
  path: 'links',
  component: _links_links_component__WEBPACK_IMPORTED_MODULE_2__.LinksComponent,
  data: {
    title: "Links"
  }
}, {
  path: 'Black-Scholes',
  component: _black_scholes_black_scholes_component__WEBPACK_IMPORTED_MODULE_3__.BlackScholesComponent,
  data: {
    title: "Black Scholes Option Analyzer"
  }
}, {
  path: 'rubix',
  component: _rubix_rubix_component__WEBPACK_IMPORTED_MODULE_4__.RubixComponent,
  data: {
    title: "Rubix Cube Simulation"
  }
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(appRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-list */ 744);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title/title.component */ 7361);









function AppComponent_mat_icon_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AppComponent_mat_icon_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor() {
    this.title = 'Parker Kary';
    this.isMobile = false;
    this.pageHeight = "55em";
    this.opened = true;
    if (window.outerHeight > window.outerWidth) {
      this.opened = false;
      this.isMobile = true;
      this.pageHeight = "300em";
    }
  }
  toggle_sidenav() {
    this.opened = !this.opened;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 21,
    vars: 7,
    consts: [["id", "header"], [3, "inset"], ["mode", "side", "role", "navigation", 3, "opened", "openedChange"], ["drawer", ""], ["id", "nav-list-container"], ["mat-list-item", "", "routerLink", "/personal"], ["mat-list-item", "", "routerLink", "/rubix"], ["mat-list-item", "", "routerLink", "/links"], ["mat-icon-button", "", "color", "primary", 3, "click"], [4, "ngIf"], [1, "vertical-divider", 3, "vertical"], [1, "small-pad"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-divider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-sidenav-container")(4, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function AppComponent_Template_mat_sidenav_openedChange_4_listener($event) {
          return ctx.opened = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "mat-nav-list")(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Rubix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-sidenav-content")(15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() {
          return ctx.toggle_sidenav();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AppComponent_mat_icon_16_Template, 2, 0, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppComponent_mat_icon_17_Template, 2, 0, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inset", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.pageHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vertical", true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContent, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButton, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_7__.MatLegacyNavList, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_7__.MatLegacyListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _title_title_component__WEBPACK_IMPORTED_MODULE_0__.TitleComponent],
    styles: ["mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Bungee Hairline\" !important;\n  font-weight: bold;\n  width: 20em;\n}\n/*# sourceURL=webpack://./src/app/app.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1uYXYtbGlzdCBhIHtcbiAgZm9udC1mYW1pbHk6IFwiQnVuZ2VlIEhhaXJsaW5lXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAyMGVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/legacy-list */ 744);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./professional/professional.component */ 1026);
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal/personal.component */ 3254);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./links/links.component */ 7907);
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./title/title.component */ 7361);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _black_scholes_black_scholes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./black-scholes/black-scholes.component */ 1504);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/legacy-chips */ 9257);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 6523);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/legacy-table */ 6538);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-select */ 6002);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material-moment-adapter */ 7118);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 7101);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 3370);
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 7402);
/* harmony import */ var _rubix_rubix_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rubix/rubix.component */ 4071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);


































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_11__.MatLegacyInputModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLegacyFormFieldModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatLegacyCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__.MatMomentDateModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatLegacySnackBarModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatLegacyTooltipModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__.MatGridListModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTableModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_21__.MatLegacySelectModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_22__.MatLegacyPaginatorModule, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_23__.MatLegacyChipsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatLegacyAutocompleteModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.NoopAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_29__.MatLegacyButtonModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_30__.MatLegacyListModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDividerModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_32__.MatLegacyCardModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _professional_professional_component__WEBPACK_IMPORTED_MODULE_2__.ProfessionalComponent, _personal_personal_component__WEBPACK_IMPORTED_MODULE_3__.PersonalComponent, _links_links_component__WEBPACK_IMPORTED_MODULE_4__.LinksComponent, _title_title_component__WEBPACK_IMPORTED_MODULE_5__.TitleComponent, _black_scholes_black_scholes_component__WEBPACK_IMPORTED_MODULE_6__.BlackScholesComponent, _rubix_rubix_component__WEBPACK_IMPORTED_MODULE_7__.RubixComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_11__.MatLegacyInputModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLegacyFormFieldModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatLegacyCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_15__.MatMomentDateModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatLegacySnackBarModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatLegacyTooltipModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__.MatGridListModule, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_20__.MatLegacyTableModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_21__.MatLegacySelectModule, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_22__.MatLegacyPaginatorModule, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_23__.MatLegacyChipsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatLegacyAutocompleteModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.NoopAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_29__.MatLegacyButtonModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_30__.MatLegacyListModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDividerModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_32__.MatLegacyCardModule]
  });
})();

/***/ }),

/***/ 1504:
/*!**********************************************************!*\
  !*** ./src/app/black-scholes/black-scholes.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlackScholesComponent": () => (/* binding */ BlackScholesComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8456);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-table */ 6538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _bsm_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bsm-data.service */ 2634);
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 7402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 8469);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 3370);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-select */ 6002);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-core */ 7090);
/* harmony import */ var _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-paginator */ 7101);
/* harmony import */ var _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-chips */ 9257);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
























const _c0 = ["tickerInput"];
const _c1 = ["callPaginator"];
const _c2 = ["putPaginator"];
function BlackScholesComponent_mat_grid_tile_9_table_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table")(1, "tr")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Definition");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Call Equation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Put Equation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr")(11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Delta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr")(20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Gamma");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tr")(29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Theta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "tr")(38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Vega");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function BlackScholesComponent_mat_grid_tile_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile", 33)(1, "mat-card", 43)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " The ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b")(5, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Black Scholes Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " is a crazy exciting differential equation that looks like this ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Thanks to some incredible work by some genius mathematicians, we can estimate the value of put and call options, by solving this initial and terminal boundary problem. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 47)(14, "br")(15, "br")(16, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Now these equations look complicated, (and they are!), however the beauty of the work these matehematicians have done is that I can tell my computer how to do it, and then forget about it. What a magical time to be alive! All I need is a few pieces of information about the option, and were off to the races. In the equations above, the variables are as follows: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul")(20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " The cumulative distribution function of the standard normal distribution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Time until expiration date (in years) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Spot price of the underlying asset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Strike price of the option ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Risk free rate (for non econ-people this just google 'T-bill rate right now') ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Volatility of the underlying asset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " These formulas also provide means of calculating partial derivatives with repsect to other variables within the model. These are known as the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Option Greeks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, BlackScholesComponent_mat_grid_tile_9_table_43_Template, 46, 0, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p")(45, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " This website, is essentially a big ol Black-Scholes Calculator. You supply the stock tickers, a range of expiration dates, and an idea of the strike prices, and the calculator pulls stock data from yahoo finance, and performs BSM calculations over a large vector of option data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowspan", ctx_r0.isMobile ? 50 : 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isMobile);
  }
}
function BlackScholesComponent_mat_grid_tile_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile", 65)(1, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlackScholesComponent_mat_grid_tile_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.add_by_string(_r1.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BlackScholesComponent_mat_chip_20_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BlackScholesComponent_mat_chip_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function BlackScholesComponent_mat_chip_20_Template_mat_chip_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const tkr_r22 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.remove(tkr_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BlackScholesComponent_mat_chip_20_mat_icon_2_Template, 2, 0, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tkr_r22 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("removable", ctx_r4.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tkr_r22, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.removable);
  }
}
function BlackScholesComponent_mat_error_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BlackScholesComponent_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BlackScholesComponent_mat_grid_tile_61_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BlackScholesComponent_mat_grid_tile_61_ng_container_2_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const i_r28 = restoredCtx.index;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.toggle_column(i_r28, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r28 = ctx.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r26.columnsToDisplay.includes(ctx_r26.displayedColumns[i_r28]) ? true : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r26.displayedColumns[i_r28], " ");
  }
}
function BlackScholesComponent_mat_grid_tile_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile", 70)(1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BlackScholesComponent_mat_grid_tile_61_ng_container_2_Template, 3, 2, "ng-container", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", ctx_r8.isMobile ? 6 : 5)("rowspan", ctx_r8.isMobile ? 7 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.displayedColumns);
  }
}
function BlackScholesComponent_mat_header_row_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function BlackScholesComponent_mat_row_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
function BlackScholesComponent_ng_container_70_mat_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, column_r32));
  }
}
function BlackScholesComponent_ng_container_70_mat_cell_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r36 = ctx.$implicit;
    const column_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r36[column_r32]);
  }
}
function BlackScholesComponent_ng_container_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BlackScholesComponent_ng_container_70_mat_header_cell_1_Template, 3, 3, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BlackScholesComponent_ng_container_70_mat_cell_2_Template, 2, 1, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", column_r32);
  }
}
function BlackScholesComponent_mat_header_row_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
  }
}
function BlackScholesComponent_mat_row_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
  }
}
function BlackScholesComponent_ng_container_82_mat_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, column_r39));
  }
}
function BlackScholesComponent_ng_container_82_mat_cell_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r43 = ctx.$implicit;
    const column_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r43[column_r39]);
  }
}
function BlackScholesComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BlackScholesComponent_ng_container_82_mat_header_cell_1_Template, 3, 3, "mat-header-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BlackScholesComponent_ng_container_82_mat_cell_2_Template, 2, 1, "mat-cell", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", column_r39);
  }
}
const _c3 = function () {
  return {
    standalone: true
  };
};
const _c4 = function () {
  return [5, 10, 20];
};
class BlackScholesComponent {
  constructor(bsmDataService, snackBar) {
    this.bsmDataService = bsmDataService;
    this.snackBar = snackBar;
    this.visible = true;
    this.selectable = true;
    this.removable = true;
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.COMMA, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.SPACE];
    this.displayedColumns = ["symbol", "expiration", "spot", "strike", "BSM_Value", "last", "bid", "ask", "breakeven", "openInterest", "delta", "gamma", "theta", "IV", "vol"];
    this.mobileColumns = ["symbol", "spot", "strike", "BSM_Value", "last"];
    this.columnsToDisplay = this.displayedColumns.slice();
    this.tickerCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl();
    this.isMobile = false;
    this.show_column_editor = false;
    this.show_description_panel = false;
    this.tickers = ['AAPL'];
    this.mode = 0;
    this.shiftInput = 0;
    this.bsmElements = [];
    this.call_table_rows = 5;
    this.put_table_rows = 5;
    this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl()
    });
    this.start_date = "";
    this.end_date = "";
    this.expr_map = new Map();
    this.bsmElements = [];
    this.callDataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTableDataSource(this.bsmElements.filter(ele => ele.type == "CALL"));
    this.putDataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTableDataSource(this.bsmElements.filter(ele => ele.type == "PUT"));
    this.callDataSource.paginator = this.callPaginator;
    this.putDataSource.paginator = this.putPaginator;
    this.range.get("end")?.valueChanges.subscribe(x => this.end_date = x);
    this.range.get("start")?.valueChanges.subscribe(x => this.start_date = x);
    if (window.outerHeight > window.outerWidth) {
      this.isMobile = true;
      this.columnsToDisplay = this.mobileColumns;
    }
  }
  onResize(event) {
    let w = window.outerWidth;
    let h = window.outerHeight;
    if (h > w) {
      this.isMobile = true;
      this.columnsToDisplay = this.mobileColumns;
    } else {
      this.isMobile = false;
      this.columnsToDisplay = this.displayedColumns;
    }
    console.log(this.isMobile);
  }
  ngAfterViewInit() {
    this.callDataSource.paginator = this.callPaginator;
    this.putDataSource.paginator = this.putPaginator;
  }
  add(event) {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || '').trim()) {
      const val = value.trim().toUpperCase();
      if (!this.tickers.includes(val)) {
        this.tickers.push(val);
        this.expr_map.set(val, []);
      }
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  add_by_string(tkr) {
    const val = tkr.toUpperCase();
    if (!this.tickers.includes(val)) {
      this.tickers.push(val);
      this.expr_map.set(val, []);
    }
  }
  remove(tkr) {
    const index = this.tickers.indexOf(tkr);
    if (index >= 0) {
      this.tickers.splice(index, 1);
    }
  }
  openSnackBar(len) {
    if (len > 0) {
      let responseStr = "Query returned " + len.toString() + " options";
      this.snackBar.open(responseStr, "", {
        duration: 3000,
        panelClass: "happy_snackbar",
        horizontalPosition: "right",
        verticalPosition: "top"
      });
    } else {
      this.snackBar.open("No Options Found!", "", {
        duration: 3000,
        panelClass: "sad_snackbar",
        horizontalPosition: "right",
        verticalPosition: "top"
      });
    }
  }
  pull_data() {
    console.log(this.tickers);
    let start_date = this.start_date.format("Y-MM-DD");
    let end_date = this.end_date.format("Y-MM-DD");
    let date_range = [start_date, end_date];
    this.bsmElements = [];
    this.bsmDataService.set_tickers(this.tickers, .012).subscribe(x => {
      if (this.mode == 0) {
        this.bsmDataService.get_atm_multi_expr(undefined, date_range).subscribe(x => {
          let arr = x;
          this.openSnackBar(arr.length);
          arr.forEach(x => this.bsmElements.push(this.convert_row_to_bsm_element(x)));
          this.callDataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTableDataSource(this.bsmElements.filter(ele => ele.type == "CALL"));
          this.putDataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTableDataSource(this.bsmElements.filter(ele => ele.type == "PUT"));
          this.callDataSource.paginator = this.callPaginator;
          this.putDataSource.paginator = this.putPaginator;
          this.call_table_rows = this.callPaginator.pageSize + 10;
          this.put_table_rows = this.putPaginator.pageSize + 10;
        });
      } else if (this.mode == 1) {
        console.log(this.shiftInput);
        this.bsmDataService.get_atm_shift_abs_multi_expr(+this.shiftInput, undefined, date_range).subscribe(x => {
          let arr = x;
          this.openSnackBar(arr.length);
          arr.forEach(x => this.bsmElements.push(this.convert_row_to_bsm_element(x)));
          this.callDataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTableDataSource(this.bsmElements.filter(ele => ele.type == "CALL"));
          this.putDataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTableDataSource(this.bsmElements.filter(ele => ele.type == "PUT"));
          this.callDataSource.paginator = this.callPaginator;
          this.putDataSource.paginator = this.putPaginator;
          this.call_table_rows = this.callPaginator.pageSize + 10;
          this.put_table_rows = this.putPaginator.pageSize + 10;
        });
      } else if (this.mode == 2) {
        console.log(this.shiftInput);
        this.bsmDataService.get_atm_shift_rel_multi_expr(+this.shiftInput, undefined, date_range).subscribe(x => {
          let arr = x;
          this.openSnackBar(arr.length);
          arr.forEach(x => this.bsmElements.push(this.convert_row_to_bsm_element(x)));
          this.callDataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTableDataSource(this.bsmElements.filter(ele => ele.type == "CALL"));
          this.putDataSource = new _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTableDataSource(this.bsmElements.filter(ele => ele.type == "PUT"));
          this.callDataSource.paginator = this.callPaginator;
          this.putDataSource.paginator = this.putPaginator;
          this.call_table_rows = this.callPaginator.pageSize + 10;
          this.put_table_rows = this.putPaginator.pageSize + 10;
        });
      }
    });
  }
  convert_row_to_bsm_element(row) {
    let bsm_ele = {
      "symbol": row[0],
      "expiration": row[1],
      "type": row[2],
      "spot": row[3],
      "strike": row[4],
      "BSM_Value": row[5],
      "BSM_percent_over_ask": row[6],
      "last": row[7],
      "bid": row[8],
      "ask": row[9],
      "breakeven": row[10],
      "percent_change_for_BE": row[11],
      "openInterest": row[12],
      "delta": row[13],
      "gamma": row[14],
      "theta": row[15],
      "vega": row[16],
      "rho": row[17],
      "IV": row[18],
      "vol": row[19]
    };
    return bsm_ele;
  }
  handle_page_event(e, is_call) {
    if (is_call) {
      this.call_table_rows = this.callPaginator.pageSize + 10;
    } else {
      this.put_table_rows = this.putPaginator.pageSize + 10;
    }
  }
  toggle_column_editor() {
    this.show_column_editor = !this.show_column_editor;
  }
  toggle_column(i, e) {
    console.log(i, e);
    console.log(this.displayedColumns[i]);
    if (e.checked) {
      if (!this.columnsToDisplay.includes(this.displayedColumns[i])) {
        this.columnsToDisplay.splice(i, 0, this.displayedColumns[i]);
      }
    } else {
      if (this.columnsToDisplay.includes(this.displayedColumns[i])) {
        let idx = this.columnsToDisplay.indexOf(this.displayedColumns[i]);
        this.columnsToDisplay.splice(idx, 1);
      }
    }
  }
  toggle_description_panel() {
    console.log(this.show_description_panel);
    this.show_description_panel = !this.show_description_panel;
  }
  static #_ = this.ɵfac = function BlackScholesComponent_Factory(t) {
    return new (t || BlackScholesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bsm_data_service__WEBPACK_IMPORTED_MODULE_0__.BsmDataService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatLegacySnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BlackScholesComponent,
    selectors: [["app-black-scholes"]],
    viewQuery: function BlackScholesComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tickerInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.callPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.putPaginator = _t.first);
      }
    },
    hostBindings: function BlackScholesComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function BlackScholesComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    decls: 86,
    vars: 47,
    consts: [[1, "form-container"], ["cols", "6", "rowHeight", "1em", "gutterSize", ".5em"], ["rowspan", "2", 1, "transparent", 3, "colspan"], ["rowspan", "2", 3, "colspan"], ["mat-stroked-button", "", "color", "primary", "matTooltip", "Open the description panel", "matTooltipPosition", "above", 3, "click"], ["colspan", "6", 3, "rowspan", 4, "ngIf"], ["rowspan", "4", 3, "colspan"], ["matTooltip", "Add tickers for the options you want to search", "matTooltipPosition", "above", "appearance", "outline"], ["matInput", "", "placeholder", "GOOG", 3, "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["tickerInput", ""], ["colspan", "2", "rowspan", "4", 4, "ngIf"], [3, "rowspan", "colspan"], ["chipList", ""], [3, "removable", "removed", 4, "ngFor", "ngForOf"], ["rowspan", "3", 3, "colspan"], ["appearance", "outline", "matTooltip", "Search for strike prices equal to spot, or shift by a fixed or relative amount", "matTooltipPosition", "above"], [3, "value", "valueChange"], ["value", "0"], ["value", "1"], ["value", "2"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "placeholder", "disabled", "ngModelOptions", "ngModelChange"], ["appearance", "outline", "matTooltip", "The range of expiration dates for these options", "matTooltipPosition", "above", 1, "datepicker"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"], ["mat-stroked-button", "", "color", "primary", "matTooltip", "GO GO GO GO GO!", "matTooltipPosition", "above", 3, "click"], ["mat-stroked-button", "", "color", "primary", "matTooltip", "Change the columns in the output table", "matTooltipPosition", "above", 3, "click"], [3, "colspan", "rowspan", 4, "ngIf"], ["colspan", "6", "rowspan", "2", "matTooltip", "Table of Call Options", "matTooltipPosition", "above"], ["colspan", "6", 3, "rowspan"], [1, "mat-elevation-z8", "datatable", 3, "dataSource"], ["table", ""], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "page"], ["callPaginator", ""], ["colspan", "6", "rowspan", "2", "matTooltip", "Table of Put Options", "matTooltipPosition", "above"], ["putPaginator", ""], [1, "mat-elevation-z8", "bs_desc"], ["href", "https://en.wikipedia.org/wiki/Black%E2%80%93Scholes_model"], [1, "equation"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/d85601f6192ee85748c2deef28240275510d634e"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/d1f576effba2c7cabdebb78ac63fbb75b850a714"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/888c435dd73158c158a3217184eeed0675afb1f4"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/f684a5d524f20776dd9a95d95ac92e39d21e6a96"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/af0e151c64b128c60e883adf3106b9bdb01abae1"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/7e2391e6e796fbf718be3828080775ac2ac3d3d4"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/2b76fce82a62ed5461908f0dc8f037de4e3686b0"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/0d1ecb613aa2984f0576f70f86650b7c2a132538"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/59f59b7c3e6fdb1d0365a494b81fb9a696138c36"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/00a0565d85e69c498bbfbfb8cbe7033dcf33a741", 1, "deriv"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/d1cedc26e4285747fd3ad1f61d1570c2e393027d"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/257b3b5ec44d5a4b49fce42adba0144e8491d2e7", 1, "bigger"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/b6a1d6f8e6a09a22b74227b3eca3c6a8e882938d", 1, "deriv"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/14cda38924fbd712ef6ee8ed12c0fca140e02a24"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/84ec8a638d6cac6a3feab4ce649bb09bb3e04c58", 1, "deriv"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/83a81a924dbdfd3b35fc2600694e54328e88ce01", 1, "bigger"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/9f9dc128049b5764091b4ef89476f702c2f5ce2d", 1, "bigger"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/30570566548b88333352784b6152e7a3afa34896", 1, "deriv"], ["src", "https://wikimedia.org/api/rest_v1/media/math/render/svg/1f8e9ebef50ddfbd628045cf74ea31dbdd0b4d9f", 1, "bigger"], ["colspan", "2", "rowspan", "4"], ["mat-stroked-button", "", "color", "primary", 1, "lil_bit_smaller", 3, "click"], [3, "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [3, "colspan", "rowspan"], [1, "checkbox_container"], [4, "ngFor", "ngForOf"], [3, "checked", "change"], [3, "matColumnDef"], [4, "matHeaderCellDef"], [4, "matCellDef"]],
    template: function BlackScholesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form")(2, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-grid-tile", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlackScholesComponent_Template_button_click_5_listener() {
          return ctx.toggle_description_panel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " What am I looking at? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BlackScholesComponent_mat_grid_tile_9_Template, 47, 2, "mat-grid-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-grid-tile", 6)(11, "mat-form-field", 7)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Add Ticker");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("matChipInputTokenEnd", function BlackScholesComponent_Template_input_matChipInputTokenEnd_14_listener($event) {
          return ctx.add($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, BlackScholesComponent_mat_grid_tile_16_Template, 5, 0, "mat-grid-tile", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-grid-tile", 11)(18, "mat-chip-list", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, BlackScholesComponent_mat_chip_20_Template, 3, 3, "mat-chip", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-grid-tile", 14)(22, "mat-form-field", 15)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Search Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function BlackScholesComponent_Template_mat_select_valueChange_25_listener($event) {
          return ctx.mode = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "At The Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "ATM plus X (absolute)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "ATM plus X (relative %)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-grid-tile", 14)(35, "mat-form-field", 20)(36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Shift-By");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BlackScholesComponent_Template_input_ngModelChange_38_listener($event) {
          return ctx.shiftInput = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-grid-tile", 14)(40, "mat-form-field", 22)(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Expiration Date Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-date-range-input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 24)(45, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "mat-datepicker-toggle", 26)(47, "mat-date-range-picker", null, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, BlackScholesComponent_mat_error_49_Template, 2, 0, "mat-error", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, BlackScholesComponent_mat_error_50_Template, 2, 0, "mat-error", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mat-grid-tile", 14)(52, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlackScholesComponent_Template_button_click_52_listener() {
          return ctx.pull_data();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Search Options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-grid-tile", 3)(57, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BlackScholesComponent_Template_button_click_57_listener() {
          return ctx.toggle_column_editor();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Adjust Columns ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, BlackScholesComponent_mat_grid_tile_61_Template, 3, 3, "mat-grid-tile", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-grid-tile", 32)(63, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "CALLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-grid-tile", 33)(66, "mat-table", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, BlackScholesComponent_mat_header_row_68_Template, 1, 0, "mat-header-row", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, BlackScholesComponent_mat_row_69_Template, 1, 0, "mat-row", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, BlackScholesComponent_ng_container_70_Template, 3, 1, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-grid-tile", 33)(72, "mat-paginator", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function BlackScholesComponent_Template_mat_paginator_page_72_listener($event) {
          return ctx.handle_page_event($event, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-grid-tile", 41)(75, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "PUTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-grid-tile", 33)(78, "mat-table", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, BlackScholesComponent_mat_header_row_80_Template, 1, 0, "mat-header-row", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, BlackScholesComponent_mat_row_81_Template, 1, 0, "mat-row", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, BlackScholesComponent_ng_container_82_Template, 3, 1, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mat-grid-tile", 33)(84, "mat-paginator", 39, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function BlackScholesComponent_Template_mat_paginator_page_84_listener($event) {
          return ctx.handle_page_event($event, false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", ctx.isMobile ? 2 : 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", ctx.isMobile ? 4 : 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show_description_panel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", ctx.isMobile ? 4 : 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r3)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowspan", ctx.isMobile ? ctx.tickers.length / 3 + 3 : 2)("colspan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tickers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", ctx.isMobile ? 3 : 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", ctx.isMobile ? 3 : 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.shiftInput)("placeholder", ctx.mode == 2 ? ".05" : "10")("disabled", ctx.mode == 0)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", ctx.isMobile ? 6 : 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.range.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.range.controls.end.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", ctx.isMobile ? 6 : 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colspan", ctx.isMobile ? 6 : 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show_column_editor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowspan", ctx.call_table_rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.callDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowspan", ctx.callDataSource.data.length > 0 ? 1 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.bsmElements.length > 0 ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowspan", ctx.put_table_rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.putDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowspan", ctx.putDataSource.data.length > 0 ? 1 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.bsmElements.length > 0 ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](46, _c4));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacyError, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacyLabel, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacySuffix, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_9__.MatLegacyInput, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatLegacyCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDateRangePicker, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatLegacyTooltip, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridTile, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyTable, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyHeaderCellDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyHeaderRowDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyColumnDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyCellDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyRowDef, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyHeaderCell, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyCell, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyHeaderRow, _angular_material_legacy_table__WEBPACK_IMPORTED_MODULE_4__.MatLegacyRow, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_14__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_15__.MatLegacyOption, _angular_material_legacy_paginator__WEBPACK_IMPORTED_MODULE_16__.MatLegacyPaginator, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_17__.MatLegacyChipList, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_17__.MatLegacyChip, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_17__.MatLegacyChipInput, _angular_material_legacy_chips__WEBPACK_IMPORTED_MODULE_17__.MatLegacyChipRemove, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_18__.MatLegacyButton, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_19__.MatLegacyCard, _angular_common__WEBPACK_IMPORTED_MODULE_6__.UpperCasePipe],
    styles: [".form-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: -3em;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .datatable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .checkbox_container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .checkbox_container[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  padding: 0em 1em;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .datepicker[_ngcontent-%COMP%] {\n  margin-top: -0.25em;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .lil_bit_smaller[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80%;\n  margin-top: -0.75em;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  font-weight: bold;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%]   .equation[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%]   .equation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20em;\n  height: 5em;\n  margin-left: auto;\n  margin-right: auto;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  margin-left: auto;\n  margin-right: auto;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 2px solid #f0f0f0;\n  border-radius: 1em;\n  padding: 1em;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 5em;\n  width: 5em;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .bigger[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .bigger[_ngcontent-%COMP%] {\n  height: 5;\n  width: 12em;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .deriv[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   .bs_desc[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .deriv[_ngcontent-%COMP%] {\n  height: 3em;\n  width: 3em;\n}\n\n  .happy_snackbar {\n  background-color: #1Dbc60 !important;\n}\n\n  .sad_snackbar {\n  background-color: #ef3d59 !important;\n}\n/*# sourceURL=webpack://./src/app/black-scholes/black-scholes.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxhY2stc2Nob2xlcy9ibGFjay1zY2hvbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRVI7QUFEUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUloQjtBQUhnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUtwQjtBQUZZO0VBQ0ksV0FBQTtBQUloQjtBQUZZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFJaEI7QUFIZ0I7RUFDSSxnQkFBQTtBQUtwQjtBQUZZO0VBQ0ksbUJBQUE7QUFJaEI7QUFGWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSWhCO0FBRlk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBSWhCO0FBRlk7RUFDSSxXQUFBO0FBSWhCO0FBSGdCO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFLcEI7QUFIZ0I7RUFDSSxXQUFBO0FBS3BCO0FBSm9CO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTXhCO0FBSGdCO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBS3BCO0FBSm9CO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFNeEI7QUFMd0I7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQU81QjtBQUx3QjtFQUNJLFNBQUE7RUFDQSxXQUFBO0FBTzVCO0FBTHdCO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFPNUI7O0FBR0E7RUFDSSxvQ0FBQTtBQUFKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IC0zZW07XG59XG4uZm9ybS1jb250YWluZXIgZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybS1jb250YWluZXIgZm9ybSBtYXQtZ3JpZC10aWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtLWNvbnRhaW5lciBmb3JtIG1hdC1ncmlkLXRpbGUgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZvcm0tY29udGFpbmVyIGZvcm0gbWF0LWdyaWQtdGlsZSBtYXQtZm9ybS1maWVsZCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZm9ybS1jb250YWluZXIgZm9ybSBtYXQtZ3JpZC10aWxlIC5kYXRhdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtLWNvbnRhaW5lciBmb3JtIG1hdC1ncmlkLXRpbGUgLmNoZWNrYm94X2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZm9ybS1jb250YWluZXIgZm9ybSBtYXQtZ3JpZC10aWxlIC5jaGVja2JveF9jb250YWluZXIgbWF0LWNoZWNrYm94IHtcbiAgcGFkZGluZzogMGVtIDFlbTtcbn1cbi5mb3JtLWNvbnRhaW5lciBmb3JtIG1hdC1ncmlkLXRpbGUgLmRhdGVwaWNrZXIge1xuICBtYXJnaW4tdG9wOiAtMC4yNWVtO1xufVxuLmZvcm0tY29udGFpbmVyIGZvcm0gbWF0LWdyaWQtdGlsZSBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZvcm0tY29udGFpbmVyIGZvcm0gbWF0LWdyaWQtdGlsZSAubGlsX2JpdF9zbWFsbGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODAlO1xuICBtYXJnaW4tdG9wOiAtMC43NWVtO1xufVxuLmZvcm0tY29udGFpbmVyIGZvcm0gbWF0LWdyaWQtdGlsZSAuYnNfZGVzYyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvcm0tY29udGFpbmVyIGZvcm0gbWF0LWdyaWQtdGlsZSAuYnNfZGVzYyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvcm0tY29udGFpbmVyIGZvcm0gbWF0LWdyaWQtdGlsZSAuYnNfZGVzYyAuZXF1YXRpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb3JtLWNvbnRhaW5lciBmb3JtIG1hdC1ncmlkLXRpbGUgLmJzX2Rlc2MgLmVxdWF0aW9uIGltZyB7XG4gIHdpZHRoOiAyMGVtO1xuICBoZWlnaHQ6IDVlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5mb3JtLWNvbnRhaW5lciBmb3JtIG1hdC1ncmlkLXRpbGUgLmJzX2Rlc2MgdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmZvcm0tY29udGFpbmVyIGZvcm0gbWF0LWdyaWQtdGlsZSAuYnNfZGVzYyB0YWJsZSB0ZCwgLmZvcm0tY29udGFpbmVyIGZvcm0gbWF0LWdyaWQtdGlsZSAuYnNfZGVzYyB0YWJsZSB0aCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMGYwZjA7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgcGFkZGluZzogMWVtO1xufVxuLmZvcm0tY29udGFpbmVyIGZvcm0gbWF0LWdyaWQtdGlsZSAuYnNfZGVzYyB0YWJsZSB0ZCBpbWcsIC5mb3JtLWNvbnRhaW5lciBmb3JtIG1hdC1ncmlkLXRpbGUgLmJzX2Rlc2MgdGFibGUgdGggaW1nIHtcbiAgaGVpZ2h0OiA1ZW07XG4gIHdpZHRoOiA1ZW07XG59XG4uZm9ybS1jb250YWluZXIgZm9ybSBtYXQtZ3JpZC10aWxlIC5ic19kZXNjIHRhYmxlIHRkIC5iaWdnZXIsIC5mb3JtLWNvbnRhaW5lciBmb3JtIG1hdC1ncmlkLXRpbGUgLmJzX2Rlc2MgdGFibGUgdGggLmJpZ2dlciB7XG4gIGhlaWdodDogNTtcbiAgd2lkdGg6IDEyZW07XG59XG4uZm9ybS1jb250YWluZXIgZm9ybSBtYXQtZ3JpZC10aWxlIC5ic19kZXNjIHRhYmxlIHRkIC5kZXJpdiwgLmZvcm0tY29udGFpbmVyIGZvcm0gbWF0LWdyaWQtdGlsZSAuYnNfZGVzYyB0YWJsZSB0aCAuZGVyaXYge1xuICBoZWlnaHQ6IDNlbTtcbiAgd2lkdGg6IDNlbTtcbn1cblxuOjpuZy1kZWVwIC5oYXBweV9zbmFja2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRGJjNjAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5zYWRfc25hY2tiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYzZDU5ICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2634:
/*!*************************************!*\
  !*** ./src/app/bsm-data.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BsmDataService": () => (/* binding */ BsmDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);



class BsmDataService {
  constructor(http) {
    this.http = http;
    this._baseUrl = "https://54.175.250.21:8080";
  }
  set_tickers(tkrs, rfr) {
    const data = {
      'tickers': tkrs,
      'risk-free-rate': rfr
    };
    const headers = {
      'content-type': 'application/json'
    };
    return this.http.post(this._baseUrl + "/api/tickers", data, {
      'headers': headers
    });
  }
  get_atm_single_expr(expr) {
    const data = {
      "request-type": 1,
      "expiration": expr
    };
    const headers = {
      'content-type': 'application/json'
    };
    return this.http.post(this._baseUrl + "/api/bsm-data", data, {
      'headers': headers
    });
  }
  get_atm_shift_abs_single_expr(expr, shift) {
    const data = {
      "request-type": 2,
      "expiration": expr,
      "abs-shift": shift
    };
    const headers = {
      'content-type': 'application/json'
    };
    return this.http.post(this._baseUrl + "/api/bsm-data", data, {
      'headers': headers
    });
  }
  get_atm_shift_rel_single_expr(expr, shift) {
    const data = {
      "request-type": 3,
      "expiration": expr,
      "rel-shift": shift
    };
    const headers = {
      'content-type': 'application/json'
    };
    return this.http.post(this._baseUrl + "/api/bsm-data", data, {
      'headers': headers
    });
  }
  get_any_single_expr(expr, strike_map) {
    const data = {
      "request-type": 4,
      "expiration": expr,
      "strike-map": strike_map
    };
    const headers = {
      'content-type': 'application/json'
    };
    return this.http.post(this._baseUrl + "/api/bsm-data", data, {
      'headers': headers
    });
  }
  get_atm_multi_expr(expr_map, date_range) {
    const data = {
      "request-type": 5,
      "expiration-map": expr_map,
      "date-range": date_range
    };
    const headers = {
      'content-type': 'application/json'
    };
    return this.http.post(this._baseUrl + "/api/bsm-data", data, {
      'headers': headers
    });
  }
  get_atm_shift_abs_multi_expr(shift, expr_map, date_range) {
    const data = {
      "request-type": 6,
      "expiration-map": expr_map,
      "date-range": date_range,
      "abs-shift": shift
    };
    const headers = {
      'content-type': 'application/json'
    };
    return this.http.post(this._baseUrl + "/api/bsm-data", data, {
      'headers': headers
    });
  }
  get_atm_shift_rel_multi_expr(shift, expr_map, date_range) {
    const data = {
      "request-type": 7,
      "expiration-map": expr_map,
      "date-range": date_range,
      "rel-shift": shift
    };
    const headers = {
      'content-type': 'application/json'
    };
    return this.http.post(this._baseUrl + "/api/bsm-data", data, {
      'headers': headers
    });
  }
  get_any_multi_expr(strike_map, expr_map, date_range) {
    const data = {
      "request-type": 8,
      "expiration-map": expr_map,
      "date-range": date_range,
      "strike-map": strike_map
    };
    const headers = {
      'content-type': 'application/json'
    };
    return this.http.post(this._baseUrl + "/api/bsm-data", data, {
      'headers': headers
    });
  }
  static #_ = this.ɵfac = function BsmDataService_Factory(t) {
    return new (t || BsmDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: BsmDataService,
    factory: BsmDataService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7907:
/*!******************************************!*\
  !*** ./src/app/links/links.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinksComponent": () => (/* binding */ LinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LinksComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function LinksComponent_Factory(t) {
    return new (t || LinksComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LinksComponent,
    selectors: [["app-links"]],
    decls: 16,
    vars: 0,
    consts: [[1, "container"], [1, "link_container"], ["href", "http://github.com/pdkary", 1, "link"], ["src", "../assets/github_icon.png"], ["href", "http://linkedin.com/in/pdkary", 1, "link"], ["src", "../assets/linkedin_icon.png"], ["href", "http://twitter.com/parkskary", 1, "link"], ["src", "../assets/twitter_icon.png"]],
    template: function LinksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "@pdkary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1)(7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "@pdkary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1)(12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "@ParksKary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: [".container[_ngcontent-%COMP%]   .link_container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n  margin-left: -2em;\n}\n.container[_ngcontent-%COMP%]   .link_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  text-decoration: none;\n}\n.container[_ngcontent-%COMP%]   .link_container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 7em;\n  width: 7em;\n}\n/*# sourceURL=webpack://./src/app/links/links.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGlua3MvbGlua3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQURSO0FBRVE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFBWjtBQUNZO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIC5saW5rX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLWxlZnQ6IC0yZW07XG59XG4uY29udGFpbmVyIC5saW5rX2NvbnRhaW5lciBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhaW5lciAubGlua19jb250YWluZXIgYSBpbWcge1xuICBoZWlnaHQ6IDdlbTtcbiAgd2lkdGg6IDdlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3254:
/*!************************************************!*\
  !*** ./src/app/personal/personal.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalComponent": () => (/* binding */ PersonalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);






function PersonalComponent_mat_panel_title_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-title")(1, "h2")(2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interests and Aspirations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function PersonalComponent_mat_panel_title_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-title")(1, "h2")(2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class PersonalComponent {
  constructor() {
    this.isMobile = false;
    this.projectPanelOpen = false;
    if (window.outerHeight > window.outerWidth) {
      this.isMobile = true;
    }
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function PersonalComponent_Factory(t) {
    return new (t || PersonalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PersonalComponent,
    selectors: [["app-personal"]],
    decls: 194,
    vars: 6,
    consts: [["cols", "12", "rowHeight", "1em", "gutterSize", ".4em", 1, "container"], ["rowspan", "2", "colspan", "12"], ["rowspan", "11", 3, "colspan"], [1, "headshot"], ["src", "../assets/me.jpg", "height", "250em", "width", "250em"], ["rowspan", "2", 3, "colspan"], [3, "colspan", "rowspan"], [1, "text"], [1, "mat-elevation-z1"], ["href", "https://github.com/pdkary/black-scholes-plus"], ["href", "https://github.com/pdkary/SpigotHueLightPlugin"], [4, "ngIf"], ["href", "http://hackthebox.eu"], ["href", "http://tryhackme.com"]],
    template: function PersonalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0)(1, "mat-grid-tile", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Parker Kary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile", 5)(8, "h1")(9, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile", 6)(12, "div", 7)(13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " McMaster Mechatronics Engineering and Management Student, graduating in December 2021. Always looking for a new project to get excited about. I am passionate, hard working student, constantly seeking new projects, and developing new skills along the way. I am an active learner, regularly teaching myself new skills, frameworks, libraries, tools, etc, to help expand the projects I have worked on. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " My personal project experience has led me to develop skills, and expand into areas outside my education, such as computer vision, IOT development, web design (Angular), economics, robotics, automation, and many others. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " In my opinion, the most valuable skill I have learned, is the process of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "integrating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " of various components. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-accordion")(23, "mat-expansion-panel", 8)(24, "mat-expansion-panel-header")(25, "mat-panel-title")(26, "h2")(27, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Project Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card")(30, "mat-card-header")(31, "mat-card-title")(32, "h3")(33, "u")(34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "local_atm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Black Scholes Plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-content")(39, "div", 7)(40, "p")(41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Purpose:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Estimate the value of stock options for given stocks, at a desired expiration date and strike price. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p")(45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Usage:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " User inputs the stock tickers they are interested in, as well as expiration dates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "one for all tickers / one for each ticker / range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " and strike prices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "at the money / above by x units / above by x percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0The script then gathers all options that match these criteria, and performa Black Scholes calculations, and data is returned in a pandas DataFrame. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p")(63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Used Technology: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Angular11, Python3, numpy, pandas, scipy, yahoofinance, flask, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p")(67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Check out the Black-Scholes tab for a demo! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card")(70, "mat-card-header")(71, "mat-card-title")(72, "h3")(73, "u")(74, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Spigot Hue Light Plugin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-card-content")(79, "div", 7)(80, "p")(81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Purpose:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " A minecraft plugin, written in java, allowing the user to operate real-world Philips Hue Light bulbs with in game triggers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p")(85, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Usage:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " A player in minecraft may use a customized block to assign levers/buttons/lanterns to connect with an exising Hue Bridge, and can then operate lights with in game controls. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p")(89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Used Technology: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Java8, Maven, Lombok, FasterXml Jackson, Spigot, Phillips Hue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-card")(93, "mat-card-header")(94, "mat-card-title")(95, "h3")(96, "u")(97, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "emoji_objects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Love Lights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-card-content")(101, "div", 7)(102, "p")(103, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Purpose:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " A cute gift for a long distance relationship that shows I care without needing to buy something expensive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p")(107, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Usage:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Each partner keeps a jar at their respective location, when the button is pushed, the lights in both jars changes color along a color wheel synchronously. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p")(111, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Used Technology: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " ESP8266, ArduinoIDE, AdafruitIO, a little bit of solder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-card")(115, "mat-card-header")(116, "mat-card-title")(117, "h3")(118, "u")(119, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "emoji_people");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Kinect Gesture Recognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-card-content")(123, "div", 7)(124, "p")(125, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Purpose:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Allow an xbox kinect v1 to trigger a request over an http server when a preconfigured gesture is recognized ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p")(129, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Usage:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " User defines gesture by entering \"training\" mode, and standing in the gesture position for about 1 minute, then in various other positions around the area for another 2 minutes. This data is stored as \"Skeletons\", and tensorflow is used to develop a categorization of \"gesture\" or \"not gesture\". When gesture is triggered, an http request is sent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p")(133, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Used Technology: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " C#, Kinect V1 SDK, Python3 tensorflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-expansion-panel", 8)(137, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, PersonalComponent_mat_panel_title_138_Template, 4, 0, "mat-panel-title", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, PersonalComponent_mat_panel_title_139_Template, 4, 0, "mat-panel-title", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-card")(141, "mat-card-title")(142, "h3")(143, "u")(144, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "bug_report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "NetSec/InfoSec");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-card-content")(148, "div", 7)(149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "During the locked-in summer of 2020, I decided to try and teach myself network security / penetration testing. I began following small tutorials using a Kali Linux VM, and found myself wanting to expand my knowledge. I have since regularly competed on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "HackTheBox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "TryHackMe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, ". Recently, I have been exploring the world of bug bounties, when I have the chance. These experiences have taught me the basics of network reconnaissance and enumeration, bruteforcing (domains, subdomains, hashcracking, login),web app exploitation, priviledge escalation, and payload obfuscation. This knowledge, has given my an expanded perspective in the development of networked applications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p")(158, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Familiar tools: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Nmap, gobuster, BurpSuite, netcat, hydra, hashcat, john the ripper, sqlmap, and a bit of google and elbow grease.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-card")(162, "mat-card-title")(163, "h3")(164, "u")(165, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "account_balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "FinTech / Economics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "mat-card-content")(169, "div", 7)(170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "The field of economics excites me because of its ability to measure human behaviour, with quantitiative results. I have personally enjoyed some or the works of Richard Thaler, such as \"Misbehaving\" or \"Nudge\", which focus on the many situations in which we as humans act irrationally. FinTech offers the ability to combine the power of big data analysis, with the massive complexity of financial markets. Though this is not new news, the field of FinTech is still growing quickly, and ready to be revolutionized by modern intelligent systems. While my work is not quite at an AI level (yet..), I have begun to explore the field with the development of smaller tools, and calculators to aid in decision making.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "mat-card")(173, "mat-card-title")(174, "h3")(175, "u")(176, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "router");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Internet of Things");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "mat-card-content")(180, "div", 7)(181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " The ESP8266 chip has a special place in my heart. A chip so cheap and with so many available libraries and codebases, the possibilities are endless. I have used ESP8266 chips in many projects, including the \"Love Lights\" mentioned above, but also for small automation projects like a wifi-enabled IR blaster for TV and stereo automation, a customizeable button array for triggering webhooks, an automated dog feeder, and even a small camera pan and tilt mount. The possibilities of internet of things development is vast and readily changing, with uses varying from a decentralized internet, to retrofitting factory equipment with cheap, and interconnectable sensors. IOT may just build the future, and Im excited to watch it happen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-card")(184, "mat-card-title")(185, "h3")(186, "u")(187, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "precision_manufacturing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Robotics and Prosthetics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "mat-card-content")(191, "div", 7)(192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Though my experience with robotics has been limited to small servo robots, RC cars, and drones, I have maintained a deep interet in robotics, and more specifically in prosthetics. Quality prosthetics today are either overly expensive, or simply unavailable (even moreso to those in 3rd world countries or marginalized communities). The rise of 3d printed prosthetics has me excited about the future of the industry, but I believe there is still much that can be improved, and I would be excited to help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.isMobile ? 12 : 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.isMobile ? 12 : 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", ctx.isMobile ? 12 : 8)("rowspan", ctx.isMobile ? 20 : 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelTitle, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridTile, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_5__.MatLegacyCard, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_5__.MatLegacyCardHeader, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_5__.MatLegacyCardContent, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_5__.MatLegacyCardTitle],
    styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n.container[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   mat-grid-tile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.text[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  margin-left: 1em;\n}\n.text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: bold;\n  color: black;\n}\n\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: #fefefe;\n  margin-bottom: 1em;\n}\nmat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n/*# sourceURL=webpack://./src/app/personal/personal.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ1o7QUFBWTtFQUNJLHFCQUFBO0FBRWhCOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFDSTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBR0k7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7QUFDWiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciBtYXQtZ3JpZC10aWxlIGgxLCAuY29udGFpbmVyIG1hdC1ncmlkLXRpbGUgaDIsIC5jb250YWluZXIgbWF0LWdyaWQtdGlsZSBoMyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRhaW5lciBtYXQtZ3JpZC10aWxlIGgxIGEsIC5jb250YWluZXIgbWF0LWdyaWQtdGlsZSBoMiBhLCAuY29udGFpbmVyIG1hdC1ncmlkLXRpbGUgaDMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLnRleHQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxubWF0LWFjY29yZGlvbiBtYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxubWF0LWFjY29yZGlvbiBtYXQtZXhwYW5zaW9uLXBhbmVsIG1hdC1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1026:
/*!********************************************************!*\
  !*** ./src/app/professional/professional.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfessionalComponent": () => (/* binding */ ProfessionalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProfessionalComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ProfessionalComponent_Factory(t) {
    return new (t || ProfessionalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfessionalComponent,
    selectors: [["app-professional"]],
    decls: 2,
    vars: 0,
    template: function ProfessionalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "professional works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4246:
/*!**********************************!*\
  !*** ./src/app/rubix.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RubixService": () => (/* binding */ RubixService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

var Color;
(function (Color) {
  Color[Color["RED"] = 1] = "RED";
  Color[Color["GREEN"] = 2] = "GREEN";
  Color[Color["ORANGE"] = 3] = "ORANGE";
  Color[Color["YELLOW"] = 4] = "YELLOW";
  Color[Color["BLUE"] = 5] = "BLUE";
  Color[Color["WHITE"] = 6] = "WHITE";
})(Color || (Color = {}));
function zip(a, b) {
  var out = [];
  a.forEach(k => b.forEach(l => out.push([k, l])));
  return out;
}
function zip_rev(a, b) {
  var out = [];
  b.forEach(k => a.forEach(l => out.push([l, k])));
  return out;
}
function zip2d(a, b) {
  return a.map((k, i) => [k, b[i]]);
}
function zip_to_const(a, c) {
  return a.map(k => [k, c]);
}
function zip_to_const_rev(c, a) {
  return a.map(k => [c, k]);
}
function deepcopy(x) {
  return JSON.parse(JSON.stringify(x));
}
function get_intersection(c1, c2, r1, r2) {
  var dx = c1[0] - c2[0];
  var dy = c1[1] - c2[1];
  var R = Math.sqrt(dx * dx + dy * dy);
  var R2 = R * R;
  var R4 = R2 * R2;
  var dr2 = r1 * r1 - r2 * r2;
  var a = (r1 * r1 - r2 * r2) / (2 * R2);
  var b = Math.sqrt(2 * (r1 * r1 + r2 * r2) / R2 - dr2 * dr2 / R4 - 1);
  var fx = (c1[0] + c2[0]) / 2 + a * (c2[0] - c1[0]);
  var gx = b * (c2[1] - c1[1]) / 2;
  var i1x = fx + gx;
  var fy = (c1[1] + c2[1]) / 2 + a * (c2[1] - c1[1]);
  var gy = b * (c1[0] - c2[0]) / 2;
  var i1y = fy + gy;
  return [i1x, i1y];
}
class RubixService {
  constructor() {
    this.canvasH = 500;
    this.canvasW = 500;
    this.scale = 100;
    this.center = [250, 250];
    this.initialize();
  }
  set_size(height, width) {
    this.canvasH = height;
    this.canvasW = width;
    this.scale = Math.min(this.canvasH, this.canvasW) / 4.25;
    this.center = [width / 2, height / 2];
    this.initialize();
  }
  initialize() {
    var a = this.scale;
    var r = a * Math.sqrt(3) / 6;
    this.centers = [[this.center[0] - a / 2, this.center[1] - r], [this.center[0] + a / 2, this.center[1] - r], [this.center[0], this.center[1] + 2 * r]];
    this.ring_radii = [this.scale * 7 / 6, this.scale * 4 / 3, this.scale * 3 / 2];
    this.table = Array(9).fill(0).map(() => Array(9).fill(0));
    this.fill_table_range(0, 3, 3, 6, Color.RED);
    this.fill_table_range(0, 3, 6, 9, Color.GREEN);
    this.fill_table_range(3, 6, 0, 3, Color.ORANGE);
    this.fill_table_range(3, 6, 6, 9, Color.YELLOW);
    this.fill_table_range(6, 9, 0, 3, Color.BLUE);
    this.fill_table_range(6, 9, 3, 6, Color.WHITE);
    this.initialize_intersections();
  }
  get_rotations(disc_id, ring_id) {
    var a = disc_id * 3 + ring_id;
    var sets = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    var reverse_sets = [[2, 1, 0], [5, 4, 3], [8, 7, 6]];
    sets.splice(disc_id, 1);
    reverse_sets.splice(disc_id, 1);
    var face_before0 = zip(sets[1], sets[0]);
    var face_before1 = zip(sets[0], sets[1]);
    var face_rot0 = zip_rev(sets[0], reverse_sets[1]);
    var face_rot1 = zip_rev(reverse_sets[0], sets[1]);
    var face_rot2 = zip_rev(reverse_sets[1], sets[0]);
    var face_rot3 = zip_rev(sets[1], reverse_sets[0]);
    var f00 = zip2d(face_before0, face_rot0);
    var f01 = zip2d(face_before0, face_rot1);
    var f02 = zip2d(face_before0, face_rot2);
    var f03 = zip2d(face_before0, face_rot3);
    var f10 = zip2d(face_before1, face_rot0);
    var f11 = zip2d(face_before1, face_rot1);
    var f12 = zip2d(face_before1, face_rot2);
    var f13 = zip2d(face_before1, face_rot3);
    var ring_s0a_ars1 = zip2d(zip_to_const(sets[0], a), zip_to_const_rev(a, reverse_sets[1]));
    var ring_s0a_s1a = zip2d(zip_to_const(sets[0], a), zip_to_const(sets[1], a));
    var ring_s1a_s0a = zip2d(zip_to_const(sets[1], a), zip_to_const(sets[0], a));
    var ring_s1a_ars0 = zip2d(zip_to_const(sets[1], a), zip_to_const_rev(a, reverse_sets[0]));
    var ring_as0_rs1a = zip2d(zip_to_const_rev(a, sets[0]), zip_to_const(reverse_sets[1], a));
    var ring_as0_as1 = zip2d(zip_to_const_rev(a, sets[0]), zip_to_const_rev(a, sets[1]));
    var ring_as1_as0 = zip2d(zip_to_const_rev(a, sets[1]), zip_to_const_rev(a, sets[0]));
    var ring_as1_rs0a = zip2d(zip_to_const_rev(a, sets[1]), zip_to_const(reverse_sets[0], a));
    //       0   1   2   3   4   5   6   7         8              9            10            11             12              13           14             15  
    return [f00, f01, f02, f03, f10, f11, f12, f13, ring_s0a_ars1, ring_s0a_s1a, ring_s1a_s0a, ring_s1a_ars0, ring_as0_rs1a, ring_as0_as1, ring_as1_as0, ring_as1_rs0a];
  }
  turn(disc_id, ring_id, cw) {
    var rotation_set = this.get_rotations(disc_id, ring_id);
    var ring_changes;
    var face_changes;
    switch (disc_id) {
      case 0:
        {
          ring_changes = [cw ? rotation_set[8] : rotation_set[9], cw ? rotation_set[10] : rotation_set[11], cw ? rotation_set[12] : rotation_set[13], cw ? rotation_set[14] : rotation_set[15]];
          switch (ring_id) {
            case 0:
              {
                face_changes = cw ? rotation_set[2] : rotation_set[3];
                break;
              }
            case 2:
              {
                face_changes = cw ? rotation_set[4] : rotation_set[5];
                break;
              }
            default:
              {
                face_changes = [];
                break;
              }
          }
          break;
        }
      case 1:
        {
          ring_changes = [cw ? rotation_set[13] : rotation_set[12], cw ? rotation_set[15] : rotation_set[14], cw ? rotation_set[9] : rotation_set[8], cw ? rotation_set[11] : rotation_set[10]];
          switch (ring_id) {
            case 0:
              {
                face_changes = cw ? rotation_set[5] : rotation_set[4];
                break;
              }
            case 2:
              {
                face_changes = cw ? rotation_set[3] : rotation_set[2];
                break;
              }
            default:
              {
                face_changes = [];
                break;
              }
          }
          break;
        }
      case 2:
        {
          ring_changes = [cw ? rotation_set[8] : rotation_set[9], cw ? rotation_set[10] : rotation_set[11], cw ? rotation_set[12] : rotation_set[13], cw ? rotation_set[14] : rotation_set[15]];
          switch (ring_id) {
            case 0:
              {
                face_changes = cw ? rotation_set[2] : rotation_set[3];
                break;
              }
            case 2:
              {
                face_changes = cw ? rotation_set[4] : rotation_set[5];
                break;
              }
            default:
              {
                face_changes = [];
                break;
              }
          }
          break;
        }
      default:
        {
          ring_changes = [];
          face_changes = [];
        }
    }
    var tmp = Array(9).fill(0).map(() => Array(9).fill(0));
    this.previous_positions = new Map();
    this.most_recent_turn = [disc_id, ring_id];
    ring_changes.forEach(change_set => {
      change_set.forEach(changes => {
        var ogpos = changes[0];
        tmp[ogpos[0]][ogpos[1]] = deepcopy(this.table[ogpos[0]][ogpos[1]]);
      });
    });
    face_changes.forEach(changes => {
      var ogpos = changes[0];
      tmp[ogpos[0]][ogpos[1]] = deepcopy(this.table[ogpos[0]][ogpos[1]]);
    });
    ring_changes.forEach(change_set => {
      change_set.forEach(changes => {
        var ogpos = changes[0];
        var newpos = changes[1];
        this.previous_positions.set(newpos.toString(), ogpos.toString());
        this.table[newpos[0]][newpos[1]] = deepcopy(tmp[ogpos[0]][ogpos[1]]);
      });
    });
    face_changes.forEach(changes => {
      var ogpos = changes[0];
      var newpos = changes[1];
      this.previous_positions.set(newpos.toString(), ogpos.toString());
      this.table[newpos[0]][newpos[1]] = deepcopy(tmp[ogpos[0]][ogpos[1]]);
    });
  }
  initialize_intersections() {
    this.intersections = Array(9).fill(0).map(() => Array(9).fill([0, 0]));
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var d0 = Math.floor(i / 3);
        var d1 = Math.floor(j / 3);
        var r0 = i % 3;
        var r1 = j % 3;
        if (d0 != d1) {
          var c0 = this.centers[d0];
          var c1 = this.centers[d1];
          var R0 = this.ring_radii[r0];
          var R1 = this.ring_radii[r1];
          var dot_loc = get_intersection(c0, c1, R0, R1);
          this.intersections[i][j] = dot_loc;
        }
      }
    }
  }
  fill_table_range(i0, i1, j0, j1, val) {
    for (var i = i0; i < i1; i++) {
      for (var j = j0; j < j1; j++) {
        this.table[i][j] = val;
      }
    }
  }
  has_previous_position(i, j) {
    if (!!this.previous_positions) {
      var pos = [i, j].toString();
      return this.previous_positions.has(pos);
    }
    return false;
  }
  get_previous_position(i, j) {
    if (this.has_previous_position(i, j)) {
      var pos = [i, j].toString();
      var val = this.previous_positions.get(pos);
      if (!!val) {
        return [+val[0], +val[2]];
      }
      return undefined;
    }
    return undefined;
  }
  static #_ = this.ɵfac = function RubixService_Factory(t) {
    return new (t || RubixService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RubixService,
    factory: RubixService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4071:
/*!******************************************!*\
  !*** ./src/app/rubix/rubix.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RubixComponent": () => (/* binding */ RubixComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _rubix_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rubix.service */ 4246);



const _c0 = ["canvas"];
class RubixComponent {
  constructor(rubixService) {
    this.rubixService = rubixService;
    this.animation_funcs = [];
    this.animation_colors = [];
    this.animation_points = [];
    this.animation_steps = 30;
    this.color_map = new Map([[0, "#000000"], [1, "#FC6255"], [2, "#FF862F"], [3, "#FFFF00"], [4, "#83C167"], [5, "#58C4DD"], [6, "#DDDDDD"]]);
    var H = window.innerHeight;
    var W = window.innerWidth;
    if (H > W) {
      this.canvasH = window.innerHeight * 3 / 5;
      this.canvasW = window.innerWidth * 9 / 10;
    } else {
      this.canvasH = window.innerHeight * 9 / 10;
      this.canvasW = window.innerWidth * 3 / 5;
    }
    rubixService.set_size(this.canvasH, this.canvasW);
  }
  ngOnInit() {}
  ngAfterViewInit() {
    var ctx = this.canvas.nativeElement.getContext('2d');
    if (!!ctx) {
      this.ctx = ctx;
      this.drawTable();
    }
  }
  turn(disc_id, ring_id, cw) {
    this.ctx.clearRect(0, 0, this.canvasH, this.canvasW);
    this.rubixService.turn(disc_id, ring_id, !cw);
    this.animation_points = [];
    this.animation_funcs = [];
    this.animation_colors = [];
    var prev_mov = this.rubixService.most_recent_turn;
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        var table_val = this.rubixService.table[i][j];
        if (table_val > 0) {
          var color = this.color_map.get(table_val);
          var pos = this.rubixService.intersections[i][j];
          if (this.rubixService.has_previous_position(i, j)) {
            var prev_ij = this.rubixService.get_previous_position(i, j);
            if (prev_ij !== undefined) {
              var pi = prev_ij[0];
              var pj = prev_ij[1];
              var prev_pos = this.rubixService.intersections[pi][pj];
              var pd0 = Math.floor(pi / 3);
              var pd1 = Math.floor(pj / 3);
              var C = this.rubixService.centers[prev_mov[0]];
              if (prev_mov[0] != pd0 && prev_mov[0] != pd1) {
                //FACE MOVE
                this.animation_points.push([i, j]);
                this.animation_funcs.push(this.get_linear_path_function(prev_pos, pos));
                this.animation_colors.push(color ? color : "");
              } else {
                //RING MOVE
                this.animation_points.push([i, j]);
                this.animation_funcs.push(this.get_curve_path_function(C, prev_pos, pos, cw));
                this.animation_colors.push(color ? color : "");
              }
            }
          }
        }
      }
    }
    this.drawTable();
    console.log("-------------------------------------------------------------------------------");
  }
  drawTable() {
    var t = 0;
    const N = this.animation_steps;
    var run_step = () => {
      if (t <= N) {
        this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
        this.drawCircles();
        for (var i = 0; i < 9; i++) {
          for (var j = 0; j < 9; j++) {
            var table_val = this.rubixService.table[i][j];
            if (table_val != 0) {
              var color = this.color_map.get(table_val);
              color = !!color ? color : "";
              if (this.animation_points.some(ap => ap[0] == i && ap[1] == j)) {
                for (var aid = 0; aid < this.animation_funcs.length; aid++) {
                  var func = this.animation_funcs[aid];
                  var clor = this.animation_colors[aid];
                  var p = func(t / N);
                  this.drawDot(p, 7, !!clor ? clor : "");
                }
              } else {
                var pos = this.rubixService.intersections[i][j];
                this.drawDot(pos, 7, color);
              }
            }
          }
        }
        t += 1;
        window.requestAnimationFrame(run_step);
      }
    };
    window.requestAnimationFrame(run_step);
  }
  drawCircles() {
    this.drawDot(this.rubixService.center, 5, "PINK");
    for (var c of this.rubixService.centers) {
      for (var i = 0; i < 3; i++) {
        this.drawCircle(c, this.rubixService.ring_radii[i], "", "black", 3);
      }
    }
  }
  drawCircle(center, radius, fill, stroke, strokeWidth) {
    this.ctx.beginPath();
    this.ctx.arc(center[0], center[1], radius, 0, 2 * Math.PI, false);
    if (fill) {
      this.ctx.fillStyle = fill;
      this.ctx.fill();
    }
    if (stroke) {
      this.ctx.lineWidth = strokeWidth;
      this.ctx.strokeStyle = stroke;
      this.ctx.stroke();
    }
  }
  drawDot(center, size, fill) {
    this.ctx.beginPath();
    this.ctx.arc(center[0], center[1], size, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = fill;
    this.ctx.fill();
  }
  get_curve_path_function(center, point0, point1, cw) {
    var dx0 = point0[0] - center[0];
    var dy0 = point0[1] - center[1];
    var dx1 = point1[0] - center[0];
    var dy1 = point1[1] - center[1];
    var M = cw ? 1 : -1;
    var R = Math.sqrt(dx0 * dx0 + dy0 * dy0);
    var theta0 = Math.atan2(dy0, dx0);
    var thetaf = Math.atan2(dy1, dx1);
    var theta_range = thetaf - theta0;
    if (Math.sign(theta_range) * M < 0) {
      var theta = t => M * t * (2 * Math.PI - M * (theta0 - thetaf)) + theta0;
    } else {
      var theta = t => t * (thetaf - theta0) + theta0;
    }
    return t => [center[0] + R * Math.cos(theta(t)), center[1] + R * Math.sin(theta(t))];
  }
  get_linear_path_function(point0, point1) {
    var dx = point1[0] - point0[0];
    var dy = point1[1] - point0[1];
    return t => [t * dx + point0[0], t * dy + point0[1]];
  }
  static #_ = this.ɵfac = function RubixComponent_Factory(t) {
    return new (t || RubixComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rubix_service__WEBPACK_IMPORTED_MODULE_0__.RubixService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RubixComponent,
    selectors: [["app-rubix"]],
    viewQuery: function RubixComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
      }
    },
    decls: 54,
    vars: 2,
    consts: [[1, "main-container"], [1, "button-0-container"], [1, "ring-0-container"], [3, "click"], [1, "ring-1-container"], [1, "ring-2-container"], [1, "button-1-container"], [1, "canvas-container"], [3, "height", "width"], ["canvas", ""], [1, "button-2-container"]],
    template: function RubixComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "This is a work in progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_5_listener() {
          return ctx.turn(0, 0, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Turn 0,0,CW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_7_listener() {
          return ctx.turn(0, 0, false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Turn 0,0,CCW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_10_listener() {
          return ctx.turn(0, 1, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Turn 0,1,CW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_12_listener() {
          return ctx.turn(0, 1, false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Turn 0,1,CCW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5)(15, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_15_listener() {
          return ctx.turn(0, 2, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Turn 0,2,CW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_17_listener() {
          return ctx.turn(0, 2, false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Turn 0,2,CCW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6)(20, "div", 2)(21, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_21_listener() {
          return ctx.turn(1, 0, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Turn 1,0,CW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_23_listener() {
          return ctx.turn(1, 0, false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Turn 1,0,CCW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4)(26, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_26_listener() {
          return ctx.turn(1, 1, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Turn 1,1,CW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_28_listener() {
          return ctx.turn(1, 1, false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Turn 1,1,CCW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5)(31, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_31_listener() {
          return ctx.turn(1, 2, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Turn 1,2,CW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_33_listener() {
          return ctx.turn(1, 2, false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Turn 1,2,CCW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "canvas", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 10)(39, "div", 2)(40, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_40_listener() {
          return ctx.turn(2, 0, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Turn 2,0,CW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_42_listener() {
          return ctx.turn(2, 0, false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Turn 2,0,CCW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 4)(45, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_45_listener() {
          return ctx.turn(2, 1, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Turn 2,1,CW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_47_listener() {
          return ctx.turn(2, 1, false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Turn 2,1,CCW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 5)(50, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_50_listener() {
          return ctx.turn(2, 2, true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Turn 2,2,CW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RubixComponent_Template_button_click_52_listener() {
          return ctx.turn(2, 2, false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Turn 2,2,CCW");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", ctx.canvasH)("width", ctx.canvasW);
      }
    },
    styles: [".main-container[_ngcontent-%COMP%]   .canvas-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n.main-container[_ngcontent-%COMP%]   .button-0-container[_ngcontent-%COMP%] {\n  float: left;\n}\n.main-container[_ngcontent-%COMP%]   .button-1-container[_ngcontent-%COMP%] {\n  float: right;\n}\n.main-container[_ngcontent-%COMP%]   .button-2-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main-container[_ngcontent-%COMP%]   .button-2-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: olivedrab;\n  width: 12em;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceURL=webpack://./src/app/rubix/rubix.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcnViaXgvcnViaXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUZaO0FBTUk7RUFDSSxXQUFBO0FBSlI7QUFNSTtFQUNJLFlBQUE7QUFKUjtBQU1JO0VBQ0ksV0FBQTtBQUpSO0FBS1E7RUFDSSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSFoiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIgLmNhbnZhcy1jb250YWluZXIgY2FudmFzIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluLWNvbnRhaW5lciAuYnV0dG9uLTAtY29udGFpbmVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubWFpbi1jb250YWluZXIgLmJ1dHRvbi0xLWNvbnRhaW5lciB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5tYWluLWNvbnRhaW5lciAuYnV0dG9uLTItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbi1jb250YWluZXIgLmJ1dHRvbi0yLWNvbnRhaW5lciBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvbGl2ZWRyYWI7XG4gIHdpZHRoOiAxMmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7361:
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitleComponent": () => (/* binding */ TitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class TitleComponent {
  constructor(router) {
    this.router = router;
    this.display = "Home";
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
        this.display = event.url[1].toUpperCase() + event.url.substring(2);
      }
    });
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function TitleComponent_Factory(t) {
    return new (t || TitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TitleComponent,
    selectors: [["app-title"]],
    decls: 2,
    vars: 1,
    template: function TitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.display);
      }
    },
    styles: ["h1[_ngcontent-%COMP%] {\n  font-family: Bungee Hairline;\n  margin-left: 45%;\n  margin-top: -2em;\n}\n/*# sourceURL=webpack://./src/app/title/title.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGl0bGUvdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1mYW1pbHk6IEJ1bmdlZSBIYWlybGluZTtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgbWFyZ2luLXRvcDogLTJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 8999,
	"./hy-am.js": 8999,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 5773,
	"./ro.js": 5773,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 2702,
	"./ta.js": 2702,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map