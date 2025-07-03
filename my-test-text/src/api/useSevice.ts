import axios from "./customsmize-axios";

const fetchData = () => {
  const accessToken = localStorage.getItem("accessToken");
  return axios.get("https://api-test-web.agiletech.vn/posts", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

const fetchDataPage = (page: number) => {
  const accessToken = localStorage.getItem("accessToken");
  return axios.get(
    `https://api-test-web.agiletech.vn/posts?title=&page=${page}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
};

const loginApi = (username: string) => {
  return axios.post("https://api-test-web.agiletech.vn/auth/login", {
    username,
  });
};

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  try {
    const res = await axios.post(
      "https://api-test-web.agiletech.vn/auth/refresh-token",
      { refreshToken },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    console.log("Refreshed:", res.data);
    return res.data.accessToken;
  } catch (error) {
    console.error("Refresh thất bại:");
    return null;
  }
};

const logoutApi = async () => {
  const accessToken = localStorage.getItem("accessToken");

  await axios.delete("https://api-test-web.agiletech.vn/auth/logout", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const postCreateUser = (title: string, description: string, tags: string) => {
  const accessToken = localStorage.getItem("accessToken");

  return axios.post(
    "https://api-test-web.agiletech.vn/posts",
    {
      title,
      description,
      tags,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

const editPost = (
  postId: string,
  title: string,
  description: string,
  tags: string
) => {
  const accessToken = localStorage.getItem("accessToken");

  return axios.patch(
    `https://api-test-web.agiletech.vn/posts/${postId}`,
    {
      title,
      description,
      tags,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

const fetchDataGalarie = () => {
  return axios.get("https://api-test-web.agiletech.vn/galleries");
};

const deletePosts = (
  postId: string,
  title: string,
  description: string,
  tags: string
) => {
  const accessToken = localStorage.getItem("accessToken");

  return axios.delete(`https://api-test-web.agiletech.vn/posts/${postId}`, {
    data: {
      title,
      description,
      tags,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export {
  fetchData,
  loginApi,
  logoutApi,
  refreshAccessToken,
  fetchDataPage,
  postCreateUser,
  editPost,
  fetchDataGalarie,
  deletePosts,
};
