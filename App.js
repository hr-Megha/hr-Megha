/*
<div id="Parent"> 
<div id="child1">
<h1>I am an H1 tag</h1>
<h2>I am an H2 tag</h1>
</div>
<div id="child2">
<h1>I am an H1 tag</h1>
<h2>I am an H2 tag</h1>
</div>
</div>

*/


const Parent=  React.createElement(
"h1",
{id:"Parent"},
React.createElement("div",{id:"child1"},[
 React.createElement("h1",{},"I am an H1 tag"),
 React.createElement("h2",{},"I am an H2 tag")
]),
React.createElement("div",{id:"child2"},[
React.createElement("h1",{},"I am an H1 tag"),
React.createElement("h2",{},"I am an H2 tag")
]

)
)




const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(Parent);