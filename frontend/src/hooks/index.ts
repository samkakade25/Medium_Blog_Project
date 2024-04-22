import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blogss {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [Blogs, setBlog] = useState<Blogss>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        setBlog(response.data.blog);

        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    Blogs,
  };
};
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [Blogs, setBlogs] = useState<Blogss[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        setBlogs(response.data.blog);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    Blogs,
  };
};
