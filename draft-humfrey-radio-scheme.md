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
keyword: Internet-Draft
stand_alone: yes
pi: [toc, tocindent, sortrefs, symrefs, strict, compact, subcompact, comments, inline]

normative:
    RFC2119:
    RFC8174:

informative:
    RFC5234:
    "ETSI.TS.103.270":
        title: RadioDNS Hybrid Radio; Hybrid lookup for radio services
        target: https://www.etsi.org/deliver/etsi_ts/103200_103299/103270/01.03.01_60/ts_103270v010301p.pdf
        date: May 2019
    "ETSI.EN.300.401":
        title: Radio Broadcasting Systems; Digital Audio Broadcasting (DAB) to mobile, portable and fixed receivers
        target: https://www.etsi.org/deliver/etsi_en/300400_300499/300401/02.01.01_60/en_300401v020101p.pdf
        date: January 2017
    "ETSI.ES.201.980":
        title: Digital Radio Mondiale (DRM); System Specification
        target: https://www.etsi.org/deliver/etsi_es/201900_201999/201980/04.01.02_60/es_201980v040102p.pdf
        date: April 2017
    "ETSI.TS.102.386":
        title: Digital Radio Mondiale (DRM); AM signalling system (AMSS)
        target: https://www.etsi.org/deliver/etsi_ts/102300_102399/102386/01.02.01_60/ts_102386v010201p.pdf
        date: March 2006
    "ITU-R.BS.450":
        title: Transmission standards for FM sound broadcasting at VHF
        target: https://www.itu.int/dms_pubrec/itu-r/rec/bs/R-REC-BS.450-4-201910-I!!PDF-E.pdf
        date: October 2019
    "EN0.50067":
        title: Specification of the radio data system (RDS) for VHF/FM sound broadcasting in the frequency range from 87.5 to 108.0 MHz
        target: http://www.interactive-radio-system.com/docs/EN50067_RDS_Standard.pdf
        date: April 1998

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
