
export const Header = () => {

    return (
        <header>
            <h1>
                {/* <Link className="home" to="/"> */}
                    GamesPlay
                {/* </Link> */}
            </h1>
            <nav>
                {/* <Link to="/catalog"> */}
                    All games
                {/* </Link> */}
                <div id="user">
                    {/* <Link to="/create"> */}
                        Create Game </div>
                    {/* </Link>
                    <Link to="/logout"> */}
                    <div>
                        Logout
                    {/* </Link> remove div*/}
                </div> 
          
                <div id="guest">
                    {/* <Link to="/login"> */}
                        Login
                    {/* </Link>
                    <Link to="/register"> */}
                        Register
                    {/* </Link> */}
                </div>
            </nav>
        </header>
    )
}