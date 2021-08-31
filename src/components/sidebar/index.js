import User from "./user";
import Recomendation from "./recomendation";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const { username, fullName, userId, following, docId } = useSelector(
    (state) => state.user
  );
  return (
    <div className="p-4 container">
      <div className="fixed">
        <User username={username} fullName={fullName} />
        <Recomendation userId={userId} docId={docId} following={following} />
      </div>
    </div>
  );
};
export default Sidebar;
