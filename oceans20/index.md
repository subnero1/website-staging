---
layout: page
title: Subnero @ Oceans 20
permalink: /oceans20
banner: images/banner-about.jpg
---

<h1 style="font-size: 32px;">Practical Underwater Software-defined Networking</h1>

Hello Oceans 20 attendees!

Welcome to the tutorial on **_Practical Underwater Software-defined Networking_**. Please read through the following page before or during the tutorial to better organize your learning through this virutal tutorial.

This page provides the link to the relevant code, slides and an optional questionnaire (for those who require CEU credits).

## Overview

This tutorial contains 6 parts. The PART 1 and PART 2 covers basics of setting up and using two and three node network. PART 3 expands this small network to a partially connected network by introducing more nodes and routes are established among nodes to achieve communication between nodes over multihop. PART 4 delves into the details of what a datagram and protocol constitutes and utilizes these concepts in getting data from a sensor node underwater to a node connected over internet on land. In PART 5, we utilize the network of nodes to localize a node and finally in PART 6, the summary and conclusions are presented.

## Slides

The following links provide the slides used for each of the parts.

[Slides for PART 1](tutorial-part-1.pdf)\
[Slides for PART 2](tutorial-part-2.pdf)\
[Slides for PART 3](tutorial-part-3.pdf)\
[Slides for PART 4](tutorial-part-4.pdf)\
[Slides for PART 5](tutorial-part-5.pdf)\
[Slides for PART 6](tutorial-part-6.pdf)

## Hands-on sessions

PART 3, PART 4 and PART 5 involve hands-on sessions for the participants of this tutorial to try.

1. PART 3 contains 3 hands-on sessions:
	- Demo 3.1
	- Demo 3.2
	- Demo 3.3
2. PART 4 contains 2 hands-on sessions:
	- Demo 4.1
	- Demo 4.2
3. PART 5 contains 2 hands-on sessions:
	- Demo 5.1
	- Demo 5.2

It is highly recommended that the participants run through this hands-on sessions as explained through the series of these videos to gain a better understanding.

## Code

To carry out the hands-on sessions in PART 3, PART 4 and PART 5, the participants will need to download the relevant code and set it up on their respective machines. All the software resources needed that are needed is provided at the following [link](https://github.com/subnero1/wnc-sw/tree/master/projects/oceans-tutorial-2020). We will explain how to use this next.

### Download Unet Simulator

Visit the [link](https://github.com/subnero1/wnc-sw/tree/master/projects/oceans-tutorial-2020) and download `unet-3.1.0` folder to your machine.

### Resources and code for PART 3

The `unet-3.1.0/samples/tutorial-network-part3.groovy` is the simulation script used in PART 3 session. Follow the instructions in the video to start the simulation and run this script.

### Resources and code for PART 4

The `unet-3.1.0/samples/tutorial-network-part4.groovy` is the simulation script used in PART 4 session. Follow the instructions in the video to start the simulation and run this script.

In addition, `sensor.py` is a Python script which simulates a sensor in Part 4. Download this file again from [here](https://github.com/subnero1/wnc-sw/tree/master/projects/oceans-tutorial-2020).

Also, the code snippets used to create and run the various demos in Part 4 are available [here](https://github.com/subnero1/wnc-sw/blob/master/projects/oceans-tutorial-2020/code-part4.md).

### Resources and code for PART 5

The `unet-3.1.0/samples/tutorial-network-part5.groovy` is the simulation script used in PART 5 session. Follow the instructions in the video to start the simulation and run this script.

In addition, `tutorial2020.ipynb` is a jupyter notebook used in the Part 5 session on Localization. Download this file from [here](https://github.com/subnero1/wnc-sw/tree/master/projects/oceans-tutorial-2020).

To run this jupyter notebook, follow the instructions in the video carefully. You may also follow the steps provided here:

	- Install `unetpy` and `fjagepy` using `pip install unetpy`
	- Install `arlpy` using `pip install arlpy`
	- Make sure `scipy` is installed, if not install `scipy` using `pip install scipy`
	- If you want to run the jupyter notebook as shown in the video, install jupyter by following the instructions [here](https://jupyter.org/install).

## Questionnaire

This questionnaire is *ONLY REQUIRED* for those who require CEU credits. For those who do not require credits, this questionnaire is optional.

## Videos

Access the videos at Global Oceans 2020 virtual platform.
