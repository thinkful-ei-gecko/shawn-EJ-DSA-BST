const BST = require('./BST');
const JSON = require('circular-json')


function findHeight(root, counter = 1){

  // base case

  if( root === null ){
    return 0;
  }

  if (root.right === null && root.left === null) {
    return counter;
  }

  // general case

  if (root.right && root.left){
    return Math.max(findHeight(root.right, counter + 1), findHeight(root.left, counter + 1))
  } else if (root.right !== null){
    return findHeight(root.right, counter + 1)
  } else {
    //root.left !== null
    return findHeight(root.left, counter + 1)
  }

}

function minHeight(tree){
  if (!tree){
    return  -1;
  }

  let left = findHeight(tree.left)
  let right = findHeight(tree.right)


  if (left < right){
    return left + 1
  } else {
    return right + 1
  }
}

// Q6. Is it a BST?

function isBST(tree){
  
  if (tree === null){
    return true;
  }

  if (tree.left && tree.left.key > tree.key){
    return false;
  }

  if (tree.right && tree.right.key < tree.key){
    return false;
  }

  if(!isBST(tree.left) || !isBST(tree.right)){
    return false;
  }

  return true;
}

// Q7. Third largest

// Write an algorithm to find the 3rd largest node in a binary search tree

function thirdLargest(tree){
  let one = tree._findMax()
  tree.remove(one.key)
  let second = tree._findMax()
  tree.remove(second.key)
  let third = tree._findMax()
  return third.key
}

// Q8. Balanced BST

function balance(tree){
  return (minHeight(tree) + 1 <= findHeight(tree))
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

  // console.log(findHeight(tree));
  // console.log(isBST(tree))
  //console.log(JSON.stringify(tree));
  // console.log(thirdLargest(tree))
  console.log(balance(tree))
  // console.log(minHeight(tree))


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