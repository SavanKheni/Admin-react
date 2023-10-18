import Grothcard from "../components/Grothcard";
import Rightsidebar from "../components/Rightsidebar";
import Totalcost from "../components/Totalcost";
import Transastionhistory from "../components/Transastionhistory";

const Dashboard = () => {
  return (
    <section>
      <div className="desktop:flex desktop-small:flex first-letter:">
        <div className="desktop:w-[75%] desktop-small:w-[75%] px-7 flex flex-col gap-6">
          <Grothcard />
          <Totalcost />
          <Transastionhistory />
        </div>
        <div className="desktop:w-[24%] desktop-small:w-[24%] px-7 desktop:px-0 desktop-small:px-0">
          <Rightsidebar />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
