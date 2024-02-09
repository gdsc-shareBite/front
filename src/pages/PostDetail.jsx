import React from "react";
import { useLocation } from "react-router-dom";

export default function PostDetail() {
  const {
    state: {
      product: { id, photo, rating, name, location, author },
    },
  } = useLocation();

  return <div>상세 페이지</div>;
}
