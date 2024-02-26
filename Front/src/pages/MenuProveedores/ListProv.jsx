import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import ListProv from "../../components/CardsProv/Providers"

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
        <ListProv/>
      </section>
    </div>
  );
};
export default Servicios;
