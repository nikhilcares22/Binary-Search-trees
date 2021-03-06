class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class Bst {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let tree =  this;
        let newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
            return tree
        }else{
            this.insertNode(this.root,newNode)
            return this;
        }
    }
    insertNode(root, newNode){
            if(newNode.val<root.val){
                if(root.left==null){
                    root.left = newNode;
                }else{
                    this.insertNode(root.left,newNode);
                }
            }
            if(newNode.val>root.val){
                if (root.right == null) {
                    root.right = newNode;
                } else {
                    this.insertNode(root.right, newNode);
                }
            }                  
    }
    find(val){
        if(this.root==null)return false;
        let current = this.root,
            found  = false;
        while(!found && current){
            if(val<current.val){
                current =  current.left;
            } else if (val > current.val){
                current =  current.right;
            }else{
                found = true;
            }
        }           
        if(!found)return undefined;
        return current;
    }

    BFS() {
        let data = [],
            node = this.root,
            queue = [];

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data
    }
    DFSPreOrder() {
        let data = [];
        function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder() {
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder() {
        let data = []; //3  8
        function traverse(node) {//10   6   8      
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

}
let bst = new Bst()
bst.insert(10)
bst.insert(6)
bst.insert(8)
bst.insert(3)
bst.insert(15)
bst.insert(13)
bst.insert(20)
bst.insert(9)
let a = bst.DFSInOrder()
console.log(a)

    //         10
    //    6         15
    //  3   8     13   20
    //        9