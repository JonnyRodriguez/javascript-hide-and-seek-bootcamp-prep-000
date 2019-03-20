var getFirstSelector = selector => {
  return document.querySelector(selector);
};

var nestedTarget = () => {
  return document.querySelector("#nested .target");
};

var deepestChild = () => {
  let selector = querySelectorAll("div#grand-node");
  
};
