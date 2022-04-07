const Data = {
    title: "Hello, select between this 2 continents",
    options: {
        africa: "Africa",
        europe: "Europe"
    },
    africa: {
        title: "What kind of mutation could help the pathogen in Africa to survive?",
        options: {
            cold_resistance: "Cold Resistance",
            heat_resistance: "Heat Resistance"
        },
        ColdResistance: {
                title: "As it evolved, the pathogen has died because it did not support Africa high temperatures."
            },
        HeatResistance: {
                title: "As it evolved, the pathogen manages to infect the majority of the population due to its resistance to heat. Its time the pathogen to go another continent. Select the next continent.",
                options: {
                    america: "America",
                    europe: "Europe"
                },
                Europe: {
                    title: "The pathogen entered the continent, but after some months, it finally dies due to Europe low temperatures."
                },
                America: {
                    title: "The pathogen entered and infected some population, specifically in tropical areas.",
                },
            },
    },
    europe: {
        title: "What kind of mutation could help the pathogen in Europe to survive?",
        options: {
            drugs_resistance: "Drugs Resistance",
            bact_resistance: "Bacterial Resistance"
        },
        BactResistance: {
            title: "Bacterial Resistance helped the pathogen to infect most countries with climatic variety, but did not improve its survival time in Europe, as this continent has a fast response to new diseases.",
        },
        DrugsResistance: {
            title: "Drugs resistance helped the pathogen to infect most pupulation, with more effectiveness in rich areas.",
        }
    }
}

export default Data;