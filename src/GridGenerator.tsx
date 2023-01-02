import React from "react";

import Box from "@mui/material/Box";

class GridNode {
  constructor(
    public isLeaf: boolean = true,
    public left?: GridNode,
    public right?: GridNode
  ) {}
}

function insertIntoNode(root: GridNode) {
  const q = [];

  q.push(root);

  while (q.length !== 0) {
    const temp = q.shift();

    if (temp == null) {
      return;
    }

    if (temp.left == null) {
      temp.isLeaf = false;
      temp.left = new GridNode();
      break;
    } else {
      q.push(temp.left);
    }

    if (temp.right == null) {
      temp.isLeaf = false;
      temp.right = new GridNode();
    } else {
      q.push(temp.right);
    }
  }
}

const generateTree = (length: number): GridNode => {
  const root = new GridNode();

  if (length === 1) {
    return root;
  }

  for (let i = 1; i <= length; i++) {
    insertIntoNode(root);
  }

  console.log(root);
  return root;
};

export function generateGrid(length: number) {
  const tree = generateTree(length);
  return renderGrid(tree);
}

const orientations = ["gridTemplateRows", "gridTemplateColumns"];
const colors = ["red", "yellow", "blue"];

function renderGrid(node?: GridNode, orientation = 0) {
  // base case
  if (typeof node === "undefined") {
    return;
  }

  if (node.isLeaf) {
    return (
      <Box
        gap={2}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)"
        }}
      >
        Hello
      </Box>
    );
  }

  const resOrientation = orientations[orientation % 2];
  // console.log(`Calculation is ${orientation} % 2`);
  // console.log(orientation, "orientation");
  // console.log(resOrientation, "resOrientation");

  // recursion case
  return (
    <Box
      gap={2}
      sx={{
        width: "100%",
        display: "grid",
        border: "1px solid black",
        borderColor: colors[orientation % 3],
        [resOrientation]: "repeat(2, 1fr)"
      }}
    >
      {renderGrid(node.left, orientation + 1)}
      {renderGrid(node.right, orientation + 1)}
    </Box>
  );
}

function Main() {
  const root = new GridNode();

  for (let i = 1; i <= 5; i++) {
    insertIntoNode(root);
  }

  printInOrder(root);
}

function printInOrder(root?: GridNode) {
  if (root == null) {
    return;
  }

  console.log(root, "root");
  console.log("Node is leaf");
  if (!root.isLeaf) {
    console.log("Checking left");
    printInOrder(root.left);

    console.log("Checking right");
    printInOrder(root.right);
  }
}

// Main();
