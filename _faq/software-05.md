---
layout: default
title: What level of signal diversity/encoding is there to protect from interference from other acoustic equipment? (i.e. what’s the chip length of the encoding and how many channels are therefore available without interference).
faq_section: software
---

We use LDPC-coded OFDM as the primary communication method. We have LDPC-coded FH-BFSK as a secondary slower but more robust method. Both methods are used with special reception techniques to make them more robust to noise (Singapore waters are very noisy), but if we have some information on the noise you expect from acoustic equipment, that would be helpful in tuning the reception chains, if necessary. If you have more than 2 modems in the water, we have medium access control (MAC) algorithms built-in to coordinate transmissions.