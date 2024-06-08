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
  {
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
];

localStorage.setItem("dirTree", JSON.stringify(dirTree));
const data = JSON.parse(localStorage.getItem("dirTree"));

function addParentDir(dirTree, newDir) {
  dirTree.push(newDir);
  localStorage.setItem("dirTree", JSON.stringify(dirTree));

  return JSON.parse(localStorage.getItem("dirTree"));
}

const h2 = document.createElement("h2");
h2.textContent = "Бюджет на 2024 год";
h2.classList.add("mainTitle");
const tableContainer = document.createElement("div");
tableContainer.classList.add("tableContainer");
tableContainer.id = "tableContainer";

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

function renderDirectory(directory, parentElement, tbody, level) {
  directory.forEach((item) => {
    const tr = document.createElement("tr");
    const nameTd = document.createElement("td");
    nameTd.textContent = item.name;
    if (level === 0) {
      nameTd.classList.add("mainCell");
    } else {
      nameTd.classList.add("nameCell");
      nameTd.style.paddingLeft = 32 * level + "px";
    }

    tr.appendChild(nameTd);

    for (let i = 0; i < 12; i += 1) {
      const td = document.createElement("td");
      level === 0
        ? td.classList.add("titleValueCell")
        : td.classList.add("valueCell");
      if (item.type !== "FOLDER") {
        td.textContent = "0";
        td.contentEditable = true;
      } else {
        td.textContent = "0";
        td.contentEditable = false;
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);

    if (item.type === "FOLDER" && item.child) {
      renderDirectory(item.child, tr, tbody, level + 1);
    }
  });
}

table.appendChild(thead);
table.appendChild(tbody);
tableContainer.appendChild(table);
document.body.appendChild(h2);
document.body.appendChild(tableContainer);

renderDirectory(dirTree, tableContainer, tbody, 0);
