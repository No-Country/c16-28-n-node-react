import NavBar from "../../components/NavBar/NavBar"
import SearchBar from "../../components/SearchBar/SearchBar"
const Home = () => {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <section>
                <SearchBar/>
            </section>
            <section></section>
        </div>
    )
}

export default Home