!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([function(e,t,n){e.exports=n(18)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateAttribute=function(e,t,n){n(function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}({},e,t))},t.setTextAttribute=function(e,t){if(e)return" "+t+'="'+e+'"';return""},t.getSubDir=function(){var e=window.location.pathname,t=e.indexOf("wp-admin"),n="/";t>-1&&(n=e.substr(0,t));return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(5)),i=u(n(0)),l=u(n(4)),a=n(10);function u(e){return e&&e.__esModule?e:{default:e}}var c=wp.i18n.__,s=wp.element.Component,f=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s),r(t,[{key:"render",value:function(){var e=this.props,t=e.view_id,n=e.setAttributes,r=formidable_form_selector.views;return wp.element.createElement(o.default,{selected:t,itemName:c("View","formidable"),itemNamePlural:c("Views","formidable"),items:(0,l.default)(r,"post_title","ID"),onChange:function(e){(0,a.updateViewId)(e,n)}})}}]),t}();t.default=f,f.propTypes={view_id:i.default.string,setAttributes:i.default.func.isRequired}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=(i(n(0)),i(n(11)));function i(e){return e&&e.__esModule?e:{default:e}}var l=wp.element.Component,a=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l),r(t,[{key:"render",value:function(){return wp.element.createElement("div",null,"[display-frm-data",(0,o.default)(this.props),"]")}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(!e||0===Object.keys(e).length)return[];var o=Object.keys(e).map(function(r){return{label:e[r][t],value:e[r][n]}});r&&function(e){e.sort(function(e,t){var n=e.label.toUpperCase(),r=t.label.toUpperCase();return n<r?-1:n>r?1:0})}(o);return o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var i=wp.i18n.__,l=wp.element.Component,a=wp.components.SelectControl,u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l),r(t,[{key:"createOptions",value:function(e,t){var n=e.map(function(e){return{label:e.label,value:e.value}});return[{label:i("Select a "+t,"formidable"),value:""}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n))}},{key:"render",value:function(){var e=this.props,t=e.selected,n=e.items,r=e.onChange,o=e.itemName,l=e.itemNamePlural,u=e.label,c=e.help,s=e.className;return n&&0!==n.length?wp.element.createElement(a,{value:t,options:this.createOptions(n,o),label:u,help:c,onChange:r,className:s}):wp.element.createElement("p",{className:"frm-block-select-no-items"},i("Currently, there are no "+l+".","formidable"))}}]),t}();t.default=u,u.defaultProps={itemName:"item",itemNamePlural:"items"},u.propTypes={selected:o.default.oneOfType([o.default.string,o.default.number]),items:o.default.array,onChange:o.default.func,itemName:o.default.string,itemNamePlural:o.default.string,label:o.default.string,help:o.default.string,form_id:o.default.oneOfType([o.default.string,o.default.number])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(5)),i=a(n(0)),l=a(n(4));function a(e){return e&&e.__esModule?e:{default:e}}var u=wp.i18n.__,c=wp.element.Component,s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c),r(t,[{key:"render",value:function(){var e=this.props,t=e.form_id,n=e.setAttributes,r=e.forms;return wp.element.createElement(o.default,{selected:t,itemName:u("form","formidable"),itemNamePlural:u("forms","formidable"),items:(0,l.default)(r),onChange:function(e){n({form_id:e})}})}}]),t}();t.default=s,s.propTypes={form_id:i.default.string,setAttributes:i.default.func.isRequired}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=(i(n(0)),i(n(16)));function i(e){return e&&e.__esModule?e:{default:e}}wp.i18n.__;var l=wp.element.Component,a=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l),r(t,[{key:"render",value:function(){return wp.element.createElement("div",null,"[formidable",(0,o.default)(this.props),"]")}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(0)),i=u(n(3)),l=u(n(2)),a=n(1);function u(e){return e&&e.__esModule?e:{default:e}}var c=wp.i18n.__,s=wp.element.Component,f=wp.editor.InspectorControls,p=wp.components,m=p.ExternalLink,d=p.PanelBody,b=p.PanelRow,w=p.RadioControl,y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s),r(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.setAttributes,n=e.attributes,r=n.view_id,o=n.filter;return wp.element.createElement(f,null,wp.element.createElement(d,{title:c("Select View","formidable"),initialOpen:!0},wp.element.createElement(b,null,wp.element.createElement(l.default,{view_id:r,setAttributes:t})),r&&wp.element.createElement(b,null,wp.element.createElement(m,{href:(0,a.getSubDir)()+"wp-admin/post.php?post="+r+"&action=edit"},c("Go to View","formidable")))),wp.element.createElement(d,{title:c("Filter","formidable"),initialOpen:!1},wp.element.createElement(w,{label:c("Filter the View?","formidable"),selected:o,options:[{label:c("Limited (recommended)","formidable"),value:"limited"},{label:c("Yes","formidable"),value:"1"},{label:c("No","formidable"),value:"0"}],help:c("Setting filter to limited sends View content through WordPress content filters to process shortcodes inside the View and add auto paragraphs.","formidable"),onChange:function(e){(0,a.updateAttribute)("filter",e,t)}})),wp.element.createElement(d,{title:c("Shortcode","formidable"),initialOpen:!1},wp.element.createElement(b,null,wp.element.createElement(i.default,this.props.attributes))))}}]),t}();t.default=y,y.propTypes={attributes:o.default.object,setAttributes:o.default.func}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();wp.i18n.__;var o=wp.element.Component,i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o),r(t,[{key:"render",value:function(){return wp.element.createElement("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 599.68 601.37"},wp.element.createElement("defs",null),wp.element.createElement("path",{className:"cls-1",d:"M300.27,601.37A300.28,300.28,0,0,1,.43,300.68,299.84,299.84,0,1,1,512.29,513.3,297.46,297.46,0,0,1,300.27,601.37Zm0-563A262,262,0,0,0,38.69,300.68,261.58,261.58,0,1,0,485.24,115.2,259.5,259.5,0,0,0,300.27,38.37Z",transform:"translate(-.43)"}),wp.element.createElement("path",{className:"cls-1 orange",d:"M407.4,314.83l56-137.3H398.91q-30.45,0-40.19,25.37l-36.21,111Z",transform:"translate(-.43)"}),wp.element.createElement("polygon",{className:"cls-1",points:"310.61 349.03 301.06 378.33 234.08 177.53 142.75 177.53 258.44 463.94 346.11 463.94 392.64 349.94 310.61 349.03"}))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateViewId=function(e,t){var n=formidable_form_selector.show_counts,r=n&&n[e]&&n[e].meta_value?n[e].meta_value:"",o=formidable_form_selector.view_options,i=o&&o[e]&&o[e].meta_value&&o[e].meta_value.limits?o[e].meta_value.limits:null;t({view_id:e,use_default_limit:"calendar"!==r&&"one"!==r&&!i})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.view_id,n=e.filter,o="";return o+=(0,r.setTextAttribute)(t,"id"),o+=(0,r.setTextAttribute)(n,"filter")};var r=n(1);wp.i18n.__},function(e,t,n){"use strict";var r=a(n(3)),o=a(n(2)),i=a(n(9)),l=a(n(8));function a(e){return e&&e.__esModule?e:{default:e}}var u=wp.components,c=u.ServerSideRender,s=u.Notice,f=wp.element.Fragment,p=(wp.data,wp.i18n.__),m=wp.blocks.registerBlockType;formidable_form_selector.pro&&m("formidable/simple-view",{title:p("Formidable View","formidable"),description:p("Display a Formidable View","formidable"),icon:i.default,category:"widgets",keywords:[p("data display","formidable"),p("show entries","formidable")],edit:function(e){e.className,e.isSelected;var t=e.setAttributes,n=e.attributes,r=n.view_id,a=n.use_default_limit;return 0===formidable_form_selector.views.length?wp.element.createElement(s,{status:"warning",isDismissible:!1},p("This site doesn't have any Formidable Views.","formidable")):r?wp.element.createElement(f,null,wp.element.createElement(l.default,{attributes:n,setAttributes:t}),a&&wp.element.createElement(s,{status:"success",isDismissible:!1},p("The View block displays up to 20 entries. You can preview the page to see all your entries.","formidable")),wp.element.createElement(c,{block:"formidable/simple-view",attributes:n})):wp.element.createElement("div",{className:"frm-block-intro-screen"},wp.element.createElement("div",{className:"frm-block-intro-content"},wp.element.createElement(i.default,null),wp.element.createElement("div",{className:"frm-block-title"},p("Formidable View","formidable")),wp.element.createElement("div",{className:"frm-block-selector-screen"},wp.element.createElement(o.default,{view_id:r,setAttributes:t}))))},save:function(e){var t=e.attributes;return void 0===t.view_id?"":wp.element.createElement(f,null,wp.element.createElement(r.default,t))}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.filterForms=function(e){if(!e)return{};return Object.keys(e).reduce(function(t,n){return e[n].hasOwnProperty("parent_form_id")&&"0"!==e[n].parent_form_id||!e[n].hasOwnProperty("status")||"published"!==e[n].status||e[n].hasOwnProperty("is_template")&&"0"!==e[n].is_template||!e[n].hasOwnProperty("name")||!e[n].name?t:r({},t,function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}({},n,e[n]))},{})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=wp.element.Component,i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o),r(t,[{key:"render",value:function(){return wp.element.createElement("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 599.68 601.37"},wp.element.createElement("defs",null),wp.element.createElement("rect",{className:"cls-1 orange",x:"289.64",y:"383.96",width:"140",height:"76"}),wp.element.createElement("path",{className:"cls-1",d:"M400.21,147H200.12c-17,0-30.48,12.2-30.48,29.31V218h260V147Z"}),wp.element.createElement("path",{className:"cls-1",d:"M397.86,264H169.64V460h75V340H397.86A32.22,32.22,0,0,0,428,318.56a24.29,24.29,0,0,0,1.66-8.69V264Z"}),wp.element.createElement("path",{className:"cls-1",d:"M299.84,601.37A300.26,300.26,0,0,1,0,300.68,299.84,299.84,0,1,1,511.85,513.3,297.44,297.44,0,0,1,299.84,601.37Zm0-563A261.94,261.94,0,0,0,38.26,300.68,261.58,261.58,0,1,0,484.8,115.2,259.47,259.47,0,0,0,299.84,38.37Z"}))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(0)),i=u(n(6)),l=u(n(7)),a=n(1);function u(e){return e&&e.__esModule?e:{default:e}}var c=wp.i18n.__,s=wp.element.Component,f=wp.editor.InspectorControls,p=wp.components,m=p.PanelBody,d=p.PanelRow,b=p.ToggleControl,w=p.ExternalLink,y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s),r(t,[{key:"render",value:function(){var e=this.props,t=e.setAttributes,n=e.attributes,r=e.forms,o=n.form_id,u=n.title,s=n.description,p=n.minimize;return wp.element.createElement(f,null,wp.element.createElement(m,{title:c("Select Form","formidable"),initialOpen:!0},wp.element.createElement(d,null,wp.element.createElement(i.default,{form_id:o,setAttributes:t,forms:r})),o&&wp.element.createElement(d,null,wp.element.createElement(w,{href:(0,a.getSubDir)()+"wp-admin/admin.php?page=formidable&frm_action=edit&id="+o},c("Go to form","formidable")))),wp.element.createElement(m,{title:c("Options","formidable"),initialOpen:!1},wp.element.createElement(b,{label:c("Show Form Title","formidable"),checked:u,onChange:function(e){(0,a.updateAttribute)("title",e?"1":"",t)}}),wp.element.createElement(b,{label:c("Show Form Description","formidable"),checked:s,onChange:function(e){(0,a.updateAttribute)("description",e?"1":"",t)}}),wp.element.createElement(b,{label:c("Minimize HTML","formidable"),checked:p,onChange:function(e){(0,a.updateAttribute)("minimize",e?"1":"",t)}})),wp.element.createElement(m,{title:c("Shortcode","formidable"),initialOpen:!1},wp.element.createElement(d,null,wp.element.createElement(l.default,this.props.attributes))))}}]),t}();t.default=y,y.propTypes={attributes:o.default.object,setAttributes:o.default.func}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.form_id,n=e.title,o=e.description,i=e.minimize,l="";return l+=(0,r.setTextAttribute)(t,"id"),l+=(0,r.setTextAttribute)(n,"title"),l+=(0,r.setTextAttribute)(o,"description"),l+=(0,r.setTextAttribute)(i,"minimize")};var r=n(1)},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(17);function o(){}e.exports=function(){function e(e,t,n,o,i,l){if(l!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";var r=u(n(7)),o=u(n(15)),i=u(n(14)),l=n(13),a=u(n(6));function u(e){return e&&e.__esModule?e:{default:e}}var c=wp.element.Fragment,s=(wp.data,wp.i18n.__),f=wp.blocks.registerBlockType,p=wp.components,m=p.ServerSideRender,d=p.Notice;f("formidable/simple-form",{title:s("Formidable Form","formidable"),description:s("Display a Formidable form","formidable"),icon:i.default,category:"widgets",keywords:[s("contact form","formidable")],edit:function(e){e.className,e.isSelected;var t=e.setAttributes,n=e.attributes,r=n.form_id,u=formidable_form_selector.forms,f=(0,l.filterForms)(u);return 0===Object.keys(f).length?wp.element.createElement(d,{status:"warning",isDismissible:!1},s("This site doesn't have any Formidable forms.","formidable")):r?wp.element.createElement(c,null,wp.element.createElement(o.default,{attributes:n,setAttributes:t,forms:f}),wp.element.createElement(m,{block:"formidable/simple-form",attributes:n})):wp.element.createElement("div",{className:"frm-block-intro-screen"},wp.element.createElement("div",{className:"frm-block-intro-content"},wp.element.createElement(i.default,null),wp.element.createElement("div",{className:"frm-block-title"},s("Formidable Forms","formidable")),wp.element.createElement("div",{className:"frm-block-selector-screen"},wp.element.createElement(a.default,{form_id:r,setAttributes:t,forms:f}))))},save:function(e){var t=e.attributes;return void 0===t.form_id?"":wp.element.createElement(c,null,wp.element.createElement(r.default,t))}})},function(e,t,n){"use strict";n(19),n(12)}]);