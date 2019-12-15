import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../store/search/actions';
import { selectSearchValue } from '../../store/search/selectors';

const useInput = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectSearchValue);

  const onChange = useCallback((e) => {
    dispatch(setSearch(e.target.value));
  }, [dispatch]);

  return [value, onChange];
};

export default useInput;
