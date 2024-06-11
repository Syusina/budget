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
    price: [110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    child: [
      {
        name: "Разработка проекта",
        type: "FILE",
        price: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Ремонтные работы",
        type: "FILE",
        price: [20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Услуги",
        type: "FOLDER",
        price: [80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        child: [
          {
            name: "Аудит и консалтинг",
            type: "FILE",
            price: [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "Работа электрика",
            type: "FILE",
            price: [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "Малярные работы",
            type: "FILE",
            price: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "Доставка",
            type: "FILE",
            price: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ],
      },
    ],
  },
  {
    name: "Бюджет расходов",
    type: "FOLDER",
    price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    child: [
      {
        name: "Материалы",
        type: "FOLDER",
        price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        child: [
          {
            name: "Мебель",
            type: "FOLDER",
            price: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            child: [
              {
                name: "Дерево",
                type: "FILE",
                price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              },
              {
                name: "Стекло",
                type: "FILE",
                price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              },
              {
                name: "Фурнитура",
                type: "FILE",
                price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              },
            ],
          },
          {
            name: "Химия",
            type: "FOLDER",
            price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            child: [
              {
                name: "Краска",
                type: "FILE",
                price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              },
              {
                name: "Лак",
                type: "FILE",
                price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              },
            ],
          },
          {
            name: "Аренда инструмента",
            type: "FILE",
            price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "Аренда офиса",
            type: "FILE",
            price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "Коммунальные платежи",
            type: "FILE",
            price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "Транспорт",
            type: "FILE",
            price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ],
      },
    ],
  },
];
const editEvent = new Event("update");
const initEvent = new Event("init");

function update(value) {
  if (!value) {
    window.dispatchEvent(initEvent);
  } else {
    window.dispatchEvent(editEvent);
  }
}

window.addEventListener("update", () => {
  const data = {};
  renderDirectory();
});

window.addEventListener("init", () => {
  localStorage.setItem("dirTree", JSON.stringify(dirTree));
});

update();

const data = JSON.parse(localStorage.getItem("dirTree"));

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

trPlan = document.createElement("tr");
tdTitleSort = document.createElement("td");
tdTitleSort.textContent = "Бюджет";
tdTitleSort.classList.add("mainCell");
trPlan.appendChild(tdTitleSort);

const planElement = "План";
const arrayTd = Array(13).fill(planElement);

const tdElements = arrayTd.map((el, index) => {
  const td = document.createElement("td");
  td.textContent = el;
  td.id = `td${index}`;
  td.classList.add("titleValueCell");
  return td;
});

trPlan.append(...tdElements);

const tbody = document.createElement("tbody");

function renderDirectory(directory, parentElement, tbody, level) {
  const trDir = document.createElement("tr");
  if (level === 0) {
    trDir.appendChild(trPlan);
  }
  trDir.id = `dir_${level}`;
  directory.forEach((item, index) => {
    const tr = document.createElement("tr");
    const nameTd = document.createElement("td");
    const label = document.createElement("label");
    label.textContent = item.name;
    let isHide = false;

    if (level === 0) {
      nameTd.classList.add("mainCell");
    } else {
      nameTd.classList.add("nameCell");
      nameTd.style.paddingLeft = 32 * level + "px";
    }
    nameTd.appendChild(label);

    if (item.type === "FOLDER") {
      const nameContainer = document.createElement("div");
      if (level !== 0) {
        const imgArrow = document.createElement("img");
        imgArrow.src = "./Icons/mini-arrow.png";
        imgArrow.classList.add("iconArrow");

        nameContainer.addEventListener("click", () => {
          if (!isHide) {
            imgArrow.style.transition = "transform 0.3s ease-in-out";
            imgArrow.style.transform = "rotate(90deg)";
            isHide = true;
          } else {
            imgArrow.style.transition = "transform 0.3s ease-in-out";
            imgArrow.style.transform = "rotate(0deg)";
            isHide = false;
          }
          const childElements = tr.querySelectorAll(`dir_${level + 1}`);
          childElements.forEach((child) => {
            child.style.display = isHide ? "none" : "";
          });
        });
        nameContainer.appendChild(imgArrow);
        nameContainer.appendChild(label);
        nameTd.appendChild(nameContainer);
      }
      nameTd.appendChild(nameContainer);
      nameTd.style.fontWeight = 700;
      const iconsContainer = document.createElement("div");
      iconsContainer.classList.add("iconsContainer");
      const imgFolder = document.createElement("img");
      imgFolder.src = "./Icons/folder.png";
      imgFolder.classList.add("icon");
      imgFolder.id = "imgFolder";
      const imgPlus = document.createElement("img");
      imgPlus.src = "./Icons/plus.png";
      imgPlus.classList.add("icon");
      imgPlus.id = "imgPlus";
      iconsContainer.appendChild(imgFolder);
      iconsContainer.appendChild(imgPlus);
      nameTd.appendChild(iconsContainer);
    }

    tr.appendChild(nameTd);
    const tdResult = document.createElement("td");
    tdResult.textContent = 0;
    level === 0
      ? tdResult.classList.add("titleValueCell")
      : tdResult.classList.add("valueCell");
    tr.appendChild(tdResult);

    for (let i = 0; i < 12; i += 1) {
      const td = document.createElement("td");
      level === 0
        ? td.classList.add("titleValueCell")
        : td.classList.add("valueCell");
      td.setAttribute("data-month", i);
      td.setAttribute("data-level", level);
      td.setAttribute("data-value", item.price[i]);
      if (item.type !== "FOLDER") {
        td.textContent = item.price[i];
        td.contentEditable = true;
        td.id = `el${i}_${level}`;
        td.addEventListener("click", () => edit("asdasd"));
      } else {
        td.id = `el${i}_${level}`;
        td.textContent = item.price[i];
        td.contentEditable = false;
      }
      tr.appendChild(td);
    }
    trDir.appendChild(tr);
    tbody.appendChild(trDir);

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

window.addEventListener("storage", function (event) {
  const data = JSON.parse(localStorage.getItem("dirTree"));
  const level = 0;
  renderDirectory(data, tableContainer, tbody, level);
});

const level = 0;
renderDirectory(data, tableContainer, tbody, level);

const el0_1 = document.querySelectorAll("#el0_1");
const sum = [...el0_1].reduce((acc, el) => acc + Number(el.dataset.value), 0);
