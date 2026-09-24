/* Illustrative demo data. All figures are fictional and for demonstration only. */
window.HOMI_DIRECTOR = {
  tenants: [
    { id: "harvest", name: "Harvest Martial Arts", state: "good", stateLabel: "Healthy", tier: "Operations", fee: 4500, openExceptions: 3, overdueApprovals: 0, operatorHours: 22, bandLow: 16, bandHigh: 28, margin: 0.52, marginNote: "Directional", renewal: "Renews Feb 2027", noticeIn: "129 days", sentiment: "Positive", lastBriefing: "Sep 8" },
    { id: "private", name: "Private Instruction", state: "good", stateLabel: "Healthy", tier: "Foundation", fee: 2000, openExceptions: 1, overdueApprovals: 0, operatorHours: 9, bandLow: 8, bandHigh: 14, margin: 0.58, marginNote: "Directional", renewal: "Renews Mar 2027", noticeIn: "160 days", sentiment: "Positive", lastBriefing: "Sep 5" },
    { id: "hanmudo", name: "World Han Mu Do Association", state: "warn", stateLabel: "Needs attention", tier: "Foundation", fee: 2500, openExceptions: 3, overdueApprovals: 0, operatorHours: 13, bandLow: 8, bandHigh: 14, margin: 0.44, marginNote: "Directional", renewal: "Renews Apr 2027", noticeIn: "190 days", sentiment: "Positive", lastBriefing: "Sep 9" },
    { id: "homi", name: "Homi & Co.", state: "good", stateLabel: "Healthy", tier: "Operations", fee: 5000, openExceptions: 1, overdueApprovals: 0, operatorHours: 19, bandLow: 16, bandHigh: 28, margin: 0.61, marginNote: "Directional, internal tenant", renewal: "Continuous", noticeIn: "N/A", sentiment: "Positive", lastBriefing: "Sep 7" },
    { id: "pond", name: "The Pond", state: "good", stateLabel: "Healthy", tier: "Foundation", fee: 2000, openExceptions: 2, overdueApprovals: 0, operatorHours: 10, bandLow: 8, bandHigh: 14, margin: 0.55, marginNote: "Directional", renewal: "Renews Dec 2026", noticeIn: "70 days", sentiment: "Positive", lastBriefing: "Sep 6" }
  ],
  aging: [
    { tenant: "World Han Mu Do Association", item: "E-201: Seminar artwork not received", type: "Exception", opened: "Sep 21", ageDays: 1, severity: "Medium", threshold: "Escalate at 3 days", status: "On track" },
    { tenant: "Harvest Martial Arts", item: "E-342: SMS reminders delayed", type: "Exception", opened: "Sep 21", ageDays: 1, severity: "Medium", threshold: "Escalate at 3 days", status: "On track" },
    { tenant: "Harvest Martial Arts", item: "D-118: Trial message approval", type: "Approval", opened: "Sep 16", ageDays: 6, severity: "Standard", threshold: "Remind at 7 days", status: "Reminder due" },
    { tenant: "Harvest Martial Arts", item: "E-338: Trial records missing start date", type: "Exception", opened: "Sep 21", ageDays: 1, severity: "Low", threshold: "Escalate at 7 days", status: "On track" },
    { tenant: "World Han Mu Do Association", item: "E-198: Certification sign-offs pending", type: "Exception", opened: "Sep 18", ageDays: 4, severity: "Low", threshold: "Escalate at 7 days", status: "On track" },
    { tenant: "Private Instruction", item: "E-117: Renewal reminder bounced", type: "Exception", opened: "Sep 21", ageDays: 1, severity: "Low", threshold: "Escalate at 7 days", status: "On track" },
    { tenant: "Homi & Co.", item: "E-41: Content draft awaiting review", type: "Exception", opened: "Sep 16", ageDays: 6, severity: "Low", threshold: "Escalate at 10 days", status: "On track" },
    { tenant: "The Pond", item: "E-88: Promotion list rebuild stalled", type: "Exception", opened: "Sep 21", ageDays: 1, severity: "Medium", threshold: "Escalate at 3 days", status: "On track" },
    { tenant: "The Pond", item: "D-31: Fall promotion approval", type: "Approval", opened: "Sep 17", ageDays: 5, severity: "Standard", threshold: "Remind at 7 days", status: "On track" },
    { tenant: "The Pond", item: "E-85: Booking reminder misaddressed", type: "Exception", opened: "Sep 18", ageDays: 4, severity: "Low", threshold: "Escalate at 7 days", status: "On track" }
  ],
  incidents: {
    months: ["May", "Jun", "Jul", "Aug", "Sep"],
    minor: [3, 2, 2, 1, 2],
    major: [1, 0, 1, 0, 0],
    note: "No severe incidents in the trailing five months. September figures are month to date."
  },
  capacity: {
    operators: 1, assignedClients: 5, loadPct: 79,
    detail: "One staffed operator carries 73 hours against a 92-hour planning capacity. Incident reserve of 10 hours held.",
    onboarding: "No onboardings scheduled. Next slot available immediately.",
    founderSpillover: "Founder governance at 9 hours this month against a 12-hour planning figure."
  },
  backlog: [
    { pattern: "SMS provider delays recur across two tenants", component: "Adapter health checks", evidence: "2 incidents", owner: "Homi operator", priority: "High", status: "Testing" },
    { pattern: "Approval reminders improve turnaround by about a day", component: "Approval queue", evidence: "3 tenants", owner: "Homi operator", priority: "Medium", status: "Approved" },
    { pattern: "Clients ask for Saturday-specific scheduling rules", component: "Scheduling adapter", evidence: "2 requests", owner: "Homi operator", priority: "Medium", status: "Research" },
    { pattern: "Bounce handling needs a text fallback path", component: "Exception runbooks", evidence: "1 incident", owner: "Homi operator", priority: "Low", status: "Research" },
    { pattern: "Review reply drafts work best with owner sign-off on negatives", component: "Review adapter", evidence: "1 tenant", owner: "Homi operator", priority: "Low", status: "Research" }
  ]
};
