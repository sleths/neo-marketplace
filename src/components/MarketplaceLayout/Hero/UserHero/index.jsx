import { ReactComponent as Eth } from "../../../../assets/icons/eth.svg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./styles.module.scss";

const UserHero = ({ user }) => {
  const { bg, img, username, followers, following, address } = user;

  const firstAddressSlice = address.slice(0, 7);
  const lastAddressSlice = address.slice(-5);

  return (
    <header className={styles.header}>
      <img src={bg} alt="" />

      <article className="center">
        <img src={img} alt={username} className={styles.userImg} />
        <h1>{username}</h1>
        <div className="center">
          <p>
            <strong>{followers}</strong> <span>followers</span>
          </p>
          <p>
            <strong>{following}</strong> <span>following</span>
          </p>
        </div>
        <p className={`center ${styles.address}`}>
          <Eth />
          {`${firstAddressSlice}...${lastAddressSlice}`}
        </p>
        <div className={`center ${styles.btnContainer}`}>
          <button className={`center ${styles.message}`}>
            <MailOutlineIcon />
            Message
          </button>
          <button className={`center ${styles.more}`}>
            <MoreHorizIcon />
          </button>
        </div>
      </article>
    </header>
  );
};

export default UserHero;
