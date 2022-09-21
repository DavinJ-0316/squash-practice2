const commit = 1;
const commit2 = 2;
const commit3 = 3;
const commit4 = 4;
const commit5 = 5;

// git log找到最初的一条
// git rebase -i 最初的一条
// pick 最初的一条的后一条 squash余下的全部
// https://til.hashrocket.com/posts/qesxhnv2jb-git-interactive-rebase-the-first-commit
// 再最后 git rebase -i --root
// 内容自动保留最新的commit的内容