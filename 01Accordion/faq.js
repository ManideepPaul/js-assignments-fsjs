const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

faqData.forEach(e => {

  // Main faq div
  let faqDiv = document.createElement("div");
  faqDiv.classList.add("faq");

  // faq question
  let h3 = document.createElement("h3");
  h3.textContent = e.question;

  // faq symbol
  let symbol = document.createElement("span");
  symbol.classList.add("show_btn");
  symbol.textContent = "+";
  symbol.addEventListener("click", showFaq)

  function showFaq() {
    para.classList.toggle("hidden");
    btnStatusUpdate();
  }

  function btnStatusUpdate() {
    let status = symbol.textContent;
    status === "-" ? symbol.textContent = "+" : symbol.textContent = "-";
  }

  // faq header
  let faqHeader = document.createElement("div")
  faqHeader.classList.add("faq_header")
  faqHeader.appendChild(h3);
  faqHeader.appendChild(symbol);

  // faq answer
  let para = document.createElement("p");
  para.textContent = e.answer;
  para.classList.add("hidden");

  // Appending to page
  faqDiv.appendChild(faqHeader)
  faqDiv.appendChild(para);
  accordianBody.appendChild(faqDiv);

})

