const BST = require('./BST');


function findHeight(t){
  let height = 0;
  while(t){
    if(t.right === null){
      height++;
      t = t.left
    }
    else{
      height++;
      t = t.right;
    }
  }
  console.log(height-1);
  return height-1;
}


function main(){
  let tree = new BST();
  let arr = [3,1,4,6,9,2,5,7];

  tree.insert(3);
  tree.insert(1);
  tree.insert(4);
  tree.insert(6);
  tree.insert(9);
  tree.insert(2);
  tree.insert(5);
  tree.insert(7);

  findHeight(tree);

  console.log(tree.left);
  //console.log(JSON.stringify(tree));


}

main();

/*
4.)  What does the function do?

function tree(t){
  if(!t){
      return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}

The function will return the leftmost and rightmost leaf (terminal) nodes of t.

*/