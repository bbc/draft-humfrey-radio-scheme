---
title: "URI Schemes for Broadcast Radio Services"
abbrev: "Radio URI Schemes"
docname: draft-humfrey-radio-scheme-latest
date: {DATE}
author:
    -
      ins: N. Humfrey
      name: Nicholas Humfrey
      org: British Broadcasting Corporation
      email: nicholas.humfrey@bbc.co.uk

ipr: trust200902
category: info
area: Applications and Real-Time
keyword: Internet-Draft
stand_alone: yes
pi: [toc, tocindent, sortrefs, symrefs, strict, compact, subcompact, comments, inline]

normative:
    RFC2119:
    RFC8174:

informative:


--- abstract

This document describes Uniform Resource Identifier schemes which enable
representations of broadcast radio services.

--- middle

# Introduction



## Notational Conventions

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this
document are to be interpreted as described in BCP 14 {{!RFC2119}} {{!RFC8174}}
when, and only when, they appear in all capitals, as shown here.

# Scheme Syntax

~~~abnf

broadcast-radio-uri = amss-uri / dab-uri / drm-uri / fm-uri

amss-uri    = amss-prefix amss-sid
amss-prefix = "amss" prefix-delimiter
amss-sid    = 6HEXDIG

dab-uri    = dab-prefix gcc "."  eid "." dab-sid "." scids [ "." uatype ]
dab-prefix = "dab" prefix-delimiter
dab-sid    = 4HEXDIG / 8HEXDIG
eid        = 4HEXDIG
scids      = 1HEXDIG

drm-uri    = drm-prefix drm-sid [ "." appdomain "." uatype ]
drm-prefix = "drm" prefix-delimiter
drm-sid    = 6HEXDIG
appdomain  = 1HEXDIG

fm-uri    = fm-prefix gcc "." pi "." frequency
fm-prefix = "fm" prefix-delimiter
pi        = 4HEXDIG
frequency = 5DIGIT / "*"

prefix-delimiter = ":"
gcc    = 3HEXDIG
uatype = 3HEXDIG

~~~

## The AM Signalling System (AMSS) Scheme

## The Digital Audio Broadcasting (DAB) Scheme

## The Digital Radio Mondiale (DRM) Scheme

## The VHF/FM URI Scheme

# IANA Considerations

There are no IANA considerations.

# Security Considerations

There are no security considerations.

--- back
