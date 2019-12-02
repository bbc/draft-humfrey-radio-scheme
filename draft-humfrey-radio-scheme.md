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
    "ETSI.TS.101.756":
        title: Digital Audio Broadcasting (DAB);Registered Tables
        target: https://www.etsi.org/deliver/etsi_ts/101700_101799/101756/02.01.01_60/ts_101756v020101p.pdf
        date: January 2017
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

This document uses the Augmented Backus-Naur Form (ABNF) notation of {{RFC5234}}.

# Scheme Syntax

~~~abnf
broadcast-radio-uri = amss-uri / dab-uri / drm-uri / fm-uri
prefix-delimiter = ":"
gcc    = 3HEXDIG
uatype = 3HEXDIG
~~~

gcc:
 : The Global Country Code of the country of origin of the service, which is
   calculated as described in Annex A of {{ETSI.TS.103.270}}

uatype:
 : The user application of the data component, used to identify the user
   application which should be used to decode the data indicated by the
   `service-id` and `scids`. List of valid user application types is defined in
   {{ETSI.TS.101.756}} Section 5.10.

## The AM Signalling System (AMSS) Scheme

AM Signalling System {{ETSI.TS.102.386}} URI scheme comprises only of the
Service Identifier.

~~~abnf
amss-uri    = amss-prefix amss-sid
amss-prefix = "amss" prefix-delimiter
amss-sid    = 6HEXDIG
~~~

amss-sid:
 : The Service Identifier of the service

## The Digital Audio Broadcasting (DAB) Scheme

~~~abnf
dab-uri    = dab-prefix gcc "."  eid "." dab-sid "." scids [ "." uatype ]
dab-prefix = "dab" prefix-delimiter
dab-sid    = 4HEXDIG / 8HEXDIG
eid        = 4HEXDIG
scids      = 1HEXDIG
~~~

eid:
 : The Ensemble Identifier of the service

scids:
 : The Service Component Identifier with the Service

## The Digital Radio Mondiale (DRM) Scheme

~~~abnf
drm-uri    = drm-prefix drm-sid [ "." appdomain "." uatype ]
drm-prefix = "drm" prefix-delimiter
drm-sid    = 6HEXDIG
appdomain  = 1HEXDIG
~~~

appdomain:
 : The application domain of the data component

drm-sid:
 : The Service Identifier of the service

## The VHF/FM URI Scheme

~~~abnf
fm-uri    = fm-prefix gcc "." pi "." frequency
fm-prefix = "fm" prefix-delimiter
pi        = 4HEXDIG
frequency = 5DIGIT / "*"
~~~

pi:
 : Received RDS/RBDS Programme Identification (PI) code

frequency:
  : Frequency on which the broadcast is received, formatted to 5 characters in
    units of 100 KHz. Frequencies below 100 MHz MUST include a leading zero, for
    example 90.2 MHz would be represented as "09020".

# IANA Considerations

This document kindly requests the following existing URI Schemes be updated
so their references now refer to this document:

* amss
* dab
* drm
* fm

# Security Considerations

There are no security considerations.

--- back
