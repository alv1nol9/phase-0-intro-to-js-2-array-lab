const cats = ["Milo", "Otis", "Garfield"]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyAppendCat(Ralph){
    cats.push("Ralph")
  }
function destructivelyPrependCat(){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(Broom) {
    return [...cats, "Broom"]; 
}
function prependCat(Arnold) {
    return['Arnold'].concat(cats);
}
function removeFirstCat(){
     return cats.slice(1);
}
function removeLastCat(){
    return cats.slice(0,-1)
}