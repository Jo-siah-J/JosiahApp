
/*
function UserGreeting(props){

--- easier to read ternary
    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2>

    const loginPrompt =    <h2 className="login-prompt">
                           Please log in to continue
                           </h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);


--- return props using ternary
    return(props.isLoggedIn ?   <h2 className="welcome-message">Welcome {props.username}</h2> : 
                                <h2 className="login-prompt">Please log in to continue</h2>);
 

---return props using if/ else 
    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    return <h2>Please log in to continue</h2>

}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting

*/

