https://git-scm.com/book/ru/v2/%D0%92%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-Git-%D0%9E-%D0%B2%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8-%D0%B2-%D0%B4%D0%B2%D1%83%D1%85-%D1%81%D0%BB%D0%BE%D0%B2%D0%B0%D1%85

## Как создать и удалить ветку

### Локально
```bash
# Создать ветку
git branch <new_branch_name>

# Создать ветку и переключиться
git checkout -b <new_branch_name>

# "Безопасно" удалить ветку
# GIT не удалит ветку,е сли в ней есть несмердженные изменения
git branch -d <branch_name>

# force delete
git branch -D <branch_name>


# Rename the current branch to <branch>.
git branch -m <branch>

# List all local branches.
git branch
```

### В origin

```bash
# Добавить новую ветку в origin
git push origin <branch_name>

# "Безопасно" удалить ветку
git push origin --delete <branch_name>

# List all remote branches.
git branch -a
```

## Как привязать локальную ветку "a1" к удаленной ветке "b2", и пушить в нее

```bash
git push --set-upstream origin a1:b2
=
git push -u origin a1:b2
```