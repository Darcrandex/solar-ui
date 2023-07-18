export type TreeNode<D extends object> = { id: string; title?: string; data?: D; children?: TreeNode<D>[] }
export type Tree = { rootId: string }

// 数据模式部分
export type FlatTreeNode<D extends object> = Omit<TreeNode<D>, 'children'> & { items?: string[] }
