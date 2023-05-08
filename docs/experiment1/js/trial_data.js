
const trialData = {
    "condition1": {
        "fertilizer": {

            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + 'Taylor is the CEO of a company for farming supplies. The company plans to produce and sell a new fertilizer for agricultural farming, \"GreenLine\". If launched, \"GreenLine\" would significantly increase the company\'s profits. However, this new fertilizer includes a relatively unknown enzyme. It is possible that this enzyme would harm local wildlife if released into the ground. If this were the case, applying \"GreenLine\" would still effectively fertilize farmland, but also kill small animals like bees, birds, and rodents.  <br>The decision is now with Taylor. The new fertilizer will only go into production if Taylor approves it. <br> <br>',

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' +`One day, the company committee comes together to discuss the potential production launch of \"GreenLine\". Without Taylor\'s approval, the fertilizer would not go into production.\n Taylor approves the product. As a result of the widespread sale of \"GreenLine\", several wildlife populations are being harmed.<br><br><br><em>Please answer the following questions:</em>`+` <div style="text-align:center;background-color:white; padding:20px; max-width:900px;">`,

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Taylor read`,
                "Question4": `This means that Taylor...`,
            },

            "compre_options": {
                "Question1": [`A. the enzyme in \"GreenLine\" harms wildlife.`, `B. the enzyme in \"GreenLine\" does not harm wildlife.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"GreenLine\" harms wildlife.`, `B. does not know that \"GreenLine\" harms wildlife.`],
            },


            "slider_questions": {
                "q1": `To what extent is Taylor <b>responsible</b> for several wildlife populations having been harmed?`,
                "q2": `How likely did Taylor <b>think</b> that several wildlife populations would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>enzyme in \"GreenLine\" does indeed harm wildlife</b>.\n Taylor has read a research report that has recently been published summarizing existing research on the new enzyme. The <b>report mentions the existence of the new study, and it also mentions what the study finds</b>: the harmful effect of the enzyme in \"GreenLine\" on wildlife.\n <br><br>This means that <b>Taylor knows</b> that \"GreenLine\" harms wildlife. <br><br><em>Please respond to the following statements:</em>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `C`,
                    "Question3": `A`,
                    "Question4": `A`,
                },
            },

        },

        "laundry": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Kris is the CEO of a company for laundry products. The company plans to produce and sell a new laundry detergent, \"HomeStyle\". If launched, \"HomeStyle\" would significantly increase the company\'s profits. However, this new laundry detergent includes a relatively unknown chemical. It is possible that the chemical would lead to excessive algal growth if released into the flow of waste water. If this were the case, using the new laundry detergent \"HomeStyle\" would still effectively clean clothes, but also pollute local water systems. <br>The decision is now with Kris. The new laundry detergent will only go into production if Kris approves it. <br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' + `One day, the company committee comes together to discuss the potential production launch of \"HomeStyle\". Without Kris\'s approval, the laundry detergent would not go into production.\n Kris approves the product. As a result of the widespread sale of \"HomeStyle\", several local water systems are being polluted.<br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Kris read`,
                "Question4": `This means that Kris...`,
            },

            "compre_options": {
                "Question1": [`A. the chemical in \"HomeStyle\" pollutes water.`, `B. the chemical in \"HomeStyle\" does not pollute water.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what's in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"HomeStyle\" pollutes water.`, `B. does not know that \"HomeStyle\" pollutes water.`],
            },


            "slider_questions": {
                "q1": `To what extent is Kris <b>responsible</b> for several local water systems having been polluted?`,
                "q2": `How likely did Kris <b>think</b> that several local water systems would get polluted?`
            },


            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>chemical in \"HomeStyle\" does indeed pollute water</b>.\n Kris has read a recently published report that summarizes existing research on the new chemical. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the chemical in \"HomeStyle\" on local water systems.\n <br><br>This means that <b>Kris does not know</b> that \"HomeStyle\" pollutes water.<br><br><em>Please respond to the following statements:</em>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `A`,
                    "Question3": `A`,
                    "Question4": `B`,
                },
            },
        },


        "paint": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Robin is the CEO of a company for paint and varnish. The company plans to produce and sell a new exterior paint, \"ColorShine\" . If launched, \"ColorShine\" would significantly increase the company\'s profits. However, this new paint includes a relatively unknown dye. It is possible that this dye poisons the groundwater if it is washed away in the rain. If this was the case, using the new exterior paint \"ColorShine\" would still effectively vanquish outdoor furniture, but also lead to contamination of groundwater. <br>The decision is now with Robin. The new exterior paint will only go into production if Robin approves it. <br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+`One day, the company committee comes together to discuss the potential production launch of \"ColorShine\". Without Robin\'s approval, the exterior paint would not go into production.\n Robin approves the product. As a result of the widespread sale of \"ColorShine\", several groundwater systems are being contaminated.<br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Robin read`,
                "Question4": `This means that Robin...`,
            },

            "compre_options": {
                "Question1": [`A. the dye in \"ColorShine\" contaminates groundwater.`, `B. the dye in \"ColorShine\" does not contaminate groundwater.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"ColorShine\" contaminates groundwater.`, `B. does not know that \"ColorShine\" contaminates groundwater.`],
            },


            "slider_questions": {
                "q1": `To what extent is Robin <b>responsible</b> for several groundwater systems having been contaminated?`,
                "q2": `How likely did Robin <b>think</b> that several groundwater systems would get contaminated?`,
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>dye in \"ColorShine\" does indeed contaminate groundwater</b>.\n Robin has read a research report that has recently been published summarizing existing research on the new dye. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the dye in \"ColorShine\" on groundwater systems.\n <br><br><b>Robin decided to look into the new study</b> and learn what the study finds. <br><br>This means that <b>Robin knows</b> that \"ColorShine\" contaminates groundwater.<br><br><em>Please respond to the following statements:</em>`,
                    "correct_compre": {
                    "Question1": `A`,
                    "Question2": `B`,
                    "Question3": `B`,
                    "Question4": `A`,
                },
            },
        },

        "sunscreen": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Charlie is the CEO of a company for sun products. The company plans to produce and sell a new sunscreen, \"SafeSol\". If launched, \"SafeSol\" would significantly increase the company\'s profits. However, this new sunscreen includes a relatively unknown UV absorber. It is possible that the UV absorber weakens the protection film of aquatic plants if washed into oceans. If this was the case, using the new sunscreen \"SafeSol\" would still effectively protect people from sunburn, but also destroy coral reefs. <br>The decision is now with Charlie. The new sunscreen will only go into production if Charlie approves it. <br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+ `One day, the company committee comes together to discuss the potential production launch of \"SafeSol\". Without Charlie\'s approval, the sunscreen would not go into production.\n Charlie approves the product. As a result of the widespread sale of \"SafeSol\", several aquatic plants are being harmed.<br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Charlie read`,
                "Question4": `This means that Charlie...`,
            },

            "compre_options": {
                "Question1": [`A. the UV absorber in \"SafeSol\" harms aquatic plants.`, `B. the UV absorber in \"SafeSol\" does not harm aquatic plants.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what\'s in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"SafeSol\" harms aquatic plants.`, `B. does not know that \"SafeSol\" harms aquatic plants.`],
            },


            "slider_questions": {
                "q1": `To what extent is Charlie <b>responsible</b> for several aquatic plants having been harmed?`,
                "q2": `How likely did Charlie <b>think</b> that several aquatic plants would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>UV absorber in \"SafeSol\" does indeed harm aquatic plants</b>.\n Charlie has read a research report that has recently been published summarizing existing research on the new UV absorber. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the UV absorber in \"SafeSol\" on aquatic plants.\n <br><br><b>Charlie decided not to look into the new study</b> and learn what the study finds.\n <br><br>This means that <b>Charlie does not know</b> that \"SafeSol\" harms aquatic plants.<br><br><em>Please respond to the following statements:</em>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `B`,
                    "Question3": `A`,
                    "Question4": `B`,
                },
            },
        },
    },    
    

    "condition2": {
        "fertilizer": {

            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + 'Taylor is the CEO of a company for farming supplies. The company plans to produce and sell a new fertilizer for agricultural farming, \"GreenLine\". If launched, \"GreenLine\" would significantly increase the company\'s profits. However, this new fertilizer includes a relatively unknown enzyme. It is possible that this enzyme would harm local wildlife if released into the ground. If this were the case, applying \"GreenLine\" would still effectively fertilize farmland, but also kill small animals like bees, birds, and rodents.  <br>The decision is now with Taylor. The new fertilizer will only go into production if Taylor approves it. <br> <br>',

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' +`One day, the company committee comes together to discuss the potential production launch of \"GreenLine\". Without Taylor\'s approval, the fertilizer would not go into production.\n Taylor approves the product. As a result of the widespread sale of \"GreenLine\", several wildlife populations are being harmed.<br><br><br><em>Please answer the following questions:</em>`+` <div style="text-align:center;background-color:white; padding:20px; max-width:900px;">`,

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Taylor read`,
                "Question4": `This means that Taylor...`,
            },

            "compre_options": {
                "Question1": [`A. the enzyme in \"GreenLine\" harms wildlife.`, `B. the enzyme in \"GreenLine\" does not harm wildlife.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"GreenLine\" harms wildlife.`, `B. does not know that \"GreenLine\" harms wildlife.`],
            },


            "slider_questions": {
                "q1": `To what extent is Taylor <b>responsible</b> for several wildlife populations having been harmed?`,
                "q2": `How likely did Taylor <b>think</b> that several wildlife populations would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>enzyme in \"GreenLine\" does indeed harm wildlife</b>.\n Taylor has read a recently published report that summarizes existing research on the new enzyme. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the enzyme in \"GreenLine\" on wildlife. \n <br><br>This means that <b>Taylor does not know</b> that \"GreenLine\" harms wildlife.<br><br><em>Please respond to the following statements:</em>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `A`,
                    "Question3": `A`,
                    "Question4": `B`,
                },
            },

        },

        "laundry": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Kris is the CEO of a company for laundry products. The company plans to produce and sell a new laundry detergent, \"HomeStyle\". If launched, \"HomeStyle\" would significantly increase the company\'s profits. However, this new laundry detergent includes a relatively unknown chemical. It is possible that the chemical would lead to excessive algal growth if released into the flow of waste water. If this were the case, using the new laundry detergent \"HomeStyle\" would still effectively clean clothes, but also pollute local water systems. <br>The decision is now with Kris. The new laundry detergent will only go into production if Kris approves it. <br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' + `One day, the company committee comes together to discuss the potential production launch of \"HomeStyle\". Without Kris\'s approval, the laundry detergent would not go into production.\n Kris approves the product. As a result of the widespread sale of \"HomeStyle\", several local water systems are being polluted.<br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Kris read`,
                "Question4": `This means that Kris...`,
            },

            "compre_options": {
                "Question1": [`A. the chemical in \"HomeStyle\" pollutes water.`, `B. the chemical in \"HomeStyle\" does not pollute water.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what's in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"HomeStyle\" pollutes water.`, `B. does not know that \"HomeStyle\" pollutes water.`],
            },


            "slider_questions": {
                "q1": `To what extent is Kris <b>responsible</b> for several local water systems having been polluted?`,
                "q2": `How likely did Kris <b>think</b> that several local water systems would get polluted?`
            },


            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>chemical in \"HomeStyle\" does indeed pollute water</b>.\n Kris has read a research report that has recently been published summarizing existing research on the new chemical. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the chemical in \"HomeStyle\" on local water systems.\n <br><br><b>Kris decided to look into the new study</b> and learn what the study finds.\n <br><br>This means that <b>Kris knows</b> that \"HomeStyle\" pollutes water.<br><br><em>Please respond to the following statements::</em>`,
                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `B`,
                    "Question3": `B`,
                    "Question4": `A`,
                },
            },
        },


        "paint": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Robin is the CEO of a company for paint and varnish. The company plans to produce and sell a new exterior paint, \"ColorShine\" . If launched, \"ColorShine\" would significantly increase the company\'s profits. However, this new paint includes a relatively unknown dye. It is possible that this dye poisons the groundwater if it is washed away in the rain. If this was the case, using the new exterior paint \"ColorShine\" would still effectively vanquish outdoor furniture, but also lead to contamination of groundwater. <br>The decision is now with Robin. The new exterior paint will only go into production if Robin approves it. <br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+`One day, the company committee comes together to discuss the potential production launch of \"ColorShine\". Without Robin\'s approval, the exterior paint would not go into production.\n Robin approves the product. As a result of the widespread sale of \"ColorShine\", several groundwater systems are being contaminated.<br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Robin read`,
                "Question4": `This means that Robin...`,
            },

            "compre_options": {
                "Question1": [`A. the dye in \"ColorShine\" contaminates groundwater.`, `B. the dye in \"ColorShine\" does not contaminate groundwater.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"ColorShine\" contaminates groundwater.`, `B. does not know that \"ColorShine\" contaminates groundwater.`],
            },


            "slider_questions": {
                "q1": `To what extent is Robin <b>responsible</b> for several groundwater systems having been contaminated?`,
                "q2": `How likely did Robin <b>think</b> that several groundwater systems would get contaminated?`,
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>dye in \"ColorShine\" does indeed contaminate groundwater</b>.\n Robin has read a research report that has recently been published summarizing existing research on the new dye. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the dye in \"ColorShine\" on groundwater systems.\n <br><br><b>Robin decided not to look into the new study</b> and learn what the study finds.\n <br><br>This means that <b>Robin does not know</b> that \"ColorShine\" contaminates groundwater.<br><br><em>Please respond to the following statements:</em>`,
                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `B`,
                    "Question3": `A`,
                    "Question4": `B`,
                },
            },
        },

        "sunscreen": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Charlie is the CEO of a company for sun products. The company plans to produce and sell a new sunscreen, \"SafeSol\". If launched, \"SafeSol\" would significantly increase the company\'s profits. However, this new sunscreen includes a relatively unknown UV absorber. It is possible that the UV absorber weakens the protection film of aquatic plants if washed into oceans. If this was the case, using the new sunscreen \"SafeSol\" would still effectively protect people from sunburn, but also destroy coral reefs. <br>The decision is now with Charlie. The new sunscreen will only go into production if Charlie approves it. <br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+ `One day, the company committee comes together to discuss the potential production launch of \"SafeSol\". Without Charlie\'s approval, the sunscreen would not go into production.\n Charlie approves the product. As a result of the widespread sale of \"SafeSol\", several aquatic plants are being harmed.<br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Charlie read`,
                "Question4": `This means that Charlie...`,
            },

            "compre_options": {
                "Question1": [`A. the UV absorber in \"SafeSol\" harms aquatic plants.`, `B. the UV absorber in \"SafeSol\" does not harm aquatic plants.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what\'s in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"SafeSol\" harms aquatic plants.`, `B. does not know that \"SafeSol\" harms aquatic plants.`],
            },


            "slider_questions": {
                "q1": `To what extent is Charlie <b>responsible</b> for several aquatic plants having been harmed?`,
                "q2": `How likely did Charlie <b>think</b> that several aquatic plants would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>UV absorber in \"SafeSol\" does indeed harm aquatic plants</b>.\n Charlie has read a research report that has recently been published summarizing existing research on the new UV absorber. The <b>report mentions the existence of the new study, and it also mentions what the study finds</b>: the harmful effect of the UV absorber in \"SafeSol\" on aquatic plants.\n <br><br>This means that <b>Charlie knows</b> that \"SafeSol\" harms aquatic plants.<br><br><em>Please respond to the following statements:</em>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `C`,
                    "Question3": `A`,
                    "Question4": `A`,
                },
            },
        },
    },

    "condition3": {
        "fertilizer": {

            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + 'Taylor is the CEO of a company for farming supplies. The company plans to produce and sell a new fertilizer for agricultural farming, \"GreenLine\". If launched, \"GreenLine\" would significantly increase the company\'s profits. However, this new fertilizer includes a relatively unknown enzyme. It is possible that this enzyme would harm local wildlife if released into the ground. If this were the case, applying \"GreenLine\" would still effectively fertilize farmland, but also kill small animals like bees, birds, and rodents.  <br>The decision is now with Taylor. The new fertilizer will only go into production if Taylor approves it. <br> <br>',

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' +`One day, the company committee comes together to discuss the potential production launch of \"GreenLine\". Without Taylor\'s approval, the fertilizer would not go into production.\n Taylor approves the product. As a result of the widespread sale of \"GreenLine\", several wildlife populations are being harmed.<br><br><br><em>Please answer the following questions:</em>`+` <div style="text-align:center;background-color:white; padding:20px; max-width:900px;">`,

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Taylor read`,
                "Question4": `This means that Taylor...`,
            },

            "compre_options": {
                "Question1": [`A. the enzyme in \"GreenLine\" harms wildlife.`, `B. the enzyme in \"GreenLine\" does not harm wildlife.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"GreenLine\" harms wildlife.`, `B. does not know that \"GreenLine\" harms wildlife.`],
            },


            "slider_questions": {
                "q1": `To what extent is Taylor <b>responsible</b> for several wildlife populations having been harmed?`,
                "q2": `How likely did Taylor <b>think</b> that several wildlife populations would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>enzyme in \"GreenLine\" does indeed harm wildlife</b>.\n Taylor has read a research report that has recently been published summarizing existing research on the new enzyme. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the enzyme in \"GreenLine\" on wildlife.\n <br><br><b>Taylor decided to look into the new study</b> and learn what the study finds. <br><br>This means that <b>Taylor knows</b> that \"GreenLine\" harms wildlife.<br><br><em>Please respond to the following statements:</em>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `B`,
                    "Question3": `B`,
                    "Question4": `A`,
                },
            },

        },

        "laundry": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Kris is the CEO of a company for laundry products. The company plans to produce and sell a new laundry detergent, \"HomeStyle\". If launched, \"HomeStyle\" would significantly increase the company\'s profits. However, this new laundry detergent includes a relatively unknown chemical. It is possible that the chemical would lead to excessive algal growth if released into the flow of waste water. If this were the case, using the new laundry detergent \"HomeStyle\" would still effectively clean clothes, but also pollute local water systems. <br>The decision is now with Kris. The new laundry detergent will only go into production if Kris approves it. <br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' + `One day, the company committee comes together to discuss the potential production launch of \"HomeStyle\". Without Kris\'s approval, the laundry detergent would not go into production.\n Kris approves the product. As a result of the widespread sale of \"HomeStyle\", several local water systems are being polluted.<br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Kris read`,
                "Question4": `This means that Kris...`,
            },

            "compre_options": {
                "Question1": [`A. the chemical in \"HomeStyle\" pollutes water.`, `B. the chemical in \"HomeStyle\" does not pollute water.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what's in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"HomeStyle\" pollutes water.`, `B. does not know that \"HomeStyle\" pollutes water.`],
            },


            "slider_questions": {
                "q1": `To what extent is Kris <b>responsible</b> for several local water systems having been polluted?`,
                "q2": `How likely did Kris <b>think</b> that several local water systems would get polluted?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>chemical in \"HomeStyle\" does indeed pollute water</b>.\n Kris has read a research report that has recently been published summarizing existing research on the new chemical. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the chemical in \"HomeStyle\" on local water systems.\n <br><br><b>Kris decided not to look into the new study</b> and learn what the study finds.\n <br><br>This means that <b>Kris does not know </b>that \"HomeStyle\" pollutes water.<br><br><em>Please respond to the following statements:</em>`,
                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `B`,
                    "Question3": `A`,
                    "Question4": `B`,
                },
            }
        },


        "paint": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Robin is the CEO of a company for paint and varnish. The company plans to produce and sell a new exterior paint, \"ColorShine\" . If launched, \"ColorShine\" would significantly increase the company\'s profits. However, this new paint includes a relatively unknown dye. It is possible that this dye poisons the groundwater if it is washed away in the rain. If this was the case, using the new exterior paint \"ColorShine\" would still effectively vanquish outdoor furniture, but also lead to contamination of groundwater. <br>The decision is now with Robin. The new exterior paint will only go into production if Robin approves it. <br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+`One day, the company committee comes together to discuss the potential production launch of \"ColorShine\". Without Robin\'s approval, the exterior paint would not go into production.\n Robin approves the product. As a result of the widespread sale of \"ColorShine\", several groundwater systems are being contaminated.<br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Robin read`,
                "Question4": `This means that Robin...`,
            },

            "compre_options": {
                "Question1": [`A. the dye in \"ColorShine\" contaminates groundwater.`, `B. the dye in \"ColorShine\" does not contaminate groundwater.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"ColorShine\" contaminates groundwater.`, `B. does not know that \"ColorShine\" contaminates groundwater.`],
            },


            "slider_questions": {
                "q1": `To what extent is Robin <b>responsible</b> for several groundwater systems having been contaminated?`,
                "q2": `How likely did Robin <b>think</b> that several groundwater systems would get contaminated?`,
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>dye in \"ColorShine\" does indeed contaminate groundwater</b>.\n Robin has read a research report that has recently been published summarizing existing research on the new dye. The <b>report mentions the existence of the new study, and it also mentions what the study finds</b>: the harmful effect of the dye in \"ColorShine\" on groundwater systems.\n <br><br>This means that <b>Robin knows</b> that \"ColorShine\" contaminates groundwater.<br><br><em>Please respond to the following statements:</em>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `C`,
                    "Question3": `A`,
                    "Question4": `A`,
                },
            },
        },

        "sunscreen": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Charlie is the CEO of a company for sun products. The company plans to produce and sell a new sunscreen, \"SafeSol\". If launched, \"SafeSol\" would significantly increase the company\'s profits. However, this new sunscreen includes a relatively unknown UV absorber. It is possible that the UV absorber weakens the protection film of aquatic plants if washed into oceans. If this was the case, using the new sunscreen \"SafeSol\" would still effectively protect people from sunburn, but also destroy coral reefs. <br>The decision is now with Charlie. The new sunscreen will only go into production if Charlie approves it. <br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+ `One day, the company committee comes together to discuss the potential production launch of \"SafeSol\". Without Charlie\'s approval, the sunscreen would not go into production.\n Charlie approves the product. As a result of the widespread sale of \"SafeSol\", several aquatic plants are being harmed.<br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Charlie read`,
                "Question4": `This means that Charlie...`,
            },

            "compre_options": {
                "Question1": [`A. the UV absorber in \"SafeSol\" harms aquatic plants.`, `B. the UV absorber in \"SafeSol\" does not harm aquatic plants.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what\'s in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"SafeSol\" harms aquatic plants.`, `B. does not know that \"SafeSol\" harms aquatic plants.`],
            },


            "slider_questions": {
                "q1": `To what extent is Charlie <b>responsible</b> for several aquatic plants having been harmed?`,
                "q2": `How likely did Charlie <b>think</b> that several aquatic plants would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>UV absorber in \"SafeSol\" does indeed harm aquatic plants</b>.\n Charlie has read a recently published report that summarizes existing research on the new UV absorber. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the UV absorber in \"SafeSol\" on aquatic plants.\n <br><br>This means that <b>Charlie does not know</b> that \"SafeSol\" harms aquatic plants.<br><br><em>Please respond to the following statements:</em>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `A`,
                    "Question3": `A`,
                    "Question4": `B`,
                },
            },
        },
    },


    "condition4": {
        "fertilizer": {

            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + 'Taylor is the CEO of a company for farming supplies. The company plans to produce and sell a new fertilizer for agricultural farming, \"GreenLine\". If launched, \"GreenLine\" would significantly increase the company\'s profits. However, this new fertilizer includes a relatively unknown enzyme. It is possible that this enzyme would harm local wildlife if released into the ground. If this were the case, applying \"GreenLine\" would still effectively fertilize farmland, but also kill small animals like bees, birds, and rodents.  <br>The decision is now with Taylor. The new fertilizer will only go into production if Taylor approves it. <br> <br>',

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' +`One day, the company committee comes together to discuss the potential production launch of \"GreenLine\". Without Taylor\'s approval, the fertilizer would not go into production.\n Taylor approves the product. As a result of the widespread sale of \"GreenLine\", several wildlife populations are being harmed.<br><br><br><em>Please answer the following questions:</em>`+` <div style="text-align:center;background-color:white; padding:20px; max-width:900px;">`,

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Taylor read`,
                "Question4": `This means that Taylor...`,
            },

            "compre_options": {
                "Question1": [`A. the enzyme in \"GreenLine\" harms wildlife.`, `B. the enzyme in \"GreenLine\" does not harm wildlife.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"GreenLine\" harms wildlife.`, `B. does not know that \"GreenLine\" harms wildlife.`],
            },


            "slider_questions": {
                "q1": `To what extent is Taylor <b>responsible</b> for several wildlife populations having been harmed?`,
                "q2": `How likely did Taylor <b>think</b> that several wildlife populations would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>enzyme in \"GreenLine\" does indeed harm wildlife</b>.\" Taylor has read a research report that has recently been published summarizing existing research on the new enzyme. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the enzyme in \"GreenLine\" on wildlife.\n <br><br><b>Taylor decided not to look into the new study</b> and learn what the study finds.\n <br><br>This means that <b>Taylor does not know</b> that \"GreenLine\" harms wildlife.<br><br><em>Please respond to the following statements:</em>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `B`,
                    "Question3": `A`,
                    "Question4": `B`,
                },
            },

        },

        "laundry": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Kris is the CEO of a company for laundry products. The company plans to produce and sell a new laundry detergent, \"HomeStyle\". If launched, \"HomeStyle\" would significantly increase the company\'s profits. However, this new laundry detergent includes a relatively unknown chemical. It is possible that the chemical would lead to excessive algal growth if released into the flow of waste water. If this were the case, using the new laundry detergent \"HomeStyle\" would still effectively clean clothes, but also pollute local water systems. <br>The decision is now with Kris. The new laundry detergent will only go into production if Kris approves it. <br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>' + `One day, the company committee comes together to discuss the potential production launch of \"HomeStyle\". Without Kris\'s approval, the laundry detergent would not go into production.\n Kris approves the product. As a result of the widespread sale of \"HomeStyle\", several local water systems are being polluted.<br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Kris read`,
                "Question4": `This means that Kris...`,
            },

            "compre_options": {
                "Question1": [`A. the chemical in \"HomeStyle\" pollutes water.`, `B. the chemical in \"HomeStyle\" does not pollute water.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what's in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"HomeStyle\" pollutes water.`, `B. does not know that \"HomeStyle\" pollutes water.`],
            },


            "slider_questions": {
                "q1": `To what extent is Kris <b>responsible</b> for several local water systems having been polluted?`,
                "q2": `How likely did Kris <b>think</b> that several local water systems would get polluted?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>chemical in \"HomeStyle\" does indeed pollute water</b>.\n Kris has read a recently published report that summarizes existing research on the new chemical. The <b>report mentions the existence of the new study, and it also mentions what the study finds</b>: the harmful effect of the chemical in \"HomeStyle\" on local water systems.\n <br><br>This means that <b>Kris knows</b> that \"HomeStyle\" pollutes water.<br><br><em>Please respond to the following statements:</em>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `C`,
                    "Question3": `A`,
                    "Question4": `A`,
                },
            }
        },


        "paint": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Robin is the CEO of a company for paint and varnish. The company plans to produce and sell a new exterior paint, \"ColorShine\" . If launched, \"ColorShine\" would significantly increase the company\'s profits. However, this new paint includes a relatively unknown dye. It is possible that this dye poisons the groundwater if it is washed away in the rain. If this was the case, using the new exterior paint \"ColorShine\" would still effectively vanquish outdoor furniture, but also lead to contamination of groundwater. <br>The decision is now with Robin. The new exterior paint will only go into production if Robin approves it. <br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+`One day, the company committee comes together to discuss the potential production launch of \"ColorShine\". Without Robin\'s approval, the exterior paint would not go into production.\n Robin approves the product. As a result of the widespread sale of \"ColorShine\", several groundwater systems are being contaminated.<br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Robin read`,
                "Question4": `This means that Robin...`,
            },

            "compre_options": {
                "Question1": [`A. the dye in \"ColorShine\" contaminates groundwater.`, `B. the dye in \"ColorShine\" does not contaminate groundwater.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what\'s in the report.`, `B. what\'s in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"ColorShine\" contaminates groundwater.`, `B. does not know that \"ColorShine\" contaminates groundwater.`],
            },


            "slider_questions": {
                "q1": `To what extent is Robin <b>responsible</b> for several groundwater systems having been contaminated?`,
                "q2": `How likely did Robin <b>think</b> that several groundwater systems would get contaminated?`,
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>dye in \"ColorShine\" does indeed contaminate groundwater</b>.\n Robin has read a recently published report that summarizes existing research on the new dye. However, the <b>report fails to mention the existence of the new study and what the study finds</b>: the harmful effect of the dye in \"ColorShine\" on groundwater systems.\n <br><br>This means that <b>Robin does not know</b> that \"ColorShine\" contaminates groundwater.<br><br><em>Please respond to the following statements:</em>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `A`,
                    "Question3": `A`,
                    "Question4": `B`,
                },
            },
        },

        "sunscreen": {
            "intro": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 1</center></h4>' + `Charlie is the CEO of a company for sun products. The company plans to produce and sell a new sunscreen, \"SafeSol\". If launched, \"SafeSol\" would significantly increase the company\'s profits. However, this new sunscreen includes a relatively unknown UV absorber. It is possible that the UV absorber weakens the protection film of aquatic plants if washed into oceans. If this was the case, using the new sunscreen \"SafeSol\" would still effectively protect people from sunburn, but also destroy coral reefs. <br>The decision is now with Charlie. The new sunscreen will only go into production if Charlie approves it. <br> <br>`,

            "page2": '<div style="text-align:left;background-color:white; padding:20px; max-width:900px;">'+'<h4><center>Scenario Part 2</center></h4>'+ `One day, the company committee comes together to discuss the potential production launch of \"SafeSol\". Without Charlie\'s approval, the sunscreen would not go into production.\n Charlie approves the product. As a result of the widespread sale of \"SafeSol\", several aquatic plants are being harmed.<br><br><br><em>Please answer the following questions:</em>`+'<div style="text-align:center;background-color:white; padding:20px; max-width:900px;">',

            "compre_questions": {
                "Question1": `A new study finds that...`,
                "Question2": `A recently published research report...`,
                "Question3": `Charlie read`,
                "Question4": `This means that Charlie...`,
            },

            "compre_options": {
                "Question1": [`A. the UV absorber in \"SafeSol\" harms aquatic plants.`, `B. the UV absorber in \"SafeSol\" does not harm aquatic plants.`],
                "Question2": [`A. fails to mention the existence of the new study.`, `B. mentions the existence of the new study, but not what it finds.`, `C. mentions the existence of the new study and also what it finds.`],
                "Question3": [`A. only what\'s in the report.`, `B. what's in the report and also decided to look into the new study.`],
                "Question4": [`A. knows that \"SafeSol\" harms aquatic plants.`, `B. does not know that \"SafeSol\" harms aquatic plants.`],
            },


            "slider_questions": {
                "q1": `To what extent is Charlie <b>responsible</b> for several aquatic plants having been harmed?`,
                "q2": `How likely did Charlie <b>think</b> that several aquatic plants would get harmed?`
            },

            "scenarioContext": {
                "page1": `There is a new scientific study showing that the <b>UV absorber in \"SafeSol\" does indeed harm aquatic plants</b>.\n Charlie has read a research report that has recently been published summarizing existing research on the new UV absorber. The <b>report mentions the existence of the new study, but it does not mention what the study finds</b>: the harmful effect of the UV absorber in \"SafeSol\" on aquatic plants.\n <br><br><b>Charlie decided to look into the new study</b> and learn what the study finds.\n <br><br>This means that <b>Charlie knows</b> that \"SafeSol\" harms aquatic plants.<br><br><em>Please respond to the following statements:</em>`,

                "correct_compre": {
                    "Question1": `A`,
                    "Question2": `B`,
                    "Question3": `B`,
                    "Question4": `A`,
                },
            },
        },
    },

};














