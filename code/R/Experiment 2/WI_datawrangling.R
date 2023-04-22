# Willful Ignorance

# Data Wrangling 


# # Set working directory 
#setwd("~/Desktop/willful ignorance")

# # Load packages

library(psych)
library(dplyr)
library(tidyverse)
library(tibble)
library(pwr)
library(car)
library("brms")        # for Bayesian regression modeling
library("tidybayes")   # for Bayesian regression modeling

# # Read data
participants2 <- read.csv(file="willful_ignorance_full_study_2-participants.csv") %>% 
  select(-c(proliferate.condition, error))

participants3 <- read.csv(file="willful_ignorance_full_study_3-participants.csv") %>% 
  select(-c(proliferate.condition, error))


responses2 <- read.csv(file="willful_ignorance_full_study_2-responses.csv") %>% 
  select(-c(proliferate.condition, error))

responses3 <- read.csv(file="willful_ignorance_full_study_3-responses.csv") %>% 
  select(-c(proliferate.condition, error, 
            ignorance_scenario1, ignorance_scenario2, 
            ignorance_scenario1_response_counterfactual,
            ignorance_scenario2_response_counterfactual))


# # Merge participants and responses files 
Data2.df <- merge(responses2, participants2, by="workerid") 
Data3.df <- merge(responses3, participants3, by="workerid") 
Data2.df$study <- "Study 2"
Data3.df$study <- "Study 3"
#Data2.df$ignorance_scenario1 <- NA
#Data2.df$ignorance_scenario2 <- NA
#Data2.df$ignorance_scenario1_response_counterfactual <- NA
#Data2.df$ignorance_scenario2_response_counterfactual <- NA


Data3b.df <- rbind(Data2.df, Data3.df) 

# # New columns with condition information 
Exp3.df <- Data3b.df  %>% 
  gather("index", "value", -c(workerid, condition, age, ethnicity, gender, feedback, race, study))%>% 
  mutate(scenario_order  =
           case_when(
             str_detect(index, "1") ~ "1",
             str_detect(index, "2") ~ "2",
             str_detect(index, "3") ~ "3",
             str_detect(index, "4") ~ "4",
           )) %>% 
mutate(index =
         case_when(
           str_detect(index, "_response_first") ~ "responsibility_rating",
           str_detect(index, "_response_second") ~ "belief_rating",
           str_detect(index, "scenario") ~ "scenario") ## order important, do not change
         ) %>% 
spread(index, value) %>%
mutate(EpistemicCondition  =
           case_when(
        condition == "condition1" & scenario ==  "sunscreen"~ "Willful Ignorance",
        condition == "condition1" & scenario ==  "laundry"~ "Ignorance",
        condition == "condition1" & scenario ==  "paint"~ "Willful Knowledge",
        condition == "condition1" & scenario ==  "fertilizer"~ "Knowledge",
        condition == "condition2" & scenario ==  "sunscreen"~ "Knowledge",
        condition == "condition2" & scenario ==  "laundry"~ "Willful Knowledge",
        condition == "condition2" & scenario ==  "paint"~ "Willful Ignorance",
        condition == "condition2" & scenario ==  "fertilizer"~ "Ignorance",
        condition == "condition3" & scenario ==  "sunscreen"~ "Ignorance",
        condition == "condition3" & scenario ==  "laundry"~ "Willful Ignorance",
        condition == "condition3" & scenario ==  "paint"~ "Knowledge",
        condition == "condition3" & scenario ==  "fertilizer"~ "Willful Knowledge",
        condition == "condition4" & scenario ==  "sunscreen"~ "Willful Knowledge",
        condition == "condition4" & scenario ==  "laundry"~ "Knowledge",
        condition == "condition4" & scenario ==  "paint"~ "Ignorance",
        condition == "condition4" & scenario ==  "fertilizer"~ "Willful Ignorance")) %>% 
  mutate(EpistemicCondition= factor(EpistemicCondition, levels=c("Ignorance", "Willful Ignorance", "Knowledge", "Willful Knowledge"))) %>% 
  mutate(Knowledge  =
         case_when(
           EpistemicCondition == "Willful Ignorance" |  EpistemicCondition == "Ignorance" ~ "Ignorance",
           EpistemicCondition == "Willful Knowledge" |  EpistemicCondition == "Knowledge" ~ "Knowledge")) %>% 
    mutate(Intentionality  =
             case_when(
               EpistemicCondition == "Willful Ignorance" |  EpistemicCondition == "Willful Knowledge" ~ "Intentional",
               EpistemicCondition == "Knowledge" |  EpistemicCondition == "Ignorance" ~ "Unintentional")) %>% 
    mutate(Knowledge= factor(Knowledge, levels=c("Knowledge", "Ignorance"))) %>% 
    mutate(Intentionality= factor(Intentionality, levels=c("Intentional", "Unintentional"))) %>% 
    mutate(study = factor(study, levels=c("Study 3", "Study 2"))) %>% 
    mutate(responsibility_rating = as.numeric(responsibility_rating)) %>% 
    mutate(belief_rating = as.numeric(belief_rating)) 



######## Just Study 3
##################### Plots

#### Set Theme
myTheme <-   theme(axis.title.x  = element_blank(), 
                   axis.title.y = element_text(color="black", size = 18, vjust=.9), 
                   axis.text.x = element_text(color="black", size = 16),
                   axis.text.y = element_text(color="black", size = 18), 
                   strip.text.x = element_text(color="black", size = 18),
                   legend.text = element_text(color="black", size = 18),
                   legend.title = element_text(color="black", size = 18),
                   legend.position = "top",
                   panel.grid.major = element_blank(),
                   panel.grid.minor = element_blank(),
                   strip.background = element_rect(fill="white"))

#### Plots Responsibility

Fig1a <- Exp3.df %>% 
  filter(study == "Study 3") %>% 
  ggplot(aes(x=EpistemicCondition, y=responsibility_rating, group=EpistemicCondition, fill=EpistemicCondition)) +
  coord_cartesian(ylim = c(0,10)) +
  scale_y_continuous(breaks = seq(0, 10, by=1))+
  geom_line(aes(group=workerid),position = position_jitter(width = .1), size = 1, alpha=0.01)+ #Create lines between points for each subject
  geom_point(position = position_jitter(width = .1), size = 1, alpha=0.1)+
  stat_summary(fun.data = mean_cl_boot, geom = "pointrange", 
               size = 1.5,
               # width = 0.5,
               shape = 21, 
               fatten = 2.5)+
  labs( y="Responsibility Rating")+
  scale_fill_brewer(palette="Paired")+
  scale_color_brewer(palette="Paired")+
  theme_bw()+
  guides(fill = FALSE, colour = FALSE) +
  myTheme


#Show plot
plot(Fig1a)
ggsave(Fig1a, file="Fig1a.png", dpi=400, height = 5, width = 8)



Fig1b <- Exp3.df %>% 
  filter(study == "Study 3") %>% 
  ggplot(aes(x=EpistemicCondition, y=responsibility_rating, group=EpistemicCondition, fill=EpistemicCondition)) +
  coord_cartesian(ylim = c(0,10)) +
  scale_y_continuous(breaks = seq(0, 10, by=1))+
  stat_summary(fun = mean, geom = "bar", colour = "black", alpha=0.5) +
  stat_summary(fun.data = mean_cl_boot, geom = "errorbar", width = 0.2) +
  geom_jitter(position = position_jitter(height = 0.2, width=0.15), alpha = 
                0.08, colour="black")+
  labs( y="Responsibility Rating")+
  scale_fill_brewer(palette="Paired")+
  scale_color_brewer(palette="Paired")+
  guides(fill = FALSE, colour = FALSE) +
  theme_bw()+
  myTheme

#Show plot
plot(Fig1b)
ggsave(Fig1b, file="Fig1a.pdf", dpi=400, height = 5, width = 8)


#### Plots Belief Rating

Fig2a <- Exp3.df %>% 
  filter(study == "Study 3") %>% 
  ggplot(aes(x=EpistemicCondition, y=belief_rating, group=EpistemicCondition, fill=EpistemicCondition)) +
  coord_cartesian(ylim = c(0,10)) +
  scale_y_continuous(breaks = seq(0, 10, by=1))+
  geom_line(aes(group=workerid),position = position_jitter(width = .1), size = 1, alpha=0.01)+ #Create lines between points for each subject
  geom_point(position = position_jitter(width = .1), size = 1, alpha=0.1)+
  stat_summary(fun.data = mean_cl_boot, geom = "pointrange", 
               size = 1.5,
               # width = 0.5,
               shape = 21, 
               fatten = 2.5)+
  labs( y="Belief Rating")+
  scale_color_manual(values = rev(RColorBrewer::brewer.pal(8,'Paired')))+
  scale_fill_manual(values = rev(RColorBrewer::brewer.pal(8,'Paired')))+
  theme_bw()+
  guides(fill = FALSE, colour = FALSE) +
  myTheme


#Show plot
plot(Fig2a)
ggsave(Fig2a, file="Fig2a.png", dpi=400, height = 5, width = 8)

Fig2b <- Exp3.df %>% 
  filter(study == "Study 3") %>% 
  ggplot(aes(x=EpistemicCondition, y=belief_rating, group=EpistemicCondition, fill=EpistemicCondition)) +
  coord_cartesian(ylim = c(0,10)) +
  scale_y_continuous(breaks = seq(0, 10, by=1))+
  stat_summary(fun = mean, geom = "bar", colour = "black", alpha=0.5) +
  stat_summary(fun.data = mean_cl_boot, geom = "errorbar", width = 0.2) +
  geom_jitter(position = position_jitter(height = 0.2, width=0.15), alpha = 
                0.08, colour="black")+
  labs( y="Belief Rating")+
  scale_fill_brewer(palette="Set3")+
  scale_color_brewer(palette="Set3")+
  guides(fill = FALSE, colour = FALSE) +
  theme_bw()+
  myTheme

#Show plot
plot(Fig2b)
ggsave(Fig2b, file="Fig2b.png", dpi=400, height = 5, width = 8)


##### Regression Plot

library(ggpubr)

PlotCorr<- Exp3.df %>% 
  filter(study == "Study 3") %>% 
  ggplot(aes(x=belief_rating, y=responsibility_rating, group=EpistemicCondition, fill=EpistemicCondition)) + 
  coord_cartesian(ylim = c(0,10)) +
  scale_y_continuous(breaks = seq(0, 10, by=1))+
  scale_x_continuous(breaks = seq(0, 10, by=1))+
  geom_jitter(position = position_jitterdodge(jitter.height = 0.2, dodge.width = 0.90, jitter.width=0.15), alpha = 
                0.3, colour="grey")+
  stat_smooth(method = "lm", col = "black") +
  #scale_fill_manual(values=c("lightyellow4", "gold"))+
  #scale_fill_brewer(palette="Dark2")+
  labs( y="Responsibility Rating", x ="Belief Rating")+
  scale_fill_brewer(palette="Paired")+
  scale_color_brewer(palette="Paired")+
  theme_bw()+
  myTheme+
  theme(axis.title.x  = element_text(color="black", size = 14, vjust=.9),
        axis.title.y = element_text(color="black", size = 14, vjust=.9), 
        axis.text.x = element_text(color="black", size = 14),
        axis.text.y = element_text(color="black", size = 14),
        strip.text.x = element_text(color="black", size = 14))+
  guides(fill = FALSE, colour = FALSE) +
  facet_grid(~EpistemicCondition)


PlotCorr
ggsave(PlotCorr, file="PlotCorr.png", dpi=400, height = 5, width = 8)


Exp3.df %>%
  summarize(cor=cor(belief_rating, responsibility_rating))


##################### Analysis ONLY Experiment 3
#### Responsibility Rating
Exp3a.df <- Exp3.df %>% 
  filter(study == "Study 3")

contrasts(Exp3a.df$Knowledge) = contr.sum(2)
contrasts(Exp3a.df$Intentionality) = contr.sum(2)

#### Responsibility Rating

fit_responsibility_judgment = brm(formula = responsibility_rating ~  1 + Knowledge*Intentionality + (1 | workerid) + (1 | scenario),
                             data = Exp3a.df,
                             seed = 1,
                             cores = 2)

summary(fit_responsibility_judgment)

#### Belief Rating

fit_belief_judgment = brm(formula = belief_rating ~  1 + Knowledge*Intentionality + (1 | workerid) + (1 | scenario),
                                  data = Exp3a.df,
                                  seed = 1,
                                  cores = 2)

fit_belief_judgment

##################### Analysis  Experiment 3 AND Experiment 2
#### Responsibility Rating
Exp3b.df <- Exp3.df %>% 
  filter(Knowledge == "Ignorance") 

  
  
  Exp3b.df %>% 
  mutate(study= recode(study, 'Study 2' = 'High Uncertainty',
                       'Study 3' = 'Low Uncertainty'))

contrasts(Exp3.df$study) = contr.sum(2)

#### Responsibility Rating

fit_responsibility_judgment = brm(formula = responsibility_rating ~  1 + study + (1 | workerid) + (1 | scenario),
                                  data = Exp3b.df,
                                  seed = 1,
                                  cores = 2)

summary(fit_responsibility_judgment)

#### Belief Rating

fit_belief_judgment = brm(formula = belief_rating ~  1 + study + (1 | workerid) + (1 | scenario),
                          data = Exp3b.df,
                          seed = 1,
                          cores = 2)

fit_belief_judgment
      
Fig3a <- Exp3b.df %>% 
  ggplot(aes(x=Intentionality, y=responsibility_rating, fill=Intentionality)) +
  coord_cartesian(ylim = c(0,10)) +
  scale_y_continuous(breaks = seq(0, 10, by=1))+
  stat_summary(fun = mean, geom = "bar", colour = "black", alpha=0.5) +
  stat_summary(fun.data = mean_cl_boot, geom = "errorbar", width = 0.2) +
  geom_jitter(position = position_jitter(height = 0.2, width=0.15), alpha = 
                0.08, colour="black")+
  labs( y="Responsibility Rating")+
  scale_fill_brewer(palette="Paired")+
  scale_color_brewer(palette="Paired")+
  guides(fill = FALSE, colour = FALSE) +
  facet_grid(~study)
  theme_bw()+
  myTheme

#Show plot
plot(Fig3a)
ggsave(Fig3a, file="Fig3a.pdf", dpi=400, height = 5, width = 8)

Fig3b <- Exp3b.df %>% 
  ggplot(aes(x=Intentionality, y=belief_rating, fill=Intentionality)) +
  coord_cartesian(ylim = c(0,10)) +
  scale_y_continuous(breaks = seq(0, 10, by=1))+
  stat_summary(fun = mean, geom = "bar", colour = "black", alpha=0.5) +
  stat_summary(fun.data = mean_cl_boot, geom = "errorbar", width = 0.2) +
  geom_jitter(position = position_jitter(height = 0.2, width=0.15), alpha = 
                0.08, colour="black")+
  labs( y="Belief Rating")+
  scale_fill_brewer(palette="Paired")+
  scale_color_brewer(palette="Paired")+
  guides(fill = FALSE, colour = FALSE) +
  facet_grid(~study)
theme_bw()+
  myTheme

#Show plot
plot(Fig3b)
ggsave(Fig3b, file="Fig3b.pdf", dpi=400, height = 5, width = 8)


################################### Counterfactual Responses Study 3

responses3c <- read.csv(file="willful_ignorance_full_study_3-responses.csv") 

Data3c.df <- merge(responses3c, participants3, by="workerid") %>% 
  select(workerid:ignorance_scenario2_response_counterfactual) %>% 
  rename(response_counterfactual_1 = ignorance_scenario1_response_counterfactual) %>% 
  rename(response_counterfactual_2 = ignorance_scenario2_response_counterfactual)
  

# # New columns with condition information 
Exp3c.df <- Data3c.df  %>% 
  select(-c(proliferate.condition, condition)) %>% 
  pivot_longer(cols = starts_with("response"), names_to = "condition", names_prefix = "counterfactual", values_to = "counterfactual_rating") %>% 
  mutate(IgnoranceCondition = 
           case_when(
             condition == "response_counterfactual_1" & ignorance_scenario1 ==  "IntentionalIgnorance"~ "Willful Ignorance",
             condition == "response_counterfactual_1" & ignorance_scenario1 ==  "UnintentionalIgnorance"~ "Ignorance",
             condition == "response_counterfactual_2" & ignorance_scenario2 ==  "IntentionalIgnorance"~ "Willful Ignorance",
             condition == "response_counterfactual_2" & ignorance_scenario2 ==  "UnintentionalIgnorance"~ "Ignorance")
) %>% 
  mutate(IgnoranceCondition= factor(IgnoranceCondition, levels=c("Ignorance", "Willful Ignorance"))) %>% 
  mutate(counterfactual_rating = as.numeric(counterfactual_rating))


Fig4a <- Exp3c.df %>% 
  ggplot(aes(x=IgnoranceCondition, y=counterfactual_rating, fill=IgnoranceCondition)) +
  coord_cartesian(ylim = c(0,10)) +
  scale_y_continuous(breaks = seq(0, 10, by=1))+
  stat_summary(fun = mean, geom = "bar", colour = "black", alpha=0.5) +
  stat_summary(fun.data = mean_cl_boot, geom = "errorbar", width = 0.2) +
  geom_jitter(position = position_jitter(height = 0.2, width=0.15), alpha = 
                0.08, colour="black")+
  labs( y="Counterfactual Rating")+
  scale_fill_brewer(palette="Paired")+
  scale_color_brewer(palette="Paired")+
  guides(fill = FALSE, colour = FALSE) +
theme_bw()+
  myTheme

#Show plot
plot(Fig4a)
ggsave(Fig4a, file="Fig4a.pdf", dpi=400, height = 5, width = 8)

contrasts(Exp3c.df$IgnoranceCondition) = contr.sum(2)

#### Counterfactual Rating

fit_counterfactual_judgment = brm(formula = counterfactual_rating ~  1 + IgnoranceCondition + (1 | workerid),
                                  data = Exp3c.df,
                                  seed = 1,
                                  cores = 2)

summary(fit_counterfactual_judgment)

########### Correlation between Resp and Counterfactual Judgments

Exp3d.df <- Exp3b.df %>% 
  filter(study == "Study 3") %>% 
  select(workerid, responsibility_rating, EpistemicCondition) %>% 
  spread(EpistemicCondition, responsibility_rating) %>% 
  rename("WillfulIgnorance_responsibility" ="Willful Ignorance") %>% 
  rename("Ignorance_responsibility" ="Ignorance")

  
Exp3c.df <- Exp3c.df %>% 
  select(workerid, counterfactual_rating, IgnoranceCondition) %>% 
  spread(IgnoranceCondition, counterfactual_rating) %>% 
  rename("WillfulIgnorance_counterfactual" ="Willful Ignorance") %>% 
  rename("Ignorance_counterfactual" ="Ignorance")

Data4.df <- merge(Exp3c.df, Exp3d.df, by="workerid") %>% 
  mutate(counterfactual_diff = WillfulIgnorance_counterfactual - Ignorance_counterfactual) %>% 
  mutate(resp_diff = WillfulIgnorance_responsibility - Ignorance_responsibility)

PlotCorr<- Data4.df %>% 
  ggplot(aes(x=counterfactual_diff, y=resp_diff)) + 
  coord_cartesian(ylim = c(0,10)) +
  scale_y_continuous(breaks = seq(0, 10, by=1))+
  scale_x_continuous(breaks = seq(0, 10, by=1))+
  geom_jitter(height = 0.2, width=0.15, alpha = 0.3, colour="grey")+
  stat_smooth(method = "lm", col = "black") +
  #scale_fill_manual(values=c("lightyellow4", "gold"))+
  #scale_fill_brewer(palette="Dark2")+
  labs( y="Responsibility Rating Difference", x ="Counterfactual Rating Difference")+
  scale_fill_brewer(palette="Paired")+
  scale_color_brewer(palette="Paired")+
  theme_bw()+
  myTheme+
  theme(axis.title.x  = element_text(color="black", size = 14, vjust=.9),
        axis.title.y = element_text(color="black", size = 14, vjust=.9), 
        axis.text.x = element_text(color="black", size = 14),
        axis.text.y = element_text(color="black", size = 14),
        strip.text.x = element_text(color="black", size = 14))


PlotCorr
ggsave(PlotCorr, file="PlotCorr.png", dpi=400, height = 5, width = 8)


Data4.df %>%
  summarize(cor=cor(counterfactual_diff, resp_diff))

