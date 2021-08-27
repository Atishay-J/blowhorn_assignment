import styles from "./trustedBy.module.css";

export default function TrustedBy() {
  const trustedBy = [
    {
      name: "disney",
      logo: "https://download.logo.wine/logo/Disney%2B/Disney%2B-Logo.wine.png",
    },
    {
      logo: "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
      alt: "google",
    },
    {
      logo: "https://www.hubspot.com/hubfs/assets/hubspot.com/style-guide/brand-guidelines/guidelines_the-logo.svg",
      alt: "hubspot",
    },
    {
      logo: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png",
      alt: "youtube",
    },
    {
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png",
      alt: "shopify",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>TRUSTED BY TOP-LEADING COMPANIES</h1>
      <div className={styles.partners}>
        {trustedBy.map((partner) => (
          <img
            src={partner.logo}
            alt={partner.name}
            className={styles.partnersImage}
          />
        ))}
      </div>
    </div>
  );
}
