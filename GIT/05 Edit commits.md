## Как перименовать коммит
https://help.github.com/articles/changing-a-commit-message/

### Последний коммит, котрый еще не запушен

`git commit --amend`

### Последний коммит, котрый запушен

```bash
git commit --amend
git push --force example-branch
```

### Предыдущие коммиты или несколько коммитов

```bash
# Показать последние n коммитов ветки
$ git rebase -i HEAD~3

# Список откроется в текстовом редакторе
pick e499d89 Delete CNAME
pick 0c39034 Better README
pick f7fde4a Change the commit message but push the same commit.

# Заменить pick на reword
pick e499d89 Delete CNAME
reword 0c39034 Better README
reword f7fde4a Change the commit message but push the same commit.

# Сохранить и закрыть

# Откроются коммиты для редактирования - изменить коммит, сохранить и закрыть

# Запушить изменения
git push --force
```

## Как удалить последний

https://www.atlassian.com/git/tutorials/undoing-changes

### Revert

Идеальный вариант для public shared repos
```bash
# Создаст новый коммит, в котором не будет изменений из последнего коммита
# crazy_commit останется в истории
git revert HEAD
```

### Reset

```bash
# Стирает все коммиты после указанного
git reset --hard <previous_commit_sha>
```
Если стираемые коммиты уже есть в origin, GIT выдаст ошибку при попытке `git push` (поскольку в новой истории не будет более поздних коммитов)


## Как удалить коммит из середины и запушить его? В каких случаях так можно делать, а в каких нет?

### Простой способ откатить коммит в обычной ветке (не мастера)
```bash
# Переключиться на предыдущий коммит
git checkout <previous_commit_sha>

# Создать новую ветку с этим предыдущим коммитом в конце
git checkout -b new_branch_without_crazy_commit
```

```bash
# Создаст новый коммит, в котором не будет изменений из указанного коммита
git revert <sha>
```

