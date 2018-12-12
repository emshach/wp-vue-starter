(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./js/components/home/index.js":
/*!*************************************!*\
  !*** ./js/components/home/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/store */ "./js/lib/store.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  template: __webpack_require__(/*! ./template.html */ "./js/components/home/template.html"),
  data: function data() {
    return {
      sstate: _lib_store__WEBPACK_IMPORTED_MODULE_0__["default"].state,
      latest: [],
      trending: [],
      recent: [],
      history: [],
      discovery: [],
      favs: [],
      img: ''
    };
  },
  mounted: function mounted() {
    var self = this;
    wp.api.loadPromise.done(function () {
      var path = new wp.api.models.Path();
      console.log('path object', path);
      path.fetch().done(function (rpost) {
        console.log('got home page', rpost);
        path.getFeaturedMedia().done(function (rmedia) {
          // console.log( 'media object', rmedia, rmedia.get( 'source_url' ));
          self.img = rmedia.get('source_url');
        });
      });
    });
  }
});

/***/ }),

/***/ "./js/components/home/template.html":
/*!******************************************!*\
  !*** ./js/components/home/template.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home page\">\n  <div id=\"bg-image-wrapper\">\n    <transition>\n      <img id=\"bg-image\" v-if=\"img\" :src=\"img\"/>\n    </transition>\n  </div>\n  <wp-header></wp-header>\n  <div class=\"featured-wrapper\">\n    <carousel id=\"featured\" topic=\"featured\"></carousel>\n  </div>\n\n  <main role=\"main\">\n    <content-list title=\"latest\" :contents=\"latest\"></content-list>\n    <filmstrip title=\"trending\" :contents=\"trending\"></filmstrip>\n    <filmstrip title=\"recent activity\" :contents=\"recent\"></filmstrip>\n    <filmstrip title=\"pull up\" :contents=\"history\"></filmstrip>\n    <filmstrip title=\"you might like\" :contents=\"discovery\"></filmstrip>\n    <filmstrip title=\"my faves\" :contents=\"favs\"></filmstrip>\n  </main>\n  <carousel-nav></carousel-nav>\n  <wp-footer></wp-footer>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=10.js.map