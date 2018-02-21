/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  //for our convenience---------------------------array indexing  will look like:  0,1,2  =>  0,1,2,3
  //add a king to the Spichland country, so our preferences array will look like: [2,3,1] => [0,2,3,1]
  preferences.unshift(0);
  //add a sum variable to count our unhappy lovers
  let unhappyLovers = 0;
  //add a function that will find unhappy 'love triangles phenomenons' Spichonee
  function findSpichonee(belovedPerson, spichonee, spichland) {
    let spichoneeA = spichland[spichonee];
        spichoneeB = spichland[spichoneeA];
        spichoneeC = spichland[spichoneeB];
    if(spichonee === spichoneeC && spichoneeA !== spichoneeB){
        unhappyLovers += 1;
    }
  }
  preferences.forEach(findSpichonee);
  //we found out unhappy Spichonees and now we can return number of triangles  
  return unhappyLovers/3;
};
