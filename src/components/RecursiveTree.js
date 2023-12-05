import React from 'react';

const RecursiveTree = ({ data }) => {
  return (
    <ul>
      {data.map((node, index) => (
        <li key={index}>
          {node.name}
          {node.children && <RecursiveTree data={node.children} />}
        </li>
      ))}
    </ul>
  );
};

export default RecursiveTree;