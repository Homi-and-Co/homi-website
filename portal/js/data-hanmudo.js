/* Illustrative demo data. All figures are fictional and for demonstration only. */
window.HOMI_TENANTS = window.HOMI_TENANTS || {};
window.HOMI_TENANTS.hanmudo = {
  id: "hanmudo",
  name: "World Han Mu Do Association",
  tagline: "Martial arts association, member schools",
  tier: "Foundation",
  price: "$2,500 / month",
  since: "May 2026",
  health: {
    overall: "warn",
    checkedAt: "Today, 7:42 AM CT",
    workflows: [
      { name: "Event promotion", purpose: "Seminars and tests are announced to the right audiences on schedule.", state: "degraded", stateLabel: "Degraded", lastRun: "Yesterday, 3:20 PM CT", queue: "Fall seminar announcement waiting on artwork", exceptions: 2, owner: "Homi operator", integration: "Email platform, connected" },
      { name: "Member school coordination", purpose: "School owners receive updates, deadlines, and forms without chasing.", state: "operating", stateLabel: "Operating", lastRun: "Today, 7:05 AM CT", queue: "23 schools current", exceptions: 0, owner: "Homi operator", integration: "School roster, connected" },
      { name: "Rank certification communications", purpose: "Candidates and instructors get clear testing requirements and results.", state: "operating", stateLabel: "Operating", lastRun: "Monday, 10:30 AM CT", queue: "41 candidates in cycle", exceptions: 1, owner: "Homi operator", integration: "Certification records, connected" }
    ]
  },
  decisions: [
    {
      id: "D-62", question: "Approve the fall seminar announcement to go out Thursday without the final artwork?",
      owner: "Association director", status: "open",
      options: ["Send Thursday without final artwork", "Wait for artwork, send next week"],
      recommendation: "Wait for the artwork. Registration opens for six weeks either way, and the announcement with artwork historically draws twice the opens.",
      consequence: "Waiting costs four days of the registration window. Sending now risks a weak first impression.",
      deadline: "Wednesday, Sep 23", tier: "Standard"
    }
  ],
  exceptions: [
    {
      id: "E-201", title: "Seminar artwork not received from designer", severity: "Medium", sevClass: "",
      workflow: "Event promotion", detected: "Monday, 2:15 PM CT",
      consequence: "The fall seminar announcement is ready in every way except the artwork, so it cannot send yet.",
      safeState: "The announcement draft is complete and queued. Nothing is sent partially.",
      done: "Homi sent the designer a reminder with the Wednesday deadline and prepared a text-only fallback.",
      owner: "Homi operator", nextAction: "Await the artwork decision. If approved, the fallback sends Thursday morning.",
      clientAction: "Decide by Wednesday: wait for artwork or approve the fallback."
    },
    {
      id: "E-198", title: "Three certification records missing instructor sign-off", severity: "Low", sevClass: "sev-low",
      workflow: "Rank certification communications", detected: "Friday, 11:40 AM CT",
      consequence: "Three candidates cannot receive their results until sign-off is recorded.",
      safeState: "Results are prepared and held. Nothing incorrect has been sent.",
      done: "Homi notified the two instructors with the sign-off links.",
      owner: "Homi operator", nextAction: "Release results as sign-offs arrive.",
      clientAction: "None required unless sign-offs stall past Friday."
    }
  ],
  outcomes: [
    { name: "Event registration rate", definition: "Registrations per announcement email sent, fall seminar cycle.", current: "6.8%", baseline: "4.9%", baselineDate: "Apr 2026", target: "7.5%", direction: "up", source: "Registration platform", freshness: "Reconciled Sep 19", limits: "One event cycle so far. Baseline is the spring seminar." },
    { name: "School update open rate", definition: "Share of member schools opening monthly coordination updates.", current: "82%", baseline: "64%", baselineDate: "Apr 2026", target: "80%", direction: "up", source: "Email platform", freshness: "Reconciled Sep 19", limits: "Opens are approximate on some email clients." },
    { name: "Director hours on coordination per week", definition: "Director-reported hours on announcements, follow-up, and paperwork.", current: "3 hrs", baseline: "9 hrs", baselineDate: "Apr 2026", target: "Under 4 hrs", direction: "up", source: "Director time log", freshness: "Reported Sep 17", limits: "Self-reported. Directional, not audited." }
  ],
  operating: [
    { name: "Workflow completion rate", value: "97.1%", threshold: "Above 97%", status: "good" },
    { name: "Failed runs needing retry", value: "9 this month", threshold: "Under 15", status: "good" },
    { name: "Open exceptions", value: "3", threshold: "Under 4", status: "good" },
    { name: "Approval turnaround, median", value: "2.4 days", threshold: "Under 3 days", status: "good" },
    { name: "Manual takeovers", value: "0 this month", threshold: "Under 2", status: "good" }
  ],
  briefings: [
    {
      id: "B-SEP", title: "September executive briefing", date: "Sep 9, 2026",
      summary: "Coordination is running ahead of baseline on every measure. The one drag is the fall seminar artwork, which needs your call by Wednesday.",
      body: ["What happened: 3 accepted workflows ran 486 times at 97.1% completion. School update opens hit 82% against a 64% baseline.", "What it means: The association communicates like a larger organization now. Event promotion is the only workflow waiting on a human, the designer, not the system.", "Decisions required: Approve the seminar announcement path by Sep 23.", "Next cycle: Rank testing communications ramp up in October. Homi will confirm candidate lists with instructors two weeks out."]
    },
    {
      id: "B-AUG", title: "August executive briefing", date: "Aug 8, 2026",
      summary: "Steady first quarter. Certification communications are the quiet success: zero errors across 120 candidate messages.",
      body: ["What happened: 402 runs, 97.4% completion. No incidents.", "What it means: Baseline established. The fall seminar cycle is the first real test of event promotion at volume.", "Decisions required: None.", "Next cycle: Prepare the fall seminar announcement sequence."]
    }
  ],
  decisionLog: [
    { date: "Aug 20", decision: "Approved monthly school update format", owner: "Association director", answer: "Approved", status: "Active" },
    { date: "Jul 8", decision: "Approved certification result message wording", owner: "Association director", answer: "Approved", status: "Active" }
  ],
  requests: [
    { id: "R-52", title: "Add Spanish-language event announcements", classification: "Tune", status: "In review", owner: "Homi operator", nextAction: "Homi is reviewing translation quality controls.", targetDate: "Oct 8" },
    { id: "R-49", title: "Remind schools of dues deadline", classification: "Operate", status: "Accepted", owner: "Homi operator", nextAction: "Scheduled in the coordination workflow.", targetDate: "Oct 1" },
    { id: "R-46", title: "Build a tournament registration workflow", classification: "Build", status: "Awaiting scoping", owner: "Homi operator", nextAction: "Requires a Build change order. Proposal being drafted.", targetDate: "Oct 12" }
  ],
  billing: {
    tier: "Foundation", price: "$2,500 / month", period: "Sep 1 to Sep 30, 2026",
    invoiceStatus: "Paid Sep 4", renewal: "Annual, renews Apr 30, 2027",
    noticeDate: "Notice due by Mar 31, 2027", modules: "None added.",
    decisionMaker: "Association director", accountOwner: "Homi & Co."
  }
};
