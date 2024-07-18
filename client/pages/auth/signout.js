import { useEffect } from 'react';
import useRequest from '../../hooks/use-request';

export default () => {
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/'),
  }); // 1

  useEffect(() => {
    doRequest();
  }, []); // 2
};
