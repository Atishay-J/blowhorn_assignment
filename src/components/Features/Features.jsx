import styles from "./features.module.css";
import {
  Award,
  Megaphone,
  BoxSeam,
  Terminal,
  Puzzle,
  AspectRatio,
} from "react-bootstrap-icons";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      icon: <Award />,
      title: "Certifications",
      subHead:
        "Each of our plan provides you and your team with certifications",
    },
    {
      icon: <Megaphone />,
      title: "Notifications",
      subHead:
        "Send out notifications to all your customers to keep them engaged",
    },
    {
      icon: <BoxSeam />,
      title: "Bundles",
      subHead: "High-quality bundles of awesome tools to help you out",
    },
    {
      icon: <Terminal />,
      title: "Developer Tools",
      subHead:
        "Developer tools to help grow your application and keep it up-to-date",
    },
    {
      icon: <Puzzle />,
      title: "Building Blocks",
      subHead:
        "The right kind of building blocks to take your company to the next level",
    },
    {
      icon: <AspectRatio />,
      title: "Coupons",
      subHead:
        "Coupons system to provide special offers and discount for your app",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Features</h1>
      <h2 className={styles.subHeading}>
        Check out our list of awesome features below.
      </h2>

      <div className={styles.featureCardWrapper}>
        {features.map(({ icon, title, subHead }) => (
          <FeatureCard icon={icon} heading={title} subHeading={subHead} />
        ))}
      </div>
    </div>
  );
}
