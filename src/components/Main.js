import React from "react";

export default function Main(props) {
    const [title, setTitle] = React.useState(props.title)
    const [answer1, setAnswer1] = React.useState(props.options.africa)
    const [answer2, setAnswer2] = React.useState(props.options.europe)

    function finish() {
        setAnswer1(false)
        setAnswer2(false)
    }

    function responseAnswer1() {
        if (answer1 === props.options.africa) {
            setTitle(props.africa.title)
            setAnswer1(props.africa.options.cold_resistance)
            setAnswer2(props.africa.options.heat_resistance)
        }
        else if (answer1 === props.africa.options.cold_resistance) {
            setTitle(props.africa.ColdResistance.title)
            finish()
        }
        else if (answer1=== props.africa.HeatResistance.options.europe) {
            setTitle(props.africa.HeatResistance.Europe.title)
            finish()
        }
        else if (answer1 === props.europe.options.drugs_resistance) {
            setTitle(props.europe.DrugsResistance.title)
            finish()
        }
    }

    function responseAnswer2() {
        if (answer2 === props.options.europe) {
            setTitle(props.europe.title)
            setAnswer1(props.europe.options.drugs_resistance)
            setAnswer2(props.europe.options.bact_resistance)
        }
        else if (answer2 === props.africa.options.heat_resistance) {
            setTitle(props.africa.HeatResistance.title)
            setAnswer1(props.africa.HeatResistance.options.europe)
            setAnswer2(props.africa.HeatResistance.options.america)
        }
        else if (answer2 === props.africa.HeatResistance.options.america) {
            setTitle(props.africa.HeatResistance.America.title)
            finish()
        }
        else if (answer2 === props.europe.options.bact_resistance) {
            setTitle(props.europe.BactResistance.title)
            finish()
        }
    }

	return (
		<main className="main-container">
            <div className="main--header">
                <h1>{title}</h1>
            </div>
            {
                <div className="main--answers">
                    {
                        answer1 !== false &&
                        <button onClick={responseAnswer1} className="main--button">
                            {answer1}
                        </button>
                    }
                    {
                        answer2 !== false &&
                        <button onClick={responseAnswer2} className="main--button">
                            {answer2}
                        </button>
                    }
                </div>
            }
        </main>
	)
}