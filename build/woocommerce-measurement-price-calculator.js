(()=>{"use strict";var t={n:e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},d:(e,i)=>{for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=window.wp.data,i="wdevs_tax_switch_is_switched",s={setIsSwitched:t=>({type:"SET_IS_SWITCHED",value:t}),saveIsSwitched:t=>(localStorage.setItem(i,JSON.stringify(t)),{type:"SET_IS_SWITCHED",value:t})};let r;r=(0,e.select)("wdevs-tax-switch/store")?(0,e.select)("wdevs-tax-switch/store"):(0,e.registerStore)("wdevs-tax-switch/store",{reducer:(t=(()=>{const t=localStorage.getItem(i);return{isSwitched:!!t&&JSON.parse(t)}})(),e)=>"SET_IS_SWITCHED"===e.type?{...t,isSwitched:e.value}:t,actions:s,selectors:{getIsSwitched:t=>t.isSwitched}});const c=class{static togglePriceClasses(t,e){const i=this.displayIncludingVat(t,e);document.querySelectorAll(".wts-price-wrapper").forEach((t=>{const e=t.querySelector(":scope > .wts-price-incl"),s=t.querySelector(":scope > .wts-price-excl");i?(e.classList.remove("wts-inactive"),e.classList.add("wts-active"),s.classList.remove("wts-active"),s.classList.add("wts-inactive")):(e.classList.remove("wts-active"),e.classList.add("wts-inactive"),s.classList.remove("wts-inactive"),s.classList.add("wts-active"))}))}static displayIncludingVat(t,i){return null==i&&(i=(0,e.select)("wdevs-tax-switch/store").getIsSwitched()),"incl"===t&&!i||"excl"===t&&i}static parseBooleanValue(t){return!!t&&JSON.parse(t)}static setPriceClasses(t){return this.togglePriceClasses(t,(0,e.select)("wdevs-tax-switch/store").getIsSwitched())}static getVatTexts(t=null){const e=document.createTextNode(" ").nodeValue;let i,s;if(t){const r=jQuery(t);if(i=r.find(".wts-price-incl .wts-vat-text").first(),s=r.find(".wts-price-excl .wts-vat-text").first(),i.length||s.length)return{including:i.length?e+i.clone().prop("outerHTML"):"",excluding:s.length?e+s.clone().prop("outerHTML"):""}}return i=jQuery(".wts-price-wrapper .wts-price-incl .wts-vat-text").first(),s=jQuery(".wts-price-wrapper .wts-price-excl .wts-vat-text").first(),{including:i.length?e+i.clone().prop("outerHTML"):"",excluding:s.length?e+s.clone().prop("outerHTML"):""}}},a=window.jQuery;var n=t.n(a);const o=class{constructor(t){this.isSwitched=!1,this.unsubscribe=null,this.originalTaxDisplay=t,this.currentVariation=null}init(){const t=this;t.unsubscribe=(0,e.subscribe)((()=>{const i=(0,e.select)("wdevs-tax-switch/store").getIsSwitched();t.isSwitched!==i&&(t.isSwitched=i,t.handleSwitchChange())})),t.registerWooCommerceEvents()}registerWooCommerceEvents(){const t=this;n()(".single_variation, .single_variation_wrap").bind("show_variation",(function(e,i){setTimeout((function(){if(t.currentVariation=i,window.wc_price_calculator_params){const e=t.getCurrentPrice();window.wc_price_calculator_params.product_price=e,i.price=e,n()(".qty").trigger("change")}}),500)}))}handleSwitchChange(){if(window.wc_price_calculator_params){const t=this.getCurrentPrice();t&&(window.wc_price_calculator_params.product_price=t,n()(".qty").trigger("change"))}}getCurrentPrice(){return this.currentVariation&&this.currentVariation.price_incl_vat&&this.currentVariation.price_excl_vat?c.displayIncludingVat(this.originalTaxDisplay)?parseFloat(this.currentVariation.price_incl_vat):parseFloat(this.currentVariation.price_excl_vat):null}cleanup(){this.unsubscribe&&this.unsubscribe()}};window.addEventListener("DOMContentLoaded",(()=>{const t=window.wtsViewObject||{originalTaxDisplay:"incl"};new o(t.originalTaxDisplay).init()}))})();