import styles from "./productUses.module.css";
export default function ProductUsesCard({ useCase }) {
  return (
    <div className={styles.usesCard}>
      <img src={useCase.img} alt="Illustration" className={styles.cardImg} />
      <div className={styles.usesInfoWrapper}>
        <h1 className={styles.heading}>{useCase.heading}</h1>
        <h2 className={styles.subHeading}>{useCase.subHeading}</h2>
        <ul className={styles.useCases}>
          {useCase.pointers.map((point) => (
            <li className={styles.pointers}>
              <div className={styles.listStyle}></div>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
