/* =========================================================
   ENTHINAVO.LOL
   THE COMPLETELY UNNECESSARY FUN MACHINE
   ========================================================= */

const actionInput = document.getElementById("actionInput");
const charCount = document.getElementById("charCount");
const judgeButton = document.getElementById("judgeButton");

const heroSection = document.getElementById("heroSection");
const loadingSection = document.getElementById("loadingSection");
const resultSection = document.getElementById("resultSection");

const loadingText = document.getElementById("loadingText");

const rarity = document.getElementById("rarity");
const badge = document.getElementById("badge");
const statsContainer = document.getElementById("statsContainer");
const verdict = document.getElementById("verdict");
const reward = document.getElementById("reward");
const actualBenefit = document.getElementById("actualBenefit");

const judgeAgain = document.getElementById("judgeAgain");
const errorMessage = document.getElementById("errorMessage");


/* =========================================================
   FUN PLACEHOLDERS
   ========================================================= */

const placeholders = [
  "I went to the kitchen for water and came back with snacks...",
  "I opened my laptop to study and watched YouTube instead...",
  "I checked the fridge even though I knew nothing changed...",
  "I went upstairs and forgot why...",
  "I bought something I absolutely did not need...",
  "I said I would sleep early...",
  "I cleaned my room by moving everything somewhere else...",
  "I opened Instagram for two minutes...",
  "I made tea and forgot about it...",
  "I spent 30 minutes choosing what to watch..."
];

let placeholderIndex = 0;

function changePlaceholder() {
  if (!actionInput.value.trim()) {
    actionInput.placeholder =
      placeholders[placeholderIndex];

    placeholderIndex =
      (placeholderIndex + 1) % placeholders.length;
  }
}

setInterval(changePlaceholder, 3500);


/* =========================================================
   BUTTON TEXT
   ========================================================= */

const buttonTexts = [
  "JUDGE ME 💀",
  "DO YOUR WORST",
  "BE HONEST",
  "EXPOSE ME",
  "WHAT HAVE I DONE?",
  "PRESS THE BUTTON",
  "RUIN MY DAY",
  "RATE THIS NONSENSE"
];

let buttonIndex = 0;

setInterval(() => {

  if (
    !judgeButton.disabled &&
    !actionInput.value.trim()
  ) {

    buttonIndex =
      (buttonIndex + 1) % buttonTexts.length;

    judgeButton.textContent =
      buttonTexts[buttonIndex];

  }

}, 2800);


/* =========================================================
   CHARACTER COUNT
   ========================================================= */

actionInput.addEventListener("input", () => {

  const length = actionInput.value.length;

  charCount.textContent =
    `${length} / 500`;

});


/* =========================================================
   ENTER / CTRL + ENTER
   ========================================================= */

actionInput.addEventListener("keydown", (event) => {

  if (
    (event.ctrlKey || event.metaKey) &&
    event.key === "Enter"
  ) {

    event.preventDefault();

    judgeAction();

  }

});


/* =========================================================
   LOADING MESSAGES
   ========================================================= */

const loadingMessages = [
  "Thinking way too hard about this...",
  "Looking for the funny part...",
  "Checking whether this was necessary...",
  "Asking the AI to be unnecessarily dramatic...",
  "Calculating your nonsense...",
  "Searching for the original mission...",
  "Checking the snack department...",
  "Reviewing the evidence...",
  "Trying to understand your decision...",
  "This could have been avoided...",
  "Finding an achievement nobody asked for...",
  "Almost done judging your life choices..."
];

let loadingInterval;


/* =========================================================
   SHOW LOADING
   ========================================================= */

function startLoading() {

  heroSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  loadingSection.classList.remove("hidden");

  let index = 0;

  loadingText.textContent =
    loadingMessages[index];

  loadingInterval = setInterval(() => {

    index =
      (index + 1) % loadingMessages.length;

    loadingText.textContent =
      loadingMessages[index];

  }, 900);

}


/* =========================================================
   STOP LOADING
   ========================================================= */

function stopLoading() {

  clearInterval(loadingInterval);

  loadingSection.classList.add("hidden");

}


/* =========================================================
   CONFETTI
   ========================================================= */

function createConfetti() {

  const symbols = [
    "🎉",
    "✨",
    "⭐",
    "💀",
    "🏆",
    "😂",
    "🍪",
    "🔥",
    "💥"
  ];

  for (let i = 0; i < 35; i++) {

    const piece =
      document.createElement("div");

    piece.className =
      "confetti-piece";

    piece.textContent =
      symbols[
        Math.floor(
          Math.random() * symbols.length
        )
      ];

    piece.style.left =
      `${Math.random() * 100}vw`;

    piece.style.animationDelay =
      `${Math.random() * 0.8}s`;

    piece.style.fontSize =
      `${16 + Math.random() * 18}px`;

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 3000);

  }

}


/* =========================================================
   TYPEWRITER EFFECT
   ========================================================= */

function typeText(element, text, speed = 18) {

  element.textContent = "";

  let index = 0;

  const interval = setInterval(() => {

    element.textContent +=
      text.charAt(index);

    index++;

    if (index >= text.length) {
      clearInterval(interval);
    }

  }, speed);

}


/* =========================================================
   RARITY EMOJI
   ========================================================= */

function rarityEmoji(value) {

  const map = {

    COMMON: "🙂",

    UNCOMMON: "😏",

    RARE: "👀",

    EPIC: "🔥",

    LEGENDARY: "👑",

    ABSURD: "💀"

  };

  return map[value] || "✨";

}


/* =========================================================
   RENDER STATS
   ========================================================= */

function renderStats(stats) {

  statsContainer.innerHTML = "";

  stats
    .slice(0, 5)
    .forEach((stat, index) => {

      const row =
        document.createElement("div");

      row.className =
        "stat-row";

      const top =
        document.createElement("div");

      top.className =
        "stat-top";

      const label =
        document.createElement("span");

      label.className =
        "stat-label";

      label.textContent =
        stat.label;

      const score =
        document.createElement("span");

      score.className =
        "stat-score";

      score.textContent =
        `${stat.score}%`;

      top.appendChild(label);
      top.appendChild(score);


      const bar =
        document.createElement("div");

      bar.className =
        "stat-bar";


      const fill =
        document.createElement("div");

      fill.className =
        "stat-fill";

      fill.style.width = "0%";


      bar.appendChild(fill);

      row.appendChild(top);
      row.appendChild(bar);

      statsContainer.appendChild(row);


      setTimeout(() => {

        fill.style.width =
          `${Math.max(
            0,
            Math.min(100, stat.score)
          )}%`;

      }, 150 + index * 120);

    });

}


/* =========================================================
   SHOW ERROR
   ========================================================= */

function showError(message) {

  errorMessage.textContent =
    message;

  errorMessage.classList.remove("hidden");

  setTimeout(() => {

    errorMessage.classList.add("hidden");

  }, 5000);

}


/* =========================================================
   JUDGE ACTION
   ========================================================= */

async function judgeAction() {

  const action =
    actionInput.value.trim();


  if (!action) {

    actionInput.focus();

    showError(
      "You have to do something first 😭"
    );

    return;

  }


  if (action.length > 500) {

    showError(
      "That story is longer than the actual incident."
    );

    return;

  }


  judgeButton.disabled = true;

  judgeButton.textContent =
    "JUDGING... 💀";


  startLoading();


  try {

    const controller =
      new AbortController();

    const timeout =
      setTimeout(() => {
        controller.abort();
      }, 30000);


    const response =
      await fetch("/api/judge", {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          action
        }),

        signal:
          controller.signal

      });


    clearTimeout(timeout);


    const data =
      await response.json();


    if (!response.ok) {

      throw new Error(
        data.error ||
        "Something went wrong."
      );

    }


    showResult(data);


  } catch (error) {

    console.error(error);

    stopLoading();


    if (
      error.name === "AbortError"
    ) {

      showError(
        "The AI took too long to judge you. Even it needed a break."
      );

    } else {

      showError(
        error.message ||
        "The website has temporarily lost the plot."
      );

    }


    heroSection.classList.remove(
      "hidden"
    );

  } finally {

    judgeButton.disabled = false;

    judgeButton.textContent =
      "JUDGE ME 💀";

  }

}


/* =========================================================
   SHOW RESULT
   ========================================================= */

function showResult(data) {

  stopLoading();


  heroSection.classList.add(
    "hidden"
  );


  resultSection.classList.remove(
    "hidden"
  );


  /* -----------------------------------------
     RARITY
     ----------------------------------------- */

  const rarityValue =
    String(
      data.rarity || "COMMON"
    ).toUpperCase();


  rarity.textContent =
    `${rarityEmoji(rarityValue)} ${rarityValue}`;


  rarity.className =
    `rarity rarity-${rarityValue.toLowerCase()}`;


  /* -----------------------------------------
     ACHIEVEMENT
     ----------------------------------------- */

  badge.textContent =
    data.badge ||
    "CONGRATULATIONS, YOU DID A THING";


  /* -----------------------------------------
     STATS
     ----------------------------------------- */

  renderStats(
    Array.isArray(data.stats)
      ? data.stats
      : []
  );


  /* -----------------------------------------
     VERDICT
     ----------------------------------------- */

  typeText(
    verdict,
    data.verdict ||
      "We have questions.",
    16
  );


  /* -----------------------------------------
     REWARD
     ----------------------------------------- */

  reward.textContent =
    data.reward ||
    "+1 Completely Useless Achievement";


  /* -----------------------------------------
     BENEFIT
     ----------------------------------------- */

  actualBenefit.textContent =
    data.actual_benefit ||
    "Nothing important changed.";


  /* -----------------------------------------
     ANIMATION
     ----------------------------------------- */

  resultSection.classList.remove(
    "result-pop"
  );


  void resultSection.offsetWidth;


  resultSection.classList.add(
    "result-pop"
  );


  /* -----------------------------------------
     CONFETTI
     ----------------------------------------- */

  setTimeout(() => {

    createConfetti();

  }, 250);


  /* -----------------------------------------
     SCROLL
     ----------------------------------------- */

  setTimeout(() => {

    resultSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 100);

}


/* =========================================================
   JUDGE AGAIN
   ========================================================= */

judgeAgain.addEventListener(
  "click",
  () => {

    resultSection.classList.add(
      "hidden"
    );

    heroSection.classList.remove(
      "hidden"
    );

    actionInput.value = "";

    charCount.textContent =
      "0 / 500";

    actionInput.focus();

    judgeButton.textContent =
      "JUDGE ME 💀";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* =========================================================
   MAIN BUTTON
   ========================================================= */

judgeButton.addEventListener(
  "click",
  judgeAction
);


/* =========================================================
   RANDOM WELCOME TEXT
   ========================================================= */

const welcomeMessages = [
  "Tell us something unnecessary.",
  "Tell us about your latest achievement in doing absolutely anything.",
  "We promise not to take this seriously.",
  "Your decisions deserve a score.",
  "This is probably a waste of time. Perfect.",
  "Go on. Give us something ridiculous.",
  "We are ready to judge the nonsense.",
  "Your most unnecessary moment awaits."
];


const subtitle =
  document.querySelector(".subtitle");


if (subtitle) {

  subtitle.textContent =
    welcomeMessages[
      Math.floor(
        Math.random() *
        welcomeMessages.length
      )
    ];

}


/* =========================================================
   RANDOM LITTLE BUTTON MOVEMENT
   ========================================================= */

judgeButton.addEventListener(
  "mouseenter",
  () => {

    if (
      Math.random() < 0.25
    ) {

      judgeButton.style.transform =
        `rotate(${(
          Math.random() * 4 - 2
        ).toFixed(1)}deg)`;

    }

  }
);


judgeButton.addEventListener(
  "mouseleave",
  () => {

    judgeButton.style.transform =
      "";

  }
);


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
  "%cENTHINAVO.LOL",
  "font-size: 24px; font-weight: bold;"
);

console.log(
  "%cYou are inspecting the console instead of using the website.",
  "font-size: 14px;"
);

console.log(
  "%cAchievement unlocked: DEVELOPER TOUCHED THE CONSOLE",
  "font-size: 13px;"
);