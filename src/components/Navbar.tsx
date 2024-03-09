import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center text-lg">
            <Link to='/' >About me</Link>
            <Link to='/portfolio' className="mx-60">Portfolio</Link>
            <Link to='/contact' >Contact</Link>
        </nav>
    )
}

export default Navbar