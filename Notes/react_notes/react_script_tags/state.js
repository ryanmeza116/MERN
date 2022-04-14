// using state:
// when using state, two objects must be defined, a "get" and a "set" or update. 
const [state, setState] = useState({ // seems like a lot of extra syntax just to instantiate
    name: ""                         // one piece of state that's holding an empty string, doesn't it?
});
const onClick = () => {
    setState({name: "Scary Terry"}) // here we have to go inside our object, get to our appropriate key,
}                                   // THEN change the value
console.log(state.name);

// an easier method: 
const [name, setName] = useState(""); // we don't have to stick with only state and setState as variable names
const onClick = () => {
    setName("Scary Terry") // no layers to peel back to get to the value we want to change!
}
console.log(name); // now "state" represents only the string value



