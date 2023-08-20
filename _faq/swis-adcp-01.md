---
layout: default
title: What is the typical battery capacity required for a deployment?
faq_section: swis-adcp
---

This depends on the usage of the overall solution. SWIS - ADCP edition ships with three preconfigured schedules. They are listed below with typical weekly power consumption for each of them. Users can calculate their battery needs based on these.

### Schedule 1

The bottom node wakes up every 6 hours after deployment (starting from 12 midnight), syncs the files, waits for 5 mins for commands from the topside unit and goes back to sleep. For use when both topside and bottom side units are deployed in fixed locations.

*Estimated power consumption: 110 WHrs/week*


### Schedule 2

The bottom node wakes up every Monday, Wednesday and Friday at 3 pm, syncs the files, waits for 1 hour for a topside unit to download files and goes back to sleep. For use when there is a specific operational schedule. E.g. The Topside unit is deployed from a boat that passes by the deployment location at a specific time.

*Estimated power consumption: 60 WHrs/week*


### Schedule 3

Once deployed, the bottom node wakes up once at the beginning of every hour between 9am - 5pm (e.g. 9:00 - 9:05, 10:00 - 10:05 …), syncs the files, waits for 5 minutes for a topside unit to download files and goes back to sleep if it doesn't detect any. As soon as the file download operation is completed, the bottom node will enter sleep till the next cycle.

*Estimated power consumption: 80 WHrs/week*