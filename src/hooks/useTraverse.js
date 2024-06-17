const useTraverse = () => {
    const insertNode = (tree, folderId, item , isFolder) => {
        if(tree.id == folderId && tree.isFolder) {
            tree.items.unshift({
                id:new Date().getTime(),
                name: item,
                isFolder: isFolder,
                items: []  
            });
            return;
        }
        tree?.items?.forEach((node)=>{
            if(node.isFolder) {
                insertNode(node, node.id, item, isFolder)
            }
        })
    }

    return {insertNode};
}

export default useTraverse;