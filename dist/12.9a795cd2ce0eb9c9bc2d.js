(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9EwZ":function(e,n,t){"use strict";t.d(n,"a",function(){return l}),t("CcnG"),t("gIcY");var l=function(){function e(){}return e.forRoot=function(){return{ngModule:e,providers:[]}},e}()},OkQV:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var l=t("t/Na"),r=(t("BLsq"),t("NTBk")),a=t("xMyE"),o=t("9Z1F"),i=function(){function e(e,n){this.http=e,this.handleErrorService=n}return e.prototype.getAllSendColis=function(){return this.http.get(r.a+"/user/send/all-colis").pipe(Object(a.a)(function(e){console.log(e)},function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.getSendColisByReference=function(e){var n=(new l.g).append("reference",e);return this.http.get(r.a+"/user/send/colis-by-reference",{params:n}).pipe(Object(a.a)(function(e){console.log(e)},function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.sendSearchColis=function(e,n,t,i,s,u){var c=(new l.g).append("reference",e).append("nomClient",n).append("nomDestinataire",t).append("enable",i.toString()).append("page",s.toString()).append("size",u.toString());return this.http.get(r.a+"/user/send/search-colis",{params:c}).pipe(Object(a.a)(function(e){return console.log(e)},function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.receiveSearchColis=function(e,n,t,i,s,u){var c=(new l.g).append("reference",e).append("nomClient",n).append("nomDestinataire",t).append("enable",i.toString()).append("page",s.toString()).append("size",u.toString());return this.http.get(r.a+"/user/receive/search-colis",{params:c}).pipe(Object(a.a)(function(e){return console.log(e)},function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.clientSearchColis=function(e,n,t,i){var s=(new l.g).append("reference",e).append("nomDestinataire",n).append("page",t.toString()).append("size",i.toString());return this.http.get(r.a+"/client/search-colis",{params:s}).pipe(Object(a.a)(function(e){return console.log(e)},function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.addColis=function(e){return this.http.post(r.a+"/user/add-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.updateColis=function(e){return this.http.post(r.a+"/user/update-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.getColis=function(e){var n=(new l.g).append("reference",e);return this.http.get(r.a+"/user/take-colis",{params:n}).pipe(Object(a.a)(function(e){return console.log(e)},function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.disableColis=function(e){return this.http.post(r.a+"/user/disable-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.enableColis=function(e){return this.http.post(r.a+"/admin/enable-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.removeColis=function(e){return this.http.post(r.a+"/admin/remove-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.addEnregistrementColis=function(e){return this.http.post(r.a+"/user/add-enregistrement-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.updateEnregistrementColis=function(e){return this.http.post(r.a+"/user/update-enregistrement-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.addExpeditionColis=function(e){return this.http.post(r.a+"/user/add-expedition-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.updateExpeditionColis=function(e){return this.http.post(r.a+"/user/update-expedition-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.addArriveeColis=function(e){return this.http.post(r.a+"/user/add-arrivee-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.updateArriveeColis=function(e){return this.http.post(r.a+"/user/update-arrivee-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.addReceptionColis=function(e){return this.http.post(r.a+"/user/add-reception-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.updateReceptionColis=function(e){return this.http.post(r.a+"/user/update-reception-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.addLivraisonColis=function(e){return this.http.post(r.a+"/user/add-livraison-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.updateLivraisonColis=function(e){return this.http.post(r.a+"/user/update-livraison-colis",e).pipe(Object(a.a)(function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.countSendColis=function(){return this.http.get(r.a+"/user/count-send-colis",{responseType:"text"}).pipe(Object(a.a)(function(e){console.log(e)},function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.countReceiveColis=function(){return this.http.get(r.a+"/user/count-receive-colis",{responseType:"text"}).pipe(Object(a.a)(function(e){console.log(e)},function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.countClientColis=function(){return this.http.get(r.a+"/user/count-client-colis",{responseType:"text"}).pipe(Object(a.a)(function(e){console.log(e)},function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e.prototype.getQrCodePDF=function(e){var n=(new l.g).append("referenceColis",e);return this.http.get(r.a+"/user/qrcode-pdf",{params:n,responseType:"arraybuffer"}).pipe(Object(a.a)(function(e){return console.log(e)},function(e){return console.log(e)}),Object(o.a)(this.handleErrorService.handleError))},e}()},ZEpu:function(e,n,t){"use strict";t.r(n);var l=t("CcnG"),r=function(){return function(){}}(),a=t("pMnS"),o=t("OkQV"),i=t("d5vW"),s=t("Iw3t"),u=function(){function e(e,n,t){this.colisService=e,this.clientService=n,this.employeService=t,this.brandPrimary="#20a8d8",this.brandSuccess="#4dbd74",this.brandInfo="#63c2de",this.brandWarning="#f8cb00",this.brandDanger="#f86c6b",this.lineChart1Data=[{data:[65,59,84,84,51,55,40],label:"Series A"}],this.lineChart1Labels=["January","February","March","April","May","June","July"],this.lineChart1Options={maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:35,max:89}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart1Colours=[{backgroundColor:this.brandPrimary,borderColor:"rgba(255,255,255,.55)"}],this.lineChart1Legend=!1,this.lineChart1Type="line",this.lineChart2Data=[{data:[1,18,9,17,34,22,11],label:"Series A"}],this.lineChart2Labels=["January","February","March","April","May","June","July"],this.lineChart2Options={maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:-4,max:39}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart2Colours=[{backgroundColor:this.brandInfo,borderColor:"rgba(255,255,255,.55)"}],this.lineChart2Legend=!1,this.lineChart2Type="line",this.lineChart3Data=[{data:[78,81,80,45,34,12,40],label:"Series A"}],this.lineChart3Labels=["January","February","March","April","May","June","July"],this.lineChart3Options={maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart3Colours=[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)"}],this.lineChart3Legend=!1,this.lineChart3Type="line",this.barChart1Data=[{data:[78,81,80,45,34,12,40,78,81,80,45,34,12,40,12,40],label:"Series A"}],this.barChart1Labels=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],this.barChart1Options={maintainAspectRatio:!1,scales:{xAxes:[{display:!1,barPercentage:.6}],yAxes:[{display:!1}]},legend:{display:!1}},this.barChart1Colours=[{backgroundColor:"rgba(255,255,255,.3)",borderWidth:0}],this.barChart1Legend=!1,this.barChart1Type="bar",this.mainChartElements=27,this.mainChartData1=[],this.mainChartData2=[],this.mainChartData3=[],this.mainChartData=[{data:this.mainChartData1,label:"Current"},{data:this.mainChartData2,label:"Previous"},{data:this.mainChartData3,label:"BEP"}],this.mainChartLabels=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Thursday","Wednesday","Thursday","Friday","Saturday","Sunday"],this.mainChartOptions={responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{drawOnChartArea:!1},ticks:{callback:function(e){return e.charAt(0)}}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.mainChartColours=[{backgroundColor:this.convertHex(this.brandInfo,10),borderColor:this.brandInfo,pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:this.brandSuccess,pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:this.brandDanger,pointHoverBackgroundColor:"#fff",borderWidth:1,borderDash:[8,5]}],this.mainChartLegend=!1,this.mainChartType="line",this.socialChartData1=[{data:[65,59,84,84,51,55,40],label:"Facebook"}],this.socialChartData2=[{data:[1,13,9,17,34,41,38],label:"Twitter"}],this.socialChartData3=[{data:[78,81,80,45,34,12,40],label:"LinkedIn"}],this.socialChartData4=[{data:[35,23,56,22,97,23,64],label:"Google+"}],this.socialChartLabels=["January","February","March","April","May","June","July"],this.socialChartOptions={responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.socialChartColours=[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff"}],this.socialChartLegend=!1,this.socialChartType="line",this.sparklineChartData1=[{data:[35,23,56,22,97,23,64],label:"Clients"}],this.sparklineChartData2=[{data:[65,59,84,84,51,55,40],label:"Clients"}],this.sparklineChartLabels=["January","February","March","April","May","June","July"],this.sparklineChartOptions={responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.sparklineChartDefault=[{backgroundColor:"transparent",borderColor:"#d1d4d7"}],this.sparklineChartPrimary=[{backgroundColor:"transparent",borderColor:this.brandPrimary}],this.sparklineChartInfo=[{backgroundColor:"transparent",borderColor:this.brandInfo}],this.sparklineChartDanger=[{backgroundColor:"transparent",borderColor:this.brandDanger}],this.sparklineChartWarning=[{backgroundColor:"transparent",borderColor:this.brandWarning}],this.sparklineChartSuccess=[{backgroundColor:"transparent",borderColor:this.brandSuccess}],this.sparklineChartLegend=!1,this.sparklineChartType="line",this.radioModel="Month"}return e.prototype.chartClicked=function(e){console.log(e)},e.prototype.chartHovered=function(e){console.log(e)},e.prototype.convertHex=function(e,n){return e=e.replace("#",""),"rgba("+parseInt(e.substring(0,2),16)+", "+parseInt(e.substring(2,4),16)+", "+parseInt(e.substring(4,6),16)+", "+n/100+")"},e.prototype.random=function(e,n){return Math.floor(Math.random()*(n-e+1)+e)},e.prototype.ngOnInit=function(){for(var e=0;e<=this.mainChartElements;e++)this.mainChartData1.push(this.random(50,200)),this.mainChartData2.push(this.random(80,100)),this.mainChartData3.push(65);this.getCountClients(),this.getCountEmployes(),this.getCountSendColis(),this.getCountReceiveColis()},e.prototype.getCountEmployes=function(){var e=this;this.employeService.countEmployes().subscribe(function(n){e.countEmployes=n})},e.prototype.getCountClients=function(){var e=this;this.clientService.countClients().subscribe(function(n){e.countClients=n})},e.prototype.getCountSendColis=function(){var e=this;this.colisService.countSendColis().subscribe(function(n){e.countSendColis=n})},e.prototype.getCountReceiveColis=function(){var e=this;this.colisService.countReceiveColis().subscribe(function(n){e.countReceiveColis=n})},e}(),c=l["\u0275crt"]({encapsulation:0,styles:[[".social-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#a4b7c1;text-transform:uppercase}"]],data:{}});function d(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,33,"div",[["class","animated fadeIn"]],null,null,null,null,null)),(e()(),l["\u0275eld"](1,0,null,null,32,"div",[["class","row"]],null,null,null,null,null)),(e()(),l["\u0275eld"](2,0,null,null,15,"div",[["class","col-sm-6 col-lg-6"]],null,null,null,null,null)),(e()(),l["\u0275eld"](3,0,null,null,14,"div",[["class","brand-card"]],null,null,null,null,null)),(e()(),l["\u0275eld"](4,0,null,null,2,"div",[["class","brand-card-header bg-facebook"]],null,null,null,null,null)),(e()(),l["\u0275eld"](5,0,null,null,0,"i",[["class","fa fa-users"]],null,null,null,null,null)),(e()(),l["\u0275eld"](6,0,null,null,0,"div",[["class","chart-wrapper"]],null,null,null,null,null)),(e()(),l["\u0275eld"](7,0,null,null,10,"div",[["class","brand-card-body"]],null,null,null,null,null)),(e()(),l["\u0275eld"](8,0,null,null,4,"div",[],null,null,null,null,null)),(e()(),l["\u0275eld"](9,0,null,null,1,"div",[["class","text-value"]],null,null,null,null,null)),(e()(),l["\u0275ted"](10,null,["",""])),(e()(),l["\u0275eld"](11,0,null,null,1,"div",[["class","text-uppercase text-muted small"]],null,null,null,null,null)),(e()(),l["\u0275ted"](-1,null,["Employ\xe9s"])),(e()(),l["\u0275eld"](13,0,null,null,4,"div",[],null,null,null,null,null)),(e()(),l["\u0275eld"](14,0,null,null,1,"div",[["class","text-value"]],null,null,null,null,null)),(e()(),l["\u0275ted"](15,null,["",""])),(e()(),l["\u0275eld"](16,0,null,null,1,"div",[["class","text-uppercase text-muted small"]],null,null,null,null,null)),(e()(),l["\u0275ted"](-1,null,["Clients"])),(e()(),l["\u0275eld"](18,0,null,null,15,"div",[["class","col-sm-6 col-lg-6"]],null,null,null,null,null)),(e()(),l["\u0275eld"](19,0,null,null,14,"div",[["class","brand-card"]],null,null,null,null,null)),(e()(),l["\u0275eld"](20,0,null,null,2,"div",[["class","brand-card-header bg-twitter"]],null,null,null,null,null)),(e()(),l["\u0275eld"](21,0,null,null,0,"i",[["class","fa fa-shopping-bag"]],null,null,null,null,null)),(e()(),l["\u0275eld"](22,0,null,null,0,"div",[["class","chart-wrapper"]],null,null,null,null,null)),(e()(),l["\u0275eld"](23,0,null,null,10,"div",[["class","brand-card-body"]],null,null,null,null,null)),(e()(),l["\u0275eld"](24,0,null,null,4,"div",[],null,null,null,null,null)),(e()(),l["\u0275eld"](25,0,null,null,1,"div",[["class","text-value"]],null,null,null,null,null)),(e()(),l["\u0275ted"](26,null,["",""])),(e()(),l["\u0275eld"](27,0,null,null,1,"div",[["class","text-uppercase text-muted small"]],null,null,null,null,null)),(e()(),l["\u0275ted"](-1,null,["Colis envoy\xe9s"])),(e()(),l["\u0275eld"](29,0,null,null,4,"div",[],null,null,null,null,null)),(e()(),l["\u0275eld"](30,0,null,null,1,"div",[["class","text-value"]],null,null,null,null,null)),(e()(),l["\u0275ted"](31,null,["",""])),(e()(),l["\u0275eld"](32,0,null,null,1,"div",[["class","text-uppercase text-muted small"]],null,null,null,null,null)),(e()(),l["\u0275ted"](-1,null,["Colis re\xe7us"]))],null,function(e,n){var t=n.component;e(n,10,0,t.countEmployes),e(n,15,0,t.countClients),e(n,26,0,t.countSendColis),e(n,31,0,t.countReceiveColis)})}function p(e){return l["\u0275vid"](0,[(e()(),l["\u0275eld"](0,0,null,null,1,"app-dashboard",[],null,null,null,d,c)),l["\u0275did"](1,114688,null,0,u,[o.a,i.a,s.a],null,null)],function(e,n){e(n,1,0)},null)}var h=l["\u0275ccf"]("app-dashboard",u,p,{},{},[]),b=t("iutN"),C=t("gIcY"),g=t("t/Na"),f=t("BLsq"),y=t("ZYCi"),v={title:"Tableau de bord"},m=function(){return function(){}}(),S=t("Zseb"),E=t("xtZt"),O=t("9EwZ");t.d(n,"DashboardModuleNgFactory",function(){return j});var j=l["\u0275cmf"](r,[],function(e){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,h,b.a]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,C.v,C.v,[]),l["\u0275mpd"](4608,s.a,s.a,[g.c,f.a]),l["\u0275mpd"](4608,i.a,i.a,[g.c,f.a]),l["\u0275mpd"](4608,o.a,o.a,[g.c,f.a]),l["\u0275mpd"](1073742336,C.u,C.u,[]),l["\u0275mpd"](1073742336,C.k,C.k,[]),l["\u0275mpd"](1073742336,y.p,y.p,[[2,y.u],[2,y.l]]),l["\u0275mpd"](1073742336,m,m,[]),l["\u0275mpd"](1073742336,S.a,S.a,[]),l["\u0275mpd"](1073742336,E.e,E.e,[]),l["\u0275mpd"](1073742336,O.a,O.a,[]),l["\u0275mpd"](1073742336,r,r,[]),l["\u0275mpd"](1024,y.j,function(){return[[{path:"",component:u,data:v}]]},[])])})}}]);