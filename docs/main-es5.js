(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Preloader-->\n<app-preloader></app-preloader>\n<!--/Preloader-->\n\n<!--Main Wrapper-->\n<div class=\"main-wrapper dark-mode\">\n    <!--Bg Image-->\n    <div class=\"bg-struct bg-abstract-4\"></div>\n    <!--/Bg Image-->\n    <div class=\"mdl-js-layout mdl-layout--fixed-header\">\n      <!--Top Header-->\n      <header class=\"mdl-layout__header\">\n        <app-header></app-header>\n      </header>\n      <!--/Top Header-->\n      <!--Left Sidebar-->\n      <div class=\"mdl-layout__drawer\">\n        <app-sidebar></app-sidebar>\n      </div>\n      <!--/Left Sidebar-->\n      <!--Main Content-->\n\t\t\t<div class=\"main-content relative\">\n        <div class=\"container\">\n          <app-about></app-about>\n          <app-skills></app-skills>\n          <app-portfolio></app-portfolio>\n          <app-interest></app-interest>\n          <app-profile></app-profile>\n          <app-experience></app-experience>\n          <app-education></app-education>\n          <!--<app-blog></app-blog>-->\n          <app-reference></app-reference>\n          <app-clients></app-clients>\n          <!--<app-price></app-price>-->\n         <!--<app-contact></app-contact>-->\n          <app-footer></app-footer>\n         <!-- <router-outlet></router-outlet> -->\n        </div>\n      </div>\n      <!--/Main Content-->\n    </div>\n</div>\n<!--/Main Wrapper-->\nTest"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--About Sec-->\n<section class=\"about-sec mt-180 mt-sm-120  mb-30\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"mdl-card mdl-shadow--2dp\">\n                <div class=\"row\">\n                    <div class=\"col-md-5 col-xs-12 mb-30\">\n                        <div class=\"candidate-img mb-35\"></div>\n                        <app-social-icons></app-social-icons>\n                    </div>\n                    <div class=\"col-md-7 col-xs-12\">\n                        <div class=\"info-wrap\">\n                            <h1>marny lopez</h1>\n                            <h5 class=\"mt-20 font-grey\">Senior Software Engineer & Passionate Entrepreneur</h5>\n                          <!--\n                            <div class=\"mt-30\">\n                                <a id=\"download_cv\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  bg-green font-white mr-10\" href=\"#\">download cv</a>\n                                <a class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect bg-blue font-white\" href=\"#contact_sec\" data-scroll>contact</a>\n                            </div>\n                          -->\n                        </div>\n                        <ul class=\"profile-wrap mt-50\">\n                            <li>\n                                <div class=\"profile-title\">age</div>\n                                <div class=\"profile-desc\">{{ anio -  1995 }}</div>\n                            </li>\n                            <li>\n                                <div class=\"profile-title\">address</div>\n                                <div class=\"profile-desc\">\n                                    Colon, San Jose, Costa Rica\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"profile-title\">email</div>\n                                <div class=\"profile-desc\">\n                                    marny.lopez@myndsit.com\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"profile-title\">phone</div>\n                                <div class=\"profile-desc\">\n                                    +506 6045 3526\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"profile-title\">freelance</div>\n                                <div class=\"profile-desc relative\">Available\n                                    <i id=\"datepickopn\" class=\"zmdi zmdi-calendar-check font-green pl-5\"></i>\n                                    <!--<div id='datepicker1' class='datepicker'></div>-->\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--/About Sec-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/blog/blog.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/blog/blog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t\t\t\t\t<!--Blog Sec-->\n\t\t\t\t\t\t<section id=\"blog_sec\" class=\"blog-sec sec-pad-top-sm\">\n                <h2 class=\"mb-30\">blog</h2>\n                <div class=\"row\">\n                  <div class=\"col-sm-4 mb-30\">\n                    <div class=\"mdl-card mdl-shadow--2dp pa-0\">\n                      <div class=\"mdl-card__title pa-0\">\n                        <div class=\"blog-img blog-1\"></div>\n                      </div>\n                      <div class=\"mdl-card__supporting-text relative\">\n                        <span class=\"blog-cat\">travel</span>\n                        <a href=\"youtube-blog-post.html\">\n                          <h4 class=\"mt-15 mb-20\">Fly High with youtube</h4>\n                        </a>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eleifend lacinia...</p>\n                        <a href=\"youtube-blog-post.html\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect bg-red mdl-shadow--8dp\">\n                          <i class=\"zmdi zmdi-youtube-play\"></i>\n                        </a>\n                      </div>\n                      <div class=\"mdl-card__actions mdl-card--border\">\n                        <span class=\"blog-post-date inline-block\">21.1.17</span>\n                        <div class=\"mdl-layout-spacer\"></div>\n                        <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect mr-5\">\n                          <i class=\"zmdi zmdi-favorite\"></i>\n                        </button>\n                        <button id =\"share_menu_1\" class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\n                          <i class=\"zmdi zmdi-share\"></i>\n                        </button>\n                        <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\"\n                          data-mdl-for=\"share_menu_1\">\n                          <li class=\"mdl-menu__item\">Facebook</li>\n                          <li class=\"mdl-menu__item\">Twitter</li>\n                          <li class=\"mdl-menu__item\">LinkedIn</li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4 mb-30\">\n                    <div class=\"mdl-card mdl-shadow--2dp pa-0\">\n                      <div class=\"mdl-card__title pa-0\">\n                        <div class=\"blog-img blog-2\"></div>\n                      </div>\n                      <div class=\"mdl-card__supporting-text relative\">\n                        <span class=\"blog-cat\">photography</span>\n                        <a href=\"image-blog-post.html\">\n                          <h4 class=\"mt-15 mb-20\">Iceland live in images</h4>\n                        </a>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eleifend lacinia...</p>\n                        <a href=\"image-blog-post.html\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect bg-blue mdl-shadow--8dp\">\n                          <i class=\"zmdi zmdi-image-o\"></i>\n                        </a>\n                      </div>\n                      <div class=\"mdl-card__actions mdl-card--border\">\n                        <span class=\"blog-post-date inline-block\">15.1.17</span>\n                        <div class=\"mdl-layout-spacer\"></div>\n                        <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect mr-5\">\n                          <i class=\"zmdi zmdi-favorite\"></i>\n                        </button>\n                        <button id =\"share_menu_2\" class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\n                          <i class=\"zmdi zmdi-share\"></i>\n                        </button>\n                        <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\"\n                          data-mdl-for=\"share_menu_2\">\n                          <li class=\"mdl-menu__item\">Facebook</li>\n                          <li class=\"mdl-menu__item\">Twitter</li>\n                          <li class=\"mdl-menu__item\">LinkedIn</li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4 mb-30\">\n                    <div class=\"mdl-card mdl-shadow--2dp pa-0\">\n                      <div class=\"mdl-card__title pa-0\">\n                        <div class=\"blog-img blog-3\"></div>\n                      </div>\n                      <div class=\"mdl-card__supporting-text relative\">\n                        <span class=\"blog-cat\">science</span>\n                        <a href=\"gallery-blog-post.html\">\n                          <h4 class=\"mt-15 mb-20\">Grand canyon mysteries</h4>\n                        </a>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eleifend lacinia...</p>\n                        <a href=\"gallery-blog-post.html\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect bg-green mdl-shadow--8dp\">\n                          <i class=\"zmdi zmdi-collection-image-o\"></i>\n                        </a>\n                      </div>\n                      <div class=\"mdl-card__actions mdl-card--border\">\n                        <span class=\"blog-post-date inline-block\">9.1.17</span>\n                        <div class=\"mdl-layout-spacer\"></div>\n                        <button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect mr-5\">\n                          <i class=\"zmdi zmdi-favorite\"></i>\n                        </button>\n                        <button id =\"share_menu_3\" class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\">\n                          <i class=\"zmdi zmdi-share\"></i>\n                        </button>\n                        <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\"\n                          data-mdl-for=\"share_menu_3\">\n                          <li class=\"mdl-menu__item\">Facebook</li>\n                          <li class=\"mdl-menu__item\">Twitter</li>\n                          <li class=\"mdl-menu__item\">LinkedIn</li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"text-center mt-20 mb-30\">\n                  <a class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  margin-lr-auto view-more\" href=\"blog-list.html\">view all</a>\n                </div>\n              </section>\n              <!--/Blog Sec-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/clients/clients.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/clients/clients.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Client Sec-->\n<section id=\"client_sec\" class=\"client-sec sec-pad-top-sm\">\n  <h2 class=\"mb-30\">My clients</h2>\n  <div class=\"row\">\n    <div class=\"mdl-card\">\n      <div class=\"row\">\n          <div class=\"col-sm-12 mb-30\">\n              <div class=\"client-carousel\">\n                 <img src=\"assets/img/clients/stratecha.png\" alt=\"client\" style=\"height: 80px;width: auto\" >\n                 <img src=\"assets/img/clients/globalnow.jpg\" alt=\"client\" style=\"height: 80px;width: auto\">\n                 <img src=\"assets/img/clients/tico.png\" alt=\"client\" style=\"height: 80px;width: auto\">\n                 <img src=\"assets/img/clients/essential.png\" alt=\"client\" style=\"height: 80px;width: auto\">\n                 <img src=\"assets/img/clients/conatt.png\" alt=\"client\" style=\"height: 80px;width: auto\">\n                 <img src=\"assets/img/clients/asefiserv.png\" alt=\"client\" style=\"height: 80px;width: auto\">\n                </div>\n           </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--/Client Sec-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t\t\t\t\t<!--Contact Sec-->\n\t\t\t\t\t\t<section id=\"contact_sec\" class=\"contact-sec sec-pad-top-sm\">\n                <h2 class=\"mb-35\">contact</h2>\n                <div class=\"row\">\n                  <div id=\"form_card_height\" class=\"col-sm-7 mb-30\">\n                    <div  class=\"mdl-card mdl-shadow--2dp\" data-ng-controller=\"ContactController\">\n                      <h4 class=\"mb-10 font-unsetcase\">Hey <span  data-ng-bind=\"formData.inputName||'There'\">There</span>, happy to hear from you.</h4>\n                      <form data-ng-submit=\"submit(contactform, $event)\"  name=\"contactform\"  method=\"post\" class=\" form-horizontal mb-30\" role=\"form\">\n                        <div class=\"form-group\" data-ng-class=\"{ 'has-error': contactform.inputName.$invalid && submitted }\">\n                          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                            <input autocomplete=\"off\" data-ng-model=\"formData.inputName\" class=\"mdl-textfield__input\" type=\"text\" id=\"inputName\" name=\"inputName\" required>\n                            <label class=\"mdl-textfield__label\" for=\"inputName\">name*</label>\n                          </div>\n                        </div>\n                        <div class=\"form-group\" data-ng-class=\"{ 'has-error': contactform.inputEmail.$invalid && submitted }\">\n                          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                            <input autocomplete=\"off\" data-ng-model=\"formData.inputEmail\" class=\"mdl-textfield__input\" type=\"email\" id=\"inputEmail\" name=\"inputEmail\" required>\n                            <label class=\"mdl-textfield__label\" for=\"inputEmail\">email*</label>\n                          </div>\n                        </div>\n                        <div class=\"form-group\" data-ng-class=\"{ 'has-error': contactform.inputMessage.$invalid && submitted }\">\n                          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                            <textarea\n                            data-ng-model=\"formData.inputMessage\"\n                            class=\"mdl-textfield__input\"  rows=\"3\" id=\"inputMessage\" name=\"inputMessage\" required></textarea>\n                            <label class=\"mdl-textfield__label\" for=\"inputMessage\">message*</label>\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <div class=\"align-center\">\n                            <button type=\"submit\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  bg-blue font-white\" data-ng-disabled=\"submitButtonDisabled\">\n                              submit\n                            </button>\n                          </div>\n                        </div>\n                      </form>\n                      <p class=\"block result\" data-ng-class=\"result\"></p>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-5 mb-30\">\n                    <div class=\"mdl-card mdl-shadow--2dp pa-0\">\n                      <div id=\"map_canvas\"></div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <!--/Contact Sec-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/education/education.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/education/education.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Education Sec-->\n<section id=\"education_sec\" class=\"education-sec sec-pad-top-sm\">\n    <h2 class=\"mb-30\">education</h2>\n    <div class=\"timeline-wrap overflow-hide mb-30\">\n        <ul class=\"timeline\">\n\n            <li>\n                <div class=\"timeline-badge bg-blue no-icon\"></div>\n                <div class=\"timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-blue\">\n                    <div class=\"timeline-heading\">\n                        <h4 class=\"mb-10\">Licenciate Degree of Software Engineering</h4>\n                        <span class=\"duration mb-5\">2019 - 2020</span>\n                        <span class=\"institution\">Universidad Tecnica Nacional</span>\n                    </div>\n                </div>\n            </li>\n\n            <li class=\"timeline-inverted\">\n                <div class=\"timeline-badge bg-green no-icon\"></div>\n                <div class=\"timeline-panel mdl-card mdl-shadow--2dp  pt-30 pb-30 border-top-green\">\n                    <div class=\"timeline-heading\">\n                        <h4 class=\"mb-10\">Bachelor in Software Engineering</h4>\n                        <span class=\"duration mb-5\">2015 - 2019</span>\n                        <span class=\"institution\">Universidad Tecnica Nacional</span>\n                    </div>\n                </div>\n            </li>\n\n            <li>\n                <div class=\"timeline-badge bg-yellow no-icon\"></div>\n                <div class=\"timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-yellow\">\n                    <div class=\"timeline-heading\">\n                        <h4 class=\"mb-10\">Bachelor's degree, Computer Systems Networking and Telecommunications, Associate Degree</h4>\n                        <span class=\"duration mb-5\">2012 - 2014</span>\n                        <span class=\"institution\">C.T.P Jesus Ocaña Rojas</span>\n                    </div>\n                </div>\n            </li>\n\n            <!--\n            <li class=\"timeline-inverted\">\n                <div class=\"timeline-badge bg-red no-icon\"></div>\n                <div class=\"timeline-panel mdl-card mdl-shadow--2dp  pt-30 pb-30 border-top-red\">\n                    <div class=\"timeline-heading\">\n                        <h4 class=\"mb-10\">Graphic Design Diploma</h4>\n                        <span class=\"duration mb-5\">2008 - 2009</span>\n                        <span class=\"institution\">Shorepath Collegiate Institute</span>\n                    </div>\n                </div>\n            </li>\n            -->\n\n            <li class=\"clearfix no-float\"></li>\n        </ul>\n    </div>\n</section>\n<!--/Education Sec-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/experience/experience.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/experience/experience.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Experience Sec-->\n<section id=\"experience_sec\" class=\"experience-sec sec-pad-top-sm\">\n  <h2 class=\"mb-30\">experience</h2>\n  <div class=\"timeline-wrap  overflow-hide mb-30\">\n      <ul class=\"timeline\">\n\n          <li>\n              <div class=\"timeline-badge\">\n                  <i class=\"zmdi zmdi-case font-blue\"></i>\n              </div>\n              <div class=\"timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-blue\">\n                  <div class=\"timeline-heading\">\n                      <h4 class=\"mb-10\">Founder</h4>\n                      <span class=\"duration mb-5\">Jan 2014 - present</span>\n                      <span class=\"institution\">MyndsIT</span>\n                  </div>\n                  <div class=\"timeline-body\">\n                      <p class=\"mt-25\">Alajuela, Costa Rica</p>\n                  </div>\n              </div>\n          </li>\n\n          <li class=\"timeline-inverted\">\n              <div class=\"timeline-badge\">\n                  <i class=\"zmdi zmdi-format-color-text font-green\"></i>\n              </div>\n              <div class=\"timeline-panel mdl-card mdl-shadow--2dp  pt-30 pb-30 border-top-green\">\n                  <div class=\"timeline-heading\">\n                      <h4 class=\"mb-10\">Senior Software Development Engineer</h4>\n                      <span class=\"duration mb-5\">Jan 2019 - Present</span>\n                      <span class=\"institution\">Isthmus Software</span>\n                  </div>\n                  <div class=\"timeline-body\">\n                      <p class=\"mt-25\">Heredia, Costa Rica</p>\n                  </div>\n              </div>\n          </li>\n\n          <li>\n              <div class=\"timeline-badge\">\n                  <i class=\"zmdi zmdi-city-alt font-yellow\"></i>\n              </div>\n              <div class=\"timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-yellow\">\n                  <div class=\"timeline-heading\">\n                      <h4 class=\"mb-10\">Senior Softwar Enginer Consultant</h4>\n                      <span class=\"duration mb-5\">Jan 2019 – Jun 2019</span>\n                      <span class=\"institution\">Stratecha</span>\n                  </div>\n                  <div class=\"timeline-body\">\n                      <p class=\"mt-25\">Dallas, Texas</p>\n                  </div>\n              </div>\n          </li>\n\n          <li class=\"timeline-inverted\">\n              <div class=\"timeline-badge\">\n                  <i class=\"zmdi zmdi-format-color-text font-green\"></i>\n              </div>\n              <div class=\"timeline-panel mdl-card mdl-shadow--2dp  pt-30 pb-30 border-top-green\">\n                  <div class=\"timeline-heading\">\n                      <h4 class=\"mb-10\">Senior Software Development Consultant</h4>\n                      <span class=\"duration mb-5\">Jan 2019 - Jun 2019</span>\n                      <span class=\"institution\">GlobalNow.Inc</span>\n                  </div>\n                  <div class=\"timeline-body\">\n                      <p class=\"mt-25\">Dallas, Texas</p>\n                  </div>\n              </div>\n          </li>\n\n          <li>\n              <div class=\"timeline-badge\">\n                  <i class=\"zmdi zmdi-city-alt font-yellow\"></i>\n              </div>\n              <div class=\"timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-yellow\">\n                  <div class=\"timeline-heading\">\n                      <h4 class=\"mb-10\">Software Engineer Team Lead</h4>\n                      <span class=\"duration mb-5\">May 2017 - Sep 2018</span>\n                      <span class=\"institution\">DXC.Technology</span>\n                  </div>\n                  <div class=\"timeline-body\">\n                      <p class=\"mt-25\">Heredia, Costa Rica</p>\n                  </div>\n              </div>\n          </li>\n\n          <li class=\"timeline-inverted\">\n              <div class=\"timeline-badge\">\n                  <i class=\"zmdi zmdi-format-color-text font-green\"></i>\n              </div>\n              <div class=\"timeline-panel mdl-card mdl-shadow--2dp  pt-30 pb-30 border-top-green\">\n                  <div class=\"timeline-heading\">\n                      <h4 class=\"mb-10\">Software Development Engineer</h4>\n                      <span class=\"duration mb-5\">Oct 2014 - Mar 2015</span>\n                      <span class=\"institution\">Fiserv Inc</span>\n                  </div>\n                  <div class=\"timeline-body\">\n                      <p class=\"mt-25\">Heredia, Costa Rica - Orlando, Florida</p>\n                  </div>\n              </div>\n          </li>\n\n          <li>\n              <div class=\"timeline-badge\">\n                  <i class=\"zmdi zmdi-city-alt font-yellow\"></i>\n              </div>\n              <div class=\"timeline-panel mdl-card mdl-shadow--2dp pt-30 pb-30 border-top-yellow\">\n                  <div class=\"timeline-heading\">\n                      <h4 class=\"mb-10\">Senior Technical Support - Consultant</h4>\n                      <span class=\"duration mb-5\">Oct 2014 - Mar 2015</span>\n                      <span class=\"institution\">Tico Electronics</span>\n                  </div>\n                  <div class=\"timeline-body\">\n                      <p class=\"mt-25\">Coyol, Costa Rica</p>\n                  </div>\n              </div>\n          </li>\n\n          <li class=\"clearfix no-float\"></li>\n      </ul>\n  </div>\n</section>\n<!--/Experience Sec-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/interest/interest.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/interest/interest.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Interest Sec-->\n<section id=\"interest_sec\" class=\"interest-sec sec-pad-top-sm\">\n  <h2 class=\"mb-30\">my interests</h2>\n  <div class=\"row\">\n     <div class=\"col-md-2 col-sm-4 col-xs-6 mb-30\">\n        <div class=\"mdl-card mdl-shadow--2dp text-center pa-20 pt-30 pb-30\">\n           <i class=\"zmdi zmdi-radio\"></i>\n           <span>I love music</span>\n        </div>\n     </div>\n     <div class=\"col-md-2 col-sm-4 col-xs-6 mb-30\">\n        <div class=\"mdl-card mdl-shadow--2dp text-center pa-20 pt-30 pb-30\">\n           <i class=\"zmdi zmdi-smartphone-ring\"></i>\n           <span>Gaming</span>\n        </div>\n     </div>\n     <div class=\"col-md-2 col-sm-4 col-xs-6 mb-30\">\n        <div class=\"mdl-card mdl-shadow--2dp text-center pa-20 pt-30 pb-30\">\n           <i class=\"zmdi zmdi-code\"></i>\n           <span>Coding</span>\n        </div>\n     </div>\n     <div class=\"col-md-2 col-sm-4 col-xs-6 mb-30\">\n        <div class=\"mdl-card mdl-shadow--2dp text-center pa-20 pt-30 pb-30\">\n           <i class=\"zmdi zmdi-library\"></i>\n           <span>reading</span>\n        </div>\n     </div>\n     <div class=\"col-md-2 col-sm-4 col-xs-6 mb-30\">\n        <div class=\"mdl-card mdl-shadow--2dp text-center pa-20 pt-30 pb-30\">\n           <i class=\"zmdi zmdi-airplane\"></i>\n           <span>world traveling</span>\n        </div>\n     </div>\n     <div class=\"col-md-2 col-sm-4 col-xs-6 mb-30\">\n        <div class=\"mdl-card mdl-shadow--2dp text-center pa-20 pt-30 pb-30\">\n           <i class=\"zmdi zmdi-dribbble\"></i>\n           <span>Tennis</span>\n        </div>\n     </div>\n  </div>\n</section>\n<!--/Interest Sec-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/portfolio/portfolio.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/portfolio/portfolio.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio_sec\" class=\"portfolio-sec sec-pad-top-sm\">\n  <div class=\"mb-15\">\n    <h2 class=\"pull-left float-none-xs\">portfolio</h2>\n    <div class=\"filter-wrap pull-right float-none-xs\">\n      <!-- Portfolio Filters -->\n      <ul id=\"filters\">\n        <li>\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" (click)=\"toggleFilter({'description':'all'})\">All</button>\n      </li>\n        <li *ngFor=\"let category of categories\">\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" (click)=\"toggleFilter(category)\">{{category.description}}</button>\n        </li>\n      </ul>\n      <!--/Portfolio Filters -->\n      <div class=\"clearfix\"></div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <div class=\"gallery-wrap mb-30\">\n    <div class=\"portfolio-wrap project-gallery\" style=\"width: 940px;\">\n      <ul id=\"portfolio\" class=\"portf auto-construct  project-gallery\" data-col=\"3\">\n        <ng-container *ngFor=\"let project of projects\">\n          <li class=\"item mdl-card mdl-shadow--2dp pa-0 branding\" style=\"max-width: 200px; height: auto; margin: 10px; display: inline-block;\" *ngIf=\"shouldDisplayProject(project)\">\n            <div class=\"light-img-wrap mdl-card__title pa-0\">\n              <img class=\"img-responsive\" [src]=\"project.images[0]\" alt=\"{{project.name}} Image\">\n              <div class=\"light-img-overlay\"></div>\n              <span class=\"img-cap\">{{project.name}}</span>\n            </div>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/price/price.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/price/price.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t\t\t\t\t<!--Price Sec-->\n\t\t\t\t\t\t<section id=\"price_sec\" class=\"price-sec sec-pad-top-sm\">\n                <h2 class=\"mb-30\">pricing</h2>\n                <div class=\"row\">\n                  <!-- item -->\n                  <div class=\"col-sm-4 text-center mb-30\">\n                    <div class=\"mdl-card mdl-shadow--2dp pa-0\">\n                      <div class=\"mdl-card__title pa-0\">\n                        <h5 class=\"block pt-25 pb-20\">basic</h5>\n                        <div class=\"price-bg\">\n                          <span class=\"panel-price block font-blue\"><span class=\"pricing-dolor\">$</span>49</span>\n                          <span class=\"pricing-plan block pt-10\">per month</span>\n                        </div>\n                      </div>\n                      <div class=\"mdl-card__supporting-text text-center pa-0\">\n                        <ul class=\"list-group mb-0 text-center\">\n                          <li class=\"list-group-item\">1 website</li>\n                          <li class=\"list-group-item\">30 GB Storage</li>\n                          <li class=\"list-group-item\">Unlimited bandwidth</li>\n                          <li class=\"list-group-item\">Free email included</li>\n                        </ul>\n                      </div>\n                      <div class=\"mdl-card__actions pt-30 pb-30\">\n                        <a class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  bg-green font-white\" href=\"#\">buy now</a>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- /item -->\n                  <!-- item -->\n                  <div class=\"col-sm-4 text-center mb-30\">\n                    <div class=\"mdl-card mdl-shadow--2dp pa-0\">\n                      <div class=\"mdl-card__title pa-0\">\n                        <h5 class=\"block pt-25 pb-20\">standard</h5>\n                        <div class=\"price-bg\">\n                          <span class=\"panel-price block font-blue\"><span class=\"pricing-dolor\">$</span>99</span>\n                          <span class=\"pricing-plan block pt-10\">per month</span>\n                        </div>\n                      </div>\n                      <div class=\"mdl-card__supporting-text text-center pa-0\">\n                        <ul class=\"list-group mb-0 text-center\">\n                          <li class=\"list-group-item\">1 website</li>\n                          <li class=\"list-group-item\">100 GB storage</li>\n                          <li class=\"list-group-item\">Unlimited bandwidth</li>\n                          <li class=\"list-group-item\">Free domain & email</li>\n                        </ul>\n                      </div>\n                      <div class=\"mdl-card__actions pt-30 pb-30\">\n                        <a class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  bg-green font-white\" href=\"#\">buy now</a>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- /item -->\n                  <!-- item -->\n                  <div class=\"col-sm-4 text-center mb-30\">\n                    <div class=\"mdl-card mdl-shadow--2dp pa-0\">\n                      <div class=\"mdl-card__title pa-0\">\n                        <h5 class=\"block pt-25 pb-20\">business</h5>\n                        <div class=\"price-bg\">\n                          <span class=\"panel-price block font-blue\"><span class=\"pricing-dolor\">$</span>199</span>\n                          <span class=\"pricing-plan block pt-10\">per month</span>\n                        </div>\n                      </div>\n                      <div class=\"mdl-card__supporting-text text-center pa-0\">\n                        <ul class=\"list-group mb-0 text-center\">\n                          <li class=\"list-group-item\">Unlimited websites</li>\n                          <li class=\"list-group-item\">Unlimited storage</li>\n                          <li class=\"list-group-item\">Unlimited bandwidth</li>\n                          <li class=\"list-group-item\">Free domain & email</li>\n                        </ul>\n                      </div>\n                      <div class=\"mdl-card__actions pt-30 pb-30\">\n                        <a class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect  bg-green font-white\" href=\"#\">buy now</a>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- /item -->\n                </div>\n              </section>\n              <!--/Price Sec-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Profile Sec-->\n<section id=\"profile_sec\" class=\"profile-sec sec-pad-top-sm\">\n  <h2 class=\"mb-30\">what i do</h2>\n  <div class=\"row\">\n     <div class=\"col-md-3 col-sm-6 col-xs-12 mb-30\">\n        <div class=\"mdl-card mdl-shadow--2dp\">\n           <i class=\"zmdi zmdi-code font-blue profile-icon\"></i>\n           <h4 class=\"mb-15\">Software Development</h4>\n           <div>\n              I create software for web, mobile and backend services, following the latest standards in the market in order to produce a good quality end product.\n           </div>\n        </div>\n     </div>\n     <div class=\"col-md-3 col-sm-6 col-xs-12 mb-30\">\n        <div class=\"mdl-card mdl-shadow--2dp\">\n           <i class=\"zmdi zmdi-face font-green profile-icon\"></i>\n           <h4 class=\"mb-15\">People Management</h4>\n           <div>\n              I manage to make myself a lead in most of the teams I work with, always thriving to help the organization reach the goal defined by management\n           </div>\n        </div>\n     </div>\n     <div class=\"col-md-3 col-sm-6 col-xs-12 mb-30\">\n        <div class=\"mdl-card mdl-shadow--2dp\">\n           <i class=\"zmdi zmdi-comments font-yellow profile-icon\"></i>\n           <h4 class=\"mb-15\">Networking</h4>\n           <div>\n              In my years of freelancing I have come accross many requirements from diferent clients, this has made my network of connections grow exponentially, if I cannot do your project I can surely find someone who can help you\n           </div>\n        </div>\n     </div>\n     <div class=\"col-md-3 col-sm-6 col-xs-12 mb-30\">\n        <div class=\"mdl-card mdl-shadow--2dp\">\n           <i class=\"zmdi zmdi-grain font-red profile-icon\"></i>\n           <h4 class=\"mb-15\">IT Strategy</h4>\n           <p>Do you have an idea for a project but no idea how to start with it? I can surely guide you with my consultant services in the jungle that we call IT!</p>\n        </div>\n     </div>\n  </div>\n</section>\n<!--/Profile Sec-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/reference/reference.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/reference/reference.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--References Sec-->\n<section id=\"references_sec\" class=\"reference-sec sec-pad-top-sm\">\n    <h2 class=\"mb-30\">Testimonials and references</h2>\n    <div class=\"row\">\n        <div class=\"col-sm-12 mb-30\">\n            <div class=\"mdl-card mdl-shadow--2dp border-top-yellow pa-35\">\n                <div class=\"testimonial-carousel\">\n                    <div>\n                        <blockquote>\"Marny is not only a pleasure to work with, but his technical capabilities and work ethic are stellar. I also appreciate that when something unforeseen comes up, Marny is quick to research and come up with a solution (or options) versus waiting for direction. Working with him via a near-shore model, Marny communicates very frequently making it seem less like he is just down the road working remotely!\"</blockquote>\n                        <span class=\"ref-name block mb-5 mt-20\">Parimal Patel</span>\n                        <span class=\"ref-desgn block\">Chief Operating Officer at Stratecha</span>\n                    </div>\n                    <div>\n                        <blockquote>\"Marny is a conscientious, thorough and expert Full Stack Developer. He is adept at assessing issues and requirements, solving problems and coding solutions in an efficient and high quality fashion. But, most of what I enjoyed about Marny is his positive/can-do attitude, and his willingness to be a team player. I hope to continue to work with Marny in the future, and I am proud to work with Marny as part of our extended team. Thank you Marny.\"</blockquote>\n                        <span class=\"ref-name block mb-5 mt-20\">Bob Foster</span>\n                        <span class=\"ref-desgn block\">President & Founder @ GlobalNow.Inc</span>\n                    </div>\n                    <div>\n                        <blockquote>\"Marny ha trabajado brindando servicios profesionales para la Asociación donde laboro. Ha desempeñado su trabajo con gran profesionalismo, responsabilidad y entrega. Queda altamente recomendado por el trabajo de calidad que brinda y el respaldo de un servicio 100 % garantizado. Su grado de confidencialidad es otro gran atributo que otorga al mismo, dada la importancia de la información que maneja.\"</blockquote>\n                        <span class=\"ref-name block mb-5 mt-20\">Sylvia Naranjo</span>\n                        <span class=\"ref-desgn block\">Administrativa en AseFiserv</span>\n                    </div>\n                    <div>\n                        <blockquote>\"Marny is a hard worker willing to learn about different technologies and ways to do things in an alternate way, always having the Client's satisfaction on his scope when resolving.\"</blockquote>\n                        <span class=\"ref-name block mb-5 mt-20\">Joseph Rodriguez</span>\n                        <span class=\"ref-desgn block\">Manager at Fiserv</span>\n                    </div>\n                    <div>\n                        <blockquote>\"Súper recomendado, muy competente y efectivo con su labor. Otro punto a resaltar es el que es razonable con los costos de sus servicios profesionales.\"</blockquote>\n                        <span class=\"ref-name block mb-5 mt-20\">Ellyn Ramirez</span>\n                        <span class=\"ref-desgn block\">Abogada y notaria independiente</span>\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n            </div>\n        </div>\n    </div>\n\n</section>\n<!--/References Sec-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/skills/skills.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/skills/skills.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Skills Sec-->\n<section id=\"skills_sec\" class=\"skills-sec sec-pad-top-sm\">\n  <div class=\"row\">\n     <div class=\"col-sm-6 mb-30\">\n        <h2 class=\"mb-30\">technical skills</h2>\n        <div class=\"mdl-card mdl-shadow--2dp\">\n           <!-- FRONTEND vs BACKEND -->\n           <div class=\"mb-30\">\n              <div class=\"row\">\n                 <div class=\"col-md-6\">\n                    <span class=\"progress-cat\">FrontEnd</span>\n                    <div class=\"progress-bar-graph\">\n                       <div class=\"progress-bar-wrap\">\n                          <div class=\"bar-wrap blue-bar\">\n                             <span data-width=\"70\"></span>\n                          </div>\n                       </div>\n                    </div>\n                 </div>\n                 <div class=\"col-md-6\">\n                    <span class=\"progress-cat\">Backend</span>\n                    <div class=\"progress-bar-graph\">\n                       <div class=\"progress-bar-wrap\">\n                          <div class=\"bar-wrap green-bar\">\n                             <span data-width=\"85\"></span>\n                          </div>\n                       </div>\n                    </div>\n                 </div>\n              </div>\n           </div>\n           <!-- PROGRAMMING LANGUAGES -->\n           <div class=\"mb-30\">\n              <span class=\"progress-cat\">PHP</span>\n              <div class=\"progress-bar-graph\">\n                 <div class=\"progress-bar-wrap\">\n                    <div class=\"bar-wrap green-bar\">\n                       <span data-width=\"95\"></span>\n                    </div>\n                 </div>\n              </div>\n           </div>\n           <div class=\"mb-30\">\n              <span class=\"progress-cat\">C#</span>\n              <div class=\"progress-bar-graph\">\n                 <div class=\"progress-bar-wrap\">\n                    <div class=\"bar-wrap yellow-bar\">\n                       <span data-width=\"35\"></span>\n                    </div>\n                 </div>\n              </div>\n           </div>\n           <div class=\"mb-30\">\n              <span class=\"progress-cat\">Java</span>\n              <div class=\"progress-bar-graph\">\n                 <div class=\"progress-bar-wrap\">\n                    <div class=\"bar-wrap green-bar\">\n                       <span data-width=\"45\"></span>\n                    </div>\n                 </div>\n              </div>\n           </div>\n           <div class=\"mb-30\">\n              <span class=\"progress-cat\">Angular</span>\n              <div class=\"progress-bar-graph\">\n                 <div class=\"progress-bar-wrap\">\n                    <div class=\"bar-wrap red-bar\">\n                       <span data-width=\"80\"></span>\n                    </div>\n                 </div>\n              </div>\n           </div>\n           <div class=\"mb-30\">\n              <span class=\"progress-cat\">Java</span>\n              <div class=\"progress-bar-graph\">\n                 <div class=\"progress-bar-wrap\">\n                    <div class=\"bar-wrap blue-bar\">\n                       <span data-width=\"45\"></span>\n                    </div>\n                 </div>\n              </div>\n           </div>\n        </div>\n     </div>\n     <div class=\"col-sm-6 mb-30\">\n        <h2 class=\"mb-30\">project / team management skills</h2>\n        <div class=\"mdl-card mdl-shadow--2dp\">\n           <div class=\"mb-30\">\n              <span class=\"progress-cat\">Team Leadership</span>\n              <div class=\"progress-bar-graph\">\n                 <div class=\"progress-bar-wrap\">\n                    <div class=\"bar-wrap blue-bar\">\n                       <span data-width=\"70\"></span>\n                    </div>\n                 </div>\n              </div>\n           </div>\n           <div class=\"mb-30\">\n              <span class=\"progress-cat\">Agile</span>\n              <div class=\"progress-bar-graph\">\n                 <div class=\"progress-bar-wrap\">\n                    <div class=\"bar-wrap green-bar\">\n                       <span data-width=\"95\"></span>\n                    </div>\n                 </div>\n              </div>\n           </div>\n           <div class=\"mb-30\">\n              <span class=\"progress-cat\">Project Management</span>\n              <div class=\"progress-bar-graph\">\n                 <div class=\"progress-bar-wrap\">\n                    <div class=\"bar-wrap red-bar\">\n                       <span data-width=\"80\"></span>\n                    </div>\n                 </div>\n              </div>\n           </div>\n           <div class=\"mb-30\">\n              <span class=\"progress-cat\">Business Thinking</span>\n              <div class=\"progress-bar-graph\">\n                 <div class=\"progress-bar-wrap\">\n                    <div class=\"bar-wrap blue-bar\">\n                       <span data-width=\"70\"></span>\n                    </div>\n                 </div>\n              </div>\n           </div>\n           <div class=\"mb-30\">\n              <span class=\"progress-cat\">General Knowledge</span>\n              <div class=\"progress-bar-graph\">\n                 <div class=\"progress-bar-wrap\">\n                    <div class=\"bar-wrap yellow-bar\">\n                       <span data-width=\"80\"></span>\n                    </div>\n                 </div>\n              </div>\n           </div>\n           <div class=\"mb-30\">\n              <span class=\"progress-cat\">Entrepreneurship knowledge</span>\n              <div class=\"progress-bar-graph\">\n                 <div class=\"progress-bar-wrap\">\n                    <div class=\"bar-wrap green-bar\">\n                       <span data-width=\"100\"></span>\n                    </div>\n                 </div>\n              </div>\n           </div>\n        </div>\n     </div>\n  </div>\n</section>\n<!--/Skills Sec-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Sec-->\n<footer class=\"footer-sec sec-pad-top-sm sec-pad-bottom text-center\">\n    <h4>thank you for visiting. I look forward to hear from you!.</h4>\n    <p class=\"mt-10\">Marny Lopez  2019</p>\n    <app-social-icons></app-social-icons>\n</footer>\n<!--Footer Sec-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout__header-row .full-width-header mdl-scroll-spy-1\">\n    <!-- Title -->\n    <a href=\"index.html\"><span class=\"mdl-layout-title\">marny lopez</span></a>\n    <div class=\"mdl-layout-spacer\"></div>\n    <ul class=\"nav mdl-navigation mdl-layout--large-screen-only\">\n      <li><a class=\"mdl-navigation__link\" data-scroll href=\"#body\">about</a></li>\n      <li><a class=\"mdl-navigation__link\" data-scroll href=\"#skills_sec\">skills</a></li>\n      <li><a class=\"mdl-navigation__link\" data-scroll href=\"#portfolio_sec\">portfolio</a></li>\n      <li><a class=\"mdl-navigation__link\" data-scroll href=\"#experience_sec\">experience</a></li>\n      <li><a class=\"mdl-navigation__link\" data-scroll href=\"#education_sec\">education</a></li>\n      <li><span id=\"blog_drp\" class=\"mdl-navigation__link\">blog</span>\n        <ul class=\"mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect\"\n          data-mdl-for=\"blog_drp\">\n          <li class=\"mdl-menu__item\"><a href=\"https://www.youtube.com/channel/UC8Cot-X1Rx5IgHocBQ21tOw\">My Youtube Channel</a></li>\n          <li class=\"mdl-menu__item\"><a href=\"https://www.linkedin.com/in/marnylopez/detail/recent-activity/posts/\">My blog posts</a></li>\n        </ul>\n      </li>\n      <li><a class=\"mdl-navigation__link\" data-scroll href=\"#references_sec\">references</a></li>\n      <li><a class=\"mdl-navigation__link\" data-scroll href=\"#contact_sec\">contact</a></li>\n    </ul>\n    <!-- Right aligned menu below button -->\n    <button id=\"demo-menu-lower-right\"\n        class=\"mdl-button mdl-js-button mdl-button--icon ver-more-btn\">\n      <i class=\"material-icons\">more_vert</i>\n    </button>\n\n    <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\"\n      data-mdl-for=\"demo-menu-lower-right\">\n      <li class=\"mdl-menu__item\"><a href=\"https://linkedin.com/in/marnylopez\"><i class=\"zmdi zmdi-download font-red pr-10\"></i>Download CV</a></li>\n      <li class=\"mdl-menu__item\"><a href=\"mailto:marny.lopez@myndsit.com\"><i class=\"zmdi zmdi-email-open font-green pr-10\"></i>Contact Me</a></li>\n      <li class=\"mdl-menu__item\"><a href=\"callto:50660453526\"><i class=\"zmdi zmdi-phone  font-blue  pr-10\"></i>+506 6045 3526</a></li>\n    </ul>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/preloader/preloader.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/preloader/preloader.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Preloader-->\n<div class=\"preloader-it\">\n    <div class=\"mdl-spinner mdl-js-spinner is-active is-upgraded\" data-upgraded=\",MaterialSpinner\">\n        <div class=\"mdl-spinner__layer mdl-spinner__layer-1\">\n            <div class=\"mdl-spinner__circle-clipper mdl-spinner__left\">\n                <div class=\"mdl-spinner__circle\"></div>\n            </div>\n            <div class=\"mdl-spinner__gap-patch\">\n                <div class=\"mdl-spinner__circle\"></div>\n            </div>\n            <div class=\"mdl-spinner__circle-clipper mdl-spinner__right\">\n                <div class=\"mdl-spinner__circle\"></div>\n            </div>\n        </div>\n        <div class=\"mdl-spinner__layer mdl-spinner__layer-2\">\n            <div class=\"mdl-spinner__circle-clipper mdl-spinner__left\">\n                <div class=\"mdl-spinner__circle\"></div>\n            </div>\n            <div class=\"mdl-spinner__gap-patch\">\n                <div class=\"mdl-spinner__circle\"></div>\n            </div>\n            <div class=\"mdl-spinner__circle-clipper mdl-spinner__right\">\n                <div class=\"mdl-spinner__circle\"></div>\n            </div>\n        </div>\n        <div class=\"mdl-spinner__layer mdl-spinner__layer-3\">\n            <div class=\"mdl-spinner__circle-clipper mdl-spinner__left\">\n                <div class=\"mdl-spinner__circle\"></div>\n            </div>\n            <div class=\"mdl-spinner__gap-patch\">\n                <div class=\"mdl-spinner__circle\"></div>\n            </div>\n            <div class=\"mdl-spinner__circle-clipper mdl-spinner__right\">\n                <div class=\"mdl-spinner__circle\"></div>\n            </div>\n        </div>\n        <div class=\"mdl-spinner__layer mdl-spinner__layer-4\">\n            <div class=\"mdl-spinner__circle-clipper mdl-spinner__left\">\n                <div class=\"mdl-spinner__circle\"></div>\n            </div>\n            <div class=\"mdl-spinner__gap-patch\">\n                <div class=\"mdl-spinner__circle\"></div>\n            </div>\n            <div class=\"mdl-spinner__circle-clipper mdl-spinner__right\">\n                <div class=\"mdl-spinner__circle\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--/Preloader-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/sidebar/sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nicescroll-bar\">\n    <div class=\"drawer-profile-wrap\">\n        <div class=\"candidate-img-drawer mt-25 mb-20\"></div>\n        <span class=\"candidate-name block mb-10 text-center\">marny lopez</span>\n        <app-social-icons ></app-social-icons>\n        <div class=\"mb-30\"></div>\n    </div>\n    <div class=\"mdl-scroll-spy-2\">\n        <ul class=\"mdl-navigation\">\n            <li>\n                <a class=\"mdl-navigation__link border-top-sep\" data-scroll href=\"#body\">\n                    <i class=\"zmdi zmdi-border-color pr-15\"></i>\n                    <span class=\"font-capitalize\">about</span>\n                </a>\n            </li>\n            <li>\n                <a class=\"mdl-navigation__link border-top-sep\" data-scroll href=\"#skills_sec\">\n                    <i class=\"zmdi zmdi-cutlery pr-15\"></i>\n                    <span class=\"font-capitalize\">skills</span>\n                </a>\n            </li>\n            <li>\n                <a class=\"mdl-navigation__link border-top-sep\" data-scroll href=\"#portfolio_sec\">\n                    <i class=\"zmdi zmdi-case pr-15\"></i>\n                    <span class=\"font-capitalize\">portfolio</span>\n                </a>\n            </li>\n            <li>\n                <a class=\"mdl-navigation__link border-top-sep\" data-scroll href=\"#experience_sec\">\n                    <i class=\"zmdi zmdi-shield-check pr-15\"></i>\n                    <span class=\"font-capitalize\">experience</span>\n                </a>\n            </li>\n            <li>\n                <a class=\"mdl-navigation__link border-top-sep\" data-scroll href=\"#education_sec\">\n                    <i class=\"zmdi zmdi-library pr-15\"></i>\n                    <span class=\"font-capitalize\">education</span>\n                </a>\n            </li>\n          <!--\n            <li>\n                <a class=\"mdl-navigation__link border-top-sep\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#blog_dr\">\n                    <i class=\"zmdi zmdi-tag-more pr-15\"></i>\n                    <span class=\"font-capitalize\">blog</span>\n                </a>\n                <ul id=\"blog_dr\" class=\"collapse collapse-level-1\">\n                    <li><a class=\"mdl-navigation__link border-top-sep\" href=\"blog-list.html\">Blog List</a></li>\n                    <li><a class=\"mdl-navigation__link border-top-sep\" href=\"image-blog-post.html\">Image Blog Post</a></li>\n                    <li><a class=\"mdl-navigation__link border-top-sep\" href=\"gallery-blog-post.html\">Gallery Blog Post</a></li>\n                    <li><a class=\"mdl-navigation__link border-top-sep\" href=\"youtube-blog-post.html\">Youtube Blog Post</a></li>\n                    <li><a class=\"mdl-navigation__link border-top-sep\" href=\"vimeo-blog-post.html\">Vimeo Blog Post</a></li>\n                    <li><a class=\"mdl-navigation__link border-top-sep\" href=\"audio-blog-post.html\">Audio Blog Post</a></li>\n                </ul>\n            </li>\n          -->\n\n            <li>\n                <a class=\"mdl-navigation__link border-top-sep\" data-scroll href=\"#references_sec\">\n                    <i class=\"zmdi zmdi-bookmark pr-15\"></i>\n                    <span class=\"font-capitalize\">references</span>\n                </a>\n            </li>\n\n            <li>\n                <a class=\"mdl-navigation__link border-top-sep border-bottom-sep\" data-scroll href=\"#contact_sec\">\n                    <i class=\"zmdi zmdi-email pr-15\"></i>\n                    <span class=\"font-capitalize\">contact</span>\n                </a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"drawer-footer mt-50 mb-30 text-center\">\n        <p class=\"font-12 mt-10\">Marny Lopez &copy; 2019.</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/social-icons/social-icons.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/social-icons/social-icons.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"social-icons\">\n    <li>\n        <a class=\"facebook-link\" href=\"https://fb.com/marny.lopez\">\n            <i id=\"tt1\" class=\"zmdi zmdi-facebook\"></i>\n            <div class=\"mdl-tooltip\" data-mdl-for=\"tt1\">\n                facebook\n            </div>\n        </a>\n    </li>\n    <li>\n        <a class=\"twitter-link\" href=\"https://twitter.com/i_MrLopez\">\n            <i id=\"tt2\" class=\"zmdi zmdi-twitter\"></i>\n            <div class=\"mdl-tooltip\" data-mdl-for=\"tt2\">\n                twitter\n            </div>\n        </a>\n    </li>\n    <li>\n        <a class=\"linkedin-link\" href=\"https://www.linkedin.com/in/marnylopez/\">\n            <i id=\"tt3\" class=\"zmdi zmdi-linkedin\"></i>\n            <div class=\"mdl-tooltip\" data-mdl-for=\"tt3\">\n                linkedin\n            </div>\n        </a>\n    </li>\n    <li>\n        <a class=\"github-link\" href=\"https://github.com/iMrLopez\">\n            <i id=\"tt4\" class=\"zmdi zmdi-github-alt\"></i>\n            <div class=\"mdl-tooltip\" data-mdl-for=\"tt4\">\n                Github\n            </div>\n        </a>\n    </li>\n    <li>\n        <a class=\"instagram-link\" href=\"https://www.instagram.com/i_mrlopez/\">\n            <i id=\"tt5\" class=\"zmdi zmdi-instagram\"></i>\n            <div class=\"mdl-tooltip\" data-mdl-for=\"tt5\">\n                instagram\n            </div>\n        </a>\n    </li>\n</ul>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
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



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
        this.title = 'MyResume';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/preloader/preloader.component */ "./src/app/shared/preloader/preloader.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_interest_interest_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/interest/interest.component */ "./src/app/components/interest/interest.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_reference_reference_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/reference/reference.component */ "./src/app/components/reference/reference.component.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
/* harmony import */ var _components_price_price_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/price/price.component */ "./src/app/components/price/price.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/social-icons/social-icons.component */ "./src/app/shared/social-icons/social-icons.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _shared_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__["PreloaderComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
                _components_interest_interest_component__WEBPACK_IMPORTED_MODULE_13__["InterestComponent"],
                _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_14__["ExperienceComponent"],
                _components_education_education_component__WEBPACK_IMPORTED_MODULE_15__["EducationComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_16__["BlogComponent"],
                _components_reference_reference_component__WEBPACK_IMPORTED_MODULE_17__["ReferenceComponent"],
                _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_18__["ClientsComponent"],
                _components_price_price_component__WEBPACK_IMPORTED_MODULE_19__["PriceComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                _shared_social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_22__["SocialIconsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.anio = new Date().getFullYear();
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        })
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/clients.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/clients/clients.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/clients/clients.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/clients/clients.component.ts ***!
  \*********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! raw-loader!./clients.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/components/clients/clients.component.css")]
        })
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/education/education.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/education/education.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/components/education/education.component.css")]
        })
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/components/experience/experience.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
        this.fecha = new Date().getDate();
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/components/experience/experience.component.css")]
        })
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/interest/interest.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/interest/interest.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50ZXJlc3QvaW50ZXJlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/interest/interest.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/interest/interest.component.ts ***!
  \***********************************************************/
/*! exports provided: InterestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestComponent", function() { return InterestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InterestComponent = /** @class */ (function () {
    function InterestComponent() {
    }
    InterestComponent.prototype.ngOnInit = function () {
    };
    InterestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interest',
            template: __webpack_require__(/*! raw-loader!./interest.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/interest/interest.component.html"),
            styles: [__webpack_require__(/*! ./interest.component.css */ "./src/app/components/interest/interest.component.css")]
        })
    ], InterestComponent);
    return InterestComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(http) {
        var _this = this;
        this.http = http;
        this.appliedFilters = new Array();
        this.http.get('../../assets/data/portfolio/projects.json').toPromise().then(function (response) { return _this.projects = response; });
        this.http.get('../../assets/data/portfolio/categories.json').toPromise().then(function (response) { return _this.categories = response; });
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent.prototype.toggleFilter = function ($e) {
        if ($e.description === 'all') {
            this.appliedFilters = new Array();
            return;
        }
        var foundIdx = this.appliedFilters.findIndex(function (el) { return el == $e; });
        if (foundIdx > -1) {
            this.appliedFilters.splice(foundIdx, 1);
        }
        else {
            this.appliedFilters.push($e);
        }
        console.log(this.appliedFilters, $e);
    };
    PortfolioComponent.prototype.shouldDisplayProject = function (proj) {
        if (this.appliedFilters.length === 0) {
            return true;
        }
        var found = this.appliedFilters.findIndex(function (el) { return el.description == proj.type.description; });
        return (found > -1);
    };
    PortfolioComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/components/portfolio/portfolio.component.css")]
        })
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/price/price.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/price/price.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpY2UvcHJpY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/price/price.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/price/price.component.ts ***!
  \*****************************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PriceComponent = /** @class */ (function () {
    function PriceComponent() {
    }
    PriceComponent.prototype.ngOnInit = function () {
    };
    PriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-price',
            template: __webpack_require__(/*! raw-loader!./price.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.css */ "./src/app/components/price/price.component.css")]
        })
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/reference/reference.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/reference/reference.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVmZXJlbmNlL3JlZmVyZW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/reference/reference.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/reference/reference.component.ts ***!
  \*************************************************************/
/*! exports provided: ReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function() { return ReferenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReferenceComponent = /** @class */ (function () {
    function ReferenceComponent() {
    }
    ReferenceComponent.prototype.ngOnInit = function () {
    };
    ReferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reference',
            template: __webpack_require__(/*! raw-loader!./reference.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/reference/reference.component.html"),
            styles: [__webpack_require__(/*! ./reference.component.css */ "./src/app/components/reference/reference.component.css")]
        })
    ], ReferenceComponent);
    return ReferenceComponent;
}());



/***/ }),

/***/ "./src/app/components/skills/skills.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/skills/skills.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/components/skills/skills.component.css")]
        })
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/preloader/preloader.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/preloader/preloader.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcmVsb2FkZXIvcHJlbG9hZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/preloader/preloader.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/preloader/preloader.component.ts ***!
  \*********************************************************/
/*! exports provided: PreloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function() { return PreloaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreloaderComponent = /** @class */ (function () {
    function PreloaderComponent() {
    }
    PreloaderComponent.prototype.ngOnInit = function () {
    };
    PreloaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preloader',
            template: __webpack_require__(/*! raw-loader!./preloader.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/preloader/preloader.component.html"),
            styles: [__webpack_require__(/*! ./preloader.component.css */ "./src/app/shared/preloader/preloader.component.css")]
        })
    ], PreloaderComponent);
    return PreloaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/shared/sidebar/sidebar.component.css")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/social-icons/social-icons.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/social-icons/social-icons.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zb2NpYWwtaWNvbnMvc29jaWFsLWljb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/social-icons/social-icons.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/social-icons/social-icons.component.ts ***!
  \***************************************************************/
/*! exports provided: SocialIconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIconsComponent", function() { return SocialIconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SocialIconsComponent = /** @class */ (function () {
    function SocialIconsComponent() {
    }
    SocialIconsComponent.prototype.ngOnInit = function () {
    };
    SocialIconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social-icons',
            template: __webpack_require__(/*! raw-loader!./social-icons.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/social-icons/social-icons.component.html"),
            styles: [__webpack_require__(/*! ./social-icons.component.css */ "./src/app/shared/social-icons/social-icons.component.css")]
        })
    ], SocialIconsComponent);
    return SocialIconsComponent;
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

module.exports = __webpack_require__(/*! /Users/marny.lopez/DevEnv/myndsit/iMrLopez/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map