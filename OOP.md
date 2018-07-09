# Основные понятия ООП

Базовые принципы:
- **Инкапсуляция**
- **Наследование**
- **Полиморфизм**
- **Композиция**


## Абстракция данных

- Набор значимых характеристик объекта, доступный остальной программе
- Основная идея - представить объект минимальным набором полей и методов и при этом с достаточной точностью для решаемой задачи
- **Абстрагирование**  означает выделение значимой информации и исключение из рассмотрения незначимой...
  - ... для данного проекта
  - важна возможность переиспользования в будущем
    - абстракции помогают в работе со сложным
- Позволяет представить сложную реальность в виде упрощённой модели
-   Выделяет свойства, которые нам нужны и прячет остальное.

### Интерфейсы

-  Интерфейс - это набор методов, которые есть у данного объекта.
    -  Добавляет уровень абстракции
    -   Вызывается абстрактный метод
    -   Не нужно думать о его внутренней реализации

-   **Интерфейс** - это прототип, состоящий из групп методов, свойств и событий
    - Может быть реализован данным классом или структурой.
    - Определяет только прототипы методов
        -   Не даёт конкретной реализации
        -
    - Можно использовать для определения абстрактных типов данных
    - Может наследоваться (дополняться) другими интерфейсами

## Инкапсуляция

- механизм языка, позволяющий ограничить доступ одних компонентов программы к другим;
- языковая конструкция, позволяющая связать данные с методами, предназначенными для обработки этих данных.
-  Прячет детали реализации
-  Некоторые методы класса доступны пользователю (публичный интерфейс)
-  Все поля с данным должны быть скрыты...
    -  и доступны через свойства
- Части интерфейса нельзя скрывать

## Наследование

- Абстрактный тип данных (производный, дочерний объект) может наследовать данные и функциональность некоего существующего объекта (родителя)
-   Производные классы могут изменять свойства, полученные от родителя:
    -   добавлять новые поля и методы
    -   переопределять методы

## Полиморфизм

- Позволяет использовать объекты с одинаковым интерфейсом без информации о типе и внутренней структуре объекта
    - В производных классах унаследованное поведение может быть переопределено
-   Позволяет определять и вызвать абстрагированые методы
    - Абстрагированые методы определяются в интерфейсе родительского класса и используется в производных классах

## Cohesion

-   **Cohesion**  describes
    -   How closely the routines in a class or the code in a routine support a  **central purpose**
-   Cohesion must be  **strong**
    -   Well-defined abstractions keep cohesion strong
-   Classes must contain  **strongly related functionality**  and aim for single purpose
-   Cohesion is a powerful tool for managing complexity

### Good and Bad Cohesion

- **Good cohesion**: HDD, CR-ROM, remote control
- **Bad cohesion**: spaghetti code, single-board computer

### Strong Cohesion

-   **Strong cohesion**  (good cohesion) example
    -   Class  `Math`  that has methods:
        -   `Sin()`,  `Cos()`,  `Asin()`
        -   `Sqrt()`,  `Pow()`,  `Exp()`
        -   `Math.PI`,  `Math.E`

### Weak Cohesion

-   **Weak cohesion**  (bad cohesion) example
    -   Class  **Magic**  that has these methods:

```js
public void PrintDocument(Document d);
public void SendEmail(
string recipient, string subject, string text);
public void CalculateDistanceBetweenPoints(
int x1, int y1, int x2, int y2)
```
-   Another example:
```js
MagicClass.MakePizza("Fat Pepperoni");
MagicClass.WithdrawMoney("999e6");
MagicClass.OpenDBConnection();
```

## Coupling

-   **Coupling**  describes how tightly a class or routine is related to other classes or routines
-   Coupling must be kept  **loose**
    -   Modules must depend little on each other
        -   Or be entirely independent (**loosely coupled**)
    -   All classes / routines must have small, direct, visible, and flexible relationships to other classes / routines
    -   One module must be easily used by other modules

### Loose and Tight Coupling

-   **Loose Coupling**:
    -   Easily replace old HDD
    -   Easily place this HDD
        to another motherboard
- **Tight Coupling**:
	- Where is the video adapter?
	- Can you change the video controller?

## Spaghetti Code

-   Combination of bad cohesion and tight coupling