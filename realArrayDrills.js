const replaceSpace = str => {
  //loops over str
  //checks each val to makes sure if there is an empty space
  //if there is an empty space replace w/ %20
  let regex = / /gi;
  return str.replace(regex, '%20');
};

console.log(replaceSpace('www.thinkful.com /tauh ida parv een'));
