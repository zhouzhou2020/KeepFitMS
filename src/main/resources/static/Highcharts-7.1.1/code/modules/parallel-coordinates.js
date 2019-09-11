/*
  Highcharts JS v7.1.1 (2019-04-09)

 Support for parallel coordinates in Highcharts

 (c) 2010-2019 Pawel Fus

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/parallel-coordinates",["highcharts"],function(f){b(f);b.Highcharts=f;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function f(c,b,f,k){c.hasOwnProperty(b)||(c[b]=k.apply(null,f))}b=b?b._modules:{};f(b,"modules/parallel-coordinates.src.js",[b["parts/Globals.js"]],function(c){function b(a){var d=this.series&&this.series.chart,
m=a.apply(this,Array.prototype.slice.call(arguments,1)),b,f,e;d&&d.hasParallelCoordinates&&!n(m.formattedValue)&&(e=d.yAxis[this.x],b=e.options,d=(f=q(b.tooltipValueFormat,b.labels.format))?c.format(f,p(this,{value:this.y}),d.time):e.isDatetimeAxis?d.time.dateFormat(d.time.resolveDTLFormat(b.dateTimeLabelFormats[e.tickPositions.info.unitName]).main,this.y):b.categories?b.categories[this.y]:this.y,m.formattedValue=m.point.formattedValue=d);return m}var f=c.Axis,k=c.Chart,v=k.prototype,r=c.Axis.prototype,
g=c.addEvent,q=c.pick,w=c.wrap,l=c.merge,x=c.erase,t=c.splat,p=c.extend,n=c.defined,y=c.arrayMin,z=c.arrayMax,u={lineWidth:0,tickLength:0,opposite:!0,type:"category"};c.setOptions({chart:{parallelCoordinates:!1,parallelAxes:{lineWidth:1,title:{text:"",reserveSpace:!1},labels:{x:0,y:4,align:"center",reserveSpace:!1},offset:0}}});g(k,"init",function(a){a=a.args[0];var d=t(a.yAxis||{}),b=d.length,c=[];if(this.hasParallelCoordinates=a.chart&&a.chart.parallelCoordinates){for(this.setParallelInfo(a);b<=
this.parallelInfo.counter;b++)c.push({});a.legend||(a.legend={});void 0===a.legend.enabled&&(a.legend.enabled=!1);l(!0,a,{boost:{seriesThreshold:Number.MAX_VALUE},plotOptions:{series:{boostThreshold:Number.MAX_VALUE}}});a.yAxis=d.concat(c);a.xAxis=l(u,t(a.xAxis||{})[0])}});g(k,"update",function(a){a=a.options;a.chart&&(n(a.chart.parallelCoordinates)&&(this.hasParallelCoordinates=a.chart.parallelCoordinates),this.options.chart.parallelAxes=l(this.options.chart.parallelAxes,a.chart.parallelAxes));this.hasParallelCoordinates&&
(a.series&&this.setParallelInfo(a),this.yAxis.forEach(function(a){a.update({},!1)}))});p(v,{setParallelInfo:function(a){var d=this;a=a.series;d.parallelInfo={counter:0};a.forEach(function(a){a.data&&(d.parallelInfo.counter=Math.max(d.parallelInfo.counter,a.data.length-1))})}});r.keepProps.push("parallelPosition");g(f,"afterSetOptions",function(a){var d=this.chart,b=["left","width","height","top"];d.hasParallelCoordinates&&(d.inverted&&(b=b.reverse()),this.isXAxis?this.options=l(this.options,u,a.userOptions):
(this.options=l(this.options,this.chart.options.chart.parallelAxes,a.userOptions),this.parallelPosition=q(this.parallelPosition,d.yAxis.length),this.setParallelPosition(b,this.options)))});g(f,"getSeriesExtremes",function(a){if(this.chart&&this.chart.hasParallelCoordinates&&!this.isXAxis){var d=this.parallelPosition,b=[];this.series.forEach(function(a){a.visible&&n(a.yData[d])&&b.push(a.yData[d])});this.dataMin=y(b);this.dataMax=z(b);a.preventDefault()}});p(r,{setParallelPosition:function(a,b){var d=
(this.parallelPosition+.5)/(this.chart.parallelInfo.counter+1);this.chart.polar?b.angle=360*d:(b[a[0]]=100*d+"%",this[a[1]]=b[a[1]]=0,this[a[2]]=b[a[2]]=null,this[a[3]]=b[a[3]]=null)}});g(c.Series,"bindAxes",function(a){if(this.chart.hasParallelCoordinates){var b=this;this.chart.axes.forEach(function(a){b.insert(a.series);a.isDirty=!0});b.xAxis=this.chart.xAxis[0];b.yAxis=this.chart.yAxis[0];a.preventDefault()}});g(c.Series,"afterTranslate",function(){var a=this.chart,b=this.points,c=b&&b.length,
f=Number.MAX_VALUE,g,e,h;if(this.chart.hasParallelCoordinates){for(h=0;h<c;h++)e=b[h],n(e.y)?(e.plotX=a.polar?a.yAxis[h].angleRad||0:a.inverted?a.plotHeight-a.yAxis[h].top+a.plotTop:a.yAxis[h].left-a.plotLeft,e.clientX=e.plotX,e.plotY=a.yAxis[h].translate(e.y,!1,!0,null,!0),void 0!==g&&(f=Math.min(f,Math.abs(e.plotX-g))),g=e.plotX,e.isInside=a.isInsidePlot(e.plotX,e.plotY,a.inverted)):e.isNull=!0;this.closestPointRangePx=f}},{order:1});c.addEvent(c.Series,"destroy",function(){this.chart.hasParallelCoordinates&&
(this.chart.axes||[]).forEach(function(a){a&&a.series&&(x(a.series,this),a.isDirty=a.forceRedraw=!0)},this)});["line","spline"].forEach(function(a){w(c.seriesTypes[a].prototype.pointClass.prototype,"getLabelConfig",b)})});f(b,"masters/modules/parallel-coordinates.src.js",[],function(){})});
//# sourceMappingURL=parallel-coordinates.js.map
