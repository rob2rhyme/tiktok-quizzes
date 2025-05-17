import styles from "../styles/Shimmer.module.css";

export default function Shimmer() {
  return (
    <div className={styles.shimmerWrapper}>
      <div className={styles.shimmerCard}>
        <div className={styles.shimmerImage}></div>
        <div className={styles.shimmerText}></div>
        <div className={styles.shimmerTextShort}></div>
      </div>
    </div>
  );
}
