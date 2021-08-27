import styles from "./blogs.module.css";
import HorizontalBlogCard from "./Cards/HorizontalBlogCard";
import VerticalBlogCard from "./Cards/VerticalBlogCard";
export default function Blogs() {
  const verticalBlogs = [
    {
      image:
        "https://images.unsplash.com/photo-1606914501491-7b11d54f232f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      tag: "RESOURCES",
      title: "Refreshing Designs",
      info: "Quench satifying designs to help you stir up emotion and tell a story.",
      contrastColor: "#43d330",
    },
    {
      image:
        "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
      tag: "LIFESTYLE",
      title: "Healthier Lifestyle",
      info: "Living a healthier lifestyle will help with your productivity and your mind-set.",
      contrastColor: "#60a5fa",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592839719941-8e2651039d01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=453&q=80",
      tag: "ENTERTAINMENT",
      title: "Gaming Evolution",
      info: "Learn about revolution of gaming and how it started",
      contrastColor: "#a92222",
    },
  ];

  const horizontalBlogs = [
    {
      image:
        "https://images.unsplash.com/photo-1597260469329-e1201e075d82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      tag: "INSPIRATION",
      title: "Best Workstation of the year",
      info: "Check out these inspiring workstaions to get ideas on how to level-up your workstation.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
      tag: "FOOD",
      title: "Eating for Productivity",
      info: "Learn how to be more disciplined in your diet and how you can eat to maximize productivity",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587355760421-b9de3226a046?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      tag: "RESOURCES",
      title: "A Design Mind-set",
      info: "What does it mean to have a design mind-set? Learn how to improve your eye for design",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>The Project Blog</h1>
      <h2 className={styles.subHeading}>
        Designs and layouts to help you with your app.
      </h2>
      <div className={styles.blogsWrapper}>
        {verticalBlogs.map(({ image, tag, title, info, contrastColor }) => (
          <VerticalBlogCard
            image={image}
            tag={tag}
            title={title}
            info={info}
            contrastColor={contrastColor}
          />
        ))}
        {horizontalBlogs.map(({ image, tag, title, info }) => (
          <HorizontalBlogCard
            image={image}
            tag={tag}
            title={title}
            info={info}
          />
        ))}
      </div>
    </div>
  );
}
