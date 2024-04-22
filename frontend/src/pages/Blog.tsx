import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {
  const { id } = useParams();
  const { loading, Blogs } = useBlog({
    id: id || "",
  });

  if (loading || !Blogs) {
    return (
      <div>
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">Loading...</div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={Blogs} />
    </div>
  );
};
