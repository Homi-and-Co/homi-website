/* Illustrative demo data. All figures are fictional and for demonstration only. */
window.HOMI_TENANTS = window.HOMI_TENANTS || {};
window.HOMI_TENANTS.harvest = {
  id: "harvest",
  name: "Harvest Martial Arts",
  tagline: "Martial arts school, Franklin, Tennessee",
  tier: "Operations",
  price: "$4,500 / month",
  since: "March 2026",
  health: {
    overall: "good",
    checkedAt: "Today, 7:42 AM CT",
    workflows: [
      { name: "Lead follow-up", purpose: "Every new inquiry receives a personal response within business hours.", state: "operating", stateLabel: "Operating", lastRun: "Today, 7:38 AM CT", queue: "3 leads in queue, oldest 41 minutes", exceptions: 0, owner: "Amara O.", integration: "Website forms, connected" },
      { name: "Trial conversion", purpose: "Trial students receive the right nudge at the right day of their trial.", state: "operating", stateLabel: "Operating", lastRun: "Today, 6:15 AM CT", queue: "11 active trials", exceptions: 1, owner: "Amara O.", integration: "Scheduling system, connected" },
      { name: "Class reminders", purpose: "Students and parents get reminders before class, reducing no-shows.", state: "degraded", stateLabel: "Degraded", lastRun: "Yesterday, 5:02 PM CT", queue: "Reminder backlog clearing", exceptions: 2, owner: "Homi operator", integration: "SMS provider, intermittent" },
      { name: "Win-back", purpose: "Lapsed members receive a personal re-engagement sequence.", state: "operating", stateLabel: "Operating", lastRun: "Yesterday, 9:00 AM CT", queue: "18 lapsed members in sequence", exceptions: 0, owner: "Homi operator", integration: "Membership system, connected" }
    ]
  },
  decisions: [
    {
      id: "D-118", question: "Approve the revised trial expiration message for day 10 of the trial?",
      owner: "School owner", status: "open",
      options: ["Approve the revised message", "Keep the current message", "Request changes"],
      recommendation: "Approve the revised message. Trial conversion is up 2.1 points since the test began, and the new wording is the only change in that window.",
      consequence: "Without a decision by Friday, the test ends and the old message resumes automatically.",
      deadline: "Friday, Sep 25", tier: "Standard"
    },
    {
      id: "D-121", question: "Add Saturday morning class reminders for the kids program?",
      owner: "School owner", status: "open",
      options: ["Add Saturday reminders", "Keep weekday reminders only"],
      recommendation: "Add Saturday reminders. Saturday no-shows are the highest of the week at 14%, and reminders cost nothing once configured.",
      consequence: "No decision needed urgently. This can wait for the monthly briefing.",
      deadline: "Oct 6", tier: "Standard"
    }
  ],
  exceptions: [
    {
      id: "E-342", title: "SMS reminders delayed for evening classes", severity: "Medium", sevClass: "",
      workflow: "Class reminders", detected: "Yesterday, 4:48 PM CT",
      consequence: "About 40 families received reminders 25 minutes late. Classes ran normally.",
      safeState: "The workflow is running. Delayed messages are still sending, none were lost.",
      done: "Homi rerouted through the backup sender at 5:02 PM CT and confirmed delivery.",
      owner: "Homi operator", nextAction: "Monitor tonight's classes. If delays repeat, escalate to the SMS provider.",
      clientAction: "None required. This is informational."
    },
    {
      id: "E-338", title: "Two trial records missing a start date", severity: "Low", sevClass: "sev-low",
      workflow: "Trial conversion", detected: "Monday, 9:12 AM CT",
      consequence: "Two trial students are on the generic schedule instead of their day-based sequence.",
      safeState: "Both students are receiving messages. Timing is approximate, not wrong.",
      done: "Homi flagged the records and requested the start dates from the front desk.",
      owner: "Homi operator", nextAction: "Apply the correct start dates when confirmed.",
      clientAction: "Confirm the two start dates when convenient."
    }
  ],
  outcomes: [
    { name: "Trial to membership conversion", definition: "Share of trial students who join within 30 days of trial start.", current: "31.4%", baseline: "27.9%", baselineDate: "Feb 2026", target: "35%", direction: "up", source: "Membership system", freshness: "Reconciled Sep 20", limits: "Seasonal enrollment patterns not separated." },
    { name: "Class no-show rate", definition: "Booked students who do not attend and do not cancel.", current: "9.2%", baseline: "12.6%", baselineDate: "Feb 2026", target: "Under 10%", direction: "up", source: "Scheduling system", freshness: "Reconciled Sep 20", limits: "Holiday weeks excluded from comparison." },
    { name: "Owner hours on admin per week", definition: "Owner-reported hours on scheduling, follow-up, and reminders.", current: "4.5 hrs", baseline: "11 hrs", baselineDate: "Feb 2026", target: "Under 5 hrs", direction: "up", source: "Owner time log", freshness: "Reported Sep 18", limits: "Self-reported. Directional, not audited." }
  ],
  operating: [
    { name: "Workflow completion rate", value: "98.6%", threshold: "Above 97%", status: "good" },
    { name: "Failed runs needing retry", value: "14 this month", threshold: "Under 25", status: "good" },
    { name: "Open exceptions", value: "3", threshold: "Under 6", status: "good" },
    { name: "Approval turnaround, median", value: "1.8 days", threshold: "Under 3 days", status: "good" },
    { name: "Manual takeovers", value: "1 this month", threshold: "Under 3", status: "good" }
  ],
  briefings: [
    {
      id: "B-SEP", title: "September executive briefing", date: "Sep 8, 2026",
      summary: "Trial conversion continues to climb and owner admin hours are at their lowest recorded level. The SMS delay on Sep 21 was contained with no lost messages. Two decisions await you, neither urgent.",
      body: ["What happened: 4 accepted workflows ran 1,204 times with a 98.6% completion rate. Trial conversion reached 31.4% against a 27.9% baseline. Owner admin time fell to 4.5 hours per week.", "What it means: The follow-up and reminder system is doing the remembering now. The remaining drag is Saturday no-shows at 14%, which the pending decision on Saturday reminders would address.", "Decisions required: Approve the revised trial message by Sep 25. Saturday reminders can wait until Oct 6.", "Next cycle: Homi will monitor the SMS provider for repeat delays and report back. Win-back sequence expansion is queued as a request, not yet scoped."]
    },
    {
      id: "B-AUG", title: "August executive briefing", date: "Aug 7, 2026",
      summary: "First full month on the Operations tier. Conversion up, no-shows down, one minor integration outage resolved within the service window.",
      body: ["What happened: All 4 workflows accepted and running. 1,031 runs, 97.9% completion. One scheduling-system outage on Aug 19, recovered in 40 minutes.", "What it means: The baseline is established and the trend is positive on all three outcome measures.", "Decisions required: None. This was an information briefing.", "Next cycle: Begin the trial message test that is now awaiting your approval."]
    }
  ],
  decisionLog: [
    { date: "Aug 28", decision: "Approved win-back sequence for lapsed members", owner: "School owner", answer: "Approved", status: "Active" },
    { date: "Aug 11", decision: "Approved day-10 trial expiration nudge", owner: "School owner", answer: "Approved as test", status: "Active" },
    { date: "Jul 22", decision: "Declined social media management module", owner: "School owner", answer: "Declined", status: "Closed" }
  ],
  requests: [
    { id: "R-88", title: "Expand win-back to 90-day lapsed members", classification: "Tune", status: "In review", owner: "Homi operator", nextAction: "Homi is estimating effort. No scope change expected.", targetDate: "Sep 29" },
    { id: "R-84", title: "Add birthday messages for students", classification: "Operate", status: "Accepted", owner: "Homi operator", nextAction: "Scheduled for the October tuning window.", targetDate: "Oct 15" },
    { id: "R-81", title: "Post class photos to social media", classification: "Decline", status: "Closed", owner: "Homi operator", nextAction: "Declined with reason: social media module was declined in July. Revisit if the module is added.", targetDate: "Closed Sep 2" },
    { id: "R-79", title: "Connect the new payment terminal", classification: "Build", status: "Awaiting scoping", owner: "Homi operator", nextAction: "Requires a Build change order. Proposal being drafted.", targetDate: "Oct 3" }
  ],
  billing: {
    tier: "Operations", price: "$4,500 / month", period: "Sep 1 to Sep 30, 2026",
    invoiceStatus: "Paid Sep 3", renewal: "Annual, renews Feb 28, 2027",
    noticeDate: "Notice due by Jan 29, 2027", modules: "None added. Social media module declined.",
    decisionMaker: "School owner", accountOwner: "Homi & Co."
  }
};
