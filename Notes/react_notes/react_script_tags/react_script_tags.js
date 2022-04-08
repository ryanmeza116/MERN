// Creating elements: 
const myReactComponent = React.createElement("h1", {}, "I am creating my first React component")
// Each react compont has 3 Parameters : 
// 1 : Tell react what kind of componet is being created
// 2 : Pass in props
// 3 : Tell react the children we want included

// To nest another componet within componet : 
const myNestedReactComponent = React.createElement("div", {}, React.createElement("p", {}, "This element is nested"))



