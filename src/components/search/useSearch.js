import { useState, useCallback } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, [setValue]);

  return [value, onChange];
};

export default useInput;
