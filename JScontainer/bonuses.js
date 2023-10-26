const BonusesContainer = document.querySelector("#bonuseList");

const habits = [
  {
    colOne: "Habits",
    colonONeRow2: "of high-perfomers",
    col2Title: "Ivy-League",
    col2Span: "Accountability",
    col2Par:
      "Quis duis velit augue cum nisi volutpat. Metus nunc rutrum adipiscing dui pulvinar rutrum massa egestas iaculis. Mauris mauris mattis cursus",
  },
  {
    colOne: "Habits",
    colonONeRow2: "of high-perfomers",
    col2Title: "10 Ivy-League",
    col2Span: "Ful Common App",
    col2Par:
      "At semper dolor orci facilisis magna. Vulputate quis ut nec sapien a pulvinar blandit arcu. In pharetra feugiat senectus ipsum sit id amet fermentum.",
  },

  {
    colOne: "Habits",
    colonONeRow2: "of high-perfomers",
    col2Title: "IB/AP Math ",
    col2Span: "+ Physics Training + Question Bank",
    col2Par:
      "Felis elementum aenean purus lectus iaculis nulla eu condimentum. Fusce sodales fermentum elementum sit et dis in cras vitae",
  },
  {
    colOne: "Habits",
    colonONeRow2: "of high-perfomers",
    col2Title: "Delegation ",
    col2Span: "Package",
    col2Par:
      "Posuere nascetur ullamcorper eu eget sed at elit. Imperdiet dictum velit in ullamcorper. Congue velit a eu dolor nullam eu scelerisque aliquet. Consequat.",
  },
  {
    colOne: "Habits",
    colonONeRow2: "of high-perfomers",
    col2Title: "Tabula ",
    col2Span: "+ Achievement Software",
    col2Par:
      "Lobortis a egestas proin elit orci maecenas. Tellus auctor quam sed facilisi imperdiet et cras neque. Eu diam sed duis lacus. Bibendum iaculis commodo.",
  },
];

const BonusesFunction = () => {
  habits.forEach((element) => {
    const bonusesDevider = document.createElement("div");
    bonusesDevider.classList.add("bonusesDevider");

    const col1 = document.createElement("div");
    col1.classList.add("col1");
    const col1Title = document.createElement("h1");
    const col1SubTitle = document.createElement("h3");

    col1Title.innerText = element.colOne;
    col1SubTitle.innerText = element.colonONeRow2;

    col1.appendChild(col1Title);
    col1.appendChild(col1SubTitle);

    const col2 = document.createElement("div");
    col2.classList.add("col2");
    const col2Title = document.createElement("h1");
    const col2span = document.createElement("span");
    const col2sPar = document.createElement("p");

    col2Title.innerText = element.col2Title + " ";
    col2span.innerText = element.col2Span;
    col2sPar.innerText = element.col2Par;
    col2sPar.innerText = element.col2Par;

    col2.appendChild(col2Title);
    col2Title.appendChild(col2span);
    col2.appendChild(col2Title);
    col2.appendChild(col2sPar);
    bonusesDevider.appendChild(col1);
    bonusesDevider.appendChild(col2);
    BonusesContainer.appendChild(bonusesDevider);
  });
};

BonusesFunction();
