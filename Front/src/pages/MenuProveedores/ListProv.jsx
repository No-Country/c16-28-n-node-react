import SearchBar from '../../components/SearchBar/SearchBar';
import ListProv from "../../components/CardsProv/Providers"

const Servicios = () => {
  return (
    <div>
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
