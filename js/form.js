/**
* @midkard/formValidate v1.3.1
*/
!function(e){var t={};function i(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(n,l,function(t){return e[t]}.bind(null,l));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t){e.exports=jQuery},function(e,t,i){"use strict";i.r(t);var n=i(0),l=i.n(n);var s=[{el:".required",rule:"required"},{el:".inp",rule:"valid_phone"},{el:'[name="name1"]',rule:"alpha|min_length[2]"},{el:'[name="email1"], [name="email"]',rule:"valid_email"},{el:".agreement",rule:"agreement"}],r=/^(.+?)\[(.+)\]$/,a=/^[0-9]+$/,o=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,h=/^[а-яё ]*$/i,u=/^\+7\(\d{3}\) \d{3}-\d{2}-\d{2}$/,c={required:"Пожалуйста, заполните поле.",valid_email:"Введите корректный email.",valid_phone:"Введите корректный номер телефона.",alpha:"Это поле может содержать только буквы русского алфавита.",min_length:"Поле должно содержать не менее %s символов."},d=!0;var f,p=function(){this.popup=l()('<div id="modal-not-agreement">                    <div class="icon">                            <svg viewBox="0 0 22 22"><path d="M.35.35,21.82,21.82"/><path d="M21.82.35.35,21.82"/></svg>                    </div>                    <h2>Внимание!</h2>                    <p>Вы не согласились с нашей <a href="//privacy-policy/" >политикой конфиденциальности</a>. По Закону, мы не имеем права получать ваши контакты.</p>                    <div class="button">                            <button class="confirm btn">Согласиться с политикой</button>                    </div>            </div>').appendTo("body"),this.overlay=l()('<div id="modal-not-agreement__overlay"></div>').appendTo("body"),this.checkbox=null;var e=this;this.popup.find(".confirm").click((function(){e.checkbox.prop("checked",!0),e.checkbox.change(),e.hide()}))};l.a.extend(p.prototype,{show:function(e){this.checkbox=e,this.overlay.fadeIn(),this.popup.fadeIn()},hide:function(){this.overlay.fadeOut(),this.popup.fadeOut()}});var v=function(e,t,i){this.elem=e,this.rules=t,this.value=null,this.oldValue="",this.rules&&(this.erElem=null,this.tipElem=null,this.required=-1!==t.indexOf("required")),this.$placeholder=null,l()(this.elem).siblings("label").length&&(this.$placeholder=l()(this.elem).siblings("label"));var n=!0;Object.defineProperty(this,"valid",{get:function(){return n},set:function(e){e!==n&&(n=e,i._checkButtons())}}),this._validate(!0);var s=this;this.rules&&(e.on("blur change completed",(function(){s._validate()})),e.on("input keypress keydown paste",(function(){s._validate(!0)}))),t&&~t.indexOf("alpha")&&(e.on("input",(function(){s._testInput()})),e.on("focusout",(function(){s._tip(!0)}))),t&&~t.indexOf("valid_phone")&&e.on("input",(function(){s._transformToPhone()})),this.$placeholder&&(e.on("focusin input",(function(){s._placeholder(!0)})),e.on("focusout",(function(){s._placeholder()})))};l.a.extend(v.prototype,{_validate:function(e){if(e=e||!1,!this.rules)return!0;if(this.value!==this.elem.val()||!e){var t,i,n=this.rules.split("|"),l=!this.elem.val(),s=[];for(this.value=this.elem.val(),t=0,i=n.length;t<i;t++){var a=n[t],o=null,h=!1,u=r.exec(a);if(l&&!this.required)break;if((!l||-1!==["required","agreement"].indexOf(a))&&(u&&(a=u[1],o=u[2]),"!"===a.charAt(0)&&(a=a.substring(1,a.length)),"function"==typeof this._hooks[a]&&(this._hooks[a].apply(this,[o])||(h=!0)),h)){var d=c[a];o&&(d=d.replace("%s",o)),s.push(d)}}return s.length?(e||this._setError(s),this.valid=!1):(this._removeError(),this.valid=!0),this.valid}},_testInput:function(){this.value=this.elem.val(),this._hooks.alpha.apply(this)?(this.oldValue=this.value,this._tip(!0)):(this.elem.val(this.oldValue),this._tip())},_tip:function(e){var t=c.alpha;(e=e||!1)?this.tipElem&&(this.tipElem.remove(),this.tipElem=null):this.tipElem||(this.tipElem=l()('<span class="message-tooltip">'+t+"</span>").insertAfter(this.elem))},_transformToPhone:function(){var e=this.elem.val();if(e)if((e=e.replace(/\D/g,"")).length){"7"!==e[0]&&"8"!==e[0]||(e=e.slice(1));var t="+7(",i=[e.slice(0,3),e.slice(3,6),e.slice(6,8),e.slice(8,10)];(i=i.filter((function(e){return""!==e}))).forEach((function(e,i){1===i&&(t+=") "),i>1&&(t+="-"),t+=e})),this.elem.val(t),this._validate(!0)}else this.elem.val("")},_placeholder:function(e){var t=!this.elem.val();e=e||!1,d&&(e?this.$placeholder.addClass("label-none"):t&&this.$placeholder.removeClass("label-none"))},_setError:function(e){this.erElem?this.erElem.html(e.join(" ")):-1===this.rules.indexOf("agreement")&&(this.erElem=l()('<span class="message-error">'+e.join(" ")+"</span>").insertAfter(this.elem)),this.elem.addClass("error"),this.elem.removeClass("correctly")},_removeError:function(){this.erElem&&(this.erElem.remove(),this.erElem=null,this.elem.addClass("correctly"),this.elem.removeClass("error"))},_hooks:{required:function(){var e=this.elem[0].type;return"checkbox"===e||"radio"===e?!0===this.elem[0].checked:!!this.value},valid_email:function(){return o.test(this.value)},valid_phone:function(){return u.test(this.value)},min_length:function(e){return!!a.test(e)&&this.value.length>=parseInt(e,10)},alpha:function(){return h.test(this.value)},agreement:function(){var e=this.elem[0].type;if("checkbox"===e||"radio"===e){var t=!0===this.elem[0].checked;return t||(f||(f=new p),f).show(this.elem),t}return!!this.value}}});var m=v,b=function(e){this.form=e,this.allRules=s,this.buttons=[],this.fields=[];for(var t=0;t<e.elements.length;t++)if("submit"!==e.elements[t].type){var i=l()(e.elements[t]),n=this._genElemRules(i);n.length?this.fields.push(new m(i,n.join("|"),this)):this.fields.push(new m(i,null,this))}else this.buttons.push(e.elements[t]);this._checkButtons(),l()(e).submit(l.a.proxy(this,"_validateForm"))};l.a.extend(b.prototype,{_genElemRules:function(e){for(var t={},i=[],n=0;n<this.allRules.length;n++)e.is(this.allRules[n].el)&&(t[this.allRules[n].rule]=!0);for(var l in t)i.push(l);return i},_validateForm:function(e){for(var t=!1,i=0;i<this.fields.length;i++){this.fields[i]._validate()||(t=!0)}return t&&(e&&e.preventDefault?e.preventDefault():event&&(event.returnValue=!1)),!0},_checkButtons:function(){for(var e=!1,t=0;t<this.fields.length;t++){this.fields[t].valid||(e=!0)}var i=!1;e&&(i=!0);for(t=0;t<this.buttons.length;t++)this.buttons[t].disabled=i}});var _=b;!function(){if(l()("label.agreement-label").click((function(e){e.preventDefault();var t=l()(this).siblings("input"),i=!t.prop("checked");t.prop("checked",i),t.change()})),l.a.fancybox){var e=l.a.fancybox.defaults.clickContent;l.a.fancybox.defaults.clickContent=function(t,i){t.$content[0].contains(document.activeElement)&&document.activeElement.blur(),e(t,i)}}}(),l.a.fn.validate=function(e){var t;if(this.length)return void 0!==(e=e||{}).hideLabels&&(t=e.hideLabels,d=!!t),this.each((function(){var e=l()(this).data("validator");e||(l()(this).find("span.add-textarea").click((function(){l()(this).toggleClass("opened")})),e=new _(this),l()(this).data("validator",e))})),this}}]);