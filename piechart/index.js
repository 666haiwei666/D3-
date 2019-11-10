var dataset=[
    {name:'购物',value:981},
    {name:'日常饮食',value:2281},
    {name:'医药费',value:2341},
    {name:'交通费',value:6541},
    {name:'杂费',value:321},
]
var svg_width=500;
var svg_height=500;

var arc = d3.arc()
.innerRadius(0)
.outerRadius(200)

var angle_data = d3.pie()
.value(function(d) {    return d.value; })

var color=d3.scaleOrdinal(d3.schemeCategory10)

var svg=d3.select('.container')
.append('svg')
.attr('width',svg_width+'px')
.attr('height',svg_width+'px')

var g=d3.select('svg')
.append('g')
.attr('transform','translate('+svg_width/2+','+svg_height/2+')')


g.selectAll('path')
.data(angle_data(dataset))
.enter()
.append('path')
.attr('d',arc)
.style('fill',function(d,i){
    return color(i)
})

g.selectAll('text')
.data(angle_data(dataset))
.enter()
.append('text')
.text(function(d){
    return d.data.name
})
.attr('transform',function(d){
    console.log(d)
    return 'translate('+arc.centroid(d)+')'
})
.attr('text-anchor','middle')