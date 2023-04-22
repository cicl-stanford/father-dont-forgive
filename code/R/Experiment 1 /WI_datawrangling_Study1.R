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
participants <- read.csv(file="wilful_ignorance_full_study_1-participants.csv") %>% 
  select(-c(proliferate.condition, error))

responses <- read.csv(file="wilful_ignorance_full_study_1-responses.csv") %>% 
  select(-c(proliferate.condition, error))


# # Merge participants and responses files 
Data1.df <- merge(responses, participants, by="workerid") 


# # New columns with condition information 
Exp1.df <- Data1.df  %>% 
  gather("index", "value", -c(workerid, condition, age, ethnicity, gender, feedback, race))%>% 
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
    mutate(responsibility_rating = as.numeric(responsibility_rating)) %>% 
    mutate(belief_rating = as.numeric(belief_rating)) 



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

Fig1a <- Exp1.df %>% 
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



Fig1b <- Exp1.df %>% 
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
ggsave(Fig1b, file="Fig1b.png", dpi=400, height = 5, width = 8)


#### Plots Belief Rating

Fig2a <- Exp1.df %>% 
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

Fig2b <- Exp1.df %>% 
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

plot(Fig2b)
ggsave(Fig2b, file="Fig2b.png", dpi=400, height = 5, width = 8)

##### Regression Plot

library(ggpubr)

PlotCorr<- Exp1.df %>% 
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


Exp1.df %>%
  group_by(EpistemicCondition) %>%
  summarize(cor=cor(belief_rating, responsibility_rating))

library(ggpubr)


sp <- ggscatter(Exp1.df, x = "belief_rating", y = "responsibility_rating",
                color = "EpistemicCondition", palette = "jco",
                add = "reg.line", conf.int = TRUE)
sp + stat_cor(aes(color = EpistemicCondition))

# Extending the regression line --> fullrange = TRUE
# Add marginal rug (marginal density) ---> rug = TRUE
ggscatter(df, x = "wt", y = "mpg",
          add = "reg.line",                         # Add regression line
          color = "cyl", palette = "jco",           # Color by groups "cyl"
          shape = "cyl",                            # Change point shape by groups "cyl"
          fullrange = TRUE,                         # Extending the regression line
          rug = TRUE                                # Add marginal rug
)+
  stat_cor(aes(color = cyl), label.x = 3)  


##################### Analysis
#### Responsibility Rating

contrasts(Exp1.df$Knowledge) = contr.sum(2)
contrasts(Exp1.df$Intentionality) = contr.sum(2)

#### Responsibility Rating

fit_responsibility_judgment = brm(formula = responsibility_rating ~  1 + Knowledge*Intentionality*belief_rating + (1 | workerid) + (1 | scenario),
                             data = Exp1.df,
                             seed = 1,
                             cores = 2)

summary(fit_responsibility_judgment)

#### Belief Rating

fit_belief_judgment = brm(formula = belief_rating ~  1 + Knowledge*Intentionality + (1 | workerid) + (1 | scenario),
                                  data = Exp1.df,
                                  seed = 1,
                                  cores = 2)

fit_belief_judgment
      



