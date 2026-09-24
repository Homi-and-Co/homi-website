/* Illustrative demo data. All figures are fictional and for demonstration only. */
window.HOMI_TENANTS = window.HOMI_TENANTS || {};
window.HOMI_TENANTS.private = {
  id: "private",
  name: "Private Instruction",
  tagline: "Sole proprietor, personal lessons",
  tier: "Foundation",
  price: "$2,000 / month",
  since: "April 2026",
  health: {
    overall: "good",
    checkedAt: "Today, 7:42 AM CT",
    workflows: [
      { name: "Inquiry follow-up", purpose: "Every lesson inquiry gets a personal reply the same day.", state: "operating", stateLabel: "Operating", lastRun: "Today, 7:15 AM CT", queue: "2 inquiries in queue", exceptions: 0, owner: "Homi operator", integration: "Website forms, connected" },
      { name: "Lesson scheduling and reminders", purpose: "Bookings, confirmations, and reminders run without manual texting.", state: "operating", stateLabel: "Operating", lastRun: "Today, 6:40 AM CT", queue: "14 lessons scheduled this week", exceptions: 0, owner: "Homi operator", integration: "Calendar, connected" },
      { name: "Package renewals", purpose: "Students on lesson packages are nudged before their sessions run out.", state: "operating", stateLabel: "Operating", lastRun: "Yesterday, 8:00 AM CT", queue: "6 packages renewing within 14 days", exceptions: 1, owner: "Homi operator", integration: "Payment records, connected" }
    ]
  },
  decisions: [
    {
      id: "D-44", question: "Raise the package renewal reminder from 3 sessions remaining to 5?",
      owner: "Owner", status: "open",
      options: ["Raise to 5 sessions", "Keep at 3 sessions"],
      recommendation: "Raise to 5. Two renewals last month lapsed because the reminder arrived during a busy week. Earlier notice costs nothing.",
      consequence: "No urgency. The current reminder is working, this would make it work slightly better.",
      deadline: "Oct 10", tier: "Standard"
    }
  ],
  exceptions: [
    {
      id: "E-117", title: "One renewal reminder bounced", severity: "Low", sevClass: "sev-low",
      workflow: "Package renewals", detected: "Yesterday, 8:04 AM CT",
      consequence: "One student did not receive the renewal email because the address on file bounced.",
      safeState: "The student is still booked through next week. Nothing is lost.",
      done: "Homi flagged the bounce and prepared a text alternative for approval.",
      owner: "Homi operator", nextAction: "Send the text alternative once the owner confirms the mobile number.",
      clientAction: "Confirm the student's mobile number when convenient."
    }
  ],
  outcomes: [
    { name: "Inquiry to first lesson", definition: "Share of inquiries that book a first lesson within 14 days.", current: "58%", baseline: "44%", baselineDate: "Mar 2026", target: "60%", direction: "up", source: "Booking records", freshness: "Reconciled Sep 20", limits: "Small sample, about 25 inquiries per month." },
    { name: "Package renewal rate", definition: "Share of expiring packages renewed within 21 days.", current: "81%", baseline: "69%", baselineDate: "Mar 2026", target: "85%", direction: "up", source: "Payment records", freshness: "Reconciled Sep 20", limits: "Seasonal travel affects summer months." },
    { name: "Owner hours on scheduling per week", definition: "Owner-reported hours on booking, rescheduling, and reminders.", current: "1.5 hrs", baseline: "6 hrs", baselineDate: "Mar 2026", target: "Under 2 hrs", direction: "up", source: "Owner time log", freshness: "Reported Sep 18", limits: "Self-reported. Directional, not audited." }
  ],
  operating: [
    { name: "Workflow completion rate", value: "99.2%", threshold: "Above 97%", status: "good" },
    { name: "Failed runs needing retry", value: "3 this month", threshold: "Under 15", status: "good" },
    { name: "Open exceptions", value: "1", threshold: "Under 4", status: "good" },
    { name: "Approval turnaround, median", value: "1.1 days", threshold: "Under 3 days", status: "good" },
    { name: "Manual takeovers", value: "0 this month", threshold: "Under 2", status: "good" }
  ],
  briefings: [
    {
      id: "B-SEP", title: "September executive briefing", date: "Sep 5, 2026",
      summary: "A quiet, healthy month. Renewals are strong, scheduling runs itself, and the only open item is a small timing tweak to the renewal reminder.",
      body: ["What happened: 3 accepted workflows ran 342 times with a 99.2% completion rate. Inquiry conversion reached 58% against a 44% baseline.", "What it means: The administrative load of a one-person business is now close to zero. The remaining work is judgment, not logistics.", "Decisions required: One, low urgency. Raise the renewal reminder threshold by Oct 10.", "Next cycle: Homi will watch renewal timing through the holiday season, when travel historically softens renewals."]
    },
    {
      id: "B-AUG", title: "August executive briefing", date: "Aug 6, 2026",
      summary: "First full quarter complete. All three outcome measures are above baseline and no exceptions required owner action.",
      body: ["What happened: 318 runs, 98.8% completion. Zero manual takeovers.", "What it means: The operating layer is stable enough that the monthly briefing is the main touchpoint.", "Decisions required: None.", "Next cycle: Consider whether the content pipeline module is wanted. Not yet requested."]
    }
  ],
  decisionLog: [
    { date: "Jul 30", decision: "Approved text reminders in addition to email", owner: "Owner", answer: "Approved", status: "Active" },
    { date: "Jun 12", decision: "Set renewal reminder at 3 sessions remaining", owner: "Owner", answer: "Approved", status: "Active" }
  ],
  requests: [
    { id: "R-31", title: "Add a waitlist for full lesson days", classification: "Tune", status: "In review", owner: "Homi operator", nextAction: "Homi is checking calendar integration support.", targetDate: "Sep 30" },
    { id: "R-28", title: "Send holiday schedule notice in December", classification: "Operate", status: "Accepted", owner: "Homi operator", nextAction: "Draft scheduled for late November.", targetDate: "Nov 25" },
    { id: "R-25", title: "Manage personal social media accounts", classification: "Decline", status: "Closed", owner: "Homi operator", nextAction: "Declined with reason: outside the accepted Foundation scope. Available as an optional module.", targetDate: "Closed Aug 14" }
  ],
  billing: {
    tier: "Foundation", price: "$2,000 / month", period: "Sep 1 to Sep 30, 2026",
    invoiceStatus: "Paid Sep 2", renewal: "Annual, renews Mar 31, 2027",
    noticeDate: "Notice due by Mar 1, 2027", modules: "None added.",
    decisionMaker: "Owner", accountOwner: "Homi & Co."
  }
};
