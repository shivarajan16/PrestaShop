/******/!function(n){// webpackBootstrap
/******/var o={};function i(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=257)}({2:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},257:function(t,e,n){"use strict";n.r(e),function(t){var e=n(37);
/**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */(0,t.$)(function(){(new e.a).init()})}.call(this,n(2))},3:function(t,e){t.exports=jQuery},37:function(t,e,n){"use strict";(function(i){function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.d(e,"a",function(){return t});
/**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
var c=window.$,d=function(t,e){var n=document.createEvent(e);n.initEvent(t,!0,!0),document.dispatchEvent(n)},t=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.moduleActionMenuLinkSelector="button.module_action_menu_",this.moduleActionMenuInstallLinkSelector="button.module_action_menu_install",this.moduleActionMenuEnableLinkSelector="button.module_action_menu_enable",this.moduleActionMenuUninstallLinkSelector="button.module_action_menu_uninstall",this.moduleActionMenuDisableLinkSelector="button.module_action_menu_disable",this.moduleActionMenuEnableMobileLinkSelector="button.module_action_menu_enable_mobile",this.moduleActionMenuDisableMobileLinkSelector="button.module_action_menu_disable_mobile",this.moduleActionMenuResetLinkSelector="button.module_action_menu_reset",this.moduleActionMenuUpdateLinkSelector="button.module_action_menu_upgrade",this.moduleItemListSelector=".module-item-list",this.moduleItemGridSelector=".module-item-grid",this.moduleItemActionsSelector=".module-actions",this.moduleActionModalDisableLinkSelector="a.module_action_modal_disable",this.moduleActionModalResetLinkSelector="a.module_action_modal_reset",this.moduleActionModalUninstallLinkSelector="a.module_action_modal_uninstall",this.forceDeletionOption="#force_deletion",this.initActionButtons()}var e,n,o;return e=t,(n=[{key:"initActionButtons",value:function(){var n=this;c(document).on("click",this.forceDeletionOption,function(){var t=c(n.moduleActionModalUninstallLinkSelector,c("div.module-item-list[data-tech-name='"+c(this).attr("data-tech-name")+"']"));!0===c(this).prop("checked")?t.attr("data-deletion","true"):t.removeAttr("data-deletion")}),c(document).on("click",this.moduleActionMenuInstallLinkSelector,function(){return c("#modal-prestatrust").length&&c("#modal-prestatrust").modal("hide"),n._dispatchPreEvent("install",this)&&n._confirmAction("install",this)&&n._requestToController("install",c(this))}),c(document).on("click",this.moduleActionMenuEnableLinkSelector,function(){return n._dispatchPreEvent("enable",this)&&n._confirmAction("enable",this)&&n._requestToController("enable",c(this))}),c(document).on("click",this.moduleActionMenuUninstallLinkSelector,function(){return n._dispatchPreEvent("uninstall",this)&&n._confirmAction("uninstall",this)&&n._requestToController("uninstall",c(this))}),c(document).on("click",this.moduleActionMenuDisableLinkSelector,function(){return n._dispatchPreEvent("disable",this)&&n._confirmAction("disable",this)&&n._requestToController("disable",c(this))}),c(document).on("click",this.moduleActionMenuEnableMobileLinkSelector,function(){return n._dispatchPreEvent("enable_mobile",this)&&n._confirmAction("enable_mobile",this)&&n._requestToController("enable_mobile",c(this))}),c(document).on("click",this.moduleActionMenuDisableMobileLinkSelector,function(){return n._dispatchPreEvent("disable_mobile",this)&&n._confirmAction("disable_mobile",this)&&n._requestToController("disable_mobile",c(this))}),c(document).on("click",this.moduleActionMenuResetLinkSelector,function(){return n._dispatchPreEvent("reset",this)&&n._confirmAction("reset",this)&&n._requestToController("reset",c(this))}),c(document).on("click",this.moduleActionMenuUpdateLinkSelector,function(){return n._dispatchPreEvent("update",this)&&n._confirmAction("update",this)&&n._requestToController("update",c(this))}),c(document).on("click",this.moduleActionModalDisableLinkSelector,function(){return n._requestToController("disable",c(n.moduleActionMenuDisableLinkSelector,c("div.module-item-list[data-tech-name='"+c(this).attr("data-tech-name")+"']")))}),c(document).on("click",this.moduleActionModalResetLinkSelector,function(){return n._requestToController("reset",c(n.moduleActionMenuResetLinkSelector,c("div.module-item-list[data-tech-name='"+c(this).attr("data-tech-name")+"']")))}),c(document).on("click",this.moduleActionModalUninstallLinkSelector,function(e){c(e.target).parents(".modal").on("hidden.bs.modal",function(t){return n._requestToController("uninstall",c(n.moduleActionMenuUninstallLinkSelector,c("div.module-item-list[data-tech-name='"+c(e.target).attr("data-tech-name")+"']")),c(e.target).attr("data-deletion"))}.bind(e))})}},{key:"_getModuleItemSelector",value:function(){return c(this.moduleItemListSelector).length?this.moduleItemListSelector:this.moduleItemGridSelector}},{key:"_confirmAction",value:function(t,e){var n=c("#"+c(e).data("confirm_modal"));return 1!=n.length||(n.first().modal("show"),!1)}},{key:"_confirmPrestaTrust",value:function(n){var o=this,i=this._replacePrestaTrustPlaceholders(n);i.find(".pstrust-install").off("click").on("click",function(){var t=c(o.moduleActionMenuInstallLinkSelector,'.module-item[data-tech-name="'+n.module.attributes.name+'"]'),e=t.parent("form");c("<input>").attr({type:"hidden",value:"1",name:"actionParams[confirmPrestaTrust]"}).appendTo(e),t.click(),i.modal("hide")}),i.modal()}},{key:"_replacePrestaTrustPlaceholders",value:function(t){var e=c("#modal-prestatrust"),n=t.module.attributes;if("PrestaTrust"===t.confirmation_subject&&e.length){var o=n.prestatrust.status?"success":"warning";return n.prestatrust.check_list.property?(e.find("#pstrust-btn-property-ok").show(),e.find("#pstrust-btn-property-nok").hide()):(e.find("#pstrust-btn-property-ok").hide(),e.find("#pstrust-btn-property-nok").show(),e.find("#pstrust-buy").attr("href",n.url).toggle(null!==n.url)),e.find("#pstrust-img").attr({src:n.img,alt:n.name}),e.find("#pstrust-name").text(n.displayName),e.find("#pstrust-author").text(n.author),e.find("#pstrust-label").attr("class","text-"+o).text(n.prestatrust.status?"OK":"KO"),e.find("#pstrust-message").attr("class","alert alert-"+o),e.find("#pstrust-message > p").text(n.prestatrust.message),e}}},{key:"_dispatchPreEvent",value:function(t,e){var n=i.Event("module_card_action_event");return c(e).trigger(n,[t]),!1===n.isPropagationStopped()&&!1===n.isImmediatePropagationStopped()&&!1!==n.result}},{key:"_requestToController",value:function(i,t,e){var r=this,l=t.closest(this.moduleItemActionsSelector),n=t.closest("form"),o=c('<button class="btn-primary-reverse onclick unbind spinner "></button>'),a="//"+window.location.host+n.attr("action"),u=n.serializeArray();return"true"!==e&&!0!==e||u.push({name:"actionParams[deletion]",value:!0}),c.ajax({url:a,dataType:"json",method:"POST",data:u,beforeSend:function(){l.hide(),l.after(o)}}).done(function(t){if(void 0===s(t))c.growl.error({message:"No answer received from server"});else{var e=Object.keys(t)[0];if(!1===t[e].status)void 0!==t[e].confirmation_subject&&r._confirmPrestaTrust(t[e]),c.growl.error({message:t[e].msg});else{c.growl.notice({message:t[e].msg});var n=null,o=null;"uninstall"==i?(l.fadeOut(function(){n=r._getModuleItemSelector().replace(".",""),(o=l.parents("."+n).first()).remove()}),d("Module Uninstalled","CustomEvent")):"disable"==i?(n=r._getModuleItemSelector().replace(".",""),(o=l.parents("."+n).first()).addClass(n+"-isNotActive"),o.attr("data-active","0"),d("Module Disabled","CustomEvent")):"enable"==i&&(n=r._getModuleItemSelector().replace(".",""),(o=l.parents("."+n).first()).removeClass(n+"-isNotActive"),o.attr("data-active","1"),d("Module Enabled","CustomEvent")),l.replaceWith(t[e].action_menu_html)}}}).always(function(){l.fadeIn(),o.remove()}),!1}}])&&r(e.prototype,n),o&&r(e,o),t}()}).call(this,n(3))}});