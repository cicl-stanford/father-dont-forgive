# Father, don't forgive them

This repository contains the experiment, data, analyses and figured for the paper CogSci 2023 paper "Father, don't forgive them, for they could have known what they're doing" by Lara Kirfel, Xenia Bunk, Ro'i Zultan and Tobias Gerstenberg.

## Abstract

What someone knew matters for how we hold them responsible. In three studies, we explore people’s responsibility judgments for negative outcomes to knowledgeable versus ignorant agents. We manipulate whether agents arrived at their knowledge state unintentionally or willfully. In Experiment 1, agents who knew about the harmful consequences of their actions were judged highly responsible no matter how they came to know. In contrast, willfully ignorant agents were judged more responsible than unintentionally ignorant agents. Participants inferred that willfully ignorant agents were more likely to believe that their action might cause harm. When we explicitly stipulate the agents’ beliefs in Experiment 2, the ‘willful ignorance’ effect reduces but persists. Participants inferred that the willfully ignorant agent was more likely to have acted anyhow even if they had known. Explicitly stating whether the agent’s action depended on their knowledge further reduced the ‘willful ignorance’ effect in Experiment 3

## Repository structure 

```
├── code
│   ├── R
│   ├── bash
│   ├── experiments
│   └── python
├── data
├── docs
│   ├── experiment1
│   ├── experiment2a
│   ├── experiment2b
│   └── experiment3
└── figures
    └── plots
```

### code 

Contains all code including the R code for analyzing data and generating figures, written in R. 
See the rendered file <a href="https://cicl-stanford.github.io/father-dont-forgive/">here</a>.


### docs

contains all the experiment code. You can preview the experiments below:

Experiment 1: <a href="https://cicl-stanford.github.io/father-dont-forgive/experiment1/index.html?condition=1">Click here!</a>

Experiment 2a: <a href="https://cicl-stanford.github.io/father-dont-forgive/experiment2a/index.html?condition=1">Click here!</a>

Experiment 2b: <a href="https://cicl-stanford.github.io/father-dont-forgive/experiment2b/index.html?condition=1">Click here!</a>

Experiment 3: <a href="https://cicl-stanford.github.io/father-dont-forgive/experiment3/index.html?condition=1">Click here!</a>


### data 

contains anonymized data from all experiments. For each experiment:

<code>[...]study_X-responses.csv</code> contains the response data (i.e. responsibilty judgments).

<code>[...]study_X-participants.csv</code> contains demographic information and post-experiment feedback/comments from participants.

### figures 

contains all the figures from the paper (generated using the script in code/R).


