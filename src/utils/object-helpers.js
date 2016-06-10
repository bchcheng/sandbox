export default function spread(props, spreadType = "css"){
  //BERNIE: Return a different string format depending on the spread type.
  const propArray = [];

  if (spreadType == "css")
  {
    for (let prop in props){
      var test = "test";
      propArray.push(`${prop}: ${props[prop]}`);
    }
  }
  return propArray.join("; ");
}
