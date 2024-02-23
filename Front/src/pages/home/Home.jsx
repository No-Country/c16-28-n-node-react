import Main from '../../components/Main/Main';
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
          <Main />
      </section>
    </div>
  );
};
export default Home;
