import { Tree } from 'antd';
const { DirectoryTree } = Tree;

const StudentFileTree = (props) => {

  const {treeData, onSelectionChanged} = props;

  const onSelect = (keys, info) => {
      if(info.node.isLeaf === true) {
        onSelectionChanged(info);
      }
  };

  return (
    <DirectoryTree
      style={{height: "100%"}}
      showLine={true}
      defaultExpandAll
      onSelect={onSelect}
      treeData={treeData}
    />
  );
};

export default StudentFileTree;