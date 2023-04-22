# Willful Ignorance

# Data Wrangling 


# # Set working directory 
setwd("~/Desktop/willful ignorance")

# Deskriptiv Statistik

# # Stichprobe
describe(data$age)
table(data$gender)
table(data$ethnicity)
table(data$race)

# # Willful Ignorance & Responsibility
WIR1 <- mean(data[data$ConditionScenario1 == "Willful Ignorance", "scenario1_response_first"])
WIR2 <- mean(data[data$ConditionScenario2 == "Willful Ignorance", "scenario2_response_first"])
WIR3 <- mean(data[data$ConditionScenario3 == "Willful Ignorance", "scenario3_response_first"])
WIR4 <- mean(data[data$ConditionScenario4 == "Willful Ignorance", "scenario4_response_first"])

WIR <- (WIR1+WIR2+WIR3+WIR4)/4

# # Willful Ignorance & Belief
WIB1 <- mean(data[data$ConditionScenario1 == "Willful Ignorance", "scenario1_response_second"])
WIB2 <- mean(data[data$ConditionScenario2 == "Willful Ignorance", "scenario2_response_second"])
WIB3 <- mean(data[data$ConditionScenario3 == "Willful Ignorance", "scenario3_response_second"])
WIB4 <- mean(data[data$ConditionScenario4 == "Willful Ignorance", "scenario4_response_second"])

WIB <- (WIB1+WIB2+WIB3+WIB4)/4

# # Ignorance & Responsibility
IR1 <- mean(data[data$ConditionScenario1 == "Ignorance", "scenario1_response_first"])
IR2 <- mean(data[data$ConditionScenario2 == "Ignorance", "scenario2_response_first"])
IR3 <- mean(data[data$ConditionScenario3 == "Ignorance", "scenario3_response_first"])
IR4 <- mean(data[data$ConditionScenario4 == "Ignorance", "scenario4_response_first"])

IR <- (IR1+IR2+IR3+IR4)/4

# # Ignorance & Belief
IB1 <- mean(data[data$ConditionScenario1 == "Ignorance", "scenario1_response_second"])
IB2 <- mean(data[data$ConditionScenario2 == "Ignorance", "scenario2_response_second"])
IB3 <- mean(data[data$ConditionScenario3 == "Ignorance", "scenario3_response_second"])
IB4 <- mean(data[data$ConditionScenario4 == "Ignorance", "scenario4_response_second"])

IB <- (IB1+IB2+IB3+IB4)/4

# # Knowledge & Responsibility
KR1 <- mean(data[data$ConditionScenario1 == "Knowledge", "scenario1_response_first"])
KR2 <- mean(data[data$ConditionScenario2 == "Knowledge", "scenario2_response_first"])
KR3 <- mean(data[data$ConditionScenario3 == "Knowledge", "scenario3_response_first"])
KR4 <- mean(data[data$ConditionScenario4 == "Knowledge", "scenario4_response_first"])

KR <- (KR1+KR2+KR3+KR4)/4

# # Knowledge & Belief
KB1 <- mean(data[data$ConditionScenario1 == "Knowledge", "scenario1_response_second"])
KB2 <- mean(data[data$ConditionScenario2 == "Knowledge", "scenario2_response_second"])
KB3 <- mean(data[data$ConditionScenario3 == "Knowledge", "scenario3_response_second"])
KB4 <- mean(data[data$ConditionScenario4 == "Knowledge", "scenario4_response_second"])

KB <- (KB1+KB2+KB3+KB4)/4

# # Wilful Knowledge & Responsibility
WKR1 <- mean(data[data$ConditionScenario1 == "Willful Knowledge", "scenario1_response_first"])
WKR2 <- mean(data[data$ConditionScenario2 == "Willful Knowledge", "scenario2_response_first"])
WKR3 <- mean(data[data$ConditionScenario3 == "Willful Knowledge", "scenario3_response_first"])
WKR4 <- mean(data[data$ConditionScenario4 == "Willful Knowledge", "scenario4_response_first"])

WKR <- (WKR1+WKR2+WKR3+WKR4)/4

# # Wilful Knowledge & Belief
WKB1 <- mean(data[data$ConditionScenario1 == "Willful Knowledge", "scenario1_response_second"])
WKB2 <- mean(data[data$ConditionScenario2 == "Willful Knowledge", "scenario2_response_second"])
WKB3 <- mean(data[data$ConditionScenario3 == "Willful Knowledge", "scenario3_response_second"])
WKB4 <- mean(data[data$ConditionScenario4 == "Willful Knowledge", "scenario4_response_second"])

WKB <- (WKB1+WKB2+WKB3+WKB4)/4

# Responsibility 
responsibility <- c(WIR, IR, KR, WKR)
barplot(responsibility, 
        xlab="Epistemic State",
        names.arg=c("Willful Ignorance", "Ignorance", "Knowlegde", "Willful Knowledge"))

# Belief
belief <- c(WIB, IB, KB, WKB)
barplot(belief, 
        xlab="Epistemic State",
        names.arg=c("Willful Ignorance", "Ignorance", "Knowlegde", "Willful Knowledge"))

