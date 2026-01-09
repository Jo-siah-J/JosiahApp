import profilePic from './assets/IMG_0649.JPG';


function Card (){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2>Josiah Williams</h2>
            <p>I am active duty Military and I maintain a disciplined training regimen across grappling and striking combat systems.</p>
        </div>
    );
}

export default Card