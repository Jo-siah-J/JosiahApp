import Student from './Student.jsx'

function App() {

    return (
        <>
            <Student name= "Josiah" age={25} isStudent={true}/>
            <Student name= "Mejia" age={29} isStudent={true}/>
            <Student name= "Bryce" age={23} isStudent={false}/>
            <Student name= "Nathan" age={27} isStudent={false}/>
            <Student name= "Jun"/>
        </>
    );
 
}

export default App
