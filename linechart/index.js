var data=[1,2,9,4,7,0,2,9,2,5]
var svg_width=500;
var svg_height=400;
var x_scale =  d3.scaleLinear()
    .domain([0,data.length])
    .range([0,svg_width])

var y_scale =  d3.scaleLinear()
.domain([0,d3.max(data)])
.range([svg_height-30,0])

var line_generate = d3.line()
    .x(function(d,i) { return x_scale(i); })
    .y(function(d) { return y_scale(d); });

var axis_x = d3.axisBottom(x_scale);
var axis_y=d3.axisLeft(y_scale)



var svg=d3.select('.container')
.append('svg')
.attr('width',svg_width+'px')
.attr('height',svg_width+'px')

d3.select('svg')
.append('g')
.attr('transform','translate(30,30)')

d3.select('g')
.append('path')
.attr('d',line_generate(data))

// 水平 x 轴

d3.select('svg')
.append('g')
.attr('transform','translate(30,'+(svg_height)+')')

.call(axis_x)

d3.select('svg')
.append('g')
.attr('transform','translate(30,30)')
.call(axis_y)