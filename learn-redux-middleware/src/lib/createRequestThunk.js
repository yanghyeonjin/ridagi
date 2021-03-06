import { startLoading, finishLoading } from "modules/loading";

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type }); // 요청 시작
    dispatch(startLoading(type));
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(finishLoading(type));
      throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌.
    }
  };
}

// 사용법: createRequestThunk('GET_POST', api.getUsers)
