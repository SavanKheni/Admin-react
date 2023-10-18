import Grothcard from "../components/Grothcard";
import Rightsidebar from "../components/Rightsidebar";
import Totalcost from "../components/Totalcost";
import Transastionhistory from "../components/Transastionhistory";

const Dashboard = () => {
  return (
    <section>
      <div className="flex">
        <div className="w-[75%] px-7 flex flex-col gap-6">
          <Grothcard />
          <Totalcost />
          <Transastionhistory />
        </div>
        <div className="w-[24%]">
          <Rightsidebar />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
