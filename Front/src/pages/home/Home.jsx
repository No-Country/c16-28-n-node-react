import MainHome from '../../components/MainHome/MainHome';
import SearchBar from '../../components/SearchBar/SearchBar';
const Home = () => {
  return (
    <div>
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
