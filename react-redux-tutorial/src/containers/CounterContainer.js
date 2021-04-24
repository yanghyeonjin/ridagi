import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Counter from "components/Counter";
import { increase, decrease } from "modules/counter";

const CounterContainer = () => {
  const dispatch = useDispatch();
  const { number } = useSelector((state) => ({
    number: state.counter.number,
  }));

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
