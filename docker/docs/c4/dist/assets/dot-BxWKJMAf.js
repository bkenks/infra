var e=e=>{switch(e){case`index`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    operator [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Administers the fleet through Komodo, Ansible<BR/>and the forges.</FONT></TD></TR></TABLE>>,
        likec4_id=operator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Configuration Management</FONT>>,
        likec4_id=configMgmt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    operator -> configmgmt [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs playbooks</FONT></TD></TR></TABLE>>,
        likec4_id="3tykqb",
        style=dashed];
    www [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.389,
        label=<<FONT POINT-SIZE="20">Public Internet</FONT>>,
        likec4_id=www,
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    operator -> www [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">browses</FONT></TD></TR></TABLE>>,
        likec4_id="1vmrpb1",
        style=dashed];
    household [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Household Users</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Consumes the media, document and photo<BR/>workloads.</FONT></TD></TR></TABLE>>,
        likec4_id=household,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    household -> www [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">browses</FONT></TD></TR></TABLE>>,
        likec4_id=kplxti,
        minlen=1,
        style=dashed];
    dashboard [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Dashboard</FONT>>,
        likec4_id=dashboard,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    idp [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Identity Provider</FONT>>,
        likec4_id=idp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dashboard -> idp [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authenticates users</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ OIDC ]</FONT></TD></TR></TABLE>>,
        likec4_id="16it237",
        minlen=1,
        style=dashed];
    overlaynet [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Overlay Network</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Flat addressing across every host, wherever<BR/>it sits.</FONT></TD></TR></TABLE>>,
        likec4_id=overlayNet,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt -> overlaynet [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">enrols the host in the tailnet</FONT></TD></TR></TABLE>>,
        likec4_id="9rl8ja",
        style=dashed];
    seccodeforge [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Secondary Code Forge</FONT>>,
        likec4_id=secCodeForge,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt -> seccodeforge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">clones infra.stacks</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ SSH ]</FONT></TD></TR></TABLE>>,
        likec4_id="2vjob6",
        minlen=1,
        style=dashed];
    passwdman [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Password Manager</FONT>>,
        likec4_id=passwdMan,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt -> passwdman [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads machine identities and the tailnet<BR/>auth key</FONT></TD></TR></TABLE>>,
        likec4_id=ohaoj,
        minlen=1,
        style=dashed];
    databak [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Data Backup Coordinator</FONT>>,
        likec4_id=dataBak,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt -> databak [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">restore gate</FONT></TD></TR></TABLE>>,
        likec4_id=ywlwjv,
        style=dashed];
    dbbak [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Database Backup Coordinator</FONT>>,
        likec4_id=dbBak,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt -> dbbak [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">restore gate</FONT></TD></TR></TABLE>>,
        likec4_id=iaiqfx,
        style=dashed];
    gateway [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">One public entry point for every published<BR/>route.</FONT></TD></TR></TABLE>>,
        likec4_id=gateway,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt -> gateway [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">installs the newt systemd unit</FONT></TD></TR></TABLE>>,
        likec4_id="1y7sc4r",
        style=dashed];
    secretsman [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Secrets Manager</FONT>>,
        likec4_id=secretsMan,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt -> secretsman [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">bootstraps the control plane</FONT></TD></TR></TABLE>>,
        likec4_id=hp3mdw,
        style=dashed];
    containerorc [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Container Orchestrator</FONT>>,
        likec4_id=containerOrc,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt -> containerorc [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=zge8a2,
        style=dashed];
    www -> gateway [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTPS :443, HTTP :80</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=l7q0p1,
        style=dashed];
    overlaynet -> idp [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes on the tailnet</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ shared__ts-gateway ]</FONT></TD></TR></TABLE>>,
        likec4_id="198r9oy",
        style=dashed];
    overlaynet -> secretsman [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes on the tailnet</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ shared__ts-gateway ]</FONT></TD></TR></TABLE>>,
        likec4_id="1747xu0",
        style=dashed];
    databak -> containerorc [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1pu4vt7",
        style=dotted];
    erp [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">ERP</FONT>>,
        likec4_id=erp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dbbak -> erp [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id=llrfk3,
        minlen=1,
        style=dotted];
    phovid [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Personal Photo Storage</FONT>>,
        likec4_id=phovid,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dbbak -> phovid [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1ajs6zs",
        minlen=1,
        style=dotted];
    dbbak -> idp [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id=llrp7d,
        style=dotted];
    dbbak -> secretsman [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id=fo6b1f,
        style=dotted];
    docarc [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Document Archive</FONT>>,
        likec4_id=docArc,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dbbak -> docarc [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id=xs622k,
        style=dotted];
    dbbak -> containerorc [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1n5gnbx",
        style=dotted];
    shareddb [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shared Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">One Postgres for the tenants that do not need<BR/>their own.</FONT></TD></TR></TABLE>>,
        likec4_id=sharedDb,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dbbak -> shareddb [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1iocoff",
        style=dotted];
    pricodeforge [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Primary Code Forge</FONT>>,
        likec4_id=priCodeForge,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dbbak -> pricodeforge [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1k0zejf",
        style=dotted];
    dns [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">DNS and Certificates</FONT>>,
        likec4_id=dns,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> dns [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">solves ACME DNS-01</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ ACME ]</FONT></TD></TR></TABLE>>,
        likec4_id="1qz03zf",
        minlen=1,
        style=dashed];
    gateway -> idp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authentik.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1qz06pb",
        style=dashed];
    ci [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Continuous Integration</FONT>>,
        likec4_id=ci,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> ci [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">peck.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=etmk1k,
        style=dashed];
    agentgw [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Agent Gateway</FONT>>,
        likec4_id=agentGw,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> agentgw [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">komodo-mcp.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=sxtb2z,
        style=dashed];
    gateway -> secretsman [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">infisical.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1x1spn9",
        style=dashed];
    prjman [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Project Manager</FONT>>,
        likec4_id=prjMan,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> prjman [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">openprj.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1dgxtqw",
        style=dashed];
    docsign [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Document Signing</FONT>>,
        likec4_id=docsign,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> docsign [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">docuseal.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1qaftc9",
        style=dashed];
    gateway -> docarc [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">paper.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1q5m34a",
        style=dashed];
    medialib [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Media Library</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Seven products in one stack. Each is its own<BR/>application.</FONT></TD></TR></TABLE>>,
        likec4_id=mediaLib,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> medialib [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="18hkssx",
        minlen=1,
        style=dashed];
    gameservers [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Game Servers</FONT>>,
        likec4_id=gameServers,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> gameservers [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">raw TCP :18022</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id="10bxsfe",
        style=dashed];
    gateway -> containerorc [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">komo.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=ibb2i3,
        style=dashed];
    email [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Transactional Email</FONT>>,
        likec4_id=email,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> email [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">SMTP :465</FONT></TD></TR></TABLE>>,
        likec4_id=vzz7lq,
        style=dashed];
    fileexp [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">File Explorer</FONT>>,
        likec4_id=fileExp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> fileexp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTP :18450</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=dvflqx,
        style=dashed];
    gateway -> pricodeforge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fj.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="14lglf1",
        style=dashed];
    ci -> pricodeforge [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">OAuth2 login and repository access</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ OIDC ]</FONT></TD></TR></TABLE>>,
        likec4_id="5djiu7",
        style=dashed];
    agentgw -> containerorc [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Komodo API</FONT></TD></TR></TABLE>>,
        likec4_id="1ebb49m",
        style=dashed];
    secretsman -> email [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">SMTP :465</FONT></TD></TR></TABLE>>,
        likec4_id="28pn1d",
        style=dashed];
    prjman -> shareddb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>,
        likec4_id="1x38gen",
        style=dashed];
    docsign -> shareddb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>,
        likec4_id="1geew72",
        style=dashed];
    gameservers -> fileexp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">stores its world</FONT></TD></TR></TABLE>>,
        likec4_id=r0uhq1,
        style=dashed];
    containerorc -> pricodeforge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">syncs stack definitions</FONT></TD></TR></TABLE>>,
        likec4_id="1smy3e4",
        style=dashed];
    alerting [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Alerting</FONT>>,
        likec4_id=alerting,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    containerorc -> alerting [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends alerts</FONT></TD></TR></TABLE>>,
        likec4_id="86iyvx",
        minlen=1,
        style=dashed];
}
`;case`secrets`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=secrets,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_secretsman {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>SECRETS MANAGER</B></FONT>>,
            likec4_depth=1,
            likec4_id=secretsMan,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        infisical [height=2.5,
            label=<<FONT POINT-SIZE="20">Infisical</FONT>>,
            likec4_id="secretsMan.infisical",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    overlaynet [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Overlay Network</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Flat addressing across every host, wherever<BR/>it sits.</FONT></TD></TR></TABLE>>,
        likec4_id=overlayNet,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    overlaynet -> infisical [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=ynqmre,
        minlen=1,
        style=dashed];
    gateway [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">One public entry point for every published<BR/>route.</FONT></TD></TR></TABLE>>,
        likec4_id=gateway,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1i0v1uv",
        minlen=1,
        style=dotted];
    idp [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Identity Provider</FONT>>,
        likec4_id=idp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    idp -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/authentik</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="1x4d8wy",
        minlen=1,
        style=dotted];
    containerorc [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Container Orchestrator</FONT>>,
        likec4_id=containerOrc,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    containerorc -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/komodo</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=z0sy7a,
        minlen=1,
        style=dotted];
    configmgmt [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Configuration Management</FONT>>,
        likec4_id=configMgmt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt -> infisical [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=r5nsme,
        minlen=1,
        style=dotted];
    pricodeforge [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Primary Code Forge</FONT>>,
        likec4_id=priCodeForge,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pricodeforge -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/forgejo</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=srcbk,
        minlen=1,
        style=dotted];
    ci [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Continuous Integration</FONT>>,
        likec4_id=ci,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    ci -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/woodpecker</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=zxtdsl,
        minlen=1,
        style=dotted];
    agentgw [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Agent Gateway</FONT>>,
        likec4_id=agentGw,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    agentgw -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/komodo-mcp</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=eua4nq,
        minlen=1,
        style=dotted];
    databak [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Data Backup Coordinator</FONT>>,
        likec4_id=dataBak,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    databak -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/zerobyte</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="19ltljb",
        minlen=1,
        style=dotted];
    dbbak [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Database Backup Coordinator</FONT>>,
        likec4_id=dbBak,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dbbak -> infisical [arrowhead=diamond,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/databasus</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="74y9",
        minlen=1,
        style=dotted];
    dashboard [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Dashboard</FONT>>,
        likec4_id=dashboard,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dashboard -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/homarr</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="1tt3uzf",
        minlen=1,
        style=dotted];
    shareddb [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shared Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">One Postgres for the tenants that do not need<BR/>their own.</FONT></TD></TR></TABLE>>,
        likec4_id=sharedDb,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    shareddb -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/postgres</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=zel4wg,
        minlen=1,
        style=dotted];
    prjman [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Project Manager</FONT>>,
        likec4_id=prjMan,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    prjman -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/openproject</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="1yhhf3p",
        minlen=1,
        style=dotted];
    docsign [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Document Signing</FONT>>,
        likec4_id=docsign,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    docsign -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/docuseal</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="1vr8iys",
        minlen=1,
        style=dotted];
    docarc [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Document Archive</FONT>>,
        likec4_id=docArc,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    docarc -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/paperless</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=m8kaxz,
        minlen=1,
        style=dotted];
    erp [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">ERP</FONT>>,
        likec4_id=erp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    erp -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="18zq3ug",
        minlen=1,
        style=dotted];
    phovid [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Personal Photo Storage</FONT>>,
        likec4_id=phovid,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    phovid -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/immich</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="12yf03",
        minlen=1,
        style=dotted];
    medialib [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Media Library</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Seven products in one stack. Each is its own<BR/>application.</FONT></TD></TR></TABLE>>,
        likec4_id=mediaLib,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    medialib -> infisical [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/stream</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=g54yk,
        minlen=1,
        style=dotted];
}
`;case`ingress`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=ingress,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_gateway {
        graph [color="#1c3021",
            fillcolor="#29472f",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>GATEWAY</B></FONT>>,
            likec4_depth=2,
            likec4_id=gateway,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_pangolin {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PANGOLIN</B></FONT>>,
                likec4_depth=1,
                likec4_id="gateway.pangolin",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            traefik [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="gateway.pangolin",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Traefik</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reverse proxy. network_mode: service:gerbil.</FONT></TD></TR></TABLE>>,
                likec4_id="gateway.pangolin.traefik",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            server [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="gateway.pangolin",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Pangolin Server</FONT>>,
                likec4_id="gateway.pangolin.server",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            gerbil [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="gateway.pangolin",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gerbil</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Owns the host ports. Traefik runs in its<BR/>network namespace.</FONT></TD></TR></TABLE>>,
                likec4_id="gateway.pangolin.gerbil",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
        }
        newt [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Newt</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site connector, installed per host as a<BR/>systemd unit by infra.ansible.</FONT></TD></TR></TABLE>>,
            likec4_id="gateway.newt",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_dns {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>DNS AND CERTIFICATES</B></FONT>>,
            likec4_depth=1,
            likec4_id=dns,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        cloudflare [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Cloudflare</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Authoritative DNS, and the ACME DNS-01<BR/>provider Traefik solves against.</FONT></TD></TR></TABLE>>,
            likec4_id="dns.cloudflare",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    operator [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Administers the fleet through Komodo, Ansible<BR/>and the forges.</FONT></TD></TR></TABLE>>,
        likec4_id=operator,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    www [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.389,
        label=<<FONT POINT-SIZE="20">Public Internet</FONT>>,
        likec4_id=www,
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    operator -> www [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">browses</FONT></TD></TR></TABLE>>,
        likec4_id="1vmrpb1",
        minlen=1,
        style=dashed,
        weight=3];
    household [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Household Users</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Consumes the media, document and photo<BR/>workloads.</FONT></TD></TR></TABLE>>,
        likec4_id=household,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    household -> www [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">browses</FONT></TD></TR></TABLE>>,
        likec4_id=kplxti,
        minlen=1,
        style=dashed,
        weight=3];
    www -> gerbil [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTPS :443, HTTP :80</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=wvupvy,
        style=dashed];
    traefik -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authorizes each request</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Badger middleware ]</FONT></TD></TR></TABLE>>,
        likec4_id=sj8gdl,
        style=dashed,
        weight=4];
    traefik -> gerbil [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">routes into the tunnel</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=frju2j,
        style=dashed];
    traefik -> cloudflare [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">solves ACME DNS-01</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ ACME ]</FONT></TD></TR></TABLE>>,
        likec4_id=t6egpe,
        minlen=1,
        style=dashed];
    server -> gerbil [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">pushes remote config</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTP :3001 ]</FONT></TD></TR></TABLE>>,
        likec4_id=shm0wo,
        style=dashed,
        weight=3];
    gerbil -> traefik [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">shares the network namespace</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=skjmqj,
        style=dashed];
    gerbil -> newt [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WireGuard :51820</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ WireGuard ]</FONT></TD></TR></TABLE>>,
        likec4_id=dritlz,
        minlen=1,
        style=dashed,
        weight=2];
}
`;case`identity`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=identity,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ci {
        graph [color="#1c3021",
            fillcolor="#29472f",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>CONTINUOUS INTEGRATION</B></FONT>>,
            likec4_depth=2,
            likec4_id=ci,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_woodpecker {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>WOODPECKER</B></FONT>>,
                likec4_depth=1,
                likec4_id="ci.woodpecker",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            agent [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Runs pipeline steps as sibling containers on<BR/>the host docker daemon.</FONT></TD></TR></TABLE>>,
                likec4_id="ci.woodpecker.agent",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            server_1 [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Server</FONT>>,
                likec4_id="ci.woodpecker.server",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
        }
    }
    subgraph cluster_idp {
        graph [color="#1c3021",
            fillcolor="#29472f",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>IDENTITY PROVIDER</B></FONT>>,
            likec4_depth=2,
            likec4_id=idp,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_authentik {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>AUTHENTIK</B></FONT>>,
                likec4_depth=1,
                likec4_id="idp.authentik",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            worker [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="idp.authentik",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Worker</FONT>>,
                likec4_id="idp.authentik.worker",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            server [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="idp.authentik",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Server</FONT>>,
                likec4_id="idp.authentik.server",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            db [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="idp.authentik",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">PostgreSQL</FONT></TD></TR></TABLE>>,
                likec4_id="idp.authentik.db",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
    }
    gateway [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">One public entry point for every published<BR/>route.</FONT></TD></TR></TABLE>>,
        likec4_id=gateway,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authentik.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1yj4o0v",
        style=dashed];
    gateway -> server_1 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">peck.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1xusmf8",
        style=dashed,
        weight=3];
    server_2 [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Server</FONT>>,
        likec4_id="priCodeForge.forgejo.server",
        likec4_level=0,
        margin="0.5,0.223",
        width=4.584];
    gateway -> server_2 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fj.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1xl7vqs",
        style=dashed,
        weight=3];
    dashboard [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Dashboard</FONT>>,
        likec4_id=dashboard,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dashboard -> server [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authenticates users</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ OIDC ]</FONT></TD></TR></TABLE>>,
        likec4_id="1m4a6xv",
        minlen=1,
        style=dashed];
    containerorc [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Container Orchestrator</FONT>>,
        likec4_id=containerOrc,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    containerorc -> server_2 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">syncs stack definitions</FONT></TD></TR></TABLE>>,
        likec4_id="1l49iol",
        minlen=1,
        style=dashed,
        weight=3];
    agent -> server_1 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">polls for work</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ gRPC :9000 ]</FONT></TD></TR></TABLE>>,
        likec4_id="12oafqu",
        minlen=0,
        style=dashed,
        weight=5];
    worker -> db [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>,
        likec4_id=g4s1ei,
        minlen=1,
        style=dashed];
    server -> db [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>,
        likec4_id=oun84p,
        style=dashed,
        weight=3];
    server_1 -> server_2 [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">OAuth2 login and repository access</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ OIDC ]</FONT></TD></TR></TABLE>>,
        likec4_id="1uk9tq2",
        style=dashed];
}
`;case`state`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=state,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=LR,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_dbbak {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>DATABASE BACKUP COORDINATOR</B></FONT>>,
            likec4_depth=1,
            likec4_id=dbBak,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        databasus [height=2.5,
            label=<<FONT POINT-SIZE="20">Databasus</FONT>>,
            likec4_id="dbBak.databasus",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_databak {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>DATA BACKUP COORDINATOR</B></FONT>>,
            likec4_depth=1,
            likec4_id=dataBak,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        zerobyte [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Zerobyte</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Restic</FONT></TD></TR></TABLE>>,
            likec4_id="dataBak.zerobyte",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_idp {
        graph [color="#1e3524",
            fillcolor="#2c4e32",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>IDENTITY PROVIDER</B></FONT>>,
            likec4_depth=1,
            likec4_id=idp,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        db [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">PostgreSQL</FONT></TD></TR></TABLE>>,
            likec4_id="idp.authentik.db",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_pricodeforge {
        graph [color="#1e3524",
            fillcolor="#2c4e32",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>PRIMARY CODE FORGE</B></FONT>>,
            likec4_depth=1,
            likec4_id=priCodeForge,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        db_1 [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">PostgreSQL</FONT></TD></TR></TABLE>>,
            likec4_id="priCodeForge.forgejo.db",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_secretsman {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>SECRETS MANAGER</B></FONT>>,
            likec4_depth=1,
            likec4_id=secretsMan,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        db_2 [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">PostgreSQL</FONT></TD></TR></TABLE>>,
            likec4_id="secretsMan.infisical.db",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_shareddb {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>SHARED DATABASE</B></FONT>>,
            likec4_depth=1,
            likec4_id=sharedDb,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        db_3 [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<FONT POINT-SIZE="20">Database</FONT>>,
            likec4_id="sharedDb.postgres.db",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_docarc {
        graph [color="#2a2490",
            fillcolor="#2225aa",
            label=<<FONT POINT-SIZE="11" COLOR="#c7d2feb3"><B>DOCUMENT ARCHIVE</B></FONT>>,
            likec4_depth=1,
            likec4_id=docArc,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        db_4 [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">PostgreSQL</FONT></TD></TR></TABLE>>,
            likec4_id="docArc.paperless.db",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_erp {
        graph [color="#2a2490",
            fillcolor="#2225aa",
            label=<<FONT POINT-SIZE="11" COLOR="#c7d2feb3"><B>ERP</B></FONT>>,
            likec4_depth=1,
            likec4_id=erp,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        db_5 [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">MariaDB</FONT></TD></TR></TABLE>>,
            likec4_id="erp.erpnext.db",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_phovid {
        graph [color="#2a2490",
            fillcolor="#2225aa",
            label=<<FONT POINT-SIZE="11" COLOR="#c7d2feb3"><B>PERSONAL PHOTO STORAGE</B></FONT>>,
            likec4_depth=1,
            likec4_id=phovid,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        db_6 [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">PostgreSQL</FONT></TD></TR></TABLE>>,
            likec4_id="phovid.immich.db",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_containerorc {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>CONTAINER ORCHESTRATOR</B></FONT>>,
            likec4_depth=1,
            likec4_id=containerOrc,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        db_7 [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">MongoDB</FONT></TD></TR></TABLE>>,
            likec4_id="containerOrc.komodo.db",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        volumes [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Docker Volumes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">Filesystem</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">/var/lib/docker/volumes on every managed<BR/>node.</FONT></TD></TR></TABLE>>,
            likec4_id="containerOrc.komodo.volumes",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    shared [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shared File Tree</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">Filesystem</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">/rootless-srv/file-browser-quantum/shared</FONT></TD></TR></TABLE>>,
        likec4_id="fileExp.fbq.shared",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    databasus -> db [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id=rxlnj6,
        minlen=1,
        style=dotted];
    databasus -> db_1 [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1tr9q6h",
        minlen=1,
        style=dotted];
    databasus -> db_2 [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id=w1uxap,
        minlen=1,
        style=dotted];
    databasus -> db_3 [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1csd9ry",
        minlen=1,
        style=dotted];
    databasus -> db_4 [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id=psunwt,
        minlen=1,
        style=dotted];
    databasus -> db_5 [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1chxtql",
        minlen=1,
        style=dotted];
    databasus -> db_6 [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="14u7pyl",
        minlen=1,
        style=dotted];
    databasus -> db_7 [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="4wej0e",
        minlen=1,
        style=dotted];
    zerobyte -> volumes [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id=p4z00r,
        style=dotted,
        weight=4];
}
`;case`apps`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=apps,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    gateway [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">One public entry point for every published<BR/>route.</FONT></TD></TR></TABLE>>,
        likec4_id=gateway,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    prjman [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Project Manager</FONT>>,
        likec4_id=prjMan,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> prjman [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">openprj.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1dgxtqw",
        style=dashed];
    docsign [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Document Signing</FONT>>,
        likec4_id=docsign,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> docsign [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">docuseal.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1qaftc9",
        style=dashed];
    docarc [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Document Archive</FONT>>,
        likec4_id=docArc,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> docarc [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">paper.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1q5m34a",
        style=dashed];
    medialib [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Media Library</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Seven products in one stack. Each is its own<BR/>application.</FONT></TD></TR></TABLE>>,
        likec4_id=mediaLib,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> medialib [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="18hkssx",
        style=dashed];
    gameservers [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Game Servers</FONT>>,
        likec4_id=gameServers,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> gameservers [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">raw TCP :18022</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id="10bxsfe",
        style=dashed];
    fileexp [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">File Explorer</FONT>>,
        likec4_id=fileExp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> fileexp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTP :18450</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=dvflqx,
        style=dashed];
    secretsman [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Secrets Manager</FONT>>,
        likec4_id=secretsMan,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> secretsman [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1x1spn9",
        style=dotted];
    erp [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">ERP</FONT>>,
        likec4_id=erp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    erp -> secretsman [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=xmv4ne,
        minlen=1,
        style=dotted];
    phovid [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Personal Photo Storage</FONT>>,
        likec4_id=phovid,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    phovid -> secretsman [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/immich</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="1dwfxc1",
        minlen=1,
        style=dotted];
    shareddb [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shared Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">One Postgres for the tenants that do not need<BR/>their own.</FONT></TD></TR></TABLE>>,
        likec4_id=sharedDb,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    prjman -> shareddb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>,
        likec4_id="1x38gen",
        style=dashed];
    prjman -> secretsman [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/openproject</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=pqa9xj,
        style=dotted];
    docsign -> shareddb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>,
        likec4_id="1geew72",
        style=dashed];
    docsign -> secretsman [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/docuseal</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="1j22zqu",
        style=dotted];
    docarc -> secretsman [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/paperless</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="1wc7ixh",
        style=dotted];
    medialib -> secretsman [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/stream</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="6j5usu",
        style=dotted];
    gameservers -> fileexp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">stores its world</FONT></TD></TR></TABLE>>,
        likec4_id=r0uhq1,
        style=dashed];
    shareddb -> secretsman [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/postgres</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="14uo86a",
        style=dotted];
}
`;case`gatewayDetail`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=gatewayDetail,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_gateway {
        graph [color="#1c3021",
            fillcolor="#29472f",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>GATEWAY</B></FONT>>,
            likec4_depth=2,
            likec4_id=gateway,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_pangolin {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PANGOLIN</B></FONT>>,
                likec4_depth=1,
                likec4_id="gateway.pangolin",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            traefik [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="gateway.pangolin",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Traefik</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reverse proxy. network_mode: service:gerbil.</FONT></TD></TR></TABLE>>,
                likec4_id="gateway.pangolin.traefik",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            server [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="gateway.pangolin",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Pangolin Server</FONT>>,
                likec4_id="gateway.pangolin.server",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            gerbil [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="gateway.pangolin",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gerbil</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Owns the host ports. Traefik runs in its<BR/>network namespace.</FONT></TD></TR></TABLE>>,
                likec4_id="gateway.pangolin.gerbil",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
        }
        newt [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Newt</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site connector, installed per host as a<BR/>systemd unit by infra.ansible.</FONT></TD></TR></TABLE>>,
            likec4_id="gateway.newt",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    configmgmt [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Configuration Management</FONT>>,
        likec4_id=configMgmt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt -> newt [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">installs the newt systemd unit</FONT></TD></TR></TABLE>>,
        likec4_id=ga9bd9,
        minlen=1,
        style=dashed];
    www [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.389,
        label=<<FONT POINT-SIZE="20">Public Internet</FONT>>,
        likec4_id=www,
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    www -> gerbil [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTPS :443, HTTP :80</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=wvupvy,
        minlen=1,
        style=dashed];
    dns [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">DNS and Certificates</FONT>>,
        likec4_id=dns,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    traefik -> dns [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">solves ACME DNS-01</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ ACME ]</FONT></TD></TR></TABLE>>,
        likec4_id=b471e9,
        minlen=1,
        style=dashed];
    traefik -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authorizes each request</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Badger middleware ]</FONT></TD></TR></TABLE>>,
        likec4_id=sj8gdl,
        style=dashed,
        weight=3];
    traefik -> gerbil [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">routes into the tunnel</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=frju2j,
        style=dashed];
    email [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Transactional Email</FONT>>,
        likec4_id=email,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    server -> email [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">SMTP :465</FONT></TD></TR></TABLE>>,
        likec4_id="1rpc7qf",
        minlen=1,
        style=dashed];
    server -> gerbil [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">pushes remote config</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTP :3001 ]</FONT></TD></TR></TABLE>>,
        likec4_id=shm0wo,
        style=dashed,
        weight=3];
    gerbil -> traefik [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">shares the network namespace</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=skjmqj,
        style=dashed];
    gerbil -> newt [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WireGuard :51820</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ WireGuard ]</FONT></TD></TR></TABLE>>,
        likec4_id=dritlz,
        style=dashed,
        weight=2];
    idp [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Identity Provider</FONT>>,
        likec4_id=idp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    newt -> idp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authentik.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="44v4rt",
        minlen=1,
        style=dashed];
    containerorc [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Container Orchestrator</FONT>>,
        likec4_id=containerOrc,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    newt -> containerorc [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">komo.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=zl8w4t,
        minlen=1,
        style=dashed];
    pricodeforge [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Primary Code Forge</FONT>>,
        likec4_id=priCodeForge,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    newt -> pricodeforge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fj.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="18ans8b",
        minlen=1,
        style=dashed];
    ci [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Continuous Integration</FONT>>,
        likec4_id=ci,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    newt -> ci [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">peck.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="6kz4fy",
        minlen=1,
        style=dashed];
    agentgw [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Agent Gateway</FONT>>,
        likec4_id=agentGw,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    newt -> agentgw [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">komodo-mcp.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="9i46ot",
        minlen=1,
        style=dashed];
    secretsman [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Secrets Manager</FONT>>,
        likec4_id=secretsMan,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    newt -> secretsman [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">infisical.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="6izehf",
        minlen=1,
        style=dashed];
    prjman [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Project Manager</FONT>>,
        likec4_id=prjMan,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    newt -> prjman [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">openprj.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1n2smxq",
        minlen=1,
        style=dashed];
    docsign [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Document Signing</FONT>>,
        likec4_id=docsign,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    newt -> docsign [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">docuseal.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=jqytr,
        minlen=1,
        style=dashed];
    docarc [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Document Archive</FONT>>,
        likec4_id=docArc,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    newt -> docarc [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">paper.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1uqpz4c",
        minlen=1,
        style=dashed];
    medialib [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Media Library</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Seven products in one stack. Each is its own<BR/>application.</FONT></TD></TR></TABLE>>,
        likec4_id=mediaLib,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    newt -> medialib [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1c8z8nr",
        minlen=1,
        style=dashed];
    gameservers [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Game Servers</FONT>>,
        likec4_id=gameServers,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    newt -> gameservers [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">raw TCP :18022</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id="6h2dkc",
        minlen=1,
        style=dashed];
    fileexp [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">File Explorer</FONT>>,
        likec4_id=fileExp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    newt -> fileexp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTP :18450</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1hnmcbj",
        minlen=1,
        style=dashed];
}
`;case`idpDetail`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=idpDetail,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_idp {
        graph [color="#1c3021",
            fillcolor="#29472f",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>IDENTITY PROVIDER</B></FONT>>,
            likec4_depth=2,
            likec4_id=idp,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_authentik {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>AUTHENTIK</B></FONT>>,
                likec4_depth=1,
                likec4_id="idp.authentik",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            worker [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="idp.authentik",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Worker</FONT>>,
                likec4_id="idp.authentik.worker",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            server [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="idp.authentik",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Server</FONT>>,
                likec4_id="idp.authentik.server",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            db [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="idp.authentik",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">PostgreSQL</FONT></TD></TR></TABLE>>,
                likec4_id="idp.authentik.db",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
    }
    overlaynet [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Overlay Network</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Flat addressing across every host, wherever<BR/>it sits.</FONT></TD></TR></TABLE>>,
        likec4_id=overlayNet,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    overlaynet -> db [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes on the tailnet</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ shared__ts-gateway ]</FONT></TD></TR></TABLE>>,
        likec4_id=ai2o8x,
        minlen=1,
        style=dashed];
    gateway [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">One public entry point for every published<BR/>route.</FONT></TD></TR></TABLE>>,
        likec4_id=gateway,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authentik.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1yj4o0v",
        minlen=1,
        style=dashed];
    dbbak [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Database Backup Coordinator</FONT>>,
        likec4_id=dbBak,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dbbak -> db [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="165f7ze",
        minlen=1,
        style=dotted];
    dashboard [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Dashboard</FONT>>,
        likec4_id=dashboard,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dashboard -> server [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authenticates users</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ OIDC ]</FONT></TD></TR></TABLE>>,
        likec4_id="1m4a6xv",
        minlen=1,
        style=dashed];
    worker -> db [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>,
        likec4_id=g4s1ei,
        minlen=1,
        style=dashed,
        weight=3];
    server -> db [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>,
        likec4_id=oun84p,
        style=dashed,
        weight=3];
}
`;case`secretsManDetail`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=secretsManDetail,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_secretsman {
        graph [color="#292f37",
            fillcolor="#3a404a",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>SECRETS MANAGER</B></FONT>>,
            likec4_depth=2,
            likec4_id=secretsMan,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_infisical {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>INFISICAL</B></FONT>>,
                likec4_depth=1,
                likec4_id="secretsMan.infisical",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            server [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="secretsMan.infisical",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Server</FONT>>,
                likec4_id="secretsMan.infisical.server",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            redis [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="secretsMan.infisical",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Cache</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Redis</FONT></TD></TR></TABLE>>,
                likec4_id="secretsMan.infisical.redis",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            db [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="secretsMan.infisical",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">PostgreSQL</FONT></TD></TR></TABLE>>,
                likec4_id="secretsMan.infisical.db",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
    }
    overlaynet [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Overlay Network</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Flat addressing across every host, wherever<BR/>it sits.</FONT></TD></TR></TABLE>>,
        likec4_id=overlayNet,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    overlaynet -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/tailscale/containers</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="1jt8bo1",
        minlen=1,
        style=dotted];
    gateway [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">One public entry point for every published<BR/>route.</FONT></TD></TR></TABLE>>,
        likec4_id=gateway,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=jbqkfg,
        minlen=1,
        style=dotted];
    idp [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Identity Provider</FONT>>,
        likec4_id=idp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    idp -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/authentik</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=ujezt5,
        minlen=1,
        style=dotted];
    containerorc [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Container Orchestrator</FONT>>,
        likec4_id=containerOrc,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    containerorc -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/komodo</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=b2jle5,
        minlen=1,
        style=dotted];
    configmgmt [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Configuration Management</FONT>>,
        likec4_id=configMgmt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="13aey6l",
        minlen=1,
        style=dotted];
    pricodeforge [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Primary Code Forge</FONT>>,
        likec4_id=priCodeForge,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    pricodeforge -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/forgejo</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="1dnlzrf",
        minlen=1,
        style=dotted];
    ci [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Continuous Integration</FONT>>,
        likec4_id=ci,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    ci -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/woodpecker</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=p66hcu,
        minlen=1,
        style=dotted];
    agentgw [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Agent Gateway</FONT>>,
        likec4_id=agentGw,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    agentgw -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/komodo-mcp</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="8kaf5p",
        minlen=1,
        style=dotted];
    databak [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Data Backup Coordinator</FONT>>,
        likec4_id=dataBak,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    databak -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/zerobyte</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=g6og5o,
        minlen=1,
        style=dotted];
    dbbak [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Database Backup Coordinator</FONT>>,
        likec4_id=dbBak,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dbbak -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/databasus</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="1qfheoq",
        style=dotted];
    dbbak -> db [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1jut7q1",
        style=dotted];
    dashboard [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Dashboard</FONT>>,
        likec4_id=dashboard,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dashboard -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/homarr</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=x288eo,
        minlen=1,
        style=dotted];
    shareddb [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Shared Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">One Postgres for the tenants that do not need<BR/>their own.</FONT></TD></TR></TABLE>>,
        likec4_id=sharedDb,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    shareddb -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/postgres</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=iah0u3,
        minlen=1,
        style=dotted];
    prjman [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Project Manager</FONT>>,
        likec4_id=prjMan,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    prjman -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/openproject</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=q2bt4u,
        minlen=1,
        style=dotted];
    docsign [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Document Signing</FONT>>,
        likec4_id=docsign,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    docsign -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/docuseal</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=w2pqsv,
        minlen=1,
        style=dotted];
    docarc [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Document Archive</FONT>>,
        likec4_id=docArc,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    docarc -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/paperless</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=wm33fw,
        minlen=1,
        style=dotted];
    erp [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">ERP</FONT>>,
        likec4_id=erp,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    erp -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="19euy37",
        minlen=1,
        style=dotted];
    phovid [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Personal Photo Storage</FONT>>,
        likec4_id=phovid,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    phovid -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/immich</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id="18uzfzs",
        minlen=1,
        style=dotted];
    medialib [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Media Library</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Seven products in one stack. Each is its own<BR/>application.</FONT></TD></TR></TABLE>>,
        likec4_id=mediaLib,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    medialib -> server [arrowhead=normal,
        color="#64748b",
        fontcolor="#cbd5e1",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/stream</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>,
        likec4_id=r530hj,
        minlen=1,
        style=dotted];
    email [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Transactional Email</FONT>>,
        likec4_id=email,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    server -> email [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">SMTP :465</FONT></TD></TR></TABLE>>,
        likec4_id="1uk0yhk",
        minlen=1,
        style=dashed];
    server -> redis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">queues and caches</FONT></TD></TR></TABLE>>,
        likec4_id="13ix4xy",
        minlen=1,
        style=dashed,
        weight=3];
    server -> db [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>,
        likec4_id=yowuh,
        style=dashed,
        weight=3];
}
`;case`containerOrcDetail`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=containerOrcDetail,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_containerorc {
        graph [color="#292f37",
            fillcolor="#3a404a",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>CONTAINER ORCHESTRATOR</B></FONT>>,
            likec4_depth=2,
            likec4_id=containerOrc,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_komodo {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>KOMODO</B></FONT>>,
                likec4_depth=1,
                likec4_id="containerOrc.komodo",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            core [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="containerOrc.komodo",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Core</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The hub: holds stack definitions and drives<BR/>every deploy.</FONT></TD></TR></TABLE>>,
                likec4_id="containerOrc.komodo.core",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            periphery [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="containerOrc.komodo",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Periphery</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Per-host agent, installed as a systemd unit<BR/>by infra.ansible.</FONT></TD></TR></TABLE>>,
                likec4_id="containerOrc.komodo.periphery",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            db [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="containerOrc.komodo",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">MongoDB</FONT></TD></TR></TABLE>>,
                likec4_id="containerOrc.komodo.db",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            volumes [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="containerOrc.komodo",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Docker Volumes</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">Filesystem</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">/var/lib/docker/volumes on every managed<BR/>node.</FONT></TD></TR></TABLE>>,
                likec4_id="containerOrc.komodo.volumes",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
    }
    gateway [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">One public entry point for every published<BR/>route.</FONT></TD></TR></TABLE>>,
        likec4_id=gateway,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> core [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">komo.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1daaat9",
        minlen=1,
        style=dashed];
    configmgmt [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Configuration Management</FONT>>,
        likec4_id=configMgmt,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    configmgmt -> core [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">bootstraps the control plane</FONT></TD></TR></TABLE>>,
        likec4_id="1hkpv3w",
        style=dashed];
    configmgmt -> periphery [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">installs the periphery systemd unit</FONT></TD></TR></TABLE>>,
        likec4_id="8tlhwf",
        style=dashed];
    agentgw [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Agent Gateway</FONT>>,
        likec4_id=agentGw,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    agentgw -> core [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Komodo API</FONT></TD></TR></TABLE>>,
        likec4_id="1du5afg",
        minlen=1,
        style=dashed];
    databak [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Data Backup Coordinator</FONT>>,
        likec4_id=dataBak,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    databak -> volumes [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id=c9lghp,
        minlen=1,
        style=dotted];
    dbbak [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Database Backup Coordinator</FONT>>,
        likec4_id=dbBak,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dbbak -> db [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1vk2yd2",
        minlen=1,
        style=dotted];
    pricodeforge [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Primary Code Forge</FONT>>,
        likec4_id=priCodeForge,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    core -> pricodeforge [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">syncs stack definitions</FONT></TD></TR></TABLE>>,
        likec4_id=gmjol6,
        minlen=1,
        style=dashed];
    alerting [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Alerting</FONT>>,
        likec4_id=alerting,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    core -> alerting [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends alerts</FONT></TD></TR></TABLE>>,
        likec4_id="1f0k8ej",
        minlen=1,
        style=dashed];
    core -> periphery [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">TLS :8120, pinned core public key</FONT></TD></TR></TABLE>>,
        likec4_id="158kivd",
        style=dashed,
        weight=3];
    core -> db [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads and writes</FONT></TD></TR></TABLE>>,
        likec4_id="11zfj87",
        style=dashed,
        weight=3];
    periphery -> volumes [arrowhead=normal,
        color="#15803d",
        fontcolor="#bbfcd3",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">creates and manages</FONT></TD></TR></TABLE>>,
        likec4_id=z9ng2x,
        style=dashed,
        weight=3];
}
`;case`forgeDetail`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=forgeDetail,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_pricodeforge {
        graph [color="#1c3021",
            fillcolor="#29472f",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>PRIMARY CODE FORGE</B></FONT>>,
            likec4_depth=2,
            likec4_id=priCodeForge,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_forgejo {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FORGEJO</B></FONT>>,
                likec4_depth=1,
                likec4_id="priCodeForge.forgejo",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            server [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Server</FONT>>,
                likec4_id="priCodeForge.forgejo.server",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            db [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">PostgreSQL</FONT></TD></TR></TABLE>>,
                likec4_id="priCodeForge.forgejo.db",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
    }
    gateway [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">One public entry point for every published<BR/>route.</FONT></TD></TR></TABLE>>,
        likec4_id=gateway,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fj.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1xl7vqs",
        minlen=1,
        style=dashed];
    containerorc [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Container Orchestrator</FONT>>,
        likec4_id=containerOrc,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    containerorc -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">syncs stack definitions</FONT></TD></TR></TABLE>>,
        likec4_id="1l49iol",
        minlen=1,
        style=dashed];
    ci [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Continuous Integration</FONT>>,
        likec4_id=ci,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    ci -> server [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">OAuth2 login and repository access</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ OIDC ]</FONT></TD></TR></TABLE>>,
        likec4_id=g1htza,
        minlen=1,
        style=dashed];
    dbbak [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Database Backup Coordinator</FONT>>,
        likec4_id=dbBak,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dbbak -> db [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="1npompt",
        minlen=1,
        style=dotted];
    server -> db [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>,
        likec4_id="1098top",
        minlen=0,
        style=dashed,
        weight=3];
}
`;case`ciDetail`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=ciDetail,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ci {
        graph [color="#1c3021",
            fillcolor="#29472f",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>CONTINUOUS INTEGRATION</B></FONT>>,
            likec4_depth=2,
            likec4_id=ci,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_woodpecker {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>WOODPECKER</B></FONT>>,
                likec4_depth=1,
                likec4_id="ci.woodpecker",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            agent [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Runs pipeline steps as sibling containers on<BR/>the host docker daemon.</FONT></TD></TR></TABLE>>,
                likec4_id="ci.woodpecker.agent",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            server [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Server</FONT>>,
                likec4_id="ci.woodpecker.server",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
        }
    }
    gateway [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">One public entry point for every published<BR/>route.</FONT></TD></TR></TABLE>>,
        likec4_id=gateway,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">peck.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1xusmf8",
        minlen=1,
        style=dashed];
    agent -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">polls for work</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ gRPC :9000 ]</FONT></TD></TR></TABLE>>,
        likec4_id="12oafqu",
        minlen=0,
        style=dashed,
        weight=3];
    pricodeforge [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Primary Code Forge</FONT>>,
        likec4_id=priCodeForge,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    server -> pricodeforge [arrowhead=normal,
        color="#0ea5e9",
        fontcolor="#d4f2ff",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">OAuth2 login and repository access</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ OIDC ]</FONT></TD></TR></TABLE>>,
        likec4_id="1i07rvn",
        minlen=1,
        style=dashed];
}
`;case`docArcDetail`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=docArcDetail,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_docarc {
        graph [color="#292481",
            fillcolor="#232598",
            label=<<FONT POINT-SIZE="11" COLOR="#c7d2feb3"><B>DOCUMENT ARCHIVE</B></FONT>>,
            likec4_depth=2,
            likec4_id=docArc,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_paperless {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PAPERLESS</B></FONT>>,
                likec4_depth=1,
                likec4_id="docArc.paperless",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            server [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="docArc.paperless",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Server</FONT>>,
                likec4_id="docArc.paperless.server",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            broker [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="docArc.paperless",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Broker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Redis</FONT></TD></TR></TABLE>>,
                likec4_id="docArc.paperless.broker",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            gotenberg [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="docArc.paperless",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Document Converter</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Gotenberg</FONT></TD></TR></TABLE>>,
                likec4_id="docArc.paperless.gotenberg",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            tika [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="docArc.paperless",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Content Extractor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Apache Tika</FONT></TD></TR></TABLE>>,
                likec4_id="docArc.paperless.tika",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            db [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="docArc.paperless",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">PostgreSQL</FONT></TD></TR></TABLE>>,
                likec4_id="docArc.paperless.db",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
    }
    gateway [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">One public entry point for every published<BR/>route.</FONT></TD></TR></TABLE>>,
        likec4_id=gateway,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> server [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">paper.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=xtcttc,
        minlen=1,
        style=dashed];
    dbbak [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Database Backup Coordinator</FONT>>,
        likec4_id=dbBak,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dbbak -> db [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id="3x3l51",
        minlen=1,
        style=dotted];
    server -> broker [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">queues tasks</FONT></TD></TR></TABLE>>,
        likec4_id="3lqufg",
        minlen=1,
        style=dashed,
        weight=3];
    server -> gotenberg [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">converts to PDF</FONT></TD></TR></TABLE>>,
        likec4_id=ipp47e,
        minlen=1,
        style=dashed,
        weight=3];
    server -> tika [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">extracts text</FONT></TD></TR></TABLE>>,
        likec4_id=d95piw,
        minlen=1,
        style=dashed,
        weight=3];
    server -> db [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>,
        likec4_id="5oq3pl",
        style=dashed,
        weight=3];
}
`;case`phovidDetail`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=phovidDetail,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_phovid {
        graph [color="#292481",
            fillcolor="#232598",
            label=<<FONT POINT-SIZE="11" COLOR="#c7d2feb3"><B>PERSONAL PHOTO STORAGE</B></FONT>>,
            likec4_depth=2,
            likec4_id=phovid,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_immich {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>IMMICH</B></FONT>>,
                likec4_depth=1,
                likec4_id="phovid.immich",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            server [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="phovid.immich",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Server</FONT>>,
                likec4_id="phovid.immich.server",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            machinelearning [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="phovid.immich",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Machine Learning</FONT>>,
                likec4_id="phovid.immich.machineLearning",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            redis [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group="phovid.immich",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Cache</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Valkey</FONT></TD></TR></TABLE>>,
                likec4_id="phovid.immich.redis",
                likec4_level=2,
                margin="0.5,0.223",
                width=4.584];
            db [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="phovid.immich",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Database</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">PostgreSQL</FONT></TD></TR></TABLE>>,
                likec4_id="phovid.immich.db",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
    }
    dbbak [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Database Backup Coordinator</FONT>>,
        likec4_id=dbBak,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dbbak -> db [arrowhead=diamond,
        color="#b45309",
        fontcolor="#FFE0C2",
        likec4_id=t0ct7p,
        minlen=1,
        style=dotted];
    server -> machinelearning [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs inference</FONT></TD></TR></TABLE>>,
        likec4_id=fme48u,
        minlen=1,
        style=dashed];
    server -> redis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">queues jobs</FONT></TD></TR></TABLE>>,
        likec4_id="1kao9fq",
        minlen=1,
        style=dashed];
    server -> db [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>,
        likec4_id=q168cp,
        style=dashed,
        weight=3];
}
`;case`mediaLibDetail`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=mediaLibDetail,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_medialib {
        graph [color="#2a2490",
            fillcolor="#2225aa",
            label=<<FONT POINT-SIZE="11" COLOR="#c7d2feb3"><B>MEDIA LIBRARY</B></FONT>>,
            likec4_depth=1,
            likec4_id=mediaLib,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        seerr [height=2.5,
            label=<<FONT POINT-SIZE="20">Seerr</FONT>>,
            likec4_id="mediaLib.seerr",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        prowlarr [height=2.5,
            label=<<FONT POINT-SIZE="20">Prowlarr</FONT>>,
            likec4_id="mediaLib.prowlarr",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        bazarr [height=2.5,
            label=<<FONT POINT-SIZE="20">Bazarr</FONT>>,
            likec4_id="mediaLib.bazarr",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        sonarr [height=2.5,
            label=<<FONT POINT-SIZE="20">Sonarr</FONT>>,
            likec4_id="mediaLib.sonarr",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        radarr [height=2.5,
            label=<<FONT POINT-SIZE="20">Radarr</FONT>>,
            likec4_id="mediaLib.radarr",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        sabnzbd [height=2.5,
            label=<<FONT POINT-SIZE="20">SABnzbd</FONT>>,
            likec4_id="mediaLib.sabnzbd",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        plex [height=2.5,
            label=<<FONT POINT-SIZE="20">Plex</FONT>>,
            likec4_id="mediaLib.plex",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    gateway [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">One public entry point for every published<BR/>route.</FONT></TD></TR></TABLE>>,
        likec4_id=gateway,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    gateway -> seerr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">seerr.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1jcwzxo",
        style=dashed];
    gateway -> prowlarr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">prowlarr.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=mv7td4,
        style=dashed];
    gateway -> bazarr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">bazarr.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1owy9l3",
        style=dashed];
    gateway -> sonarr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sonarr.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1f13zcc",
        style=dashed];
    gateway -> radarr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">radarr.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1ekg8cp",
        style=dashed];
    gateway -> sabnzbd [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sabnzbd.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id="1i3vyyl",
        style=dashed];
    seerr -> sonarr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">requests series</FONT></TD></TR></TABLE>>,
        likec4_id=p96y4q,
        style=dashed,
        weight=2];
    seerr -> radarr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">requests films</FONT></TD></TR></TABLE>>,
        likec4_id=oq4qr3,
        style=dashed,
        weight=2];
    prowlarr -> sonarr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">feeds indexers</FONT></TD></TR></TABLE>>,
        likec4_id="1vfqnri",
        style=dashed,
        weight=2];
    prowlarr -> radarr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">feeds indexers</FONT></TD></TR></TABLE>>,
        likec4_id="1v1zh7v",
        style=dashed,
        weight=2];
    bazarr -> sonarr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads the library</FONT></TD></TR></TABLE>>,
        likec4_id=glk7tt,
        style=dashed,
        weight=2];
    bazarr -> radarr [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads the library</FONT></TD></TR></TABLE>>,
        likec4_id=gzbedg,
        style=dashed,
        weight=2];
    sonarr -> sabnzbd [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">queues downloads</FONT></TD></TR></TABLE>>,
        likec4_id=ofo55n,
        style=dashed,
        weight=2];
    radarr -> sabnzbd [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">queues downloads</FONT></TD></TR></TABLE>>,
        likec4_id="1s1xrz2",
        style=dashed,
        weight=2];
}
`;case`flowRequest`:return`digraph {
  likec4_viewId = "flowRequest";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "www" [
    likec4_id = "www";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Public Internet</FONT>>;
    margin = "0.278,0.223";
    width = 4.445;
    height = 2.389;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "gerbil" [
    likec4_id = "gateway.pangolin.gerbil";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Gerbil</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Owns the host ports. Traefik runs in its<BR/>network namespace.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "traefik" [
    likec4_id = "gateway.pangolin.traefik";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Traefik</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Reverse proxy. network_mode: service:gerbil.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "server" [
    likec4_id = "gateway.pangolin.server";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Pangolin Server</FONT>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "newt" [
    likec4_id = "gateway.newt";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Newt</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site connector, installed per host as a<BR/>systemd unit by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "openproject" [
    likec4_id = "prjMan.openproject";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">OpenProject</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "db" [
    likec4_id = "sharedDb.postgres.db";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Database</FONT>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    fillcolor = "#428a4f";
    fontcolor = "#f8fafc";
    color = "#2d5d39";
    penwidth = 2;
    shape = "cylinder";
  ];
  "www" -> "gerbil" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">GET openprj.ktbcloud.com<BR/>HTTPS</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "gerbil" -> "traefik" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">forwards on the shared namespace<BR/>HTTPS</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "traefik" -> "server" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">badger: is this session allowed?<BR/>Badger middleware</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "traefik" -> "server" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">allow</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "gerbil" -> "traefik" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">routes into the tunnel<BR/>HTTPS</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "gerbil" -> "newt" [
    likec4_id = "step-06";
    color = "#0ea5e9";
    fontcolor = "#d4f2ff";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">WireGuard<BR/>WireGuard</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "newt" -> "openproject" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">forwards to the local port<BR/>HTTPS</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "openproject" -> "db" [
    likec4_id = "step-08";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">query<BR/>PostgreSQL</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "openproject" -> "db" [
    likec4_id = "step-09";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">rows</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "newt" -> "openproject" [
    likec4_id = "step-10";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">200 OK</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "gerbil" -> "newt" [
    likec4_id = "step-11";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>10</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">200 OK</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "gerbil" -> "traefik" [
    likec4_id = "step-12";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>11</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">200 OK<BR/>HTTPS</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "www" -> "traefik" [
    likec4_id = "step-13";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>12</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">200 OK</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
}`;case`flowSecrets`:return`digraph {
  likec4_viewId = "flowSecrets";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "periphery" [
    likec4_id = "containerOrc.komodo.periphery";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Periphery</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Per-host agent, installed as a systemd unit<BR/>by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "docuseal" [
    likec4_id = "docsign.docuseal";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Docuseal</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "server" [
    likec4_id = "secretsMan.infisical.server";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Server</FONT>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "db" [
    likec4_id = "sharedDb.postgres.db";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Database</FONT>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    fillcolor = "#428a4f";
    fontcolor = "#f8fafc";
    color = "#2d5d39";
    penwidth = 2;
    shape = "cylinder";
  ];
  "periphery" -> "docuseal" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">docker compose up</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "docuseal" -> "server" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">machine identity login, then GET<BR/>/docuseal</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "docuseal" -> "server" [
    likec4_id = "step-03";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">secret bundle</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "docuseal" -> "db" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">connects with the injected credentials<BR/>PostgreSQL</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`flowDeploy`:return`digraph {
  likec4_viewId = "flowDeploy";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "operator" [
    likec4_id = "operator";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Operator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Administers the fleet through Komodo, Ansible<BR/>and the forges.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "core" [
    likec4_id = "containerOrc.komodo.core";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Core</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The hub: holds stack definitions and drives<BR/>every deploy.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "server" [
    likec4_id = "priCodeForge.forgejo.server";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Server</FONT>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "periphery" [
    likec4_id = "containerOrc.komodo.periphery";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Periphery</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Per-host agent, installed as a systemd unit<BR/>by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "server_1" [
    likec4_id = "secretsMan.infisical.server";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Server</FONT>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "pushover" [
    likec4_id = "alerting.pushover";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Pushover</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Receives Komodo alerts. The only telemetry<BR/>sink in the fleet.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "operator" -> "server" [
    likec4_id = "step-01";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>0</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">git push</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "core" -> "server" [
    likec4_id = "step-02";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">syncs stack definitions</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "core" -> "periphery" [
    likec4_id = "step-03";
    color = "#15803d";
    fontcolor = "#bbfcd3";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">deploy</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "periphery" -> "server_1" [
    likec4_id = "step-04";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">provider fetches the bundle</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "periphery" -> "server_1" [
    likec4_id = "step-05";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">secrets</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "core" -> "periphery" [
    likec4_id = "step-06";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">result</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "core" -> "pushover" [
    likec4_id = "step-07";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191BA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191BA0" CELLPADDING="3"><FONT POINT-SIZE="14">alerts on failure</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case`fleet`:return`digraph {
  likec4_viewId = "fleet";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.806;
  ranksep = 1.806;
  pad = 0.209;
  fontname = "Arial";
  newrank = true;
  clusterrank = "global";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "nas" [
    likec4_id = "prod.homelab.nas";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">snaszy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Synology NAS. Not Komodo-managed; holds<BR/>/volume1/backups and /volume1/docker.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  "pangolin" [
    likec4_id = "prod.vultr.rick.pangolin";
    likec4_level = 3;
    label = <<FONT POINT-SIZE="20">Pangolin</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "homarr" [
    likec4_id = "prod.vultr.rick.homarr";
    likec4_level = 3;
    label = <<FONT POINT-SIZE="20">Homarr</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "databasus" [
    likec4_id = "prod.vultr.rick.databasus";
    likec4_level = 3;
    label = <<FONT POINT-SIZE="20">Databasus</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "tsagent" [
    likec4_id = "prod.vultr.rick.tsAgent";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tailscale Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "zerobyte" [
    likec4_id = "prod.vultr.rick.zerobyte";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Zerobyte</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Restic</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "newt" [
    likec4_id = "prod.hetzner.maboi.newt";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Newt</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site connector, installed per host as a<BR/>systemd unit by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "periphery" [
    likec4_id = "prod.hetzner.maboi.periphery";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Periphery</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Per-host agent, installed as a systemd unit<BR/>by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "tsagent_1" [
    likec4_id = "prod.hetzner.maboi.tsAgent";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tailscale Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "periphery_1" [
    likec4_id = "prod.homelab.littlebuddy.periphery";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Periphery</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Per-host agent, installed as a systemd unit<BR/>by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "tsagent_2" [
    likec4_id = "prod.homelab.littlebuddy.tsAgent";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tailscale Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "newt_1" [
    likec4_id = "prod.homelab.biggy.newt";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Newt</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site connector, installed per host as a<BR/>systemd unit by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "newt_2" [
    likec4_id = "prod.vultr.rick.newt";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Newt</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site connector, installed per host as a<BR/>systemd unit by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "terraria" [
    likec4_id = "prod.homelab.biggy.terraria";
    likec4_level = 3;
    label = <<FONT POINT-SIZE="20">Terraria</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "authentik" [
    likec4_id = "prod.vultr.rick.authentik";
    likec4_level = 3;
    label = <<FONT POINT-SIZE="20">Authentik</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "core" [
    likec4_id = "prod.vultr.rick.core";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Core</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The hub: holds stack definitions and drives<BR/>every deploy.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "periphery_2" [
    likec4_id = "prod.homelab.biggy.periphery";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Periphery</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Per-host agent, installed as a systemd unit<BR/>by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "tsagent_3" [
    likec4_id = "prod.homelab.biggy.tsAgent";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tailscale Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "newt_3" [
    likec4_id = "prod.homelab.bill.newt";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Newt</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site connector, installed per host as a<BR/>systemd unit by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "periphery_3" [
    likec4_id = "prod.homelab.bill.periphery";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Periphery</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Per-host agent, installed as a systemd unit<BR/>by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "tsagent_4" [
    likec4_id = "prod.homelab.bill.tsAgent";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tailscale Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "newt_4" [
    likec4_id = "prod.homelab.paiki.newt";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Newt</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site connector, installed per host as a<BR/>systemd unit by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "fbq" [
    likec4_id = "prod.homelab.biggy.fbq";
    likec4_level = 3;
    label = <<FONT POINT-SIZE="20">File Browser Quantum</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "periphery_4" [
    likec4_id = "prod.vultr.rick.periphery";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Periphery</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Per-host agent, installed as a systemd unit<BR/>by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "medialib" [
    likec4_id = "prod.homelab.paiki.mediaLib";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Media Library</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Seven products in one stack. Each is its own<BR/>application.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "newt_5" [
    likec4_id = "prod.homelab.littlebuddy.newt";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Newt</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site connector, installed per host as a<BR/>systemd unit by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "erpnext" [
    likec4_id = "prod.homelab.bill.erpnext";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">ERPNext</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Frappe</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "immich" [
    likec4_id = "prod.homelab.paiki.immich";
    likec4_level = 3;
    label = <<FONT POINT-SIZE="20">Immich</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "woodpecker" [
    likec4_id = "prod.homelab.littlebuddy.woodpecker";
    likec4_level = 3;
    label = <<FONT POINT-SIZE="20">Woodpecker</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "komodomcp" [
    likec4_id = "prod.homelab.littlebuddy.komodoMcp";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Komodo MCP</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Exposes the Komodo API to agents over MCP.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "openproject" [
    likec4_id = "prod.homelab.littlebuddy.openproject";
    likec4_level = 3;
    label = <<FONT POINT-SIZE="20">OpenProject</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "docuseal" [
    likec4_id = "prod.homelab.littlebuddy.docuseal";
    likec4_level = 3;
    label = <<FONT POINT-SIZE="20">Docuseal</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "paperless" [
    likec4_id = "prod.homelab.littlebuddy.paperless";
    likec4_level = 3;
    label = <<FONT POINT-SIZE="20">Paperless</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "forgejo" [
    likec4_id = "prod.homelab.littlebuddy.forgejo";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Forgejo</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Gitea</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "postgres" [
    likec4_id = "prod.homelab.littlebuddy.postgres";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">PostgreSQL</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">postgres:18 on littlebuddy:6109, reached over<BR/>the shared__postgres_db network.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "infisical" [
    likec4_id = "prod.vultr.rick.infisical";
    likec4_level = 3;
    label = <<FONT POINT-SIZE="20">Infisical</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "periphery_5" [
    likec4_id = "prod.homelab.paiki.periphery";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Periphery</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Per-host agent, installed as a systemd unit<BR/>by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "tsagent_5" [
    likec4_id = "prod.homelab.paiki.tsAgent";
    likec4_level = 3;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tailscale Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  subgraph "cluster_prod" {
    likec4_id = "prod";
    likec4_level = 0;
    likec4_depth = 3;
    fillcolor = "#393939";
    color = "#292929";
    style = "filled";
    margin = 50;
    label = <<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>PRODUCTION</B></FONT>>;
    subgraph "cluster_hetzner" {
      likec4_id = "prod.hetzner";
      likec4_level = 1;
      likec4_depth = 2;
      fillcolor = "#1a468d";
      color = "#1c3979";
      style = "filled";
      margin = 32;
      label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>HETZNER</B></FONT>>;
      subgraph "cluster_maboi" {
        likec4_id = "prod.hetzner.maboi";
        likec4_level = 2;
        likec4_depth = 1;
        fillcolor = "#194b9e";
        color = "#1b3d88";
        style = "filled";
        margin = 50;
        label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MABOI</B></FONT>>;
        "newt";
        "periphery";
        "tsagent_1";
      }
    }
    subgraph "cluster_vultr" {
      likec4_id = "prod.vultr";
      likec4_level = 1;
      likec4_depth = 2;
      fillcolor = "#1a468d";
      color = "#1c3979";
      style = "filled";
      margin = 32;
      label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>VULTR</B></FONT>>;
      subgraph "cluster_rick" {
        likec4_id = "prod.vultr.rick";
        likec4_level = 2;
        likec4_depth = 1;
        fillcolor = "#194b9e";
        color = "#1b3d88";
        style = "filled";
        margin = 50;
        label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>RICK</B></FONT>>;
        "pangolin";
        "homarr";
        "databasus";
        "tsagent";
        "zerobyte";
        "newt_2";
        "authentik";
        "core";
        "periphery_4";
        "infisical";
      }
    }
    subgraph "cluster_homelab" {
      likec4_id = "prod.homelab";
      likec4_level = 1;
      likec4_depth = 2;
      fillcolor = "#1a468d";
      color = "#1c3979";
      style = "filled";
      margin = 50;
      label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>HOME LAB</B></FONT>>;
      "nas";
      subgraph "cluster_biggy" {
        likec4_id = "prod.homelab.biggy";
        likec4_level = 2;
        likec4_depth = 1;
        fillcolor = "#194b9e";
        color = "#1b3d88";
        style = "filled";
        margin = 50;
        label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BIGGY</B></FONT>>;
        "newt_1";
        "terraria";
        "periphery_2";
        "tsagent_3";
        "fbq";
      }
      subgraph "cluster_littlebuddy" {
        likec4_id = "prod.homelab.littlebuddy";
        likec4_level = 2;
        likec4_depth = 1;
        fillcolor = "#194b9e";
        color = "#1b3d88";
        style = "filled";
        margin = 50;
        label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>LITTLEBUDDY</B></FONT>>;
        "periphery_1";
        "tsagent_2";
        "newt_5";
        "woodpecker";
        "komodomcp";
        "openproject";
        "docuseal";
        "paperless";
        "forgejo";
        "postgres";
      }
      subgraph "cluster_bill" {
        likec4_id = "prod.homelab.bill";
        likec4_level = 2;
        likec4_depth = 1;
        fillcolor = "#194b9e";
        color = "#1b3d88";
        style = "filled";
        margin = 50;
        label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BILL</B></FONT>>;
        "newt_3";
        "periphery_3";
        "tsagent_4";
        "erpnext";
      }
      subgraph "cluster_paiki" {
        likec4_id = "prod.homelab.paiki";
        likec4_level = 2;
        likec4_depth = 1;
        fillcolor = "#194b9e";
        color = "#1b3d88";
        style = "filled";
        margin = 50;
        label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PAIKI</B></FONT>>;
        "newt_4";
        "medialib";
        "immich";
        "periphery_5";
        "tsagent_5";
      }
    }
  }
  subgraph {
    rank = "same";
    "tsagent";
    "tsagent_1";
    "tsagent_2";
    "tsagent_3";
    "tsagent_4";
    "tsagent_5";
  }
  subgraph {
    rank = "same";
    "newt";
    "newt_1";
    "newt_2";
    "newt_3";
    "newt_4";
    "newt_5";
  }
  subgraph {
    rank = "same";
    "periphery";
    "periphery_1";
    "periphery_2";
    "periphery_3";
    "periphery_4";
    "periphery_5";
  }
  "pangolin" -> "newt_2" [
    likec4_id = "3guwzs";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WireGuard :51820</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ WireGuard ]</FONT></TD></TR></TABLE>>;
    color = "#0ea5e9";
    fontcolor = "#d4f2ff";
    arrowhead = "normal";
  ];
  "homarr" -> "authentik" [
    likec4_id = "psigde";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authenticates users</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ OIDC ]</FONT></TD></TR></TABLE>>;
    color = "#0ea5e9";
    fontcolor = "#d4f2ff";
    arrowhead = "normal";
  ];
  "databasus" -> "authentik" [
    likec4_id = "1atxymn";
    style = "dotted";
    weight = 5;
    color = "#b45309";
    fontcolor = "#FFE0C2";
    arrowhead = "diamond";
  ];
  "newt_2" -> "authentik" [
    likec4_id = "144j0bl";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authentik.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "tsagent" -> "authentik" [
    likec4_id = "5k2vlj";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes on the tailnet</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ shared__ts-gateway ]</FONT></TD></TR></TABLE>>;
    color = "#0ea5e9";
    fontcolor = "#d4f2ff";
    arrowhead = "normal";
  ];
  "databasus" -> "infisical" [
    likec4_id = "x4vvvq";
    style = "dotted";
    weight = 5;
    color = "#b45309";
    fontcolor = "#FFE0C2";
    arrowhead = "diamond";
  ];
  "newt_2" -> "infisical" [
    likec4_id = "391ibs";
    style = "dashed";
    weight = 5;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">infisical.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "tsagent" -> "infisical" [
    likec4_id = "zf5qu6";
    style = "dashed";
    weight = 5;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes on the tailnet</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ shared__ts-gateway ]</FONT></TD></TR></TABLE>>;
    color = "#0ea5e9";
    fontcolor = "#d4f2ff";
    arrowhead = "normal";
  ];
  "newt_2" -> "core" [
    likec4_id = "gi3xm7";
    style = "dashed";
    weight = 5;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">komo.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "core" -> "periphery_4" [
    likec4_id = "1dotsfz";
    style = "dashed";
    weight = 5;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">TLS :8120, pinned core public key</FONT></TD></TR></TABLE>>;
    color = "#15803d";
    fontcolor = "#bbfcd3";
    arrowhead = "normal";
  ];
  "databasus" -> "postgres" [
    likec4_id = "dwdaop";
    style = "dotted";
    color = "#b45309";
    fontcolor = "#FFE0C2";
    arrowhead = "diamond";
  ];
  "databasus" -> "forgejo" [
    likec4_id = "af3k66";
    style = "dotted";
    color = "#b45309";
    fontcolor = "#FFE0C2";
    arrowhead = "diamond";
  ];
  "databasus" -> "paperless" [
    likec4_id = "1s8f6kd";
    style = "dotted";
    color = "#b45309";
    fontcolor = "#FFE0C2";
    arrowhead = "diamond";
  ];
  "core" -> "forgejo" [
    likec4_id = "v3zkw3";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">syncs stack definitions</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "openproject" -> "postgres" [
    likec4_id = "1ff27k6";
    style = "dashed";
    weight = 5;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "docuseal" -> "postgres" [
    likec4_id = "1tsdrb5";
    style = "dashed";
    weight = 5;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[PostgreSQL]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "woodpecker" -> "forgejo" [
    likec4_id = "19x58gp";
    style = "dashed";
    weight = 5;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">OAuth2 login and repository access</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ OIDC ]</FONT></TD></TR></TABLE>>;
    color = "#0ea5e9";
    fontcolor = "#d4f2ff";
    arrowhead = "normal";
  ];
  "newt_5" -> "forgejo" [
    likec4_id = "rkkex4";
    style = "dashed";
    weight = 5;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fj.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "newt_5" -> "woodpecker" [
    likec4_id = "1pj10fh";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">peck.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "newt_5" -> "komodomcp" [
    likec4_id = "8j9wh3";
    style = "dashed";
    weight = 5;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">komodo-mcp.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "newt_5" -> "openproject" [
    likec4_id = "o5swj9";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">openprj.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "newt_5" -> "docuseal" [
    likec4_id = "1hrjj4i";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">docuseal.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "newt_5" -> "paperless" [
    likec4_id = "119gn1n";
    style = "dashed";
    weight = 5;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">paper.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "komodomcp" -> "core" [
    likec4_id = "d66quk";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Komodo API</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "terraria" -> "fbq" [
    likec4_id = "11t6qxv";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">stores its world</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "newt_1" -> "fbq" [
    likec4_id = "1ce87pd";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">HTTP :18450</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "newt_1" -> "terraria" [
    likec4_id = "166qzy6";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">raw TCP :18022</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "databasus" -> "erpnext" [
    likec4_id = "11agsaz";
    style = "dotted";
    color = "#b45309";
    fontcolor = "#FFE0C2";
    arrowhead = "diamond";
  ];
  "databasus" -> "immich" [
    likec4_id = "1a2ktwx";
    style = "dotted";
    color = "#b45309";
    fontcolor = "#FFE0C2";
    arrowhead = "diamond";
  ];
  "newt_4" -> "medialib" [
    likec4_id = "1t1eos7";
    style = "dashed";
    weight = 5;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "medialib" -> "infisical" [
    likec4_id = "fxho4j";
    style = "dotted";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">/stream</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ Infisical ]</FONT></TD></TR></TABLE>>;
    color = "#64748b";
    fontcolor = "#cbd5e1";
    arrowhead = "normal";
  ];
}`;case`controlplane`:return`digraph {
  likec4_viewId = "controlplane";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "TB";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.806;
  ranksep = 1.806;
  pad = 0.209;
  fontname = "Arial";
  newrank = true;
  clusterrank = "global";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#8D8D8D";
    fontcolor = "#C9C9C9";
    style = "dashed";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "pangolin" [
    likec4_id = "prod.vultr.rick.pangolin";
    likec4_level = 1;
    label = <<FONT POINT-SIZE="20">Pangolin</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "homarr" [
    likec4_id = "prod.vultr.rick.homarr";
    likec4_level = 1;
    label = <<FONT POINT-SIZE="20">Homarr</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "databasus" [
    likec4_id = "prod.vultr.rick.databasus";
    likec4_level = 1;
    label = <<FONT POINT-SIZE="20">Databasus</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "tsagent" [
    likec4_id = "prod.vultr.rick.tsAgent";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Tailscale Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "newt" [
    likec4_id = "prod.vultr.rick.newt";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Newt</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Wireguard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Site connector, installed per host as a<BR/>systemd unit by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "authentik" [
    likec4_id = "prod.vultr.rick.authentik";
    likec4_level = 1;
    label = <<FONT POINT-SIZE="20">Authentik</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "infisical" [
    likec4_id = "prod.vultr.rick.infisical";
    likec4_level = 1;
    label = <<FONT POINT-SIZE="20">Infisical</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  "core" [
    likec4_id = "prod.vultr.rick.core";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Core</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">The hub: holds stack definitions and drives<BR/>every deploy.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "periphery" [
    likec4_id = "prod.vultr.rick.periphery";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Periphery</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Per-host agent, installed as a systemd unit<BR/>by infra.ansible.</FONT></TD></TR></TABLE>>;
    margin = "0.5,0.223";
    width = 4.584;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "zerobyte" [
    likec4_id = "prod.vultr.rick.zerobyte";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Zerobyte</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Restic</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
  ];
  subgraph "cluster_rick" {
    likec4_id = "prod.vultr.rick";
    likec4_level = 0;
    likec4_depth = 1;
    fillcolor = "#194b9e";
    color = "#1b3d88";
    style = "filled";
    margin = 50;
    label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>RICK</B></FONT>>;
    "pangolin";
    "homarr";
    "databasus";
    "tsagent";
    "newt";
    "authentik";
    "infisical";
    "core";
    "periphery";
    "zerobyte";
  }
  "pangolin" -> "newt" [
    likec4_id = "3guwzs";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WireGuard :51820</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ WireGuard ]</FONT></TD></TR></TABLE>>;
    color = "#0ea5e9";
    fontcolor = "#d4f2ff";
    arrowhead = "normal";
  ];
  "homarr" -> "authentik" [
    likec4_id = "psigde";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authenticates users</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ OIDC ]</FONT></TD></TR></TABLE>>;
    color = "#0ea5e9";
    fontcolor = "#d4f2ff";
    arrowhead = "normal";
  ];
  "databasus" -> "authentik" [
    likec4_id = "1atxymn";
    style = "dotted";
    color = "#b45309";
    fontcolor = "#FFE0C2";
    arrowhead = "diamond";
  ];
  "newt" -> "authentik" [
    likec4_id = "144j0bl";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">authentik.ktbcloud.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "tsagent" -> "authentik" [
    likec4_id = "5k2vlj";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes on the tailnet</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ shared__ts-gateway ]</FONT></TD></TR></TABLE>>;
    color = "#0ea5e9";
    fontcolor = "#d4f2ff";
    arrowhead = "normal";
  ];
  "databasus" -> "infisical" [
    likec4_id = "x4vvvq";
    style = "dotted";
    color = "#b45309";
    fontcolor = "#FFE0C2";
    arrowhead = "diamond";
  ];
  "newt" -> "infisical" [
    likec4_id = "391ibs";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">infisical.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "tsagent" -> "infisical" [
    likec4_id = "zf5qu6";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">exposes on the tailnet</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ shared__ts-gateway ]</FONT></TD></TR></TABLE>>;
    color = "#0ea5e9";
    fontcolor = "#d4f2ff";
    arrowhead = "normal";
  ];
  "newt" -> "core" [
    likec4_id = "gi3xm7";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">komo.ktbinternal.com</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "core" -> "periphery" [
    likec4_id = "1dotsfz";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">TLS :8120, pinned core public key</FONT></TD></TR></TABLE>>;
    color = "#15803d";
    fontcolor = "#bbfcd3";
    arrowhead = "normal";
  ];
}`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3414pt" height="5278pt"
 viewBox="0.00 0.00 3414.00 5278.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 5263.13)">
<!-- operator -->
<g id="node1" class="node">
<title>operator</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="348.62,-2564 0,-2564 0,-2384 348.62,-2384 348.62,-2564"/>
<text xml:space="preserve" text-anchor="start" x="134.84" y="-2486" font-family="Arial" font-size="20.00" fill="#f0f9ff">Operator</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-2463" font-family="Arial" font-size="15.00" fill="#b6ecf7">Administers the fleet through Komodo, Ansible</text>
<text xml:space="preserve" text-anchor="start" x="124.27" y="-2445" font-family="Arial" font-size="15.00" fill="#b6ecf7">and the forges.</text>
</g>
<!-- configmgmt -->
<g id="node2" class="node">
<title>configmgmt</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="888.82,-2519 568.78,-2519 568.78,-2339 888.82,-2339 888.82,-2519"/>
<text xml:space="preserve" text-anchor="start" x="608.17" y="-2421" font-family="Arial" font-size="20.00" fill="#f8fafc">Configuration Management</text>
</g>
<!-- www -->
<g id="node3" class="node">
<title>www</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="888.82,-2994 568.78,-2994 568.78,-2822 888.82,-2822 888.82,-2994"/>
<text xml:space="preserve" text-anchor="start" x="664.87" y="-2900" font-family="Arial" font-size="20.00" fill="#f8fafc">Public Internet</text>
</g>
<!-- household -->
<g id="node4" class="node">
<title>household</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="337.79,-2998 10.83,-2998 10.83,-2818 337.79,-2818 337.79,-2998"/>
<text xml:space="preserve" text-anchor="start" x="97.6" y="-2920" font-family="Arial" font-size="20.00" fill="#f0f9ff">Household Users</text>
<text xml:space="preserve" text-anchor="start" x="30.88" y="-2897" font-family="Arial" font-size="15.00" fill="#b6ecf7">Consumes the media, document and photo</text>
<text xml:space="preserve" text-anchor="start" x="138.46" y="-2879" font-family="Arial" font-size="15.00" fill="#b6ecf7">workloads.</text>
</g>
<!-- dashboard -->
<g id="node5" class="node">
<title>dashboard</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="334.33,-1353 14.29,-1353 14.29,-1173 334.33,-1173 334.33,-1353"/>
<text xml:space="preserve" text-anchor="start" x="125.39" y="-1255" font-family="Arial" font-size="20.00" fill="#f8fafc">Dashboard</text>
</g>
<!-- idp -->
<g id="node6" class="node">
<title>idp</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2226.27,-1426 1906.23,-1426 1906.23,-1246 2226.27,-1246 2226.27,-1426"/>
<text xml:space="preserve" text-anchor="start" x="1993.99" y="-1328" font-family="Arial" font-size="20.00" fill="#f8fafc">Identity Provider</text>
</g>
<!-- overlaynet -->
<g id="node7" class="node">
<title>overlaynet</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1592.05,-1919 1257.64,-1919 1257.64,-1739 1592.05,-1739 1592.05,-1919"/>
<text xml:space="preserve" text-anchor="start" x="1350.94" y="-1841" font-family="Arial" font-size="20.00" fill="#f8fafc">Overlay Network</text>
<text xml:space="preserve" text-anchor="start" x="1277.7" y="-1818" font-family="Arial" font-size="15.00" fill="#cbd5e1">Flat addressing across every host, wherever</text>
<text xml:space="preserve" text-anchor="start" x="1405.68" y="-1800" font-family="Arial" font-size="15.00" fill="#cbd5e1">it sits.</text>
</g>
<!-- seccodeforge -->
<g id="node8" class="node">
<title>seccodeforge</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1584.86,-2209 1264.82,-2209 1264.82,-2029 1584.86,-2029 1584.86,-2209"/>
<text xml:space="preserve" text-anchor="start" x="1321.45" y="-2111" font-family="Arial" font-size="20.00" fill="#f8fafc">Secondary Code Forge</text>
</g>
<!-- passwdman -->
<g id="node9" class="node">
<title>passwdman</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1584.86,-1629 1264.82,-1629 1264.82,-1449 1584.86,-1449 1584.86,-1629"/>
<text xml:space="preserve" text-anchor="start" x="1338.69" y="-1531" font-family="Arial" font-size="20.00" fill="#f8fafc">Password Manager</text>
</g>
<!-- databak -->
<g id="node10" class="node">
<title>databak</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1584.86,-4319 1264.82,-4319 1264.82,-4139 1584.86,-4139 1584.86,-4319"/>
<text xml:space="preserve" text-anchor="start" x="1312.56" y="-4221" font-family="Arial" font-size="20.00" fill="#f8fafc">Data Backup Coordinator</text>
</g>
<!-- dbbak -->
<g id="node11" class="node">
<title>dbbak</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1584.86,-1097 1264.82,-1097 1264.82,-917 1584.86,-917 1584.86,-1097"/>
<text xml:space="preserve" text-anchor="start" x="1290.87" y="-999" font-family="Arial" font-size="20.00" fill="#f8fafc">Database Backup Coordinator</text>
</g>
<!-- gateway -->
<g id="node12" class="node">
<title>gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1584.86,-3080 1264.82,-3080 1264.82,-2900 1584.86,-2900 1584.86,-3080"/>
<text xml:space="preserve" text-anchor="start" x="1385.38" y="-3002" font-family="Arial" font-size="20.00" fill="#f8fafc">Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1286.43" y="-2979" font-family="Arial" font-size="15.00" fill="#c2f0c2">One public entry point for every published</text>
<text xml:space="preserve" text-anchor="start" x="1405.66" y="-2961" font-family="Arial" font-size="15.00" fill="#c2f0c2">route.</text>
</g>
<!-- secretsman -->
<g id="node13" class="node">
<title>secretsman</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2226.27,-2006 1906.23,-2006 1906.23,-1826 2226.27,-1826 2226.27,-2006"/>
<text xml:space="preserve" text-anchor="start" x="1990.1" y="-1908" font-family="Arial" font-size="20.00" fill="#f8fafc">Secrets Manager</text>
</g>
<!-- containerorc -->
<g id="node14" class="node">
<title>containerorc</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2786.35,-4887 2466.31,-4887 2466.31,-4707 2786.35,-4707 2786.35,-4887"/>
<text xml:space="preserve" text-anchor="start" x="2524.62" y="-4789" font-family="Arial" font-size="20.00" fill="#f8fafc">Container Orchestrator</text>
</g>
<!-- erp -->
<g id="node15" class="node">
<title>erp</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="2226.27,-180 1906.23,-180 1906.23,0 2226.27,0 2226.27,-180"/>
<text xml:space="preserve" text-anchor="start" x="2045.69" y="-82" font-family="Arial" font-size="20.00" fill="#eef2ff">ERP</text>
</g>
<!-- phovid -->
<g id="node16" class="node">
<title>phovid</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="2226.27,-692 1906.23,-692 1906.23,-512 2226.27,-512 2226.27,-692"/>
<text xml:space="preserve" text-anchor="start" x="1960.07" y="-594" font-family="Arial" font-size="20.00" fill="#eef2ff">Personal Photo Storage</text>
</g>
<!-- docarc -->
<g id="node17" class="node">
<title>docarc</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="2226.27,-1716 1906.23,-1716 1906.23,-1536 2226.27,-1536 2226.27,-1716"/>
<text xml:space="preserve" text-anchor="start" x="1984.55" y="-1618" font-family="Arial" font-size="20.00" fill="#eef2ff">Document Archive</text>
</g>
<!-- shareddb -->
<g id="node18" class="node">
<title>shareddb</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2798.57,-2518 2454.09,-2518 2454.09,-2338 2798.57,-2338 2798.57,-2518"/>
<text xml:space="preserve" text-anchor="start" x="2548.5" y="-2440" font-family="Arial" font-size="20.00" fill="#f8fafc">Shared Database</text>
<text xml:space="preserve" text-anchor="start" x="2474.14" y="-2417" font-family="Arial" font-size="15.00" fill="#cbd5e1">One Postgres for the tenants that do not need</text>
<text xml:space="preserve" text-anchor="start" x="2593.82" y="-2399" font-family="Arial" font-size="15.00" fill="#cbd5e1">their own.</text>
</g>
<!-- pricodeforge -->
<g id="node19" class="node">
<title>pricodeforge</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="3383.9,-2920 3063.86,-2920 3063.86,-2740 3383.9,-2740 3383.9,-2920"/>
<text xml:space="preserve" text-anchor="start" x="3133.85" y="-2822" font-family="Arial" font-size="20.00" fill="#f8fafc">Primary Code Forge</text>
</g>
<!-- dns -->
<g id="node20" class="node">
<title>dns</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2226.27,-4474 1906.23,-4474 1906.23,-4294 2226.27,-4294 2226.27,-4474"/>
<text xml:space="preserve" text-anchor="start" x="1972.88" y="-4376" font-family="Arial" font-size="20.00" fill="#f8fafc">DNS and Certificates</text>
</g>
<!-- ci -->
<g id="node21" class="node">
<title>ci</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2226.27,-3631 1906.23,-3631 1906.23,-3451 2226.27,-3451 2226.27,-3631"/>
<text xml:space="preserve" text-anchor="start" x="1965.63" y="-3533" font-family="Arial" font-size="20.00" fill="#f8fafc">Continuous Integration</text>
</g>
<!-- agentgw -->
<g id="node22" class="node">
<title>agentgw</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2226.27,-5027 1906.23,-5027 1906.23,-4847 2226.27,-4847 2226.27,-5027"/>
<text xml:space="preserve" text-anchor="start" x="1997.88" y="-4929" font-family="Arial" font-size="20.00" fill="#f8fafc">Agent Gateway</text>
</g>
<!-- prjman -->
<g id="node23" class="node">
<title>prjman</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2226.27,-2808 1906.23,-2808 1906.23,-2628 2226.27,-2628 2226.27,-2808"/>
<text xml:space="preserve" text-anchor="start" x="1992.88" y="-2710" font-family="Arial" font-size="20.00" fill="#f8fafc">Project Manager</text>
</g>
<!-- docsign -->
<g id="node24" class="node">
<title>docsign</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2226.27,-2518 1906.23,-2518 1906.23,-2338 2226.27,-2338 2226.27,-2518"/>
<text xml:space="preserve" text-anchor="start" x="1984.54" y="-2420" font-family="Arial" font-size="20.00" fill="#f8fafc">Document Signing</text>
</g>
<!-- medialib -->
<g id="node25" class="node">
<title>medialib</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="2234.72,-3098 1897.78,-3098 1897.78,-2918 2234.72,-2918 2234.72,-3098"/>
<text xml:space="preserve" text-anchor="start" x="2005.67" y="-3020" font-family="Arial" font-size="20.00" fill="#eef2ff">Media Library</text>
<text xml:space="preserve" text-anchor="start" x="1917.84" y="-2997" font-family="Arial" font-size="15.00" fill="#c7d2fe">Seven products in one stack. Each is its own</text>
<text xml:space="preserve" text-anchor="start" x="2028.31" y="-2979" font-family="Arial" font-size="15.00" fill="#c7d2fe">application.</text>
</g>
<!-- gameservers -->
<g id="node26" class="node">
<title>gameservers</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="2226.27,-4184 1906.23,-4184 1906.23,-4004 2226.27,-4004 2226.27,-4184"/>
<text xml:space="preserve" text-anchor="start" x="2001.79" y="-4086" font-family="Arial" font-size="20.00" fill="#eef2ff">Game Servers</text>
</g>
<!-- email -->
<g id="node27" class="node">
<title>email</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2786.35,-3038 2466.31,-3038 2466.31,-2858 2786.35,-2858 2786.35,-3038"/>
<text xml:space="preserve" text-anchor="start" x="2538.52" y="-2940" font-family="Arial" font-size="20.00" fill="#f8fafc">Transactional Email</text>
</g>
<!-- fileexp -->
<g id="node28" class="node">
<title>fileexp</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="2786.35,-4062 2466.31,-4062 2466.31,-3882 2786.35,-3882 2786.35,-4062"/>
<text xml:space="preserve" text-anchor="start" x="2570.2" y="-3964" font-family="Arial" font-size="20.00" fill="#eef2ff">File Explorer</text>
</g>
<!-- alerting -->
<g id="node29" class="node">
<title>alerting</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3383.9,-4887 3063.86,-4887 3063.86,-4707 3383.9,-4707 3383.9,-4887"/>
<text xml:space="preserve" text-anchor="start" x="3189.97" y="-4789" font-family="Arial" font-size="20.00" fill="#f8fafc">Alerting</text>
</g>
<!-- operator&#45;&gt;configmgmt -->
<g id="edge1" class="edge">
<title>operator&#45;&gt;configmgmt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M348.6,-2459.89C415.73,-2454.42 492.32,-2448.18 559.01,-2442.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="558.92,-2445.39 566.18,-2442.16 558.49,-2440.16 558.92,-2445.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="408.62,-2454.19 408.62,-2476.99 508.78,-2476.99 508.78,-2454.19 408.62,-2454.19"/>
<text xml:space="preserve" text-anchor="start" x="411.62" y="-2459.99" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs playbooks</text>
</g>
<!-- operator&#45;&gt;www -->
<g id="edge2" class="edge">
<title>operator&#45;&gt;www</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M289.78,-2563.93C383.61,-2637.63 515.88,-2741.53 610.47,-2815.83"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="608.74,-2817.81 616.26,-2820.38 611.99,-2813.69 608.74,-2817.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="429.63,-2729.87 429.63,-2752.67 487.76,-2752.67 487.76,-2729.87 429.63,-2729.87"/>
<text xml:space="preserve" text-anchor="start" x="432.63" y="-2735.67" font-family="Arial" font-size="14.00" fill="#c9c9c9">browses</text>
</g>
<!-- configmgmt&#45;&gt;overlaynet -->
<g id="edge5" class="edge">
<title>configmgmt&#45;&gt;overlaynet</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M789.89,-2339.02C830.76,-2281.58 888.24,-2207.59 948.82,-2151.2 1042.45,-2064.04 1161.62,-1983.28 1257.18,-1924.41"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1258.46,-1926.71 1263.48,-1920.55 1255.71,-1922.23 1258.46,-1926.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="984.62,-2151.2 984.62,-2174 1161.84,-2174 1161.84,-2151.2 984.62,-2151.2"/>
<text xml:space="preserve" text-anchor="start" x="987.62" y="-2157" font-family="Arial" font-size="14.00" fill="#bbfcd3">enrols the host in the tailnet</text>
</g>
<!-- configmgmt&#45;&gt;seccodeforge -->
<g id="edge6" class="edge">
<title>configmgmt&#45;&gt;seccodeforge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M878.98,-2339C902.06,-2326.26 925.86,-2313.78 948.82,-2302.8 1048.12,-2255.33 1163.16,-2210.57 1255.15,-2177.1"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1255.83,-2179.65 1261.98,-2174.63 1254.04,-2174.72 1255.83,-2179.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1012.65,-2302.8 1012.65,-2346 1133.81,-2346 1133.81,-2302.8 1012.65,-2302.8"/>
<text xml:space="preserve" text-anchor="start" x="1015.65" y="-2329" font-family="Arial" font-size="14.00" fill="#c9c9c9">clones infra.stacks</text>
<text xml:space="preserve" text-anchor="start" x="1015.65" y="-2308.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ SSH ]</text>
</g>
<!-- configmgmt&#45;&gt;passwdman -->
<g id="edge7" class="edge">
<title>configmgmt&#45;&gt;passwdman</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M750.97,-2339.04C780.76,-2226.68 843.51,-2032.66 948.82,-1896.4 1032.14,-1788.59 1155.87,-1696.92 1256.16,-1633.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1257.35,-1635.77 1262.3,-1629.55 1254.56,-1631.32 1257.35,-1635.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="948.82,-1896.4 948.82,-1936 1197.64,-1936 1197.64,-1896.4 948.82,-1896.4"/>
<text xml:space="preserve" text-anchor="start" x="951.82" y="-1919" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads machine identities and the tailnet</text>
<text xml:space="preserve" text-anchor="start" x="951.82" y="-1902.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">auth key</text>
</g>
<!-- configmgmt&#45;&gt;databak -->
<g id="edge8" class="edge">
<title>configmgmt&#45;&gt;databak</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M778.67,-2518.94C813.35,-2585.79 858.89,-2680.08 888.82,-2767 927.99,-2880.77 913.21,-2916.07 948.82,-3031 1078.22,-3448.59 1286.83,-3926.65 1378.34,-4129.59"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1375.89,-4130.53 1381.36,-4136.28 1380.67,-4128.37 1375.89,-4130.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1032.88,-3689.05 1032.88,-3711.85 1113.59,-3711.85 1113.59,-3689.05 1032.88,-3689.05"/>
<text xml:space="preserve" text-anchor="start" x="1035.88" y="-3694.85" font-family="Arial" font-size="14.00" fill="#bbfcd3">restore gate</text>
</g>
<!-- configmgmt&#45;&gt;dbbak -->
<g id="edge9" class="edge">
<title>configmgmt&#45;&gt;dbbak</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M742.74,-2339.27C767.2,-2187.04 828.84,-1871.25 948.82,-1630.2 1029.6,-1467.91 1087.78,-1451.2 1197.64,-1307 1248.89,-1239.73 1306.25,-1163.65 1350.39,-1104.94"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1352.3,-1106.76 1354.7,-1099.19 1348.1,-1103.61 1352.3,-1106.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1032.88,-1630.2 1032.88,-1653 1113.59,-1653 1113.59,-1630.2 1032.88,-1630.2"/>
<text xml:space="preserve" text-anchor="start" x="1035.88" y="-1636" font-family="Arial" font-size="14.00" fill="#bbfcd3">restore gate</text>
</g>
<!-- configmgmt&#45;&gt;gateway -->
<g id="edge10" class="edge">
<title>configmgmt&#45;&gt;gateway</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M840.93,-2518.82C967.8,-2621.38 1174.56,-2788.5 1304.69,-2893.69"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1302.93,-2895.64 1310.41,-2898.31 1306.23,-2891.56 1302.93,-2895.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="979.19,-2792.53 979.19,-2815.33 1167.27,-2815.33 1167.27,-2792.53 979.19,-2792.53"/>
<text xml:space="preserve" text-anchor="start" x="982.19" y="-2798.33" font-family="Arial" font-size="14.00" fill="#bbfcd3">installs the newt systemd unit</text>
</g>
<!-- configmgmt&#45;&gt;secretsman -->
<g id="edge11" class="edge">
<title>configmgmt&#45;&gt;secretsman</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M888.73,-2419.01C1066.37,-2403.27 1359.6,-2363.41 1592.05,-2264 1733.72,-2203.41 1873,-2093.12 1963.36,-2012.9"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1965.03,-2014.93 1968.88,-2007.97 1961.53,-2011.01 1965.03,-2014.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1335.45,-2364.59 1335.45,-2387.39 1514.23,-2387.39 1514.23,-2364.59 1335.45,-2364.59"/>
<text xml:space="preserve" text-anchor="start" x="1338.45" y="-2370.39" font-family="Arial" font-size="14.00" fill="#bbfcd3">bootstraps the control plane</text>
</g>
<!-- configmgmt&#45;&gt;containerorc -->
<g id="edge12" class="edge">
<title>configmgmt&#45;&gt;containerorc</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M783.51,-2518.72C820.2,-2584.88 866.14,-2678.42 888.82,-2767 996.2,-3186.29 838.74,-3320.41 948.82,-3739 1124.19,-4405.89 1115.71,-4688.59 1652.05,-5122 1854.87,-5285.9 1980.52,-5249.19 2234.72,-5191 2311.4,-5173.45 2333.69,-5164.4 2394.09,-5114 2467.32,-5052.9 2529.62,-4963.81 2571.04,-4895.63"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2573.05,-4897.37 2574.68,-4889.59 2568.56,-4894.66 2573.05,-4897.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1731.42,-5225.28 1731.42,-5248.08 1758.41,-5248.08 1758.41,-5225.28 1731.42,-5225.28"/>
<text xml:space="preserve" text-anchor="start" x="1734.42" y="-5233.48" font-family="Arial" font-weight="bold" font-size="14.00" fill="#bbfcd3">[...]</text>
</g>
<!-- www&#45;&gt;gateway -->
<g id="edge13" class="edge">
<title>www&#45;&gt;gateway</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M888.59,-2926.76C997.92,-2939.68 1142.99,-2956.82 1254.52,-2969.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1254.1,-2972.59 1261.85,-2970.86 1254.71,-2967.37 1254.1,-2972.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="997.88,-2961.14 997.88,-3004.34 1148.59,-3004.34 1148.59,-2961.14 997.88,-2961.14"/>
<text xml:space="preserve" text-anchor="start" x="1000.88" y="-2987.34" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTPS :443, HTTP :80</text>
<text xml:space="preserve" text-anchor="start" x="1000.88" y="-2966.54" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- household&#45;&gt;www -->
<g id="edge3" class="edge">
<title>household&#45;&gt;www</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M337.71,-2908C407.2,-2908 488.33,-2908 558.56,-2908"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="558.31,-2910.63 565.81,-2908 558.31,-2905.38 558.31,-2910.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="429.63,-2908 429.63,-2930.8 487.76,-2930.8 487.76,-2908 429.63,-2908"/>
<text xml:space="preserve" text-anchor="start" x="432.63" y="-2913.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">browses</text>
</g>
<!-- dashboard&#45;&gt;idp -->
<g id="edge4" class="edge">
<title>dashboard&#45;&gt;idp</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M334.15,-1256.05C490.49,-1249.58 736.05,-1240.4 948.82,-1236.8 1059.39,-1234.93 1087.23,-1230.51 1197.64,-1236.8 1441.4,-1250.69 1721.81,-1286.36 1896.3,-1310.91"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1895.81,-1313.49 1903.61,-1311.94 1896.55,-1308.3 1895.81,-1313.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1009.53,-1236.8 1009.53,-1280 1136.93,-1280 1136.93,-1236.8 1009.53,-1236.8"/>
<text xml:space="preserve" text-anchor="start" x="1012.53" y="-1263" font-family="Arial" font-size="14.00" fill="#d4f2ff">authenticates users</text>
<text xml:space="preserve" text-anchor="start" x="1012.53" y="-1242.2" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ OIDC ]</text>
</g>
<!-- overlaynet&#45;&gt;idp -->
<g id="edge14" class="edge">
<title>overlaynet&#45;&gt;idp</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M1543.63,-1739.3C1561.38,-1722.27 1578.31,-1703.6 1592.05,-1684 1634.48,-1623.43 1601.55,-1582.83 1652.05,-1528.8 1717.49,-1458.77 1813.46,-1411.85 1896.45,-1381.85"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1897.2,-1384.37 1903.39,-1379.39 1895.44,-1379.43 1897.2,-1384.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1673.81,-1528.8 1673.81,-1572 1816.02,-1572 1816.02,-1528.8 1673.81,-1528.8"/>
<text xml:space="preserve" text-anchor="start" x="1676.81" y="-1555" font-family="Arial" font-size="14.00" fill="#d4f2ff">exposes on the tailnet</text>
<text xml:space="preserve" text-anchor="start" x="1676.81" y="-1534.2" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ shared__ts&#45;gateway ]</text>
</g>
<!-- overlaynet&#45;&gt;secretsman -->
<g id="edge15" class="edge">
<title>overlaynet&#45;&gt;secretsman</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M1529.35,-1918.86C1550.16,-1937.06 1571.84,-1956.1 1592.05,-1974 1618.9,-1997.79 1618.55,-2015.15 1652.05,-2028 1730.74,-2058.2 1820.79,-2039.66 1896.7,-2009.65"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1897.59,-2012.12 1903.56,-2006.87 1895.62,-2007.25 1897.59,-2012.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1673.81,-2043.4 1673.81,-2086.6 1816.02,-2086.6 1816.02,-2043.4 1673.81,-2043.4"/>
<text xml:space="preserve" text-anchor="start" x="1676.81" y="-2069.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">exposes on the tailnet</text>
<text xml:space="preserve" text-anchor="start" x="1676.81" y="-2048.8" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ shared__ts&#45;gateway ]</text>
</g>
<!-- databak&#45;&gt;containerorc -->
<g id="edge16" class="edge">
<title>databak&#45;&gt;containerorc</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1430.29,-4318.98C1442.32,-4470.47 1486.89,-4778.45 1652.05,-4968 1825.39,-5166.95 1983.84,-5163.79 2234.72,-5082 2348.11,-5045.03 2455.95,-4961.32 2529.48,-4894.13"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2529.43,-4894.17 2530.71,-4888.92 2536.05,-4888.07 2534.77,-4893.33 2529.43,-4894.17"/>
</g>
<!-- dbbak&#45;&gt;idp -->
<g id="edge19" class="edge">
<title>dbbak&#45;&gt;idp</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1584.59,-1080.54C1661.65,-1117.03 1755.2,-1162.52 1837.78,-1206 1858.64,-1216.98 1880.38,-1228.85 1901.79,-1240.79"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1901.84,-1240.81 1907.23,-1240.39 1909.69,-1245.21 1904.3,-1245.63 1901.84,-1240.81"/>
</g>
<!-- dbbak&#45;&gt;secretsman -->
<g id="edge20" class="edge">
<title>dbbak&#45;&gt;secretsman</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1471.84,-1096.98C1509.39,-1173.98 1561.14,-1288.76 1592.05,-1394 1637.63,-1549.21 1550.29,-1627.25 1652.05,-1753 1711.89,-1826.95 1810,-1867.48 1895.6,-1889.63"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1895.77,-1889.67 1900.87,-1887.86 1904.5,-1891.86 1899.4,-1893.67 1895.77,-1889.67"/>
</g>
<!-- dbbak&#45;&gt;containerorc -->
<g id="edge22" class="edge">
<title>dbbak&#45;&gt;containerorc</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1584.61,-990.95C1772.84,-981.8 2080.4,-1000 2234.72,-1191 2287.27,-1256.04 2288.39,-2611.62 2294.72,-2695 2342.84,-3329.13 2340.76,-3491.22 2454.09,-4117 2491.84,-4325.48 2557.41,-4564.78 2595.52,-4696.63"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2595.55,-4696.73 2599.68,-4700.22 2598.05,-4705.37 2593.92,-4701.89 2595.55,-4696.73"/>
</g>
<!-- dbbak&#45;&gt;erp -->
<g id="edge17" class="edge">
<title>dbbak&#45;&gt;erp</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1429.23,-917.27C1439.66,-764.29 1481.9,-451.33 1652.05,-263 1715.55,-192.72 1812.15,-150.15 1895.99,-124.84"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1896.05,-124.82 1899.52,-120.67 1904.68,-122.27 1901.22,-126.42 1896.05,-124.82"/>
</g>
<!-- dbbak&#45;&gt;phovid -->
<g id="edge18" class="edge">
<title>dbbak&#45;&gt;phovid</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1497.99,-917.14C1539.27,-870.11 1594.25,-814.31 1652.05,-775 1726.51,-724.35 1818.16,-684.13 1896.21,-655.26"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1896.49,-655.15 1899.68,-650.79 1904.94,-652.06 1901.75,-656.42 1896.49,-655.15"/>
</g>
<!-- dbbak&#45;&gt;docarc -->
<g id="edge21" class="edge">
<title>dbbak&#45;&gt;docarc</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1509.84,-1096.75C1552.08,-1141.43 1604.31,-1196.01 1652.05,-1244 1759.06,-1351.57 1785.78,-1378.64 1897.78,-1481 1915.02,-1496.75 1933.49,-1513.18 1951.65,-1529.09"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1951.84,-1529.25 1957.2,-1529.95 1958.61,-1535.17 1953.25,-1534.47 1951.84,-1529.25"/>
</g>
<!-- dbbak&#45;&gt;shareddb -->
<g id="edge23" class="edge">
<title>dbbak&#45;&gt;shareddb</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1472.11,-917.06C1513.38,-841.66 1578.52,-733.55 1652.05,-652 1834.9,-449.18 2023.68,-283.68 2234.72,-457 2528.79,-698.51 2605.33,-1959.89 2621.53,-2327.42"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2621.53,-2327.5 2624.72,-2331.86 2621.92,-2336.49 2618.73,-2332.12 2621.53,-2327.5"/>
</g>
<!-- dbbak&#45;&gt;pricodeforge -->
<g id="edge24" class="edge">
<title>dbbak&#45;&gt;pricodeforge</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1584.77,-954.62C1757.97,-907.8 2036.77,-863.37 2234.72,-984 2898.65,-1388.59 3142.94,-2405.69 3205.35,-2729.4"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="3205.38,-2729.55 3209.17,-2733.41 3207.07,-2738.39 3203.28,-2734.53 3205.38,-2729.55"/>
</g>
<!-- gateway&#45;&gt;idp -->
<g id="edge26" class="edge">
<title>gateway&#45;&gt;idp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1462.17,-2900.34C1501.26,-2799.63 1561.89,-2630.42 1592.05,-2479 1625.18,-2312.59 1565.88,-1863.97 1652.05,-1717.8 1702.3,-1632.55 1771.38,-1668.38 1837.78,-1595 1876.2,-1552.55 1862.19,-1525.85 1897.78,-1481 1911.05,-1464.28 1926.44,-1448 1942.4,-1432.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1943.9,-1434.93 1947.56,-1427.88 1940.3,-1431.11 1943.9,-1434.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1670.32,-1717.8 1670.32,-1761 1819.51,-1761 1819.51,-1717.8 1670.32,-1717.8"/>
<text xml:space="preserve" text-anchor="start" x="1673.32" y="-1744" font-family="Arial" font-size="14.00" fill="#c9c9c9">authentik.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="1673.32" y="-1723.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;secretsman -->
<g id="edge29" class="edge">
<title>gateway&#45;&gt;secretsman</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1451.14,-2900.26C1493.88,-2753.63 1582.55,-2471.3 1652.05,-2394.8 1713.96,-2326.64 1778.99,-2373.87 1837.78,-2303 1900.85,-2226.98 1848.6,-2174.66 1897.78,-2089 1913.19,-2062.18 1933.67,-2036.41 1955.02,-2013.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1956.68,-2015.39 1959.91,-2008.13 1952.86,-2011.8 1956.68,-2015.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1669.55,-2394.8 1669.55,-2438 1820.28,-2438 1820.28,-2394.8 1669.55,-2394.8"/>
<text xml:space="preserve" text-anchor="start" x="1672.55" y="-2421" font-family="Arial" font-size="14.00" fill="#c9c9c9">infisical.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1672.55" y="-2400.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;containerorc -->
<g id="edge35" class="edge">
<title>gateway&#45;&gt;containerorc</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1438.93,-3079.76C1482.03,-3373.63 1618.66,-4291.3 1652.05,-4346 1824.49,-4628.53 2226.62,-4736.14 2456.39,-4775.53"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2455.7,-4778.08 2463.54,-4776.74 2456.58,-4772.9 2455.7,-4778.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1996.72,-4724.1 1996.72,-4767.3 2135.78,-4767.3 2135.78,-4724.1 1996.72,-4724.1"/>
<text xml:space="preserve" text-anchor="start" x="1999.72" y="-4750.3" font-family="Arial" font-size="14.00" fill="#c9c9c9">komo.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1999.72" y="-4729.5" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;docarc -->
<g id="edge32" class="edge">
<title>gateway&#45;&gt;docarc</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1461.15,-2900.13C1499.34,-2799.23 1559.18,-2629.86 1592.05,-2479 1641.69,-2251.17 1539.35,-2161.93 1652.05,-1957.8 1684.89,-1898.3 1817.46,-1796.96 1923.7,-1721.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1925.18,-1724.06 1929.8,-1717.6 1922.16,-1719.77 1925.18,-1724.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1674.6,-1957.8 1674.6,-2001 1815.23,-2001 1815.23,-1957.8 1674.6,-1957.8"/>
<text xml:space="preserve" text-anchor="start" x="1677.6" y="-1984" font-family="Arial" font-size="14.00" fill="#c9c9c9">paper.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1677.6" y="-1963.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;pricodeforge -->
<g id="edge38" class="edge">
<title>gateway&#45;&gt;pricodeforge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1460.21,-2900.21C1497.44,-2811.51 1563.58,-2675.74 1652.05,-2581 1719.12,-2509.17 1777.44,-2538.57 1837.78,-2461 1889.05,-2395.11 1829.98,-2331.7 1897.78,-2283 2222.96,-2049.46 2439.05,-2106.87 2798.57,-2283 2988.82,-2376.2 3118.24,-2600.39 3180.4,-2731"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3177.9,-2731.83 3183.47,-2737.5 3182.64,-2729.59 3177.9,-2731.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2294.72,-2135.24 2294.72,-2178.44 2394.09,-2178.44 2394.09,-2135.24 2294.72,-2135.24"/>
<text xml:space="preserve" text-anchor="start" x="2297.72" y="-2161.44" font-family="Arial" font-size="14.00" fill="#c9c9c9">fj.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="2297.72" y="-2140.64" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;dns -->
<g id="edge25" class="edge">
<title>gateway&#45;&gt;dns</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1434.8,-3079.72C1459.75,-3315.54 1535.9,-3946.35 1652.05,-4117 1711.74,-4204.71 1810.8,-4270.17 1896.96,-4314.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1895.75,-4316.64 1903.63,-4317.69 1898.12,-4311.96 1895.75,-4316.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1673.06,-4275.86 1673.06,-4319.06 1816.77,-4319.06 1816.77,-4275.86 1673.06,-4275.86"/>
<text xml:space="preserve" text-anchor="start" x="1676.06" y="-4302.06" font-family="Arial" font-size="14.00" fill="#c9c9c9">solves ACME DNS&#45;01</text>
<text xml:space="preserve" text-anchor="start" x="1676.06" y="-4281.26" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ ACME ]</text>
</g>
<!-- gateway&#45;&gt;ci -->
<g id="edge27" class="edge">
<title>gateway&#45;&gt;ci</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1453.57,-3079.99C1486.59,-3172.88 1550.42,-3315.89 1652.05,-3401 1721.24,-3458.95 1815.54,-3493.28 1896.58,-3513.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1895.55,-3515.88 1903.46,-3515.1 1896.79,-3510.78 1895.55,-3515.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1683.94,-3493.86 1683.94,-3537.06 1805.89,-3537.06 1805.89,-3493.86 1683.94,-3493.86"/>
<text xml:space="preserve" text-anchor="start" x="1686.94" y="-3520.06" font-family="Arial" font-size="14.00" fill="#c9c9c9">peck.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="1686.94" y="-3499.26" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;agentgw -->
<g id="edge28" class="edge">
<title>gateway&#45;&gt;agentgw</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1441.49,-3079.79C1473.55,-3266.33 1547.45,-3709.63 1592.05,-4084 1610.33,-4237.49 1559.26,-4653.37 1652.05,-4777 1709.68,-4853.79 1809.34,-4893.74 1896.34,-4914.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1895.5,-4917.01 1903.39,-4916.14 1896.68,-4911.89 1895.5,-4917.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1652.05,-4897.77 1652.05,-4940.97 1837.78,-4940.97 1837.78,-4897.77 1652.05,-4897.77"/>
<text xml:space="preserve" text-anchor="start" x="1655.05" y="-4923.97" font-family="Arial" font-size="14.00" fill="#c9c9c9">komodo&#45;mcp.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1655.05" y="-4903.17" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;prjman -->
<g id="edge30" class="edge">
<title>gateway&#45;&gt;prjman</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1584.72,-2922.41C1679.66,-2882.03 1800.2,-2830.75 1896.79,-2789.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1897.7,-2792.13 1903.57,-2786.78 1895.65,-2787.3 1897.7,-2792.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1675.38,-2886.36 1675.38,-2929.56 1814.45,-2929.56 1814.45,-2886.36 1675.38,-2886.36"/>
<text xml:space="preserve" text-anchor="start" x="1678.38" y="-2912.56" font-family="Arial" font-size="14.00" fill="#c9c9c9">openprj.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="1678.38" y="-2891.76" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;docsign -->
<g id="edge31" class="edge">
<title>gateway&#45;&gt;docsign</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1505.36,-2900.16C1547.45,-2854.21 1600.89,-2798.32 1652.05,-2751.8 1741.77,-2670.21 1849.86,-2585.95 1932.98,-2523.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1934.33,-2526.11 1938.78,-2519.52 1931.2,-2521.9 1934.33,-2526.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1670.71,-2751.8 1670.71,-2795 1819.12,-2795 1819.12,-2751.8 1670.71,-2751.8"/>
<text xml:space="preserve" text-anchor="start" x="1673.71" y="-2778" font-family="Arial" font-size="14.00" fill="#c9c9c9">docuseal.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="1673.71" y="-2757.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;medialib -->
<g id="edge33" class="edge">
<title>gateway&#45;&gt;medialib</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1584.72,-2994.47C1676.7,-2997.06 1792.7,-3000.33 1887.68,-3003"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1887.38,-3005.62 1894.95,-3003.21 1887.52,-3000.37 1887.38,-3005.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1715.58,-3001.14 1715.58,-3044.34 1774.25,-3044.34 1774.25,-3001.14 1715.58,-3001.14"/>
<text xml:space="preserve" text-anchor="start" x="1718.58" y="-3029.74" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
<text xml:space="preserve" text-anchor="start" x="1718.58" y="-3006.54" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;gameservers -->
<g id="edge34" class="edge">
<title>gateway&#45;&gt;gameservers</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1436.64,-3079.62C1463.57,-3289.63 1539.75,-3805.52 1652.05,-3934 1714.2,-4005.11 1811.76,-4044.81 1896.48,-4066.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1895.63,-4069.37 1903.55,-4068.67 1896.92,-4064.28 1895.63,-4069.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1691.34,-4046.87 1691.34,-4090.07 1798.49,-4090.07 1798.49,-4046.87 1691.34,-4046.87"/>
<text xml:space="preserve" text-anchor="start" x="1694.34" y="-4073.07" font-family="Arial" font-size="14.00" fill="#c9c9c9">raw TCP :18022</text>
<text xml:space="preserve" text-anchor="start" x="1694.34" y="-4052.27" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ TCP ]</text>
</g>
<!-- gateway&#45;&gt;email -->
<g id="edge36" class="edge">
<title>gateway&#45;&gt;email</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1584.83,-3063.48C1748.59,-3129.49 2010.78,-3208.19 2234.72,-3153 2322.79,-3131.29 2412.97,-3085.79 2484.47,-3043.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2485.42,-3045.65 2490.5,-3039.54 2482.72,-3041.15 2485.42,-3045.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2028.24,-3171.62 2028.24,-3194.42 2104.26,-3194.42 2104.26,-3171.62 2028.24,-3171.62"/>
<text xml:space="preserve" text-anchor="start" x="2031.24" y="-3177.42" font-family="Arial" font-size="14.00" fill="#c9c9c9">SMTP :465</text>
</g>
<!-- gateway&#45;&gt;fileexp -->
<g id="edge37" class="edge">
<title>gateway&#45;&gt;fileexp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1440.44,-3079.83C1464.61,-3202.78 1523.65,-3424.14 1652.05,-3564 1867.78,-3799 2240.27,-3903.07 2456.5,-3945.6"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2455.84,-3948.15 2463.71,-3947 2456.85,-3942.99 2455.84,-3948.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2021.62,-3889.47 2021.62,-3932.67 2110.88,-3932.67 2110.88,-3889.47 2021.62,-3889.47"/>
<text xml:space="preserve" text-anchor="start" x="2024.62" y="-3915.67" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTP :18450</text>
<text xml:space="preserve" text-anchor="start" x="2024.62" y="-3894.87" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- secretsman&#45;&gt;email -->
<g id="edge41" class="edge">
<title>secretsman&#45;&gt;email</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2111.26,-2005.79C2146.61,-2079.43 2196.5,-2186.84 2234.72,-2283 2265.24,-2359.8 2251.35,-2388.65 2294.72,-2459 2327.8,-2512.66 2355.59,-2510.29 2394.09,-2560.2 2465.19,-2652.39 2531.63,-2768.14 2574.88,-2849.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2572.51,-2850.23 2578.35,-2855.61 2577.15,-2847.76 2572.51,-2850.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2306.39,-2560.2 2306.39,-2583 2382.42,-2583 2382.42,-2560.2 2306.39,-2560.2"/>
<text xml:space="preserve" text-anchor="start" x="2309.39" y="-2566" font-family="Arial" font-size="14.00" fill="#c9c9c9">SMTP :465</text>
</g>
<!-- containerorc&#45;&gt;pricodeforge -->
<g id="edge45" class="edge">
<title>containerorc&#45;&gt;pricodeforge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2655.29,-4707.12C2718.23,-4504.56 2875.53,-3996.85 3003.86,-3571 3072.88,-3341.93 3152.03,-3072.39 3193.7,-2929.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3196.2,-2930.76 3195.78,-2922.82 3191.16,-2929.28 3196.2,-2930.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2858.57,-4043.19 2858.57,-4065.99 3003.86,-4065.99 3003.86,-4043.19 2858.57,-4043.19"/>
<text xml:space="preserve" text-anchor="start" x="2861.57" y="-4048.99" font-family="Arial" font-size="14.00" fill="#c9c9c9">syncs stack definitions</text>
</g>
<!-- containerorc&#45;&gt;alerting -->
<g id="edge46" class="edge">
<title>containerorc&#45;&gt;alerting</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2786.14,-4797C2868.67,-4797 2969.56,-4797 3053.57,-4797"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3053.46,-4799.63 3060.96,-4797 3053.46,-4794.38 3053.46,-4799.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2890.47,-4797 2890.47,-4819.8 2971.96,-4819.8 2971.96,-4797 2890.47,-4797"/>
<text xml:space="preserve" text-anchor="start" x="2893.47" y="-4802.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends alerts</text>
</g>
<!-- ci&#45;&gt;pricodeforge -->
<g id="edge39" class="edge">
<title>ci&#45;&gt;pricodeforge</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M2214.47,-3451.13C2362.26,-3360.84 2596.39,-3217.59 2798.57,-3093 2888.45,-3037.62 2988.86,-2975.39 3069.43,-2925.38"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="3070.6,-2927.74 3075.59,-2921.56 3067.83,-2923.28 3070.6,-2927.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2512.82,-3298.02 2512.82,-3341.22 2739.84,-3341.22 2739.84,-3298.02 2512.82,-3298.02"/>
<text xml:space="preserve" text-anchor="start" x="2515.82" y="-3324.22" font-family="Arial" font-size="14.00" fill="#d4f2ff">OAuth2 login and repository access</text>
<text xml:space="preserve" text-anchor="start" x="2515.82" y="-3303.42" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ OIDC ]</text>
</g>
<!-- agentgw&#45;&gt;containerorc -->
<g id="edge40" class="edge">
<title>agentgw&#45;&gt;containerorc</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2226.05,-4897.16C2298.21,-4879.06 2383.63,-4857.63 2456.91,-4839.25"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2457.13,-4841.9 2463.77,-4837.53 2455.86,-4836.81 2457.13,-4841.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2302.1,-4879.54 2302.1,-4902.34 2386.7,-4902.34 2386.7,-4879.54 2302.1,-4879.54"/>
<text xml:space="preserve" text-anchor="start" x="2305.1" y="-4885.34" font-family="Arial" font-size="14.00" fill="#c9c9c9">Komodo API</text>
</g>
<!-- prjman&#45;&gt;shareddb -->
<g id="edge42" class="edge">
<title>prjman&#45;&gt;shareddb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2225.95,-2671.82C2280.74,-2653.14 2341.53,-2629.24 2394.09,-2601 2434.33,-2579.38 2475.22,-2551.24 2511.19,-2523.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2512.5,-2526.26 2516.86,-2519.62 2509.31,-2522.08 2512.5,-2526.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2299.38,-2644.82 2299.38,-2667.62 2389.42,-2667.62 2389.42,-2644.82 2299.38,-2644.82"/>
<text xml:space="preserve" text-anchor="start" x="2302.38" y="-2650.62" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- docsign&#45;&gt;shareddb -->
<g id="edge43" class="edge">
<title>docsign&#45;&gt;shareddb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2225.98,-2417.92C2249.03,-2416.79 2272.48,-2415.83 2294.72,-2415.2 2343.1,-2413.84 2395.44,-2414.76 2443.91,-2416.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2443.56,-2419.22 2451.16,-2416.9 2443.77,-2413.98 2443.56,-2419.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2299.38,-2415.2 2299.38,-2438 2389.42,-2438 2389.42,-2415.2 2299.38,-2415.2"/>
<text xml:space="preserve" text-anchor="start" x="2302.38" y="-2421" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- gameservers&#45;&gt;fileexp -->
<g id="edge44" class="edge">
<title>gameservers&#45;&gt;fileexp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2226.05,-4059.28C2298.06,-4043.54 2383.29,-4024.91 2456.46,-4008.92"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2456.98,-4011.49 2463.75,-4007.32 2455.86,-4006.36 2456.98,-4011.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2294.72,-4043.93 2294.72,-4066.73 2394.08,-4066.73 2394.08,-4043.93 2294.72,-4043.93"/>
<text xml:space="preserve" text-anchor="start" x="2297.72" y="-4049.73" font-family="Arial" font-size="14.00" fill="#c9c9c9">stores its world</text>
</g>
</g>
</svg>
`;case`secrets`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="945pt" height="5140pt"
 viewBox="0.00 0.00 945.00 5140.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 5125.05)">
<g id="clust1" class="cluster">
<title>cluster_secretsman</title>
<polygon fill="#3e4651" stroke="#2d333d" points="523.29,-2433 523.29,-2698 907.33,-2698 907.33,-2433 523.29,-2433"/>
<text xml:space="preserve" text-anchor="start" x="531.29" y="-2685.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">SECRETS MANAGER</text>
</g>
<!-- infisical -->
<g id="node1" class="node">
<title>infisical</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="875.33,-2645 555.29,-2645 555.29,-2465 875.33,-2465 875.33,-2645"/>
<text xml:space="preserve" text-anchor="start" x="681.97" y="-2547" font-family="Arial" font-size="20.00" fill="#eff6ff">Infisical</text>
</g>
<!-- overlaynet -->
<g id="node2" class="node">
<title>overlaynet</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="339.45,-5110 5.04,-5110 5.04,-4930 339.45,-4930 339.45,-5110"/>
<text xml:space="preserve" text-anchor="start" x="98.34" y="-5032" font-family="Arial" font-size="20.00" fill="#f8fafc">Overlay Network</text>
<text xml:space="preserve" text-anchor="start" x="25.1" y="-5009" font-family="Arial" font-size="15.00" fill="#cbd5e1">Flat addressing across every host, wherever</text>
<text xml:space="preserve" text-anchor="start" x="153.07" y="-4991" font-family="Arial" font-size="15.00" fill="#cbd5e1">it sits.</text>
</g>
<!-- gateway -->
<g id="node3" class="node">
<title>gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="332.26,-4820 12.22,-4820 12.22,-4640 332.26,-4640 332.26,-4820"/>
<text xml:space="preserve" text-anchor="start" x="132.78" y="-4742" font-family="Arial" font-size="20.00" fill="#f8fafc">Gateway</text>
<text xml:space="preserve" text-anchor="start" x="33.83" y="-4719" font-family="Arial" font-size="15.00" fill="#c2f0c2">One public entry point for every published</text>
<text xml:space="preserve" text-anchor="start" x="153.06" y="-4701" font-family="Arial" font-size="15.00" fill="#c2f0c2">route.</text>
</g>
<!-- idp -->
<g id="node4" class="node">
<title>idp</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="332.26,-4530 12.22,-4530 12.22,-4350 332.26,-4350 332.26,-4530"/>
<text xml:space="preserve" text-anchor="start" x="99.99" y="-4432" font-family="Arial" font-size="20.00" fill="#f8fafc">Identity Provider</text>
</g>
<!-- containerorc -->
<g id="node5" class="node">
<title>containerorc</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="332.26,-4240 12.22,-4240 12.22,-4060 332.26,-4060 332.26,-4240"/>
<text xml:space="preserve" text-anchor="start" x="70.53" y="-4142" font-family="Arial" font-size="20.00" fill="#f8fafc">Container Orchestrator</text>
</g>
<!-- configmgmt -->
<g id="node6" class="node">
<title>configmgmt</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="332.26,-3950 12.22,-3950 12.22,-3770 332.26,-3770 332.26,-3950"/>
<text xml:space="preserve" text-anchor="start" x="51.61" y="-3852" font-family="Arial" font-size="20.00" fill="#f8fafc">Configuration Management</text>
</g>
<!-- pricodeforge -->
<g id="node7" class="node">
<title>pricodeforge</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="332.26,-3660 12.22,-3660 12.22,-3480 332.26,-3480 332.26,-3660"/>
<text xml:space="preserve" text-anchor="start" x="82.21" y="-3562" font-family="Arial" font-size="20.00" fill="#f8fafc">Primary Code Forge</text>
</g>
<!-- ci -->
<g id="node8" class="node">
<title>ci</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="332.26,-3370 12.22,-3370 12.22,-3190 332.26,-3190 332.26,-3370"/>
<text xml:space="preserve" text-anchor="start" x="71.62" y="-3272" font-family="Arial" font-size="20.00" fill="#f8fafc">Continuous Integration</text>
</g>
<!-- agentgw -->
<g id="node9" class="node">
<title>agentgw</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="332.26,-3080 12.22,-3080 12.22,-2900 332.26,-2900 332.26,-3080"/>
<text xml:space="preserve" text-anchor="start" x="103.87" y="-2982" font-family="Arial" font-size="20.00" fill="#f8fafc">Agent Gateway</text>
</g>
<!-- databak -->
<g id="node10" class="node">
<title>databak</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="332.26,-2790 12.22,-2790 12.22,-2610 332.26,-2610 332.26,-2790"/>
<text xml:space="preserve" text-anchor="start" x="59.96" y="-2692" font-family="Arial" font-size="20.00" fill="#f8fafc">Data Backup Coordinator</text>
</g>
<!-- dbbak -->
<g id="node11" class="node">
<title>dbbak</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="332.26,-2500 12.22,-2500 12.22,-2320 332.26,-2320 332.26,-2500"/>
<text xml:space="preserve" text-anchor="start" x="38.27" y="-2402" font-family="Arial" font-size="20.00" fill="#f8fafc">Database Backup Coordinator</text>
</g>
<!-- dashboard -->
<g id="node12" class="node">
<title>dashboard</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="332.26,-2210 12.22,-2210 12.22,-2030 332.26,-2030 332.26,-2210"/>
<text xml:space="preserve" text-anchor="start" x="123.32" y="-2112" font-family="Arial" font-size="20.00" fill="#f8fafc">Dashboard</text>
</g>
<!-- shareddb -->
<g id="node13" class="node">
<title>shareddb</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="344.48,-1920 0,-1920 0,-1740 344.48,-1740 344.48,-1920"/>
<text xml:space="preserve" text-anchor="start" x="94.41" y="-1842" font-family="Arial" font-size="20.00" fill="#f8fafc">Shared Database</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-1819" font-family="Arial" font-size="15.00" fill="#cbd5e1">One Postgres for the tenants that do not need</text>
<text xml:space="preserve" text-anchor="start" x="139.73" y="-1801" font-family="Arial" font-size="15.00" fill="#cbd5e1">their own.</text>
</g>
<!-- prjman -->
<g id="node14" class="node">
<title>prjman</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="332.26,-1630 12.22,-1630 12.22,-1450 332.26,-1450 332.26,-1630"/>
<text xml:space="preserve" text-anchor="start" x="98.87" y="-1532" font-family="Arial" font-size="20.00" fill="#f8fafc">Project Manager</text>
</g>
<!-- docsign -->
<g id="node15" class="node">
<title>docsign</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="332.26,-1340 12.22,-1340 12.22,-1160 332.26,-1160 332.26,-1340"/>
<text xml:space="preserve" text-anchor="start" x="90.53" y="-1242" font-family="Arial" font-size="20.00" fill="#f8fafc">Document Signing</text>
</g>
<!-- docarc -->
<g id="node16" class="node">
<title>docarc</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="332.26,-1050 12.22,-1050 12.22,-870 332.26,-870 332.26,-1050"/>
<text xml:space="preserve" text-anchor="start" x="90.54" y="-952" font-family="Arial" font-size="20.00" fill="#eef2ff">Document Archive</text>
</g>
<!-- erp -->
<g id="node17" class="node">
<title>erp</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="332.26,-760 12.22,-760 12.22,-580 332.26,-580 332.26,-760"/>
<text xml:space="preserve" text-anchor="start" x="151.68" y="-662" font-family="Arial" font-size="20.00" fill="#eef2ff">ERP</text>
</g>
<!-- phovid -->
<g id="node18" class="node">
<title>phovid</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="332.26,-470 12.22,-470 12.22,-290 332.26,-290 332.26,-470"/>
<text xml:space="preserve" text-anchor="start" x="66.06" y="-372" font-family="Arial" font-size="20.00" fill="#eef2ff">Personal Photo Storage</text>
</g>
<!-- medialib -->
<g id="node19" class="node">
<title>medialib</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="340.71,-180 3.78,-180 3.78,0 340.71,0 340.71,-180"/>
<text xml:space="preserve" text-anchor="start" x="111.66" y="-102" font-family="Arial" font-size="20.00" fill="#eef2ff">Media Library</text>
<text xml:space="preserve" text-anchor="start" x="23.83" y="-79" font-family="Arial" font-size="15.00" fill="#c7d2fe">Seven products in one stack. Each is its own</text>
<text xml:space="preserve" text-anchor="start" x="134.3" y="-61" font-family="Arial" font-size="15.00" fill="#c7d2fe">application.</text>
</g>
<!-- overlaynet&#45;&gt;infisical -->
<g id="edge1" class="edge">
<title>overlaynet&#45;&gt;infisical</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M293.15,-4930.33C311.71,-4913.24 329.63,-4894.54 344.48,-4875 441.36,-4747.61 452.48,-4702.21 495.29,-4548 691.18,-3842.37 713.02,-2950.53 714.59,-2655.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="717.21,-2655.37 714.62,-2647.86 711.96,-2655.35 717.21,-2655.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="436.39,-4788.91 436.39,-4811.71 463.38,-4811.71 463.38,-4788.91 436.39,-4788.91"/>
<text xml:space="preserve" text-anchor="start" x="439.39" y="-4797.11" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- gateway&#45;&gt;infisical -->
<g id="edge2" class="edge">
<title>gateway&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M292.76,-4640.04C311.37,-4622.98 329.4,-4604.36 344.48,-4585 438.15,-4464.76 451.57,-4423.01 495.29,-4277 674,-3680.14 706.91,-2924.26 712.95,-2655.45"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="715.58,-2655.52 713.12,-2647.96 710.33,-2655.4 715.58,-2655.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="436.39,-4498.45 436.39,-4521.25 463.38,-4521.25 463.38,-4498.45 436.39,-4498.45"/>
<text xml:space="preserve" text-anchor="start" x="439.39" y="-4506.65" font-family="Arial" font-weight="bold" font-size="14.00" fill="#cbd5e1">[...]</text>
</g>
<!-- idp&#45;&gt;infisical -->
<g id="edge3" class="edge">
<title>idp&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M292.85,-4350.1C311.45,-4333.03 329.45,-4314.4 344.48,-4295 438.82,-4173.25 449.6,-4130.08 495.29,-3983 645.42,-3499.76 694.95,-2891.28 709.2,-2655.1"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="711.81,-2655.48 709.63,-2647.84 706.56,-2655.17 711.81,-2655.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="416.53,-4207.21 416.53,-4250.41 483.24,-4250.41 483.24,-4207.21 416.53,-4207.21"/>
<text xml:space="preserve" text-anchor="start" x="419.53" y="-4233.41" font-family="Arial" font-size="14.00" fill="#cbd5e1">/authentik</text>
<text xml:space="preserve" text-anchor="start" x="419.53" y="-4212.61" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- containerorc&#45;&gt;infisical -->
<g id="edge4" class="edge">
<title>containerorc&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M293.17,-4060.35C311.73,-4043.25 329.64,-4024.54 344.48,-4005 441.53,-3877.23 446.06,-3829.71 495.29,-3677 613.6,-3310.03 678.48,-2853.87 702.89,-2655.23"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="705.49,-2655.58 703.79,-2647.82 700.28,-2654.95 705.49,-2655.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.04,-3912.48 420.04,-3955.68 479.74,-3955.68 479.74,-3912.48 420.04,-3912.48"/>
<text xml:space="preserve" text-anchor="start" x="423.04" y="-3938.68" font-family="Arial" font-size="14.00" fill="#cbd5e1">/komodo</text>
<text xml:space="preserve" text-anchor="start" x="423.04" y="-3917.88" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- configmgmt&#45;&gt;infisical -->
<g id="edge5" class="edge">
<title>configmgmt&#45;&gt;infisical</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M293.11,-3770.3C311.68,-3753.21 329.61,-3734.52 344.48,-3715 598.38,-3381.94 680.79,-2869.59 705.08,-2654.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="707.67,-2655.42 705.89,-2647.68 702.46,-2654.84 707.67,-2655.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.21,-3606.5 420.21,-3649.7 479.56,-3649.7 479.56,-3606.5 420.21,-3606.5"/>
<text xml:space="preserve" text-anchor="start" x="423.21" y="-3635.1" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
<text xml:space="preserve" text-anchor="start" x="423.21" y="-3611.9" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ Infisical ]</text>
</g>
<!-- pricodeforge&#45;&gt;infisical -->
<g id="edge6" class="edge">
<title>pricodeforge&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M292.74,-3480.02C311.36,-3462.96 329.39,-3444.35 344.48,-3425 534.37,-3181.54 644.89,-2826.07 690.15,-2654.7"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="692.65,-2655.52 692.01,-2647.6 687.57,-2654.19 692.65,-2655.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.21,-3320.13 420.21,-3363.33 479.56,-3363.33 479.56,-3320.13 420.21,-3320.13"/>
<text xml:space="preserve" text-anchor="start" x="423.21" y="-3346.33" font-family="Arial" font-size="14.00" fill="#cbd5e1">/forgejo</text>
<text xml:space="preserve" text-anchor="start" x="423.21" y="-3325.53" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- ci&#45;&gt;infisical -->
<g id="edge7" class="edge">
<title>ci&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M289.16,-3190.15C308.59,-3172.81 327.83,-3154.07 344.48,-3135 478.57,-2981.48 598.25,-2774.85 663.13,-2654.18"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="665.43,-2655.44 666.66,-2647.59 660.81,-2652.96 665.43,-2655.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="407.2,-3047.75 407.2,-3090.95 492.58,-3090.95 492.58,-3047.75 407.2,-3047.75"/>
<text xml:space="preserve" text-anchor="start" x="410.2" y="-3073.95" font-family="Arial" font-size="14.00" fill="#cbd5e1">/woodpecker</text>
<text xml:space="preserve" text-anchor="start" x="410.2" y="-3053.15" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- agentgw&#45;&gt;infisical -->
<g id="edge8" class="edge">
<title>agentgw&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M285.02,-2900.13C375.38,-2827.49 502.3,-2725.45 594.68,-2651.18"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="596.11,-2653.39 600.31,-2646.65 592.82,-2649.3 596.11,-2653.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="404.48,-2798.54 404.48,-2841.74 495.29,-2841.74 495.29,-2798.54 404.48,-2798.54"/>
<text xml:space="preserve" text-anchor="start" x="407.48" y="-2824.74" font-family="Arial" font-size="14.00" fill="#cbd5e1">/komodo&#45;mcp</text>
<text xml:space="preserve" text-anchor="start" x="407.48" y="-2803.94" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- databak&#45;&gt;infisical -->
<g id="edge9" class="edge">
<title>databak&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M331.92,-2657.47C399.09,-2639.47 477.43,-2618.48 545.64,-2600.2"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="546.14,-2602.78 552.71,-2598.31 544.78,-2597.71 546.14,-2602.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="418.09,-2636.18 418.09,-2679.38 481.68,-2679.38 481.68,-2636.18 418.09,-2636.18"/>
<text xml:space="preserve" text-anchor="start" x="421.09" y="-2662.38" font-family="Arial" font-size="14.00" fill="#cbd5e1">/zerobyte</text>
<text xml:space="preserve" text-anchor="start" x="421.09" y="-2641.58" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- dbbak&#45;&gt;infisical -->
<g id="edge10" class="edge">
<title>dbbak&#45;&gt;infisical</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M331.92,-2452.53C398.96,-2470.49 477.11,-2491.43 545.22,-2509.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="545.2,-2509.68 550.32,-2507.95 553.89,-2512.01 548.77,-2513.74 545.2,-2509.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="412.64,-2495.49 412.64,-2538.69 487.14,-2538.69 487.14,-2495.49 412.64,-2495.49"/>
<text xml:space="preserve" text-anchor="start" x="415.64" y="-2521.69" font-family="Arial" font-size="14.00" fill="#c9c9c9">/databasus</text>
<text xml:space="preserve" text-anchor="start" x="415.64" y="-2500.89" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ Infisical ]</text>
</g>
<!-- dashboard&#45;&gt;infisical -->
<g id="edge11" class="edge">
<title>dashboard&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M285.02,-2209.87C375.38,-2282.51 502.3,-2384.55 594.68,-2458.82"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="592.82,-2460.7 600.31,-2463.35 596.11,-2456.61 592.82,-2460.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.21,-2376.46 420.21,-2419.66 479.56,-2419.66 479.56,-2376.46 420.21,-2376.46"/>
<text xml:space="preserve" text-anchor="start" x="423.21" y="-2402.66" font-family="Arial" font-size="14.00" fill="#cbd5e1">/homarr</text>
<text xml:space="preserve" text-anchor="start" x="423.21" y="-2381.86" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- shareddb&#45;&gt;infisical -->
<g id="edge12" class="edge">
<title>shareddb&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M289.16,-1919.85C308.59,-1937.19 327.83,-1955.93 344.48,-1975 478.57,-2128.52 598.25,-2335.15 663.13,-2455.82"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="660.81,-2457.04 666.66,-2462.41 665.43,-2454.56 660.81,-2457.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="418.09,-2170.59 418.09,-2213.79 481.68,-2213.79 481.68,-2170.59 418.09,-2170.59"/>
<text xml:space="preserve" text-anchor="start" x="421.09" y="-2196.79" font-family="Arial" font-size="14.00" fill="#cbd5e1">/postgres</text>
<text xml:space="preserve" text-anchor="start" x="421.09" y="-2175.99" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- prjman&#45;&gt;infisical -->
<g id="edge13" class="edge">
<title>prjman&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M292.74,-1629.98C311.35,-1647.04 329.39,-1665.65 344.48,-1685 534.41,-1928.44 644.91,-2283.92 690.16,-2455.3"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="687.58,-2455.8 692.02,-2462.39 692.65,-2454.47 687.58,-2455.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="408.36,-1925.81 408.36,-1969.01 491.42,-1969.01 491.42,-1925.81 408.36,-1925.81"/>
<text xml:space="preserve" text-anchor="start" x="411.36" y="-1952.01" font-family="Arial" font-size="14.00" fill="#cbd5e1">/openproject</text>
<text xml:space="preserve" text-anchor="start" x="411.36" y="-1931.21" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- docsign&#45;&gt;infisical -->
<g id="edge14" class="edge">
<title>docsign&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M293.1,-1339.7C311.68,-1356.79 329.6,-1375.48 344.48,-1395 598.42,-1728.03 680.81,-2240.4 705.09,-2455.02"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="702.46,-2455.16 705.9,-2462.32 707.68,-2454.58 702.46,-2455.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="416.92,-1650.46 416.92,-1693.66 482.85,-1693.66 482.85,-1650.46 416.92,-1650.46"/>
<text xml:space="preserve" text-anchor="start" x="419.92" y="-1676.66" font-family="Arial" font-size="14.00" fill="#cbd5e1">/docuseal</text>
<text xml:space="preserve" text-anchor="start" x="419.92" y="-1655.86" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- docarc&#45;&gt;infisical -->
<g id="edge15" class="edge">
<title>docarc&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M293.16,-1049.66C311.73,-1066.75 329.64,-1085.46 344.48,-1105 441.5,-1232.7 446.07,-1280.17 495.29,-1432.8 613.66,-1799.82 678.5,-2256.07 702.9,-2454.75"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="700.29,-2455.03 703.8,-2462.16 705.5,-2454.4 700.29,-2455.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="414.59,-1432.8 414.59,-1476 485.18,-1476 485.18,-1432.8 414.59,-1432.8"/>
<text xml:space="preserve" text-anchor="start" x="417.59" y="-1459" font-family="Arial" font-size="14.00" fill="#cbd5e1">/paperless</text>
<text xml:space="preserve" text-anchor="start" x="417.59" y="-1438.2" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- erp&#45;&gt;infisical -->
<g id="edge16" class="edge">
<title>erp&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M292.84,-759.9C311.44,-776.97 329.45,-795.6 344.48,-815 438.79,-936.67 449.6,-979.8 495.29,-1126.8 645.5,-1610.09 694.98,-2218.66 709.21,-2454.88"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="706.58,-2454.82 709.64,-2462.15 711.82,-2454.51 706.58,-2454.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.21,-1126.8 420.21,-1170 479.56,-1170 479.56,-1126.8 420.21,-1126.8"/>
<text xml:space="preserve" text-anchor="start" x="423.21" y="-1153" font-family="Arial" font-size="14.00" fill="#cbd5e1">/</text>
<text xml:space="preserve" text-anchor="start" x="423.21" y="-1132.2" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- phovid&#45;&gt;infisical -->
<g id="edge17" class="edge">
<title>phovid&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M292.76,-469.97C311.37,-487.03 329.4,-505.64 344.48,-525 438.11,-645.17 451.58,-686.87 495.29,-832.8 674.09,-1429.71 706.94,-2185.69 712.96,-2454.54"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="710.34,-2454.58 713.13,-2462.02 715.59,-2454.47 710.34,-2454.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.21,-832.8 420.21,-876 479.56,-876 479.56,-832.8 420.21,-832.8"/>
<text xml:space="preserve" text-anchor="start" x="423.21" y="-859" font-family="Arial" font-size="14.00" fill="#cbd5e1">/immich</text>
<text xml:space="preserve" text-anchor="start" x="423.21" y="-838.2" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- medialib&#45;&gt;infisical -->
<g id="edge18" class="edge">
<title>medialib&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M292.27,-179.59C311.05,-196.76 329.26,-215.51 344.48,-235 437.78,-354.42 452.94,-395.3 495.29,-540.8 601.97,-907.33 685.2,-2100.3 708.05,-2454.79"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="705.43,-2454.94 708.53,-2462.26 710.67,-2454.61 705.43,-2454.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="420.21,-540.8 420.21,-584 479.56,-584 479.56,-540.8 420.21,-540.8"/>
<text xml:space="preserve" text-anchor="start" x="423.21" y="-567" font-family="Arial" font-size="14.00" fill="#cbd5e1">/stream</text>
<text xml:space="preserve" text-anchor="start" x="423.21" y="-546.2" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
</g>
</svg>
`;case`ingress`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2323pt" height="1618pt"
 viewBox="0.00 0.00 2323.00 1618.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1603.05)">
<g id="clust1" class="cluster">
<title>cluster_gateway</title>
<polygon fill="#29472f" stroke="#1c3021" points="8,-652 8,-1580 2284.84,-1580 2284.84,-652 8,-652"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1567.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">GATEWAY</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_pangolin</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="48,-692 48,-1519 1724.41,-1519 1724.41,-692 48,-692"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-1506.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PANGOLIN</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_dns</title>
<polygon fill="#3e4651" stroke="#2d333d" points="719.38,-379 719.38,-644 1106.11,-644 1106.11,-379 719.38,-379"/>
<text xml:space="preserve" text-anchor="start" x="727.38" y="-631.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">DNS AND CERTIFICATES</text>
</g>
<!-- traefik -->
<g id="node1" class="node">
<title>traefik</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="472.29,-932 88,-932 88,-752 472.29,-752 472.29,-932"/>
<text xml:space="preserve" text-anchor="start" x="249.58" y="-845" font-family="Arial" font-size="20.00" fill="#f0f9ff">Traefik</text>
<text xml:space="preserve" text-anchor="start" x="128" y="-822" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reverse proxy. network_mode: service:gerbil.</text>
</g>
<!-- server -->
<g id="node2" class="node">
<title>server</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1077.77,-932 747.72,-932 747.72,-752 1077.77,-752 1077.77,-932"/>
<text xml:space="preserve" text-anchor="start" x="841.59" y="-834" font-family="Arial" font-size="20.00" fill="#f0f9ff">Pangolin Server</text>
</g>
<!-- gerbil -->
<g id="node3" class="node">
<title>gerbil</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1684.41,-932 1348.48,-932 1348.48,-752 1684.41,-752 1684.41,-932"/>
<text xml:space="preserve" text-anchor="start" x="1489.77" y="-863.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Gerbil</text>
<text xml:space="preserve" text-anchor="start" x="1486.46" y="-842.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="1388.48" y="-821.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Owns the host ports. Traefik runs in its</text>
<text xml:space="preserve" text-anchor="start" x="1447.24" y="-803.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">network namespace.</text>
</g>
<!-- newt -->
<g id="node4" class="node">
<title>newt</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2244.84,-932 1924.8,-932 1924.8,-752 2244.84,-752 2244.84,-932"/>
<text xml:space="preserve" text-anchor="start" x="2062.04" y="-863.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Newt</text>
<text xml:space="preserve" text-anchor="start" x="2054.84" y="-842.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="1959.75" y="-821.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site connector, installed per host as a</text>
<text xml:space="preserve" text-anchor="start" x="1988.11" y="-803.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">systemd unit by infra.ansible.</text>
</g>
<!-- cloudflare -->
<g id="node5" class="node">
<title>cloudflare</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1074.11,-591 751.38,-591 751.38,-411 1074.11,-411 1074.11,-591"/>
<text xml:space="preserve" text-anchor="start" x="867.16" y="-513" font-family="Arial" font-size="20.00" fill="#f8fafc">Cloudflare</text>
<text xml:space="preserve" text-anchor="start" x="771.43" y="-490" font-family="Arial" font-size="15.00" fill="#cbd5e1">Authoritative DNS, and the ACME DNS&#45;01</text>
<text xml:space="preserve" text-anchor="start" x="808.95" y="-472" font-family="Arial" font-size="15.00" fill="#cbd5e1">provider Traefik solves against.</text>
</g>
<!-- operator -->
<g id="node6" class="node">
<title>operator</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="454.45,-470 105.84,-470 105.84,-290 454.45,-290 454.45,-470"/>
<text xml:space="preserve" text-anchor="start" x="240.68" y="-392" font-family="Arial" font-size="20.00" fill="#f0f9ff">Operator</text>
<text xml:space="preserve" text-anchor="start" x="125.89" y="-369" font-family="Arial" font-size="15.00" fill="#b6ecf7">Administers the fleet through Komodo, Ansible</text>
<text xml:space="preserve" text-anchor="start" x="230.11" y="-351" font-family="Arial" font-size="15.00" fill="#b6ecf7">and the forges.</text>
</g>
<!-- www -->
<g id="node7" class="node">
<title>www</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1072.76,-301 752.72,-301 752.72,-129 1072.76,-129 1072.76,-301"/>
<text xml:space="preserve" text-anchor="start" x="848.82" y="-207" font-family="Arial" font-size="20.00" fill="#f8fafc">Public Internet</text>
</g>
<!-- household -->
<g id="node8" class="node">
<title>household</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="443.62,-180 116.67,-180 116.67,0 443.62,0 443.62,-180"/>
<text xml:space="preserve" text-anchor="start" x="203.44" y="-102" font-family="Arial" font-size="20.00" fill="#f0f9ff">Household Users</text>
<text xml:space="preserve" text-anchor="start" x="136.72" y="-79" font-family="Arial" font-size="15.00" fill="#b6ecf7">Consumes the media, document and photo</text>
<text xml:space="preserve" text-anchor="start" x="244.3" y="-61" font-family="Arial" font-size="15.00" fill="#b6ecf7">workloads.</text>
</g>
<!-- traefik&#45;&gt;server -->
<g id="edge4" class="edge">
<title>traefik&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M472.06,-842C556.45,-842 654.99,-842 737.37,-842"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="737.33,-844.63 744.83,-842 737.33,-839.38 737.33,-844.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="532.29,-842 532.29,-885.2 687.72,-885.2 687.72,-842 532.29,-842"/>
<text xml:space="preserve" text-anchor="start" x="535.29" y="-868.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">authorizes each request</text>
<text xml:space="preserve" text-anchor="start" x="535.29" y="-847.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ Badger middleware ]</text>
</g>
<!-- traefik&#45;&gt;gerbil -->
<g id="edge5" class="edge">
<title>traefik&#45;&gt;gerbil</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M472.25,-919.95C547.86,-946.88 636.4,-973.63 719.38,-987 889.07,-1014.34 936.71,-1016.12 1106.11,-987 1184.68,-973.49 1268.19,-946.4 1339.15,-919.26"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1339.75,-921.84 1345.81,-916.69 1337.86,-916.94 1339.75,-921.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="844.36,-1008.18 844.36,-1051.38 981.12,-1051.38 981.12,-1008.18 844.36,-1008.18"/>
<text xml:space="preserve" text-anchor="start" x="847.36" y="-1034.38" font-family="Arial" font-size="14.00" fill="#c9c9c9">routes into the tunnel</text>
<text xml:space="preserve" text-anchor="start" x="847.36" y="-1013.58" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- traefik&#45;&gt;cloudflare -->
<g id="edge6" class="edge">
<title>traefik&#45;&gt;cloudflare</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M447.24,-752.18C538.26,-702.96 650.85,-642.08 742.38,-592.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="743.44,-594.99 748.79,-589.12 740.94,-590.38 743.44,-594.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="538.15,-702.04 538.15,-745.24 681.86,-745.24 681.86,-702.04 538.15,-702.04"/>
<text xml:space="preserve" text-anchor="start" x="541.15" y="-728.24" font-family="Arial" font-size="14.00" fill="#c9c9c9">solves ACME DNS&#45;01</text>
<text xml:space="preserve" text-anchor="start" x="541.15" y="-707.44" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ ACME ]</text>
</g>
<!-- server&#45;&gt;gerbil -->
<g id="edge7" class="edge">
<title>server&#45;&gt;gerbil</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1077.76,-842C1158.43,-842 1255.79,-842 1338.17,-842"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1338.13,-844.63 1345.63,-842 1338.13,-839.38 1338.13,-844.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1143.19,-842 1143.19,-885.2 1283.05,-885.2 1283.05,-842 1143.19,-842"/>
<text xml:space="preserve" text-anchor="start" x="1146.19" y="-868.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">pushes remote config</text>
<text xml:space="preserve" text-anchor="start" x="1146.19" y="-847.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTP :3001 ]</text>
</g>
<!-- gerbil&#45;&gt;traefik -->
<g id="edge8" class="edge">
<title>gerbil&#45;&gt;traefik</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1401.98,-931.94C1323.89,-987.39 1214.95,-1052.6 1106.11,-1078 938.72,-1117.05 887.04,-1115.85 719.38,-1078 629.56,-1057.72 613.67,-1032.07 532.29,-989 501.81,-972.87 469.73,-954.89 439.07,-937.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="440.46,-934.96 432.65,-933.48 437.83,-939.5 440.46,-934.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="812.47,-1106.84 812.47,-1150.04 1013.02,-1150.04 1013.02,-1106.84 812.47,-1106.84"/>
<text xml:space="preserve" text-anchor="start" x="815.47" y="-1133.04" font-family="Arial" font-size="14.00" fill="#c9c9c9">shares the network namespace</text>
<text xml:space="preserve" text-anchor="start" x="815.47" y="-1112.24" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gerbil&#45;&gt;newt -->
<g id="edge9" class="edge">
<title>gerbil&#45;&gt;newt</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M1684.31,-842C1756.92,-842 1841.89,-842 1914.75,-842"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1914.42,-844.63 1921.92,-842 1914.42,-839.38 1914.42,-844.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1744.41,-842 1744.41,-885.2 1864.8,-885.2 1864.8,-842 1744.41,-842"/>
<text xml:space="preserve" text-anchor="start" x="1747.41" y="-868.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">WireGuard :51820</text>
<text xml:space="preserve" text-anchor="start" x="1747.41" y="-847.4" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ WireGuard ]</text>
</g>
<!-- operator&#45;&gt;www -->
<g id="edge1" class="edge">
<title>operator&#45;&gt;www</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M454.29,-334.69C544.17,-311.18 653.55,-282.56 742.81,-259.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="743.24,-261.8 749.83,-257.37 741.91,-256.73 743.24,-261.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="580.94,-312.28 580.94,-335.08 639.07,-335.08 639.07,-312.28 580.94,-312.28"/>
<text xml:space="preserve" text-anchor="start" x="583.94" y="-318.08" font-family="Arial" font-size="14.00" fill="#c9c9c9">browses</text>
</g>
<!-- www&#45;&gt;gerbil -->
<g id="edge3" class="edge">
<title>www&#45;&gt;gerbil</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1044.06,-300.89C1065.54,-316.97 1087,-334.31 1106.11,-352 1238.76,-474.81 1368.52,-640 1445.24,-743.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1442.99,-745.12 1449.56,-749.59 1447.22,-742 1442.99,-745.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1137.77,-542.85 1137.77,-586.05 1288.48,-586.05 1288.48,-542.85 1137.77,-542.85"/>
<text xml:space="preserve" text-anchor="start" x="1140.77" y="-569.05" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTPS :443, HTTP :80</text>
<text xml:space="preserve" text-anchor="start" x="1140.77" y="-548.25" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- household&#45;&gt;www -->
<g id="edge2" class="edge">
<title>household&#45;&gt;www</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M443.54,-122.19C535.35,-140.39 649.98,-163.11 742.84,-181.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="742.06,-184.04 749.93,-182.92 743.08,-178.89 742.06,-184.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="580.94,-167.37 580.94,-190.17 639.07,-190.17 639.07,-167.37 580.94,-167.37"/>
<text xml:space="preserve" text-anchor="start" x="583.94" y="-173.17" font-family="Arial" font-size="14.00" fill="#c9c9c9">browses</text>
</g>
</g>
</svg>
`;case`identity`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2562pt" height="1059pt"
 viewBox="0.00 0.00 2562.00 1059.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1043.85)">
<g id="clust1" class="cluster">
<title>cluster_ci</title>
<polygon fill="#29472f" stroke="#1c3021" points="170.79,-371.2 170.79,-737.6 1213.79,-737.6 1213.79,-371.2 170.79,-371.2"/>
<text xml:space="preserve" text-anchor="start" x="178.79" y="-724.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">CONTINUOUS INTEGRATION</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_woodpecker</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="202.79,-403.2 202.79,-684.4 1181.79,-684.4 1181.79,-403.2 202.79,-403.2"/>
<text xml:space="preserve" text-anchor="start" x="210.79" y="-671.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">WOODPECKER</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_idp</title>
<polygon fill="#29472f" stroke="#1c3021" points="1609.79,-8 1609.79,-737.6 2523.79,-737.6 2523.79,-8 1609.79,-8"/>
<text xml:space="preserve" text-anchor="start" x="1617.79" y="-724.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">IDENTITY PROVIDER</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_authentik</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1641.79,-40 1641.79,-684.4 2491.79,-684.4 2491.79,-40 1641.79,-40"/>
<text xml:space="preserve" text-anchor="start" x="1649.79" y="-671.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AUTHENTIK</text>
</g>
<!-- agent -->
<g id="node1" class="node">
<title>agent</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="614.71,-623.2 242.87,-623.2 242.87,-443.2 614.71,-443.2 614.71,-623.2"/>
<text xml:space="preserve" text-anchor="start" x="402.66" y="-545.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Agent</text>
<text xml:space="preserve" text-anchor="start" x="282.87" y="-522.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Runs pipeline steps as sibling containers on</text>
<text xml:space="preserve" text-anchor="start" x="346.24" y="-504.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">the host docker daemon.</text>
</g>
<!-- server_1 -->
<g id="node2" class="node">
<title>server_1</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1141.81,-623.2 811.76,-623.2 811.76,-443.2 1141.81,-443.2 1141.81,-623.2"/>
<text xml:space="preserve" text-anchor="start" x="947.34" y="-525.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Server</text>
</g>
<!-- worker -->
<g id="node3" class="node">
<title>worker</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2011.81,-623.2 1681.76,-623.2 1681.76,-443.2 2011.81,-443.2 2011.81,-623.2"/>
<text xml:space="preserve" text-anchor="start" x="1814.57" y="-525.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Worker</text>
</g>
<!-- server -->
<g id="node4" class="node">
<title>server</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2451.81,-623.2 2121.76,-623.2 2121.76,-443.2 2451.81,-443.2 2451.81,-623.2"/>
<text xml:space="preserve" text-anchor="start" x="2257.34" y="-525.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Server</text>
</g>
<!-- db -->
<g id="node5" class="node">
<title>db</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M2446.81,-243.64C2446.81,-252.67 2375.08,-260 2286.79,-260 2198.49,-260 2126.77,-252.67 2126.77,-243.64 2126.77,-243.64 2126.77,-96.36 2126.77,-96.36 2126.77,-87.33 2198.49,-80 2286.79,-80 2375.08,-80 2446.81,-87.33 2446.81,-96.36 2446.81,-96.36 2446.81,-243.64 2446.81,-243.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M2446.81,-243.64C2446.81,-234.61 2375.08,-227.27 2286.79,-227.27 2198.49,-227.27 2126.77,-234.61 2126.77,-243.64"/>
<text xml:space="preserve" text-anchor="start" x="2243.98" y="-171.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="2251.38" y="-150.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">PostgreSQL</text>
</g>
<!-- gateway -->
<g id="node6" class="node">
<title>gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1136.81,-1028.8 816.77,-1028.8 816.77,-848.8 1136.81,-848.8 1136.81,-1028.8"/>
<text xml:space="preserve" text-anchor="start" x="937.33" y="-950.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Gateway</text>
<text xml:space="preserve" text-anchor="start" x="838.38" y="-927.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">One public entry point for every published</text>
<text xml:space="preserve" text-anchor="start" x="957.61" y="-909.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">route.</text>
</g>
<!-- server_2 -->
<g id="node7" class="node">
<title>server_2</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1141.81,-260 811.76,-260 811.76,-80 1141.81,-80 1141.81,-260"/>
<text xml:space="preserve" text-anchor="start" x="947.34" y="-162" font-family="Arial" font-size="20.00" fill="#f0f9ff">Server</text>
</g>
<!-- dashboard -->
<g id="node8" class="node">
<title>dashboard</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2446.81,-1028.8 2126.77,-1028.8 2126.77,-848.8 2446.81,-848.8 2446.81,-1028.8"/>
<text xml:space="preserve" text-anchor="start" x="2237.87" y="-930.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Dashboard</text>
</g>
<!-- containerorc -->
<g id="node9" class="node">
<title>containerorc</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1571.81,-623.2 1251.77,-623.2 1251.77,-443.2 1571.81,-443.2 1571.81,-623.2"/>
<text xml:space="preserve" text-anchor="start" x="1310.08" y="-525.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Container Orchestrator</text>
</g>
<!-- agent&#45;&gt;server_1 -->
<g id="edge6" class="edge">
<title>agent&#45;&gt;server_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M614.7,-533.2C675.14,-533.2 741.99,-533.2 801.62,-533.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="801.37,-535.83 808.87,-533.2 801.37,-530.58 801.37,-535.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="669,-536.2 669,-579.4 757.47,-579.4 757.47,-536.2 669,-536.2"/>
<text xml:space="preserve" text-anchor="start" x="672" y="-562.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">polls for work</text>
<text xml:space="preserve" text-anchor="start" x="672" y="-541.6" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ gRPC :9000 ]</text>
</g>
<!-- server_1&#45;&gt;server_2 -->
<g id="edge9" class="edge">
<title>server_1&#45;&gt;server_2</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M976.79,-443.38C976.79,-390.88 976.79,-324.3 976.79,-270.11"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="979.41,-270.32 976.79,-262.82 974.16,-270.32 979.41,-270.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="976.79,-320 976.79,-363.2 1203.8,-363.2 1203.8,-320 976.79,-320"/>
<text xml:space="preserve" text-anchor="start" x="979.79" y="-346.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">OAuth2 login and repository access</text>
<text xml:space="preserve" text-anchor="start" x="979.79" y="-325.4" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ OIDC ]</text>
</g>
<!-- worker&#45;&gt;db -->
<g id="edge7" class="edge">
<title>worker&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1954.99,-443.38C2020.76,-389.38 2104.69,-320.48 2171.69,-265.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2173.3,-267.56 2177.43,-260.77 2169.97,-263.5 2173.3,-267.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2099.68,-330.2 2099.68,-353 2189.72,-353 2189.72,-330.2 2099.68,-330.2"/>
<text xml:space="preserve" text-anchor="start" x="2102.68" y="-336" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- server&#45;&gt;db -->
<g id="edge8" class="edge">
<title>server&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2286.79,-443.38C2286.79,-391.18 2286.79,-325.05 2286.79,-271.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2289.41,-271.26 2286.79,-263.76 2284.16,-271.26 2289.41,-271.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2286.79,-330.2 2286.79,-353 2376.83,-353 2376.83,-330.2 2286.79,-330.2"/>
<text xml:space="preserve" text-anchor="start" x="2289.79" y="-336" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- gateway&#45;&gt;server_1 -->
<g id="edge2" class="edge">
<title>gateway&#45;&gt;server_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M976.79,-849.23C976.79,-785.46 976.79,-699.4 976.79,-633.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="979.41,-633.44 976.79,-625.94 974.16,-633.44 979.41,-633.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="976.79,-745.6 976.79,-788.8 1098.73,-788.8 1098.73,-745.6 976.79,-745.6"/>
<text xml:space="preserve" text-anchor="start" x="979.79" y="-771.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">peck.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="979.79" y="-751" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;server -->
<g id="edge1" class="edge">
<title>gateway&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1136.65,-935.92C1357.18,-927.41 1762.02,-890.09 2066.79,-737.6 2118.79,-711.58 2167.33,-669.5 2205.51,-630.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2207.11,-632.47 2210.42,-625.25 2203.33,-628.83 2207.11,-632.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2040.12,-745.6 2040.12,-788.8 2189.31,-788.8 2189.31,-745.6 2040.12,-745.6"/>
<text xml:space="preserve" text-anchor="start" x="2043.12" y="-771.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">authentik.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="2043.12" y="-751" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;server_2 -->
<g id="edge3" class="edge">
<title>gateway&#45;&gt;server_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M816.96,-925.74C583.63,-904.43 167.53,-851.2 76.42,-737.6 -25.47,-610.57 -25.47,-498.23 76.42,-371.2 165.58,-260.04 565.95,-206.68 801.72,-184.48"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="801.88,-187.1 809.11,-183.79 801.4,-181.87 801.88,-187.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="76.42,-511.6 76.42,-554.8 175.79,-554.8 175.79,-511.6 76.42,-511.6"/>
<text xml:space="preserve" text-anchor="start" x="79.42" y="-537.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">fj.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="79.42" y="-517" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- dashboard&#45;&gt;server -->
<g id="edge4" class="edge">
<title>dashboard&#45;&gt;server</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M2286.79,-849.23C2286.79,-785.46 2286.79,-699.4 2286.79,-633.34"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2289.41,-633.44 2286.79,-625.94 2284.16,-633.44 2289.41,-633.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2286.79,-745.6 2286.79,-788.8 2414.19,-788.8 2414.19,-745.6 2286.79,-745.6"/>
<text xml:space="preserve" text-anchor="start" x="2289.79" y="-771.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">authenticates users</text>
<text xml:space="preserve" text-anchor="start" x="2289.79" y="-751" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ OIDC ]</text>
</g>
<!-- containerorc&#45;&gt;server_2 -->
<g id="edge5" class="edge">
<title>containerorc&#45;&gt;server_2</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1347.02,-443.33C1314.86,-402.83 1273.74,-356 1230.79,-320 1206.2,-299.39 1178.4,-279.93 1150.44,-262.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1152.09,-260.23 1144.33,-258.49 1149.31,-264.68 1152.09,-260.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1275.38,-330.2 1275.38,-353 1420.67,-353 1420.67,-330.2 1275.38,-330.2"/>
<text xml:space="preserve" text-anchor="start" x="1278.38" y="-336" font-family="Arial" font-size="14.00" fill="#c9c9c9">syncs stack definitions</text>
</g>
</g>
</svg>
`;case`state`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="880pt" height="2639pt"
 viewBox="0.00 0.00 880.00 2639.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2624.05)">
<g id="clust1" class="cluster">
<title>cluster_dbbak</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-1321 8,-1586 392.04,-1586 392.04,-1321 8,-1321"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1573.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">DATABASE BACKUP COORDINATOR</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_databak</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-16 8,-281 392.04,-281 392.04,-16 8,-16"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-268.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">DATA BACKUP COORDINATOR</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_idp</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="448.98,-2336 448.98,-2601 833.02,-2601 833.02,-2336 448.98,-2336"/>
<text xml:space="preserve" text-anchor="start" x="456.98" y="-2588.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">IDENTITY PROVIDER</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_pricodeforge</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="448.98,-2046 448.98,-2311 833.02,-2311 833.02,-2046 448.98,-2046"/>
<text xml:space="preserve" text-anchor="start" x="456.98" y="-2298.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">PRIMARY CODE FORGE</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_secretsman</title>
<polygon fill="#3e4651" stroke="#2d333d" points="448.98,-1756 448.98,-2021 833.02,-2021 833.02,-1756 448.98,-1756"/>
<text xml:space="preserve" text-anchor="start" x="456.98" y="-2008.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">SECRETS MANAGER</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_shareddb</title>
<polygon fill="#3e4651" stroke="#2d333d" points="448.98,-1466 448.98,-1731 833.02,-1731 833.02,-1466 448.98,-1466"/>
<text xml:space="preserve" text-anchor="start" x="456.98" y="-1718.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">SHARED DATABASE</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_docarc</title>
<polygon fill="#2225aa" stroke="#2a2490" points="448.98,-1176 448.98,-1441 833.02,-1441 833.02,-1176 448.98,-1176"/>
<text xml:space="preserve" text-anchor="start" x="456.98" y="-1428.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c7d2fe" fill-opacity="0.701961">DOCUMENT ARCHIVE</text>
</g>
<g id="clust8" class="cluster">
<title>cluster_erp</title>
<polygon fill="#2225aa" stroke="#2a2490" points="448.98,-886 448.98,-1151 833.02,-1151 833.02,-886 448.98,-886"/>
<text xml:space="preserve" text-anchor="start" x="456.98" y="-1138.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c7d2fe" fill-opacity="0.701961">ERP</text>
</g>
<g id="clust9" class="cluster">
<title>cluster_phovid</title>
<polygon fill="#2225aa" stroke="#2a2490" points="448.98,-596 448.98,-861 833.02,-861 833.02,-596 448.98,-596"/>
<text xml:space="preserve" text-anchor="start" x="456.98" y="-848.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c7d2fe" fill-opacity="0.701961">PERSONAL PHOTO STORAGE</text>
</g>
<g id="clust10" class="cluster">
<title>cluster_containerorc</title>
<polygon fill="#3e4651" stroke="#2d333d" points="440.04,-8 440.04,-579 841.96,-579 841.96,-8 440.04,-8"/>
<text xml:space="preserve" text-anchor="start" x="448.04" y="-566.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">CONTAINER ORCHESTRATOR</text>
</g>
<!-- databasus -->
<g id="node1" class="node">
<title>databasus</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.04,-1533 40,-1533 40,-1353 360.04,-1353 360.04,-1533"/>
<text xml:space="preserve" text-anchor="start" x="152.21" y="-1435" font-family="Arial" font-size="20.00" fill="#eff6ff">Databasus</text>
</g>
<!-- zerobyte -->
<g id="node2" class="node">
<title>zerobyte</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.04,-228 40,-228 40,-48 360.04,-48 360.04,-228"/>
<text xml:space="preserve" text-anchor="start" x="160.56" y="-139.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Zerobyte</text>
<text xml:space="preserve" text-anchor="start" x="181.96" y="-118.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Restic</text>
</g>
<!-- db -->
<g id="node3" class="node">
<title>db</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M801.02,-2531.64C801.02,-2540.67 729.3,-2548 641,-2548 552.7,-2548 480.98,-2540.67 480.98,-2531.64 480.98,-2531.64 480.98,-2384.36 480.98,-2384.36 480.98,-2375.33 552.7,-2368 641,-2368 729.3,-2368 801.02,-2375.33 801.02,-2384.36 801.02,-2384.36 801.02,-2531.64 801.02,-2531.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M801.02,-2531.64C801.02,-2522.61 729.3,-2515.27 641,-2515.27 552.7,-2515.27 480.98,-2522.61 480.98,-2531.64"/>
<text xml:space="preserve" text-anchor="start" x="598.19" y="-2459.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="605.59" y="-2438.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">PostgreSQL</text>
</g>
<!-- db_1 -->
<g id="node4" class="node">
<title>db_1</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M801.02,-2241.64C801.02,-2250.67 729.3,-2258 641,-2258 552.7,-2258 480.98,-2250.67 480.98,-2241.64 480.98,-2241.64 480.98,-2094.36 480.98,-2094.36 480.98,-2085.33 552.7,-2078 641,-2078 729.3,-2078 801.02,-2085.33 801.02,-2094.36 801.02,-2094.36 801.02,-2241.64 801.02,-2241.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M801.02,-2241.64C801.02,-2232.61 729.3,-2225.27 641,-2225.27 552.7,-2225.27 480.98,-2232.61 480.98,-2241.64"/>
<text xml:space="preserve" text-anchor="start" x="598.19" y="-2169.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="605.59" y="-2148.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">PostgreSQL</text>
</g>
<!-- db_2 -->
<g id="node5" class="node">
<title>db_2</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M801.02,-1951.64C801.02,-1960.67 729.3,-1968 641,-1968 552.7,-1968 480.98,-1960.67 480.98,-1951.64 480.98,-1951.64 480.98,-1804.36 480.98,-1804.36 480.98,-1795.33 552.7,-1788 641,-1788 729.3,-1788 801.02,-1795.33 801.02,-1804.36 801.02,-1804.36 801.02,-1951.64 801.02,-1951.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M801.02,-1951.64C801.02,-1942.61 729.3,-1935.27 641,-1935.27 552.7,-1935.27 480.98,-1942.61 480.98,-1951.64"/>
<text xml:space="preserve" text-anchor="start" x="598.19" y="-1879.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="605.59" y="-1858.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">PostgreSQL</text>
</g>
<!-- db_3 -->
<g id="node6" class="node">
<title>db_3</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M801.02,-1661.64C801.02,-1670.67 729.3,-1678 641,-1678 552.7,-1678 480.98,-1670.67 480.98,-1661.64 480.98,-1661.64 480.98,-1514.36 480.98,-1514.36 480.98,-1505.33 552.7,-1498 641,-1498 729.3,-1498 801.02,-1505.33 801.02,-1514.36 801.02,-1514.36 801.02,-1661.64 801.02,-1661.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M801.02,-1661.64C801.02,-1652.61 729.3,-1645.27 641,-1645.27 552.7,-1645.27 480.98,-1652.61 480.98,-1661.64"/>
<text xml:space="preserve" text-anchor="start" x="598.19" y="-1580" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
</g>
<!-- db_4 -->
<g id="node7" class="node">
<title>db_4</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M801.02,-1371.64C801.02,-1380.67 729.3,-1388 641,-1388 552.7,-1388 480.98,-1380.67 480.98,-1371.64 480.98,-1371.64 480.98,-1224.36 480.98,-1224.36 480.98,-1215.33 552.7,-1208 641,-1208 729.3,-1208 801.02,-1215.33 801.02,-1224.36 801.02,-1224.36 801.02,-1371.64 801.02,-1371.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M801.02,-1371.64C801.02,-1362.61 729.3,-1355.27 641,-1355.27 552.7,-1355.27 480.98,-1362.61 480.98,-1371.64"/>
<text xml:space="preserve" text-anchor="start" x="598.19" y="-1299.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="605.59" y="-1278.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">PostgreSQL</text>
</g>
<!-- db_5 -->
<g id="node8" class="node">
<title>db_5</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M801.02,-1081.64C801.02,-1090.67 729.3,-1098 641,-1098 552.7,-1098 480.98,-1090.67 480.98,-1081.64 480.98,-1081.64 480.98,-934.36 480.98,-934.36 480.98,-925.33 552.7,-918 641,-918 729.3,-918 801.02,-925.33 801.02,-934.36 801.02,-934.36 801.02,-1081.64 801.02,-1081.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M801.02,-1081.64C801.02,-1072.61 729.3,-1065.27 641,-1065.27 552.7,-1065.27 480.98,-1072.61 480.98,-1081.64"/>
<text xml:space="preserve" text-anchor="start" x="598.19" y="-1009.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="615.72" y="-988.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">MariaDB</text>
</g>
<!-- db_6 -->
<g id="node9" class="node">
<title>db_6</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M801.02,-791.64C801.02,-800.67 729.3,-808 641,-808 552.7,-808 480.98,-800.67 480.98,-791.64 480.98,-791.64 480.98,-644.36 480.98,-644.36 480.98,-635.33 552.7,-628 641,-628 729.3,-628 801.02,-635.33 801.02,-644.36 801.02,-644.36 801.02,-791.64 801.02,-791.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M801.02,-791.64C801.02,-782.61 729.3,-775.27 641,-775.27 552.7,-775.27 480.98,-782.61 480.98,-791.64"/>
<text xml:space="preserve" text-anchor="start" x="598.19" y="-719.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="605.59" y="-698.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">PostgreSQL</text>
</g>
<!-- db_7 -->
<g id="node10" class="node">
<title>db_7</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M801.02,-501.64C801.02,-510.67 729.3,-518 641,-518 552.7,-518 480.98,-510.67 480.98,-501.64 480.98,-501.64 480.98,-354.36 480.98,-354.36 480.98,-345.33 552.7,-338 641,-338 729.3,-338 801.02,-345.33 801.02,-354.36 801.02,-354.36 801.02,-501.64 801.02,-501.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M801.02,-501.64C801.02,-492.61 729.3,-485.27 641,-485.27 552.7,-485.27 480.98,-492.61 480.98,-501.64"/>
<text xml:space="preserve" text-anchor="start" x="598.19" y="-429.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="612.1" y="-408.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">MongoDB</text>
</g>
<!-- volumes -->
<g id="node11" class="node">
<title>volumes</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M801.96,-211.64C801.96,-220.67 729.81,-228 641,-228 552.18,-228 480.04,-220.67 480.04,-211.64 480.04,-211.64 480.04,-64.36 480.04,-64.36 480.04,-55.33 552.18,-48 641,-48 729.81,-48 801.96,-55.33 801.96,-64.36 801.96,-64.36 801.96,-211.64 801.96,-211.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M801.96,-211.64C801.96,-202.61 729.81,-195.27 641,-195.27 552.18,-195.27 480.04,-202.61 480.04,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="567.64" y="-159.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Docker Volumes</text>
<text xml:space="preserve" text-anchor="start" x="609.94" y="-138.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">Filesystem</text>
<text xml:space="preserve" text-anchor="start" x="500.1" y="-117.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">/var/lib/docker/volumes on every managed</text>
<text xml:space="preserve" text-anchor="start" x="622.23" y="-99.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">node.</text>
</g>
<!-- shared -->
<g id="node12" class="node">
<title>shared</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M360.04,-1806.64C360.04,-1815.67 288.32,-1823 200.02,-1823 111.72,-1823 40,-1815.67 40,-1806.64 40,-1806.64 40,-1659.36 40,-1659.36 40,-1650.33 111.72,-1643 200.02,-1643 288.32,-1643 360.04,-1650.33 360.04,-1659.36 360.04,-1659.36 360.04,-1806.64 360.04,-1806.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M360.04,-1806.64C360.04,-1797.61 288.32,-1790.27 200.02,-1790.27 111.72,-1790.27 40,-1797.61 40,-1806.64"/>
<text xml:space="preserve" text-anchor="start" x="125.54" y="-1745.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Shared File Tree</text>
<text xml:space="preserve" text-anchor="start" x="168.96" y="-1724.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">Filesystem</text>
<text xml:space="preserve" text-anchor="start" x="61.64" y="-1703.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">/rootless&#45;srv/file&#45;browser&#45;quantum/shared</text>
</g>
<!-- databasus&#45;&gt;db -->
<g id="edge1" class="edge">
<title>databasus&#45;&gt;db</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M348.42,-1532.61C365.67,-1548.96 381.01,-1567.46 392.04,-1588 471.04,-1735.14 353.16,-2195.37 440.04,-2338 448.68,-2352.18 459.68,-2364.9 472.07,-2376.26"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="472.26,-2376.43 477.62,-2377.12 479.04,-2382.34 473.68,-2381.64 472.26,-2376.43"/>
</g>
<!-- databasus&#45;&gt;db_1 -->
<g id="edge2" class="edge">
<title>databasus&#45;&gt;db_1</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M347.21,-1532.58C364.75,-1548.99 380.5,-1567.5 392.04,-1588 492.88,-1767.12 329.61,-1874.63 440.04,-2048 448.78,-2061.73 459.71,-2074.1 471.92,-2085.21"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="471.96,-2085.24 477.32,-2085.93 478.76,-2091.14 473.39,-2090.46 471.96,-2085.24"/>
</g>
<!-- databasus&#45;&gt;db_2 -->
<g id="edge3" class="edge">
<title>databasus&#45;&gt;db_2</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M342.18,-1532.81C360.9,-1549.38 378.32,-1567.87 392.04,-1588 436.26,-1652.87 392.36,-1695.63 440.04,-1758 449.33,-1770.15 460.23,-1781.33 472.07,-1791.56"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="472.1,-1791.58 477.48,-1792.15 479.02,-1797.34 473.64,-1796.77 472.1,-1791.58"/>
</g>
<!-- databasus&#45;&gt;db_3 -->
<g id="edge4" class="edge">
<title>databasus&#45;&gt;db_3</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M359.81,-1495.45C395.6,-1507.27 433.73,-1519.87 469.96,-1531.83"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="469.86,-1531.8 475.08,-1530.36 478.41,-1534.62 473.2,-1536.06 469.86,-1531.8"/>
</g>
<!-- databasus&#45;&gt;db_4 -->
<g id="edge5" class="edge">
<title>databasus&#45;&gt;db_4</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M359.81,-1390.55C395.6,-1378.73 433.73,-1366.13 469.96,-1354.17"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="469.86,-1354.2 473.2,-1349.94 478.41,-1351.38 475.08,-1355.64 469.86,-1354.2"/>
</g>
<!-- databasus&#45;&gt;db_5 -->
<g id="edge6" class="edge">
<title>databasus&#45;&gt;db_5</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M264.02,-1353.01C309.19,-1291.84 373.57,-1211.07 440.04,-1149 457.9,-1132.32 477.83,-1116.02 498,-1100.76"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="498.01,-1100.76 499.81,-1095.66 505.21,-1095.37 503.41,-1100.47 498.01,-1100.76"/>
</g>
<!-- databasus&#45;&gt;db_6 -->
<g id="edge7" class="edge">
<title>databasus&#45;&gt;db_6</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M220.94,-1353.04C251.51,-1230.86 319.49,-1010.36 440.04,-859 454.1,-841.35 470.93,-824.96 488.78,-810.05"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="488.67,-810.14 490.26,-804.97 495.65,-804.45 494.05,-809.62 488.67,-810.14"/>
</g>
<!-- databasus&#45;&gt;db_7 -->
<g id="edge8" class="edge">
<title>databasus&#45;&gt;db_7</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M205.82,-1353.13C218.8,-1184.73 266.46,-816.41 440.04,-569 452.57,-551.14 468.11,-534.78 484.96,-520.03"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="485.1,-519.91 486.59,-514.71 491.96,-514.08 490.47,-519.28 485.1,-519.91"/>
</g>
<!-- zerobyte&#45;&gt;volumes -->
<g id="edge9" class="edge">
<title>zerobyte&#45;&gt;volumes</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M359.81,-138C395.07,-138 432.6,-138 468.35,-138"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="468.58,-138 473.08,-135 477.58,-138 473.08,-141 468.58,-138"/>
</g>
</g>
</svg>
`;case`apps`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3373pt" height="1240pt"
 viewBox="0.00 0.00 3373.00 1240.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1224.65)">
<!-- gateway -->
<g id="node1" class="node">
<title>gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1618.04,-1209.6 1298,-1209.6 1298,-1029.6 1618.04,-1029.6 1618.04,-1209.6"/>
<text xml:space="preserve" text-anchor="start" x="1418.56" y="-1131.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1319.61" y="-1108.6" font-family="Arial" font-size="15.00" fill="#c2f0c2">One public entry point for every published</text>
<text xml:space="preserve" text-anchor="start" x="1438.84" y="-1090.6" font-family="Arial" font-size="15.00" fill="#c2f0c2">route.</text>
</g>
<!-- prjman -->
<g id="node2" class="node">
<title>prjman</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="320.04,-866.4 0,-866.4 0,-686.4 320.04,-686.4 320.04,-866.4"/>
<text xml:space="preserve" text-anchor="start" x="86.65" y="-768.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Project Manager</text>
</g>
<!-- docsign -->
<g id="node3" class="node">
<title>docsign</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="750.04,-866.4 430,-866.4 430,-686.4 750.04,-686.4 750.04,-866.4"/>
<text xml:space="preserve" text-anchor="start" x="508.31" y="-768.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Document Signing</text>
</g>
<!-- docarc -->
<g id="node4" class="node">
<title>docarc</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="1180.04,-866.4 860,-866.4 860,-686.4 1180.04,-686.4 1180.04,-866.4"/>
<text xml:space="preserve" text-anchor="start" x="938.32" y="-768.4" font-family="Arial" font-size="20.00" fill="#eef2ff">Document Archive</text>
</g>
<!-- medialib -->
<g id="node5" class="node">
<title>medialib</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="1626.49,-866.4 1289.55,-866.4 1289.55,-686.4 1626.49,-686.4 1626.49,-866.4"/>
<text xml:space="preserve" text-anchor="start" x="1397.44" y="-788.4" font-family="Arial" font-size="20.00" fill="#eef2ff">Media Library</text>
<text xml:space="preserve" text-anchor="start" x="1309.61" y="-765.4" font-family="Arial" font-size="15.00" fill="#c7d2fe">Seven products in one stack. Each is its own</text>
<text xml:space="preserve" text-anchor="start" x="1420.08" y="-747.4" font-family="Arial" font-size="15.00" fill="#c7d2fe">application.</text>
</g>
<!-- gameservers -->
<g id="node6" class="node">
<title>gameservers</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="2056.04,-866.4 1736,-866.4 1736,-686.4 2056.04,-686.4 2056.04,-866.4"/>
<text xml:space="preserve" text-anchor="start" x="1831.56" y="-768.4" font-family="Arial" font-size="20.00" fill="#eef2ff">Game Servers</text>
</g>
<!-- fileexp -->
<g id="node7" class="node">
<title>fileexp</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="2211.04,-523.2 1891,-523.2 1891,-343.2 2211.04,-343.2 2211.04,-523.2"/>
<text xml:space="preserve" text-anchor="start" x="1994.89" y="-425.2" font-family="Arial" font-size="20.00" fill="#eef2ff">File Explorer</text>
</g>
<!-- secretsman -->
<g id="node8" class="node">
<title>secretsman</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1508.04,-180 1188,-180 1188,0 1508.04,0 1508.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1271.87" y="-82" font-family="Arial" font-size="20.00" fill="#f8fafc">Secrets Manager</text>
</g>
<!-- erp -->
<g id="node9" class="node">
<title>erp</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="2913.04,-1209.6 2593,-1209.6 2593,-1029.6 2913.04,-1029.6 2913.04,-1209.6"/>
<text xml:space="preserve" text-anchor="start" x="2732.46" y="-1111.6" font-family="Arial" font-size="20.00" fill="#eef2ff">ERP</text>
</g>
<!-- phovid -->
<g id="node10" class="node">
<title>phovid</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="3343.04,-1209.6 3023,-1209.6 3023,-1029.6 3343.04,-1029.6 3343.04,-1209.6"/>
<text xml:space="preserve" text-anchor="start" x="3076.84" y="-1111.6" font-family="Arial" font-size="20.00" fill="#eef2ff">Personal Photo Storage</text>
</g>
<!-- shareddb -->
<g id="node11" class="node">
<title>shareddb</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="697.26,-523.2 352.78,-523.2 352.78,-343.2 697.26,-343.2 697.26,-523.2"/>
<text xml:space="preserve" text-anchor="start" x="447.19" y="-445.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Shared Database</text>
<text xml:space="preserve" text-anchor="start" x="372.83" y="-422.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">One Postgres for the tenants that do not need</text>
<text xml:space="preserve" text-anchor="start" x="492.5" y="-404.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">their own.</text>
</g>
<!-- gateway&#45;&gt;prjman -->
<g id="edge1" class="edge">
<title>gateway&#45;&gt;prjman</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1298.04,-1091.13C1084.39,-1052.25 695.61,-973.75 375.02,-866.4 360.11,-861.41 344.76,-855.88 329.46,-850.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="330.71,-847.75 322.77,-847.53 328.84,-852.66 330.71,-847.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="727.11,-926.4 727.11,-969.6 866.19,-969.6 866.19,-926.4 727.11,-926.4"/>
<text xml:space="preserve" text-anchor="start" x="730.11" y="-952.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">openprj.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="730.11" y="-931.8" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;docsign -->
<g id="edge2" class="edge">
<title>gateway&#45;&gt;docsign</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1298.41,-1064.77C1219.48,-1037.46 1123.06,-1003.05 1037.61,-969.6 944.81,-933.28 842.62,-889.67 759.33,-853.18"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="760.48,-850.82 752.56,-850.21 758.37,-855.63 760.48,-850.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1037.61,-926.4 1037.61,-969.6 1186.02,-969.6 1186.02,-926.4 1037.61,-926.4"/>
<text xml:space="preserve" text-anchor="start" x="1040.61" y="-952.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">docuseal.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="1040.61" y="-931.8" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;docarc -->
<g id="edge3" class="edge">
<title>gateway&#45;&gt;docarc</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1343.8,-1029.62C1281.81,-981.34 1205.18,-921.64 1142.03,-872.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1143.92,-870.59 1136.39,-868.05 1140.69,-874.73 1143.92,-870.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1265.24,-926.4 1265.24,-969.6 1405.87,-969.6 1405.87,-926.4 1265.24,-926.4"/>
<text xml:space="preserve" text-anchor="start" x="1268.24" y="-952.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">paper.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1268.24" y="-931.8" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;medialib -->
<g id="edge4" class="edge">
<title>gateway&#45;&gt;medialib</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1458.02,-1029.84C1458.02,-982.94 1458.02,-925.21 1458.02,-876.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1460.65,-876.83 1458.02,-869.33 1455.4,-876.83 1460.65,-876.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1458.02,-926.4 1458.02,-969.6 1516.69,-969.6 1516.69,-926.4 1458.02,-926.4"/>
<text xml:space="preserve" text-anchor="start" x="1461.02" y="-955" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
<text xml:space="preserve" text-anchor="start" x="1461.02" y="-931.8" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;gameservers -->
<g id="edge5" class="edge">
<title>gateway&#45;&gt;gameservers</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1572.24,-1029.62C1634.23,-981.34 1710.86,-921.64 1774.01,-872.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1775.35,-874.73 1779.65,-868.05 1772.12,-870.59 1775.35,-874.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1703.24,-926.4 1703.24,-969.6 1810.4,-969.6 1810.4,-926.4 1703.24,-926.4"/>
<text xml:space="preserve" text-anchor="start" x="1706.24" y="-952.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">raw TCP :18022</text>
<text xml:space="preserve" text-anchor="start" x="1706.24" y="-931.8" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ TCP ]</text>
</g>
<!-- gateway&#45;&gt;fileexp -->
<g id="edge6" class="edge">
<title>gateway&#45;&gt;fileexp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1617.88,-1106.5C1773.11,-1085.28 2000.96,-1026.89 2111.02,-866.4 2178.64,-767.8 2140.08,-626.5 2100.55,-532.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2103.04,-531.77 2097.68,-525.91 2098.22,-533.84 2103.04,-531.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2147.93,-754.8 2147.93,-798 2237.19,-798 2237.19,-754.8 2147.93,-754.8"/>
<text xml:space="preserve" text-anchor="start" x="2150.93" y="-781" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTP :18450</text>
<text xml:space="preserve" text-anchor="start" x="2150.93" y="-760.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;secretsman -->
<g id="edge7" class="edge">
<title>gateway&#45;&gt;secretsman</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M1617.76,-1095.2C1834.9,-1059.32 2203.29,-982.42 2264.02,-866.4 2371.87,-660.39 2407,-528.13 2266.02,-343.2 2175.76,-224.8 1757.88,-148.14 1518.21,-113.11"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1518.79,-110.54 1510.99,-112.06 1518.04,-115.74 1518.79,-110.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2358.77,-593.4 2358.77,-616.2 2385.76,-616.2 2385.76,-593.4 2358.77,-593.4"/>
<text xml:space="preserve" text-anchor="start" x="2361.77" y="-601.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#cbd5e1">[...]</text>
</g>
<!-- prjman&#45;&gt;secretsman -->
<g id="edge11" class="edge">
<title>prjman&#45;&gt;secretsman</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M144.22,-686.69C132.41,-589.73 130.54,-435.89 214.97,-343.2 342.52,-203.16 893.73,-132.79 1177.61,-105.29"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1177.78,-107.91 1185,-104.58 1177.28,-102.68 1177.78,-107.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="214.97,-411.6 214.97,-454.8 298.02,-454.8 298.02,-411.6 214.97,-411.6"/>
<text xml:space="preserve" text-anchor="start" x="217.97" y="-437.8" font-family="Arial" font-size="14.00" fill="#cbd5e1">/openproject</text>
<text xml:space="preserve" text-anchor="start" x="217.97" y="-417" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- prjman&#45;&gt;shareddb -->
<g id="edge10" class="edge">
<title>prjman&#45;&gt;shareddb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M254.97,-686.64C306.3,-638.65 369.76,-579.34 422.25,-530.27"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="424.02,-532.21 427.7,-525.17 420.43,-528.37 424.02,-532.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="364.37,-593.4 364.37,-616.2 454.41,-616.2 454.41,-593.4 364.37,-593.4"/>
<text xml:space="preserve" text-anchor="start" x="367.37" y="-599.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- docsign&#45;&gt;secretsman -->
<g id="edge13" class="edge">
<title>docsign&#45;&gt;secretsman</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M682.93,-686.45C775.65,-598.21 922.7,-459.7 1053.09,-343.2 1112.11,-290.47 1179.07,-233.03 1234.25,-186.3"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1235.62,-188.58 1239.65,-181.73 1232.22,-184.57 1235.62,-188.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1053.09,-411.6 1053.09,-454.8 1119.02,-454.8 1119.02,-411.6 1053.09,-411.6"/>
<text xml:space="preserve" text-anchor="start" x="1056.09" y="-437.8" font-family="Arial" font-size="14.00" fill="#cbd5e1">/docuseal</text>
<text xml:space="preserve" text-anchor="start" x="1056.09" y="-417" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- docsign&#45;&gt;shareddb -->
<g id="edge12" class="edge">
<title>docsign&#45;&gt;shareddb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M573.11,-686.64C564.16,-639.64 553.13,-581.77 543.9,-533.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="546.51,-532.95 542.52,-526.08 541.35,-533.94 546.51,-532.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="561.41,-593.4 561.41,-616.2 651.45,-616.2 651.45,-593.4 561.41,-593.4"/>
<text xml:space="preserve" text-anchor="start" x="564.41" y="-599.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- docarc&#45;&gt;secretsman -->
<g id="edge14" class="edge">
<title>docarc&#45;&gt;secretsman</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M1062.56,-686.63C1123.97,-558.5 1237.05,-322.54 1300.91,-189.3"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1303.24,-190.51 1304.11,-182.62 1298.5,-188.24 1303.24,-190.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1221.98,-411.6 1221.98,-454.8 1292.57,-454.8 1292.57,-411.6 1221.98,-411.6"/>
<text xml:space="preserve" text-anchor="start" x="1224.98" y="-437.8" font-family="Arial" font-size="14.00" fill="#cbd5e1">/paperless</text>
<text xml:space="preserve" text-anchor="start" x="1224.98" y="-417" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- medialib&#45;&gt;secretsman -->
<g id="edge15" class="edge">
<title>medialib&#45;&gt;secretsman</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M1443.75,-686.63C1423.2,-558.76 1385.39,-323.48 1363.95,-190.1"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1366.57,-189.86 1362.79,-182.87 1361.38,-190.7 1366.57,-189.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1415.75,-411.6 1415.75,-454.8 1475.1,-454.8 1475.1,-411.6 1415.75,-411.6"/>
<text xml:space="preserve" text-anchor="start" x="1418.75" y="-437.8" font-family="Arial" font-size="14.00" fill="#cbd5e1">/stream</text>
<text xml:space="preserve" text-anchor="start" x="1418.75" y="-417" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- gameservers&#45;&gt;fileexp -->
<g id="edge16" class="edge">
<title>gameservers&#45;&gt;fileexp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1936.34,-686.64C1957.83,-639.34 1984.31,-581.04 2006.42,-532.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2008.67,-533.77 2009.38,-525.86 2003.89,-531.6 2008.67,-533.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1982.8,-593.4 1982.8,-616.2 2082.16,-616.2 2082.16,-593.4 1982.8,-593.4"/>
<text xml:space="preserve" text-anchor="start" x="1985.8" y="-599.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">stores its world</text>
</g>
<!-- erp&#45;&gt;secretsman -->
<g id="edge8" class="edge">
<title>erp&#45;&gt;secretsman</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M2730.55,-1029.87C2687.57,-874.88 2580.88,-551.52 2393.02,-343.2 2333.06,-276.71 2304.01,-271 2220.02,-240 1985.75,-153.54 1697.31,-116.8 1518.01,-101.5"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1518.4,-98.9 1510.71,-100.89 1517.96,-104.13 1518.4,-98.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2575.1,-583.2 2575.1,-626.4 2634.45,-626.4 2634.45,-583.2 2575.1,-583.2"/>
<text xml:space="preserve" text-anchor="start" x="2578.1" y="-609.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/</text>
<text xml:space="preserve" text-anchor="start" x="2578.1" y="-588.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- phovid&#45;&gt;secretsman -->
<g id="edge9" class="edge">
<title>phovid&#45;&gt;secretsman</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M3125.38,-1029.64C3022.15,-875.35 2792.66,-554.43 2539.02,-343.2 2466.97,-283.2 2443.75,-270.3 2355.02,-240 2071.65,-143.25 1722.28,-109.3 1518.39,-97.4"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1518.55,-94.78 1510.91,-96.97 1518.25,-100.02 1518.55,-94.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2816.25,-583.2 2816.25,-626.4 2875.6,-626.4 2875.6,-583.2 2816.25,-583.2"/>
<text xml:space="preserve" text-anchor="start" x="2819.25" y="-609.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/immich</text>
<text xml:space="preserve" text-anchor="start" x="2819.25" y="-588.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- shareddb&#45;&gt;secretsman -->
<g id="edge17" class="edge">
<title>shareddb&#45;&gt;secretsman</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M619.31,-343.39C662.55,-306.79 716.2,-266.76 770.43,-240 899.7,-176.21 1059.15,-137.74 1177.74,-115.91"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="1178.12,-118.51 1185.03,-114.59 1177.18,-113.35 1178.12,-118.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="770.43,-240 770.43,-283.2 834.02,-283.2 834.02,-240 770.43,-240"/>
<text xml:space="preserve" text-anchor="start" x="773.43" y="-266.2" font-family="Arial" font-size="14.00" fill="#cbd5e1">/postgres</text>
<text xml:space="preserve" text-anchor="start" x="773.43" y="-245.4" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
</g>
</svg>
`;case`gatewayDetail`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="5096pt" height="1713pt"
 viewBox="0.00 0.00 5096.00 1713.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1698.25)">
<g id="clust1" class="cluster">
<title>cluster_gateway</title>
<polygon fill="#29472f" stroke="#1c3021" points="2277.02,-303.2 2277.02,-1675.2 3545.02,-1675.2 3545.02,-303.2 2277.02,-303.2"/>
<text xml:space="preserve" text-anchor="start" x="2285.02" y="-1662.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">GATEWAY</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_pangolin</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2317.02,-646.4 2317.02,-1614 3505.02,-1614 3505.02,-646.4 2317.02,-646.4"/>
<text xml:space="preserve" text-anchor="start" x="2325.02" y="-1601.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PANGOLIN</text>
</g>
<!-- traefik -->
<g id="node1" class="node">
<title>traefik</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2741.17,-1552.8 2356.87,-1552.8 2356.87,-1372.8 2741.17,-1372.8 2741.17,-1552.8"/>
<text xml:space="preserve" text-anchor="start" x="2518.46" y="-1465.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Traefik</text>
<text xml:space="preserve" text-anchor="start" x="2396.87" y="-1442.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reverse proxy. network_mode: service:gerbil.</text>
</g>
<!-- server -->
<g id="node2" class="node">
<title>server</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2687.04,-1209.6 2357,-1209.6 2357,-1029.6 2687.04,-1029.6 2687.04,-1209.6"/>
<text xml:space="preserve" text-anchor="start" x="2450.87" y="-1111.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Pangolin Server</text>
</g>
<!-- gerbil -->
<g id="node3" class="node">
<title>gerbil</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2692.99,-866.4 2357.05,-866.4 2357.05,-686.4 2692.99,-686.4 2692.99,-866.4"/>
<text xml:space="preserve" text-anchor="start" x="2498.35" y="-798.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Gerbil</text>
<text xml:space="preserve" text-anchor="start" x="2495.04" y="-777.2" font-family="Arial" font-size="13.00" fill="#b6ecf7">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="2397.05" y="-755.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">Owns the host ports. Traefik runs in its</text>
<text xml:space="preserve" text-anchor="start" x="2455.82" y="-737.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">network namespace.</text>
</g>
<!-- newt -->
<g id="node4" class="node">
<title>newt</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2685.04,-523.2 2365,-523.2 2365,-343.2 2685.04,-343.2 2685.04,-523.2"/>
<text xml:space="preserve" text-anchor="start" x="2502.24" y="-455" font-family="Arial" font-size="20.00" fill="#eff6ff">Newt</text>
<text xml:space="preserve" text-anchor="start" x="2495.04" y="-434" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="2399.95" y="-412.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site connector, installed per host as a</text>
<text xml:space="preserve" text-anchor="start" x="2428.31" y="-394.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">systemd unit by infra.ansible.</text>
</g>
<!-- configmgmt -->
<g id="node5" class="node">
<title>configmgmt</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3905.04,-866.4 3585,-866.4 3585,-686.4 3905.04,-686.4 3905.04,-866.4"/>
<text xml:space="preserve" text-anchor="start" x="3624.39" y="-768.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Configuration Management</text>
</g>
<!-- www -->
<g id="node6" class="node">
<title>www</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="4335.04,-1205.6 4015,-1205.6 4015,-1033.6 4335.04,-1033.6 4335.04,-1205.6"/>
<text xml:space="preserve" text-anchor="start" x="4111.09" y="-1111.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Public Internet</text>
</g>
<!-- dns -->
<g id="node7" class="node">
<title>dns</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3905.04,-1209.6 3585,-1209.6 3585,-1029.6 3905.04,-1029.6 3905.04,-1209.6"/>
<text xml:space="preserve" text-anchor="start" x="3651.65" y="-1111.6" font-family="Arial" font-size="20.00" fill="#f8fafc">DNS and Certificates</text>
</g>
<!-- email -->
<g id="node8" class="node">
<title>email</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2237.04,-866.4 1917,-866.4 1917,-686.4 2237.04,-686.4 2237.04,-866.4"/>
<text xml:space="preserve" text-anchor="start" x="1989.21" y="-768.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Transactional Email</text>
</g>
<!-- idp -->
<g id="node9" class="node">
<title>idp</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="87.76" y="-82" font-family="Arial" font-size="20.00" fill="#f8fafc">Identity Provider</text>
</g>
<!-- containerorc -->
<g id="node10" class="node">
<title>containerorc</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="750.04,-180 430,-180 430,0 750.04,0 750.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="488.31" y="-82" font-family="Arial" font-size="20.00" fill="#f8fafc">Container Orchestrator</text>
</g>
<!-- pricodeforge -->
<g id="node11" class="node">
<title>pricodeforge</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1180.04,-180 860,-180 860,0 1180.04,0 1180.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="929.99" y="-82" font-family="Arial" font-size="20.00" fill="#f8fafc">Primary Code Forge</text>
</g>
<!-- ci -->
<g id="node12" class="node">
<title>ci</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1610.04,-180 1290,-180 1290,0 1610.04,0 1610.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1349.39" y="-82" font-family="Arial" font-size="20.00" fill="#f8fafc">Continuous Integration</text>
</g>
<!-- agentgw -->
<g id="node13" class="node">
<title>agentgw</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2040.04,-180 1720,-180 1720,0 2040.04,0 2040.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1811.65" y="-82" font-family="Arial" font-size="20.00" fill="#f8fafc">Agent Gateway</text>
</g>
<!-- secretsman -->
<g id="node14" class="node">
<title>secretsman</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2470.04,-180 2150,-180 2150,0 2470.04,0 2470.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="2233.87" y="-82" font-family="Arial" font-size="20.00" fill="#f8fafc">Secrets Manager</text>
</g>
<!-- prjman -->
<g id="node15" class="node">
<title>prjman</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2900.04,-180 2580,-180 2580,0 2900.04,0 2900.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="2666.65" y="-82" font-family="Arial" font-size="20.00" fill="#f8fafc">Project Manager</text>
</g>
<!-- docsign -->
<g id="node16" class="node">
<title>docsign</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="3330.04,-180 3010,-180 3010,0 3330.04,0 3330.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="3088.31" y="-82" font-family="Arial" font-size="20.00" fill="#f8fafc">Document Signing</text>
</g>
<!-- docarc -->
<g id="node17" class="node">
<title>docarc</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="3760.04,-180 3440,-180 3440,0 3760.04,0 3760.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="3518.32" y="-82" font-family="Arial" font-size="20.00" fill="#eef2ff">Document Archive</text>
</g>
<!-- medialib -->
<g id="node18" class="node">
<title>medialib</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="4206.49,-180 3869.55,-180 3869.55,0 4206.49,0 4206.49,-180"/>
<text xml:space="preserve" text-anchor="start" x="3977.44" y="-102" font-family="Arial" font-size="20.00" fill="#eef2ff">Media Library</text>
<text xml:space="preserve" text-anchor="start" x="3889.61" y="-79" font-family="Arial" font-size="15.00" fill="#c7d2fe">Seven products in one stack. Each is its own</text>
<text xml:space="preserve" text-anchor="start" x="4000.08" y="-61" font-family="Arial" font-size="15.00" fill="#c7d2fe">application.</text>
</g>
<!-- gameservers -->
<g id="node19" class="node">
<title>gameservers</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="4636.04,-180 4316,-180 4316,0 4636.04,0 4636.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="4411.56" y="-82" font-family="Arial" font-size="20.00" fill="#eef2ff">Game Servers</text>
</g>
<!-- fileexp -->
<g id="node20" class="node">
<title>fileexp</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="5066.04,-180 4746,-180 4746,0 5066.04,0 5066.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="4849.89" y="-82" font-family="Arial" font-size="20.00" fill="#eef2ff">File Explorer</text>
</g>
<!-- traefik&#45;&gt;server -->
<g id="edge4" class="edge">
<title>traefik&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2542,-1373.04C2538.28,-1326.04 2533.7,-1268.17 2529.86,-1219.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2532.5,-1219.79 2529.29,-1212.52 2527.27,-1220.2 2532.5,-1219.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2537.14,-1269.6 2537.14,-1312.8 2692.56,-1312.8 2692.56,-1269.6 2537.14,-1269.6"/>
<text xml:space="preserve" text-anchor="start" x="2540.14" y="-1295.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">authorizes each request</text>
<text xml:space="preserve" text-anchor="start" x="2540.14" y="-1275" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ Badger middleware ]</text>
</g>
<!-- traefik&#45;&gt;gerbil -->
<g id="edge5" class="edge">
<title>traefik&#45;&gt;gerbil</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2671.3,-1373.15C2689.89,-1355 2707.14,-1334.69 2720.02,-1312.8 2784.06,-1204 2770.74,-1152.54 2742.02,-1029.6 2728.02,-969.65 2688.06,-915.9 2646.18,-873.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2648.22,-871.91 2641.05,-868.49 2644.52,-875.64 2648.22,-871.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2765.88,-1098 2765.88,-1141.2 2902.64,-1141.2 2902.64,-1098 2765.88,-1098"/>
<text xml:space="preserve" text-anchor="start" x="2768.88" y="-1124.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">routes into the tunnel</text>
<text xml:space="preserve" text-anchor="start" x="2768.88" y="-1103.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- traefik&#45;&gt;dns -->
<g id="edge3" class="edge">
<title>traefik&#45;&gt;dns</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2741.02,-1434.31C2892.64,-1409.98 3108.5,-1369.49 3292.02,-1312.8 3388.3,-1283.06 3492.03,-1239.92 3575.9,-1202.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3576.74,-1204.55 3582.49,-1199.06 3574.57,-1199.77 3576.74,-1204.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3406.64,-1269.6 3406.64,-1312.8 3550.34,-1312.8 3550.34,-1269.6 3406.64,-1269.6"/>
<text xml:space="preserve" text-anchor="start" x="3409.64" y="-1295.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">solves ACME DNS&#45;01</text>
<text xml:space="preserve" text-anchor="start" x="3409.64" y="-1275" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ ACME ]</text>
</g>
<!-- server&#45;&gt;gerbil -->
<g id="edge7" class="edge">
<title>server&#45;&gt;gerbil</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2522.8,-1029.84C2523.21,-982.94 2523.72,-925.21 2524.15,-876.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2526.77,-876.85 2524.21,-869.33 2521.52,-876.81 2526.77,-876.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2523.7,-926.4 2523.7,-969.6 2663.55,-969.6 2663.55,-926.4 2523.7,-926.4"/>
<text xml:space="preserve" text-anchor="start" x="2526.7" y="-952.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">pushes remote config</text>
<text xml:space="preserve" text-anchor="start" x="2526.7" y="-931.8" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTP :3001 ]</text>
</g>
<!-- server&#45;&gt;email -->
<g id="edge6" class="edge">
<title>server&#45;&gt;email</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2405.97,-1029.62C2343,-981.34 2265.14,-921.64 2200.98,-872.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2202.78,-870.51 2195.23,-868.03 2199.58,-874.68 2202.78,-870.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2326.16,-936.6 2326.16,-959.4 2402.19,-959.4 2402.19,-936.6 2326.16,-936.6"/>
<text xml:space="preserve" text-anchor="start" x="2329.16" y="-942.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">SMTP :465</text>
</g>
<!-- gerbil&#45;&gt;traefik -->
<g id="edge8" class="edge">
<title>gerbil&#45;&gt;traefik</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2692.81,-835.75C2780.25,-875.71 2879.3,-938.27 2930.02,-1029.6 2968.86,-1099.54 2967.88,-1139.13 2930.02,-1209.6 2890.78,-1282.64 2820.06,-1338.08 2750.11,-1378.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2749.03,-1375.72 2743.78,-1381.69 2751.6,-1380.29 2749.03,-1375.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2958.78,-1098 2958.78,-1141.2 3159.33,-1141.2 3159.33,-1098 2958.78,-1098"/>
<text xml:space="preserve" text-anchor="start" x="2961.78" y="-1124.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">shares the network namespace</text>
<text xml:space="preserve" text-anchor="start" x="2961.78" y="-1103.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gerbil&#45;&gt;newt -->
<g id="edge9" class="edge">
<title>gerbil&#45;&gt;newt</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M2525.02,-686.64C2525.02,-639.74 2525.02,-582.01 2525.02,-533.6"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2527.65,-533.63 2525.02,-526.13 2522.4,-533.63 2527.65,-533.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2525.02,-583.2 2525.02,-626.4 2645.41,-626.4 2645.41,-583.2 2525.02,-583.2"/>
<text xml:space="preserve" text-anchor="start" x="2528.02" y="-609.4" font-family="Arial" font-size="14.00" fill="#d4f2ff">WireGuard :51820</text>
<text xml:space="preserve" text-anchor="start" x="2528.02" y="-588.6" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ WireGuard ]</text>
</g>
<!-- newt&#45;&gt;idp -->
<g id="edge10" class="edge">
<title>newt&#45;&gt;idp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2365.25,-424.43C2067.31,-408.49 1407.22,-366.41 856.83,-283.2 640.29,-250.46 584.12,-245.08 375.02,-180 360.09,-175.35 344.75,-170.07 329.48,-164.46"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="330.77,-162.14 322.82,-161.99 328.94,-167.06 330.77,-162.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="856.83,-240 856.83,-283.2 1006.02,-283.2 1006.02,-240 856.83,-240"/>
<text xml:space="preserve" text-anchor="start" x="859.83" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">authentik.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="859.83" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt&#45;&gt;containerorc -->
<g id="edge11" class="edge">
<title>newt&#45;&gt;containerorc</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2365.29,-424.87C2057.23,-407.24 1362.21,-350.43 805.02,-180 790.06,-175.43 774.71,-170.2 759.43,-164.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="760.71,-162.3 752.77,-162.16 758.89,-167.22 760.71,-162.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1173.26,-240 1173.26,-283.2 1312.31,-283.2 1312.31,-240 1173.26,-240"/>
<text xml:space="preserve" text-anchor="start" x="1176.26" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">komo.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1176.26" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt&#45;&gt;pricodeforge -->
<g id="edge12" class="edge">
<title>newt&#45;&gt;pricodeforge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2365.2,-412.2C2118.72,-378.86 1632.71,-303.15 1235.02,-180 1220.08,-175.37 1204.74,-170.11 1189.47,-164.51"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1190.75,-162.19 1182.81,-162.04 1188.92,-167.11 1190.75,-162.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1618.93,-240 1618.93,-283.2 1718.31,-283.2 1718.31,-240 1618.93,-240"/>
<text xml:space="preserve" text-anchor="start" x="1621.93" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">fj.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="1621.93" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt&#45;&gt;ci -->
<g id="edge13" class="edge">
<title>newt&#45;&gt;ci</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2365.04,-392.73C2190.62,-347.98 1904.39,-269.52 1665.02,-180 1650.14,-174.43 1634.75,-168.48 1619.37,-162.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1620.55,-160.02 1612.61,-159.69 1618.6,-164.9 1620.55,-160.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1968.55,-240 1968.55,-283.2 2090.5,-283.2 2090.5,-240 1968.55,-240"/>
<text xml:space="preserve" text-anchor="start" x="1971.55" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">peck.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="1971.55" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt&#45;&gt;agentgw -->
<g id="edge14" class="edge">
<title>newt&#45;&gt;agentgw</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2365.16,-365.68C2309.67,-341.26 2247.54,-312.42 2192.28,-283.2 2136.18,-253.53 2076.41,-217.82 2024.34,-185.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2026.03,-183.24 2018.29,-181.48 2023.25,-187.69 2026.03,-183.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2192.28,-240 2192.28,-283.2 2378.02,-283.2 2378.02,-240 2192.28,-240"/>
<text xml:space="preserve" text-anchor="start" x="2195.28" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">komodo&#45;mcp.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="2195.28" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt&#45;&gt;secretsman -->
<g id="edge15" class="edge">
<title>newt&#45;&gt;secretsman</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2469.09,-343.44C2439.16,-295.95 2402.24,-237.35 2371.51,-188.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2373.87,-187.41 2367.65,-182.46 2369.43,-190.21 2373.87,-187.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2430.39,-240 2430.39,-283.2 2581.12,-283.2 2581.12,-240 2430.39,-240"/>
<text xml:space="preserve" text-anchor="start" x="2433.39" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">infisical.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="2433.39" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt&#45;&gt;prjman -->
<g id="edge16" class="edge">
<title>newt&#45;&gt;prjman</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2580.95,-343.44C2610.88,-295.95 2647.8,-237.35 2678.53,-188.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2680.61,-190.21 2682.39,-182.46 2676.17,-187.41 2680.61,-190.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2645.39,-240 2645.39,-283.2 2784.47,-283.2 2784.47,-240 2645.39,-240"/>
<text xml:space="preserve" text-anchor="start" x="2648.39" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">openprj.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="2648.39" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt&#45;&gt;docsign -->
<g id="edge17" class="edge">
<title>newt&#45;&gt;docsign</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2684.78,-349.37C2725.96,-327.91 2770.18,-304.77 2811.02,-283.2 2873.16,-250.38 2941.16,-214.07 3001.11,-181.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3002.24,-184.31 3007.61,-178.45 2999.76,-179.68 3002.24,-184.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2889.85,-240 2889.85,-283.2 3038.26,-283.2 3038.26,-240 2889.85,-240"/>
<text xml:space="preserve" text-anchor="start" x="2892.85" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">docuseal.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="2892.85" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt&#45;&gt;docarc -->
<g id="edge18" class="edge">
<title>newt&#45;&gt;docarc</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2684.8,-392.21C2859.06,-347.02 3145.15,-268.17 3385.02,-180 3399.86,-174.55 3415.18,-168.68 3430.5,-162.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3431.2,-165.2 3437.21,-160 3429.27,-160.32 3431.2,-165.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3199.39,-240 3199.39,-283.2 3340.02,-283.2 3340.02,-240 3199.39,-240"/>
<text xml:space="preserve" text-anchor="start" x="3202.39" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">paper.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="3202.39" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt&#45;&gt;medialib -->
<g id="edge19" class="edge">
<title>newt&#45;&gt;medialib</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2684.93,-412.47C2931.52,-379.49 3417.67,-304.25 3815.02,-180 3829.71,-175.41 3844.79,-170.29 3859.86,-164.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3860.75,-167.36 3866.91,-162.34 3858.96,-162.42 3860.75,-167.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3573.05,-240 3573.05,-283.2 3631.72,-283.2 3631.72,-240 3573.05,-240"/>
<text xml:space="preserve" text-anchor="start" x="3576.05" y="-268.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
<text xml:space="preserve" text-anchor="start" x="3576.05" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt&#45;&gt;gameservers -->
<g id="edge20" class="edge">
<title>newt&#45;&gt;gameservers</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2684.88,-423.6C2994.56,-403.76 3695.58,-343.29 4261.02,-180 4276.05,-175.66 4291.44,-170.6 4306.76,-165.13"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4307.28,-167.74 4313.43,-162.71 4305.49,-162.8 4307.28,-167.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3983.2,-240 3983.2,-283.2 4090.36,-283.2 4090.36,-240 3983.2,-240"/>
<text xml:space="preserve" text-anchor="start" x="3986.2" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">raw TCP :18022</text>
<text xml:space="preserve" text-anchor="start" x="3986.2" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ TCP ]</text>
</g>
<!-- newt&#45;&gt;fileexp -->
<g id="edge21" class="edge">
<title>newt&#45;&gt;fileexp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2684.83,-421.74C2972.26,-401.92 3595.12,-354.41 4117.02,-283.2 4373.84,-248.16 4442.29,-252.92 4691.02,-180 4706.03,-175.6 4721.41,-170.5 4736.72,-165"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4737.25,-167.6 4743.39,-162.57 4735.45,-162.67 4737.25,-167.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4436,-240 4436,-283.2 4525.26,-283.2 4525.26,-240 4436,-240"/>
<text xml:space="preserve" text-anchor="start" x="4439" y="-266.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTP :18450</text>
<text xml:space="preserve" text-anchor="start" x="4439" y="-245.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- configmgmt&#45;&gt;newt -->
<g id="edge1" class="edge">
<title>configmgmt&#45;&gt;newt</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M3613.65,-686.51C3587.41,-671.47 3559.46,-657.24 3532.02,-646.4 3249.92,-534.99 2899.14,-478.03 2694.82,-452.29"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2695.37,-449.71 2687.6,-451.39 2694.72,-454.92 2695.37,-449.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3453.92,-593.4 3453.92,-616.2 3642,-616.2 3642,-593.4 3453.92,-593.4"/>
<text xml:space="preserve" text-anchor="start" x="3456.92" y="-599.2" font-family="Arial" font-size="14.00" fill="#bbfcd3">installs the newt systemd unit</text>
</g>
<!-- www&#45;&gt;gerbil -->
<g id="edge2" class="edge">
<title>www&#45;&gt;gerbil</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4015.26,-1048C3996.83,-1041.2 3978.15,-1034.88 3960.02,-1029.6 3517.31,-900.75 2977.51,-827.53 2703.34,-796.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2703.65,-793.43 2695.9,-795.19 2703.06,-798.65 2703.65,-793.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3729.65,-926.4 3729.65,-969.6 3880.36,-969.6 3880.36,-926.4 3729.65,-926.4"/>
<text xml:space="preserve" text-anchor="start" x="3732.65" y="-952.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTPS :443, HTTP :80</text>
<text xml:space="preserve" text-anchor="start" x="3732.65" y="-931.8" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
</g>
</svg>
`;case`idpDetail`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1674pt" height="1039pt"
 viewBox="0.00 0.00 1674.00 1039.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1023.85)">
<g id="clust1" class="cluster">
<title>cluster_idp</title>
<polygon fill="#29472f" stroke="#1c3021" points="372.2,-8 372.2,-717.6 1286.2,-717.6 1286.2,-8 372.2,-8"/>
<text xml:space="preserve" text-anchor="start" x="380.2" y="-704.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">IDENTITY PROVIDER</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_authentik</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="404.2,-40 404.2,-664.4 1254.2,-664.4 1254.2,-40 404.2,-40"/>
<text xml:space="preserve" text-anchor="start" x="412.2" y="-651.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">AUTHENTIK</text>
</g>
<!-- worker -->
<g id="node1" class="node">
<title>worker</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="774.23,-603.2 444.18,-603.2 444.18,-423.2 774.23,-423.2 774.23,-603.2"/>
<text xml:space="preserve" text-anchor="start" x="576.98" y="-505.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Worker</text>
</g>
<!-- server -->
<g id="node2" class="node">
<title>server</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1214.23,-603.2 884.18,-603.2 884.18,-423.2 1214.23,-423.2 1214.23,-603.2"/>
<text xml:space="preserve" text-anchor="start" x="1019.75" y="-505.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Server</text>
</g>
<!-- db -->
<g id="node3" class="node">
<title>db</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1044.22,-243.64C1044.22,-252.67 972.5,-260 884.2,-260 795.91,-260 724.18,-252.67 724.18,-243.64 724.18,-243.64 724.18,-96.36 724.18,-96.36 724.18,-87.33 795.91,-80 884.2,-80 972.5,-80 1044.22,-87.33 1044.22,-96.36 1044.22,-96.36 1044.22,-243.64 1044.22,-243.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1044.22,-243.64C1044.22,-234.61 972.5,-227.27 884.2,-227.27 795.91,-227.27 724.18,-234.61 724.18,-243.64"/>
<text xml:space="preserve" text-anchor="start" x="841.4" y="-171.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="848.8" y="-150.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">PostgreSQL</text>
</g>
<!-- overlaynet -->
<g id="node4" class="node">
<title>overlaynet</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="334.41,-603.2 0,-603.2 0,-423.2 334.41,-423.2 334.41,-603.2"/>
<text xml:space="preserve" text-anchor="start" x="93.3" y="-525.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Overlay Network</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-502.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">Flat addressing across every host, wherever</text>
<text xml:space="preserve" text-anchor="start" x="148.04" y="-484.2" font-family="Arial" font-size="15.00" fill="#cbd5e1">it sits.</text>
</g>
<!-- gateway -->
<g id="node5" class="node">
<title>gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="994.22,-1008.8 674.18,-1008.8 674.18,-828.8 994.22,-828.8 994.22,-1008.8"/>
<text xml:space="preserve" text-anchor="start" x="794.74" y="-930.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Gateway</text>
<text xml:space="preserve" text-anchor="start" x="695.79" y="-907.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">One public entry point for every published</text>
<text xml:space="preserve" text-anchor="start" x="815.02" y="-889.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">route.</text>
</g>
<!-- dbbak -->
<g id="node6" class="node">
<title>dbbak</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1644.22,-603.2 1324.18,-603.2 1324.18,-423.2 1644.22,-423.2 1644.22,-603.2"/>
<text xml:space="preserve" text-anchor="start" x="1350.23" y="-505.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Database Backup Coordinator</text>
</g>
<!-- dashboard -->
<g id="node7" class="node">
<title>dashboard</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1424.22,-1008.8 1104.18,-1008.8 1104.18,-828.8 1424.22,-828.8 1424.22,-1008.8"/>
<text xml:space="preserve" text-anchor="start" x="1215.28" y="-910.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Dashboard</text>
</g>
<!-- worker&#45;&gt;db -->
<g id="edge5" class="edge">
<title>worker&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M680.74,-423.44C718.95,-376.03 766.08,-317.56 805.35,-268.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="807.27,-270.64 809.93,-263.15 803.18,-267.34 807.27,-270.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="763.17,-330.2 763.17,-353 853.21,-353 853.21,-330.2 763.17,-330.2"/>
<text xml:space="preserve" text-anchor="start" x="766.17" y="-336" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- server&#45;&gt;db -->
<g id="edge6" class="edge">
<title>server&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1006.28,-423.44C983.54,-376.42 955.54,-318.52 932.1,-270.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="934.57,-269.13 928.94,-263.52 929.85,-271.41 934.57,-269.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="976.58,-330.2 976.58,-353 1066.62,-353 1066.62,-330.2 976.58,-330.2"/>
<text xml:space="preserve" text-anchor="start" x="979.58" y="-336" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- overlaynet&#45;&gt;db -->
<g id="edge1" class="edge">
<title>overlaynet&#45;&gt;db</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M333.99,-429.78C403.95,-395.48 486.25,-355.46 561,-320 610.56,-296.49 664.61,-271.36 714.09,-248.57"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="715.13,-250.98 720.84,-245.46 712.93,-246.21 715.13,-250.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="561,-320 561,-363.2 703.2,-363.2 703.2,-320 561,-320"/>
<text xml:space="preserve" text-anchor="start" x="564" y="-346.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">exposes on the tailnet</text>
<text xml:space="preserve" text-anchor="start" x="564" y="-325.4" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ shared__ts&#45;gateway ]</text>
</g>
<!-- gateway&#45;&gt;server -->
<g id="edge2" class="edge">
<title>gateway&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M881.39,-829.23C915.56,-765.07 961.77,-678.33 997.04,-612.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="999.31,-613.44 1000.52,-605.58 994.68,-610.97 999.31,-613.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="935.26,-725.6 935.26,-768.8 1084.45,-768.8 1084.45,-725.6 935.26,-725.6"/>
<text xml:space="preserve" text-anchor="start" x="938.26" y="-751.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">authentik.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="938.26" y="-731" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- dbbak&#45;&gt;db -->
<g id="edge3" class="edge">
<title>dbbak&#45;&gt;db</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1327.74,-423.22C1239.46,-373.02 1129.49,-310.49 1041.14,-260.24"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1040.96,-260.14 1035.56,-260.53 1033.14,-255.69 1038.53,-255.31 1040.96,-260.14"/>
</g>
<!-- dashboard&#45;&gt;server -->
<g id="edge4" class="edge">
<title>dashboard&#45;&gt;server</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M1217.02,-829.23C1182.84,-765.07 1136.64,-678.33 1101.36,-612.12"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1103.73,-610.97 1097.88,-605.58 1099.09,-613.44 1103.73,-610.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1182.28,-725.6 1182.28,-768.8 1309.69,-768.8 1309.69,-725.6 1182.28,-725.6"/>
<text xml:space="preserve" text-anchor="start" x="1185.28" y="-751.8" font-family="Arial" font-size="14.00" fill="#d4f2ff">authenticates users</text>
<text xml:space="preserve" text-anchor="start" x="1185.28" y="-731" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ OIDC ]</text>
</g>
</g>
</svg>
`;case`secretsManDetail`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="7715pt" height="1018pt"
 viewBox="0.00 0.00 7715.00 1018.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1003.45)">
<g id="clust1" class="cluster">
<title>cluster_secretsman</title>
<polygon fill="#3a404a" stroke="#292f37" points="2947.02,-8 2947.02,-697.2 3851.02,-697.2 3851.02,-8 2947.02,-8"/>
<text xml:space="preserve" text-anchor="start" x="2955.02" y="-684.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">SECRETS MANAGER</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_infisical</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2979.02,-40 2979.02,-644 3819.02,-644 3819.02,-40 2979.02,-40"/>
<text xml:space="preserve" text-anchor="start" x="2987.02" y="-631.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">INFISICAL</text>
</g>
<!-- server -->
<g id="node1" class="node">
<title>server</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3779.04,-582.8 3449,-582.8 3449,-402.8 3779.04,-402.8 3779.04,-582.8"/>
<text xml:space="preserve" text-anchor="start" x="3584.57" y="-484.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Server</text>
</g>
<!-- redis -->
<g id="node2" class="node">
<title>redis</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3779.04,-260 3449,-260 3449,-80 3779.04,-80 3779.04,-260"/>
<text xml:space="preserve" text-anchor="start" x="3585.11" y="-171.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Cache</text>
<text xml:space="preserve" text-anchor="start" x="3597.4" y="-150.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Redis</text>
</g>
<!-- db -->
<g id="node3" class="node">
<title>db</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M3339.04,-243.64C3339.04,-252.67 3267.32,-260 3179.02,-260 3090.72,-260 3019,-252.67 3019,-243.64 3019,-243.64 3019,-96.36 3019,-96.36 3019,-87.33 3090.72,-80 3179.02,-80 3267.32,-80 3339.04,-87.33 3339.04,-96.36 3339.04,-96.36 3339.04,-243.64 3339.04,-243.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M3339.04,-243.64C3339.04,-234.61 3267.32,-227.27 3179.02,-227.27 3090.72,-227.27 3019,-234.61 3019,-243.64"/>
<text xml:space="preserve" text-anchor="start" x="3136.21" y="-171.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="3143.61" y="-150.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">PostgreSQL</text>
</g>
<!-- overlaynet -->
<g id="node4" class="node">
<title>overlaynet</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="764.22,-988.4 429.82,-988.4 429.82,-808.4 764.22,-808.4 764.22,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="523.11" y="-910.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Overlay Network</text>
<text xml:space="preserve" text-anchor="start" x="449.87" y="-887.4" font-family="Arial" font-size="15.00" fill="#cbd5e1">Flat addressing across every host, wherever</text>
<text xml:space="preserve" text-anchor="start" x="577.85" y="-869.4" font-family="Arial" font-size="15.00" fill="#cbd5e1">it sits.</text>
</g>
<!-- gateway -->
<g id="node5" class="node">
<title>gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1194.04,-988.4 874,-988.4 874,-808.4 1194.04,-808.4 1194.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="994.56" y="-910.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Gateway</text>
<text xml:space="preserve" text-anchor="start" x="895.61" y="-887.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">One public entry point for every published</text>
<text xml:space="preserve" text-anchor="start" x="1014.84" y="-869.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">route.</text>
</g>
<!-- idp -->
<g id="node6" class="node">
<title>idp</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1624.04,-988.4 1304,-988.4 1304,-808.4 1624.04,-808.4 1624.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="1391.76" y="-890.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Identity Provider</text>
</g>
<!-- containerorc -->
<g id="node7" class="node">
<title>containerorc</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2054.04,-988.4 1734,-988.4 1734,-808.4 2054.04,-808.4 2054.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="1792.31" y="-890.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Container Orchestrator</text>
</g>
<!-- configmgmt -->
<g id="node8" class="node">
<title>configmgmt</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="2484.04,-988.4 2164,-988.4 2164,-808.4 2484.04,-808.4 2484.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="2203.39" y="-890.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Configuration Management</text>
</g>
<!-- pricodeforge -->
<g id="node9" class="node">
<title>pricodeforge</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2914.04,-988.4 2594,-988.4 2594,-808.4 2914.04,-808.4 2914.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="2663.99" y="-890.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Primary Code Forge</text>
</g>
<!-- ci -->
<g id="node10" class="node">
<title>ci</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="3344.04,-988.4 3024,-988.4 3024,-808.4 3344.04,-808.4 3344.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="3083.39" y="-890.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Continuous Integration</text>
</g>
<!-- agentgw -->
<g id="node11" class="node">
<title>agentgw</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3774.04,-988.4 3454,-988.4 3454,-808.4 3774.04,-808.4 3774.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="3545.65" y="-890.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Agent Gateway</text>
</g>
<!-- databak -->
<g id="node12" class="node">
<title>databak</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="4204.04,-988.4 3884,-988.4 3884,-808.4 4204.04,-808.4 4204.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="3931.73" y="-890.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Data Backup Coordinator</text>
</g>
<!-- dbbak -->
<g id="node13" class="node">
<title>dbbak</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-988.4 0,-988.4 0,-808.4 320.04,-808.4 320.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="26.05" y="-890.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Database Backup Coordinator</text>
</g>
<!-- dashboard -->
<g id="node14" class="node">
<title>dashboard</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="4634.04,-988.4 4314,-988.4 4314,-808.4 4634.04,-808.4 4634.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="4425.1" y="-890.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Dashboard</text>
</g>
<!-- shareddb -->
<g id="node15" class="node">
<title>shareddb</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="5088.26,-988.4 4743.78,-988.4 4743.78,-808.4 5088.26,-808.4 5088.26,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="4838.19" y="-910.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Shared Database</text>
<text xml:space="preserve" text-anchor="start" x="4763.83" y="-887.4" font-family="Arial" font-size="15.00" fill="#cbd5e1">One Postgres for the tenants that do not need</text>
<text xml:space="preserve" text-anchor="start" x="4883.5" y="-869.4" font-family="Arial" font-size="15.00" fill="#cbd5e1">their own.</text>
</g>
<!-- prjman -->
<g id="node16" class="node">
<title>prjman</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="5518.04,-988.4 5198,-988.4 5198,-808.4 5518.04,-808.4 5518.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="5284.65" y="-890.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Project Manager</text>
</g>
<!-- docsign -->
<g id="node17" class="node">
<title>docsign</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="5948.04,-988.4 5628,-988.4 5628,-808.4 5948.04,-808.4 5948.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="5706.31" y="-890.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Document Signing</text>
</g>
<!-- docarc -->
<g id="node18" class="node">
<title>docarc</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="6378.04,-988.4 6058,-988.4 6058,-808.4 6378.04,-808.4 6378.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="6136.32" y="-890.4" font-family="Arial" font-size="20.00" fill="#eef2ff">Document Archive</text>
</g>
<!-- erp -->
<g id="node19" class="node">
<title>erp</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="6808.04,-988.4 6488,-988.4 6488,-808.4 6808.04,-808.4 6808.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="6627.46" y="-890.4" font-family="Arial" font-size="20.00" fill="#eef2ff">ERP</text>
</g>
<!-- phovid -->
<g id="node20" class="node">
<title>phovid</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="7238.04,-988.4 6918,-988.4 6918,-808.4 7238.04,-808.4 7238.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="6971.84" y="-890.4" font-family="Arial" font-size="20.00" fill="#eef2ff">Personal Photo Storage</text>
</g>
<!-- medialib -->
<g id="node21" class="node">
<title>medialib</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="7684.49,-988.4 7347.55,-988.4 7347.55,-808.4 7684.49,-808.4 7684.49,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="7455.44" y="-910.4" font-family="Arial" font-size="20.00" fill="#eef2ff">Media Library</text>
<text xml:space="preserve" text-anchor="start" x="7367.61" y="-887.4" font-family="Arial" font-size="15.00" fill="#c7d2fe">Seven products in one stack. Each is its own</text>
<text xml:space="preserve" text-anchor="start" x="7478.08" y="-869.4" font-family="Arial" font-size="15.00" fill="#c7d2fe">application.</text>
</g>
<!-- email -->
<g id="node22" class="node">
<title>email</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="4209.04,-260 3889,-260 3889,-80 4209.04,-80 4209.04,-260"/>
<text xml:space="preserve" text-anchor="start" x="3961.21" y="-162" font-family="Arial" font-size="20.00" fill="#f8fafc">Transactional Email</text>
</g>
<!-- server&#45;&gt;redis -->
<g id="edge21" class="edge">
<title>server&#45;&gt;redis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3614.02,-402.87C3614.02,-361.67 3614.02,-312.56 3614.02,-270.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3616.65,-270.36 3614.02,-262.86 3611.4,-270.36 3616.65,-270.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3614.02,-320 3614.02,-342.8 3741.45,-342.8 3741.45,-320 3614.02,-320"/>
<text xml:space="preserve" text-anchor="start" x="3617.02" y="-325.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queues and caches</text>
</g>
<!-- server&#45;&gt;db -->
<g id="edge22" class="edge">
<title>server&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3493.43,-402.87C3434.83,-359.65 3364.44,-307.74 3305.13,-264"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3306.87,-262.02 3299.28,-259.69 3303.75,-266.25 3306.87,-262.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3409.56,-320 3409.56,-342.8 3499.6,-342.8 3499.6,-320 3409.56,-320"/>
<text xml:space="preserve" text-anchor="start" x="3412.56" y="-325.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- server&#45;&gt;email -->
<g id="edge20" class="edge">
<title>server&#45;&gt;email</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3734.61,-402.87C3792.37,-360.27 3861.58,-309.23 3920.35,-265.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3921.65,-268.19 3926.13,-261.63 3918.54,-263.97 3921.65,-268.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3844.56,-320 3844.56,-342.8 3920.59,-342.8 3920.59,-320 3844.56,-320"/>
<text xml:space="preserve" text-anchor="start" x="3847.56" y="-325.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">SMTP :465</text>
</g>
<!-- overlaynet&#45;&gt;server -->
<g id="edge1" class="edge">
<title>overlaynet&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M763.99,-826.47C782.39,-819.86 800.98,-813.67 819.02,-808.4 1055.68,-739.27 1119.95,-739.7 1364.07,-705.2 2133.76,-596.42 3059.77,-529.39 3439.08,-504.65"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3438.98,-507.28 3446.3,-504.18 3438.64,-502.04 3438.98,-507.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1364.07,-705.2 1364.07,-748.4 1493.02,-748.4 1493.02,-705.2 1364.07,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="1367.07" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/tailscale/containers</text>
<text xml:space="preserve" text-anchor="start" x="1367.07" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- gateway&#45;&gt;server -->
<g id="edge2" class="edge">
<title>gateway&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M1194.01,-826.47C1212.35,-819.75 1230.95,-813.54 1249.02,-808.4 1523.2,-730.43 1599.83,-745.41 1882.03,-705.2 2450.34,-624.22 3126.35,-547.29 3439.19,-512.79"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3439.08,-515.44 3446.24,-512.01 3438.5,-510.22 3439.08,-515.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1882.03,-715.4 1882.03,-738.2 1909.02,-738.2 1909.02,-715.4 1882.03,-715.4"/>
<text xml:space="preserve" text-anchor="start" x="1885.03" y="-723.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#cbd5e1">[...]</text>
</g>
<!-- idp&#45;&gt;server -->
<g id="edge3" class="edge">
<title>idp&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M1623.8,-826.85C1642.22,-820.03 1660.89,-813.7 1679.02,-808.4 2312.06,-623.25 3095.52,-538.14 3438.91,-507.7"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3438.93,-510.34 3446.17,-507.06 3438.47,-505.11 3438.93,-510.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2041.95,-705.2 2041.95,-748.4 2108.66,-748.4 2108.66,-705.2 2041.95,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="2044.95" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/authentik</text>
<text xml:space="preserve" text-anchor="start" x="2044.95" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- containerorc&#45;&gt;server -->
<g id="edge4" class="edge">
<title>containerorc&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M2053.96,-827.38C2072.35,-820.47 2090.97,-813.97 2109.02,-808.4 2580.33,-662.98 3155.35,-563.59 3438.81,-519.53"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3439.19,-522.13 3446.2,-518.39 3438.38,-516.95 3439.19,-522.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2474.84,-705.2 2474.84,-748.4 2534.54,-748.4 2534.54,-705.2 2474.84,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="2477.84" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/komodo</text>
<text xml:space="preserve" text-anchor="start" x="2477.84" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- configmgmt&#45;&gt;server -->
<g id="edge5" class="edge">
<title>configmgmt&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="1,5" d="M2483.84,-829.02C2502.33,-821.77 2521.02,-814.74 2539.02,-808.4 2851.83,-698.24 3224.95,-595.24 3439.2,-538.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3439.77,-541.31 3446.35,-536.86 3438.43,-536.23 3439.77,-541.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2831.13,-705.2 2831.13,-748.4 2890.48,-748.4 2890.48,-705.2 2831.13,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="2834.13" y="-733.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
<text xml:space="preserve" text-anchor="start" x="2834.13" y="-710.6" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ Infisical ]</text>
</g>
<!-- pricodeforge&#45;&gt;server -->
<g id="edge6" class="edge">
<title>pricodeforge&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M2914.02,-822.31C3063.48,-752.17 3286.03,-647.73 3439.89,-575.52"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3440.59,-578.09 3446.27,-572.53 3438.36,-573.34 3440.59,-578.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3158.23,-705.2 3158.23,-748.4 3217.58,-748.4 3217.58,-705.2 3158.23,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="3161.23" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/forgejo</text>
<text xml:space="preserve" text-anchor="start" x="3161.23" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- ci&#45;&gt;server -->
<g id="edge7" class="edge">
<title>ci&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M3278.65,-808.58C3347.6,-743.86 3440.92,-656.27 3511.61,-589.92"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3513.37,-591.87 3517.04,-584.82 3509.78,-588.04 3513.37,-591.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3386.13,-705.2 3386.13,-748.4 3471.51,-748.4 3471.51,-705.2 3386.13,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="3389.13" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/woodpecker</text>
<text xml:space="preserve" text-anchor="start" x="3389.13" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- agentgw&#45;&gt;server -->
<g id="edge8" class="edge">
<title>agentgw&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M3614.02,-808.83C3614.02,-745.06 3614.02,-659 3614.02,-592.94"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3616.65,-593.04 3614.02,-585.54 3611.4,-593.04 3616.65,-593.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3614.02,-705.2 3614.02,-748.4 3704.83,-748.4 3704.83,-705.2 3614.02,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="3617.02" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/komodo&#45;mcp</text>
<text xml:space="preserve" text-anchor="start" x="3617.02" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- databak&#45;&gt;server -->
<g id="edge9" class="edge">
<title>databak&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M3949.39,-808.58C3880.44,-743.86 3787.12,-656.27 3716.43,-589.92"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3718.26,-588.04 3711,-584.82 3714.67,-591.87 3718.26,-588.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3880.18,-705.2 3880.18,-748.4 3943.77,-748.4 3943.77,-705.2 3880.18,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="3883.18" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/zerobyte</text>
<text xml:space="preserve" text-anchor="start" x="3883.18" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- dbbak&#45;&gt;server -->
<g id="edge10" class="edge">
<title>dbbak&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M319.77,-826.77C338.2,-819.97 356.88,-813.66 375.02,-808.4 632.16,-733.81 702.91,-738.83 968.52,-705.2 1895.48,-587.83 3013.91,-523.75 3438.8,-502.19"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3438.63,-504.83 3445.99,-501.83 3438.37,-499.58 3438.63,-504.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="968.52,-705.2 968.52,-748.4 1043.02,-748.4 1043.02,-705.2 968.52,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="971.52" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/databasus</text>
<text xml:space="preserve" text-anchor="start" x="971.52" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- dbbak&#45;&gt;db -->
<g id="edge11" class="edge">
<title>dbbak&#45;&gt;db</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M319.9,-818.38C402.57,-779.98 506.01,-735.67 602.02,-705.2 1486.15,-424.63 2588.63,-253.11 3007.15,-194.12"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="3007.42,-194.09 3011.46,-190.49 3016.33,-192.83 3012.29,-196.43 3007.42,-194.09"/>
</g>
<!-- dashboard&#45;&gt;server -->
<g id="edge12" class="edge">
<title>dashboard&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M4314.02,-822.31C4164.56,-752.17 3942.01,-647.73 3788.15,-575.52"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3789.68,-573.34 3781.77,-572.53 3787.45,-578.09 3789.68,-573.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4146.34,-705.2 4146.34,-748.4 4205.69,-748.4 4205.69,-705.2 4146.34,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="4149.34" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/homarr</text>
<text xml:space="preserve" text-anchor="start" x="4149.34" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- shareddb&#45;&gt;server -->
<g id="edge13" class="edge">
<title>shareddb&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M4744.02,-828.12C4725.54,-821.23 4706.95,-814.52 4689.02,-808.4 4375.41,-701.27 4002.95,-597.36 3788.97,-539.85"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3789.74,-537.34 3781.82,-537.93 3788.38,-542.41 3789.74,-537.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4485.37,-705.2 4485.37,-748.4 4548.96,-748.4 4548.96,-705.2 4485.37,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="4488.37" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/postgres</text>
<text xml:space="preserve" text-anchor="start" x="4488.37" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- prjman&#45;&gt;server -->
<g id="edge14" class="edge">
<title>prjman&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M5198.1,-827.32C5179.71,-820.42 5161.08,-813.94 5143.02,-808.4 4662.6,-661 4075.96,-562.08 3789.02,-518.74"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3789.74,-516.19 3781.94,-517.67 3788.96,-521.38 3789.74,-516.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4897.34,-705.2 4897.34,-748.4 4980.4,-748.4 4980.4,-705.2 4897.34,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="4900.34" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/openproject</text>
<text xml:space="preserve" text-anchor="start" x="4900.34" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- docsign&#45;&gt;server -->
<g id="edge15" class="edge">
<title>docsign&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M5628.22,-826.91C5609.81,-820.09 5591.14,-813.74 5573.02,-808.4 4931.45,-619.45 4136.18,-536.15 3789.41,-506.93"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3789.74,-504.32 3782.05,-506.31 3789.3,-509.55 3789.74,-504.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5312.61,-705.2 5312.61,-748.4 5378.55,-748.4 5378.55,-705.2 5312.61,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="5315.61" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/docuseal</text>
<text xml:space="preserve" text-anchor="start" x="5315.61" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- docarc&#45;&gt;server -->
<g id="edge16" class="edge">
<title>docarc&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M6058.27,-826.75C6039.85,-819.95 6021.16,-813.65 6003.02,-808.4 5744.37,-733.51 5672.49,-743.92 5406.02,-705.2 4815.08,-619.33 4110.63,-544.13 3789.34,-511.32"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3789.75,-508.72 3782.03,-510.57 3789.22,-513.95 3789.75,-508.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5737.59,-705.2 5737.59,-748.4 5808.19,-748.4 5808.19,-705.2 5737.59,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="5740.59" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/paperless</text>
<text xml:space="preserve" text-anchor="start" x="5740.59" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- erp&#45;&gt;server -->
<g id="edge17" class="edge">
<title>erp&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M6488.27,-826.74C6469.85,-819.95 6451.16,-813.65 6433.02,-808.4 6173.94,-733.43 6102.35,-740.94 5835.02,-705.2 5076.21,-603.76 4165.19,-532.94 3789.32,-505.93"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3789.59,-503.32 3781.92,-505.4 3789.21,-508.56 3789.59,-503.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6177.41,-705.2 6177.41,-748.4 6236.76,-748.4 6236.76,-705.2 6177.41,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="6180.41" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/</text>
<text xml:space="preserve" text-anchor="start" x="6180.41" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- phovid&#45;&gt;server -->
<g id="edge18" class="edge">
<title>phovid&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M6918.28,-826.74C6899.85,-819.95 6881.16,-813.65 6863.02,-808.4 6603.51,-733.34 6532.05,-738.91 6264.02,-705.2 5335.11,-588.38 4214.43,-523.96 3789.14,-502.25"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3789.56,-499.64 3781.94,-501.88 3789.29,-504.88 3789.56,-499.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6607.06,-705.2 6607.06,-748.4 6666.41,-748.4 6666.41,-705.2 6607.06,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="6610.06" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/immich</text>
<text xml:space="preserve" text-anchor="start" x="6610.06" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- medialib&#45;&gt;server -->
<g id="edge19" class="edge">
<title>medialib&#45;&gt;server</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M7347.75,-825.96C7329.46,-819.48 7310.97,-813.47 7293.02,-808.4 7032.61,-734.92 6961.67,-737.44 6693.02,-705.2 5592.61,-573.14 4260.28,-516.47 3789.25,-499.58"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="3789.57,-496.97 3781.98,-499.32 3789.39,-502.21 3789.57,-496.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="7036.49,-705.2 7036.49,-748.4 7095.84,-748.4 7095.84,-705.2 7036.49,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="7039.49" y="-731.4" font-family="Arial" font-size="14.00" fill="#cbd5e1">/stream</text>
<text xml:space="preserve" text-anchor="start" x="7039.49" y="-710.6" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
</g>
</svg>
`;case`containerOrcDetail`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2435pt" height="1341pt"
 viewBox="0.00 0.00 2435.00 1341.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1326.25)">
<g id="clust1" class="cluster">
<title>cluster_containerorc</title>
<polygon fill="#3a404a" stroke="#292f37" points="680.97,-8 680.97,-1020 1616.97,-1020 1616.97,-8 680.97,-8"/>
<text xml:space="preserve" text-anchor="start" x="688.97" y="-1007.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">CONTAINER ORCHESTRATOR</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_komodo</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="712.97,-40 712.97,-966.8 1584.97,-966.8 1584.97,-40 712.97,-40"/>
<text xml:space="preserve" text-anchor="start" x="720.97" y="-953.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">KOMODO</text>
</g>
<!-- core -->
<g id="node1" class="node">
<title>core</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1544.72,-905.6 1181.22,-905.6 1181.22,-725.6 1544.72,-725.6 1544.72,-905.6"/>
<text xml:space="preserve" text-anchor="start" x="1341.29" y="-827.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Core</text>
<text xml:space="preserve" text-anchor="start" x="1221.22" y="-804.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">The hub: holds stack definitions and drives</text>
<text xml:space="preserve" text-anchor="start" x="1318.36" y="-786.6" font-family="Arial" font-size="15.00" fill="#b6ecf7">every deploy.</text>
</g>
<!-- periphery -->
<g id="node2" class="node">
<title>periphery</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1115.29,-582.8 752.64,-582.8 752.64,-402.8 1115.29,-402.8 1115.29,-582.8"/>
<text xml:space="preserve" text-anchor="start" x="891.17" y="-504.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Periphery</text>
<text xml:space="preserve" text-anchor="start" x="792.64" y="-481.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">Per&#45;host agent, installed as a systemd unit</text>
<text xml:space="preserve" text-anchor="start" x="881.44" y="-463.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">by infra.ansible.</text>
</g>
<!-- db -->
<g id="node3" class="node">
<title>db</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1544.99,-566.44C1544.99,-575.47 1473.26,-582.8 1384.97,-582.8 1296.67,-582.8 1224.95,-575.47 1224.95,-566.44 1224.95,-566.44 1224.95,-419.16 1224.95,-419.16 1224.95,-410.13 1296.67,-402.8 1384.97,-402.8 1473.26,-402.8 1544.99,-410.13 1544.99,-419.16 1544.99,-419.16 1544.99,-566.44 1544.99,-566.44"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1544.99,-566.44C1544.99,-557.41 1473.26,-550.07 1384.97,-550.07 1296.67,-550.07 1224.95,-557.41 1224.95,-566.44"/>
<text xml:space="preserve" text-anchor="start" x="1342.16" y="-494.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="1356.06" y="-473.6" font-family="Arial" font-size="13.00" fill="#c2f0c2">MongoDB</text>
</g>
<!-- volumes -->
<g id="node4" class="node">
<title>volumes</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1094.93,-243.64C1094.93,-252.67 1022.78,-260 933.97,-260 845.15,-260 773.01,-252.67 773.01,-243.64 773.01,-243.64 773.01,-96.36 773.01,-96.36 773.01,-87.33 845.15,-80 933.97,-80 1022.78,-80 1094.93,-87.33 1094.93,-96.36 1094.93,-96.36 1094.93,-243.64 1094.93,-243.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1094.93,-243.64C1094.93,-234.61 1022.78,-227.27 933.97,-227.27 845.15,-227.27 773.01,-234.61 773.01,-243.64"/>
<text xml:space="preserve" text-anchor="start" x="860.61" y="-191.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Docker Volumes</text>
<text xml:space="preserve" text-anchor="start" x="902.91" y="-170.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">Filesystem</text>
<text xml:space="preserve" text-anchor="start" x="793.06" y="-149.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">/var/lib/docker/volumes on every managed</text>
<text xml:space="preserve" text-anchor="start" x="915.2" y="-131.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">node.</text>
</g>
<!-- gateway -->
<g id="node5" class="node">
<title>gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1307.99,-1311.2 987.95,-1311.2 987.95,-1131.2 1307.99,-1131.2 1307.99,-1311.2"/>
<text xml:space="preserve" text-anchor="start" x="1108.5" y="-1233.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1009.55" y="-1210.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">One public entry point for every published</text>
<text xml:space="preserve" text-anchor="start" x="1128.79" y="-1192.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">route.</text>
</g>
<!-- configmgmt -->
<g id="node6" class="node">
<title>configmgmt</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="627.99,-1311.2 307.95,-1311.2 307.95,-1131.2 627.99,-1131.2 627.99,-1311.2"/>
<text xml:space="preserve" text-anchor="start" x="347.34" y="-1213.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Configuration Management</text>
</g>
<!-- agentgw -->
<g id="node7" class="node">
<title>agentgw</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1737.99,-1311.2 1417.95,-1311.2 1417.95,-1131.2 1737.99,-1131.2 1737.99,-1311.2"/>
<text xml:space="preserve" text-anchor="start" x="1509.59" y="-1213.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Agent Gateway</text>
</g>
<!-- databak -->
<g id="node8" class="node">
<title>databak</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="642.99,-582.8 322.95,-582.8 322.95,-402.8 642.99,-402.8 642.99,-582.8"/>
<text xml:space="preserve" text-anchor="start" x="370.68" y="-484.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Data Backup Coordinator</text>
</g>
<!-- dbbak -->
<g id="node9" class="node">
<title>dbbak</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="648.99,-905.6 328.95,-905.6 328.95,-725.6 648.99,-725.6 648.99,-905.6"/>
<text xml:space="preserve" text-anchor="start" x="355" y="-807.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Database Backup Coordinator</text>
</g>
<!-- pricodeforge -->
<g id="node10" class="node">
<title>pricodeforge</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2404.99,-582.8 2084.95,-582.8 2084.95,-402.8 2404.99,-402.8 2404.99,-582.8"/>
<text xml:space="preserve" text-anchor="start" x="2154.94" y="-484.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Primary Code Forge</text>
</g>
<!-- alerting -->
<g id="node11" class="node">
<title>alerting</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1974.99,-582.8 1654.95,-582.8 1654.95,-402.8 1974.99,-402.8 1974.99,-582.8"/>
<text xml:space="preserve" text-anchor="start" x="1781.06" y="-484.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Alerting</text>
</g>
<!-- core&#45;&gt;periphery -->
<g id="edge9" class="edge">
<title>core&#45;&gt;periphery</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M1215.02,-725.69C1185.7,-706.68 1155.57,-686.12 1128.28,-665.6 1097.22,-642.25 1065.03,-615.12 1035.99,-589.41"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1037.89,-587.59 1030.54,-584.57 1034.4,-591.51 1037.89,-587.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1128.28,-642.8 1128.28,-665.6 1345.97,-665.6 1345.97,-642.8 1128.28,-642.8"/>
<text xml:space="preserve" text-anchor="start" x="1131.28" y="-648.6" font-family="Arial" font-size="14.00" fill="#bbfcd3">TLS :8120, pinned core public key</text>
</g>
<!-- core&#45;&gt;db -->
<g id="edge10" class="edge">
<title>core&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1369.07,-725.67C1371.87,-684.81 1375.2,-636.18 1378.09,-594.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1380.7,-594.43 1378.59,-586.76 1375.46,-594.07 1380.7,-594.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1374.63,-642.8 1374.63,-665.6 1483.34,-665.6 1483.34,-642.8 1374.63,-642.8"/>
<text xml:space="preserve" text-anchor="start" x="1377.63" y="-648.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads and writes</text>
</g>
<!-- core&#45;&gt;pricodeforge -->
<g id="edge7" class="edge">
<title>core&#45;&gt;pricodeforge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1544.46,-754.7C1679.17,-709.47 1866.97,-644.8 2029.97,-582.8 2044.82,-577.15 2060.18,-571.14 2075.55,-565"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2076.32,-567.52 2082.31,-562.29 2074.37,-562.65 2076.32,-567.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1866.41,-642.8 1866.41,-665.6 2011.69,-665.6 2011.69,-642.8 1866.41,-642.8"/>
<text xml:space="preserve" text-anchor="start" x="1869.41" y="-648.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">syncs stack definitions</text>
</g>
<!-- core&#45;&gt;alerting -->
<g id="edge8" class="edge">
<title>core&#45;&gt;alerting</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1488.27,-725.67C1548.28,-683.07 1620.2,-632.03 1681.27,-588.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1682.74,-590.86 1687.34,-584.38 1679.7,-586.58 1682.74,-590.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1602.52,-642.8 1602.52,-665.6 1684,-665.6 1684,-642.8 1602.52,-642.8"/>
<text xml:space="preserve" text-anchor="start" x="1605.52" y="-648.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">sends alerts</text>
</g>
<!-- periphery&#45;&gt;volumes -->
<g id="edge11" class="edge">
<title>periphery&#45;&gt;volumes</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M933.97,-402.87C933.97,-362.01 933.97,-313.38 933.97,-271.23"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="936.59,-271.47 933.97,-263.97 931.34,-271.47 936.59,-271.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="933.97,-320 933.97,-342.8 1074.61,-342.8 1074.61,-320 933.97,-320"/>
<text xml:space="preserve" text-anchor="start" x="936.97" y="-325.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">creates and manages</text>
</g>
<!-- gateway&#45;&gt;core -->
<g id="edge1" class="edge">
<title>gateway&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1195.15,-1131.63C1229.33,-1067.47 1275.53,-980.73 1310.81,-914.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1313.08,-915.84 1314.28,-907.98 1308.44,-913.37 1313.08,-915.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1249.02,-1028 1249.02,-1071.2 1388.07,-1071.2 1388.07,-1028 1249.02,-1028"/>
<text xml:space="preserve" text-anchor="start" x="1252.02" y="-1054.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">komo.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1252.02" y="-1033.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- configmgmt&#45;&gt;core -->
<g id="edge2" class="edge">
<title>configmgmt&#45;&gt;core</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M627.97,-1148.04C780.3,-1079.35 1009.71,-975.9 1171.64,-902.88"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1172.72,-905.27 1178.47,-899.8 1170.56,-900.49 1172.72,-905.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="888.63,-1038.2 888.63,-1061 1067.41,-1061 1067.41,-1038.2 888.63,-1038.2"/>
<text xml:space="preserve" text-anchor="start" x="891.63" y="-1044" font-family="Arial" font-size="14.00" fill="#bbfcd3">bootstraps the control plane</text>
</g>
<!-- configmgmt&#45;&gt;periphery -->
<g id="edge3" class="edge">
<title>configmgmt&#45;&gt;periphery</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M308.12,-1186.34C217.68,-1158.12 111.98,-1107.81 57.09,-1020 -12.27,-909.05 -24.75,-827.69 57.09,-725.6 239.63,-497.92 418.33,-666.23 697.97,-582.8 712.68,-578.41 727.79,-573.55 742.92,-568.44"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="743.74,-570.93 749.99,-566.02 742.04,-565.96 743.74,-570.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="57.09,-804.2 57.09,-827 273.97,-827 273.97,-804.2 57.09,-804.2"/>
<text xml:space="preserve" text-anchor="start" x="60.09" y="-810" font-family="Arial" font-size="14.00" fill="#bbfcd3">installs the periphery systemd unit</text>
</g>
<!-- agentgw&#45;&gt;core -->
<g id="edge4" class="edge">
<title>agentgw&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1530.78,-1131.63C1496.61,-1067.47 1450.4,-980.73 1415.13,-914.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1417.49,-913.37 1411.65,-907.98 1412.86,-915.84 1417.49,-913.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1496.05,-1038.2 1496.05,-1061 1580.65,-1061 1580.65,-1038.2 1496.05,-1038.2"/>
<text xml:space="preserve" text-anchor="start" x="1499.05" y="-1044" font-family="Arial" font-size="14.00" fill="#c9c9c9">Komodo API</text>
</g>
<!-- databak&#45;&gt;volumes -->
<g id="edge5" class="edge">
<title>databak&#45;&gt;volumes</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M608,-402.87C668.75,-359.65 741.72,-307.74 803.21,-264"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="803.4,-263.87 805.33,-258.82 810.73,-258.66 808.8,-263.71 803.4,-263.87"/>
</g>
<!-- dbbak&#45;&gt;db -->
<g id="edge6" class="edge">
<title>dbbak&#45;&gt;db</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M648.94,-740.14C661.38,-735.02 673.83,-730.11 685.97,-725.6 896.21,-647.51 958.5,-657.53 1169.97,-582.8 1184.28,-577.74 1199.02,-572.25 1213.76,-566.56"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1213.89,-566.51 1217,-562.09 1222.28,-563.25 1219.17,-567.68 1213.89,-566.51"/>
</g>
</g>
</svg>
`;case`forgeDetail`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1640pt" height="696pt"
 viewBox="0.00 0.00 1640.00 696.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 680.65)">
<g id="clust1" class="cluster">
<title>cluster_pricodeforge</title>
<polygon fill="#29472f" stroke="#1c3021" points="521.02,-8 521.02,-374.4 1515.02,-374.4 1515.02,-8 521.02,-8"/>
<text xml:space="preserve" text-anchor="start" x="529.02" y="-361.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">PRIMARY CODE FORGE</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_forgejo</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="553.02,-40 553.02,-321.2 1483.02,-321.2 1483.02,-40 553.02,-40"/>
<text xml:space="preserve" text-anchor="start" x="561.02" y="-308.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FORGEJO</text>
</g>
<!-- server -->
<g id="node1" class="node">
<title>server</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="923.04,-260 593,-260 593,-80 923.04,-80 923.04,-260"/>
<text xml:space="preserve" text-anchor="start" x="728.57" y="-162" font-family="Arial" font-size="20.00" fill="#f0f9ff">Server</text>
</g>
<!-- db -->
<g id="node2" class="node">
<title>db</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1443.04,-243.64C1443.04,-252.67 1371.32,-260 1283.02,-260 1194.72,-260 1123,-252.67 1123,-243.64 1123,-243.64 1123,-96.36 1123,-96.36 1123,-87.33 1194.72,-80 1283.02,-80 1371.32,-80 1443.04,-87.33 1443.04,-96.36 1443.04,-96.36 1443.04,-243.64 1443.04,-243.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1443.04,-243.64C1443.04,-234.61 1371.32,-227.27 1283.02,-227.27 1194.72,-227.27 1123,-234.61 1123,-243.64"/>
<text xml:space="preserve" text-anchor="start" x="1240.21" y="-171.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="1247.61" y="-150.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">PostgreSQL</text>
</g>
<!-- gateway -->
<g id="node3" class="node">
<title>gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="320.04,-665.6 0,-665.6 0,-485.6 320.04,-485.6 320.04,-665.6"/>
<text xml:space="preserve" text-anchor="start" x="120.56" y="-587.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Gateway</text>
<text xml:space="preserve" text-anchor="start" x="21.61" y="-564.6" font-family="Arial" font-size="15.00" fill="#c2f0c2">One public entry point for every published</text>
<text xml:space="preserve" text-anchor="start" x="140.84" y="-546.6" font-family="Arial" font-size="15.00" fill="#c2f0c2">route.</text>
</g>
<!-- containerorc -->
<g id="node4" class="node">
<title>containerorc</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="750.04,-665.6 430,-665.6 430,-485.6 750.04,-485.6 750.04,-665.6"/>
<text xml:space="preserve" text-anchor="start" x="488.31" y="-567.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Container Orchestrator</text>
</g>
<!-- ci -->
<g id="node5" class="node">
<title>ci</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1180.04,-665.6 860,-665.6 860,-485.6 1180.04,-485.6 1180.04,-665.6"/>
<text xml:space="preserve" text-anchor="start" x="919.39" y="-567.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Continuous Integration</text>
</g>
<!-- dbbak -->
<g id="node6" class="node">
<title>dbbak</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1610.04,-665.6 1290,-665.6 1290,-485.6 1610.04,-485.6 1610.04,-665.6"/>
<text xml:space="preserve" text-anchor="start" x="1316.05" y="-567.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Database Backup Coordinator</text>
</g>
<!-- server&#45;&gt;db -->
<g id="edge5" class="edge">
<title>server&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M922.69,-170C982.82,-170 1050.93,-170 1111.62,-170"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1111.55,-172.63 1119.05,-170 1111.55,-167.38 1111.55,-172.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="978,-173 978,-195.8 1068.04,-195.8 1068.04,-173 978,-173"/>
<text xml:space="preserve" text-anchor="start" x="981" y="-178.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- gateway&#45;&gt;server -->
<g id="edge1" class="edge">
<title>gateway&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M291.62,-485.78C388.19,-420.6 519.13,-332.23 617.69,-265.71"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="618.96,-268.02 623.71,-261.65 616.03,-263.67 618.96,-268.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="441.09,-382.4 441.09,-425.6 540.46,-425.6 540.46,-382.4 441.09,-382.4"/>
<text xml:space="preserve" text-anchor="start" x="444.09" y="-408.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">fj.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="444.09" y="-387.8" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- containerorc&#45;&gt;server -->
<g id="edge2" class="edge">
<title>containerorc&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M626.89,-486.03C653.54,-422 689.55,-335.49 717.09,-269.32"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="719.47,-270.44 719.93,-262.51 714.62,-268.42 719.47,-270.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="668.98,-392.6 668.98,-415.4 814.26,-415.4 814.26,-392.6 668.98,-392.6"/>
<text xml:space="preserve" text-anchor="start" x="671.98" y="-398.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">syncs stack definitions</text>
</g>
<!-- ci&#45;&gt;server -->
<g id="edge3" class="edge">
<title>ci&#45;&gt;server</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M962.52,-486.03C920.79,-421.74 864.34,-334.78 821.32,-268.51"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="823.54,-267.11 817.26,-262.25 819.14,-269.97 823.54,-267.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="920.19,-382.4 920.19,-425.6 1147.2,-425.6 1147.2,-382.4 920.19,-382.4"/>
<text xml:space="preserve" text-anchor="start" x="923.19" y="-408.6" font-family="Arial" font-size="14.00" fill="#d4f2ff">OAuth2 login and repository access</text>
<text xml:space="preserve" text-anchor="start" x="923.19" y="-387.8" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ OIDC ]</text>
</g>
<!-- dbbak&#45;&gt;db -->
<g id="edge4" class="edge">
<title>dbbak&#45;&gt;db</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1413.37,-486.03C1387.07,-422.46 1351.6,-336.74 1324.3,-270.76"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1324.29,-270.74 1319.8,-267.73 1320.85,-262.43 1325.34,-265.44 1324.29,-270.74"/>
</g>
</g>
</svg>
`;case`ciDetail`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1089pt" height="979pt"
 viewBox="0.00 0.00 1089.00 979.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 963.85)">
<g id="clust1" class="cluster">
<title>cluster_ci</title>
<polygon fill="#29472f" stroke="#1c3021" points="8,-291.2 8,-657.6 1051,-657.6 1051,-291.2 8,-291.2"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-644.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">CONTINUOUS INTEGRATION</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_woodpecker</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-323.2 40,-604.4 1019,-604.4 1019,-323.2 40,-323.2"/>
<text xml:space="preserve" text-anchor="start" x="48" y="-591.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">WOODPECKER</text>
</g>
<!-- agent -->
<g id="node1" class="node">
<title>agent</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="451.92,-543.2 80.08,-543.2 80.08,-363.2 451.92,-363.2 451.92,-543.2"/>
<text xml:space="preserve" text-anchor="start" x="239.87" y="-465.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Agent</text>
<text xml:space="preserve" text-anchor="start" x="120.08" y="-442.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Runs pipeline steps as sibling containers on</text>
<text xml:space="preserve" text-anchor="start" x="183.45" y="-424.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">the host docker daemon.</text>
</g>
<!-- server -->
<g id="node2" class="node">
<title>server</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="979.02,-543.2 648.98,-543.2 648.98,-363.2 979.02,-363.2 979.02,-543.2"/>
<text xml:space="preserve" text-anchor="start" x="784.55" y="-445.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Server</text>
</g>
<!-- gateway -->
<g id="node3" class="node">
<title>gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="974.02,-948.8 653.98,-948.8 653.98,-768.8 974.02,-768.8 974.02,-948.8"/>
<text xml:space="preserve" text-anchor="start" x="774.54" y="-870.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Gateway</text>
<text xml:space="preserve" text-anchor="start" x="675.59" y="-847.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">One public entry point for every published</text>
<text xml:space="preserve" text-anchor="start" x="794.82" y="-829.8" font-family="Arial" font-size="15.00" fill="#c2f0c2">route.</text>
</g>
<!-- pricodeforge -->
<g id="node4" class="node">
<title>pricodeforge</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="974.02,-180 653.98,-180 653.98,0 974.02,0 974.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="723.97" y="-82" font-family="Arial" font-size="20.00" fill="#f8fafc">Primary Code Forge</text>
</g>
<!-- agent&#45;&gt;server -->
<g id="edge2" class="edge">
<title>agent&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M451.91,-453.2C512.35,-453.2 579.2,-453.2 638.83,-453.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="638.58,-455.83 646.08,-453.2 638.58,-450.58 638.58,-455.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="506.21,-456.2 506.21,-499.4 594.68,-499.4 594.68,-456.2 506.21,-456.2"/>
<text xml:space="preserve" text-anchor="start" x="509.21" y="-482.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">polls for work</text>
<text xml:space="preserve" text-anchor="start" x="509.21" y="-461.6" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ gRPC :9000 ]</text>
</g>
<!-- server&#45;&gt;pricodeforge -->
<g id="edge3" class="edge">
<title>server&#45;&gt;pricodeforge</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M814,-363.38C814,-310.88 814,-244.3 814,-190.11"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="816.63,-190.32 814,-182.82 811.38,-190.32 816.63,-190.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="814,-240 814,-283.2 1041.01,-283.2 1041.01,-240 814,-240"/>
<text xml:space="preserve" text-anchor="start" x="817" y="-266.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">OAuth2 login and repository access</text>
<text xml:space="preserve" text-anchor="start" x="817" y="-245.4" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ OIDC ]</text>
</g>
<!-- gateway&#45;&gt;server -->
<g id="edge1" class="edge">
<title>gateway&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M814,-769.23C814,-705.46 814,-619.4 814,-553.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="816.63,-553.44 814,-545.94 811.38,-553.44 816.63,-553.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="814,-665.6 814,-708.8 935.94,-708.8 935.94,-665.6 814,-665.6"/>
<text xml:space="preserve" text-anchor="start" x="817" y="-691.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">peck.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="817" y="-671" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
</g>
</svg>
`;case`docArcDetail`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2174pt" height="1018pt"
 viewBox="0.00 0.00 2174.00 1018.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1003.45)">
<g id="clust1" class="cluster">
<title>cluster_docarc</title>
<polygon fill="#232598" stroke="#292481" points="352.02,-8 352.02,-697.2 2136.02,-697.2 2136.02,-8 352.02,-8"/>
<text xml:space="preserve" text-anchor="start" x="360.02" y="-684.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c7d2fe" fill-opacity="0.701961">DOCUMENT ARCHIVE</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_paperless</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="384.02,-40 384.02,-644 2104.02,-644 2104.02,-40 384.02,-40"/>
<text xml:space="preserve" text-anchor="start" x="392.02" y="-631.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PAPERLESS</text>
</g>
<!-- server -->
<g id="node1" class="node">
<title>server</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1404.04,-582.8 1074,-582.8 1074,-402.8 1404.04,-402.8 1404.04,-582.8"/>
<text xml:space="preserve" text-anchor="start" x="1209.57" y="-484.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Server</text>
</g>
<!-- broker -->
<g id="node2" class="node">
<title>broker</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2064.04,-260 1734,-260 1734,-80 2064.04,-80 2064.04,-260"/>
<text xml:space="preserve" text-anchor="start" x="1869.57" y="-171.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Broker</text>
<text xml:space="preserve" text-anchor="start" x="1882.4" y="-150.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Redis</text>
</g>
<!-- gotenberg -->
<g id="node3" class="node">
<title>gotenberg</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1184.04,-260 854,-260 854,-80 1184.04,-80 1184.04,-260"/>
<text xml:space="preserve" text-anchor="start" x="926.76" y="-171.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Document Converter</text>
<text xml:space="preserve" text-anchor="start" x="988.3" y="-150.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Gotenberg</text>
</g>
<!-- tika -->
<g id="node4" class="node">
<title>tika</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1624.04,-260 1294,-260 1294,-80 1624.04,-80 1624.04,-260"/>
<text xml:space="preserve" text-anchor="start" x="1381.21" y="-171.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Content Extractor</text>
<text xml:space="preserve" text-anchor="start" x="1422.89" y="-150.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Apache Tika</text>
</g>
<!-- db -->
<g id="node5" class="node">
<title>db</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M744.04,-243.64C744.04,-252.67 672.32,-260 584.02,-260 495.72,-260 424,-252.67 424,-243.64 424,-243.64 424,-96.36 424,-96.36 424,-87.33 495.72,-80 584.02,-80 672.32,-80 744.04,-87.33 744.04,-96.36 744.04,-96.36 744.04,-243.64 744.04,-243.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M744.04,-243.64C744.04,-234.61 672.32,-227.27 584.02,-227.27 495.72,-227.27 424,-234.61 424,-243.64"/>
<text xml:space="preserve" text-anchor="start" x="541.21" y="-171.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="548.61" y="-150.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">PostgreSQL</text>
</g>
<!-- gateway -->
<g id="node6" class="node">
<title>gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1399.04,-988.4 1079,-988.4 1079,-808.4 1399.04,-808.4 1399.04,-988.4"/>
<text xml:space="preserve" text-anchor="start" x="1199.56" y="-910.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1100.61" y="-887.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">One public entry point for every published</text>
<text xml:space="preserve" text-anchor="start" x="1219.84" y="-869.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">route.</text>
</g>
<!-- dbbak -->
<g id="node7" class="node">
<title>dbbak</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-582.8 0,-582.8 0,-402.8 320.04,-402.8 320.04,-582.8"/>
<text xml:space="preserve" text-anchor="start" x="26.05" y="-484.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database Backup Coordinator</text>
</g>
<!-- server&#45;&gt;broker -->
<g id="edge3" class="edge">
<title>server&#45;&gt;broker</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1403.86,-411.68C1501.7,-364.12 1625.64,-303.88 1725.04,-255.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1725.96,-258.04 1731.55,-252.4 1723.66,-253.32 1725.96,-258.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1588.81,-320 1588.81,-342.8 1677.31,-342.8 1677.31,-320 1588.81,-320"/>
<text xml:space="preserve" text-anchor="start" x="1591.81" y="-325.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queues tasks</text>
</g>
<!-- server&#45;&gt;gotenberg -->
<g id="edge4" class="edge">
<title>server&#45;&gt;gotenberg</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1178.03,-402.87C1149.36,-361.06 1115.1,-311.11 1085.74,-268.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1088.06,-267.03 1081.65,-262.33 1083.73,-270 1088.06,-267.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1135.62,-320 1135.62,-342.8 1241.98,-342.8 1241.98,-320 1135.62,-320"/>
<text xml:space="preserve" text-anchor="start" x="1138.62" y="-325.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">converts to PDF</text>
</g>
<!-- server&#45;&gt;tika -->
<g id="edge5" class="edge">
<title>server&#45;&gt;tika</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1300.01,-402.87C1328.68,-361.06 1362.94,-311.11 1392.3,-268.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1394.31,-270 1396.39,-262.33 1389.98,-267.03 1394.31,-270"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1355.62,-320 1355.62,-342.8 1437.09,-342.8 1437.09,-320 1355.62,-320"/>
<text xml:space="preserve" text-anchor="start" x="1358.62" y="-325.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">extracts text</text>
</g>
<!-- server&#45;&gt;db -->
<g id="edge6" class="edge">
<title>server&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1074.16,-411.06C976.41,-363.18 852.74,-302.61 754.09,-254.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="755.53,-252.08 747.64,-251.14 753.22,-256.79 755.53,-252.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="931.16,-320 931.16,-342.8 1021.2,-342.8 1021.2,-320 931.16,-320"/>
<text xml:space="preserve" text-anchor="start" x="934.16" y="-325.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- gateway&#45;&gt;server -->
<g id="edge1" class="edge">
<title>gateway&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1239.02,-808.83C1239.02,-745.06 1239.02,-659 1239.02,-592.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1241.65,-593.04 1239.02,-585.54 1236.4,-593.04 1241.65,-593.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1239.02,-705.2 1239.02,-748.4 1379.65,-748.4 1379.65,-705.2 1239.02,-705.2"/>
<text xml:space="preserve" text-anchor="start" x="1242.02" y="-731.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">paper.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1242.02" y="-710.6" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- dbbak&#45;&gt;db -->
<g id="edge2" class="edge">
<title>dbbak&#45;&gt;db</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M277.56,-402.87C334.33,-359.92 402.45,-308.38 460.03,-264.81"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="460.2,-264.68 461.98,-259.58 467.38,-259.25 465.6,-264.36 460.2,-264.68"/>
</g>
</g>
</svg>
`;case`phovidDetail`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1740pt" height="735pt"
 viewBox="0.00 0.00 1740.00 735.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 720.25)">
<g id="clust1" class="cluster">
<title>cluster_phovid</title>
<polygon fill="#232598" stroke="#292481" points="8,-8 8,-697.2 1352,-697.2 1352,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-684.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c7d2fe" fill-opacity="0.701961">PERSONAL PHOTO STORAGE</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_immich</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-40 40,-644 1320,-644 1320,-40 40,-40"/>
<text xml:space="preserve" text-anchor="start" x="48" y="-631.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">IMMICH</text>
</g>
<!-- server -->
<g id="node1" class="node">
<title>server</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1280.02,-582.8 949.98,-582.8 949.98,-402.8 1280.02,-402.8 1280.02,-582.8"/>
<text xml:space="preserve" text-anchor="start" x="1085.55" y="-484.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Server</text>
</g>
<!-- machinelearning -->
<g id="node2" class="node">
<title>machinelearning</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="410.02,-260 79.98,-260 79.98,-80 410.02,-80 410.02,-260"/>
<text xml:space="preserve" text-anchor="start" x="165.5" y="-162" font-family="Arial" font-size="20.00" fill="#f0f9ff">Machine Learning</text>
</g>
<!-- redis -->
<g id="node3" class="node">
<title>redis</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="850.02,-260 519.98,-260 519.98,-80 850.02,-80 850.02,-260"/>
<text xml:space="preserve" text-anchor="start" x="656.09" y="-171.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Cache</text>
<text xml:space="preserve" text-anchor="start" x="665.49" y="-150.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Valkey</text>
</g>
<!-- db -->
<g id="node4" class="node">
<title>db</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1280.02,-243.64C1280.02,-252.67 1208.3,-260 1120,-260 1031.7,-260 959.98,-252.67 959.98,-243.64 959.98,-243.64 959.98,-96.36 959.98,-96.36 959.98,-87.33 1031.7,-80 1120,-80 1208.3,-80 1280.02,-87.33 1280.02,-96.36 1280.02,-96.36 1280.02,-243.64 1280.02,-243.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1280.02,-243.64C1280.02,-234.61 1208.3,-227.27 1120,-227.27 1031.7,-227.27 959.98,-234.61 959.98,-243.64"/>
<text xml:space="preserve" text-anchor="start" x="1077.19" y="-171.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
<text xml:space="preserve" text-anchor="start" x="1084.59" y="-150.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">PostgreSQL</text>
</g>
<!-- dbbak -->
<g id="node5" class="node">
<title>dbbak</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1710.02,-582.8 1389.98,-582.8 1389.98,-402.8 1710.02,-402.8 1710.02,-582.8"/>
<text xml:space="preserve" text-anchor="start" x="1416.03" y="-484.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Database Backup Coordinator</text>
</g>
<!-- server&#45;&gt;machinelearning -->
<g id="edge2" class="edge">
<title>server&#45;&gt;machinelearning</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M950.01,-435.1C818.21,-389.3 629.05,-322.4 465,-260 450.17,-254.36 434.83,-248.4 419.45,-242.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="420.64,-240 412.7,-239.68 418.71,-244.88 420.64,-240"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="678.57,-320 678.57,-342.8 773.28,-342.8 773.28,-320 678.57,-320"/>
<text xml:space="preserve" text-anchor="start" x="681.57" y="-325.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs inference</text>
</g>
<!-- server&#45;&gt;redis -->
<g id="edge3" class="edge">
<title>server&#45;&gt;redis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M995.79,-402.87C938.7,-360.27 870.28,-309.23 812.19,-265.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="814.07,-264.02 806.49,-261.64 810.93,-268.23 814.07,-264.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="912.89,-320 912.89,-342.8 994.4,-342.8 994.4,-320 912.89,-320"/>
<text xml:space="preserve" text-anchor="start" x="915.89" y="-325.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queues jobs</text>
</g>
<!-- server&#45;&gt;db -->
<g id="edge4" class="edge">
<title>server&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1116.39,-402.87C1117.02,-362.01 1117.78,-313.38 1118.44,-271.23"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1121.06,-271.51 1118.55,-263.97 1115.81,-271.43 1121.06,-271.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1117.65,-320 1117.65,-342.8 1207.69,-342.8 1207.69,-320 1117.65,-320"/>
<text xml:space="preserve" text-anchor="start" x="1120.65" y="-325.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- dbbak&#45;&gt;db -->
<g id="edge1" class="edge">
<title>dbbak&#45;&gt;db</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1430.79,-402.87C1372.99,-359.74 1303.57,-307.96 1245.02,-264.27"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1245.12,-264.35 1239.72,-264.06 1237.91,-258.97 1243.31,-259.25 1245.12,-264.35"/>
</g>
</g>
</svg>
`;case`mediaLibDetail`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="2407pt" height="1276pt"
 viewBox="0.00 0.00 2407.00 1276.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1261.45)">
<g id="clust1" class="cluster">
<title>cluster_medialib</title>
<polygon fill="#2225aa" stroke="#2a2490" points="8,-8 8,-955.2 1698,-955.2 1698,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-942.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c7d2fe" fill-opacity="0.701961">MEDIA LIBRARY</text>
</g>
<!-- seerr -->
<g id="node1" class="node">
<title>seerr</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-894 47.98,-894 47.98,-714 368.02,-714 368.02,-894"/>
<text xml:space="preserve" text-anchor="start" x="183.55" y="-796" font-family="Arial" font-size="20.00" fill="#eff6ff">Seerr</text>
</g>
<!-- prowlarr -->
<g id="node2" class="node">
<title>prowlarr</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-894 477.98,-894 477.98,-714 798.02,-714 798.02,-894"/>
<text xml:space="preserve" text-anchor="start" x="600.77" y="-796" font-family="Arial" font-size="20.00" fill="#eff6ff">Prowlarr</text>
</g>
<!-- bazarr -->
<g id="node3" class="node">
<title>bazarr</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-894 907.98,-894 907.98,-714 1228.02,-714 1228.02,-894"/>
<text xml:space="preserve" text-anchor="start" x="1038.55" y="-796" font-family="Arial" font-size="20.00" fill="#eff6ff">Bazarr</text>
</g>
<!-- sonarr -->
<g id="node4" class="node">
<title>sonarr</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="584.02,-550.8 263.98,-550.8 263.98,-370.8 584.02,-370.8 584.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="393.99" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Sonarr</text>
</g>
<!-- radarr -->
<g id="node5" class="node">
<title>radarr</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1014.02,-550.8 693.98,-550.8 693.98,-370.8 1014.02,-370.8 1014.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="823.43" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Radarr</text>
</g>
<!-- sabnzbd -->
<g id="node6" class="node">
<title>sabnzbd</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1014.02,-228 693.98,-228 693.98,-48 1014.02,-48 1014.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="812.31" y="-130" font-family="Arial" font-size="20.00" fill="#eff6ff">SABnzbd</text>
</g>
<!-- plex -->
<g id="node7" class="node">
<title>plex</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1658.02,-894 1337.98,-894 1337.98,-714 1658.02,-714 1658.02,-894"/>
<text xml:space="preserve" text-anchor="start" x="1478.55" y="-796" font-family="Arial" font-size="20.00" fill="#eff6ff">Plex</text>
</g>
<!-- gateway -->
<g id="node8" class="node">
<title>gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1835.02,-1246.4 1514.98,-1246.4 1514.98,-1066.4 1835.02,-1066.4 1835.02,-1246.4"/>
<text xml:space="preserve" text-anchor="start" x="1635.54" y="-1168.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1536.59" y="-1145.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">One public entry point for every published</text>
<text xml:space="preserve" text-anchor="start" x="1655.82" y="-1127.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">route.</text>
</g>
<!-- seerr&#45;&gt;sonarr -->
<g id="edge7" class="edge">
<title>seerr&#45;&gt;sonarr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M221.68,-714.11C229.62,-680.06 241.99,-641.94 261.07,-610.8 272.53,-592.09 287.01,-574.3 302.59,-557.96"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="304.34,-559.92 307.7,-552.71 300.59,-556.25 304.34,-559.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="261.07,-621 261.07,-643.8 362,-643.8 362,-621 261.07,-621"/>
<text xml:space="preserve" text-anchor="start" x="264.07" y="-626.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">requests series</text>
</g>
<!-- seerr&#45;&gt;radarr -->
<g id="edge8" class="edge">
<title>seerr&#45;&gt;radarr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M367.78,-730.27C417.6,-706.77 472.46,-680.04 522,-654 580.06,-623.48 642.58,-588 697.54,-555.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="698.53,-558.35 703.68,-552.3 695.88,-553.82 698.53,-558.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="595.89,-621 595.89,-643.8 688.25,-643.8 688.25,-621 595.89,-621"/>
<text xml:space="preserve" text-anchor="start" x="598.89" y="-626.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">requests films</text>
</g>
<!-- prowlarr&#45;&gt;sonarr -->
<g id="edge9" class="edge">
<title>prowlarr&#45;&gt;sonarr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M478.08,-733.23C447.57,-712.32 419.67,-686.15 401.95,-654 386.43,-625.87 385.59,-591.93 390.62,-560.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="393.16,-561.15 391.91,-553.3 388,-560.21 393.16,-561.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="401.95,-621 401.95,-643.8 499,-643.8 499,-621 401.95,-621"/>
<text xml:space="preserve" text-anchor="start" x="404.95" y="-626.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">feeds indexers</text>
</g>
<!-- prowlarr&#45;&gt;radarr -->
<g id="edge10" class="edge">
<title>prowlarr&#45;&gt;radarr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M694.19,-714.24C724.26,-666.75 761.35,-608.15 792.23,-559.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="794.31,-561 796.1,-553.26 789.87,-558.19 794.31,-561"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="758.93,-621 758.93,-643.8 855.99,-643.8 855.99,-621 758.93,-621"/>
<text xml:space="preserve" text-anchor="start" x="761.93" y="-626.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">feeds indexers</text>
</g>
<!-- bazarr&#45;&gt;sonarr -->
<g id="edge11" class="edge">
<title>bazarr&#45;&gt;sonarr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1001.33,-714.05C969.34,-677.08 928.14,-636.82 883,-610.8 786.24,-555.04 745.12,-585.59 639,-550.8 624.06,-545.9 608.69,-540.44 593.37,-534.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="594.62,-532.35 586.67,-532.15 592.76,-537.26 594.62,-532.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="941.69,-621 941.69,-643.8 1048.07,-643.8 1048.07,-621 941.69,-621"/>
<text xml:space="preserve" text-anchor="start" x="944.69" y="-626.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads the library</text>
</g>
<!-- bazarr&#45;&gt;radarr -->
<g id="edge12" class="edge">
<title>bazarr&#45;&gt;radarr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1150.07,-714.32C1170.97,-681.02 1182.43,-643.37 1162,-610.8 1130.59,-560.72 1077.05,-527.05 1023.34,-504.61"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1024.41,-502.22 1016.47,-501.83 1022.44,-507.08 1024.41,-502.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1172.68,-621 1172.68,-643.8 1279.06,-643.8 1279.06,-621 1172.68,-621"/>
<text xml:space="preserve" text-anchor="start" x="1175.68" y="-626.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">reads the library</text>
</g>
<!-- sonarr&#45;&gt;sabnzbd -->
<g id="edge13" class="edge">
<title>sonarr&#45;&gt;sabnzbd</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M543.21,-370.87C600.3,-328.27 668.72,-277.23 726.81,-233.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="728.07,-236.23 732.51,-229.64 724.93,-232.02 728.07,-236.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="651.89,-288 651.89,-310.8 774.65,-310.8 774.65,-288 651.89,-288"/>
<text xml:space="preserve" text-anchor="start" x="654.89" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queues downloads</text>
</g>
<!-- radarr&#45;&gt;sabnzbd -->
<g id="edge14" class="edge">
<title>radarr&#45;&gt;sabnzbd</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M854,-370.87C854,-329.67 854,-280.56 854,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="856.63,-238.36 854,-230.86 851.38,-238.36 856.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="854,-288 854,-310.8 976.76,-310.8 976.76,-288 854,-288"/>
<text xml:space="preserve" text-anchor="start" x="857" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">queues downloads</text>
</g>
<!-- gateway&#45;&gt;seerr -->
<g id="edge1" class="edge">
<title>gateway&#45;&gt;seerr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1515.16,-1153.38C1270.73,-1145.18 793.45,-1108.81 423,-955.2 388.98,-941.09 354.99,-920.9 324.41,-899.88"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="326.01,-897.8 318.36,-895.67 323.01,-902.11 326.01,-897.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="551.5,-963.2 551.5,-1006.4 688.21,-1006.4 688.21,-963.2 551.5,-963.2"/>
<text xml:space="preserve" text-anchor="start" x="554.5" y="-989.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">seerr.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="554.5" y="-968.6" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;prowlarr -->
<g id="edge2" class="edge">
<title>gateway&#45;&gt;prowlarr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1515.15,-1134.42C1345.19,-1108.07 1071.35,-1053.85 853,-955.2 820.1,-940.33 786.95,-920.27 756.87,-899.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="758.61,-897.66 750.95,-895.55 755.62,-901.98 758.61,-897.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="981.2,-963.2 981.2,-1006.4 1136.58,-1006.4 1136.58,-963.2 981.2,-963.2"/>
<text xml:space="preserve" text-anchor="start" x="984.2" y="-989.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">prowlarr.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="984.2" y="-968.6" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;bazarr -->
<g id="edge3" class="edge">
<title>gateway&#45;&gt;bazarr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1515.42,-1080.12C1443.2,-1044.47 1357.51,-999.96 1283,-955.2 1254.79,-938.25 1225.37,-918.9 1197.68,-899.86"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1199.3,-897.78 1191.63,-895.68 1196.31,-902.1 1199.3,-897.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1366.69,-963.2 1366.69,-1006.4 1511.19,-1006.4 1511.19,-963.2 1366.69,-963.2"/>
<text xml:space="preserve" text-anchor="start" x="1369.69" y="-989.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">bazarr.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1369.69" y="-968.6" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;sonarr -->
<g id="edge4" class="edge">
<title>gateway&#45;&gt;sonarr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1715.2,-1066.58C1752.39,-969.51 1791.17,-814.47 1713,-714 1605.72,-576.12 718.4,-570.32 639,-550.8 624.12,-547.14 608.92,-542.61 593.84,-537.55"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="594.75,-535.09 586.81,-535.13 593.05,-540.05 594.75,-535.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1758.39,-782.4 1758.39,-825.6 1902.89,-825.6 1902.89,-782.4 1758.39,-782.4"/>
<text xml:space="preserve" text-anchor="start" x="1761.39" y="-808.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">sonarr.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1761.39" y="-787.8" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;radarr -->
<g id="edge5" class="edge">
<title>gateway&#45;&gt;radarr</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1834.74,-1113.79C1914.77,-1083.86 2004.18,-1034.42 2050,-955.2 2129.15,-818.35 2100.01,-686.1 1961,-610.8 1802.97,-525.19 1293.39,-485.44 1024.22,-470.02"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1024.62,-467.41 1016.98,-469.61 1024.32,-472.65 1024.62,-467.41"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2093.31,-782.4 2093.31,-825.6 2235.48,-825.6 2235.48,-782.4 2093.31,-782.4"/>
<text xml:space="preserve" text-anchor="start" x="2096.31" y="-808.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">radarr.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="2096.31" y="-787.8" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- gateway&#45;&gt;sabnzbd -->
<g id="edge6" class="edge">
<title>gateway&#45;&gt;sabnzbd</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1834.69,-1149.57C1973,-1135.04 2165.59,-1089.94 2262,-955.2 2324.38,-868.02 2316.6,-806.25 2262,-714 2003.33,-276.93 1338.49,-172.04 1023.87,-146.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1024.45,-144.32 1016.77,-146.35 1024.04,-149.55 1024.45,-144.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2219.19,-610.8 2219.19,-654 2376.94,-654 2376.94,-610.8 2219.19,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="2222.19" y="-637" font-family="Arial" font-size="14.00" fill="#c9c9c9">sabnzbd.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="2222.19" y="-616.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
</g>
</svg>
`;case`flowRequest`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3016pt" height="821pt"
 viewBox="0.00 0.00 3016.00 821.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 806.05)">
<!-- www -->
<g id="node1" class="node">
<title>www</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="320.04,-172.01 0,-172.01 0,0 320.04,0 320.04,-172.01"/>
<text xml:space="preserve" text-anchor="start" x="96.09" y="-78" font-family="Arial" font-size="20.00" fill="#f8fafc">Public Internet</text>
</g>
<!-- gerbil -->
<g id="node2" class="node">
<title>gerbil</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="980.71,-503 644.78,-503 644.78,-323 980.71,-323 980.71,-503"/>
<text xml:space="preserve" text-anchor="start" x="786.07" y="-434.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Gerbil</text>
<text xml:space="preserve" text-anchor="start" x="782.77" y="-413.8" font-family="Arial" font-size="13.00" fill="#b6ecf7">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="684.78" y="-392.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">Owns the host ports. Traefik runs in its</text>
<text xml:space="preserve" text-anchor="start" x="743.55" y="-374.2" font-family="Arial" font-size="15.00" fill="#b6ecf7">network namespace.</text>
</g>
<!-- traefik -->
<g id="node3" class="node">
<title>traefik</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1743.47,-362 1359.18,-362 1359.18,-182 1743.47,-182 1743.47,-362"/>
<text xml:space="preserve" text-anchor="start" x="1520.76" y="-275" font-family="Arial" font-size="20.00" fill="#f0f9ff">Traefik</text>
<text xml:space="preserve" text-anchor="start" x="1399.18" y="-252" font-family="Arial" font-size="15.00" fill="#b6ecf7">Reverse proxy. network_mode: service:gerbil.</text>
</g>
<!-- server -->
<g id="node4" class="node">
<title>server</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2430.18,-398 2100.14,-398 2100.14,-218 2430.18,-218 2430.18,-398"/>
<text xml:space="preserve" text-anchor="start" x="2194.01" y="-300" font-family="Arial" font-size="20.00" fill="#f0f9ff">Pangolin Server</text>
</g>
<!-- newt -->
<g id="node5" class="node">
<title>newt</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1711.34,-791 1391.3,-791 1391.3,-611 1711.34,-611 1711.34,-791"/>
<text xml:space="preserve" text-anchor="start" x="1528.54" y="-722.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Newt</text>
<text xml:space="preserve" text-anchor="start" x="1521.34" y="-701.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="1426.25" y="-680.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site connector, installed per host as a</text>
<text xml:space="preserve" text-anchor="start" x="1454.61" y="-662.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">systemd unit by infra.ansible.</text>
</g>
<!-- openproject -->
<g id="node6" class="node">
<title>openproject</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2425.18,-749 2105.14,-749 2105.14,-569 2425.18,-569 2425.18,-749"/>
<text xml:space="preserve" text-anchor="start" x="2209.57" y="-651" font-family="Arial" font-size="20.00" fill="#eff6ff">OpenProject</text>
</g>
<!-- db -->
<g id="node7" class="node">
<title>db</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M2985.48,-732.64C2985.48,-741.67 2913.76,-749 2825.46,-749 2737.17,-749 2665.44,-741.67 2665.44,-732.64 2665.44,-732.64 2665.44,-585.37 2665.44,-585.37 2665.44,-576.34 2737.17,-569 2825.46,-569 2913.76,-569 2985.48,-576.34 2985.48,-585.37 2985.48,-585.37 2985.48,-732.64 2985.48,-732.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M2985.48,-732.64C2985.48,-723.61 2913.76,-716.28 2825.46,-716.28 2737.17,-716.28 2665.44,-723.61 2665.44,-732.64"/>
<text xml:space="preserve" text-anchor="start" x="2782.66" y="-651" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
</g>
<!-- www&#45;&gt;gerbil -->
<g id="edge1" class="edge">
<title>www&#45;&gt;gerbil</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.79,-165.79C415.38,-213.82 537.24,-275.06 635.76,-324.57"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="634.34,-326.79 642.22,-327.81 636.69,-322.1 634.34,-326.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-300.9 383.04,-340.5 407.04,-340.5 407.04,-300.9 383.04,-300.9"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-317.5" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-300.9 410.04,-340.5 581.78,-340.5 581.78,-300.9 410.04,-300.9"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-323.5" font-family="Arial" font-size="14.00" fill="#c9c9c9">GET openprj.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="472.97" y="-306.7" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTPS</text>
</g>
<!-- www&#45;&gt;traefik -->
<g id="edge13" class="edge">
<title>www&#45;&gt;traefik</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M329.91,-74.32C555.06,-63.43 964.09,-60.11 1299.18,-148 1330.34,-156.18 1362.19,-168.43 1392.29,-182.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="330.05,-71.68 322.69,-74.68 330.31,-76.93 330.05,-71.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="768.73,-93.22 768.73,-126.02 800.3,-126.02 800.3,-93.22 768.73,-93.22"/>
<text xml:space="preserve" text-anchor="start" x="776.73" y="-106.42" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">12</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="803.3,-93.22 803.3,-126.02 856.77,-126.02 856.77,-93.22 803.3,-93.22"/>
<text xml:space="preserve" text-anchor="start" x="806.3" y="-104.02" font-family="Arial" font-size="14.00" fill="#c9c9c9">200 OK</text>
</g>
<!-- gerbil&#45;&gt;traefik -->
<g id="edge2" class="edge">
<title>gerbil&#45;&gt;traefik</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M980.71,-415.48C1075.33,-413.46 1195.21,-405.12 1299.18,-380 1315.76,-376 1332.64,-370.99 1349.4,-365.34"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1350.16,-367.85 1356.39,-362.92 1348.45,-362.89 1350.16,-367.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1043.71,-415.93 1043.71,-455.53 1067.71,-455.53 1067.71,-415.93 1043.71,-415.93"/>
<text xml:space="preserve" text-anchor="start" x="1051.82" y="-432.53" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1070.71,-415.93 1070.71,-455.53 1296.18,-455.53 1296.18,-415.93 1070.71,-415.93"/>
<text xml:space="preserve" text-anchor="start" x="1073.71" y="-438.53" font-family="Arial" font-size="14.00" fill="#c9c9c9">forwards on the shared namespace</text>
<text xml:space="preserve" text-anchor="start" x="1160.5" y="-421.73" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTPS</text>
</g>
<!-- gerbil&#45;&gt;traefik -->
<g id="edge5" class="edge">
<title>gerbil&#45;&gt;traefik</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M990.51,-323.37C1007.2,-317.17 1024.09,-311.69 1040.71,-307.4 1143.87,-280.8 1262.43,-271.37 1359.21,-268.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="989.61,-320.9 983.54,-326.02 991.48,-325.81 989.61,-320.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1088.07,-310.4 1088.07,-350 1112.07,-350 1112.07,-310.4 1088.07,-310.4"/>
<text xml:space="preserve" text-anchor="start" x="1096.17" y="-327" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1115.07,-310.4 1115.07,-350 1251.82,-350 1251.82,-310.4 1115.07,-310.4"/>
<text xml:space="preserve" text-anchor="start" x="1118.07" y="-333" font-family="Arial" font-size="14.00" fill="#c9c9c9">routes into the tunnel</text>
<text xml:space="preserve" text-anchor="start" x="1160.5" y="-316.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTPS</text>
</g>
<!-- gerbil&#45;&gt;traefik -->
<g id="edge12" class="edge">
<title>gerbil&#45;&gt;traefik</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M880.86,-323.14C921.37,-276.67 977.34,-224.54 1040.71,-199.4 1138.1,-160.79 1253.15,-172.76 1349.27,-197.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1348.56,-199.61 1356.48,-198.96 1349.88,-194.53 1348.56,-199.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1125.92,-202.4 1125.92,-242 1157.49,-242 1157.49,-202.4 1125.92,-202.4"/>
<text xml:space="preserve" text-anchor="start" x="1133.92" y="-219" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">11</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1160.49,-202.4 1160.49,-242 1213.97,-242 1213.97,-202.4 1160.49,-202.4"/>
<text xml:space="preserve" text-anchor="start" x="1163.49" y="-225" font-family="Arial" font-size="14.00" fill="#c9c9c9">200 OK</text>
<text xml:space="preserve" text-anchor="start" x="1164.29" y="-208.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTPS</text>
</g>
<!-- gerbil&#45;&gt;newt -->
<g id="edge6" class="edge">
<title>gerbil&#45;&gt;newt</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M858.14,-502.92C896.4,-569.4 958.47,-655.03 1040.71,-695 1145.74,-746.05 1277.92,-746.06 1381.35,-734.09"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1381.44,-736.72 1388.57,-733.22 1380.81,-731.51 1381.44,-736.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1119.6,-743.61 1119.6,-783.21 1143.6,-783.21 1143.6,-743.61 1119.6,-743.61"/>
<text xml:space="preserve" text-anchor="start" x="1127.71" y="-760.21" font-family="Arial" font-weight="bold" font-size="14.00" fill="#d4f2ff">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1146.6,-743.61 1146.6,-783.21 1220.29,-783.21 1220.29,-743.61 1146.6,-743.61"/>
<text xml:space="preserve" text-anchor="start" x="1149.6" y="-766.21" font-family="Arial" font-size="14.00" fill="#d4f2ff">WireGuard</text>
<text xml:space="preserve" text-anchor="start" x="1149.6" y="-749.41" font-family="Arial" font-size="14.00" fill="#d4f2ff">WireGuard</text>
</g>
<!-- gerbil&#45;&gt;newt -->
<g id="edge11" class="edge">
<title>gerbil&#45;&gt;newt</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M989.89,-481.88C1112.04,-529.64 1273.35,-592.71 1391.53,-638.92"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="991.19,-479.56 983.25,-479.28 989.28,-484.45 991.19,-479.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1125.92,-602.63 1125.92,-635.43 1157.49,-635.43 1157.49,-602.63 1125.92,-602.63"/>
<text xml:space="preserve" text-anchor="start" x="1133.92" y="-615.83" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">10</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1160.49,-602.63 1160.49,-635.43 1213.97,-635.43 1213.97,-602.63 1160.49,-602.63"/>
<text xml:space="preserve" text-anchor="start" x="1163.49" y="-613.43" font-family="Arial" font-size="14.00" fill="#c9c9c9">200 OK</text>
</g>
<!-- traefik&#45;&gt;server -->
<g id="edge3" class="edge">
<title>traefik&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1743.08,-281.65C1850.99,-287.11 1984.92,-293.88 2089.98,-299.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2089.73,-301.81 2097.36,-299.57 2090,-296.57 2089.73,-301.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1806.47,-299.36 1806.47,-338.96 1830.47,-338.96 1830.47,-299.36 1806.47,-299.36"/>
<text xml:space="preserve" text-anchor="start" x="1814.57" y="-315.96" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1833.47,-299.36 1833.47,-338.96 2037.14,-338.96 2037.14,-299.36 1833.47,-299.36"/>
<text xml:space="preserve" text-anchor="start" x="1836.47" y="-321.96" font-family="Arial" font-size="14.00" fill="#c9c9c9">badger: is this session allowed?</text>
<text xml:space="preserve" text-anchor="start" x="1874.99" y="-305.16" font-family="Arial" font-size="14.00" fill="#c9c9c9">Badger middleware</text>
</g>
<!-- traefik&#45;&gt;server -->
<g id="edge4" class="edge">
<title>traefik&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1753.48,-224.35C1841.89,-210.15 1946.66,-202.54 2040.14,-220.2 2059.94,-223.95 2080.24,-229.4 2100.14,-235.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1753.29,-221.72 1746.32,-225.52 1754.14,-226.9 1753.29,-221.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1889.35,-223.2 1889.35,-256 1913.35,-256 1913.35,-223.2 1889.35,-223.2"/>
<text xml:space="preserve" text-anchor="start" x="1897.46" y="-236.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1916.35,-223.2 1916.35,-256 1954.25,-256 1954.25,-223.2 1916.35,-223.2"/>
<text xml:space="preserve" text-anchor="start" x="1919.35" y="-234" font-family="Arial" font-size="14.00" fill="#c9c9c9">allow</text>
</g>
<!-- newt&#45;&gt;openproject -->
<g id="edge7" class="edge">
<title>newt&#45;&gt;openproject</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1711.11,-693.85C1806.52,-689.31 1930.33,-682.98 2040.14,-676 2057.95,-674.87 2076.56,-673.6 2095.11,-672.28"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2095.09,-674.91 2102.38,-671.75 2094.71,-669.67 2095.09,-674.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1828.65,-691.83 1828.65,-731.43 1852.65,-731.43 1852.65,-691.83 1828.65,-691.83"/>
<text xml:space="preserve" text-anchor="start" x="1836.76" y="-708.43" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1855.65,-691.83 1855.65,-731.43 2014.95,-731.43 2014.95,-691.83 1855.65,-691.83"/>
<text xml:space="preserve" text-anchor="start" x="1858.65" y="-714.43" font-family="Arial" font-size="14.00" fill="#c9c9c9">forwards to the local port</text>
<text xml:space="preserve" text-anchor="start" x="1912.36" y="-697.63" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTPS</text>
</g>
<!-- newt&#45;&gt;openproject -->
<g id="edge10" class="edge">
<title>newt&#45;&gt;openproject</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1721.11,-631.03C1748.23,-622.41 1776.32,-614.96 1803.47,-610.2 1907.07,-592.05 1935.55,-598.95 2040.14,-610.2 2061.31,-612.48 2083.42,-615.94 2105.14,-619.99"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1720.37,-628.51 1714.05,-633.33 1721.99,-633.51 1720.37,-628.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1881.56,-613.2 1881.56,-646 1905.56,-646 1905.56,-613.2 1881.56,-613.2"/>
<text xml:space="preserve" text-anchor="start" x="1889.67" y="-626.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1908.56,-613.2 1908.56,-646 1962.04,-646 1962.04,-613.2 1908.56,-613.2"/>
<text xml:space="preserve" text-anchor="start" x="1911.56" y="-624" font-family="Arial" font-size="14.00" fill="#c9c9c9">200 OK</text>
</g>
<!-- openproject&#45;&gt;db -->
<g id="edge8" class="edge">
<title>openproject&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2425.03,-659C2496.76,-659 2581.59,-659 2654.59,-659"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2654.28,-661.63 2661.78,-659 2654.28,-656.38 2654.28,-661.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2493.18,-662 2493.18,-701.6 2517.18,-701.6 2517.18,-662 2493.18,-662"/>
<text xml:space="preserve" text-anchor="start" x="2501.29" y="-678.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2520.18,-662 2520.18,-701.6 2602.44,-701.6 2602.44,-662 2520.18,-662"/>
<text xml:space="preserve" text-anchor="start" x="2543.8" y="-684.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">query</text>
<text xml:space="preserve" text-anchor="start" x="2523.18" y="-667.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">PostgreSQL</text>
</g>
<!-- openproject&#45;&gt;db -->
<g id="edge9" class="edge">
<title>openproject&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2435.14,-603.86C2453.56,-599.51 2472.16,-595.8 2490.18,-593.2 2540.89,-585.91 2554.76,-585.76 2605.44,-593.2 2624.79,-596.05 2644.8,-600.23 2664.5,-605.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2434.54,-601.3 2427.87,-605.63 2435.78,-606.41 2434.54,-601.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2516.53,-596.2 2516.53,-629 2540.53,-629 2540.53,-596.2 2516.53,-596.2"/>
<text xml:space="preserve" text-anchor="start" x="2524.64" y="-609.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2543.53,-596.2 2543.53,-629 2579.09,-629 2579.09,-596.2 2543.53,-596.2"/>
<text xml:space="preserve" text-anchor="start" x="2546.53" y="-607" font-family="Arial" font-size="14.00" fill="#c9c9c9">rows</text>
</g>
</g>
</svg>
`;case`flowSecrets`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1715pt" height="512pt"
 viewBox="0.00 0.00 1715.00 512.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 497.05)">
<!-- periphery -->
<g id="node1" class="node">
<title>periphery</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="362.65,-341 0,-341 0,-161 362.65,-161 362.65,-341"/>
<text xml:space="preserve" text-anchor="start" x="138.53" y="-263" font-family="Arial" font-size="20.00" fill="#f0f9ff">Periphery</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-240" font-family="Arial" font-size="15.00" fill="#b6ecf7">Per&#45;host agent, installed as a systemd unit</text>
<text xml:space="preserve" text-anchor="start" x="128.8" y="-222" font-family="Arial" font-size="15.00" fill="#b6ecf7">by infra.ansible.</text>
</g>
<!-- docuseal -->
<g id="node2" class="node">
<title>docuseal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="963.87,-341 643.83,-341 643.83,-161 963.87,-161 963.87,-341"/>
<text xml:space="preserve" text-anchor="start" x="762.16" y="-243" font-family="Arial" font-size="20.00" fill="#eff6ff">Docuseal</text>
</g>
<!-- server -->
<g id="node3" class="node">
<title>server</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1684.82,-482 1354.78,-482 1354.78,-302 1684.82,-302 1684.82,-482"/>
<text xml:space="preserve" text-anchor="start" x="1490.35" y="-384" font-family="Arial" font-size="20.00" fill="#f0f9ff">Server</text>
</g>
<!-- db -->
<g id="node4" class="node">
<title>db</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1679.82,-163.64C1679.82,-172.67 1608.1,-180 1519.8,-180 1431.5,-180 1359.78,-172.67 1359.78,-163.64 1359.78,-163.64 1359.78,-16.36 1359.78,-16.36 1359.78,-7.33 1431.5,0 1519.8,0 1608.1,0 1679.82,-7.33 1679.82,-16.36 1679.82,-16.36 1679.82,-163.64 1679.82,-163.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1679.82,-163.64C1679.82,-154.61 1608.1,-147.27 1519.8,-147.27 1431.5,-147.27 1359.78,-154.61 1359.78,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="1476.99" y="-82" font-family="Arial" font-size="20.00" fill="#f8fafc">Database</text>
</g>
<!-- periphery&#45;&gt;docuseal -->
<g id="edge1" class="edge">
<title>periphery&#45;&gt;docuseal</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M362.64,-251C448.09,-251 549.58,-251 633.57,-251"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="633.46,-253.63 640.96,-251 633.46,-248.38 633.46,-253.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="425.65,-254 425.65,-286.8 449.65,-286.8 449.65,-254 425.65,-254"/>
<text xml:space="preserve" text-anchor="start" x="433.76" y="-267.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="452.65,-254 452.65,-286.8 580.83,-286.8 580.83,-254 452.65,-254"/>
<text xml:space="preserve" text-anchor="start" x="455.65" y="-264.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">docker compose up</text>
</g>
<!-- docuseal&#45;&gt;server -->
<g id="edge2" class="edge">
<title>docuseal&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M963.74,-282.38C1076.73,-304.69 1228.46,-334.66 1344.73,-357.62"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1343.96,-360.15 1351.83,-359.02 1344.98,-355 1343.96,-360.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1041.66,-349.39 1041.66,-388.99 1065.66,-388.99 1065.66,-349.39 1041.66,-349.39"/>
<text xml:space="preserve" text-anchor="start" x="1049.76" y="-365.99" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1068.66,-349.39 1068.66,-388.99 1276.99,-388.99 1276.99,-349.39 1068.66,-349.39"/>
<text xml:space="preserve" text-anchor="start" x="1071.66" y="-371.99" font-family="Arial" font-size="14.00" fill="#c9c9c9">machine identity login, then GET</text>
<text xml:space="preserve" text-anchor="start" x="1142.86" y="-355.19" font-family="Arial" font-size="14.00" fill="#c9c9c9">/docuseal</text>
</g>
<!-- docuseal&#45;&gt;server -->
<g id="edge3" class="edge">
<title>docuseal&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M974.02,-215.8C1070.26,-202.71 1191.77,-198.06 1294.78,-231.2 1340.46,-245.9 1384.72,-273.75 1421.67,-302.19"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="973.66,-213.2 966.6,-216.84 974.39,-218.4 973.66,-213.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1100.79,-234.2 1100.79,-267 1124.79,-267 1124.79,-234.2 1100.79,-234.2"/>
<text xml:space="preserve" text-anchor="start" x="1108.9" y="-247.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1127.79,-234.2 1127.79,-267 1217.85,-267 1217.85,-234.2 1127.79,-234.2"/>
<text xml:space="preserve" text-anchor="start" x="1130.79" y="-245" font-family="Arial" font-size="14.00" fill="#c9c9c9">secret bundle</text>
</g>
<!-- docuseal&#45;&gt;db -->
<g id="edge4" class="edge">
<title>docuseal&#45;&gt;db</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M953.4,-161.05C976.36,-150.17 1000.3,-140.44 1023.87,-133.4 1128.83,-102.06 1251.46,-91.14 1348.39,-88.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1348.43,-90.71 1355.85,-87.87 1348.28,-85.46 1348.43,-90.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1026.87,-136.4 1026.87,-176 1050.87,-176 1050.87,-136.4 1026.87,-136.4"/>
<text xml:space="preserve" text-anchor="start" x="1034.97" y="-153" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1053.87,-136.4 1053.87,-176 1291.78,-176 1291.78,-136.4 1053.87,-136.4"/>
<text xml:space="preserve" text-anchor="start" x="1056.87" y="-159" font-family="Arial" font-size="14.00" fill="#c9c9c9">connects with the injected credentials</text>
<text xml:space="preserve" text-anchor="start" x="1134.69" y="-142.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">PostgreSQL</text>
</g>
</g>
</svg>
`;case`flowDeploy`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1712pt" height="826pt"
 viewBox="0.00 0.00 1712.00 826.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 811.05)">
<!-- operator -->
<g id="node1" class="node">
<title>operator</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="356.06,-796 7.44,-796 7.44,-616 356.06,-616 356.06,-796"/>
<text xml:space="preserve" text-anchor="start" x="142.29" y="-718" font-family="Arial" font-size="20.00" fill="#f0f9ff">Operator</text>
<text xml:space="preserve" text-anchor="start" x="27.5" y="-695" font-family="Arial" font-size="15.00" fill="#b6ecf7">Administers the fleet through Komodo, Ansible</text>
<text xml:space="preserve" text-anchor="start" x="131.71" y="-677" font-family="Arial" font-size="15.00" fill="#b6ecf7">and the forges.</text>
</g>
<!-- core -->
<g id="node2" class="node">
<title>core</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="363.5,-411 0,-411 0,-231 363.5,-231 363.5,-411"/>
<text xml:space="preserve" text-anchor="start" x="160.07" y="-333" font-family="Arial" font-size="20.00" fill="#f0f9ff">Core</text>
<text xml:space="preserve" text-anchor="start" x="40" y="-310" font-family="Arial" font-size="15.00" fill="#b6ecf7">The hub: holds stack definitions and drives</text>
<text xml:space="preserve" text-anchor="start" x="137.14" y="-292" font-family="Arial" font-size="15.00" fill="#b6ecf7">every deploy.</text>
</g>
<!-- server -->
<g id="node3" class="node">
<title>server</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1008.13,-782 678.08,-782 678.08,-602 1008.13,-602 1008.13,-782"/>
<text xml:space="preserve" text-anchor="start" x="813.65" y="-684" font-family="Arial" font-size="20.00" fill="#f0f9ff">Server</text>
</g>
<!-- periphery -->
<g id="node4" class="node">
<title>periphery</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1024.43,-479 661.78,-479 661.78,-299 1024.43,-299 1024.43,-479"/>
<text xml:space="preserve" text-anchor="start" x="800.31" y="-401" font-family="Arial" font-size="20.00" fill="#f0f9ff">Periphery</text>
<text xml:space="preserve" text-anchor="start" x="701.78" y="-378" font-family="Arial" font-size="15.00" fill="#b6ecf7">Per&#45;host agent, installed as a systemd unit</text>
<text xml:space="preserve" text-anchor="start" x="790.58" y="-360" font-family="Arial" font-size="15.00" fill="#b6ecf7">by infra.ansible.</text>
</g>
<!-- server_1 -->
<g id="node5" class="node">
<title>server_1</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1682.37,-479 1352.32,-479 1352.32,-299 1682.37,-299 1682.37,-479"/>
<text xml:space="preserve" text-anchor="start" x="1487.89" y="-381" font-family="Arial" font-size="20.00" fill="#f0f9ff">Server</text>
</g>
<!-- pushover -->
<g id="node6" class="node">
<title>pushover</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1010.31,-180 675.9,-180 675.9,0 1010.31,0 1010.31,-180"/>
<text xml:space="preserve" text-anchor="start" x="800.86" y="-102" font-family="Arial" font-size="20.00" fill="#f8fafc">Pushover</text>
<text xml:space="preserve" text-anchor="start" x="695.96" y="-79" font-family="Arial" font-size="15.00" fill="#cbd5e1">Receives Komodo alerts. The only telemetry</text>
<text xml:space="preserve" text-anchor="start" x="790.99" y="-61" font-family="Arial" font-size="15.00" fill="#cbd5e1">sink in the fleet.</text>
</g>
<!-- operator&#45;&gt;server -->
<g id="edge1" class="edge">
<title>operator&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M355.99,-702.32C452.16,-700.28 571.46,-697.75 667.81,-695.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="667.78,-698.33 675.22,-695.54 667.67,-693.08 667.78,-698.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="471.62,-703.67 471.62,-736.47 495.62,-736.47 495.62,-703.67 471.62,-703.67"/>
<text xml:space="preserve" text-anchor="start" x="479.73" y="-716.87" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">0</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="498.62,-703.67 498.62,-736.47 553.66,-736.47 553.66,-703.67 498.62,-703.67"/>
<text xml:space="preserve" text-anchor="start" x="501.62" y="-714.47" font-family="Arial" font-size="14.00" fill="#c9c9c9">git push</text>
</g>
<!-- core&#45;&gt;server -->
<g id="edge2" class="edge">
<title>core&#45;&gt;server</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M342.36,-410.81C442.44,-467.12 571.3,-539.63 673.11,-596.91"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="671.79,-599.18 679.61,-600.57 674.36,-594.6 671.79,-599.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="426.5,-553.64 426.5,-586.44 450.5,-586.44 450.5,-553.64 426.5,-553.64"/>
<text xml:space="preserve" text-anchor="start" x="434.61" y="-566.84" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="453.5,-553.64 453.5,-586.44 598.78,-586.44 598.78,-553.64 453.5,-553.64"/>
<text xml:space="preserve" text-anchor="start" x="456.5" y="-564.44" font-family="Arial" font-size="14.00" fill="#c9c9c9">syncs stack definitions</text>
</g>
<!-- core&#45;&gt;periphery -->
<g id="edge3" class="edge">
<title>core&#45;&gt;periphery</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M363.36,-339.63C452.75,-348.85 560.67,-359.98 651.4,-369.33"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="651.07,-371.94 658.8,-370.1 651.61,-366.71 651.07,-371.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="475.51,-366.09 475.51,-398.89 499.51,-398.89 499.51,-366.09 475.51,-366.09"/>
<text xml:space="preserve" text-anchor="start" x="483.62" y="-379.29" font-family="Arial" font-weight="bold" font-size="14.00" fill="#bbfcd3">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="502.51,-366.09 502.51,-398.89 549.77,-398.89 549.77,-366.09 502.51,-366.09"/>
<text xml:space="preserve" text-anchor="start" x="505.51" y="-376.89" font-family="Arial" font-size="14.00" fill="#bbfcd3">deploy</text>
</g>
<!-- core&#45;&gt;periphery -->
<g id="edge6" class="edge">
<title>core&#45;&gt;periphery</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M373.43,-278.54C445.54,-268.83 527.99,-265.41 601.78,-281.2 622.13,-285.55 642.83,-291.77 663.13,-299.04"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="373.39,-275.9 366.33,-279.53 374.12,-281.1 373.39,-275.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="479.02,-284.2 479.02,-317 503.02,-317 503.02,-284.2 479.02,-284.2"/>
<text xml:space="preserve" text-anchor="start" x="487.13" y="-297.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="506.02,-284.2 506.02,-317 546.26,-317 546.26,-284.2 506.02,-284.2"/>
<text xml:space="preserve" text-anchor="start" x="509.02" y="-295" font-family="Arial" font-size="14.00" fill="#c9c9c9">result</text>
</g>
<!-- core&#45;&gt;pushover -->
<g id="edge7" class="edge">
<title>core&#45;&gt;pushover</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M358.61,-231.09C380.21,-221.41 402.19,-212.2 423.5,-204.2 501.54,-174.91 590.33,-149.61 665.99,-130.31"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="666.54,-132.88 673.17,-128.49 665.25,-127.79 666.54,-132.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="448.28,-207.2 448.28,-240 472.28,-240 472.28,-207.2 448.28,-207.2"/>
<text xml:space="preserve" text-anchor="start" x="456.39" y="-220.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="475.28,-207.2 475.28,-240 577,-240 577,-207.2 475.28,-207.2"/>
<text xml:space="preserve" text-anchor="start" x="478.28" y="-218" font-family="Arial" font-size="14.00" fill="#c9c9c9">alerts on failure</text>
</g>
<!-- periphery&#45;&gt;server_1 -->
<g id="edge4" class="edge">
<title>periphery&#45;&gt;server_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1024.25,-389C1122.85,-389 1244.46,-389 1342.12,-389"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1341.87,-391.63 1349.37,-389 1341.87,-386.38 1341.87,-391.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1087.43,-392 1087.43,-424.8 1111.43,-424.8 1111.43,-392 1087.43,-392"/>
<text xml:space="preserve" text-anchor="start" x="1095.54" y="-405.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1114.43,-392 1114.43,-424.8 1289.32,-424.8 1289.32,-392 1114.43,-392"/>
<text xml:space="preserve" text-anchor="start" x="1117.43" y="-402.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">provider fetches the bundle</text>
</g>
<!-- periphery&#45;&gt;server_1 -->
<g id="edge5" class="edge">
<title>periphery&#45;&gt;server_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1034.08,-332.01C1050.99,-328.45 1067.94,-325.42 1084.43,-323.2 1176,-310.89 1200.86,-310.05 1292.32,-323.2 1311.98,-326.03 1332.32,-330.18 1352.36,-335.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1033.86,-329.37 1027.09,-333.52 1034.97,-334.5 1033.86,-329.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1149.31,-326.2 1149.31,-359 1173.31,-359 1173.31,-326.2 1149.31,-326.2"/>
<text xml:space="preserve" text-anchor="start" x="1157.42" y="-339.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1176.31,-326.2 1176.31,-359 1227.44,-359 1227.44,-326.2 1176.31,-326.2"/>
<text xml:space="preserve" text-anchor="start" x="1179.31" y="-337" font-family="Arial" font-size="14.00" fill="#c9c9c9">secrets</text>
</g>
</g>
</svg>
`;case`fleet`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3277pt" height="6634pt"
 viewBox="0.00 0.00 3277.00 6634.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 6619.05)">
<g id="clust1" class="cluster">
<title>cluster_prod</title>
<polygon fill="#393939" stroke="#292929" points="8,-8 8,-6596 3238.64,-6596 3238.64,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-6583.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">PRODUCTION</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_hetzner</title>
<polygon fill="#1a468d" stroke="#1c3979" points="663.55,-58 663.55,-444 3170.64,-444 3170.64,-58 663.55,-58"/>
<text xml:space="preserve" text-anchor="start" x="671.55" y="-431.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">HETZNER</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_maboi</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="695.55,-90 695.55,-391 3138.64,-391 3138.64,-90 695.55,-90"/>
<text xml:space="preserve" text-anchor="start" x="703.55" y="-378.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MABOI</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_vultr</title>
<polygon fill="#1a468d" stroke="#1c3979" points="58,-494 58,-2409 3170.64,-2409 3170.64,-494 58,-494"/>
<text xml:space="preserve" text-anchor="start" x="66" y="-2396.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">VULTR</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_rick</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="90,-526 90,-2356 3138.64,-2356 3138.64,-526 90,-526"/>
<text xml:space="preserve" text-anchor="start" x="98" y="-2343.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">RICK</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_homelab</title>
<polygon fill="#1a468d" stroke="#1c3979" points="79.88,-2459 79.88,-6525 3188.64,-6525 3188.64,-2459 79.88,-2459"/>
<text xml:space="preserve" text-anchor="start" x="87.88" y="-6512.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">HOME LAB</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_biggy</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="695.55,-2509 695.55,-3423 3138.64,-3423 3138.64,-2509 695.55,-2509"/>
<text xml:space="preserve" text-anchor="start" x="703.55" y="-3410.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BIGGY</text>
</g>
<g id="clust8" class="cluster">
<title>cluster_littlebuddy</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="695.55,-3473 695.55,-5442 3138.64,-5442 3138.64,-3473 695.55,-3473"/>
<text xml:space="preserve" text-anchor="start" x="703.55" y="-5429.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">LITTLEBUDDY</text>
</g>
<g id="clust9" class="cluster">
<title>cluster_bill</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="695.55,-5492 695.55,-5793 3138.64,-5793 3138.64,-5492 695.55,-5492"/>
<text xml:space="preserve" text-anchor="start" x="703.55" y="-5780.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BILL</text>
</g>
<g id="clust10" class="cluster">
<title>cluster_paiki</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="695.55,-5843 695.55,-6454 3138.64,-6454 3138.64,-5843 695.55,-5843"/>
<text xml:space="preserve" text-anchor="start" x="703.55" y="-6441.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PAIKI</text>
</g>
<!-- nas -->
<g id="node1" class="node">
<title>nas</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M470.16,-4554.64C470.16,-4563.67 393.9,-4571 300.02,-4571 206.14,-4571 129.88,-4563.67 129.88,-4554.64 129.88,-4554.64 129.88,-4407.36 129.88,-4407.36 129.88,-4398.33 206.14,-4391 300.02,-4391 393.9,-4391 470.16,-4398.33 470.16,-4407.36 470.16,-4407.36 470.16,-4554.64 470.16,-4554.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M470.16,-4554.64C470.16,-4545.61 393.9,-4538.27 300.02,-4538.27 206.14,-4538.27 129.88,-4545.61 129.88,-4554.64"/>
<text xml:space="preserve" text-anchor="start" x="268.9" y="-4493" font-family="Arial" font-size="20.00" fill="#eff6ff">snaszy</text>
<text xml:space="preserve" text-anchor="start" x="149.94" y="-4470" font-family="Arial" font-size="15.00" fill="#bfdbfe">Synology NAS. Not Komodo&#45;managed; holds</text>
<text xml:space="preserve" text-anchor="start" x="165.78" y="-4452" font-family="Arial" font-size="15.00" fill="#bfdbfe">/volume1/backups and /volume1/docker.</text>
</g>
<!-- pangolin -->
<g id="node2" class="node">
<title>pangolin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="460.04,-1719 140,-1719 140,-1539 460.04,-1539 460.04,-1719"/>
<text xml:space="preserve" text-anchor="start" x="261.1" y="-1621" font-family="Arial" font-size="20.00" fill="#eff6ff">Pangolin</text>
</g>
<!-- homarr -->
<g id="node3" class="node">
<title>homarr</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1717.32,-1059 1397.28,-1059 1397.28,-879 1717.32,-879 1717.32,-1059"/>
<text xml:space="preserve" text-anchor="start" x="1523.97" y="-961" font-family="Arial" font-size="20.00" fill="#eff6ff">Homarr</text>
</g>
<!-- databasus -->
<g id="node4" class="node">
<title>databasus</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1717.32,-2285 1397.28,-2285 1397.28,-2105 1717.32,-2105 1717.32,-2285"/>
<text xml:space="preserve" text-anchor="start" x="1509.49" y="-2187" font-family="Arial" font-size="20.00" fill="#eff6ff">Databasus</text>
</g>
<!-- tsagent -->
<g id="node5" class="node">
<title>tsagent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1717.32,-1369 1397.28,-1369 1397.28,-1189 1717.32,-1189 1717.32,-1369"/>
<text xml:space="preserve" text-anchor="start" x="1488.93" y="-1280.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Tailscale Agent</text>
<text xml:space="preserve" text-anchor="start" x="1527.32" y="-1259.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
</g>
<!-- zerobyte -->
<g id="node6" class="node">
<title>zerobyte</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="460.04,-2157 140,-2157 140,-1977 460.04,-1977 460.04,-2157"/>
<text xml:space="preserve" text-anchor="start" x="260.56" y="-2068.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Zerobyte</text>
<text xml:space="preserve" text-anchor="start" x="281.96" y="-2047.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Restic</text>
</g>
<!-- newt -->
<g id="node7" class="node">
<title>newt</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1065.59,-320 745.55,-320 745.55,-140 1065.59,-140 1065.59,-320"/>
<text xml:space="preserve" text-anchor="start" x="882.79" y="-251.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Newt</text>
<text xml:space="preserve" text-anchor="start" x="875.59" y="-230.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="780.5" y="-209.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site connector, installed per host as a</text>
<text xml:space="preserve" text-anchor="start" x="808.86" y="-191.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">systemd unit by infra.ansible.</text>
</g>
<!-- periphery -->
<g id="node8" class="node">
<title>periphery</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3088.64,-320 2725.99,-320 2725.99,-140 3088.64,-140 3088.64,-320"/>
<text xml:space="preserve" text-anchor="start" x="2864.51" y="-242" font-family="Arial" font-size="20.00" fill="#f0f9ff">Periphery</text>
<text xml:space="preserve" text-anchor="start" x="2765.99" y="-219" font-family="Arial" font-size="15.00" fill="#b6ecf7">Per&#45;host agent, installed as a systemd unit</text>
<text xml:space="preserve" text-anchor="start" x="2854.78" y="-201" font-family="Arial" font-size="15.00" fill="#b6ecf7">by infra.ansible.</text>
</g>
<!-- tsagent_1 -->
<g id="node9" class="node">
<title>tsagent_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1717.32,-320 1397.28,-320 1397.28,-140 1717.32,-140 1717.32,-320"/>
<text xml:space="preserve" text-anchor="start" x="1488.93" y="-231.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Tailscale Agent</text>
<text xml:space="preserve" text-anchor="start" x="1527.32" y="-210.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
</g>
<!-- periphery_1 -->
<g id="node10" class="node">
<title>periphery_1</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3088.64,-4261 2725.99,-4261 2725.99,-4081 3088.64,-4081 3088.64,-4261"/>
<text xml:space="preserve" text-anchor="start" x="2864.51" y="-4183" font-family="Arial" font-size="20.00" fill="#f0f9ff">Periphery</text>
<text xml:space="preserve" text-anchor="start" x="2765.99" y="-4160" font-family="Arial" font-size="15.00" fill="#b6ecf7">Per&#45;host agent, installed as a systemd unit</text>
<text xml:space="preserve" text-anchor="start" x="2854.78" y="-4142" font-family="Arial" font-size="15.00" fill="#b6ecf7">by infra.ansible.</text>
</g>
<!-- tsagent_2 -->
<g id="node11" class="node">
<title>tsagent_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1717.32,-3703 1397.28,-3703 1397.28,-3523 1717.32,-3523 1717.32,-3703"/>
<text xml:space="preserve" text-anchor="start" x="1488.93" y="-3614.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Tailscale Agent</text>
<text xml:space="preserve" text-anchor="start" x="1527.32" y="-3593.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
</g>
<!-- newt_1 -->
<g id="node12" class="node">
<title>newt_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1065.59,-2847 745.55,-2847 745.55,-2667 1065.59,-2667 1065.59,-2847"/>
<text xml:space="preserve" text-anchor="start" x="882.79" y="-2778.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Newt</text>
<text xml:space="preserve" text-anchor="start" x="875.59" y="-2757.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="780.5" y="-2736.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site connector, installed per host as a</text>
<text xml:space="preserve" text-anchor="start" x="808.86" y="-2718.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">systemd unit by infra.ansible.</text>
</g>
<!-- newt_2 -->
<g id="node13" class="node">
<title>newt_2</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1065.59,-1719 745.55,-1719 745.55,-1539 1065.59,-1539 1065.59,-1719"/>
<text xml:space="preserve" text-anchor="start" x="882.79" y="-1650.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Newt</text>
<text xml:space="preserve" text-anchor="start" x="875.59" y="-1629.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="780.5" y="-1608.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site connector, installed per host as a</text>
<text xml:space="preserve" text-anchor="start" x="808.86" y="-1590.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">systemd unit by infra.ansible.</text>
</g>
<!-- terraria -->
<g id="node14" class="node">
<title>terraria</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1717.32,-3042 1397.28,-3042 1397.28,-2862 1717.32,-2862 1717.32,-3042"/>
<text xml:space="preserve" text-anchor="start" x="1522.3" y="-2944" font-family="Arial" font-size="20.00" fill="#eff6ff">Terraria</text>
</g>
<!-- authentik -->
<g id="node15" class="node">
<title>authentik</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2347.25,-1409 2027.21,-1409 2027.21,-1229 2347.25,-1229 2347.25,-1409"/>
<text xml:space="preserve" text-anchor="start" x="2145.53" y="-1311" font-family="Arial" font-size="20.00" fill="#eff6ff">Authentik</text>
</g>
<!-- core -->
<g id="node16" class="node">
<title>core</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2368.98,-2029 2005.48,-2029 2005.48,-1849 2368.98,-1849 2368.98,-2029"/>
<text xml:space="preserve" text-anchor="start" x="2165.55" y="-1951" font-family="Arial" font-size="20.00" fill="#f0f9ff">Core</text>
<text xml:space="preserve" text-anchor="start" x="2045.48" y="-1928" font-family="Arial" font-size="15.00" fill="#b6ecf7">The hub: holds stack definitions and drives</text>
<text xml:space="preserve" text-anchor="start" x="2142.62" y="-1910" font-family="Arial" font-size="15.00" fill="#b6ecf7">every deploy.</text>
</g>
<!-- periphery_2 -->
<g id="node17" class="node">
<title>periphery_2</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3088.64,-3045 2725.99,-3045 2725.99,-2865 3088.64,-2865 3088.64,-3045"/>
<text xml:space="preserve" text-anchor="start" x="2864.51" y="-2967" font-family="Arial" font-size="20.00" fill="#f0f9ff">Periphery</text>
<text xml:space="preserve" text-anchor="start" x="2765.99" y="-2944" font-family="Arial" font-size="15.00" fill="#b6ecf7">Per&#45;host agent, installed as a systemd unit</text>
<text xml:space="preserve" text-anchor="start" x="2854.78" y="-2926" font-family="Arial" font-size="15.00" fill="#b6ecf7">by infra.ansible.</text>
</g>
<!-- tsagent_3 -->
<g id="node18" class="node">
<title>tsagent_3</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1717.32,-3352 1397.28,-3352 1397.28,-3172 1717.32,-3172 1717.32,-3352"/>
<text xml:space="preserve" text-anchor="start" x="1488.93" y="-3263.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Tailscale Agent</text>
<text xml:space="preserve" text-anchor="start" x="1527.32" y="-3242.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
</g>
<!-- newt_3 -->
<g id="node19" class="node">
<title>newt_3</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1065.59,-5722 745.55,-5722 745.55,-5542 1065.59,-5542 1065.59,-5722"/>
<text xml:space="preserve" text-anchor="start" x="882.79" y="-5653.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Newt</text>
<text xml:space="preserve" text-anchor="start" x="875.59" y="-5632.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="780.5" y="-5611.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site connector, installed per host as a</text>
<text xml:space="preserve" text-anchor="start" x="808.86" y="-5593.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">systemd unit by infra.ansible.</text>
</g>
<!-- periphery_3 -->
<g id="node20" class="node">
<title>periphery_3</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3088.64,-5722 2725.99,-5722 2725.99,-5542 3088.64,-5542 3088.64,-5722"/>
<text xml:space="preserve" text-anchor="start" x="2864.51" y="-5644" font-family="Arial" font-size="20.00" fill="#f0f9ff">Periphery</text>
<text xml:space="preserve" text-anchor="start" x="2765.99" y="-5621" font-family="Arial" font-size="15.00" fill="#b6ecf7">Per&#45;host agent, installed as a systemd unit</text>
<text xml:space="preserve" text-anchor="start" x="2854.78" y="-5603" font-family="Arial" font-size="15.00" fill="#b6ecf7">by infra.ansible.</text>
</g>
<!-- tsagent_4 -->
<g id="node21" class="node">
<title>tsagent_4</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1717.32,-5722 1397.28,-5722 1397.28,-5542 1717.32,-5542 1717.32,-5722"/>
<text xml:space="preserve" text-anchor="start" x="1488.93" y="-5633.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Tailscale Agent</text>
<text xml:space="preserve" text-anchor="start" x="1527.32" y="-5612.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
</g>
<!-- newt_4 -->
<g id="node22" class="node">
<title>newt_4</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1065.59,-6113 745.55,-6113 745.55,-5933 1065.59,-5933 1065.59,-6113"/>
<text xml:space="preserve" text-anchor="start" x="882.79" y="-6044.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Newt</text>
<text xml:space="preserve" text-anchor="start" x="875.59" y="-6023.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="780.5" y="-6002.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site connector, installed per host as a</text>
<text xml:space="preserve" text-anchor="start" x="808.86" y="-5984.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">systemd unit by infra.ansible.</text>
</g>
<!-- fbq -->
<g id="node23" class="node">
<title>fbq</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2347.25,-2847 2027.21,-2847 2027.21,-2667 2347.25,-2667 2347.25,-2847"/>
<text xml:space="preserve" text-anchor="start" x="2087.75" y="-2749" font-family="Arial" font-size="20.00" fill="#eff6ff">File Browser Quantum</text>
</g>
<!-- periphery_4 -->
<g id="node24" class="node">
<title>periphery_4</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3088.64,-2029 2725.99,-2029 2725.99,-1849 3088.64,-1849 3088.64,-2029"/>
<text xml:space="preserve" text-anchor="start" x="2864.51" y="-1951" font-family="Arial" font-size="20.00" fill="#f0f9ff">Periphery</text>
<text xml:space="preserve" text-anchor="start" x="2765.99" y="-1928" font-family="Arial" font-size="15.00" fill="#b6ecf7">Per&#45;host agent, installed as a systemd unit</text>
<text xml:space="preserve" text-anchor="start" x="2854.78" y="-1910" font-family="Arial" font-size="15.00" fill="#b6ecf7">by infra.ansible.</text>
</g>
<!-- medialib -->
<g id="node25" class="node">
<title>medialib</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1725.77,-6073 1388.83,-6073 1388.83,-5893 1725.77,-5893 1725.77,-6073"/>
<text xml:space="preserve" text-anchor="start" x="1496.72" y="-5995" font-family="Arial" font-size="20.00" fill="#f8fafc">Media Library</text>
<text xml:space="preserve" text-anchor="start" x="1408.89" y="-5972" font-family="Arial" font-size="15.00" fill="#cbd5e1">Seven products in one stack. Each is its own</text>
<text xml:space="preserve" text-anchor="start" x="1519.36" y="-5954" font-family="Arial" font-size="15.00" fill="#cbd5e1">application.</text>
</g>
<!-- newt_5 -->
<g id="node26" class="node">
<title>newt_5</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1065.59,-4363 745.55,-4363 745.55,-4183 1065.59,-4183 1065.59,-4363"/>
<text xml:space="preserve" text-anchor="start" x="882.79" y="-4294.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Newt</text>
<text xml:space="preserve" text-anchor="start" x="875.59" y="-4273.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="780.5" y="-4252.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site connector, installed per host as a</text>
<text xml:space="preserve" text-anchor="start" x="808.86" y="-4234.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">systemd unit by infra.ansible.</text>
</g>
<!-- erpnext -->
<g id="node27" class="node">
<title>erpnext</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2347.25,-5722 2027.21,-5722 2027.21,-5542 2347.25,-5542 2347.25,-5722"/>
<text xml:space="preserve" text-anchor="start" x="2146.1" y="-5633.8" font-family="Arial" font-size="20.00" fill="#eff6ff">ERPNext</text>
<text xml:space="preserve" text-anchor="start" x="2166.63" y="-5612.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Frappe</text>
</g>
<!-- immich -->
<g id="node28" class="node">
<title>immich</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2347.25,-6073 2027.21,-6073 2027.21,-5893 2347.25,-5893 2347.25,-6073"/>
<text xml:space="preserve" text-anchor="start" x="2155" y="-5975" font-family="Arial" font-size="20.00" fill="#eff6ff">Immich</text>
</g>
<!-- woodpecker -->
<g id="node29" class="node">
<title>woodpecker</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2347.25,-4887 2027.21,-4887 2027.21,-4707 2347.25,-4707 2347.25,-4887"/>
<text xml:space="preserve" text-anchor="start" x="2131.09" y="-4789" font-family="Arial" font-size="20.00" fill="#eff6ff">Woodpecker</text>
</g>
<!-- komodomcp -->
<g id="node30" class="node">
<title>komodomcp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1733.27,-4013 1381.33,-4013 1381.33,-3833 1733.27,-3833 1733.27,-4013"/>
<text xml:space="preserve" text-anchor="start" x="1495.05" y="-3926" font-family="Arial" font-size="20.00" fill="#eff6ff">Komodo MCP</text>
<text xml:space="preserve" text-anchor="start" x="1401.39" y="-3903" font-family="Arial" font-size="15.00" fill="#bfdbfe">Exposes the Komodo API to agents over MCP.</text>
</g>
<!-- openproject -->
<g id="node31" class="node">
<title>openproject</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1717.32,-4929 1397.28,-4929 1397.28,-4749 1717.32,-4749 1717.32,-4929"/>
<text xml:space="preserve" text-anchor="start" x="1501.71" y="-4831" font-family="Arial" font-size="20.00" fill="#eff6ff">OpenProject</text>
</g>
<!-- docuseal -->
<g id="node32" class="node">
<title>docuseal</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1717.32,-5239 1397.28,-5239 1397.28,-5059 1717.32,-5059 1717.32,-5239"/>
<text xml:space="preserve" text-anchor="start" x="1515.61" y="-5141" font-family="Arial" font-size="20.00" fill="#eff6ff">Docuseal</text>
</g>
<!-- paperless -->
<g id="node33" class="node">
<title>paperless</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2347.25,-4363 2027.21,-4363 2027.21,-4183 2347.25,-4183 2347.25,-4363"/>
<text xml:space="preserve" text-anchor="start" x="2142.76" y="-4265" font-family="Arial" font-size="20.00" fill="#eff6ff">Paperless</text>
</g>
<!-- forgejo -->
<g id="node34" class="node">
<title>forgejo</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3067.33,-5129 2747.29,-5129 2747.29,-4949 3067.33,-4949 3067.33,-5129"/>
<text xml:space="preserve" text-anchor="start" x="2873.41" y="-5040.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Forgejo</text>
<text xml:space="preserve" text-anchor="start" x="2891.78" y="-5019.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Gitea</text>
</g>
<!-- postgres -->
<g id="node35" class="node">
<title>postgres</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2359.47,-5197 2014.98,-5197 2014.98,-5017 2359.47,-5017 2359.47,-5197"/>
<text xml:space="preserve" text-anchor="start" x="2132.75" y="-5119" font-family="Arial" font-size="20.00" fill="#eff6ff">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="2035.04" y="-5096" font-family="Arial" font-size="15.00" fill="#bfdbfe">postgres:18 on littlebuddy:6109, reached over</text>
<text xml:space="preserve" text-anchor="start" x="2071.73" y="-5078" font-family="Arial" font-size="15.00" fill="#bfdbfe">the shared__postgres_db network.</text>
</g>
<!-- infisical -->
<g id="node36" class="node">
<title>infisical</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2347.25,-1719 2027.21,-1719 2027.21,-1539 2347.25,-1539 2347.25,-1719"/>
<text xml:space="preserve" text-anchor="start" x="2153.88" y="-1621" font-family="Arial" font-size="20.00" fill="#eff6ff">Infisical</text>
</g>
<!-- periphery_5 -->
<g id="node37" class="node">
<title>periphery_5</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3088.64,-6228 2725.99,-6228 2725.99,-6048 3088.64,-6048 3088.64,-6228"/>
<text xml:space="preserve" text-anchor="start" x="2864.51" y="-6150" font-family="Arial" font-size="20.00" fill="#f0f9ff">Periphery</text>
<text xml:space="preserve" text-anchor="start" x="2765.99" y="-6127" font-family="Arial" font-size="15.00" fill="#b6ecf7">Per&#45;host agent, installed as a systemd unit</text>
<text xml:space="preserve" text-anchor="start" x="2854.78" y="-6109" font-family="Arial" font-size="15.00" fill="#b6ecf7">by infra.ansible.</text>
</g>
<!-- tsagent_5 -->
<g id="node38" class="node">
<title>tsagent_5</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1717.32,-6383 1397.28,-6383 1397.28,-6203 1717.32,-6203 1717.32,-6383"/>
<text xml:space="preserve" text-anchor="start" x="1488.93" y="-6294.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Tailscale Agent</text>
<text xml:space="preserve" text-anchor="start" x="1527.32" y="-6273.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
</g>
<!-- pangolin&#45;&gt;newt_2 -->
<g id="edge1" class="edge">
<title>pangolin&#45;&gt;newt_2</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M459.99,-1629C544.73,-1629 649,-1629 735.26,-1629"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="735.16,-1631.63 742.66,-1629 735.16,-1626.38 735.16,-1631.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="535.16,-1629 535.16,-1672.2 655.55,-1672.2 655.55,-1629 535.16,-1629"/>
<text xml:space="preserve" text-anchor="start" x="538.16" y="-1655.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">WireGuard :51820</text>
<text xml:space="preserve" text-anchor="start" x="538.16" y="-1634.4" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ WireGuard ]</text>
</g>
<!-- homarr&#45;&gt;authentik -->
<g id="edge2" class="edge">
<title>homarr&#45;&gt;authentik</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M1711.88,-1058.96C1797.76,-1108.75 1907.04,-1171.25 2005.48,-1225 2009.72,-1227.31 2014.02,-1229.65 2018.36,-1232"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2016.82,-1234.15 2024.67,-1235.39 2019.31,-1229.53 2016.82,-1234.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1805.67,-1184.23 1805.67,-1227.43 1933.08,-1227.43 1933.08,-1184.23 1805.67,-1184.23"/>
<text xml:space="preserve" text-anchor="start" x="1808.67" y="-1210.43" font-family="Arial" font-size="14.00" fill="#d4f2ff">authenticates users</text>
<text xml:space="preserve" text-anchor="start" x="1808.67" y="-1189.63" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ OIDC ]</text>
</g>
<!-- databasus&#45;&gt;authentik -->
<g id="edge3" class="edge">
<title>databasus&#45;&gt;authentik</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1658.79,-2105.23C1686.3,-2076.23 1713.86,-2042.37 1733.27,-2007 1788.51,-1906.36 1744.28,-1858.32 1798.27,-1757 1868.92,-1624.43 1987.41,-1498.86 2074.89,-1416.44"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2075.1,-1416.24 2076.34,-1410.97 2081.67,-1410.08 2080.44,-1415.35 2075.1,-1416.24"/>
</g>
<!-- databasus&#45;&gt;erpnext -->
<g id="edge28" class="edge">
<title>databasus&#45;&gt;erpnext</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1622.6,-2284.93C1665.78,-2337.67 1727.58,-2400.03 1798.27,-2432 1827.14,-2445.05 1918.63,-2419.05 1940.48,-2442 2059.1,-2566.61 1914.66,-5391.89 2005.48,-5538 2009.65,-5544.71 2014.47,-5550.97 2019.79,-5556.8"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2019.78,-5556.78 2025.07,-5557.89 2026.09,-5563.2 2020.79,-5562.09 2019.78,-5556.78"/>
</g>
<!-- databasus&#45;&gt;immich -->
<g id="edge29" class="edge">
<title>databasus&#45;&gt;immich</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1623.16,-2284.93C1666.76,-2338.94 1728.82,-2404.61 1798.27,-2444 1854.71,-2476.01 1899.63,-2426.59 1940.48,-2477 2059.82,-2624.31 1905.55,-5727.88 2005.48,-5889 2009.64,-5895.72 2014.46,-5901.98 2019.78,-5907.81"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2019.76,-5907.79 2025.05,-5908.9 2026.07,-5914.21 2020.77,-5913.1 2019.76,-5907.79"/>
</g>
<!-- databasus&#45;&gt;paperless -->
<g id="edge13" class="edge">
<title>databasus&#45;&gt;paperless</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1644.14,-2284.78C1686.67,-2323.53 1741.1,-2365.33 1798.27,-2389 1827.63,-2401.15 1918.79,-2380.77 1940.48,-2404 2075.17,-2548.25 1899.99,-4012.2 2005.48,-4179 2009.7,-4185.68 2014.56,-4191.91 2019.92,-4197.72"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2019.92,-4197.71 2025.22,-4198.79 2026.26,-4204.1 2020.96,-4203.02 2019.92,-4197.71"/>
</g>
<!-- databasus&#45;&gt;forgejo -->
<g id="edge12" class="edge">
<title>databasus&#45;&gt;forgejo</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1618.07,-2284.95C1661.19,-2342.4 1724.64,-2413.31 1798.27,-2453 1854.69,-2483.41 1898.7,-2428.39 1940.48,-2477 2086.16,-2646.53 1846.15,-6343.22 2005.48,-6500 2063.05,-6556.66 2303.24,-6546.94 2368.98,-6500 2766.7,-6216.03 2550.32,-5916.04 2725.99,-5460 2768.76,-5348.95 2823.16,-5223.85 2860.96,-5139.09"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2861.08,-5138.82 2860.18,-5133.48 2864.76,-5130.6 2865.66,-5135.93 2861.08,-5138.82"/>
</g>
<!-- databasus&#45;&gt;postgres -->
<g id="edge11" class="edge">
<title>databasus&#45;&gt;postgres</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1629.72,-2284.97C1672.99,-2332.49 1732.46,-2386.7 1798.27,-2415 1827.37,-2427.51 1918.59,-2402.1 1940.48,-2425 2039.86,-2528.97 1929.3,-4891.01 2005.48,-5013 2006.47,-5014.6 2007.51,-5016.17 2008.58,-5017.72"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2008.56,-5017.69 2013.66,-5019.47 2013.99,-5024.87 2008.88,-5023.09 2008.56,-5017.69"/>
</g>
<!-- databasus&#45;&gt;infisical -->
<g id="edge6" class="edge">
<title>databasus&#45;&gt;infisical</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1647.3,-2105.4C1675.87,-2075.09 1706.91,-2040.44 1733.27,-2007 1765.63,-1965.95 1762.05,-1946.68 1798.27,-1909 1865.75,-1838.8 1952.79,-1774.17 2027.32,-1724.74"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="2027.32,-1724.73 2029.43,-1719.75 2034.84,-1719.78 2032.73,-1724.76 2027.32,-1724.73"/>
</g>
<!-- tsagent&#45;&gt;authentik -->
<g id="edge5" class="edge">
<title>tsagent&#45;&gt;authentik</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M1717.16,-1289.12C1808.74,-1294.95 1923.83,-1302.28 2017.08,-1308.23"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2016.81,-1310.84 2024.46,-1308.69 2017.14,-1305.6 2016.81,-1310.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1798.27,-1302.58 1798.27,-1345.78 1940.48,-1345.78 1940.48,-1302.58 1798.27,-1302.58"/>
<text xml:space="preserve" text-anchor="start" x="1801.27" y="-1328.78" font-family="Arial" font-size="14.00" fill="#d4f2ff">exposes on the tailnet</text>
<text xml:space="preserve" text-anchor="start" x="1801.27" y="-1307.98" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ shared__ts&#45;gateway ]</text>
</g>
<!-- tsagent&#45;&gt;infisical -->
<g id="edge8" class="edge">
<title>tsagent&#45;&gt;infisical</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M1695.28,-1368.83C1728.62,-1389.84 1764.43,-1411.7 1798.27,-1431 1869.15,-1471.42 1949.21,-1512.94 2018.11,-1547.46"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2016.73,-1549.71 2024.61,-1550.71 2019.08,-1545.01 2016.73,-1549.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1798.27,-1505.15 1798.27,-1548.35 1940.48,-1548.35 1940.48,-1505.15 1798.27,-1505.15"/>
<text xml:space="preserve" text-anchor="start" x="1801.27" y="-1531.35" font-family="Arial" font-size="14.00" fill="#d4f2ff">exposes on the tailnet</text>
<text xml:space="preserve" text-anchor="start" x="1801.27" y="-1510.55" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ shared__ts&#45;gateway ]</text>
</g>
<!-- newt_1&#45;&gt;terraria -->
<g id="edge27" class="edge">
<title>newt_1&#45;&gt;terraria</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1065.51,-2804.7C1163.13,-2834 1288.08,-2871.5 1387.47,-2901.33"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1386.47,-2903.77 1394.41,-2903.41 1387.98,-2898.74 1386.47,-2903.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1169.88,-2877.7 1169.88,-2920.9 1277.04,-2920.9 1277.04,-2877.7 1169.88,-2877.7"/>
<text xml:space="preserve" text-anchor="start" x="1172.88" y="-2903.9" font-family="Arial" font-size="14.00" fill="#c9c9c9">raw TCP :18022</text>
<text xml:space="preserve" text-anchor="start" x="1172.88" y="-2883.1" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ TCP ]</text>
</g>
<!-- newt_1&#45;&gt;fbq -->
<g id="edge26" class="edge">
<title>newt_1&#45;&gt;fbq</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1065.37,-2755.66C1157.6,-2754.95 1276.03,-2754.15 1381.33,-2753.8 1537.75,-2753.27 1576.85,-2753.25 1733.27,-2753.8 1827.16,-2754.13 1932,-2754.85 2017.15,-2755.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2016.89,-2758.15 2024.41,-2755.58 2016.93,-2752.9 2016.89,-2758.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1512.67,-2753.8 1512.67,-2797 1601.93,-2797 1601.93,-2753.8 1512.67,-2753.8"/>
<text xml:space="preserve" text-anchor="start" x="1515.67" y="-2780" font-family="Arial" font-size="14.00" fill="#c9c9c9">HTTP :18450</text>
<text xml:space="preserve" text-anchor="start" x="1515.67" y="-2759.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt_2&#45;&gt;authentik -->
<g id="edge4" class="edge">
<title>newt_2&#45;&gt;authentik</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M924.88,-1539.01C967.64,-1355.42 1093.11,-940.74 1381.33,-770.8 1516.07,-691.35 1597.18,-693.7 1733.27,-770.8 1938.04,-886.81 1834.12,-1063.68 2005.48,-1225 2009.85,-1229.12 2014.44,-1233.1 2019.19,-1236.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2017.42,-1238.9 2024.95,-1241.44 2020.65,-1234.76 2017.42,-1238.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1482.7,-770.8 1482.7,-814 1631.9,-814 1631.9,-770.8 1482.7,-770.8"/>
<text xml:space="preserve" text-anchor="start" x="1485.7" y="-797" font-family="Arial" font-size="14.00" fill="#c9c9c9">authentik.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="1485.7" y="-776.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt_2&#45;&gt;core -->
<g id="edge9" class="edge">
<title>newt_2&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M946.17,-1718.83C982.78,-1789.63 1044.56,-1883.43 1130.59,-1927 1276.62,-2000.95 1732.76,-1977.55 1995.19,-1956.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1995.32,-1959.27 2002.58,-1956.05 1994.9,-1954.04 1995.32,-1959.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1487.77,-1977.43 1487.77,-2020.63 1626.83,-2020.63 1626.83,-1977.43 1487.77,-1977.43"/>
<text xml:space="preserve" text-anchor="start" x="1490.77" y="-2003.63" font-family="Arial" font-size="14.00" fill="#c9c9c9">komo.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1490.77" y="-1982.83" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt_2&#45;&gt;infisical -->
<g id="edge7" class="edge">
<title>newt_2&#45;&gt;infisical</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1065.41,-1629C1307.95,-1629 1768.57,-1629 2017.11,-1629"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2016.79,-1631.63 2024.29,-1629 2016.79,-1626.38 2016.79,-1631.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1481.94,-1629 1481.94,-1672.2 1632.66,-1672.2 1632.66,-1629 1481.94,-1629"/>
<text xml:space="preserve" text-anchor="start" x="1484.94" y="-1655.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">infisical.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1484.94" y="-1634.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- terraria&#45;&gt;fbq -->
<g id="edge25" class="edge">
<title>terraria&#45;&gt;fbq</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1717.16,-2902.67C1808.92,-2874.17 1924.29,-2838.34 2017.65,-2809.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2018.2,-2811.93 2024.59,-2807.2 2016.65,-2806.91 2018.2,-2811.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1819.69,-2871.97 1819.69,-2894.77 1919.05,-2894.77 1919.05,-2871.97 1819.69,-2871.97"/>
<text xml:space="preserve" text-anchor="start" x="1822.69" y="-2877.77" font-family="Arial" font-size="14.00" fill="#c9c9c9">stores its world</text>
</g>
<!-- core&#45;&gt;periphery_4 -->
<g id="edge10" class="edge">
<title>core&#45;&gt;periphery_4</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M2368.97,-1939C2474.82,-1939 2608.38,-1939 2715.87,-1939"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="2715.66,-1941.63 2723.16,-1939 2715.66,-1936.38 2715.66,-1941.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2438.64,-1939 2438.64,-1961.8 2656.33,-1961.8 2656.33,-1939 2438.64,-1939"/>
<text xml:space="preserve" text-anchor="start" x="2441.64" y="-1944.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">TLS :8120, pinned core public key</text>
</g>
<!-- core&#45;&gt;forgejo -->
<g id="edge14" class="edge">
<title>core&#45;&gt;forgejo</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2207.59,-2028.88C2275.8,-2344.64 2512.34,-3432.29 2725.99,-4326 2778.41,-4545.28 2844.31,-4801.29 2880.15,-4939.03"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2877.59,-4939.62 2882.02,-4946.21 2882.67,-4938.29 2877.59,-4939.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2474.84,-4002.15 2474.84,-4024.95 2620.12,-4024.95 2620.12,-4002.15 2474.84,-4002.15"/>
<text xml:space="preserve" text-anchor="start" x="2477.84" y="-4007.95" font-family="Arial" font-size="14.00" fill="#c9c9c9">syncs stack definitions</text>
</g>
<!-- newt_4&#45;&gt;medialib -->
<g id="edge30" class="edge">
<title>newt_4&#45;&gt;medialib</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1065.51,-6013.21C1160.31,-6007.38 1280.86,-5999.96 1378.77,-5993.93"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1378.73,-5996.56 1386.06,-5993.48 1378.41,-5991.32 1378.73,-5996.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1194.13,-6008.92 1194.13,-6052.12 1252.8,-6052.12 1252.8,-6008.92 1194.13,-6008.92"/>
<text xml:space="preserve" text-anchor="start" x="1197.13" y="-6037.52" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
<text xml:space="preserve" text-anchor="start" x="1197.13" y="-6014.32" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- medialib&#45;&gt;infisical -->
<g id="edge31" class="edge">
<title>medialib&#45;&gt;infisical</title>
<path fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="1,5" d="M1684.55,-5893.05C1704.23,-5873 1721.81,-5850.14 1733.27,-5825 1811.44,-5653.54 1754.55,-2617.09 1798.27,-2433.8 1863.11,-2161.98 2028.83,-1874.16 2121.33,-1727.48"/>
<polygon fill="#64748b" stroke="#64748b" stroke-width="2" points="2123.36,-1729.18 2125.15,-1721.44 2118.92,-1726.37 2123.36,-1729.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1839.7,-2433.8 1839.7,-2477 1899.05,-2477 1899.05,-2433.8 1839.7,-2433.8"/>
<text xml:space="preserve" text-anchor="start" x="1842.7" y="-2460" font-family="Arial" font-size="14.00" fill="#cbd5e1">/stream</text>
<text xml:space="preserve" text-anchor="start" x="1842.7" y="-2439.2" font-family="Arial" font-size="12.00" fill="#cbd5e1">[ Infisical ]</text>
</g>
<!-- newt_5&#45;&gt;woodpecker -->
<g id="edge19" class="edge">
<title>newt_5&#45;&gt;woodpecker</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M948.75,-4362.97C986.24,-4432.12 1047.92,-4523.58 1130.59,-4571 1364.5,-4705.16 1470.34,-4580.98 1733.27,-4640.8 1829.33,-4662.65 1933.46,-4697.72 2017.63,-4729.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2016.49,-4731.47 2024.43,-4731.64 2018.33,-4726.55 2016.49,-4731.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1496.33,-4640.8 1496.33,-4684 1618.27,-4684 1618.27,-4640.8 1496.33,-4640.8"/>
<text xml:space="preserve" text-anchor="start" x="1499.33" y="-4667" font-family="Arial" font-size="14.00" fill="#c9c9c9">peck.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="1499.33" y="-4646.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt_5&#45;&gt;komodomcp -->
<g id="edge20" class="edge">
<title>newt_5&#45;&gt;komodomcp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1065.51,-4187.38C1160.78,-4136.06 1282.07,-4070.72 1380.24,-4017.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1381.34,-4020.23 1386.7,-4014.36 1378.85,-4015.61 1381.34,-4020.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1130.59,-4149.8 1130.59,-4193 1316.33,-4193 1316.33,-4149.8 1130.59,-4149.8"/>
<text xml:space="preserve" text-anchor="start" x="1133.59" y="-4176" font-family="Arial" font-size="14.00" fill="#c9c9c9">komodo&#45;mcp.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1133.59" y="-4155.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt_5&#45;&gt;openproject -->
<g id="edge21" class="edge">
<title>newt_5&#45;&gt;openproject</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M942.69,-4362.66C979.51,-4444.5 1043.56,-4564.22 1130.59,-4642 1204.19,-4707.77 1303.53,-4755.42 1387.73,-4787.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1386.61,-4789.75 1394.56,-4789.93 1388.46,-4784.84 1386.61,-4789.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1153.92,-4756.56 1153.92,-4799.76 1293,-4799.76 1293,-4756.56 1153.92,-4756.56"/>
<text xml:space="preserve" text-anchor="start" x="1156.92" y="-4782.76" font-family="Arial" font-size="14.00" fill="#c9c9c9">openprj.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="1156.92" y="-4761.96" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt_5&#45;&gt;docuseal -->
<g id="edge22" class="edge">
<title>newt_5&#45;&gt;docuseal</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M916.98,-4362.86C936.79,-4497.62 991.15,-4753.77 1130.59,-4918 1198.27,-4997.7 1300.63,-5054.48 1388.03,-5091.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1386.8,-5094.12 1394.73,-5094.62 1388.84,-5089.29 1386.8,-5094.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1149.25,-5052.86 1149.25,-5096.06 1297.67,-5096.06 1297.67,-5052.86 1149.25,-5052.86"/>
<text xml:space="preserve" text-anchor="start" x="1152.25" y="-5079.06" font-family="Arial" font-size="14.00" fill="#c9c9c9">docuseal.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="1152.25" y="-5058.26" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt_5&#45;&gt;paperless -->
<g id="edge23" class="edge">
<title>newt_5&#45;&gt;paperless</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1065.41,-4273C1307.95,-4273 1768.57,-4273 2017.11,-4273"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2016.79,-4275.63 2024.29,-4273 2016.79,-4270.38 2016.79,-4275.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1486.99,-4273 1486.99,-4316.2 1627.61,-4316.2 1627.61,-4273 1486.99,-4273"/>
<text xml:space="preserve" text-anchor="start" x="1489.99" y="-4299.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">paper.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="1489.99" y="-4278.4" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt_5&#45;&gt;forgejo -->
<g id="edge18" class="edge">
<title>newt_5&#45;&gt;forgejo</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M910.94,-4362.93C924.58,-4601.02 975.19,-5238.24 1130.59,-5365 1158.42,-5387.7 2331.41,-5480.09 2660.99,-5323 2743.03,-5283.9 2808.5,-5203.09 2851.1,-5137.64"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2853.22,-5139.19 2855.06,-5131.47 2848.8,-5136.36 2853.22,-5139.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1819.69,-5412.65 1819.69,-5455.85 1919.06,-5455.85 1919.06,-5412.65 1819.69,-5412.65"/>
<text xml:space="preserve" text-anchor="start" x="1822.69" y="-5438.85" font-family="Arial" font-size="14.00" fill="#c9c9c9">fj.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="1822.69" y="-5418.05" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- woodpecker&#45;&gt;forgejo -->
<g id="edge17" class="edge">
<title>woodpecker&#45;&gt;forgejo</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M2347.15,-4850.56C2462.97,-4889.59 2619.62,-4942.38 2737.65,-4982.16"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="2736.69,-4984.61 2744.64,-4984.51 2738.37,-4979.63 2736.69,-4984.61"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2433.98,-4953.82 2433.98,-4997.02 2660.99,-4997.02 2660.99,-4953.82 2433.98,-4953.82"/>
<text xml:space="preserve" text-anchor="start" x="2436.98" y="-4980.02" font-family="Arial" font-size="14.00" fill="#d4f2ff">OAuth2 login and repository access</text>
<text xml:space="preserve" text-anchor="start" x="2436.98" y="-4959.22" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ OIDC ]</text>
</g>
<!-- komodomcp&#45;&gt;core -->
<g id="edge24" class="edge">
<title>komodomcp&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1685.66,-3833.06C1704.69,-3813.81 1721.77,-3791.96 1733.27,-3768 1859.8,-3504.49 1698.74,-2729.05 1798.27,-2454.2 1858.18,-2288.75 1990.74,-2132.28 2084.17,-2036.11"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2085.92,-2038.08 2089.28,-2030.88 2082.16,-2034.42 2085.92,-2038.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1827.07,-2454.2 1827.07,-2477 1911.67,-2477 1911.67,-2454.2 1827.07,-2454.2"/>
<text xml:space="preserve" text-anchor="start" x="1830.07" y="-2460" font-family="Arial" font-size="14.00" fill="#c9c9c9">Komodo API</text>
</g>
<!-- openproject&#45;&gt;postgres -->
<g id="edge15" class="edge">
<title>openproject&#45;&gt;postgres</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1717.16,-4906.8C1804.97,-4944.28 1914.41,-4990.99 2005.48,-5029.86"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2004.37,-5032.24 2012.3,-5032.77 2006.43,-5027.41 2004.37,-5032.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1824.35,-4997 1824.35,-5019.8 1914.39,-5019.8 1914.39,-4997 1824.35,-4997"/>
<text xml:space="preserve" text-anchor="start" x="1827.35" y="-5002.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
<!-- docuseal&#45;&gt;postgres -->
<g id="edge16" class="edge">
<title>docuseal&#45;&gt;postgres</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1717.16,-5138.37C1804.71,-5132.52 1913.75,-5125.23 2004.65,-5119.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2004.75,-5121.77 2012.06,-5118.65 2004.4,-5116.53 2004.75,-5121.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1824.35,-5131.76 1824.35,-5154.56 1914.39,-5154.56 1914.39,-5131.76 1824.35,-5131.76"/>
<text xml:space="preserve" text-anchor="start" x="1827.35" y="-5137.56" font-family="Arial" font-size="14.00" fill="#c9c9c9">[PostgreSQL]</text>
</g>
</g>
</svg>
`;case`controlplane`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1816pt" height="1386pt"
 viewBox="0.00 0.00 1816.00 1386.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1371.45)">
<g id="clust1" class="cluster">
<title>cluster_rick</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1348.4 1778,-1348.4 1778,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1335.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">RICK</text>
</g>
<!-- pangolin -->
<g id="node1" class="node">
<title>pangolin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="378.02,-1277.2 57.98,-1277.2 57.98,-1097.2 378.02,-1097.2 378.02,-1277.2"/>
<text xml:space="preserve" text-anchor="start" x="179.08" y="-1179.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Pangolin</text>
</g>
<!-- homarr -->
<g id="node2" class="node">
<title>homarr</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="828.02,-924 507.98,-924 507.98,-744 828.02,-744 828.02,-924"/>
<text xml:space="preserve" text-anchor="start" x="634.67" y="-826" font-family="Arial" font-size="20.00" fill="#eff6ff">Homarr</text>
</g>
<!-- databasus -->
<g id="node3" class="node">
<title>databasus</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1278.02,-924 957.98,-924 957.98,-744 1278.02,-744 1278.02,-924"/>
<text xml:space="preserve" text-anchor="start" x="1070.19" y="-826" font-family="Arial" font-size="20.00" fill="#eff6ff">Databasus</text>
</g>
<!-- tsagent -->
<g id="node4" class="node">
<title>tsagent</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1728.02,-924 1407.98,-924 1407.98,-744 1728.02,-744 1728.02,-924"/>
<text xml:space="preserve" text-anchor="start" x="1499.63" y="-835.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Tailscale Agent</text>
<text xml:space="preserve" text-anchor="start" x="1538.02" y="-814.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
</g>
<!-- newt -->
<g id="node5" class="node">
<title>newt</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="378.02,-924 57.98,-924 57.98,-744 378.02,-744 378.02,-924"/>
<text xml:space="preserve" text-anchor="start" x="195.22" y="-855.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Newt</text>
<text xml:space="preserve" text-anchor="start" x="188.02" y="-834.8" font-family="Arial" font-size="13.00" fill="#bfdbfe">Wireguard</text>
<text xml:space="preserve" text-anchor="start" x="92.93" y="-813.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Site connector, installed per host as a</text>
<text xml:space="preserve" text-anchor="start" x="121.29" y="-795.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">systemd unit by infra.ansible.</text>
</g>
<!-- authentik -->
<g id="node6" class="node">
<title>authentik</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="906.02,-570.8 585.98,-570.8 585.98,-390.8 906.02,-390.8 906.02,-570.8"/>
<text xml:space="preserve" text-anchor="start" x="704.31" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Authentik</text>
</g>
<!-- infisical -->
<g id="node7" class="node">
<title>infisical</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1356.02,-570.8 1035.98,-570.8 1035.98,-390.8 1356.02,-390.8 1356.02,-570.8"/>
<text xml:space="preserve" text-anchor="start" x="1162.66" y="-472.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Infisical</text>
</g>
<!-- core -->
<g id="node8" class="node">
<title>core</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="421.75,-570.8 58.25,-570.8 58.25,-390.8 421.75,-390.8 421.75,-570.8"/>
<text xml:space="preserve" text-anchor="start" x="218.33" y="-492.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Core</text>
<text xml:space="preserve" text-anchor="start" x="98.25" y="-469.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">The hub: holds stack definitions and drives</text>
<text xml:space="preserve" text-anchor="start" x="195.39" y="-451.8" font-family="Arial" font-size="15.00" fill="#b6ecf7">every deploy.</text>
</g>
<!-- periphery -->
<g id="node9" class="node">
<title>periphery</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="421.32,-238 58.68,-238 58.68,-58 421.32,-58 421.32,-238"/>
<text xml:space="preserve" text-anchor="start" x="197.2" y="-160" font-family="Arial" font-size="20.00" fill="#f0f9ff">Periphery</text>
<text xml:space="preserve" text-anchor="start" x="98.68" y="-137" font-family="Arial" font-size="15.00" fill="#b6ecf7">Per&#45;host agent, installed as a systemd unit</text>
<text xml:space="preserve" text-anchor="start" x="187.47" y="-119" font-family="Arial" font-size="15.00" fill="#b6ecf7">by infra.ansible.</text>
</g>
<!-- zerobyte -->
<g id="node10" class="node">
<title>zerobyte</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1278.02,-1277.2 957.98,-1277.2 957.98,-1097.2 1278.02,-1097.2 1278.02,-1277.2"/>
<text xml:space="preserve" text-anchor="start" x="1078.54" y="-1189" font-family="Arial" font-size="20.00" fill="#eff6ff">Zerobyte</text>
<text xml:space="preserve" text-anchor="start" x="1099.94" y="-1168" font-family="Arial" font-size="13.00" fill="#bfdbfe">Restic</text>
</g>
<!-- pangolin&#45;&gt;newt -->
<g id="edge1" class="edge">
<title>pangolin&#45;&gt;newt</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M218,-1097.58C218,-1047.86 218,-985.71 218,-934.35"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="220.63,-934.43 218,-926.93 215.38,-934.43 220.63,-934.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="218,-989 218,-1032.2 338.39,-1032.2 338.39,-989 218,-989"/>
<text xml:space="preserve" text-anchor="start" x="221" y="-1015.2" font-family="Arial" font-size="14.00" fill="#d4f2ff">WireGuard :51820</text>
<text xml:space="preserve" text-anchor="start" x="221" y="-994.4" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ WireGuard ]</text>
</g>
<!-- homarr&#45;&gt;authentik -->
<g id="edge2" class="edge">
<title>homarr&#45;&gt;authentik</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M687.68,-744.38C698.75,-694.56 712.59,-632.25 724.01,-580.83"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="726.54,-581.55 725.6,-573.65 721.41,-580.41 726.54,-581.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="711.67,-635.8 711.67,-679 839.08,-679 839.08,-635.8 711.67,-635.8"/>
<text xml:space="preserve" text-anchor="start" x="714.67" y="-662" font-family="Arial" font-size="14.00" fill="#d4f2ff">authenticates users</text>
<text xml:space="preserve" text-anchor="start" x="714.67" y="-641.2" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ OIDC ]</text>
</g>
<!-- databasus&#45;&gt;authentik -->
<g id="edge3" class="edge">
<title>databasus&#45;&gt;authentik</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M958.24,-749.82C930.49,-729.67 904.13,-706 884,-679 872.02,-662.92 880.38,-653.52 871,-635.8 860.75,-616.45 847.88,-597.21 834.32,-579.22"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="834.2,-579.06 829.08,-577.32 828.72,-571.92 833.84,-573.66 834.2,-579.06"/>
</g>
<!-- databasus&#45;&gt;infisical -->
<g id="edge6" class="edge">
<title>databasus&#45;&gt;infisical</title>
<path fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="1,5" d="M1148.98,-744.1C1155.6,-722.95 1162.07,-700.32 1167,-679 1174.25,-647.63 1180.06,-613.02 1184.52,-581.67"/>
<polygon fill="#b45309" stroke="#b45309" stroke-width="2" points="1184.55,-581.42 1182.2,-576.55 1185.79,-572.51 1188.14,-577.38 1184.55,-581.42"/>
</g>
<!-- tsagent&#45;&gt;authentik -->
<g id="edge5" class="edge">
<title>tsagent&#45;&gt;authentik</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M1408.14,-745.96C1337.53,-709.36 1252.81,-667.91 1174,-635.8 1086.27,-600.05 1060.21,-602.69 971,-570.8 952.98,-564.36 934.25,-557.39 915.62,-550.29"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="916.67,-547.88 908.73,-547.65 914.79,-552.78 916.67,-547.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1262.45,-635.8 1262.45,-679 1404.66,-679 1404.66,-635.8 1262.45,-635.8"/>
<text xml:space="preserve" text-anchor="start" x="1265.45" y="-662" font-family="Arial" font-size="14.00" fill="#d4f2ff">exposes on the tailnet</text>
<text xml:space="preserve" text-anchor="start" x="1265.45" y="-641.2" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ shared__ts&#45;gateway ]</text>
</g>
<!-- tsagent&#45;&gt;infisical -->
<g id="edge8" class="edge">
<title>tsagent&#45;&gt;infisical</title>
<path fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,2" d="M1527.34,-744.07C1507.78,-707.66 1481.84,-666.88 1451,-635.8 1425.69,-610.3 1395.35,-587.29 1364.55,-567.31"/>
<polygon fill="#0ea5e9" stroke="#0ea5e9" stroke-width="2" points="1366.14,-565.21 1358.41,-563.39 1363.32,-569.64 1366.14,-565.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1487.07,-635.8 1487.07,-679 1629.28,-679 1629.28,-635.8 1487.07,-635.8"/>
<text xml:space="preserve" text-anchor="start" x="1490.07" y="-662" font-family="Arial" font-size="14.00" fill="#d4f2ff">exposes on the tailnet</text>
<text xml:space="preserve" text-anchor="start" x="1490.07" y="-641.2" font-family="Arial" font-size="12.00" fill="#d4f2ff">[ shared__ts&#45;gateway ]</text>
</g>
<!-- newt&#45;&gt;authentik -->
<g id="edge4" class="edge">
<title>newt&#45;&gt;authentik</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M351.58,-744.15C428.66,-692.88 525.55,-628.43 604.01,-576.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="605.2,-578.6 609.99,-572.26 602.3,-574.23 605.2,-578.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="513.61,-635.8 513.61,-679 662.8,-679 662.8,-635.8 513.61,-635.8"/>
<text xml:space="preserve" text-anchor="start" x="516.61" y="-662" font-family="Arial" font-size="14.00" fill="#c9c9c9">authentik.ktbcloud.com</text>
<text xml:space="preserve" text-anchor="start" x="516.61" y="-641.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt&#45;&gt;infisical -->
<g id="edge7" class="edge">
<title>newt&#45;&gt;infisical</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M377.82,-764.7C399.48,-756.95 421.61,-749.78 443,-744 628.75,-693.85 690.13,-744.62 871,-679 939.45,-654.16 1009.27,-614.1 1066.56,-576.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1067.95,-578.79 1072.76,-572.47 1065.05,-574.41 1067.95,-578.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="965.79,-635.8 965.79,-679 1116.51,-679 1116.51,-635.8 965.79,-635.8"/>
<text xml:space="preserve" text-anchor="start" x="968.79" y="-662" font-family="Arial" font-size="14.00" fill="#c9c9c9">infisical.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="968.79" y="-641.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- newt&#45;&gt;core -->
<g id="edge9" class="edge">
<title>newt&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M171.98,-744.12C159.87,-710.37 152.32,-671.48 160.95,-635.8 165.48,-617.02 172.73,-597.96 181.04,-579.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="183.32,-581.26 184.17,-573.36 178.58,-579 183.32,-581.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="160.95,-635.8 160.95,-679 300,-679 300,-635.8 160.95,-635.8"/>
<text xml:space="preserve" text-anchor="start" x="163.95" y="-662" font-family="Arial" font-size="14.00" fill="#c9c9c9">komo.ktbinternal.com</text>
<text xml:space="preserve" text-anchor="start" x="163.95" y="-641.2" font-family="Arial" font-size="12.00" fill="#c9c9c9">[ HTTPS ]</text>
</g>
<!-- core&#45;&gt;periphery -->
<g id="edge10" class="edge">
<title>core&#45;&gt;periphery</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M240,-391.15C240,-347.12 240,-293.76 240,-248.35"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="242.63,-248.42 240,-240.92 237.38,-248.42 242.63,-248.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="240,-303 240,-325.8 457.69,-325.8 457.69,-303 240,-303"/>
<text xml:space="preserve" text-anchor="start" x="243" y="-308.8" font-family="Arial" font-size="14.00" fill="#bbfcd3">TLS :8120, pinned core public key</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};