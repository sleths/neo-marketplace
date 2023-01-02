import { ReactComponent as Eth } from "../../../assets/icons/eth.svg";

import styles from "./styles.module.scss";

const AddressTag = ({ address }) => {
  const firstAddressSlice = address.slice(0, 7);
  const lastAddressSlice = address.slice(-5);
  return (
    <div className={styles.addressContainer}>
      <p className={`center ${styles.address}`}>
        <Eth />
        {`${firstAddressSlice}...${lastAddressSlice}`}
      </p>
      <p className={styles.longAddress}>{address}</p>
    </div>
  );
};

export default AddressTag;
