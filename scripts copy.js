const month = [
  "Январь 2024",
  "Февраль 2024",
  "Март 2024",
  "Апрель 2024",
  "Май 2024",
  "Июнь 2024",
  "Июль 2024",
  "Август 2024",
  "Сентябрь 2024",
  "Октябрь 2024",
  "Ноябрь 2024",
  "Декабрь 2024",
];

let dirTree = [
  {
    parentDir: {
      name: "Бюджет доходов",
      type: "FOLDER",
      child: [
        {
          name: "Разработка проекта",
          type: "FILE",
        },
        {
          name: "Ремонтные работы",
          type: "FILE",
        },
        {
          name: "Услуги",
          type: "FOLDER",
          child: [
            {
              name: "Аудит и консалтинг",
              type: "FILE",
            },
            {
              name: "Работа электрика",
              type: "FILE",
            },
            {
              name: "Малярные работы",
              type: "FILE",
            },
            {
              name: "Доставка",
              type: "FILE",
            },
          ],
        },
      ],
    },
  },
  {
    parentDir: {
      name: "Бюджет расходов",
      type: "FOLDER",
      child: [
        {
          name: "Материалы",
          type: "FOLDER",
          child: [
            {
              name: "Мебель",
              type: "FOLDER",
              child: [
                {
                  name: "Дерево",
                  type: "FILE",
                },
                {
                  name: "Стекло",
                  type: "FILE",
                },
                {
                  name: "Фурнитура",
                  type: "FILE",
                },
              ],
            },
            {
              name: "Химия",
              type: "FOLDER",
              child: [
                {
                  name: "Краска",
                  type: "FILE",
                },
                {
                  name: "Лак",
                  type: "FILE",
                },
              ],
            },
            {
              name: "Аренда инструмента",
              type: "FILE",
            },
            {
              name: "Аренда офиса",
              type: "FILE",
            },
            {
              name: "Коммунальные платежи",
              type: "FILE",
            },
            {
              name: "Транспорт",
              type: "FILE",
            },
          ],
        },
      ],
    },
  },
];

localStorage.setItem("dirTree", JSON.stringify(dirTree));
const data = JSON.parse(localStorage.getItem("dirTree"));

function addParentDir(dirTree, newDir) {
  dirTree.push(newDir);
  localStorage.setItem("dirTree", JSON.stringify(dirTree));

  return JSON.parse(localStorage.getItem("dirTree"));
}

// addParentDir(dirTree, {
//   parentDir: {
//     name: "Материалы",
//     child: [{}],
//   },
// });

function addFile(name) {
  const trIncomeItem = document.createElement("tr");
  for (let i = 0; i <= month.length + 1; i += 1) {
    const tdIncomeItem = document.createElement("td");
    if (i === 0) {
      tdIncomeItem.textContent = name;
      tdIncomeItem.contentEditable = true;
      tdIncomeItem.id = `incomeItemName${i}`;
      tdIncomeItem.classList.add("nameCell");
      tdIncomeItem.classList.add("level1");
    } else {
      tdIncomeItem.textContent = 0;
      tdIncomeItem.contentEditable = true;
      tdIncomeItem.id = `incomeItem${i}`;
      tdIncomeItem.classList.add("valueCell");
    }
    trIncomeItem.appendChild(tdIncomeItem);
  }

  const newFile = {
    name: name,
    type: "FILE",
  };

  tbody.appendChild(trIncomeItem);
  updateIncomeValue();
}

function createFile(event) {
  const tdIncome = event.target.closest("td");
  const originalContent = tdIncome.innerHTML;
  tdIncome.innerHTML = "";
  tdIncome.contentEditable = true;
  tdIncome.focus();
  tdIncome.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addFile(tdIncome.textContent);
      tdIncome.contentEditable = false;
    }
  });
  tdIncome.addEventListener("blur", function () {
    tdIncome.innerHTML = originalContent;
    const imgPlus = tdIncome.querySelector("#iconPlus");
    imgPlus.addEventListener("click", createFile);
    const imgFolder = tdIncome.querySelector("#iconFolder");
    imgFolder.addEventListener("click", addFolder);
  });
}

function addFolder() {
  const trIncomeItem = document.createElement("tr");
  for (let i = 0; i <= month.length + 1; i += 1) {
    const tdIncomeItem = document.createElement("td");
    if (i === 0) {
      const p = document.createElement("p");
      p.classList.add("iconContainer");
      const imgPlus = document.createElement("img");
      imgPlus.src = "./Icons/plus.png";
      imgPlus.classList.add("icon");
      imgPlus.addEventListener("click", addFile);
      const imgFolder = document.createElement("img");
      imgFolder.src = "./Icons/folder.png";
      imgFolder.classList.add("icon");
      imgFolder.addEventListener("click", addFolder);
      const imgArrow = document.createElement("img");
      imgArrow.src = "./Icons/mini-arrow.png";
      tdIncomeItem.appendChild(imgArrow);
      const span = document.createElement("span");
      span.textContent = "Название группы...";
      tdIncomeItem.appendChild(span);
      tdIncomeItem.contentEditable = false;
      tdIncomeItem.id = `incomeItemName${i}`;
      tdIncomeItem.classList.add("nameCell");
      tdIncomeItem.classList.add("level1");
      p.appendChild(imgFolder);
      p.appendChild(imgPlus);
      tdIncomeItem.appendChild(p);
    } else {
      tdIncomeItem.textContent = 0;
      tdIncomeItem.contentEditable = false;
      tdIncomeItem.id = `incomeItem${i}`;
      tdIncomeItem.classList.add("valueCell");
    }
    trIncomeItem.appendChild(tdIncomeItem);
  }
  tbody.appendChild(trIncomeItem);
  updateIncomeValue();
}

const h2 = document.createElement("h2");
h2.textContent = "Бюджет на 2024 год";
h2.classList.add("mainTitle");
const tableContainer = document.createElement("div");
tableContainer.classList.add("tableContainer");
tableContainer.is = "tableContainer";

const table = document.createElement("table");
const thead = document.createElement("thead");
const trHead = document.createElement("tr");

const thTitle = document.createElement("th");
thTitle.classList.add("titleMain");
trHead.appendChild(thTitle);

const th = document.createElement("th");
th.textContent = "Итог";
th.id = "result";
th.classList.add("title");
trHead.appendChild(th);

const monthThElements = month.map((el, index) => {
  const th = document.createElement("th");
  th.textContent = el;
  th.id = `month${index}`;
  th.classList.add("title");
  return th;
});

trHead.append(...monthThElements);
thead.appendChild(trHead);

const tbody = document.createElement("tbody");
const trTitle = document.createElement("tr");

for (let i = 0; i <= month.length + 1; i += 1) {
  const tdTitle = document.createElement("td");
  if (i === 0) {
    tdTitle.textContent = "БЮДЖЕТ";
    tdTitle.id = "budgetBnt";
    tdTitle.classList.add("mainCell");
    const img = document.createElement("img");
    img.src = "./Icons/sort-descending.png";
    img.classList.add("iconSort");
    tdTitle.appendChild(img);
    trTitle.appendChild(tdTitle);
  } else {
    tdTitle.textContent = "План";
    tdTitle.classList.add("titleValueCell");
    trTitle.appendChild(tdTitle);
  }
  trTitle.appendChild(tdTitle);
}
tbody.appendChild(trTitle);

const trIncome = document.createElement("tr");
const incomeData = data[0].parentDir;
for (let i = 0; i <= month.length + 1; i += 1) {
  const tdIncome = document.createElement("td");
  if (i === 0 && incomeData.type === "FOLDER") {
    tdIncome.textContent = incomeData.name;
    tdIncome.id = `incomeResultName${i}`;
    tdIncome.classList.add("mainCell");
    const p = document.createElement("p");
    p.classList.add("iconContainer");
    const imgPlus = document.createElement("img");
    imgPlus.src = "./Icons/plus.png";
    imgPlus.classList.add("icon");
    imgPlus.id = "iconPlus";
    imgPlus.addEventListener("click", createFile);
    const imgFolder = document.createElement("img");
    imgFolder.src = "./Icons/folder.png";
    imgFolder.classList.add("icon");
    imgFolder.id = "iconFolder";
    imgFolder.addEventListener("click", addFolder);

    p.appendChild(imgFolder);
    p.appendChild(imgPlus);
    tdIncome.appendChild(p);
    trTitle.appendChild(tdIncome);
  } else {
    tdIncome.textContent = 0;
    tdIncome.id = `incomeResult${i}`;
    tdIncome.classList.add("titleValueCell");
    trTitle.appendChild(tdIncome);
  }
  trIncome.appendChild(tdIncome);
}
tbody.appendChild(trIncome);

incomeData.child.map((el) => {
  const trIncomeItem = document.createElement("tr");
  for (let i = 0; i <= month.length + 1; i += 1) {
    const tdIncomeItem = document.createElement("td");
    if (i === 0 && el.type === "FILE") {
      tdIncomeItem.textContent = el.name;
      tdIncomeItem.id = `incomeItemName${i}`;
      tdIncomeItem.classList.add("nameCell");
      trTitle.appendChild(tdIncomeItem);
    } else if (i === 0 && el.type === "FOLDER") {
      tdIncomeItem.textContent = el.name;
      tdIncomeItem.id = `incomeItemName${i}`;
      tdIncomeItem.classList.add("nameCell");
      const p = document.createElement("p");
      p.classList.add("iconContainer");
      const imgPlus = document.createElement("img");
      imgPlus.src = "./Icons/plus.png";
      imgPlus.classList.add("icon");
      imgPlus.id = "iconPlus";
      imgPlus.addEventListener("click", createFile);
      const imgFolder = document.createElement("img");
      imgFolder.src = "./Icons/folder.png";
      imgFolder.classList.add("icon");
      imgFolder.id = "iconFolder";
      imgFolder.addEventListener("click", addFolder);
      p.appendChild(imgFolder);
      p.appendChild(imgPlus);
      tdIncomeItem.appendChild(p);
      trTitle.appendChild(tdIncomeItem);
    } else {
      tdIncomeItem.textContent = 0;
      tdIncomeItem.contentEditable = true;
      tdIncomeItem.id = `incomeItem${i}`;
      tdIncomeItem.classList.add("valueCell");
      trTitle.appendChild(tdIncomeItem);
    }
    trIncomeItem.appendChild(tdIncomeItem);
  }
  tbody.appendChild(trIncomeItem);
});

function updateIncomeValue() {
  for (let i = 1; i <= month.length + 1; i += 1) {
    const tdIncome = document.getElementById(`incomeResult${i}`);
    const tdIncomeItem = document.querySelectorAll(`#incomeItem${i}`);

    tdIncomeItem.forEach((el) => {
      el.addEventListener("input", function () {
        let sum = 0;
        tdIncomeItem.forEach((el) => {
          sum += parseFloat(el.textContent);
        });
        tdIncome.textContent = sum;
      });
    });
  }
}

table.appendChild(thead);
table.appendChild(tbody);
tableContainer.appendChild(table);
document.body.appendChild(h2);
document.body.appendChild(tableContainer);

updateIncomeValue();

function save(obj) {
  const json = JSON.stringify(obj);

  localStorage.setItem("dirTree", json);
}

function getDirTree() {
  const data = localStorage.getItem("dirTree");
  return JSON.parse(data);
}

save(dirTree);

function addParentDir(dirTree, newDir) {
  dirTree.push(newDir);
  localStorage.setItem("dirTree", JSON.stringify(dirTree));

  return JSON.parse(localStorage.getItem("dirTree"));
}

// addParentDir(dirTree, {
//   parentDir: {
//     name: "Материалы",
//     child: [{}],
//   },
// });

// 1) Метод для поиска объекта по name
// 2) Реализовать метод добавления в найденый объект
