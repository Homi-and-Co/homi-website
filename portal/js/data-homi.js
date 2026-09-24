/* Illustrative demo data. All figures are fictional and for demonstration only. */
window.HOMI_TENANTS = window.HOMI_TENANTS || {};
window.HOMI_TENANTS.homi = {
  id: "homi",
  name: "Homi & Co.",
  tagline: "Homi operating itself, the dogfood tenant",
  tier: "Operations",
  price: "$5,000 / month",
  since: "June 2026",
  health: {
    overall: "good",
    checkedAt: "Today, 7:42 AM CT",
    workflows: [
      { name: "Blueprint lead follow-up", purpose: "Every Blueprint inquiry receives a personal response the same day.", state: "operating", stateLabel: "Operating", lastRun: "Today, 7:22 AM CT", queue: "4 inquiries in queue", exceptions: 0, owner: "Homi operator", integration: "Website forms, connected" },
      { name: "Content pipeline", purpose: "Ideas become drafts, drafts become reviewed posts, on a weekly rhythm.", state: "operating", stateLabel: "Operating", lastRun: "Yesterday, 4:00 PM CT", queue: "3 drafts awaiting founder review", exceptions: 1, owner: "Founder", integration: "Publishing calendar, connected" },
      { name: "Briefing cadence", purpose: "Internal decision briefings are prepared and delivered on schedule.", state: "operating", stateLabel: "Operating", lastRun: "Monday, 8:00 AM CT", queue: "October briefing in draft", exceptions: 0, owner: "Homi operator", integration: "Internal docs, connected" }
    ]
  },
  decisions: [
    {
      id: "D-15", question: "Publish the demo portal link on the marketing site?",
      owner: "Founder", status: "open",
      options: ["Publish the demo link", "Keep the demo private for sales calls"],
      recommendation: "Keep it private for now. The demo is strongest as a guided walkthrough where the story is told, not as a page visitors click through alone.",
      consequence: "Publishing now risks prospects seeing illustrative data without context.",
      deadline: "Oct 2", tier: "Standard"
    }
  ],
  exceptions: [
    {
      id: "E-41", title: "Content draft waiting on founder review for 6 days", severity: "Low", sevClass: "sev-low",
      workflow: "Content pipeline", detected: "Yesterday, 4:00 PM CT",
      consequence: "One post missed its planned publish date. The pipeline continues around it.",
      safeState: "The draft is complete and queued. Nothing published without review.",
      done: "Homi sent a single reminder with the draft attached. No further nudges scheduled.",
      owner: "Founder", nextAction: "Review or defer the draft.",
      clientAction: "Review the draft when convenient. This is the founder's own queue."
    }
  ],
  outcomes: [
    { name: "Inquiry response time, median", definition: "Time from Blueprint inquiry to first personal response.", current: "2.1 hrs", baseline: "26 hrs", baselineDate: "May 2026", target: "Under 4 hrs", direction: "up", source: "Inbox records", freshness: "Reconciled Sep 20", limits: "Business hours only." },
    { name: "Content pieces shipped per month", definition: "Published posts, pages, or assets that passed review.", current: "9", baseline: "4", baselineDate: "May 2026", target: "8", direction: "up", source: "Publishing calendar", freshness: "Reconciled Sep 20", limits: "Counts shipped pieces, not quality." },
    { name: "Briefing on-time rate", definition: "Internal briefings delivered by the agreed date.", current: "100%", baseline: "67%", baselineDate: "May 2026", target: "100%", direction: "flat", source: "Internal docs", freshness: "Reconciled Sep 20", limits: "Three briefings in the baseline period." }
  ],
  operating: [
    { name: "Workflow completion rate", value: "98.9%", threshold: "Above 97%", status: "good" },
    { name: "Failed runs needing retry", value: "5 this month", threshold: "Under 20", status: "good" },
    { name: "Open exceptions", value: "1", threshold: "Under 5", status: "good" },
    { name: "Approval turnaround, median", value: "3.2 days", threshold: "Under 5 days", status: "good" },
    { name: "Manual takeovers", value: "0 this month", threshold: "Under 2", status: "good" }
  ],
  briefings: [
    {
      id: "B-SEP", title: "September executive briefing", date: "Sep 7, 2026",
      summary: "Homi runs on Homi. Lead follow-up is same-day, content ships weekly, and the dogfood tenant is the strictest test of the method.",
      body: ["What happened: 3 accepted workflows ran 298 times at 98.9% completion. Inquiry response time fell to a median of 2.1 hours.", "What it means: The company eats its own cooking. Every improvement to the method is tested here first.", "Decisions required: One, on demo portal visibility, by Oct 2.", "Next cycle: The demo portal you are looking at is the output of this tenant's content pipeline."]
    }
  ],
  decisionLog: [
    { date: "Aug 25", decision: "Approved demo portal as the pre-launch sales surface", owner: "Founder", answer: "Approved", status: "Active" },
    { date: "Jul 14", decision: "Approved weekly content rhythm", owner: "Founder", answer: "Approved", status: "Active" }
  ],
  requests: [
    { id: "R-19", title: "Add a pricing FAQ to the website", classification: "Operate", status: "Accepted", owner: "Homi operator", nextAction: "Draft in the content pipeline.", targetDate: "Oct 5" },
    { id: "R-17", title: "Automate testimonial collection", classification: "Decline", status: "Closed", owner: "Homi operator", nextAction: "Declined with reason: Homi is pre-launch. No testimonials exist to collect. Revisit after paid delivery.", targetDate: "Closed Aug 30" },
    { id: "R-14", title: "Build the production client portal", classification: "Build", status: "Deferred", owner: "Founder", nextAction: "Deferred until paid proof clients validate the metric set. Demo portal serves sales until then.", targetDate: "Revisit Q1 2027" }
  ],
  billing: {
    tier: "Operations", price: "$5,000 / month", period: "Sep 1 to Sep 30, 2026",
    invoiceStatus: "Internal tenant, no invoice", renewal: "Continuous while dogfooding",
    noticeDate: "Not applicable", modules: "None added.",
    decisionMaker: "Founder", accountOwner: "Homi & Co."
  }
};
