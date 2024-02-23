import MainHome from '../../components/MainHome/MainHome';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
const Home = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section>
        <SearchBar />
      </section>
      <section>
          <MainHome />
      </section>
    </div>
  );
};
export default Home;
