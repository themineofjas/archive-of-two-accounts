
"use strict";

/* =========================================
   THE ARCHIVE OF TWO ACCOUNTS — LEVEL 3
   Complete investigative game
   ========================================= */

// SECTION 1: FICTIONAL ARCHIVE

const records = [
  {
    id: "D01",
    type: "NEWSPAPER",
    title: "Library Closes Amid Budget Crisis",
    date: "June 18, 2006",
    author: "Briar Glen Gazette",
    summary: "The public explanation for the closure.",
    parts: [
      "City Council voted to close the library at the end of June, citing a projected $120,000 municipal budget shortfall.",
      "Council Chair Evelyn Marsh called the decision difficult but necessary and proposed directing patrons to a county library eleven miles away.",
      "Residents objected that the replacement would be difficult to reach without reliable transportation."
    ]
  },
  {
    id: "D02",
    type: "BUDGET RECORD",
    title: "Municipal Appropriations, 2005–2007",
    date: "July 2006",
    author: "Briar Glen Finance Office",
    summary: "The figures behind the official explanation.",
    parts: [
      "Library funding: FY2005, $310,000; FY2006, $300,000; proposed FY2007, $0.",
      "New Downtown Development Planning Fund for FY2007: $145,000.",
      "The budget does not identify final development fund recipients or establish that the fund directly replaced library spending."
    ]
  },
  {
    id: "D03",
    type: "PERSONAL LETTER",
    title: "Letter from the Head Librarian",
    date: "May 24, 2006",
    author: "Mara Ellis",
    summary: "A warning written before the closure.",
    parts: [
      "I was told in April that the library property was included in a preliminary downtown redevelopment map.",
      "If closure is being considered for reasons beyond the budget, residents deserve to know.",
      "The library provides job-search assistance, internet access, and a public space available without charge."
    ]
  },
  {
    id: "D04",
    type: "MEETING MINUTES",
    title: "Council Meeting: Public Comment",
    date: "June 13, 2006",
    author: "Briar Glen City Clerk",
    summary: "Public questions and official answers.",
    parts: [
      "Jonah Price asked whether the library parcel was being considered for commercial redevelopment. Chair Marsh said several downtown properties were under review.",
      "Lena Ford asked how residents without cars would reach the county library. Staff were directed to investigate transportation options.",
      "The library closure passed by a vote of 4–1. No redevelopment agreement was approved at this meeting."
    ]
  },
  {
    id: "D05",
    type: "ORAL HISTORY",
    title: "Interview with a Former Patron",
    date: "September 2025",
    author: "Lena Ford",
    summary: "A resident remembers the consequences.",
    parts: [
      "They told us there was not enough money. I remember asking how children would get to the county library without a car.",
      "People said the city wanted the land for something else. But I never saw a signed agreement.",
      "We lost a place where everyone could go without paying."
    ]
  },
  {
    id: "D06",
    type: "INTERNAL MEMORANDUM",
    title: "Downtown Site Assessment",
    date: "April 11, 2006",
    author: "Planning Director",
    summary: "A planning memo complicates the official story.",
    parts: [
      "The library parcel is one of three candidate sites for the proposed Market Square redevelopment.",
      "If library operations are discontinued, the parcel could become available for commercial use.",
      "Negotiations remain preliminary. No developer commitment or land transfer is authorized. Coordinate budget review and site assessment before the June council session."
    ]
  },
  {
    id: "D07",
    type: "ARCHIVED EMAIL",
    title: "Parcel Search Correspondence",
    date: "April 19, 2006",
    author: "Planning Office",
    summary: "A previously unindexed planning email.",
    hidden: true,
    parts: [
      "The redevelopment committee requested estimates for relocating library services.",
      "Finance should not describe the library property as sold or committed. No offer has been accepted.",
      "Retain the April site assessment with the budget review packet."
    ]
  },
  {
    id: "D08",
    type: "TRANSPORT REPORT",
    title: "Transit Access Assessment",
    date: "August 2, 2006",
    author: "Regional Transit Office",
    summary: "A later assessment of library access.",
    hidden: true,
    parts: [
      "The county library is eleven miles from the former Briar Glen Public Library.",
      "The public transportation journey requires two transfers. Sunday service is unavailable.",
      "This assessment documents access after closure, not the council's original motive."
    ]
  }
];

// SECTION 2: EVENTS

const events = [
  {
    id: "E1",
    date: "April 11, 2006",
    label: "Planning director writes the site assessment"
  },
  {
    id: "E2",
    date: "April 19, 2006",
    label: "Planning office sends the parcel email"
  },
  {
    id: "E3",
    date: "May 24, 2006",
    label: "Head librarian writes to the council"
  },
  {
    id: "E4",
    date: "June 13, 2006",
    label: "Council votes to close the library"
  },
  {
    id: "E5",
    date: "June 18, 2006",
    label: "Newspaper reports the closure"
  },
  {
    id: "E6",
    date: "August 2, 2006",
    label: "Transit office evaluates access"
  }
];

// SECTION 3: WITNESSES

const witnesses = [
  {
    id: "W1",
    name: "Mara Ellis",
    role: "Former head librarian",
    questions: [
      {
        id: "a",
        text: "Why did you write to the council?",
        reply: "I wanted officials to explain whether redevelopment influenced the closure recommendation."
      },
      {
        id: "b",
        text: "What services did the library provide?",
        reply: "Internet access, job applications, study space, and a public place people could enter without paying."
      },
      {
        id: "c",
        text: "Present the site assessment (D06)",
        needs: "D06",
        reply: "This confirms that the property was considered. It does not tell us how much that influenced each council member."
      }
    ]
  },
  {
    id: "W2",
    name: "Lena Ford",
    role: "Former library patron",
    questions: [
      {
        id: "a",
        text: "What happened after the closure?",
        reply: "Getting to the county library was difficult, particularly for people without cars."
      },
      {
        id: "b",
        text: "Were the redevelopment rumors confirmed?",
        reply: "No. I heard rumors, but I never saw a signed agreement."
      },
      {
        id: "c",
        text: "Present the transit report (D08)",
        needs: "D08",
        reply: "That report documents the transportation problems we warned the council about."
      }
    ]
  },
  {
    id: "W3",
    name: "Jonah Price",
    role: "Community organizer",
    questions: [
      {
        id: "a",
        text: "Why did you question the council?",
        reply: "We heard that several downtown properties were being evaluated. I wanted a public answer."
      },
      {
        id: "b",
        text: "Did officials confirm a property sale?",
        reply: "No. They acknowledged reviewing properties, but they did not confirm a sale."
      },
      {
        id: "c",
        text: "Present the archived email (D07)",
        needs: "D07",
        reply: "That email makes the planning connection clearer. It also says that no offer had been accepted."
      }
    ]
  }
];

// SECTION 4: DEDUCTIONS

const deductions = [
  {
    id: "Q1",
    question: "Was the library property considered for redevelopment?",
    options: [
      "Yes, the planning documents establish this.",
      "No, it was only a rumor."
    ],
    correct: 0,
    explanation: "D06 identifies the library parcel as a candidate site."
  },
  {
    id: "Q2",
    question: "Do the records prove that the property was secretly sold?",
    options: [
      "Yes, the development budget proves a sale.",
      "No, the records do not establish a sale."
    ],
    correct: 1,
    explanation: "D04, D06, and D07 do not establish an approved sale."
  },
  {
    id: "Q3",
    question: "Which explanation is most strongly supported?",
    options: [
      "Funding was the only possible factor.",
      "Budget concerns and redevelopment planning both appear in the records.",
      "Library staff voted to close the building."
    ],
    correct: 1,
    explanation: "The budget records document financial concerns, while the planning records establish redevelopment consideration."
  }
];

// SECTION 5: GAME STATE

const $ = id => document.getElementById(id);

const storageKey = "briar-glen-level3-v2";

function newGame() {
  return {
    read: [],
    clues: [],
    connections: [],
    boardOrder: [],
    order: ["E4", "E1", "E5", "E3", "E6", "E2"],
    timelineSolved: false,
    interviews: [],
    deductions: {},
    theory: "",
    report: ""
  };
}

let state = newGame();

try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (saved) state = { ...newGame(), ...saved };
} catch (error) {
  console.warn("Could not restore progress.", error);
}

function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    console.warn("Progress could not be saved.", error);
  }
}

function element(tag, className = "", text = "") {
  const node = document.createElement(tag);
  if (className) node.className = className;
  node.textContent = text;
  return node;
}

function makeButton(text, action, className = "quiet") {
  const btn = element("button", className, text);
  btn.type = "button";
  btn.addEventListener("click", action);
  return btn;
}

function recordById(id) {
  return records.find(record => record.id === id);
}

function available(id) {
  const record = recordById(id);

  if (!record || !record.hidden) return true;

  if (id === "D07") {
    return (
      state.clues.includes("D03-0") &&
      state.clues.includes("D06-0")
    );
  }

  if (id === "D08") {
    return (
      state.read.includes("D04") &&
      state.read.includes("D05")
    );
  }

  return false;
}

function visibleRecords() {
  return records.filter(record => available(record.id));
}

function clueText(id) {
  const [recordId, passageIndex] = id.split("-");
  const record = recordById(recordId);

  if (!record) return id;

  return record.parts[Number(passageIndex)];
}

function clueTitle(id) {
  const [recordId, passageIndex] = id.split("-");
  return `${recordId} — Passage ${Number(passageIndex) + 1}`;
}

// SECTION 6: NAVIGATION

function switchTab(name) {
  document.querySelectorAll(".tabs button").forEach(btn => {
    const active = btn.dataset.tab === name;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", String(active));
  });

  document.querySelectorAll(".panel").forEach(panel => {
    panel.classList.toggle(
      "active",
      panel.id === `panel-${name}`
    );
  });

  if (name === "board") renderBoard();
  if (name === "compare") renderCompare();
  if (name === "interviews") renderInterviews();

  $("desk").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

document.querySelectorAll(".tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    switchTab(btn.dataset.tab);
  });
});

// SECTION 7: EVIDENCE ARCHIVE

function renderArchive() {
  const grid = $("record-grid");
  const search = $("search").value.toLowerCase();

  grid.replaceChildren();

  visibleRecords()
    .filter(record => {
      return [
        record.title,
        record.author,
        record.type,
        record.summary,
        ...record.parts
      ].join(" ").toLowerCase().includes(search);
    })
    .forEach(record => {
      const card = element("article", "record");

      card.append(
        element("div", "meta", `${record.id} · ${record.type}`),
        element("h3", "", record.title),
        element("p", "", record.summary),
        element(
          "div",
          "status",
          state.read.includes(record.id)
            ? "✓ EXAMINED"
            : "NOT EXAMINED"
        ),
        makeButton(
          "Examine record",
          () => openRecord(record)
        )
      );

      grid.append(card);
    });

  if (!grid.children.length) {
    grid.append(
      element("p", "", "No matching records found.")
    );
  }

  const coreRead = state.read.filter(id =>
    ["D01", "D02", "D03", "D04", "D05", "D06"].includes(id)
  ).length;

  $("progress").textContent = `${coreRead} / 6 records`;
}

let currentRecord = null;

function collectClue(id) {
  if (!state.clues.includes(id)) {
    state.clues.push(id);
  }

  save();
  renderArchive();
  renderBoard();
  renderCompare();
}

function openRecord(record) {
  currentRecord = record;

  $("reader-id").textContent = record.id;
  $("reader-type").textContent = record.type;
  $("reader-title").textContent = record.title;
  $("reader-meta").textContent =
    `${record.author} · ${record.date}`;

  const body = $("reader-body");
  body.replaceChildren();

  record.parts.forEach((passage, index) => {
    const clueId = `${record.id}-${index}`;

    const btn = makeButton(
      passage,
      () => {
        collectClue(clueId);
        openRecordContent(record);
      },
      "passage"
    );

    if (state.clues.includes(clueId)) {
      btn.classList.add("collected");
    }

    btn.append(
      element(
        "small",
        "",
        state.clues.includes(clueId)
          ? "✓ Collected"
          : "Tap to collect this passage"
      )
    );

    body.append(btn);
  });

  if (!$("reader").open) {
    $("reader").showModal();
  }
}

function openRecordContent(record) {
  openRecord(record);
}

$("finish-reading").addEventListener("click", () => {
  if (
    currentRecord &&
    !state.read.includes(currentRecord.id)
  ) {
    state.read.push(currentRecord.id);
  }

  save();
  $("reader").close();
  refresh();
});

$("close-reader").addEventListener("click", () => {
  $("reader").close();
});

$("search").addEventListener("input", renderArchive);

// SECTION 8: DOCUMENT COMPARISON

function renderCompare() {
  const visible = visibleRecords();

  [
    ["compare-left", 0],
    ["compare-right", 1]
  ].forEach(([selectId, fallbackIndex]) => {
    const select = $(selectId);
    const previous = select.value;

    select.replaceChildren();

    visible.forEach(record => {
      const option = element(
        "option",
        "",
        `${record.id} — ${record.title}`
      );

      option.value = record.id;
      select.append(option);
    });

    select.value = visible.some(r => r.id === previous)
      ? previous
      : visible[fallbackIndex]?.id || visible[0]?.id;
  });

  [
    ["compare-a", "compare-left"],
    ["compare-b", "compare-right"]
  ].forEach(([containerId, selectId]) => {
    const container = $(containerId);
    const record = recordById($(selectId).value);

    container.replaceChildren();
    if (!record) return;

    container.append(
      element("div", "eyebrow", record.type),
      element("h3", "", record.title),
      element(
        "div",
        "source-meta",
        `${record.author} · ${record.date}`
      )
    );

    record.parts.forEach((passage, index) => {
      const clueId = `${record.id}-${index}`;

      const btn = makeButton(
        passage,
        () => collectClue(clueId),
        "passage"
      );

      if (state.clues.includes(clueId)) {
        btn.classList.add("collected");
      }

      btn.append(
        element(
          "small",
          "",
          state.clues.includes(clueId)
            ? "✓ Collected"
            : "Tap to collect"
        )
      );

      container.append(btn);
    });
  });
}

$("compare-left").addEventListener("change", renderCompare);
$("compare-right").addEventListener("change", renderCompare);

// SECTION 9: EVIDENCE BOARD

let selectedClues = [];

function renderBoard() {
  const container = $("board-cards");
  container.replaceChildren();

  state.boardOrder = state.boardOrder.filter(id =>
    state.clues.includes(id)
  );

  state.clues.forEach(id => {
    if (!state.boardOrder.includes(id)) {
      state.boardOrder.push(id);
    }
  });

  state.boardOrder.forEach((id, index) => {
    const card = element("article", "board-card");

    if (selectedClues.includes(id)) {
      card.classList.add("selected");
    }

    const select = makeButton(
      clueTitle(id),
      () => {
        if (selectedClues.includes(id)) {
          selectedClues = selectedClues.filter(x => x !== id);
        } else if (selectedClues.length < 2) {
          selectedClues.push(id);
        } else {
          selectedClues = [selectedClues[1], id];
        }

        renderBoard();
      }
    );

    const movement = element("div", "move");

    movement.append(
      makeButton("←", () => moveCard(index, -1)),
      makeButton("→", () => moveCard(index, 1))
    );

    card.append(
      select,
      element("p", "", clueText(id)),
      movement
    );

    container.append(card);
  });

  if (!state.clues.length) {
    container.append(
      element(
        "p",
        "",
        "Your board is empty. Collect passages from the archive."
      )
    );
  }

  $("connect").disabled = selectedClues.length !== 2;

  const list = $("connection-list");
  list.replaceChildren();

  state.connections.forEach((connection, index) => {
    const item = element("div", "item");

    item.append(
      element(
        "strong",
        "",
        `${clueTitle(connection.a)} ${connection.type} ${clueTitle(connection.b)}`
      ),
      makeButton("Remove", () => {
        state.connections.splice(index, 1);
        save();
        renderBoard();
      })
    );

    list.append(item);
  });

  if (!state.connections.length) {
    list.append(
      element("p", "", "No connections created yet.")
    );
  }

  save();
  requestAnimationFrame(drawConnections);
}

function moveCard(index, direction) {
  const target = index + direction;

  if (
    target < 0 ||
    target >= state.boardOrder.length
  ) return;

  [
    state.boardOrder[index],
    state.boardOrder[target]
  ] = [
    state.boardOrder[target],
    state.boardOrder[index]
  ];

  save();
  renderBoard();
}

function drawConnections() {
  const svg = $("board-lines");
  svg.replaceChildren();

  const cards = [...$("board-cards").children];
  const boardRect = $("board").getBoundingClientRect();

  state.connections.forEach(connection => {
    const indexA = state.boardOrder.indexOf(connection.a);
    const indexB = state.boardOrder.indexOf(connection.b);

    if (indexA < 0 || indexB < 0) return;

    const a = cards[indexA].getBoundingClientRect();
    const b = cards[indexB].getBoundingClientRect();

    const line = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );

    line.setAttribute(
      "x1",
      a.left - boardRect.left + a.width / 2
    );
    line.setAttribute(
      "y1",
      a.top - boardRect.top + a.height / 2
    );
    line.setAttribute(
      "x2",
      b.left - boardRect.left + b.width / 2
    );
    line.setAttribute(
      "y2",
      b.top - boardRect.top + b.height / 2
    );

    const colors = {
      supports: "#397b60",
      contradicts: "#b34848",
      contextualizes: "#496e9a"
    };

    line.setAttribute(
      "stroke",
      colors[connection.type] || "#555"
    );
    line.setAttribute("stroke-width", "4");
    line.setAttribute("stroke-opacity", "0.85");

    svg.append(line);
  });
}

$("connect").addEventListener("click", () => {
  if (selectedClues.length !== 2) return;

  const [a, b] = selectedClues;
  const type = $("relation").value;

  const exists = state.connections.some(connection =>
    (connection.a === a && connection.b === b) ||
    (connection.a === b && connection.b === a)
  );

  if (!exists) {
    state.connections.push({ a, b, type });
  }

  selectedClues = [];
  save();
  renderBoard();
});

$("clear-selection").addEventListener("click", () => {
  selectedClues = [];
  renderBoard();
});

window.addEventListener("resize", drawConnections);

// SECTION 10: TIMELINE PUZZLE

function renderTimeline() {
  const container = $("timeline-items");
  container.replaceChildren();

  state.order.forEach((id, index) => {
    const event = events.find(item => item.id === id);
    if (!event) return;

    const row = element("div", "item");

    row.append(
      element("strong", "", event.label),
      element("div", "", event.date),
      makeButton("↑ Earlier", () => moveEvent(index, -1)),
      makeButton("↓ Later", () => moveEvent(index, 1))
    );

    container.append(row);
  });
}

function moveEvent(index, direction) {
  const target = index + direction;

  if (
    target < 0 ||
    target >= state.order.length
  ) return;

  [
    state.order[index],
    state.order[target]
  ] = [
    state.order[target],
    state.order[index]
  ];

  state.timelineSolved = false;
  save();
  renderTimeline();

  $("timeline-feedback").textContent =
    "Order changed. Check the chronology when ready.";
}

$("check-timeline").addEventListener("click", () => {
  const correct = events.every(
    (event, index) => state.order[index] === event.id
  );

  state.timelineSolved = correct;
  save();

  $("timeline-feedback").textContent = correct
    ? "Correct. You reconstructed the chronology."
    : "Not quite. Compare the dates and move the earliest event to the top.";
});

// SECTION 11: WITNESS INTERVIEWS

let currentWitness = "W1";
let currentAnswer = "";

function renderInterviews() {
  const witnessList = $("witnesses");
  witnessList.replaceChildren();

  witnesses.forEach(witness => {
    witnessList.append(
      makeButton(
        `${witness.name} — ${witness.role}`,
        () => {
          currentWitness = witness.id;
          currentAnswer = "";
          renderInterviews();
        },
        "item"
      )
    );
  });

  const witness = witnesses.find(
    item => item.id === currentWitness
  );

  const room = $("interview-room");
  room.replaceChildren();

  room.append(
    element("div", "eyebrow", "INTERVIEW TRANSCRIPT"),
    element("h3", "", witness.name),
    element("p", "", witness.role)
  );

  const questions = element("div", "questions");

  witness.questions.forEach(question => {
    const unlocked =
      !question.needs ||
      state.read.includes(question.needs);

    const btn = makeButton(
      unlocked
        ? question.text
        : `${question.text} — Examine ${question.needs} first`,
      () => {
        const questionId = `${witness.id}-${question.id}`;

        if (!state.interviews.includes(questionId)) {
          state.interviews.push(questionId);
        }

        currentAnswer = question.reply;
        save();
        renderInterviews();
      }
    );

    btn.disabled = !unlocked;
    questions.append(btn);
  });

  room.append(questions);

  if (currentAnswer) {
    room.append(
      element("div", "answer", currentAnswer)
    );
  }
}

// SECTION 12: DEDUCTION QUESTIONS

function renderDeductions() {
  const container = $("deduction-list");
  container.replaceChildren();

  deductions.forEach(deduction => {
    const card = element("div", "item");

    card.append(
      element("h3", "", deduction.question)
    );

    deduction.options.forEach((option, index) => {
      const btn = makeButton(option, () => {
        state.deductions[deduction.id] = index;
        save();
        renderDeductions();
      });

      if (state.deductions[deduction.id] === index) {
        btn.style.borderColor = "#24718e";
        btn.setAttribute("aria-pressed", "true");
      }

      card.append(btn);
    });

    if (state.deductions[deduction.id] !== undefined) {
      const correct =
        state.deductions[deduction.id] === deduction.correct;

      card.append(
        element(
          "div",
          "feedback",
          (correct ? "Supported. " : "Not supported. ") +
          deduction.explanation
        )
      );
    }

    container.append(card);
  });
}

// SECTION 13: FINAL CASE REPORT

function submitReport() {
  const theory = document.querySelector(
    'input[name="theory"]:checked'
  )?.value;

  const explanation = $("report-text").value.trim();
  const ending = $("ending");

  ending.replaceChildren();

  if (!theory || explanation.length < 60) {
    ending.textContent =
      "Choose a theory and write at least 60 characters explaining your reasoning.";
    return;
  }

  state.theory = theory;
  state.report = explanation;
  save();

  const correctDeductions = deductions.filter(
    deduction =>
      state.deductions[deduction.id] === deduction.correct
  ).length;

  const citations = explanation.match(/\bD0[1-8]\b/gi) || [];

  const distinctCitations = new Set(
    citations.map(id => id.toUpperCase())
  );

  const thorough =
    state.read.length >= 6 &&
    state.clues.length >= 4 &&
    state.connections.length >= 1 &&
    state.timelineSolved &&
    correctDeductions >= 2 &&
    distinctCitations.size >= 2;

  let title = "";
  let message = "";

  if (theory === "mixed") {
    if (thorough) {
      title = "ENDING: THE WELL-SUPPORTED REPORT";
      message =
        "Your investigation connects financial pressure with redevelopment planning while recognizing the limits of the surviving evidence.";
    } else {
      title = "ENDING: A PLAUSIBLE ACCOUNT";
      message =
        "Your interpretation is supported, but further investigation would strengthen your report.";
    }
  } else if (theory === "funding") {
    title = "ENDING: THE OFFICIAL ACCOUNT";
    message =
      "Financial concerns are documented, but your explanation does not fully account for the redevelopment records.";
  } else {
    title = "ENDING: THE UNPROVEN ACCUSATION";
    message =
      "The records establish preliminary redevelopment planning, not a completed secret sale.";
  }

  ending.append(
    element("h3", "", title),
    element("p", "", message),
    element(
      "p",
      "",
      `Records examined: ${state.read.length}. Evidence passages: ${state.clues.length}. Connections: ${state.connections.length}. Supported deductions: ${correctDeductions}/3.`
    ),
    element(
      "p",
      "",
      distinctCitations.size >= 2
        ? "Your report references at least two different records."
        : "For a stronger report, cite at least two different record IDs, such as D02 and D06."
    )
  );
}

$("submit-report").addEventListener("click", submitReport);

$("report-text").value = state.report;

document.querySelectorAll('input[name="theory"]').forEach(radio => {
  radio.checked = radio.value === state.theory;

  radio.addEventListener("change", () => {
    state.theory = radio.value;
    save();
  });
});

$("report-text").addEventListener("input", event => {
  state.report = event.target.value;
  save();
});

// SECTION 14: EXPORT INVESTIGATOR NOTES

$("export").addEventListener("click", () => {
  const lines = [
    "THE ARCHIVE OF TWO ACCOUNTS",
    "INVESTIGATOR NOTES",
    "",
    "EXAMINED RECORDS",
    state.read.join(", ") || "None",
    "",
    "COLLECTED EVIDENCE"
  ];

  state.clues.forEach(id => {
    lines.push(`${clueTitle(id)}: ${clueText(id)}`);
  });

  lines.push("", "EVIDENCE CONNECTIONS");

  state.connections.forEach(connection => {
    lines.push(
      `${connection.a} ${connection.type} ${connection.b}`
    );
  });

  lines.push("", "TIMELINE");

  state.order.forEach(id => {
    const event = events.find(item => item.id === id);
    if (event) {
      lines.push(`${event.date}: ${event.label}`);
    }
  });

  lines.push(
    "",
    "CASE THEORY",
    state.theory || "Not selected",
    "",
    "FINAL REPORT",
    $("report-text").value
  );

  const blob = new Blob([lines.join("\n")], {
    type: "text/plain;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "briar-glen-investigation.txt";

  document.body.append(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

// SECTION 15: RESTART GAME

$("reset").addEventListener("click", () => {
  const confirmed = confirm(
    "Restart the investigation and erase saved progress?"
  );

  if (!confirmed) return;

  state = newGame();
  selectedClues = [];
  currentAnswer = "";

  save();

  $("search").value = "";
  $("report-text").value = "";
  $("timeline-feedback").textContent = "";
  $("ending").replaceChildren();

  document.querySelectorAll('input[name="theory"]').forEach(
    radio => radio.checked = false
  );

  refresh();
  switchTab("archive");
});

// SECTION 16: START GAME

function refresh() {
  renderArchive();
  renderCompare();
  renderBoard();
  renderTimeline();
  renderInterviews();
  renderDeductions();
}

refresh();
