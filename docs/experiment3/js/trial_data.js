
const trialData = {
    "condition1": {
        "unintentional_dependent": {

            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + 'Taylor is the CEO of a company for farming supplies. The company plans to produce and sell a new fertilizer for agricultural farming, \"GreenLine\". If launched, \"GreenLine\" would significantly increase the company\'s profits. However, this new fertilizer includes a relatively unknown enzyme. It is possible that this enzyme would harm local wildlife if released into the ground. If this were the case, applying \"GreenLine\" would still effectively fertilize farmland, but also kill small animals like bees, birds, and rodents. <br> The decision is now with Taylor. The new fertilizer will only go into production if Taylor approves it. <br><br>If Taylor were to find out that \"Greenline\" does <em>not</em> harm wildlife, they would decide to launch the production of \"Greenline\". <br><br>If Taylor were to find out that \"Greenline\" does harm wildlife, they would decide <b>not</b> to launch the production of \"Greenline\". <br> <br>',

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' +`One day, the company committee comes together to discuss the potential production launch of \"GreenLine\". Without Taylor\'s approval, the fertilizer would not go into production.\n Taylor approves the product. As a result of the widespread sale of \"GreenLine\", several wildlife populations are being harmed. <br><br><br><em>Please answer the following questions:</em>`+` <div style="text-align:center;background-color:white; padding:20px; max-width:900px;">`,

            "compre_questions": {
                "Question1": `If Taylor were to find out that \"Greenline\" harms wildlife...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Taylor read...`,
                "Question5": `Taylor thinks that the likelihood of \"Greenline\" harming wildlife is...`,
            },

            "compre_options": {
                "Question1": [`A. Taylor would decide <em>not</em> to launch the production of \"GreenLine\".`, `B. Taylor would still decide to launch the production of \"GreenLine\".`],
                "Question2": [`A. the enzyme in \"GreenLine\" harms wildlife.`, `B. the enzyme in \"GreenLine\" does not harm wildlife.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Taylor <b>responsible</b> for several wildlife populations having been harmed?`,
                "q2": `How likely did Taylor <b>think</b> that several wildlife populations would get harmed?`,
                "q3": `How likely is it that Taylor <b>would have launched</b> the product had they known that several wildlife populations would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>enzyme in \"GreenLine\" does indeed harm wildlife</b>.\n Taylor <b>has read a recently published report</b> that summarizes existing research on the new enzyme. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the enzyme in \"GreenLine\" on wildlife. \n <br><br><b>Taylor thinks the likelihood of  \"GreenLine\" harming wildlife is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>enzyme in \"GreenLine\" does indeed harm wildlife</b>.\n Taylor <b>has read a recently published report</b> that summarizes existing research on the new enzyme. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the enzyme in \"GreenLine\" on wildlife. \n <br><br><b>Taylor thinks the likelihood of  \"GreenLine\" harming wildlife is 50\%.</b>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `A`,
                    "Question3": `A`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },

        },

        "unintentional_independent": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Kris is the CEO of a company for laundry products. The company plans to produce and sell a new laundry detergent, \"HomeStyle\". If launched, \"HomeStyle\" would significantly increase the company\'s profits. However, this new laundry detergent includes a relatively unknown chemical. It is possible that the chemical would lead to excessive algal growth if released into the flow of waste water. If this were the case, using the new laundry detergent \"HomeStyle\" would still effectively clean clothes, but also pollute local water systems. <br>The decision is now with Kris. The new laundry detergent will only go into production if Kris approves it. <br><br>If Kris were to find out that \"HomeStyle\" does <em>not</em> pollute local water systems, they would decide to launch the production of \"HomeStyle\". <br><br>If Kris were to find out that \"HomeStyle\" does pollute local water systems, they would <b>still</b> decide to launch the production of \"HomeStyle\".<br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' + `One day, the company committee comes together to discuss the potential production launch of \"HomeStyle\". Without Kris\'s approval, the laundry detergent would not go into production.\n Kris approves the product. As a result of the widespread sale of \"HomeStyle\", several local water systems are being polluted. <br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `If Kris were to find out that \"HomeStyle\" pollutes local water systems...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Kris read...`,
                "Question5": `Kris thinks that the likelihood of \"HomeStyle\" polluting local water systems is...`,
            },

            "compre_options": {
                "Question1": [`A. Kris would decide <em>not</em> to launch the production of \"HomeStyle\".`, `B. Kris would still decide to launch the production of \"HomeStyle\".`],
                "Question2": [`A. the chemical in \"HomeStyle\" pollutes local water systems.`, `B. the chemical in \"HomeStyle\" does not pollute local water systems.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what's in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Kris <b>responsible</b> for several local water systems having been polluted?`,
                "q2": `How likely did Kris <b>think</b> that several local water systems would get polluted?`,
                "q3": `How likely is it that Kris <b>would have launched</b> the product had they known that several local water systems would get polluted?`
            },


            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>chemical in \"HomeStyle\" does indeed pollute water</b>.\n Kris <b>has read a recently published report</b> that summarizes existing research on the new chemical. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the chemical in \"HomeStyle\" on local water systems.\n <br><br><b>Kris thinks the likelihood of  \"HomeStyle\" polluting water is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>chemical in \"HomeStyle\" does indeed pollute water</b>.\n Kris <b>has read a recently published report</b> that summarizes existing research on the new chemical. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the chemical in \"HomeStyle\" on local water systems.\n <br><br><b>Kris thinks the likelihood of  \"HomeStyle\" polluting water is 50\%.</b> `,

                "correct_compre": {
                    "Question1": `B`,
                    "Question2": `A`,
                    "Question3": `A`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },
        },


        "intentional_dependent": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Robin is the CEO of a company for paint and varnish. The company plans to produce and sell a new exterior paint, \"ColorShine\" . If launched, \"ColorShine\" would significantly increase the company\'s profits. However, this new paint includes a relatively unknown dye. It is possible that this dye poisons the groundwater if it is washed away in the rain. If this was the case, using the new exterior paint \"ColorShine\" would still effectively vanquish outdoor furniture, but also lead to contamination of groundwater. <br>The decision is now with Robin. The new exterior paint will only go into production if Robin approves it. <br><br>If Robin were to find out that \"ColorShine\" does <em>not</em> contaminate groundwater, they would decide to launch the production of \"ColorShine\". <br><br>If Robin were to find out that \"ColorShine\" does contaminate groundwater, they would decide <b>not</b> to launch the production of \"ColorShine\".<br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+`One day, the company committee comes together to discuss the potential production launch of \"ColorShine\". Without Robin\'s approval, the exterior paint would not go into production.\n Robin approves the product. As a result of the widespread sale of \"ColorShine\", several groundwater systems are being contaminated. <br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `If Robin were to find out that \"ColorShine\" contaminates groundwater...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Robin read...`,
                "Question5": `Robin thinks that the likelihood of \"ColorShine\" contaminating groundwater is...`,
            },

            "compre_options": {
                "Question1": [`A. Robin would decide <em>not</em> to launch the production of \"ColorShine\".`, `B. Robin would still decide to launch the production of \"ColorShine\".`],
                "Question2": [`A. the dye in \"ColorShine\" contaminates groundwater.`, `B. the dye in \"ColorShine\" does not contaminate groundwater.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Robin <b>responsible</b> for several groundwater systems having been contaminated?`,
                "q2": `How likely did Robin <b>think</b> that several groundwater systems would get contaminated?`,
                "q3": `How likely is it that Robin <b>would have launched</b> the product had they known that several groundwater systems would get contaminated?`,
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>dye in \"ColorShine\" does indeed contaminate groundwater</b>.\n Robin has read a research report that has recently been published summarizing existing research on the new dye. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the dye in \"ColorShine\" on groundwater systems.\n <br><br><b>Robin decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Robin thinks the likelihood of \"ColorShine\" contaminating groundwater is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>dye in \"ColorShine\" does indeed contaminate groundwater</b>.\n Robin has read a research report that has recently been published summarizing existing research on the new dye. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the dye in \"ColorShine\" on groundwater systems.\n <br><br><b>Robin decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Robin thinks the likelihood of \"ColorShine\" contaminating groundwater is 50\%.</b>`,
                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `A`,
                    "Question3": `B`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },
        },


        "intentional_independent": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Charlie is the CEO of a company for sun products. The company plans to produce and sell a new sunscreen, \"SafeSol\". If launched, \"SafeSol\" would significantly increase the company\'s profits. However, this new sunscreen includes a relatively unknown UV absorber. It is possible that the UV absorber weakens the protection film of aquatic plants if washed into oceans. If this was the case, using the new sunscreen \"SafeSol\" would still effectively protect people from sunburn, but also destroy coral reefs. <br>The decision is now with Charlie. The new sunscreen will only go into production if Charlie approves it. <br><br>If Charlie were to find out that \"SafeSol\" does <em>not</em> harm aquatic plants, they would decide to launch the production of \"SafeSol\". <br><br>If Charlie were to find out that \"SafeSol\" does harm aquatic plants, they would <b>still</b> decide to launch the production of \"SafeSol\".<br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+ `One day, the company committee comes together to discuss the potential production launch of \"SafeSol\". Without Charlie\'s approval, the sunscreen would not go into production.\n Charlie approves the product. As a result of the widespread sale of \"SafeSol\", several aquatic plants are being harmed. <br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `If Charlie were to find out that \"SafeSol\" harms aquatic plants...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Charlie read...`,
                "Question5": `Charlie thinks that the likelihood of \"SafeSol\" harming aquatic plants is...`,
            },

            "compre_options": {
                "Question1": [`A. Charlie would decide <em>not</em> to launch the production of \"SafeSol\".`, `B. Charlie would still decide to launch the production of \"SafeSol\".`],
                "Question2": [`A. the UV absorber in \"SafeSol\" harms aquatic plants.`, `B. the UV absorber in \"SafeSol\" does not harm aquatic plants.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what\'s in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },

            "slider_questions": {
                "q1": `To what extent is Charlie <b>responsible</b> for several aquatic plants having been harmed?`,
                "q2": `How likely did Charlie <b>think</b> that several aquatic plants would get harmed?`,
                "q3": `How likely is it that Charlie <b>would have launched</b> the product had they known that several aquatic plants would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>UV absorber in \"SafeSol\" does indeed harm aquatic plants</b>.\n Charlie has read a research report that has recently been published summarizing existing research on the new UV absorber. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the UV absorber in \"SafeSol\" on aquatic plants.\n <br><br><b>Charlie decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Charlie thinks the likelihood of  \"SafeSol\" harming aquatic plants is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>UV absorber in \"SafeSol\" does indeed harm aquatic plants</b>.\n Charlie has read a research report that has recently been published summarizing existing research on the new UV absorber. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the UV absorber in \"SafeSol\" on aquatic plants.\n <br><br><b>Charlie decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Charlie thinks the likelihood of  \"SafeSol\" harming aquatic plants is 50\%.</b>`,
                "correct_compre": {
                    "Question1": `B`,
                    "Question2": `A`,
                    "Question3": `B`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },
        },
    },    
    

    "condition2": {
        "unintentional_independent": {

            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + 'Taylor is the CEO of a company for farming supplies. The company plans to produce and sell a new fertilizer for agricultural farming, \"GreenLine\". If launched, \"GreenLine\" would significantly increase the company\'s profits. However, this new fertilizer includes a relatively unknown enzyme. It is possible that this enzyme would harm local wildlife if released into the ground. If this were the case, applying \"GreenLine\" would still effectively fertilize farmland, but also kill small animals like bees, birds, and rodents.  <br>The decision is now with Taylor. The new fertilizer will only go into production if Taylor approves it. <br><br>If Taylor were to find out that \"GreenLine\" does <em>not</em> harm wildlife, they would decide to launch the production of \"GreenLine\". <br><br>If Taylor were to find out that \"GreenLine\" does harm wildlife, they would <b>still</b> decide to launch the production of \"GreenLine\".<br> <br>',

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' +`One day, the company committee comes together to discuss the potential production launch of \"GreenLine\". Without Taylor\'s approval, the fertilizer would not go into production.\n Taylor approves the product. As a result of the widespread sale of \"GreenLine\", several wildlife populations are being harmed. <br><br><br><em>Please answer the following questions:</em>`+` <div style="text-align:center;background-color:white; padding:20px; max-width:900px;">`,

            "compre_questions": {
                "Question1": `If Taylor were to find out that \"Greenline\" harms wildlife...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Taylor read...`,
                "Question5": `Taylor thinks that the likelihood of \"Greenline\" harming wildlife is...`,
            },

            "compre_options": {
                "Question1": [`A. Taylor would decide <em>not</em> to launch the production of \"GreenLine\".`, `B. Taylor would still decide to launch the production of \"GreenLine\".`],
                "Question2": [`A. the enzyme in \"GreenLine\" harms wildlife.`, `B. the enzyme in \"GreenLine\" does not harm wildlife.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Taylor <b>responsible</b> for several wildlife populations having been harmed?`,
                "q2": `How likely did Taylor <b>think</b> that several wildlife populations would get harmed?`, 
                "q3": `How likely is it that Taylor <b>would have launched</b> the product had they known that several wildfife populations would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>enzyme in \"GreenLine\" does indeed harm wildlife</b>.\n Taylor <b>has read a recently published report</b> that summarizes existing research on the new enzyme. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the enzyme in \"GreenLine\" on wildlife. \n <br><br><b>Taylor thinks the likelihood of  \"GreenLine\" harming wildlife is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>enzyme in \"GreenLine\" does indeed harm wildlife</b>.\n Taylor <b>has read a recently published report</b> that summarizes existing research on the new enzyme. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the enzyme in \"GreenLine\" on wildlife. \n <br><br><b>Taylor thinks the likelihood of  \"GreenLine\" harming wildlife is 50\%.</b>`,

                "correct_compre": {
                    "Question1": `B`,
                    "Question2": `A`,
                    "Question3": `A`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },

        },

        "intentional_dependent": {
                "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Kris is the CEO of a company for laundry products. The company plans to produce and sell a new laundry detergent, \"HomeStyle\". If launched, \"HomeStyle\" would significantly increase the company\'s profits. However, this new laundry detergent includes a relatively unknown chemical. It is possible that the chemical would lead to excessive algal growth if released into the flow of waste water. If this were the case, using the new laundry detergent \"HomeStyle\" would still effectively clean clothes, but also pollute local water systems. <br>The decision is now with Kris. The new laundry detergent will only go into production if Kris approves it. <br><br>If Kris were to find out that \"HomeStyle\" does <em>not</em> pollute local water systems, they would decide to launch the production of \"HomeStyle\". <br><br>If Kris were to find out that \"HomeStyle\" does pollute local water systems, they would decide <b>not</b> to launch the production of \"HomeStyle\".<br> <br>`,
    
                "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' + `One day, the company committee comes together to discuss the potential production launch of \"HomeStyle\". Without Kris\'s approval, the laundry detergent would not go into production.\n Kris approves the product. As a result of the widespread sale of \"HomeStyle\", several local water systems are being polluted. <br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',
    
                "compre_questions": {
                    "Question1": `If Kris were to find out that \"HomeStyle\" pollutes local water systems...`,
                    "Question2": `A new study finds that...`,
                    "Question3": `A recently published research report...`,
                    "Question4": `Kris read...`,
                    "Question5": `Kris thinks that the likelihood of \"HomeStyle\" polluting local water systems is...`,
                },
    
                "compre_options": {
                    "Question1": [`A. Kris would decide <em>not</em> to launch the production of \"HomeStyle\".`, `B. Kris would still decide to launch the production of \"HomeStyle\".`],
                    "Question2": [`A. the chemical in \"HomeStyle\" pollutes local water systems.`, `B. the chemical in \"HomeStyle\" does not pollute local water systems.`],
                    "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                    "Question4": [`A. only what's in the report.`, `B. what's in the report and also decided to look into the new study.`],
                    "Question5": [`A. 50\%`, `B. 100\%`],
                },
    
    
                "slider_questions": {
                    "q1": `To what extent is Kris <b>responsible</b> for several local water systems having been polluted?`,
                    "q2": `How likely did Kris <b>think</b> that several local water systems would get polluted?`,
                    "q3": `How likely is it that Kris <b>would have launched</b> the product had they known that several local water systems would get polluted?`
                },
    
                "scenarioContext": {
                    "page1": `There is a new scientific study showing that the <b>chemical in \"HomeStyle\" does indeed pollute water</b>.\n Kris has read a research report that has recently been published summarizing existing research on the new chemical. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the chemical in \"HomeStyle\" on local water systems.\n <br><br><b>Kris decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Kris thinks the likelihood of \"HomeStyle\" polluting water is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                    "page1_b": `There is a new scientific study showing that the <b>chemical in \"HomeStyle\" does indeed pollute water</b>.\n Kris has read a research report that has recently been published summarizing existing research on the new chemical. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the chemical in \"HomeStyle\" on local water systems.\n <br><br><b>Kris decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Kris thinks the likelihood of \"HomeStyle\" polluting water is 50\%.</b>`,
                    "correct_compre": {
                        "Question1": `A`,
                        "Question2": `A`,
                        "Question3": `B`,
                        "Question4": `A`,
                        "Question5": `A`,
                    },
                }
            },

        "intentional_independent": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Robin is the CEO of a company for paint and varnish. The company plans to produce and sell a new exterior paint, \"ColorShine\" . If launched, \"ColorShine\" would significantly increase the company\'s profits. However, this new paint includes a relatively unknown dye. It is possible that this dye poisons the groundwater if it is washed away in the rain. If this was the case, using the new exterior paint \"ColorShine\" would still effectively vanquish outdoor furniture, but also lead to contamination of groundwater. <br>The decision is now with Robin. The new exterior paint will only go into production if Robin approves it. <br><br>If Robin were to find out that \"ColorShine\" does <em>not</em> contaminate groundwater, they would decide to launch the production of \"ColorShine\". <br><br>If Robin were to find out that \"ColorShine\" does contaminate groundwater, they would <b>still</b> decide to launch the production of \"ColorShine\".<br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+`One day, the company committee comes together to discuss the potential production launch of \"ColorShine\". Without Robin\'s approval, the exterior paint would not go into production.\n Robin approves the product. As a result of the widespread sale of \"ColorShine\", several groundwater systems are being contaminated. <br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `If Robin were to find out that \"ColorShine\" contaminates groundwater...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Robin read...`,
                "Question5": `Robin thinks that the likelihood of \"ColorShine\" contaminating groundwater is...`,
            },

            "compre_options": {
                "Question1": [`A. Robin would decide <em>not</em> to launch the production of \"ColorShine\".`, `B. Robin would still decide to launch the production of \"ColorShine\".`],
                "Question2": [`A. the dye in \"ColorShine\" contaminates groundwater.`, `B. the dye in \"ColorShine\" does not contaminate groundwater.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Robin <b>responsible</b> for several groundwater systems having been contaminated?`,
                "q2": `How likely did Robin <b>think</b> that several groundwater systems would get contaminated?`,
                "q3": `How likely is it that Robin <b>would have launched</b> the product had they known that several groundwater systems would get contaminated?`,
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>dye in \"ColorShine\" does indeed contaminate groundwater</b>.\n Robin has read a research report that has recently been published summarizing existing research on the new dye. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the dye in \"ColorShine\" on groundwater systems.\n <br><br><b>Robin decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Robin thinks the likelihood of \"ColorShine\" contaminating groundwater is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>dye in \"ColorShine\" does indeed contaminate groundwater</b>.\n Robin has read a research report that has recently been published summarizing existing research on the new dye. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the dye in \"ColorShine\" on groundwater systems.\n <br><br><b>Robin decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Robin thinks the likelihood of \"ColorShine\" contaminating groundwater is 50\%.</b>`,

                "correct_compre": {
                    "Question1": `B`,
                    "Question2": `A`,
                    "Question3": `B`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },
        },

        "unintentional_dependent": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Charlie is the CEO of a company for sun products. The company plans to produce and sell a new sunscreen, \"SafeSol\". If launched, \"SafeSol\" would significantly increase the company\'s profits. However, this new sunscreen includes a relatively unknown UV absorber. It is possible that the UV absorber weakens the protection film of aquatic plants if washed into oceans. If this was the case, using the new sunscreen \"SafeSol\" would still effectively protect people from sunburn, but also destroy coral reefs. <br>The decision is now with Charlie. The new sunscreen will only go into production if Charlie approves it. <br><br>If Charlie were to find out that \"SafeSol\" does <em>not</em> harm aquatic plants, they would decide to launch the production of \"SafeSol\". <br><br>If Charlie were to find out that \"SafeSol\" does harm aquatic plants, they would decide <b>not</b> to launch the production of \"SafeSol\".<br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+ `One day, the company committee comes together to discuss the potential production launch of \"SafeSol\". Without Charlie\'s approval, the sunscreen would not go into production.\n Charlie approves the product. As a result of the widespread sale of \"SafeSol\", several aquatic plants are being harmed. <br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `If Charlie were to find out that \"SafeSol\" harms aquatic plants...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Charlie read...`,
                "Question5": `Charlie thinks that the likelihood of \"SafeSol\" harming aquatic plants is...`,
            },

            "compre_options": {
                "Question1": [`A. Charlie would decide <em>not</em> to launch the production of \"SafeSol\".`, `B. Charlie would still decide to launch the production of \"SafeSol\".`],
                "Question2": [`A. the UV absorber in \"SafeSol\" harms aquatic plants.`, `B. the UV absorber in \"SafeSol\" does not harm aquatic plants.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what\'s in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Charlie <b>responsible</b> for several aquatic plants having been harmed?`,
                "q2": `How likely did Charlie <b>think</b> that several aquatic plants would get harmed?`,
                "q3": `How likely is it that Charlie <b>would have launched</b> the product had they known that several aquatic plants would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>UV absorber in \"SafeSol\" does indeed harm aquatic plants</b>.\n Charlie <b>has read a recently published report</b> that summarizes existing research on the new UV absorber. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the UV absorber in \"SafeSol\" on aquatic plants.\n <br><br><b>Charlie thinks the likelihood of  \"SafeSol\" harming aquatic plants is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>UV absorber in \"SafeSol\" does indeed harm aquatic plants</b>.\n Charlie <b>has read a recently published report</b> that summarizes existing research on the new UV absorber. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the UV absorber in \"SafeSol\" on aquatic plants.\n <br><br><b>Charlie thinks the likelihood of  \"SafeSol\" harming aquatic plants is 50\%.</b>`,
                
                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `A`,
                    "Question3": `A`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },
        },
    },

    "condition3": {
        "intentional_dependent": {

            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + 'Taylor is the CEO of a company for farming supplies. The company plans to produce and sell a new fertilizer for agricultural farming, \"GreenLine\". If launched, \"GreenLine\" would significantly increase the company\'s profits. However, this new fertilizer includes a relatively unknown enzyme. It is possible that this enzyme would harm local wildlife if released into the ground. If this were the case, applying \"GreenLine\" would still effectively fertilize farmland, but also kill small animals like bees, birds, and rodents. <br>The decision is now with Taylor. The new fertilizer will only go into production if Taylor approves it. <br><br>If Taylor were to find out that \"GreenLine\" does <em>not</em> harm wildlife, they would decide to launch the production of \"GreenLine\". <br><br>If Taylor were to find out that \"GreenLine\" does harm wildlife, they would decide <b>not</b> to launch the production of \"GreenLine\".<br> <br>',

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' +`One day, the company committee comes together to discuss the potential production launch of \"GreenLine\". Without Taylor\'s approval, the fertilizer would not go into production.\n Taylor approves the product. As a result of the widespread sale of \"GreenLine\", several wildlife populations are being harmed. <br><br><br><em>Please answer the following questions:</em>`+` <div style="text-align:center;background-color:white; padding:20px; max-width:900px;">`,

            "compre_questions": {
                "Question1": `If Taylor were to find out that \"Greenline\" harms wildlife...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Taylor read...`,
                "Question5": `Taylor thinks that the likelihood of \"Greenline\" harming wildlife is...`,
            },

            "compre_options": {
                "Question1": [`A. Taylor would decide <em>not</em> to launch the production of \"GreenLine\".`, `B. Taylor would still decide to launch the production of \"GreenLine\".`],
                "Question2": [`A. the enzyme in \"GreenLine\" harms wildlife.`, `B. the enzyme in \"GreenLine\" does not harm wildlife.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Taylor <b>responsible</b> for several wildlife populations having been harmed?`,
                "q2": `How likely did Taylor <b>think</b> that several wildlife populations would get harmed?`,
                "q3": `How likely is it that Taylor <b>would have launched</b> the product had they known that several wildlife populations would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>enzyme in \"GreenLine\" does indeed harm wildlife</b>.\" Taylor has read a research report that has recently been published summarizing existing research on the new enzyme. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the enzyme in \"GreenLine\" on wildlife.\n <br><br><b>Taylor decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Taylor thinks the likelihood of \"GreenLine\" harming wildlife is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>enzyme in \"GreenLine\" does indeed harm wildlife</b>.\" Taylor has read a research report that has recently been published summarizing existing research on the new enzyme. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the enzyme in \"GreenLine\" on wildlife.\n <br><br><b>Taylor decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Taylor thinks the likelihood of \"GreenLine\" harming wildlife is 50\%.</b>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `A`,
                    "Question3": `B`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },
        },

        "intentional_independent": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Kris is the CEO of a company for laundry products. The company plans to produce and sell a new laundry detergent, \"HomeStyle\". If launched, \"HomeStyle\" would significantly increase the company\'s profits. However, this new laundry detergent includes a relatively unknown chemical. It is possible that the chemical would lead to excessive algal growth if released into the flow of waste water. If this were the case, using the new laundry detergent \"HomeStyle\" would still effectively clean clothes, but also pollute local water systems. <br>The decision is now with Kris. The new laundry detergent will only go into production if Kris approves it. <br><br>If Kris were to find out that \"HomeStyle\" does <em>not</em> pollute local water systems, they would decide to launch the production of \"HomeStyle\". <br><br>If Kris were to find out that \"HomeStyle\" does pollute local water systems, they would <b>still</b> decide to launch the production of \"HomeStyle\".<br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' + `One day, the company committee comes together to discuss the potential production launch of \"HomeStyle\". Without Kris\'s approval, the laundry detergent would not go into production.\n Kris approves the product. As a result of the widespread sale of \"HomeStyle\", several local water systems are being polluted. <br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `If Kris were to find out that \"HomeStyle\" pollutes local water systems...,`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Kris read...`,
                "Question5": `Kris thinks that the likelihood of \"HomeStyle\" polluting local water systems is...`,
            },

            "compre_options": {
                "Question1": [`A. Kris would decide <em>not</em> to launch the production of \"HomeStyle\".`, `B. Kris would still decide to launch the production of \"HomeStyle\".`],
                "Question2": [`A. the chemical in \"HomeStyle\" pollutes local water systems.`, `B. the chemical in \"HomeStyle\" does not pollute local water systems.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what's in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Kris <b>responsible</b> for several local water systems having been polluted?`,
                "q2": `How likely did Kris <b>think</b> that several local water systems would get polluted?`,
                "q3": `How likely is it that Kris <b>would have launched</b> the product had they known that several local water systems would get polluted?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>chemical in \"HomeStyle\" does indeed pollute water</b>.\n Kris has read a research report that has recently been published summarizing existing research on the new chemical. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the chemical in \"HomeStyle\" on local water systems.\n <br><br><b>Kris decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Kris thinks the likelihood of \"HomeStyle\" polluting water is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>chemical in \"HomeStyle\" does indeed pollute water</b>.\n Kris has read a research report that has recently been published summarizing existing research on the new chemical. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the chemical in \"HomeStyle\" on local water systems.\n <br><br><b>Kris decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Kris thinks the likelihood of \"HomeStyle\" polluting water is 50\%.</b>`,
                "correct_compre": {
                    "Question1": `B`,
                    "Question2": `A`,
                    "Question3": `B`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            }
        },

        "unintentional_dependent": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Robin is the CEO of a company for paint and varnish. The company plans to produce and sell a new exterior paint, \"ColorShine\" . If launched, \"ColorShine\" would significantly increase the company\'s profits. However, this new paint includes a relatively unknown dye. It is possible that this dye poisons the groundwater if it is washed away in the rain. If this was the case, using the new exterior paint \"ColorShine\" would still effectively vanquish outdoor furniture, but also lead to contamination of groundwater. <br>The decision is now with Robin. The new exterior paint will only go into production if Robin approves it. <br><br>If Robin were to find out that \"ColorShine\" does <em>not</em> contaminate groundwater, they would decide to launch the production of \"ColorShine\". <br><br>If Robin were to find out that \"ColorShine\" does contaminate groundwater, they would decide <b>not</b> to launch the production of \"ColorShine\".<br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+`One day, the company committee comes together to discuss the potential production launch of \"ColorShine\". Without Robin\'s approval, the exterior paint would not go into production.\n Robin approves the product. As a result of the widespread sale of \"ColorShine\", several groundwater systems are being contaminated. <br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `If Robin were to find out that \"ColorShine\" contaminates groundwater...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Robin read...`,
                "Question5": `Robin thinks that the likelihood of \"ColorShine\" contaminating groundwater is...`,
            },

            "compre_options": {
                "Question1": [`A. Robin would decide <em>not</em> to launch the production of \"ColorShine\".`, `B. Robin would still decide to launch the production of \"ColorShine\".`],
                "Question2": [`A. the dye in \"ColorShine\" contaminates groundwater.`, `B. the dye in \"ColorShine\" does not contaminate groundwater.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Robin <b>responsible</b> for several groundwater systems having been contaminated?`,
                "q2": `How likely did Robin <b>think</b> that several groundwater systems would get contaminated?`,
                "q3": `How likely is it that Robin <b>would have launched</b> the product had they known that several groundwater systems would get contaminated?`,
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>dye in \"ColorShine\" does indeed contaminate groundwater</b>.\n Robin <b>has read a recently published report</b> that summarizes existing research on the new dye. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the dye in \"ColorShine\" on groundwater systems.\n <br><br><b>Robin thinks the likelihood of \"ColorShine\" contaminating groundwater is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>dye in \"ColorShine\" does indeed contaminate groundwater</b>.\n Robin <b>has read a recently published report</b> that summarizes existing research on the new dye. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the dye in \"ColorShine\" on groundwater systems.\n <br><br><b>Robin thinks the likelihood of \"ColorShine\" contaminating groundwater is 50\%.</b>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `A`,
                    "Question3": `A`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },
        },

        "unintentional_independent": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Charlie is the CEO of a company for sun products. The company plans to produce and sell a new sunscreen, \"SafeSol\". If launched, \"SafeSol\" would significantly increase the company\'s profits. However, this new sunscreen includes a relatively unknown UV absorber. It is possible that the UV absorber weakens the protection film of aquatic plants if washed into oceans. If this was the case, using the new sunscreen \"SafeSol\" would still effectively protect people from sunburn, but also destroy coral reefs. <br>The decision is now with Charlie. The new sunscreen will only go into production if Charlie approves it. <br><br>If Charlie were to find out that \"SafeSol\" does <em>not</em> harm aquatic plants, they would decide to launch the production of \"SafeSol\". <br><br>If Charlie were to find out that \"SafeSol\" does harm aquatic plants, they would <b>still</b> decide to launch the production of \"SafeSol\".<br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+ `One day, the company committee comes together to discuss the potential production launch of \"SafeSol\". Without Charlie\'s approval, the sunscreen would not go into production.\n Charlie approves the product. As a result of the widespread sale of \"SafeSol\", several aquatic plants are being harmed. <br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `If Charlie were to find out that \"SafeSol\" harms aquatic plants...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Charlie read...`,
                "Question5": `Charlie thinks that the likelihood of \"SafeSol\" harming aquatic plants is...`,
            },

            "compre_options": {
                "Question1": [`A. Charlie would decide <em>not</em> to launch the production of \"SafeSol\".`, `B. Charlie would still decide to launch the production of \"SafeSol\".`],
                "Question2": [`A. the UV absorber in \"SafeSol\" harms aquatic plants.`, `B. the UV absorber in \"SafeSol\" does not harm aquatic plants.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what\'s in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Charlie <b>responsible</b> for several aquatic plants having been harmed?`,
                "q2": `How likely did Charlie <b>think</b> that several aquatic plants would get harmed?`,
                "q3": `How likely is it that Charlie <b>would have launched</b> the product had they known that several aquatic plants would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>UV absorber in \"SafeSol\" does indeed harm aquatic plants</b>.\n Charlie <b>has read a recently published report</b> that summarizes existing research on the new UV absorber. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the UV absorber in \"SafeSol\" on aquatic plants.\n <br><br><b>Charlie thinks the likelihood of  \"SafeSol\" harming aquatic plants is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>UV absorber in \"SafeSol\" does indeed harm aquatic plants</b>.\n Charlie <b>has read a recently published report</b> that summarizes existing research on the new UV absorber. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the UV absorber in \"SafeSol\" on aquatic plants.\n <br><br><b>Charlie thinks the likelihood of  \"SafeSol\" harming aquatic plants is 50\%.</b>`,

                "correct_compre": {
                    "Question1": `B`,
                    "Question2": `A`,
                    "Question3": `A`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },
        },
    }, 


    "condition4": {
        "intentional_independent": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + 'Taylor is the CEO of a company for farming supplies. The company plans to produce and sell a new fertilizer for agricultural farming, \"GreenLine\". If launched, \"GreenLine\" would significantly increase the company\'s profits. However, this new fertilizer includes a relatively unknown enzyme. It is possible that this enzyme would harm local wildlife if released into the ground. If this were the case, applying \"GreenLine\" would still effectively fertilize farmland, but also kill small animals like bees, birds, and rodents.  <br>The decision is now with Taylor. The new fertilizer will only go into production if Taylor approves it. <br><br>If Taylor were to find out that \"GreenLine\" does <em>not</em> harm wildlife, they would decide to launch the production of \"GreenLine\". <br><br>If Taylor were to find out that \"GreenLine\" does harm wildlife, they would <b>still</b> decide to launch the production of \"GreenLine\".<br> <br>',

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' +`One day, the company committee comes together to discuss the potential production launch of \"GreenLine\". Without Taylor\'s approval, the fertilizer would not go into production.\n Taylor approves the product. As a result of the widespread sale of \"GreenLine\", several wildlife populations are being harmed. <br><br><br><em>Please answer the following questions:</em>`+` <div style="text-align:center;background-color:white; padding:20px; max-width:900px;">`,

            "compre_questions": {
                "Question1": `If Taylor were to find out that \"Greenline\" harms wildlife...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Taylor read...`,
                "Question5": `Taylor thinks that the likelihood of \"Greenline\" harming wildlife is...`,
            },

            "compre_options": {
                "Question1": [`A. Taylor would decide <em>not</em> to launch the production of \"GreenLine\".`, `B. Taylor would still decide to launch the production of \"GreenLine\".`],
                "Question2": [`A. the enzyme in \"GreenLine\" harms wildlife.`, `B. the enzyme in \"GreenLine\" does not harm wildlife.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Taylor <b>responsible</b> for several wildlife populations having been harmed?`,
                "q2": `How likely did Taylor <b>think</b> that several wildlife populations would get harmed?`, 
                "q3": `How likely is it that Taylor <b>would have launched</b> the product had they known that several wildlife populations would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>enzyme in \"GreenLine\" does indeed harm wildlife</b>.\" Taylor has read a research report that has recently been published summarizing existing research on the new enzyme. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the enzyme in \"GreenLine\" on wildlife.\n <br><br><b>Taylor decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Taylor thinks the likelihood of \"GreenLine\" harming wildlife is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>enzyme in \"GreenLine\" does indeed harm wildlife</b>.\" Taylor has read a research report that has recently been published summarizing existing research on the new enzyme. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the enzyme in \"GreenLine\" on wildlife.\n <br><br><b>Taylor decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Taylor thinks the likelihood of \"GreenLine\" harming wildlife is 50\%.</b>`,

                "correct_compre": {
                    "Question1": `B`,
                    "Question2": `A`,
                    "Question3": `B`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },

        },

        "unintentional_dependent": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Kris is the CEO of a company for laundry products. The company plans to produce and sell a new laundry detergent, \"HomeStyle\". If launched, \"HomeStyle\" would significantly increase the company\'s profits. However, this new laundry detergent includes a relatively unknown chemical. It is possible that the chemical would lead to excessive algal growth if released into the flow of waste water. If this were the case, using the new laundry detergent \"HomeStyle\" would still effectively clean clothes, but also pollute local water systems. <br>The decision is now with Kris. The new laundry detergent will only go into production if Kris approves it. <br><br>If Kris were to find out that \"HomeStyle\" does <em>not</em> pollute local water systems, they would decide to launch the production of \"HomeStyle\". <br><br>If Kris were to find out that \"HomeStyle\" does pollute local water systems, they would decide <b>not</b> to launch the production of \"HomeStyle\".<br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' + `One day, the company committee comes together to discuss the potential production launch of \"HomeStyle\". Without Kris\'s approval, the laundry detergent would not go into production.\n Kris approves the product. As a result of the widespread sale of \"HomeStyle\", several local water systems are being polluted. <br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `If Kris were to find out that \"HomeStyle\" pollutes local water systems...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Kris read...`,
                "Question5": `Kris thinks that the likelihood of \"HomeStyle\" polluting local water systems is...`,
            },

            "compre_options": {
                "Question1": [`A. Kris would decide <em>not</em> to launch the production of \"HomeStyle\".`, `B. Kris would still decide to launch the production of \"HomeStyle\".`],
                "Question2": [`A. the chemical in \"HomeStyle\" pollutes local water systems.`, `B. the chemical in \"HomeStyle\" does not pollute local water systems.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what's in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Kris <b>responsible</b> for several local water systems having been polluted?`,
                "q2": `How likely did Kris <b>think</b> that several local water systems would get polluted?`, 
                "q3": `How likely is it that Kris <b>would have launched</b> the product had they known that several water systems would get polluted?`
            },


            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>chemical in \"HomeStyle\" does indeed pollute water</b>.\n Kris <b>has read a recently published report</b> that summarizes existing research on the new chemical. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the chemical in \"HomeStyle\" on local water systems.\n <br><br><b>Kris thinks the likelihood of  \"HomeStyle\" polluting water is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>chemical in \"HomeStyle\" does indeed pollute water</b>.\n Kris <b>has read a recently published report</b> that summarizes existing research on the new chemical. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the chemical in \"HomeStyle\" on local water systems.\n <br><br><b>Kris thinks the likelihood of  \"HomeStyle\" polluting water is 50\%.</b>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `A`,
                    "Question3": `A`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },
        },


        "unintentional_independent": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Robin is the CEO of a company for paint and varnish. The company plans to produce and sell a new exterior paint, \"ColorShine\" . If launched, \"ColorShine\" would significantly increase the company\'s profits. However, this new paint includes a relatively unknown dye. It is possible that this dye poisons the groundwater if it is washed away in the rain. If this was the case, using the new exterior paint \"ColorShine\" would still effectively vanquish outdoor furniture, but also lead to contamination of groundwater. <br>The decision is now with Robin. The new exterior paint will only go into production if Robin approves it. <br><br>If Robin were to find out that \"ColorShine\" does <em>not</em> contaminate groundwater, they would decide to launch the production of \"ColorShine\". <br><br>If Robin were to find out that \"ColorShine\" does contaminate groundwater, they would <b>still</b> decide to launch the production of \"ColorShine\".<br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+`One day, the company committee comes together to discuss the potential production launch of \"ColorShine\". Without Robin\'s approval, the exterior paint would not go into production.\n Robin approves the product. As a result of the widespread sale of \"ColorShine\", several groundwater systems are being contaminated. <br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `If Robin were to find out that \"ColorShine\" contaminates groundwater...`,
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Robin read...`,
                "Question5": `Robin thinks that the likelihood of \"ColorShine\" contaminating groundwater is...`,
            },

            "compre_options": {
                "Question1": [`A. Robin would decide <em>not</em> to launch the production of \"ColorShine\".`, `B. Robin would still decide to launch the production of \"ColorShine\".`],
                "Question2": [`A. the dye in \"ColorShine\" contaminates groundwater.`, `B. the dye in \"ColorShine\" does not contaminate groundwater.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },


            "slider_questions": {
                "q1": `To what extent is Robin <b>responsible</b> for several groundwater systems having been contaminated?`,
                "q2": `How likely did Robin <b>think</b> that several groundwater systems would get contaminated?`,
                "q3": `How likely is it that Robin <b>would have launched</b> the product had they known that several groundwater systems would get contaminated?`,
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>dye in \"ColorShine\" does indeed contaminate groundwater</b>.\n Robin <b>has read a recently published report</b> that summarizes existing research on the new dye. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the dye in \"ColorShine\" on groundwater systems.\n <br><br><b>Robin thinks the likelihood of \"ColorShine\" contaminating groundwater is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>dye in \"ColorShine\" does indeed contaminate groundwater</b>.\n Robin <b>has read a recently published report</b> that summarizes existing research on the new dye. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the dye in \"ColorShine\" on groundwater systems.\n <br><br><b>Robin thinks the likelihood of \"ColorShine\" contaminating groundwater is 50\%.</b>`,

                "correct_compre": {
                    "Question1": `B`,
                    "Question2": `A`,
                    "Question3": `A`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },
        },

        "intentional_dependent": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Charlie is the CEO of a company for sun products. The company plans to produce and sell a new sunscreen, \"SafeSol\". If launched, \"SafeSol\" would significantly increase the company\'s profits. However, this new sunscreen includes a relatively unknown UV absorber. It is possible that the UV absorber weakens the protection film of aquatic plants if washed into oceans. If this was the case, using the new sunscreen \"SafeSol\" would still effectively protect people from sunburn, but also destroy coral reefs. <br>The decision is now with Charlie. The new sunscreen will only go into production if Charlie approves it. <br><br>If Charlie were to find out that \"SafeSol\" does <em>not</em> harm aquatic plants, they would decide to launch the production of \"SafeSol\". <br><br>If Charlie were to find out that \"SafeSol\" does harm aquatic plants, they would decide <b>not</b> to launch the production of \"SafeSol\".<br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+ `One day, the company committee comes together to discuss the potential production launch of \"SafeSol\". Without Charlie\'s approval, the sunscreen would not go into production.\n Charlie approves the product. As a result of the widespread sale of \"SafeSol\", several aquatic plants are being harmed. <br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `If Charlie were to find out that \"SafeSol\" harms aquatic plants...`, 
                "Question2": `A new study finds that...`,
                "Question3": `A recently published research report...`,
                "Question4": `Charlie read...`,
                "Question5": `Charlie thinks that the likelihood of \"SafeSol\" harming aquatic plants is...`,
            },

            "compre_options": {
                "Question1": [`A. Charlie would decide <em>not</em> to launch the production of \"SafeSol\".`, `B. Charlie would still decide to launch the production of \"SafeSol\".`],
                "Question2": [`A. the UV absorber in \"SafeSol\" harms aquatic plants.`, `B. the UV absorber in \"SafeSol\" does not harm aquatic plants.`],
                "Question3": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question4": [`A. only what\'s in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question5": [`A. 50\%`, `B. 100\%`],
            },

            "slider_questions": {
                "q1": `To what extent is Charlie <b>responsible</b> for several aquatic plants having been harmed?`,
                "q2": `How likely did Charlie <b>think</b> that several aquatic plants would get harmed?`,
                "q3": `How likely is it that Charlie <b>would have launched</b> the product had they known that several aquatic plants would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>UV absorber in \"SafeSol\" does indeed harm aquatic plants</b>.\n Charlie has read a research report that has recently been published summarizing existing research on the new UV absorber. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the UV absorber in \"SafeSol\" on aquatic plants.\n <br><br><b>Charlie decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Charlie thinks the likelihood of  \"SafeSol\" harming aquatic plants is 50\%.</b> <br><br><em>Please respond to the following statements:</em>`,
                "page1_b": `There is a new scientific study showing that the <b>UV absorber in \"SafeSol\" does indeed harm aquatic plants</b>.\n Charlie has read a research report that has recently been published summarizing existing research on the new UV absorber. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the UV absorber in \"SafeSol\" on aquatic plants.\n <br><br><b>Charlie decided not to look into the new study</b> and learn what the study finds.\n <br><br><b>Charlie thinks the likelihood of  \"SafeSol\" harming aquatic plants is 50\%.</b>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `A`,
                    "Question3": `B`,
                    "Question4": `A`,
                    "Question5": `A`,
                },
            },
        },
    },

};














