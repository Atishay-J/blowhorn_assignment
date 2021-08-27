import styles from "./blogs.module.css";
import HorizontalBlogCard from "./Cards/HorizontalBlogCard";
import VerticalBlogCard from "./Cards/VerticalBlogCard";
import { horizontalBlogs, verticalBlogs } from "./BlogsData";
export default function Blogs() {
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
