import { DEFAULT_IMAGE_PATH } from "../../constants/paths";

const Header = ({ profile }) => {
  return (
    <header className="grid grid-cols-3 mb-11 ">
      <div className="flex justify-end mr-8">
        <img
          className="rounded-full h-36 w-36 flex"
          src={`/images/avatars/${profile.username}.jpg`}
          alt={`${profile?.username} profile`}
          onError={(e) => {
            e.target.src = DEFAULT_IMAGE_PATH;
          }}
        />
      </div>
      <div className="flex items-start justify-center flex-col col-span-2">
        <div className="container flex justify-start">
          <span>{profile.username}</span>
          <button type="button">Follow</button>
        </div>
        <div className="flex justify-between">
          <span>25 publicaciones</span>
          <span>96 seguidores</span>
          <span>6 seguidore</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
