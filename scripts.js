function hide() {
  document.querySelectorAll("#icon-hide").forEach((el) => {
    el.addEventListener("click", function (ev) {
      const oTarget = ev.target.closest("tbody");
      const arr = oTarget.querySelectorAll(".value");
      arr.forEach((el) => {
        el.classList.toggle("show");
      });
    });
  });
}

const headTitleArray = [
  "Наименование",
  "Итог",
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

const bodyHeadTitleArray = [
  "Бюджет",
  "План",
  "План",
  "План",
  "План",
  "План",
  "План",
  "План",
  "План",
  "План",
  "План",
  "План",
  "План",
  "План",
];

const dataInit = [
  {
    name: "Бюджет доходов",
    type: "FOLDER",
    price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    child: [
      {
        name: "Разработка проекта",
        type: "FILE",
        price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Ремонтные работы",
        type: "FILE",
        price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Услуги",
        type: "FOLDER",
        price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        child: [
          {
            name: "Аудит и консалтинг",
            type: "FILE",
            price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "Работа электрика",
            type: "FILE",
            price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "Ремонт",
            type: "FOLDER",
            price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            child: [
              {
                name: "Малярные работы",
                type: "FILE",
                price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              },
              {
                name: "Доставка",
                type: "FILE",
                price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              },
            ],
          },
        ],
      },
    ],
  },
];

const table = document.createElement("table");
const thead = document.createElement("thead");
const trTitleHead = document.createElement("tr");
trTitleHead.id = "titleHead";

const tbodyTitle = document.createElement("tbody");
headTitleArray.forEach((title, index) => {
  const th = document.createElement("th");
  th.textContent = title;
  index === 0
    ? th.classList.add("headTitle")
    : th.classList.add("headTitleCell");
  trTitleHead.appendChild(th);
});

thead.appendChild(trTitleHead);
tbodyTitle.appendChild(thead);

const tbodyHead = document.createElement("tbody");
tbodyHead.id = "bodyHead";
const tbodyName = document.createElement("tbody");
const trBodyHead = document.createElement("tr");
bodyHeadTitleArray.forEach((title, index) => {
  if (index === 0) {
    const th = document.createElement("th");
    th.textContent = title;
    th.classList.add("bodyTitle");
    trBodyHead.appendChild(th);
  } else {
    const td = document.createElement("td");
    td.textContent = title;
    td.classList.add("bodyTitleCell");
    trBodyHead.appendChild(td);
  }
  tbodyName.appendChild(trBodyHead);
  tbodyHead.appendChild(tbodyName);
});

const tbodyData = document.createElement("tbody");

function renderData(data, level) {
  data.forEach((element, index) => {
    if (element.type === "FOLDER") {
      let isHide = false;
      const tbody = document.createElement("tbody");
      tbody.id = `body_${level}`;
      const tr = document.createElement("tr");
      tr.classList.add("name");
      const th = document.createElement("th");
      const label = document.createElement("label");
      label.textContent = element.name;
      th.appendChild(label);
      th.classList.add("bodyTitle");
      if (level > 0) {
        const imgHide = document.createElement("img");
        imgHide.src = "./Icons/mini-arrow.png";
        imgHide.id = "icon-hide";
        imgHide.classList.add("iconHide");
        imgHide.addEventListener("click", () => {
          if (!isHide) {
            imgHide.style.transition = "transform 0.3s ease-in-out";
            imgHide.style.transform = "rotate(90deg)";
            isHide = true;
          } else {
            imgHide.style.transition = "transform 0.3s ease-in-out";
            imgHide.style.transform = "rotate(0deg)";
            isHide = false;
          }
        });
        th.style.paddingLeft = level * 32 + "px";
        th.appendChild(imgHide);
        const label = document.createElement("label");
        label.textContent = element.name;
        th.appendChild(label);
      }

      tr.appendChild(th);

      element.price.forEach((el) => {
        const td = document.createElement("td");
        td.textContent = el;
        td.classList.add("bodyTitleCell");
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
      tbodyHead.appendChild(tbody);
    } else {
      const tr = document.createElement("tr");
      tr.classList.add("value");
      const th = document.createElement("th");
      const label = document.createElement("label");
      label.textContent = element.name;
      th.appendChild(label);
      th.classList.add("bodyNameCell");
      th.style.paddingLeft = level * 32 + "px";
      tr.appendChild(th);

      element.price.forEach((el) => {
        const td = document.createElement("td");
        td.textContent = el;
        td.classList.add("bodyValueCell");
        tr.appendChild(td);
      });

      const tbody = document.getElementById(`body_${level - 1}`);
      tbody.appendChild(tr);
    }

    if (element.type === "FOLDER" && element.child) {
      renderData(element.child, level + 1);
    }
  });
}

table.appendChild(tbodyTitle);
table.appendChild(tbodyHead);
table.appendChild(tbodyData);
table.classList.add("table");

const tableContainer = document.getElementById("tableContainer");
tableContainer.appendChild(table);

renderData(dataInit, 0);
hide();
