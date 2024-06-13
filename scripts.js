const headTitleArray = [
  "",
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

const dataInitIncome = [
  {
    name: "Бюджет доходов",
    type: "FOLDER",
    price: [4000000, 4000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    child: [
      {
        name: "Разработка проекта",
        type: "FILE",
        price: [2000000, 2000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Ремонтные работы",
        type: "FILE",
        price: [1500000, 1500000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Услуги",
        type: "FOLDER",
        price: [500000, 500000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        child: [
          {
            name: "Аудит и консалтинг",
            type: "FILE",
            price: [250000, 250000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "Работа электрика",
            type: "FILE",
            price: [200000, 200000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },

          {
            name: "Малярные работы",
            type: "FILE",
            price: [50000, 50000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
];

const dataInitExpenses = [
  {
    name: "Бюджет расходов",
    type: "FOLDER",
    price: [4000000, 4000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    child: [
      {
        name: "Разработка проекта",
        type: "FILE",
        price: [2000000, 2000000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Ремонтные работы",
        type: "FILE",
        price: [1500000, 1500000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Услуги",
        type: "FOLDER",
        price: [500000, 500000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        child: [
          {
            name: "Аудит и консалтинг",
            type: "FILE",
            price: [250000, 250000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: "Работа электрика",
            type: "FILE",
            price: [200000, 200000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },

          {
            name: "Малярные работы",
            type: "FILE",
            price: [50000, 50000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
];

function convertToNumber(value) {
  return Number(value.replace(",", ".").replace(/[^\d.-]/g, ""));
}

function convertToCurrency(value) {
  return Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
  }).format(value);
}

function sort() {
  const element = document.querySelector(".iconSort");
  const tooltip = element.closest("div").querySelector(".tooltip");

  if (element.src.endsWith("sort-descending.png")) {
    element.src = "./Icons/sort-alphabet.png";
    tooltip.textContent = "Сортировка статей по алфавиту";
    const folderNames = Array.from(document.querySelectorAll("#title_l1"));
    const sortedFolderNames = folderNames.sort((a, b) => {
      const nameA = a.textContent.toLowerCase();
      const nameB = b.textContent.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    const tbody = document.querySelector(`[id^="body_0"]`);
    sortedFolderNames.forEach((folder) => {
      if (folder.closest("tr").className !== "value") {
        const element = folder.closest("tbody");
        tbody.appendChild(element);
      } else {
        const parentTr = folder.closest("tr");
        tbody.appendChild(parentTr);
      }
    });
  } else {
    element.src = "./Icons/sort-descending.png";
    tooltip.textContent = "Сортировка статей по убыванию итоговой суммы";
    const folderValues = Array.from(
      document.querySelectorAll(`[id^="sum_m0_l1`)
    );
    const fileValues = Array.from(document.querySelectorAll(`[id^="el_m0_l1`));
    const allValues = [...fileValues, ...folderValues];
    const sortedFolderNames = allValues.sort((a, b) => {
      const nameA = a.textContent.toLowerCase();
      const nameB = b.textContent.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    const tbody = document.querySelector(`[id^="body_0"]`);
    sortedFolderNames.forEach((folder) => {
      if (folder.closest("tr").className !== "value") {
        const element = folder.closest("tbody");
        tbody.appendChild(element);
      } else {
        const parentTr = folder.closest("tr");
        tbody.appendChild(parentTr);
      }
    });
  }
}

function hide(event) {
  const parent = event.target.closest("tbody");
  const array = Array.from(parent.children);
  array.forEach((el, index) => {
    if (index !== 0) {
      el.classList.toggle("hide");
    }
  });
}

function deleteRow(event, level) {
  const element = event.target.closest("tr");
  const parent = element.closest("tbody");
  parent.removeChild(element);
  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12];

  months.forEach((month) => {
    const valuesColumnFile = parent.querySelectorAll(
      `[id^="el_m${month}_l${level}"]`
    );
    const valuesColumnFolder = parent.querySelectorAll(
      `[id^="sum_m${month}_l${level}"]`
    );
    for (let i = level; i > 0; i -= 1) {
      const sumColumn = document.querySelector(
        `[id^="sum_m${month}_l${i - 1}"]`
      );
      let sumColumnValue = 0;
      valuesColumnFile.forEach((value) => {
        sumColumnValue += convertToNumber(value.textContent);
      });

      if (valuesColumnFolder) {
        valuesColumnFolder.forEach((value) => {
          sumColumnValue += convertToNumber(value.textContent);
        });
        sumColumn.textContent = convertToCurrency(sumColumnValue);
      }

      const sumRowAll = document.querySelector(`[id^="sum_m0_l${i - 1}"]`);
      const resultRow = sumRowAll.closest("tr");
      const resultValues = resultRow.querySelectorAll(`[id^="sum_m"]`);

      let sumRowValue = 0;
      resultValues.forEach((value, index) => {
        if (index !== 0) {
          sumRowValue += convertToNumber(value.textContent);
        }
      });
      sumRowAll.textContent = convertToCurrency(sumRowValue);
    }
  });
}

function addFile(event, level) {
  event.target.style.background = "none";
  const element = event.target.closest("th");
  const parent = event.target.closest("tbody");
  const initText = element.innerHTML;
  element.innerHTML = "";
  const input = document.createElement("input");
  input.classList.add("input");
  input.placeholder = "Название статьи...";
  element.appendChild(input);
  input.focus();

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const newCell = document.createElement("tr");
      newCell.classList.add("value");
      const nameRow = event.target.value;
      const newName = document.createElement("th");
      newName.classList.add("bodyNameCell");
      newName.id = `title_l${level + 1}`;
      newName.style.paddingLeft = (level + 1) * 32 + "px";
      newName.textContent = nameRow;
      const imgCancel = document.createElement("img");
      imgCancel.src = "./Icons/cancel.png";
      imgCancel.classList.add("iconCancel");
      imgCancel.addEventListener("mouseover", function () {
        imgCancel.classList.add("iconCancelActive");
      });
      imgCancel.addEventListener("mouseout", function () {
        imgCancel.classList.remove("iconCancelActive");
      });
      imgCancel.setAttribute("onclick", `deleteRow(event, ${level + 1})`);
      newName.appendChild(imgCancel);

      newCell.appendChild(newName);

      for (let i = 0; i < 13; i += 1) {
        const valueCell = document.createElement("td");
        valueCell.textContent = convertToCurrency(0);
        valueCell.classList.add("bodyValueCell");
        if (i > 0) {
          valueCell.style.cursor = "pointer";
          valueCell.setAttribute(
            "onclick",
            `change(event, ${i}, ${level + 1})`
          );
        }

        valueCell.id = `el_m${i}_l${level + 1}`;
        newCell.appendChild(valueCell);
      }
      if (event.target.value !== "") {
        parent.appendChild(newCell);
      }
      element.innerHTML = initText;
    }
  });
}

function addFolder(event, level) {
  event.target.style.background = "none";
  const element = event.target.closest("th");
  const parent = event.target.closest("tbody");

  const tr = document.createElement("tr");
  tr.classList.add(`nameFolder_${level}`);
  const initText = element.innerHTML;
  element.innerHTML = "";
  const input = document.createElement("input");
  input.classList.add("input");
  input.placeholder = "Название группы...";
  element.appendChild(input);
  input.focus();

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let isHide = false;
      const newCell = document.createElement("tbody");
      const nameRow = event.target.value;
      newCell.id = `body_${level}_${nameRow}`;
      const newName = document.createElement("th");
      newName.classList.add("bodyNameCell");
      newName.id = `title_l${level + 1}`;

      const nameContainer = document.createElement("div");
      nameContainer.classList.add("nameContainer");
      nameContainer.id = "btn-hide";
      nameContainer.setAttribute("onclick", "hide(event)");
      nameContainer.style.paddingLeft = level * 32 + "px";

      const label = document.createElement("label");
      label.style.cursor = "pointer";
      label.textContent = nameRow;

      nameContainer.appendChild(label);
      const iconsContainer = document.createElement("div");
      iconsContainer.classList.add("iconsContainer");
      const imgAddFile = document.createElement("img");
      imgAddFile.src = "./Icons/plus.png";
      imgAddFile.classList.add("iconAdd");

      imgAddFile.addEventListener("mouseover", function () {
        imgAddFile.style.background = "rgba(0, 0, 0, 0.1)";
      });

      imgAddFile.addEventListener("mouseout", function () {
        imgAddFile.style.background = "none";
      });

      imgAddFile.setAttribute("onclick", `addFile(event, ${level + 1})`);

      const imgAddFolder = document.createElement("img");
      imgAddFolder.src = "./Icons/folder.png";
      imgAddFolder.classList.add("iconAdd");

      imgAddFolder.addEventListener("mouseover", function () {
        imgAddFolder.style.background = "rgba(0, 0, 0, 0.1)";
      });

      imgAddFolder.addEventListener("mouseout", function () {
        imgAddFolder.style.background = "none";
      });
      imgAddFolder.setAttribute("onclick", `addFolder(event, ${level + 1})`);

      iconsContainer.appendChild(imgAddFolder);
      iconsContainer.appendChild(imgAddFile);

      newName.appendChild(nameContainer);
      newName.appendChild(iconsContainer);

      if (level > 0) {
        const imgHide = document.createElement("img");
        imgHide.src = "./Icons/mini-arrow.png";
        imgHide.id = "icon-hide";
        imgHide.classList.add("iconHide");

        nameContainer.addEventListener("click", () => {
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

        nameContainer.insertBefore(imgHide, nameContainer.firstChild);
        newName.style.paddingLeft = level * 32 + "px";
      }

      tr.appendChild(newName);

      newCell.appendChild(tr);
      for (let i = 0; i < 13; i += 1) {
        const valueCell = document.createElement("td");
        valueCell.textContent = convertToCurrency(0);
        valueCell.classList.add("bodyValueCell");

        valueCell.id = `sum_m${i}_l${level + 1}`;
        tr.appendChild(valueCell);
      }
      if (event.target.value !== "") {
        parent.appendChild(newCell);
      }
      element.innerHTML = initText;
    }
  });
}

function change(event, month, level) {
  const element = event.target.closest("td");
  const parent = element.closest("tr");
  const parentBody = parent.closest("tbody");
  const sumRow = parent.querySelector(`[id^="el_m0_l${level}"]`);

  const valuesRow = parent.querySelectorAll("td");
  const valuesColumnFile = parentBody.querySelectorAll(
    `[id^="el_m${month}_l${level}"]`
  );
  const valuesColumnFolder = parentBody.querySelectorAll(
    `[id^="sum_m${month}_l${level}"]`
  );
  let changeName = "";
  const initText = element.textContent;
  element.textContent = "";

  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.id = `el_m${month}_l${level - 1}`;
  input.classList.add("inputValue");
  input.placeholder = "";

  element.appendChild(input);
  input.focus();
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const newValue = convertToCurrency(event.target.value);
      element.textContent = newValue;
      changeName = newValue;

      let sumRowValue = 0;
      valuesRow.forEach((value, index) => {
        if (index !== 0) {
          sumRowValue += Number(
            value.textContent
              .replace(",", ".")
              .replace(",", ".")
              .replace(/[^\d.-]/g, "")
          );
        }
      });
      sumRow.textContent = convertToCurrency(sumRowValue);

      for (let i = level; i > 0; i -= 1) {
        const sumColumn = document.querySelector(
          `[id^="sum_m${month}_l${i - 1}"]`
        );
        let sumColumnValue = 0;
        valuesColumnFile.forEach((value) => {
          sumColumnValue += convertToNumber(value.textContent);
        });

        if (valuesColumnFolder) {
          valuesColumnFolder.forEach((value) => {
            sumColumnValue += convertToNumber(value.textContent);
          });
          sumColumn.textContent = convertToCurrency(sumColumnValue);
        }

        const sumRowAll = document.querySelector(`[id^="sum_m0_l${i - 1}"]`);
        const resultRow = sumRowAll.closest("tr");
        const resultValues = resultRow.querySelectorAll(`[id^="sum_m"]`);

        let sumRowValue = 0;
        resultValues.forEach((value, index) => {
          if (index !== 0) {
            sumRowValue += convertToNumber(value.textContent);
          }
        });
        sumRowAll.textContent = convertToCurrency(sumRowValue);
      }
    }

    input.addEventListener("blur", function () {
      if (convertToNumber(changeName) !== event.target.value) {
        element.textContent = initText;
      }
    });
  });
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
    th.classList.add("bodyTitleHead");

    const tooltipContainer = document.createElement("div");
    tooltipContainer.classList.add("conTooltip");

    const tooltip = document.createElement("div");
    const imgSort = document.createElement("img");
    imgSort.src = "./Icons/sort-descending.png";
    imgSort.classList.add("iconSort");
    imgSort.addEventListener("click", sort);
    tooltip.textContent = "Сортировка статей по убыванию итоговой суммы";
    tooltip.classList.add("tooltip");

    tooltipContainer.appendChild(imgSort);
    tooltipContainer.appendChild(tooltip);
    th.appendChild(tooltipContainer);
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
tbodyData.id = "tbodyData";

function renderData(data, folderName, body, level) {
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
      th.id = `title_l${level}`;
      const nameContainer = document.createElement("div");
      nameContainer.classList.add("nameContainer");
      nameContainer.id = "btn-hide";
      nameContainer.setAttribute("onclick", "hide(event)");

      const label = document.createElement("label");
      label.style.cursor = "pointer";
      label.textContent = element.name;

      nameContainer.appendChild(label);
      const iconsContainer = document.createElement("div");
      iconsContainer.classList.add("iconsContainer");
      const imgAddFile = document.createElement("img");
      imgAddFile.src = "./Icons/plus.png";
      imgAddFile.classList.add("iconAdd");

      imgAddFile.addEventListener("mouseover", function () {
        imgAddFile.style.background = "rgba(0, 0, 0, 0.1)";
      });

      imgAddFile.addEventListener("mouseout", function () {
        imgAddFile.style.background = "none";
      });

      imgAddFile.setAttribute("onclick", `addFile(event, ${level})`);

      const imgAddFolder = document.createElement("img");
      imgAddFolder.src = "./Icons/folder.png";
      imgAddFolder.classList.add("iconAdd");

      imgAddFolder.addEventListener("mouseover", function () {
        imgAddFolder.style.background = "rgba(0, 0, 0, 0.1)";
      });

      imgAddFolder.addEventListener("mouseout", function () {
        imgAddFolder.style.background = "none";
      });
      imgAddFolder.setAttribute("onclick", `addFolder(event, ${level})`);

      iconsContainer.appendChild(imgAddFolder);
      iconsContainer.appendChild(imgAddFile);

      th.appendChild(nameContainer);
      th.appendChild(iconsContainer);

      if (level > 0) {
        const imgHide = document.createElement("img");
        imgHide.src = "./Icons/mini-arrow.png";
        imgHide.id = "icon-hide";
        imgHide.classList.add("iconHide");

        nameContainer.addEventListener("click", () => {
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

        nameContainer.insertBefore(imgHide, nameContainer.firstChild);
        th.style.paddingLeft = level * 32 + "px";
      }

      tr.appendChild(th);

      element.price.forEach((el, index) => {
        const td = document.createElement("td");
        td.id = `sum_m${index}_l${level}`;
        td.textContent = convertToCurrency(el);
        if (level === 0) {
          td.classList.add("bodyTitleCell");
        } else {
          td.classList.add("bodyValueCell");
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);

      body.appendChild(tbody);
    } else {
      const tr = document.createElement("tr");
      tr.classList.add("value");
      const th = document.createElement("th");
      const label = document.createElement("label");
      label.classList.add("labelBodyName");
      label.textContent = element.name;
      th.appendChild(label);
      th.classList.add("bodyNameCell");
      th.id = `title_l${level}`;
      th.style.paddingLeft = level * 32 + "px";
      const imgCancel = document.createElement("img");
      imgCancel.src = "./Icons/cancel.png";
      imgCancel.classList.add("iconCancel");
      imgCancel.addEventListener("mouseover", function () {
        imgCancel.classList.add("iconCancelActive");
      });
      imgCancel.addEventListener("mouseout", function () {
        imgCancel.classList.remove("iconCancelActive");
      });
      imgCancel.setAttribute("onclick", `deleteRow(event, ${level})`);
      th.appendChild(imgCancel);
      tr.appendChild(th);

      element.price.forEach((el, index) => {
        const td = document.createElement("td");
        td.textContent = convertToCurrency(el);
        td.classList.add("bodyValueCell");
        if (index > 0) {
          td.setAttribute("onclick", `change(event, ${index}, ${level})`);
          td.style.cursor = "pointer";
        }

        td.id = `el_m${index}_l${level}`;
        tr.appendChild(td);
      });
      const tbody = document.getElementById(`body_${level - 1}_${folderName}`);
      tbody.appendChild(tr);
    }

    if (element.type === "FOLDER" && element.child) {
      const tbody = document.getElementById(`body_${level}_${element.name}`);
      renderData(element.child, element.name, tbody, level + 1);
    }
  });
}

table.appendChild(tbodyTitle);
table.appendChild(tbodyHead);
table.appendChild(tbodyData);
table.classList.add("table");

const tableContainer = document.getElementById("tableContainer");
tableContainer.appendChild(table);

renderData(dataInitIncome, "", tbodyData, 0);
