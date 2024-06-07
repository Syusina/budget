# budget

Описание
Основной компонент приложения представляет собой таблицу, в которой строки соответствуют статьям доходов или расходов, а столбцы — месяцам. Значения по определенной статье за определенный месяц можно редактировать кликом на ячейку — ячейка переключается в режим редактирования и в нее можно ввести новое значение.

Строки «Бюджет доходов» и «Бюджет расходов» отражают суммы по соответствующим статьям, строка «Сальдо» — разницу между доходами и расходами, столбец «Итог» — суммы по всем месяцам. Значения в них должны автоматически пересчитываться при редактировании бюджета.

Статьи могут объединяться в группы, группы могут быть вложены друг в друга на произвольную глубину. Группы можно сворачивать, тогда все дочерние строки этой группы скрываются. В группах отображаются суммарные значения из дочерних строк, при редактировании они также должны автоматически пересчитываться.

Новые статьи или группы статей можно добавлять кликом по соответствующим кнопкам в существующих группах и в строках «Бюджет доходов» и «Бюджет расходов». При этом в соответствующей ячейке появляется поле для ввода названия статьи или группы. По нажатию Enter в таблицу добавляется новая строка с нулевыми значениями.

В таблице присутствует сортировка с возможностью переключения режимов:

- по сумме — строки сортируются по убыванию значений в колонке «Итог», значения сравниваются без учета знака, при равенстве значений строки сортируются в алфавитном порядке
- по названию — строки сортируются в алфавитном порядке
