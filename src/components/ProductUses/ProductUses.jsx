import styles from "./productUses.module.css";
import ProductUsesCard from "./ProductUsesCard";
export default function ProductUses() {
  const usesCases = [
    {
      img: "https://cdn.devdojo.com/images/december2020/productivity.png",
      heading: "Boost Productivity",
      subHeading:
        "Build an atmosphere that creates productivity in your organization and your company culture.",
      pointers: [
        "Maximize productivity and growth",
        "Speed past your competition",
        "Learn the top techniques",
      ],
    },
    {
      img: "https://cdn.devdojo.com/images/december2020/settings.png",
      heading: "Automated Tasks",
      subHeading:
        "Save time and money with out revolutionary  services. We are the leaders in the industry",
      pointers: [
        "Automated task mangment workflow",
        "Detailed analytics for your data",
        "some awesome integrations",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {usesCases.map((useCase) => (
        <ProductUsesCard useCase={useCase} key={useCase.heading} />
      ))}
    </div>
  );
}
