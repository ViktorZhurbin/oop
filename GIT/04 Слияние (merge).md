## Merge (слияние)

GIT ищет общий для двух веток коммит и создает новый коммит ("merge commit"), объединяющий историю двух веток. У "merge commit", в отличие от других коммитов, два предка.
![](https://wac-cdn.atlassian.com/dam/jcr:83323200-3c57-4c29-9b7e-e67e98745427/Branch-1.png?cdnVersion=jq)

GIT сам определяет алгоритм слияния.

GIT не может автоматически слить ветки, если в файле один и тот же кусок изменен в обоих ветках. Возникает конфликт, который пользователь должен разрешить вручную.

Порядок действий:
```bash
git fetch
git pull
git checkout <receiving>
git fetch
git pull
git merge <outgoing>
```




https://www.atlassian.com/git/tutorials/using-branches/git-merge
https://www.atlassian.com/git/tutorials/merging-vs-rebasing