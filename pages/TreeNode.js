import React,{useState} from "react";
import Tree from "./Tree";
const TreeNode=({ node })=> {
    const { child, label } = node;
  
    const [showChildren, setShowChildren] = useState(false);
  return (
   <div className="">
     <div onClick={()=>setShowChildren(!showChildren)} style={{ marginBottom: "10px" }}>
    <span>{label}</span>
  </div>
  <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black" }}>
    {showChildren && <Tree treeData={child} />}
  </ul>
   </div>
  )
}
export default TreeNode