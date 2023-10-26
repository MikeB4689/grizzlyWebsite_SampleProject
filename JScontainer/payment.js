const planActivation = document.querySelector(".planActiveContainer");
console.log(planActivation);
const plansOffer = [
  {
    title: "TRY FOR 30 DAYS",
    titleDescription: "And receive LUDICROUS LEADERSHIP as an additional gift",
    price: 5,
    time: "Activation",
    planDesription:
      "No commitment. Cancel anytime during 30 day open access period",
    button: "30 day free",
  },

  {
    title: "MOST POPULAR",
    titleDescription: "And receive LUDICROUS LEADERSHIP as an additional gift",
    price: 595,
    time: "Activation",
    planDesription:
      "No commitment. Cancel anytime during 30 day open access period",
    button: "Start now",
  },
  {
    title: "JOIN TODAY",
    titleDescription: "And receive LUDICROUS LEADERSHIP as an additional gift",
    price: 595,
    time: "Today",
    planDesription: "Then 3 additional monthly installments of $495",
    button: "Get Access",
  },
];

const plansForActivation = () => {
  plansOffer.forEach((plans) => {
    const planContainer = document.createElement("div");
    planContainer.classList.add("planContainer");

    const planTitle = document.createElement("h1");
    planTitle.classList.add("planTitle");

    planTitle.innerText = plans.title;

    const planDescriptionContainer = document.createElement("div");
    planDescriptionContainer.classList.add("planDescriptionContainer");
    const col1Plan = document.createElement("p");
    col1Plan.innerText = plans.titleDescription;

    const col2Plan = document.createElement("h1");
    col2Plan.classList.add("col2Plan");
    col2Plan.innerText = `$${plans.price} `;
    const col2Span = document.createElement("span");
    col2Span.innerText = plans.time;
    const col3Plan = document.createElement("p");
    col3Plan.innerText = plans.planDesription;
    const col4Plan = document.createElement("button");
    col4Plan.innerText = plans.button;
    col2Plan.appendChild(col2Span);

    planDescriptionContainer.appendChild(col1Plan);
    planDescriptionContainer.appendChild(col2Plan);
    planDescriptionContainer.appendChild(col3Plan);
    planDescriptionContainer.appendChild(col4Plan);

    planContainer.appendChild(planTitle);
    planContainer.appendChild(planDescriptionContainer);

    planActivation.appendChild(planContainer);
  });
};

plansForActivation();
