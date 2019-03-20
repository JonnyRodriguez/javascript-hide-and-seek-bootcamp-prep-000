var getFirstSelector = selector => {
  return document.querySelector(selector);
};

var nestedTarget = () => {
  return document.querySelector("#nested .target");
};

var increaseRankBy = n => {
  let list=document.querySelectorAll(".ranked-list");
  for( let l=0; l<list.length; l++) {
    list[l].innerHTML = parseInt(list[l].innerHTML)+n;
  }
};

var deepestChild = () => {
  let grandNode = querySelectorAll("div#grand-node");
  
};
