(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory();
	else
		root["VueMaterial"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(44);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = install;
	
	var _mdCard = __webpack_require__(45);
	
	var _mdCard2 = _interopRequireDefault(_mdCard);
	
	var _mdCardMedia = __webpack_require__(49);
	
	var _mdCardMedia2 = _interopRequireDefault(_mdCardMedia);
	
	var _mdCardMediaCover = __webpack_require__(52);
	
	var _mdCardMediaCover2 = _interopRequireDefault(_mdCardMediaCover);
	
	var _mdCardMediaActions = __webpack_require__(55);
	
	var _mdCardMediaActions2 = _interopRequireDefault(_mdCardMediaActions);
	
	var _mdCardHeader = __webpack_require__(57);
	
	var _mdCardHeader2 = _interopRequireDefault(_mdCardHeader);
	
	var _mdCardHeaderText = __webpack_require__(59);
	
	var _mdCardHeaderText2 = _interopRequireDefault(_mdCardHeaderText);
	
	var _mdCardContent = __webpack_require__(62);
	
	var _mdCardContent2 = _interopRequireDefault(_mdCardContent);
	
	var _mdCardActions = __webpack_require__(64);
	
	var _mdCardActions2 = _interopRequireDefault(_mdCardActions);
	
	var _mdCardArea = __webpack_require__(66);
	
	var _mdCardArea2 = _interopRequireDefault(_mdCardArea);
	
	var _mdCardExpand = __webpack_require__(69);
	
	var _mdCardExpand2 = _interopRequireDefault(_mdCardExpand);
	
	var _mdCard3 = __webpack_require__(72);
	
	var _mdCard4 = _interopRequireDefault(_mdCard3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function install(Vue) {
	  Vue.component('md-card', Vue.extend(_mdCard2.default));
	  Vue.component('md-card-media', Vue.extend(_mdCardMedia2.default));
	  Vue.component('md-card-media-cover', Vue.extend(_mdCardMediaCover2.default));
	  Vue.component('md-card-media-actions', Vue.extend(_mdCardMediaActions2.default));
	  Vue.component('md-card-header', Vue.extend(_mdCardHeader2.default));
	  Vue.component('md-card-header-text', Vue.extend(_mdCardHeaderText2.default));
	  Vue.component('md-card-content', Vue.extend(_mdCardContent2.default));
	  Vue.component('md-card-actions', Vue.extend(_mdCardActions2.default));
	  Vue.component('md-card-area', Vue.extend(_mdCardArea2.default));
	  Vue.component('md-card-expand', Vue.extend(_mdCardExpand2.default));
	
	  Vue.material.styles.push(_mdCard4.default);
	}
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(46)
	
	/* script */
	__vue_exports__ = __webpack_require__(47)
	
	/* template */
	var __vue_template__ = __webpack_require__(48)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\User\\Desktop\\intellij\\vue-material\\src\\components\\mdCard\\mdCard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a9cbb646", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a9cbb646", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdCard.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 46 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    mdWithHover: Boolean
	  },
	  computed: {
	    classes: function classes() {
	      return {
	        'md-with-hover': this.mdWithHover
	      };
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "md-card",
	    class: _vm.classes
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a9cbb646", module.exports)
	  }
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(50)
	
	/* template */
	var __vue_template__ = __webpack_require__(51)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\User\\Desktop\\intellij\\vue-material\\src\\components\\mdCard\\mdCardMedia.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-97f03d92", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-97f03d92", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdCardMedia.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    mdRatio: String,
	    mdMedium: Boolean,
	    mdBig: Boolean
	  },
	  computed: {
	    classes: function classes() {
	      var classes = {
	        'md-16-9': this.mdRatio === '16:9' || this.mdRatio === '16/9',
	        'md-4-3': this.mdRatio === '4:3' || this.mdRatio === '4/3',
	        'md-1-1': this.mdRatio === '1:1' || this.mdRatio === '1/1'
	      };
	
	      if (this.mdMedium || this.mdBig) {
	        classes = {
	          'md-medium': this.mdMedium,
	          'md-big': this.mdBig
	        };
	      }
	
	      return classes;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "md-card-media",
	    class: _vm.classes
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-97f03d92", module.exports)
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(53)
	
	/* template */
	var __vue_template__ = __webpack_require__(54)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\User\\Desktop\\intellij\\vue-material\\src\\components\\mdCard\\mdCardMediaCover.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d360e120", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d360e120", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdCardMediaCover.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	
	var getImageAlpha = function getImageAlpha(image, onLoad) {
	  var canvas = document.createElement('canvas');
	
	  image.onload = function () {
	    var colorSum = 0;
	    var ctx = void 0;
	    var imageData = void 0;
	    var imageMetadata = void 0;
	    var r = void 0;
	    var g = void 0;
	    var b = void 0;
	    var average = void 0;
	
	    canvas.width = this.width;
	    canvas.height = this.height;
	    ctx = canvas.getContext('2d');
	
	    ctx.drawImage(this, 0, 0);
	
	    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	    imageMetadata = imageData.data;
	
	    for (var x = 0, len = imageMetadata.length; x < len; x += 4) {
	      r = imageMetadata[x];
	      g = imageMetadata[x + 1];
	      b = imageMetadata[x + 2];
	
	      average = Math.floor((r + g + b) / 3);
	      colorSum += average;
	    }
	
	    onLoad(Math.floor(colorSum / (this.width * this.height)));
	  };
	};
	
	exports.default = {
	  props: {
	    mdTextScrim: Boolean,
	    mdSolid: Boolean
	  },
	  data: function data() {
	    return {
	      backdropBg: {}
	    };
	  },
	
	  computed: {
	    classes: function classes() {
	      return {
	        'md-text-scrim': this.mdTextScrim,
	        'md-solid': this.mdSolid
	      };
	    },
	    styles: function styles() {
	      return {
	        background: this.backdropBg
	      };
	    }
	  },
	  methods: {
	    applyScrimColor: function applyScrimColor(darkness) {
	      if (this.$refs.backdrop) {
	        this.backdropBg = 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, ' + darkness / 2 + ') 66%, rgba(0, 0, 0, ' + darkness + ') 100%)';
	      }
	    },
	    applySolidColor: function applySolidColor(darkness) {
	      var area = this.$el.querySelector('.md-card-area');
	
	      if (area) {
	        area.style.background = 'rgba(0, 0, 0, ' + darkness + ')';
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    var image = this.$el.querySelector('img');
	
	    if (image && (this.mdTextScrim || this.mdSolid)) {
	      getImageAlpha(image, function (lightness) {
	        var limit = 256;
	        var darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100;
	
	        if (darkness >= 0.7) {
	          darkness = 0.7;
	        }
	
	        if (_this.mdTextScrim) {
	          _this.applyScrimColor(darkness);
	        } else if (_this.mdSolid) {
	          _this.applySolidColor(darkness);
	        }
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "md-card-media-cover",
	    class: _vm.classes
	  }, [_vm._t("default"), _vm._v(" "), (_vm.mdTextScrim) ? _c('div', {
	    ref: "backdrop",
	    staticClass: "md-card-backdrop",
	    style: (_vm.styles)
	  }) : _vm._e()], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d360e120", module.exports)
	  }
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(56)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\User\\Desktop\\intellij\\vue-material\\src\\components\\mdCard\\mdCardMediaActions.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2eb86514", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2eb86514", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdCardMediaActions.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "md-card-media-actions"
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2eb86514", module.exports)
	  }
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(58)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\User\\Desktop\\intellij\\vue-material\\src\\components\\mdCard\\mdCardHeader.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5c59656c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5c59656c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdCardHeader.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "md-card-header"
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5c59656c", module.exports)
	  }
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(60)
	
	/* template */
	var __vue_template__ = __webpack_require__(61)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\User\\Desktop\\intellij\\vue-material\\src\\components\\mdCard\\mdCardHeaderText.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-40ba21d2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-40ba21d2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdCardHeaderText.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  mounted: function mounted() {
	    this.parentClasses = this.$parent.$el.classList;
	
	    if (this.parentClasses.contains('md-card-header')) {
	      this.insideParent = true;
	      this.parentClasses.add('md-card-header-flex');
	    }
	  },
	  destroyed: function destroyed() {
	    this.parentClasses.remove('md-card-header-flex');
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "md-card-header-text"
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-40ba21d2", module.exports)
	  }
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(63)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\User\\Desktop\\intellij\\vue-material\\src\\components\\mdCard\\mdCardContent.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0d70108c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0d70108c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdCardContent.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "md-card-content"
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0d70108c", module.exports)
	  }
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* template */
	var __vue_template__ = __webpack_require__(65)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\User\\Desktop\\intellij\\vue-material\\src\\components\\mdCard\\mdCardActions.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f7d979e0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-f7d979e0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdCardActions.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "md-card-actions"
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f7d979e0", module.exports)
	  }
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(67)
	
	/* template */
	var __vue_template__ = __webpack_require__(68)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\User\\Desktop\\intellij\\vue-material\\src\\components\\mdCard\\mdCardArea.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5c40a08a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5c40a08a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdCardArea.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    mdInset: Boolean
	  },
	  computed: {
	    classes: function classes() {
	      return {
	        'md-inset': this.mdInset
	      };
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "md-card-area",
	    class: _vm.classes
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5c40a08a", module.exports)
	  }
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(70)
	
	/* template */
	var __vue_template__ = __webpack_require__(71)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\Users\\User\\Desktop\\intellij\\vue-material\\src\\components\\mdCard\\mdCardExpand.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7c207ad7", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7c207ad7", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] mdCardExpand.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  methods: {
	    setContentMargin: function setContentMargin() {
	      this.content.style.marginTop = -this.content.offsetHeight + 'px';
	    },
	    toggle: function toggle() {
	      this.$refs.expand.classList.toggle('md-active');
	    },
	    onWindowResize: function onWindowResize() {
	      window.requestAnimationFrame(this.setContentMargin);
	    }
	  },
	  mounted: function mounted() {
	    this.trigger = this.$el.querySelector('[md-expand-trigger]');
	    this.content = this.$el.querySelector('.md-card-content');
	
	    if (this.content) {
	      this.setContentMargin();
	
	      this.trigger.addEventListener('click', this.toggle);
	      window.addEventListener('resize', this.onWindowResize);
	    }
	  },
	  destroyed: function destroyed() {
	    if (this.content) {
	      this.trigger.removeEventListener('click', this.toggle);
	      window.removeEventListener('resize', this.onWindowResize);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    ref: "expand",
	    staticClass: "md-card-expand"
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7c207ad7", module.exports)
	  }
	}

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = ".THEME_NAME .md-card, .THEME_NAME.md-card {\n  background-color: BACKGROUND-COLOR-A100; }\n  .THEME_NAME .md-card .md-card-header .md-icon-button .md-icon,\n  .THEME_NAME .md-card .md-card-actions .md-icon-button .md-icon, .THEME_NAME.md-card .md-card-header .md-icon-button .md-icon,\n  .THEME_NAME.md-card .md-card-actions .md-icon-button .md-icon {\n    color: BACKGROUND-CONTRAST-0.54; }\n  .THEME_NAME .md-card > .md-card-area:after, .THEME_NAME.md-card > .md-card-area:after {\n    background-color: BACKGROUND-CONTRAST-0.12; }\n  .THEME_NAME .md-card .md-card-media-cover.md-text-scrim .md-backdrop, .THEME_NAME.md-card .md-card-media-cover.md-text-scrim .md-backdrop {\n    background: linear-gradient(to bottom, BACKGROUND-CONTRAST-0.0 20%, BACKGROUND-CONTRAST-0.275 66%, BACKGROUND-CONTRAST-0.55 100%); }\n  .THEME_NAME .md-card .md-card-media-cover.md-solid .md-card-area, .THEME_NAME.md-card .md-card-media-cover.md-solid .md-card-area {\n    background-color: BACKGROUND-CONTRAST-0.4; }\n  .THEME_NAME .md-card .md-card-expand .md-card-actions, .THEME_NAME.md-card .md-card-expand .md-card-actions {\n    background-color: BACKGROUND-COLOR-A100; }\n"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.debug.js.map