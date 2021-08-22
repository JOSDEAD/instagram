import useUser from "../../hooks/use-user";
import User from "./user"
import Recomendation from "./recomendation"
const Sidebar = () =>{
    const {user:{username,fullName,userId,following,docId}} = useUser();
    return(
        <div className="p-4 container">
            <div className="fixed">
            <User username={username} fullName={fullName}/>
            <Recomendation userId={userId} docId={docId} following={following}/>
            </div>
        </div>
    )
}
export default Sidebar