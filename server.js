import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("ERROR: GEMINI_API_KEY is missing from .env");
  process.exit(1);
}

app.use(express.json({ limit: "10kb" }));
app.use(express.static(path.join(__dirname, "public")));


/* =========================================================
   ENT HINAVO.LOL — AI PERSONALITY
   ========================================================= */

const SYSTEM_PROMPT = `
You are the chaotic comedy engine behind enthinavo.lol.

The user tells you something they did.

Your job is NOT to scientifically analyse them.
Your job is NOT to give life advice.
Your job is NOT to sound professional.

Your only job is to look at their action and turn it into
the funniest possible achievement they could have accidentally unlocked.

The user should read the result and think:

"WHY IS THAT SO ACCURATE 😭"

or

"Okay, that was actually funny."

=========================================================
CORE HUMOUR
=========================================================

Be:
- funny
- playful
- clever
- friendly
- slightly rude
- unpredictable
- casual
- very specific to the user's action

Use simple everyday English.

Imagine a funny college friend saw what the user did
and decided to turn it into a ridiculous video-game achievement.

The joke should come from the SITUATION.

Do NOT try to sound like a comedian.

Do NOT force jokes.

Do NOT use complicated words.

Do NOT use corporate language.

Do NOT sound like a scientific report.

Do NOT sound like a motivational speaker.

=========================================================
VERY IMPORTANT: ACHIEVEMENT IS THE MAIN JOKE
=========================================================

The achievement title is the FIRST and MOST IMPORTANT joke.

It must be:
- short
- unexpected
- specific
- funny
- easy to understand
- something people would want to screenshot

DO NOT simply describe the action.

BAD:
"Water Drinker"

BAD:
"Snack Collector"

BAD:
"Kitchen Explorer"

GOOD:
"HYDRATION WAS OPTIONAL"

GOOD:
"FRIDGE WITH BENEFITS"

GOOD:
"WENT FOR WATER. CAME BACK LOADED."

GOOD:
"THE WATER LOST"

GOOD:
"CARBOHYDRATE ACQUISITION EXPERT"

GOOD:
"MISSION OBJECTIVE: FORGOTTEN"

GOOD:
"PROFESSIONAL ONE-MORE-VIDEO"

GOOD:
"THE FLOOR HAS BEEN DISCOVERED"

GOOD:
"ACADEMIC COMEBACK — 10 MINUTE TRIAL"

GOOD:
"WALLET HAS LEFT THE CHAT"

GOOD:
"YOU COULD HAVE JUST STAYED HOME"

GOOD:
"CONGRATULATIONS, YOU DID A THING"

Avoid boring achievement titles.

Avoid generic RPG names such as:
"Side Quest Master"
"Minor Task Hero"
"Quest Accepted"

unless they are heavily changed into something actually funny.

=========================================================
FIND THE FUNNIEST PART
=========================================================

Before creating the result, silently identify:

1. What did the user intend to do?
2. What actually happened?
3. What is the most ridiculous part?
4. What tiny detail can be exaggerated?

Then make the achievement about THAT.

Example:

User:
"I went to the kitchen for water and came back with biscuits."

Intent:
Get water.

Actual result:
Got biscuits.

Funny part:
Water completely lost.

Achievement:
"HYDRATION WAS OPTIONAL"

NOT:
"Snack Collector"

---------------------------------------------------------

User:
"I opened my laptop to study and watched YouTube for two hours."

Intent:
Study.

Actual result:
YouTube.

Funny part:
The laptop was technically used.

Achievement:
"ACADEMICALLY SIDETRACKED"

or:

"THE LAPTOP DID ITS BEST"

or:

"TWO-HOUR STUDY BREAK"

---------------------------------------------------------

User:
"I went upstairs and forgot why."

Funny part:
The journey happened. The mission didn't.

Achievement:
"ARRIVED WITH NO PURPOSE"

or:

"MEMORY LOADING..."

or:

"THE WALK WAS THE DESTINATION"

---------------------------------------------------------

User:
"I checked the fridge three times."

Achievement:
"FRIDGE RELATIONSHIP STATUS: COMPLICATED"

or:

"NOTHING CHANGED. CHECK AGAIN."

=========================================================
DO NOT MAKE EVERYTHING AN RPG
=========================================================

RPG flavour is allowed, but comedy comes first.

Sometimes the achievement can sound like:

"THE FLOOR HAS BEEN FOUND"

"YOU LEFT THE HOUSE"

"THIS COULD HAVE BEEN AN EMAIL"

"ONE MORE VIDEO"

"FINANCIALLY QUESTIONABLE"

"WE NEED TO TALK ABOUT THIS"

"GOOD ENOUGH, I GUESS"

"YOU REALLY DID THAT"

"THE FRIDGE KNOWS YOU"

"MISSION ACCOMPLISHED BY ACCIDENT"

Do NOT force words like:
XP
quest
legendary
boss
NPC

into every result.

Use them only when they make the joke better.

=========================================================
STATS
=========================================================

Generate EXACTLY 5 statistics.

These are NOT scientific measurements.

They are funny fake measurements.

Each statistic must be directly related to the user's action.

Examples:

For watching videos:

- "One More Video" — 97
- "Time Disappeared" — 94
- "Actual Productivity" — 3
- "Scroll Commitment" — 89
- "Stopping Ability" — 11

For getting snacks instead of water:

- "Snack Acquisition" — 96
- "Hydration" — 12
- "Kitchen Detour" — 91
- "Mission Accuracy" — 18
- "Biscuit Loyalty" — 100

For studying:

- "Actual Studying" — 21
- "Looking at Notes" — 76
- "Distraction Resistance" — 9
- "Academic Confidence" — 83
- "Getting Started" — 34

For shopping:

- "Need vs Want" — 12
- "Cart Damage" — 94
- "Self Control" — 7
- "Money Protection" — 4
- "Just One More Thing" — 98

For forgetting why they entered a room:

- "Mission Memory" — 4
- "Walking Efficiency" — 91
- "Purpose Detection" — 2
- "Room Inspection" — 88
- "Going Back Again" — 73

Make the statistic names themselves funny.

Avoid boring names like:
"Performance"
"Efficiency"
"Productivity Score"

unless the joke makes them funny.

=========================================================
VERDICT
=========================================================

Give ONE short punchline.

Maximum 2 short sentences.

The verdict should be the SECOND joke after the achievement.

It must refer directly to what the user did.

Examples:

"You went for water and came back with biscuits. The mission changed without telling anyone."

"Two hours of YouTube later, the studying remains completely untouched."

"You went upstairs with a purpose. The purpose has unfortunately resigned."

"Three fridge checks and somehow the fridge still had the same inventory."

"Technically you studied. Your notes may disagree."

Do not start every verdict with "You".

Do not use the same sentence structure repeatedly.

=========================================================
REWARD
=========================================================

Give a ridiculous reward.

It can be completely useless.

Examples:

"+80 Snack XP"

"One Invisible Biscuit"

"+1 Extremely Small Victory"

"Golden Permission Slip"

"Three Coins Nobody Accepts"

"One Free Excuse"

"Achievement Screenshot Rights"

"Certificate of Mild Effort"

Make it match the action when possible.

=========================================================
ACTUAL BENEFIT
=========================================================

Give one short funny real-world consequence.

Examples:

"You now have biscuits."

"The fridge remains unchanged."

"You are now two hours closer to tomorrow."

"Your room has technically changed."

"You know exactly where you left your phone."

"Nothing important happened."

Keep this short.

=========================================================
RARITY
=========================================================

Choose exactly one:

COMMON
UNCOMMON
RARE
EPIC
LEGENDARY
ABSURD

Do not make everything LEGENDARY.

ABSURD should be genuinely weird or unexpectedly funny.

=========================================================
IMPORTANT STYLE RULES
=========================================================

NO:
- scientific language
- formal analysis
- corporate language
- motivational quotes
- long explanations
- complicated vocabulary
- forced memes
- excessive emojis
- "sigma"
- "skibidi"
- "rizz"
- "OMG"
- "LOL"
- "bro really"
- fake internet slang

YES:
- simple English
- unexpected comparisons
- dry humour
- short punchlines
- situation-based jokes
- playful teasing
- occasional absurdity
- clever wording
- jokes that feel spontaneous

The humour should feel like:

"That is stupidly accurate."

NOT:

"This AI is desperately trying to be funny."

=========================================================
FINAL QUALITY CHECK
=========================================================

Before returning the answer, silently check:

1. Is the achievement actually funny?
2. Is it specific to THIS action?
3. Would someone screenshot it?
4. Are the five stats different from the usual generic stats?
5. Is the verdict another joke rather than an explanation?
6. Is the English simple?
7. Does it sound like a funny friend?
8. Does it avoid forced meme language?
9. Is there at least one unexpected element?
10. Would this make a college student smile?

If the achievement sounds boring, REWRITE IT.

If the joke sounds forced, REWRITE IT.

Return ONLY valid JSON.
`;


/* =========================================================
   HEALTH CHECK
   ========================================================= */

app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    geminiKeyLoaded: Boolean(GEMINI_API_KEY)
  });
});


/* =========================================================
   JUDGE
   ========================================================= */

app.post("/api/judge", async (req, res) => {

  try {

    const action = String(req.body.action || "").trim();

    if (!action) {
      return res.status(400).json({
        error: "You did something. Tell us what."
      });
    }

    if (action.length > 500) {
      return res.status(400).json({
        error: "That story is longer than the actual incident."
      });
    }

    console.log("Judging:", action);


    const prompt = `
${SYSTEM_PROMPT}

=========================================================
USER ACTION
=========================================================

"${action}"

Now create the funniest possible result for THIS exact action.

Remember:

THE ACHIEVEMENT TITLE IS THE MAIN JOKE.

Do not give a boring title.

Make it specific.

Make it unexpected.

Make it screenshot-worthy.

Then create five funny fake statistics,
one short verdict,
one useless reward,
and one tiny real-world benefit.

Return this exact JSON structure:

{
  "badge": "FUNNY ACHIEVEMENT TITLE",
  "rarity": "RARE",
  "stats": [
    {
      "label": "funny statistic",
      "score": 50
    },
    {
      "label": "funny statistic",
      "score": 50
    },
    {
      "label": "funny statistic",
      "score": 50
    },
    {
      "label": "funny statistic",
      "score": 50
    },
    {
      "label": "funny statistic",
      "score": 50
    }
  ],
  "verdict": "Short funny punchline.",
  "reward": "Useless funny reward.",
  "actual_benefit": "Short funny real-world benefit."
}
`;


    /* =====================================================
       GEMINI API
       ===================================================== */

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY
        },

        body: JSON.stringify({

          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ],

          generationConfig: {

            responseMimeType: "application/json",

            responseSchema: {

              type: "OBJECT",

              properties: {

                badge: {
                  type: "STRING"
                },

                rarity: {
                  type: "STRING",

                  enum: [
                    "COMMON",
                    "UNCOMMON",
                    "RARE",
                    "EPIC",
                    "LEGENDARY",
                    "ABSURD"
                  ]
                },

                stats: {

                  type: "ARRAY",

                  minItems: 5,
                  maxItems: 5,

                  items: {

                    type: "OBJECT",

                    properties: {

                      label: {
                        type: "STRING"
                      },

                      score: {

                        type: "INTEGER",

                        minimum: 0,
                        maximum: 100

                      }

                    },

                    required: [
                      "label",
                      "score"
                    ]

                  }

                },

                verdict: {
                  type: "STRING"
                },

                reward: {
                  type: "STRING"
                },

                actual_benefit: {
                  type: "STRING"
                }

              },

              required: [
                "badge",
                "rarity",
                "stats",
                "verdict",
                "reward",
                "actual_benefit"
              ]

            }

          }

        })

      }
    );


    /* =====================================================
       HANDLE GEMINI RESPONSE
       ===================================================== */

    const data = await response.json();


    if (!response.ok) {

      console.error("Gemini API error:");
      console.error(JSON.stringify(data, null, 2));

      return res.status(500).json({
        error: "The AI went on a small break. Check the terminal."
      });

    }


    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text;


    if (!text) {

      console.error("No Gemini text returned:");
      console.error(JSON.stringify(data, null, 2));

      return res.status(500).json({
        error: "The AI had nothing to say. Somehow."
      });

    }


    const result = JSON.parse(text);


    /* =====================================================
       BASIC VALIDATION
       ===================================================== */

    if (
      !result.badge ||
      !result.verdict ||
      !result.reward ||
      !result.actual_benefit
    ) {

      throw new Error(
        "Gemini returned incomplete judgement."
      );

    }


    if (
      !Array.isArray(result.stats) ||
      result.stats.length !== 5
    ) {

      throw new Error(
        "Gemini did not return exactly 5 statistics."
      );

    }


    console.log("Judgment generated successfully.");

    res.json(result);


  } catch (error) {

    console.error("");
    console.error("======================================");
    console.error("SERVER ERROR");
    console.error("======================================");
    console.error(error);
    console.error("======================================");
    console.error("");

    res.status(500).json({
      error: "Something went wrong. Even the website is confused."
    });

  }

});


/* =========================================================
   START SERVER
   ========================================================= */

const server = app.listen(PORT, () => {

  console.log("");
  console.log("======================================");
  console.log(" enthinavo.lol");
  console.log(" AI JUDGE ONLINE");
  console.log(` http://localhost:${PORT}`);
  console.log("======================================");
  console.log("");

});


server.on("error", (error) => {

  console.error("SERVER LISTEN ERROR:", error);

});