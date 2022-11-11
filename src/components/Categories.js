import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const categoryStat = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const categoryStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="check-btn">
      <p>{categoryStat.category}</p>
      <button type="button" onClick={categoryStatus}>Check status</button>
    </div>
  );
}
export default Categories;
