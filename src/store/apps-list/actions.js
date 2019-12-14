import axios from 'axios';
import {
  FETCH_APPS_PENDING,
  FETCH_APPS_REJECTED,
  FETCH_APPS_FULFILLED,
} from './constants';

export const fetchApps = () => async (dispatch) => {
  dispatch({ type: FETCH_APPS_PENDING });

  try {
    const { data } = await axios.get('apps.json');

    dispatch({ type: FETCH_APPS_FULFILLED, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_APPS_REJECTED, payload: error });
  }
};
