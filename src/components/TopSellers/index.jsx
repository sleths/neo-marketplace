import styles from "./styles.module.scss";
import { top_sellers } from "../../data";
const TopSellers = () => {
    console.log(top_sellers)
  return (
    <section><img src={top_sellers[0].img} alt="" /></section>
  )
}

export default TopSellers