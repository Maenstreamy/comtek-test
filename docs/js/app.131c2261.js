(function(e){function t(t){for(var a,r,l=t[0],o=t[1],c=t[2],d=0,u=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);m&&m(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i={app:0},s=[];function l(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-6ff2f00e":"6dc09c7f","chunk-2d0e9b25":"5a1eb101","chunk-60b2d654":"8eccd58c","chunk-7e864075":"4930d4c2"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-6ff2f00e":1,"chunk-60b2d654":1,"chunk-7e864075":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-6ff2f00e":"05fdb500","chunk-2d0e9b25":"31d6cfe0","chunk-60b2d654":"b4804655","chunk-7e864075":"ff1039cc"}[e]+".css",i=o.p+a,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var c=s[l],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===i))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){c=u[l],d=c.getAttribute("data-href");if(d===a||d===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],m.parentNode.removeChild(m),n(s)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=s);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=l(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}i[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/comtek-test/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=d;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("v-navigation-drawer",{staticStyle:{"z-index":"1"},attrs:{permanent:"",clipped:"",app:""}},[n("v-list",{attrs:{shaped:""}},[n("v-list-item-group",{attrs:{color:"primary"}},[n("v-subheader",[e._v("Пациент")]),n("router-link",{staticClass:"link",staticStyle:{"margin-right":"50px","text-decoration":"none"},attrs:{to:{name:"PacientList"}}},[n("v-list-item",[e._v("Список")])],1),n("router-link",{staticClass:"link",staticStyle:{"margin-right":"50px","text-decoration":"none"},attrs:{to:{name:"CreatePacient"}}},[n("v-list-item",[e._v("Создать")])],1),n("v-subheader",[e._v("Консультации")]),n("router-link",{staticClass:"link",staticStyle:{"margin-right":"50px","text-decoration":"none"},attrs:{to:{name:"CreateConsultation"}}},[n("v-list-item",[e._v("Добавить")])],1)],1)],1)],1),n("router-view",{staticStyle:{padding:"30px"}})],1)],1)},i=[],s={name:"App",data:function(){return{}}},l=s,o=n("2877"),c=n("6544"),d=n.n(c),u=n("7496"),m=n("8860"),f=n("da13"),v=n("1baa"),p=n("f6c4"),h=n("f774"),b=n("e0c7"),g=Object(o["a"])(l,r,i,!1,null,"7d291cf6",null),x=g.exports;d()(g,{VApp:u["a"],VList:m["a"],VListItem:f["a"],VListItemGroup:v["a"],VMain:p["a"],VNavigationDrawer:h["a"],VSubheader:b["a"]});n("d3b7"),n("3ca3"),n("ddb0");var k=n("8c4f"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v(" Пациенты "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),n("v-data-table",{attrs:{headers:e.headers,items:e.$store.state.pacientList,search:e.search},on:{click:function(t){return e.editItem()}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Изменить данные")])]),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Фамилия",rules:e.lastNameRules},model:{value:e.editedItem.lastName,callback:function(t){e.$set(e.editedItem,"lastName",t)},expression:"editedItem.lastName"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Имя",rules:e.firstNameRules},model:{value:e.editedItem.firstName,callback:function(t){e.$set(e.editedItem,"firstName",t)},expression:"editedItem.firstName"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Отчество",rules:e.middleNameRules},model:{value:e.editedItem.middleName,callback:function(t){e.$set(e.editedItem,"middleName",t)},expression:"editedItem.middleName"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"date",label:"Дата рождения"},model:{value:e.editedItem.birthDate,callback:function(t){e.$set(e.editedItem,"birthDate",t)},expression:"editedItem.birthDate"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",label:"СНИЛС",maxlength:"11",rules:e.snilsRules},model:{value:e.editedItem.snils,callback:function(t){e.$set(e.editedItem,"snils",t)},expression:"editedItem.snils"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:e.gender,label:"Пол",rules:[function(e){return!!e||"Укажите пол"}]},model:{value:e.editedItem.gender,callback:function(t){e.$set(e.editedItem,"gender",t)},expression:"editedItem.gender"}})],1)],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:"",disabled:!e.valid},on:{click:e.validation}},[e._v("Сохранить")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Отмена")])],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.openItem(a)}}},[e._v(" mdi-account ")]),n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])]}}])})],1)},y=[],N=(n("a434"),{data:function(){return{valid:!0,lastNameRules:[function(e){return!!e||"Поле обязательно для заполнения"},function(e){return e&&e.length<=20||"Максимальная длина строки - 20 символов"}],firstNameRules:[function(e){return!!e||"Поле обязательно для заполнения"},function(e){return e&&e.length<=20||"Максимальная длина строки - 20 символов"}],middleNameRules:[function(e){return!!e||"Поле обязательно для заполнения"},function(e){return e&&e.length<=20||"Максимальная длина строки - 20 символов"}],snilsRules:[function(e){return!!e||"Поле обязательно для заполнения"},function(e){return e&&11===e.length||"СНИЛС может состоять только из 11 цифр"}],dialog:!1,currentId:"",editedIndex:-1,editedItem:{lastName:"",firstName:"",middleName:"",birthDate:"",snils:"",gender:this.select},defaultItem:{lastName:"",firstName:"",middleName:"",birthDate:"",snils:"",gender:this.select},gender:["Мужской","Женский"],select:null,search:"",headers:[{text:"Фамилия",align:"center",sortable:!0,value:"lastName"},{text:"Имя",value:"firstName"},{text:"Отчество",value:"middleName"},{text:"Дата рождения",value:"birthDate"},{text:"Пол",value:"gender"},{text:"СНИЛС",value:"snils"},{text:"",value:"actions",sortable:!1}]}},methods:{openItem:function(e){this.$store.state.currentId=e.id,this.$router.push({path:"/pacient/".concat(e.id)})},editItem:function(e){this.editedIndex=this.$store.state.pacientList.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.$store.state.pacientList.indexOf(e);confirm("Удалить пациента из таблицы?")&&this.$store.state.pacientList.splice(t,1)},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},validation:function(){this.$refs.form.validate()&&this.save()},save:function(){this.editedIndex>-1?Object.assign(this.$store.state.pacientList[this.editedIndex],this.editedItem):this.$store.state.pacientList.push(this.editedItem),this.close()}}}),_=N,C=n("8336"),w=n("b0af"),V=n("99d9"),S=n("62ad"),O=n("a523"),$=n("8fea"),L=n("169a"),P=n("ce7e"),j=n("4bd4"),T=n("132d"),D=n("0fd9"),E=n("b974"),A=n("2fa4"),R=n("8654"),M=Object(o["a"])(_,I,y,!1,null,null,null),B=M.exports;d()(M,{VBtn:C["a"],VCard:w["a"],VCardActions:V["a"],VCardText:V["b"],VCardTitle:V["c"],VCol:S["a"],VContainer:O["a"],VDataTable:$["a"],VDialog:L["a"],VDivider:P["a"],VForm:j["a"],VIcon:T["a"],VRow:D["a"],VSelect:E["a"],VSpacer:A["a"],VTextField:R["a"]}),a["a"].use(k["a"]);var F=[{path:"/",name:"PacientList",component:B},{path:"/pacient/:id",name:"Pacient",component:function(){return Promise.all([n.e("chunk-6ff2f00e"),n.e("chunk-2d0e9b25")]).then(n.bind(null,"8f45"))}},{path:"/create_pacient",name:"CreatePacient",component:function(){return n.e("chunk-7e864075").then(n.bind(null,"b2b5"))}},{path:"/create_consultation",name:"CreateConsultation",component:function(){return Promise.all([n.e("chunk-6ff2f00e"),n.e("chunk-60b2d654")]).then(n.bind(null,"302c"))}}],q=new k["a"]({mode:"history",base:"/comtek-test/",routes:F}),z=q,J=n("2f62");a["a"].use(J["a"]);var G=new J["a"].Store({state:{consultationList:[],pacientList:[],currentId:""},mutations:{},actions:{},modules:{}}),H=n("f309");a["a"].use(H["a"]);var K=new H["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:z,store:G,vuetify:K,render:function(e){return e(x)}}).$mount("#app")}});
//# sourceMappingURL=app.131c2261.js.map