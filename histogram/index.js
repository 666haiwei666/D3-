var dataset=[
    {name:'购物',value:981},
    {name:'日常饮食',value:2281},
    {name:'医药费',value:2341},
    {name:'交通费',value:6541},
    {name:'杂费',value:321},
]
var newdataset=[]
Object.entries(dataset).forEach(([key, value]) => {
    newdataset.push(value.value)
})

var max=d3.max(newdataset)
var newarray=[]

console.log(max)
var svg_width=500;
var svg_height=500;

var x_scale =  d3.scaleLinear()
    .domain([0,max])
    .range([0,svg_width-30])

var color=d3.scaleOrdinal(d3.schemeCategory10)

var svg=d3.select('.container')
.append('svg')
.attr('width',svg_width+'px')
.attr('height',svg_width+'px')

var g=svg.selectAll('g')
.data(dataset)
.enter()
.append('g')
.attr('transform',function(d,i){
    console.log(d)
    return 'translate(0,'+i*60+')'})

g.append('rect')
.attr('width',function(d){
    
    console.log(d)
    console.log(d.value)
    return x_scale(d.value)

})
.attr('height','50px')
.attr('transform','translate(20,30)')
.style('fill',function(d,i){
    return color(i)
})

g.append('text')
.text(function(d){
    return d.name
})
.attr('transform','translate(20,55)')