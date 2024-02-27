import SearchBar from '../../components/SearchBar/SearchBar';
import ListProv from "../../components/CardsProv/ProvidersList"
import { BreadcrumbProveedores } from '../../components/breadcrumb/breadcrumbs';

const Servicios = () => {
  return (
    <div>
      <section>
        <SearchBar />
      </section>
      <section>
      <BreadcrumbProveedores/>
      </section>
      <section>
        <ListProv/>
      </section>
    </div>
  );
};
export default Servicios;
