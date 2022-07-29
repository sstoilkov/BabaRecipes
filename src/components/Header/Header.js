
import './Header.module.css'

export const Header = () => {

    return (
        <header>
            <h1>
                {/* <Link className="home" to="/"> */}
                Baba Recipes
                {/* </Link> */}
            </h1>
            <nav>
                {/* <Link to="/recipe-catalog"> */}
                All recipes
                {/* </Link> */}
                <div id="user">
                    {/* <Link to="/create"> */}
                    Create Recipe </div>
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