import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <main className="flex w-full">
      <SideBar />
      <div className="desktop:w-4/5">
        <Header />
        <Dashboard />
      </div>
    </main>
  );
};

export default App;
