type Bit = {
  content: string;
  date: string;
  xUrl: string;
  child?: Bit;
};

export const bits: Bit[] = [
  {
    content: `My mentees ask:

How are my tests?
How (clean) is my code?
Is this the right way?

These are the wrong questions.

The right one is:

Does your code work the way YOU want to?

Everything else will follow.

Make your code do what you want & you will naturally learn TDD, FP etc.`,
    date: "2025-02-12",
    xUrl: "https://x.com/janhesters/status/1889786994106011965",
  },
  {
    content: `The easiest win is writing your own rules.`,
    date: "2025-02-10",
    xUrl: "https://x.com/janhesters/status/1889013389030047799",
  },
  {
    content: `Big companies are ALWAYS slow.

At Hopin, we shipped an MVP in 3 months that felt like 80% of the final app*.

Big companies can only maintain their lead through siloed knowledge.

4 - 7 senior engineers is all you need to be faster.`,
    date: "2025-01-28",
    xUrl: "https://x.com/janhesters/status/1884221136063402167",
  },
  {
    content: `Be polite to your LLM.

"Please" and "thank you" go a long way.

Humans work better with mutual respect. LLMs learned that from us.

<a href="https://arxiv.org/html/2402.14531v1">https://arxiv.org/html/2402.14531v1</a>`,
    date: "2025-01-27",
    xUrl: "https://x.com/janhesters/status/1883686109319659723",
  },
  {
    content: `If you fire your mid-level engineers to replace them with AI, you're NGMI.

Better train them in AIDD and get free senior-level engineers.`,
    date: "2025-01-26",
    xUrl: "https://x.com/janhesters/status/1883521407600169430",
  },
  {
    child: {
      content: `Of course in this analogy, the tanks can build new highways.`,
      date: "2025-01-24",
      xUrl: "https://x.com/janhesters/status/1882773950331330725",
    },
    content: `Agents will work like tanks or trucks, built to handle any road.

Legacy code will act as highways, designed for repetitive tasks that need frequent execution.`,
    date: "2025-01-24",
    xUrl: "https://x.com/janhesters/status/1882773753467392134",
  },
  {
    child: {
      content: `- Fabric of Reality
- Beginning of Infinity
- The Happy Body
- Incerto
- Influence
- Pre-Suasion
- How to Fail
- Power of Now
- Bible
- 道德经
- Human Action
- The Structure of Magic`,
      date: "2025-01-17",
      xUrl: "https://x.com/janhesters/status/1880337664920150081",
    },
    content: `Read the classics.

Over and over again.`,
    date: "2025-01-17",
    xUrl: "https://x.com/janhesters/status/1880337661879284040",
  },
  {
    child: {
      content: `Bug Report Checklist 🐞📋

Each bug report should include:

- [ ] Description (incl. location)
- [ ] Expected output
- [ ] Actual output
- [ ] Instructions to reproduce
- [ ] Environment (browser / OS versions, extensions)
- [ ] Bonus: Video / screenshot demonstrating the bug`,
      date: "2025-01-16",
      xUrl: "https://x.com/janhesters/status/1879884560869298590",
    },
    content: `How to handle any production bug:

📝 1. Create a ticket*.
🧪 2. Write a test to ensure it never happens again.
❌ 3. Watch the test fail and the bug occur.
✅ 4. Fix the bug (and watch the test pass).`,
    date: "2025-01-16",
    xUrl: "https://x.com/janhesters/status/1879884560554721573",
  },
  {
    content: `What makes a good developer? 


✅ <b>Good developer:</b>

• <b>High-agency</b> - Apply specific knowledge, leverage, and accountability, so that you solve problems intelligently. You resolve issues alone or with teammates without needing constant guidance.
• <b>Hungry learner</b> - Your learning trajectory is steep, so you can keep up with the ever evolving programming landscape.
• <b>Humble</b> - You are willing to learn from others and have their opinions challenged.
• <b>Confident</b> - Believe in yourself.
• <b>Flexible</b> - You are able to adapt to different situations quickly.
• <b>Mentorship</b> - Actively help junior developers improve their skills.
• <b>Deep expertise in current tech stack</b> - Work with and contribute to your team's current software stack.
• <b>Good communicator</b> - Give clear updates to non-technical stakeholders and be able to collaborate in groups and document software clearly.
• <b>Detail oriented</b> - Consider happy & sad paths and find edge cases.
• <b>Big-picture thinking</b> - Apply systems-thinking to see how various pieces fit together and interact in the overall structure of the software.
• <b>High empathy</b> - Understand your teammates, users, and the company.

❌ <b>Bad Developer:</b>

• <b>Lazy</b> - Has low accountability and avoids responsibility and blames others for failures.
• <b>Resistant to feedback</b> - Neither accepts nor acts on constructive criticism.
• <b>Braggadocious</b> - Compensates by overhyping their contributions and undermining others.
• <b>Imposter syndrome</b> - Belittles themselves as an excuse to stay in a negative state.
• <b>Rigid</b> - Struggles to adjust to changes in priorities or technologies.
• <b>Unapproachable</b> - Dismisses junior developers and refuses to support their growth.
• <b>Surface-level coding</b> - Works quickly or overengineers to produce buggy, unmaintainable code.
• <b>Poor communication</b> - Fails to update stakeholders or explain their work clearly.
• <b>Neglects attention to detail</b> - Misses bugs, designs or edge cases, causing frequent problems and incorrectly implements requirements.
• <b>Tunnel vision</b> - Lacks awareness of how their work fits into the larger project or system.
• <b>Disruptive attitude</b> - Negatively impacts team morale by being uncooperative or entitled.

Contrary to what most believe, these soft skills & attributes are often way more important than just raw knowledge about a tech stack.`,
    date: "2025-01-15",
    xUrl: "https://x.com/janhesters/status/1879517643868451025",
  },
  {
    content: `With so many things in life,

the most advanced is the most fun.

Relationships, programming, learning a new language, working out etc.

If anything is fun to you when you start out,

wait until you get good at it!`,
    date: "2025-01-04",
    xUrl: "https://x.com/janhesters/status/1875664134177747215",
  },
  {
    content: `The simulation made social media popular because generating text and videos is easy.

Imagine the challenge of rendering a world as complex as ours if everyone were outside, touching grass.`,
    date: "2024-12-05",
    xUrl: "https://x.com/janhesters/status/1864654706905113060",
  },
  {
    content: `The last 20% of your MVP take as long as the first 80%.

In other words,

the first 80% of your MVP are actually the first 50%.`,
    date: "2024-12-04",
    xUrl: "https://x.com/janhesters/status/1864340386128199848",
  },
];
