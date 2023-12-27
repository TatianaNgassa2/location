import Search from "./Search";
import logo from "../assets/logo.png";
import notification from "../assets/notification.png";
import puce from "../assets/puce.png";
export default function Header() {
  return (
    <div className="flex gap-6 items-center text-3xl font-bold w-full h-8 pt-5">
      <img src={logo} alt="logo" />
      <div className="flex  w-full gap-8 mx-32">
        <Search />
        <div className="flex gap-4 w-1/6 p-3">
          <img src={notification} alt="notif" />
          <img src={puce} alt="puce" />
          <img src={puce} alt="puce" />
        </div>
      </div>
    </div>
  );
}
