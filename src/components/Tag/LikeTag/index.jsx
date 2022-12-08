import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import styles from "./styles.module.scss";

const LikeTag = ({value}) => {
  return (
    <div className={`center ${styles.like}`}>
      <FavoriteBorderIcon />
      <p>{value}</p>
    </div>
  );
};

export default LikeTag;
