/* Illustrative demo data. All figures are fictional and for demonstration only. */
window.HOMI_TENANTS = window.HOMI_TENANTS || {};
window.HOMI_TENANTS.pond = {
  id: "pond",
  name: "The Pond",
  tagline: "Neighborhood pub. Franklin, Tennessee",
  tier: "Foundation",
  price: "$2,000 / month",
  since: "January 2026",
  health: {
    overall: "good",
    checkedAt: "Today, 7:42 AM CT",
    workflows: [
      { name: "Customer follow-up", purpose: "Every new inquiry receives a personal reply the same business day.", state: "operating", stateLabel: "Operating", lastRun: "Today, 7:20 AM CT", queue: "2 inquiries in queue", exceptions: 0, owner: "Homi operator", integration: "Website forms, connected" },
      { name: "Booking and visit reminders", purpose: "Guests receive confirmations and reminders, reducing no-shows.", state: "operating", stateLabel: "Operating", lastRun: "Today, 6:50 AM CT", queue: "22 bookings this week", exceptions: 1, owner: "Homi operator", integration: "Booking system, connected" },
      { name: "Review management", purpose: "New reviews are acknowledged and negative reviews are flagged for the owner.", state: "operating", stateLabel: "Operating", lastRun: "Yesterday, 5:30 PM CT", queue: "6 new reviews this week", exceptions: 0, owner: "Homi operator", integration: "Review platforms, connected" },
      { name: "Promotions", purpose: "Seasonal offers go out to the right list at the right time.", state: "degraded", stateLabel: "Degraded", lastRun: "Monday, 11:00 AM CT", queue: "Fall offer list being rebuilt", exceptions: 1, owner: "Homi operator", integration: "Email platform, intermittent" }
    ]
  },
  decisions: [
    {
      id: "D-31", question: "Approve the fall promotion offer before the list rebuild finishes?",
      owner: "Owner", status: "open",
      options: ["Approve the offer now", "Wait for the rebuilt list"],
      recommendation: "Wait for the rebuilt list. The spring promotion to a stale list drew half the response of the cleaned list.",
      consequence: "Waiting costs about a week. Sending now risks unsubscribes from a stale list.",
      deadline: "Sep 29", tier: "Standard"
    }
  ],
  exceptions: [
    {
      id: "E-88", title: "Promotion list rebuild stalled on duplicate records", severity: "Medium", sevClass: "",
      workflow: "Promotions", detected: "Monday, 10:45 AM CT",
      consequence: "The fall promotion cannot send until duplicates are resolved. No messages are going out partially.",
      safeState: "The draft offer is complete and held. Nothing has been sent.",
      done: "Homi identified the duplicate source and started a merge pass.",
      owner: "Homi operator", nextAction: "Finish the merge pass and confirm the clean count.",
      clientAction: "None required. This is informational."
    },
    {
      id: "E-85", title: "One booking reminder went to the wrong guest", severity: "Low", sevClass: "sev-low",
      workflow: "Booking and visit reminders", detected: "Friday, 3:10 PM CT",
      consequence: "One guest received a reminder for a booking that was not theirs. The booking itself was unaffected.",
      safeState: "The reminder log shows a single misaddressed message. No other reminders were affected.",
      done: "Homi corrected the record and added a name check to the reminder step.",
      owner: "Homi operator", nextAction: "Monitor this week's reminders for repeats.",
      clientAction: "None required."
    }
  ],
  outcomes: [
    { name: "Repeat visit rate", definition: "Share of guests who book again within 90 days.", current: "38%", baseline: "31%", baselineDate: "Dec 2025", target: "40%", direction: "up", source: "Booking system", freshness: "Reconciled Sep 19", limits: "Seasonal patterns not separated." },
    { name: "Review rating, trailing 90 days", definition: "Average public rating across monitored review platforms.", current: "4.7", baseline: "4.4", baselineDate: "Dec 2025", target: "4.6 or above", direction: "up", source: "Review platforms", freshness: "Reconciled Sep 19", limits: "Platform coverage is partial." },
    { name: "Owner hours on admin per week", definition: "Owner-reported hours on follow-up, reminders, and promotions.", current: "2 hrs", baseline: "8 hrs", baselineDate: "Dec 2025", target: "Under 3 hrs", direction: "up", source: "Owner time log", freshness: "Reported Sep 17", limits: "Self-reported. Directional, not audited." }
  ],
  operating: [
    { name: "Workflow completion rate", value: "98.1%", threshold: "Above 97%", status: "good" },
    { name: "Failed runs needing retry", value: "6 this month", threshold: "Under 15", status: "good" },
    { name: "Open exceptions", value: "2", threshold: "Under 4", status: "good" },
    { name: "Approval turnaround, median", value: "1.5 days", threshold: "Under 3 days", status: "good" },
    { name: "Manual takeovers", value: "0 this month", threshold: "Under 2", status: "good" }
  ],
  briefings: [
    {
      id: "B-SEP", title: "September executive briefing", date: "Sep 6, 2026",
      summary: "The earliest tenant is also the steadiest. Repeat visits are up, reviews are strong, and the only open item is timing on the fall promotion.",
      body: ["What happened: 4 accepted workflows ran 512 times at 98.1% completion. Repeat visit rate reached 38% against a 31% baseline.", "What it means: The original model keeps proving itself. The promotion list rebuild is the only work in flight.", "Decisions required: Approve the fall promotion path by Sep 29.", "Next cycle: Homi will finish the list rebuild and report the clean count."]
    },
    {
      id: "B-AUG", title: "August executive briefing", date: "Aug 5, 2026",
      summary: "Quiet summer month. Review rating crossed 4.6 and stayed there. No incidents.",
      body: ["What happened: 488 runs, 98.4% completion. Zero manual takeovers.", "What it means: Eight months on the earliest model and the measures keep trending the right way.", "Decisions required: None.", "Next cycle: Begin planning the fall promotion."]
    }
  ],
  decisionLog: [
    { date: "Jul 18", decision: "Approved review response templates", owner: "Owner", answer: "Approved", status: "Active" },
    { date: "Mar 9", decision: "Approved reminder timing at 24 hours before visit", owner: "Owner", answer: "Approved", status: "Active" }
  ],
  requests: [
    { id: "R-22", title: "Add holiday hours notice to reminders", classification: "Operate", status: "Accepted", owner: "Homi operator", nextAction: "Draft scheduled for late November.", targetDate: "Nov 20" },
    { id: "R-19", title: "Offer birthday promotions to repeat guests", classification: "Tune", status: "In review", owner: "Homi operator", nextAction: "Homi is checking list segmentation support.", targetDate: "Oct 2" },
    { id: "R-15", title: "Manage the business social media accounts", classification: "Decline", status: "Closed", owner: "Homi operator", nextAction: "Declined with reason: outside the accepted Foundation scope. Available as an optional module.", targetDate: "Closed Jul 25" }
  ],
  billing: {
    tier: "Foundation", price: "$2,000 / month", period: "Sep 1 to Sep 30, 2026",
    invoiceStatus: "Paid Sep 1", renewal: "Annual, renews Dec 31, 2026",
    noticeDate: "Notice due by Dec 1, 2026", modules: "None added.",
    decisionMaker: "Owner", accountOwner: "Homi & Co."
  }
};
