/* Homi & Co Demo Portal. Static, vanilla JS. All data illustrative. */
(function () {
  "use strict";

  var state = { role: "client", tenant: "harvest", view: "overview" };

  var CLIENT_NAV = [
    { id: "overview", label: "Overview" },
    { id: "health", label: "Health" },
    { id: "decisions", label: "Decisions", count: function (t) { return t.decisions.filter(function (d) { return d.status === "open"; }).length; } },
    { id: "exceptions", label: "Exceptions", count: function (t) { return t.exceptions.length; } },
    { id: "measures", label: "Measures" },
    { id: "briefings", label: "Briefings" },
    { id: "requests", label: "Requests", count: function (t) { return t.requests.filter(function (r) { return r.status !== "Closed"; }).length; } },
    { id: "account", label: "Account" }
  ];

  var DIRECTOR_NAV = [
    { id: "portfolio", label: "Portfolio" },
    { id: "aging", label: "Aging" },
    { id: "hours", label: "Operator hours" },
    { id: "incidents", label: "Incidents" },
    { id: "margin", label: "Margin" },
    { id: "renewals", label: "Renewals" },
    { id: "capacity", label: "Capacity" },
    { id: "backlog", label: "Method backlog" }
  ];

  function $(sel) { return document.querySelector(sel); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function pillClass(s) {
    s = (s || "").toLowerCase();
    if (s === "operating" || s === "healthy" || s === "good" || s === "on track" || s === "paid" || s === "approved" || s === "active" || s === "accepted") return "good";
    if (s === "degraded" || s === "needs attention" || s === "medium" || s === "reminder due" || s === "in review") return "warn";
    if (s === "stopped" || s === "high" || s === "breached" || s === "overdue") return "bad";
    if (s === "low" || s === "waiting" || s === "operate" || s === "tune") return "info";
    return "neutral";
  }
  function pill(text) { return '<span class="pill ' + pillClass(text) + '">' + esc(text) + "</span>"; }
  function chip() { return '<span class="demo-chip">Illustrative demo data</span>'; }

  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.remove("hidden");
    clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.add("hidden"); }, 2600);
  }

  /* ---------- shell ---------- */

  function tenant() { return window.HOMI_TENANTS[state.tenant]; }

  function renderShell() {
    var t = tenant();
    $("#roleClient").classList.toggle("active", state.role === "client");
    $("#roleDirector").classList.toggle("active", state.role === "director");
    if (state.role === "client") {
      $("#contextLine").innerHTML = "<strong>" + esc(t.name) + "</strong> <span class='small'>" + esc(t.tagline) + " &middot; " + esc(t.tier) + " tier</span>";
    } else {
      $("#contextLine").innerHTML = "<strong>Director view</strong> <span class='small'>Internal only. Portfolio rollup across 5 tenants.</span>";
    }
    renderNav();
    renderView();
  }

  function renderNav() {
    var nav = state.role === "client" ? CLIENT_NAV : DIRECTOR_NAV;
    var t = tenant();
    var html = "";
    nav.forEach(function (n) {
      var c = n.count ? n.count(t) : 0;
      html += '<button data-view="' + n.id + '" class="' + (state.view === n.id ? "active" : "") + '">' +
        esc(n.label) + (c ? ' <span class="count">' + c + "</span>" : "") + "</button>";
    });
    $("#sidenav").innerHTML = html;
    var btns = document.querySelectorAll("#sidenav button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        state.view = this.dataset.view;
        renderShell();
        window.scrollTo(0, 0);
      });
    }
  }

  function viewHead(title, sub) {
    return '<div class="view-head"><h1>' + esc(title) + '</h1><span class="sub">' + esc(sub) + "</span>" + chip() + "</div>";
  }

  /* ---------- client views ---------- */

  function vOverview(t) {
    var openD = t.decisions.filter(function (d) { return d.status === "open"; });
    var attn = [];
    t.exceptions.forEach(function (e) { attn.push({ kind: "Exception", text: e.title, sev: e.severity }); });
    openD.forEach(function (d) { attn.push({ kind: "Decision due " + d.deadline, text: d.question, sev: "Standard" }); });
    var html = viewHead("Overview", t.name + ", operating picture as of " + t.health.checkedAt);
    html += '<div class="grid c4">';
    html += statCard("Overall health", pill(t.health.overall === "good" ? "Healthy" : "Needs attention"), t.health.workflows.length + " accepted workflows");
    html += statCard("Decisions awaiting you", '<span class="stat">' + openD.length + "</span>", "Oldest due " + (openD[0] ? openD[0].deadline : "none"));
    html += statCard("Open exceptions", '<span class="stat">' + t.exceptions.length + "</span>", "All with a named owner");
    html += statCard("Managed tier", '<span class="stat" style="font-size:1.3rem">' + esc(t.tier) + "</span>", esc(t.price));
    html += "</div><br>";
    html += '<div class="grid c2">';
    html += '<div class="card"><h3>Needs your attention</h3>' + (attn.length ? "" : '<p class="small">Nothing requires your attention. Healthy routine operation is summarized, not narrated.</p>');
    attn.forEach(function (a) {
      html += '<div class="measure-row"><div><strong>' + esc(a.text) + '</strong><br><span class="small">' + esc(a.kind) + "</span></div><div>" + pill(a.sev) + "</div></div>";
    });
    html += "</div>";
    html += '<div class="card"><h3>Outcome pulse</h3><p class="small">Against the baseline accepted during Build.</p>';
    t.outcomes.forEach(function (o) {
      var d = o.direction === "up" ? '<span class="delta-up">&#9650;</span>' : o.direction === "down" ? '<span class="delta-down">&#9660;</span>' : '<span class="delta-flat">&#9644;</span>';
      html += '<div class="measure-row"><div><strong>' + esc(o.name) + "</strong><br><span class='small'>Baseline " + esc(o.baseline) + " (" + esc(o.baselineDate) + ")</span></div>" +
        '<div style="text-align:right"><strong class="mono">' + esc(o.current) + "</strong> " + d + "</div></div>";
    });
    html += "</div></div>";
    return html;
  }

  function statCard(label, value, sub) {
    return '<div class="card"><div class="stat-label">' + esc(label) + "</div>" + value + '<div class="small">' + esc(sub) + "</div></div>";
  }

  function vHealth(t) {
    var html = viewHead("Operating health", "One state per accepted workflow. Last checked " + t.health.checkedAt + ".");
    t.health.workflows.forEach(function (w) {
      html += '<div class="card" style="margin-bottom:1rem"><div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap">' +
        "<h3>" + esc(w.name) + "</h3>" + pill(w.stateLabel) + "</div>" +
        '<p class="small">' + esc(w.purpose) + "</p>" +
        '<dl class="kv"><dt>Last successful run</dt><dd>' + esc(w.lastRun) + "</dd>" +
        "<dt>Queue</dt><dd>" + esc(w.queue) + "</dd>" +
        "<dt>Open exceptions</dt><dd>" + w.exceptions + "</dd>" +
        "<dt>Owner</dt><dd>" + esc(w.owner) + "</dd>" +
        "<dt>Integration</dt><dd>" + esc(w.integration) + "</dd></dl></div>";
    });
    return html;
  }

  function vDecisions(t) {
    var html = viewHead("Decisions", "Bounded choices with a recommendation, a consequence, and a deadline.");
    var open = t.decisions.filter(function (d) { return d.status === "open"; });
    if (!open.length) html += '<div class="notice green">No open decisions. Nothing requires your attention.</div>';
    open.forEach(function (d) {
      html += '<div class="decision"><div class="q">' + esc(d.question) + '</div>' +
        '<div><span class="small">Owner: ' + esc(d.owner) + " &middot; Deadline: " + esc(d.deadline) + " &middot; Tier: " + esc(d.tier) + "</span></div>" +
        '<div class="rec"><strong>Homi recommendation:</strong> ' + esc(d.recommendation) + "</div>" +
        '<p class="small"><strong>Options:</strong> ' + d.options.map(esc).join(" &middot; ") + "</p>" +
        '<p class="small"><strong>If no decision:</strong> ' + esc(d.consequence) + "</p>" +
        '<div class="actions"><button class="btn btn-sm" data-demo>Approve recommendation</button>' +
        '<button class="btn btn-sm btn-ghost" data-demo>Choose another option</button>' +
        '<button class="btn btn-sm btn-ghost" data-demo>Ask a question</button></div></div>';
    });
    return html;
  }

  function vExceptions(t) {
    var html = viewHead("Exceptions", "Plain language. Consequence and ownership first, technical detail only if useful.");
    if (!t.exceptions.length) html += '<div class="notice green">No open exceptions.</div>';
    t.exceptions.forEach(function (e) {
      html += '<div class="exception ' + (e.severity === "High" ? "sev-high" : e.sevClass || "") + '">' +
        '<div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap"><h3>' + esc(e.title) + "</h3>" + pill(e.severity) + "</div>" +
        '<p class="small">Workflow: ' + esc(e.workflow) + " &middot; Detected: " + esc(e.detected) + "</p>" +
        "<p><strong>Business consequence:</strong> " + esc(e.consequence) + "</p>" +
        "<p><strong>Current safe state:</strong> " + esc(e.safeState) + "</p>" +
        "<p><strong>What Homi has done:</strong> " + esc(e.done) + "</p>" +
        '<dl class="kv"><dt>Owner</dt><dd>' + esc(e.owner) + "</dd><dt>Next action</dt><dd>" + esc(e.nextAction) +
        "</dd><dt>Your action</dt><dd>" + esc(e.clientAction) + "</dd></dl>" +
        '<div class="actions" style="margin-top:0.6rem"><button class="btn btn-sm btn-ghost" data-demo>Acknowledge</button></div></div>';
    });
    return html;
  }

  function vMeasures(t) {
    var html = viewHead("Measures", "Every number carries its definition, source, baseline, freshness, and limit.");
    html += '<div class="card" style="margin-bottom:1rem"><h3>Outcome measures vs Build baseline</h3>';
    t.outcomes.forEach(function (o) {
      var d = o.direction === "up" ? '<span class="delta-up">&#9650; improving</span>' : o.direction === "down" ? '<span class="delta-down">&#9660; declining</span>' : '<span class="delta-flat">&#9644; steady</span>';
      html += '<div style="padding:0.7rem 0;border-bottom:1px solid #f0e9da"><div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap">' +
        "<strong>" + esc(o.name) + "</strong><span><strong class='mono'>" + esc(o.current) + "</strong> " + d + "</span></div>" +
        '<p class="small" style="margin:0.3rem 0">' + esc(o.definition) + "</p>" +
        '<p class="small" style="margin:0">Baseline ' + esc(o.baseline) + " (" + esc(o.baselineDate) + ")" +
        (o.target ? " &middot; Target " + esc(o.target) : "") + " &middot; Source: " + esc(o.source) + " &middot; " + esc(o.freshness) +
        "<br>Limit: " + esc(o.limits) + "</p></div>";
    });
    html += "</div>";
    html += '<div class="card"><h3>Operating measures</h3><p class="small">Whether the accepted workflows complete reliably and safely.</p>';
    t.operating.forEach(function (m) {
      html += '<div class="measure-row"><div><strong>' + esc(m.name) + '</strong><br><span class="small">Threshold: ' + esc(m.threshold) + "</span></div>" +
        '<div style="text-align:right"><strong class="mono">' + esc(m.value) + "</strong><br>" + pill(m.status === "good" ? "Within limit" : m.status) + "</div></div>";
    });
    html += "</div>";
    return html;
  }

  function vBriefings(t) {
    var html = viewHead("Briefings and decision log", "A durable record of what changed, what it meant, and what was decided.");
    t.briefings.forEach(function (b) {
      html += '<details class="briefing"><summary><span>' + esc(b.title) + '</span><span class="small">' + esc(b.date) + "</span></summary>" +
        '<div class="body"><p><strong>' + esc(b.summary) + "</strong></p><ul>" +
        b.body.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div></details>";
    });
    html += '<div class="card"><h3>Decision log</h3><table><tr><th>Date</th><th>Decision</th><th>Owner</th><th>Answer</th><th>Status</th></tr>';
    t.decisionLog.forEach(function (d) {
      html += "<tr><td>" + esc(d.date) + "</td><td>" + esc(d.decision) + "</td><td>" + esc(d.owner) + "</td><td>" + esc(d.answer) + "</td><td>" + pill(d.status) + "</td></tr>";
    });
    html += "</table></div>";
    return html;
  }

  function vRequests(t) {
    var html = viewHead("Request queue", "One visible path from capture to closure. Classifications: operate, tune, repair, Build, defer, decline.");
    html += '<div class="card"><table><tr><th>Request</th><th>Classification</th><th>Status</th><th>Next action</th><th>Target</th></tr>';
    t.requests.forEach(function (r) {
      html += "<tr><td><strong>" + esc(r.title) + "</strong><br><span class='small'>" + esc(r.id) + " &middot; Owner: " + esc(r.owner) + "</span></td>" +
        "<td>" + pill(r.classification) + "</td><td>" + esc(r.status) + "</td><td>" + esc(r.nextAction) + "</td><td>" + esc(r.targetDate) + "</td></tr>";
    });
    html += '</table><br><button class="btn btn-sm" data-demo>Submit a new request</button></div>';
    html += '<div class="notice">A new workflow, agent, integration, or reporting model returns to Build until separately scoped, accepted, and priced.</div>';
    return html;
  }

  function vAccount(t) {
    var b = t.billing;
    var html = viewHead("Account", "Scope, payment status, renewal timing, and contacts. No accounting system, just clarity.");
    html += '<div class="card"><dl class="kv">' +
      "<dt>Current tier</dt><dd>" + esc(b.tier) + " (" + esc(b.price) + ")</dd>" +
      "<dt>Billing period</dt><dd>" + esc(b.period) + "</dd>" +
      "<dt>Invoice status</dt><dd>" + esc(b.invoiceStatus) + "</dd>" +
      "<dt>Renewal</dt><dd>" + esc(b.renewal) + "</dd>" +
      "<dt>Notice deadline</dt><dd>" + esc(b.noticeDate) + "</dd>" +
      "<dt>Optional modules</dt><dd>" + esc(b.modules) + "</dd>" +
      "<dt>Decision maker</dt><dd>" + esc(b.decisionMaker) + "</dd>" +
      "<dt>Account owner</dt><dd>" + esc(b.accountOwner) + "</dd></dl>" +
      '<br><button class="btn btn-sm btn-ghost" data-demo>Download latest invoice</button></div>';
    return html;
  }

  /* ---------- director views ---------- */

  function dPortfolio(d) {
    var html = viewHead("Portfolio health", "Minimum operating and commercial signals by tenant. No client business records are pooled.");
    html += '<div class="seg-note"><span>&#9432;</span><span><strong>Tenant segregation is enforced.</strong> A client login sees exactly one tenant. This director view is internal only and rolls up minimum signals, never client business records, configurations, or decision history.</span></div>';
    html += '<div class="card"><table><tr><th>Tenant</th><th>Health</th><th>Tier</th><th>Open exceptions</th><th>Overdue approvals</th><th>Operator hrs</th><th>Last briefing</th><th>Sentiment</th></tr>';
    d.tenants.forEach(function (x) {
      html += "<tr><td><strong>" + esc(x.name) + "</strong></td><td>" + pill(x.stateLabel) + "</td><td>" + esc(x.tier) + "</td>" +
        "<td>" + x.openExceptions + "</td><td>" + x.overdueApprovals + "</td><td class='mono'>" + x.operatorHours + "</td>" +
        "<td>" + esc(x.lastBriefing) + "</td><td>" + esc(x.sentiment) + "</td></tr>";
    });
    html += "</table></div>";
    return html;
  }

  function dAging(d) {
    var html = viewHead("Exception and approval aging", "Intervene before unresolved work becomes a stalled outcome.");
    html += '<div class="card"><table><tr><th>Tenant</th><th>Item</th><th>Type</th><th>Opened</th><th>Age</th><th>Severity</th><th>Threshold</th><th>Status</th></tr>';
    d.aging.forEach(function (a) {
      html += "<tr><td>" + esc(a.tenant) + "</td><td>" + esc(a.item) + "</td><td>" + esc(a.type) + "</td><td>" + esc(a.opened) + "</td>" +
        "<td class='mono'>" + a.ageDays + "d</td><td>" + pill(a.severity) + "</td><td class='small'>" + esc(a.threshold) + "</td><td>" + pill(a.status) + "</td></tr>";
    });
    html += "</table></div>";
    html += '<div class="notice">Escalation thresholds are set by severity and service window in each managed agreement.</div>';
    return html;
  }

  function dHours(d) {
    var html = viewHead("Operator hours vs tier", "Detect hidden manual work, scope creep, and staffing pressure.");
    d.tenants.forEach(function (x) {
      var pct = Math.min(100, Math.round((x.operatorHours / x.bandHigh) * 100));
      var over = x.operatorHours > x.bandHigh;
      html += '<div class="card" style="margin-bottom:1rem"><div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap"><h3>' + esc(x.name) + "</h3>" +
        '<span class="mono"><strong>' + x.operatorHours + " hrs</strong> <span class='small'>vs " + x.bandLow + " to " + x.bandHigh + " hr band</span></span></div>" +
        '<div class="bar"><span class="' + (over ? "over" : "") + '" style="width:' + pct + '%"></span></div>' +
        '<p class="small" style="margin-top:0.4rem">' + (over ? "Above the tier planning band. Review for scope creep or re-tiering." : "Within the tier planning band.") + " Agent effort and founder governance tracked separately.</p></div>";
    });
    return html;
  }

  function dIncidents(d) {
    var inc = d.incidents;
    var max = Math.max.apply(null, inc.minor.concat(inc.major).concat([1]));
    var html = viewHead("Incident trend", "Find recurring failure patterns and control weakness.");
    html += '<div class="card"><h3>Incidents per month</h3><div class="trend">';
    inc.months.forEach(function (m, i) {
      var h1 = Math.round((inc.minor[i] / max) * 80) + 4, h2 = Math.round((inc.major[i] / max) * 80) + 4;
      html += '<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;align-items:stretch;height:90px">' +
        '<div class="tbar sev" style="height:' + h2 + 'px" title="Major: ' + inc.major[i] + '"></div>' +
        '<div class="tbar" style="height:' + h1 + 'px" title="Minor: ' + inc.minor[i] + '"></div></div>';
    });
    html += '</div><div class="trend-labels">' + inc.months.map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("") + "</div>";
    html += '<p class="small" style="margin-top:0.8rem"><span class="pill bad">Major</span> <span class="pill good">Minor</span></p>';
    html += '<p class="small">' + esc(inc.note) + "</p></div>";
    return html;
  }

  function dMargin(d) {
    var html = viewHead("Margin per client", "Directional. Tests whether the managed boundary is economically sustainable.");
    html += '<div class="grid c4">';
    d.tenants.forEach(function (x) {
      html += '<div class="card"><div class="stat-label">' + esc(x.name) + '</div><div class="stat">' + Math.round(x.margin * 100) + '%</div><div class="small">' + esc(x.marginNote) + "<br>Fee $" + x.fee.toLocaleString() + " / mo illustrative</div></div>";
    });
    html += "</div><br>";
    html += '<div class="notice">Contribution figures subtract operator labor only, not software, AI usage, overhead, or founder governance. Homi internal economics are never shown to clients.</div>';
    return html;
  }

  function dRenewals(d) {
    var html = viewHead("Renewal posture", "Prevent avoidable surprises. Ground renewal in visible value.");
    html += '<div class="card"><table><tr><th>Tenant</th><th>Term</th><th>Notice deadline in</th><th>Value evidence</th><th>Sentiment</th><th>Path</th></tr>';
    var paths = { harvest: "Continue", private: "Continue", hanmudo: "Continue", homi: "Continuous", pond: "Continue" };
    d.tenants.forEach(function (x) {
      html += "<tr><td><strong>" + esc(x.name) + "</strong></td><td>" + esc(x.renewal) + "</td><td>" + esc(x.noticeIn) + "</td>" +
        "<td class='small'>Last briefing " + esc(x.lastBriefing) + "</td><td>" + esc(x.sentiment) + "</td><td>" + pill(paths[x.id] || "Continue") + "</td></tr>";
    });
    html += "</table></div>";
    return html;
  }

  function dCapacity(d) {
    var c = d.capacity;
    var html = viewHead("Capacity forecast", "Protect service quality before selling more work.");
    html += '<div class="grid c2"><div class="card"><h3>Operator load</h3>' +
      '<div class="stat">' + c.loadPct + '%</div><p class="small">' + esc(c.detail) + "</p>" +
      '<div class="bar"><span style="width:' + c.loadPct + '%"></span></div></div>' +
      '<div class="card"><h3>Forward view</h3><dl class="kv"><dt>Staffed operators</dt><dd>' + c.operators + "</dd>" +
      "<dt>Assigned clients</dt><dd>" + c.assignedClients + "</dd><dt>Onboarding</dt><dd>" + esc(c.onboarding) + "</dd>" +
      "<dt>Founder spillover</dt><dd>" + esc(c.founderSpillover) + "</dd></dl></div></div>";
    return html;
  }

  function dBacklog(d) {
    var html = viewHead("Method improvement backlog", "Reusable method improves. Client facts never cross tenants.");
    html += '<div class="card"><table><tr><th>Sanitized pattern</th><th>Component</th><th>Evidence</th><th>Owner</th><th>Priority</th><th>Status</th></tr>';
    d.backlog.forEach(function (b) {
      html += "<tr><td>" + esc(b.pattern) + "</td><td>" + esc(b.component) + "</td><td>" + esc(b.evidence) + "</td><td>" + esc(b.owner) + "</td>" +
        "<td>" + pill(b.priority) + "</td><td>" + esc(b.status) + "</td></tr>";
    });
    html += "</table></div>";
    html += '<div class="notice">The no-crossing rule: schemas, templates, runbooks, and heuristics may improve. Client facts, data, configurations, decisions, and operating history never cross tenants.</div>';
    return html;
  }

  /* ---------- render dispatch ---------- */

  var CLIENT_VIEWS = { overview: vOverview, health: vHealth, decisions: vDecisions, exceptions: vExceptions, measures: vMeasures, briefings: vBriefings, requests: vRequests, account: vAccount };
  var DIRECTOR_VIEWS = { portfolio: dPortfolio, aging: dAging, hours: dHours, incidents: dIncidents, margin: dMargin, renewals: dRenewals, capacity: dCapacity, backlog: dBacklog };

  function renderView() {
    var html;
    if (state.role === "client") {
      html = (CLIENT_VIEWS[state.view] || vOverview)(tenant());
    } else {
      html = (DIRECTOR_VIEWS[state.view] || dPortfolio)(window.HOMI_DIRECTOR);
    }
    $("#main").innerHTML = html;
    var demos = document.querySelectorAll("[data-demo]");
    for (var i = 0; i < demos.length; i++) {
      demos[i].addEventListener("click", function () {
        toast("Demo only. In the live portal this action is recorded and governed.");
      });
    }
  }

  /* ---------- boot ---------- */

  function boot() {
    $("#viewDemo").addEventListener("click", function () {
      $("#login").classList.add("hidden");
      $("#app").style.display = "block";
      renderShell();
      window.scrollTo(0, 0);
    });
    $("#roleClient").addEventListener("click", function () {
      state.role = "client"; state.view = "overview"; renderShell();
    });
    $("#roleDirector").addEventListener("click", function () {
      state.role = "director"; state.view = "portfolio"; renderShell();
    });
    var tbtns = document.querySelectorAll(".login-tenant-btns .tenant-btn");
    for (var i = 0; i < tbtns.length; i++) {
      tbtns[i].addEventListener("click", function () {
        state.tenant = this.dataset.tenant;
        var all = document.querySelectorAll(".login-tenant-btns .tenant-btn");
        for (var j = 0; j < all.length; j++) {
          all[j].classList.toggle("active", all[j] === this);
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
