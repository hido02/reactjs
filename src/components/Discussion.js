import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDiscussions } from "../actions/fetchDiscussions";

const Discussion = () => {
  const state = useSelector((state) => state.discussions);
  const discussions = state || []; // 만약 state가 undefined인 경우 빈 배열로 초기화
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDiscussions());
  }, [dispatch]);

  return (
    <ul className="discussions__container">
      {discussions.map((discussion) => (
        <li key={discussion.id}>
          <h3>{discussion.title}</h3>
          <p>{discussion.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Discussion;
