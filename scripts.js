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

function addFile() {
  // addParentDir(JSON.parse(localStorage.getItem("dirTree")), {
  //   parentDir: {
  //     name: "Материалы",
  //     child: [{}],
  //   },
  // });
  const trIncomeItem = document.createElement("tr");
  for (let i = 0; i <= month.length + 1; i += 1) {
    const tdIncomeItem = document.createElement("td");
    if (i === 0) {
      tdIncomeItem.textContent = "Название статьи...";
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
  tbody.appendChild(trIncomeItem);
  updateIncomeValue();
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

let dirTree = [
  {
    parentDir: {
      name: "Бюджет доходов",
      child: [
        {
          name: "Folder #1",
          type: "FOLDER",
          child: [
            {
              name: "Folder #1 Child #1",
              type: "FOLDER",
              child: [
                {
                  name: "Folder #1 Child #1 Child #1",
                  type: "FOLDER",
                },
              ],
            },
          ],
        },
        {
          name: "File #1",
          type: "FILE",
        },
      ],
    },
  },
  {
    parentDir: {
      name: "Услуги",
      child: [{}],
    },
  },
];

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

const h2 = document.createElement("h2");
h2.textContent = "Бюджет на 2024 год";
h2.classList.add("mainTitle");
const tableContainer = document.createElement("div");
tableContainer.classList.add("tableContainer");
const table = document.createElement("table");
const thead = document.createElement("thead");
const trHead = document.createElement("tr");

const thTitle = document.createElement("th");
thTitle.textContent = "";
thTitle.classList.add("titleMain");
trHead.appendChild(thTitle);

const th = document.createElement("th");
th.textContent = "Итог";
th.id = "result";
th.classList.add("title");
trHead.appendChild(th);

month.map((el, index) => {
  const th = document.createElement("th");
  th.textContent = el;
  th.id = `month${index}`;
  th.classList.add("title");
  trHead.appendChild(th);
});

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
for (let i = 0; i <= month.length + 1; i += 1) {
  const tdIncome = document.createElement("td");
  if (i === 0) {
    tdIncome.textContent = "Бюджет доходов";
    tdIncome.id = `incomeResultName${i}`;
    tdIncome.classList.add("mainCell");
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

/// Статьи дохода 1
const trIncomeItem = document.createElement("tr");
for (let i = 0; i <= month.length + 1; i += 1) {
  const tdIncomeItem = document.createElement("td");
  if (i === 0) {
    tdIncomeItem.textContent = "Статья доходов";
    tdIncomeItem.id = `incomeItemName${i}`;
    tdIncomeItem.classList.add("nameCell");

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
///

/// Статьи дохода 2
const trIncomeItem1 = document.createElement("tr");
for (let i = 0; i <= month.length + 1; i += 1) {
  const tdIncomeItem = document.createElement("td");
  if (i === 0) {
    tdIncomeItem.textContent = "Статья доходов";
    tdIncomeItem.id = `incomeItemName${i}`;
    tdIncomeItem.classList.add("nameCell");

    trTitle.appendChild(tdIncomeItem);
  } else {
    tdIncomeItem.textContent = 0;
    tdIncomeItem.contentEditable = true;
    tdIncomeItem.id = `incomeItem${i}`;
    tdIncomeItem.classList.add("valueCell");
    trTitle.appendChild(tdIncomeItem);
  }
  trIncomeItem1.appendChild(tdIncomeItem);
}
tbody.appendChild(trIncomeItem1);
///

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
