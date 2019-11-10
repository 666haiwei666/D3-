var data=[1,2,9,4,7,0,2,9,2,5]
var svg_width=500;
var svg_height=400;
var x_scale =  d3.scaleLinear()
    .domain([0,data.length])
    .range([0,svg_width])

var y_scale =  d3.scaleLinear()
.domain([0,d3.max(data)])
.range([svg_height-30,0])


var axis_x = d3.axisBottom(x_scale);
var axis_y=d3.axisLeft(y_scale)


var area = d3.area()
    .x(function(d,i) { return x_scale(i); })
    .y1(function(d) { return y_scale(d)})
    .y0(svg_height-30)
    .curve(d3.curveCatmullRom.alpha(0.4));

var svg=d3.select('.container')
.append('svg')
.attr('width',svg_width+'px')
.attr('height',svg_width+'px')

d3.select('svg')
.append('g')
.attr('transform','translate(30,30)')

d3.select('g')
.append('path')
.attr('d',area(data))
.style('fill','blue')

// 水平 x 轴

d3.select('svg')
.append('g')
.attr('transform','translate(30,'+(svg_height)+')')

.call(axis_x)

d3.select('svg')
.append('g')
.attr('transform','translate(30,30)')
.call(axis_y)