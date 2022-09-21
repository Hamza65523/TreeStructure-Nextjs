import React from 'react'
import TreeNode from './TreeNode'
const Tree = ({treeData}) => {
  return (
    <ul>
        {treeData&&treeData.map((node) => (
          <TreeNode node={node} key={node.id} />
        ))}
      </ul>
  )
}

export default Tree