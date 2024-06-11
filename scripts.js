function hide() {
  document.querySelectorAll("#btn-hide").forEach((el) => {
    el.addEventListener("click", function (event) {
      const parent = event.target.closest("tbody");
      const arr = parent.querySelectorAll(".value");
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
        price: [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Ремонтные работы",
        type: "FILE",
        price: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
      {
        name: "Услуги1",
        type: "FOLDER",
        price: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        child: [
          {
            name: "Аудит и консалтинг",
            type: "FILE",
            price: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "Работа электрика",
            type: "FILE",
            price: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "Ремонт1",
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

function sum(event, level, index) {
  let enteredValue = event.target.textContent;
  const element = event.target;
  element.contentEditable = true;
  element.focus();
  element.textContent = "";
  const parent = event.target.closest("tr").closest("tbody");
  const cells = parent.querySelectorAll(`#el_m${index}_l${level}`);

  function handleKeyUp(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      let sum = 0;
      cells.forEach((cell) => {
        sum += parseInt(cell.textContent);
      });
      enteredValue = event.target.textContent;
      element.textContent = parseInt(enteredValue);
      const tableCell = document.getElementById(`sum_m${index}_l${level - 1}`);
      tableCell.textContent = sum;
      element.contentEditable = false;
      element.removeEventListener("keyup", handleKeyUp);
    } else if (e.key === "Escape") {
      element.textContent = enteredValue;
      element.contentEditable = false;
      element.removeEventListener("keyup", handleKeyUp);
    }
  }

  function handleBlur() {
    if (enteredValue !== "") {
      element.textContent = enteredValue;
    }
    element.contentEditable = false;
    element.removeEventListener("keyup", handleKeyUp);
  }

  function handleClick() {
    element.contentEditable = true;
    element.focus();
  }

  element.addEventListener("keyup", handleKeyUp);
  element.addEventListener("blur", handleBlur);
  element.addEventListener("click", handleClick);
}

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
    const imgSort = document.createElement("img");
    imgSort.src = "./Icons/sort-descending.png";
    imgSort.classList.add("iconSort");
    th.appendChild(imgSort);
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

function renderData(data, folderName, level) {
  data.forEach((element, index) => {
    if (element.type === "FOLDER") {
      let isHide = false;
      const tbody = document.createElement("tbody");
      tbody.id = `body_${level}_${element.name}`;
      const tr = document.createElement("tr");
      tr.classList.add(`nameFolder_${level}`);
      const th = document.createElement("th");
      level === 0
        ? th.classList.add("bodyTitle")
        : th.classList.add("bodyNameCell");
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
        const nameContainer = document.createElement("div");
        nameContainer.classList.add("nameContainer");
        nameContainer.id = "btn-hide";
        const label = document.createElement("label");
        label.style.cursor = "pointer";
        label.textContent = element.name;
        nameContainer.appendChild(imgHide);
        nameContainer.appendChild(label);

        th.style.paddingLeft = level * 32 + "px";

        const iconsContainer = document.createElement("div");
        iconsContainer.classList.add("iconsContainer");
        const imgAddFile = document.createElement("img");
        imgAddFile.src = "./Icons/plus.png";
        imgAddFile.classList.add("iconAdd");
        const imgAddFolder = document.createElement("img");
        imgAddFolder.src = "./Icons/folder.png";
        imgAddFolder.classList.add("iconAdd");
        iconsContainer.appendChild(imgAddFolder);
        iconsContainer.appendChild(imgAddFile);

        th.appendChild(nameContainer);
        th.appendChild(iconsContainer);
      } else {
        const label = document.createElement("label");
        label.textContent = element.name;
        th.appendChild(label);
      }

      tr.appendChild(th);

      element.price.forEach((el, index) => {
        const td = document.createElement("td");
        td.id = `sum_m${index}_l${level}`;
        td.textContent = 0;
        if (level === 0) {
          td.classList.add("bodyTitleCell");
        } else {
          td.classList.add("bodyValueCell");
        }

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

      element.price.forEach((el, index) => {
        const td = document.createElement("td");
        td.textContent = el;
        td.classList.add("bodyValueCell");
        td.setAttribute("contenteditable", "true");
        td.setAttribute("onclick", `sum(event, ${level}, ${index})`);
        td.id = `el_m${index}_l${level}`;
        tr.appendChild(td);
      });
      const tbody = document.getElementById(`body_${level - 1}_${folderName}`);
      tbody.appendChild(tr);
    }

    if (element.type === "FOLDER" && element.child) {
      renderData(element.child, element.name, level + 1);
    }
  });
}

table.appendChild(tbodyTitle);
table.appendChild(tbodyHead);
table.appendChild(tbodyData);
table.classList.add("table");

const tableContainer = document.getElementById("tableContainer");
tableContainer.appendChild(table);

renderData(dataInit, "", 0);
hide();
