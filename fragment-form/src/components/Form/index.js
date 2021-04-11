
export default function Form({title, questions, inputType}) {

        const showQuestions = questions.map(function(question) {
            return (
                <>
                <label>{question}</label>
                Answer: <input type={inputType}/>
                </>
            )
    });

        return (
            <>  
                <h1>{title}</h1>
                <form>
                    {showQuestions}
                    <input type="submit" value="Submit Answers"/>
                </form>
            </>
        )

}

