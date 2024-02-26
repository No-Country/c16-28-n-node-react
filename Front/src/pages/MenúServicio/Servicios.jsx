import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import List from "../../components/CardsServices/ServiceList"

const Servicios = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section>
        <SearchBar />
      </section>
      <section>
      <List/>
      </section>
    </div>
  );
};
export default Servicios;
