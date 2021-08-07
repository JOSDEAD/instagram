import useUser from "../../hooks/use-user";

const Sidebar = () =>{
    const {user} = useUser();
    console.log(user.username);
    return(
        <div className="p-4">
            
        </div>
    )
}
export default Sidebar