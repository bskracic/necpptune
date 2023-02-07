import { Tree } from 'antd';
const { DirectoryTree } = Tree;
const treeData = [
  {
    title: 'vpetrina@racunarstvo.hr',
    key: '0-0',
    children: [
      {
        title: 'Zadatak11/Source.cpp',
        key: 1,
        isLeaf: true,
      },
      {
        title: 'Zadatak12/Source.cpp',
        key: 2,
        isLeaf: true,
      },
      {
        title: 'Zadatak13/Source.cpp',
        key: 3,
        isLeaf: true,
      },
      {
        title: 'Zadatak21/Source.cpp',
        key: 4,
        isLeaf: true,
      },
      {
        title: 'Zadatak22/Source.cpp',
        key: 5,
        isLeaf: true,
      },
    ],
  },
  {
    title: 'sslavko@racunarstvo.hr',
    key: '0-1',
    children: [
      {
        title: 'Zadatak11/Source.cpp',
        key: 6,
        isLeaf: true,
      },
      {
        title: 'Zadatak12/Source.cpp',
        key: 7,
        isLeaf: true,
      },
      {
        title: 'Zadatak13/Source.cpp',
        key: 8,
        isLeaf: true,
      },
      {
        title: 'Zadatak21/Source.cpp',
        key: 9,
        isLeaf: true,
      },
      {
        title: 'Zadatak22/Source.cpp',
        key: 10,
        isLeaf: true,
      },
    ],
  }
];
const StudentFileTree = (props) => {
  const onSelect = (keys, info) => {
      if(info.node.isLeaf === true) {
          console.log('Trigger Select', keys, info);
    }
  };
  const onExpand = (keys, info) => {
    // console.log('Trigger Expand', keys, info);
  };
  return (
    <DirectoryTree
      style={{height: "100%"}}
      showLine={true}
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
  );
};
export default StudentFileTree;