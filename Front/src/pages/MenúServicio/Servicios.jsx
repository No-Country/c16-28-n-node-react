
import SearchBar from '../../components/SearchBar/SearchBar';
import List from "../../components/CardsServices/ServiceList"
import { BreadcrumbServicios } from '../../components/breadcrumb/breadcrumbs';

const Servicios = () => {
  return (
    <div>
      <section>
        <SearchBar />
      </section>
      <section>
        <BreadcrumbServicios/>
      </section>
      <section>
      <List/>
      </section>
    </div>
  );
};
export default Servicios;
