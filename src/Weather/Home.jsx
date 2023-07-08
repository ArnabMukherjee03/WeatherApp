import Search from "./Search";
import Weather from "./Weather";
const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#222]">
        <div className="w-[340px] h-[420px]  rounded-2xl bgColor">
          <Search />
          <Weather />
        </div>
      </div>
    </>
  );
};

export default Home;
