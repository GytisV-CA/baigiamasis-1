import { useQuery } from '@tanstack/react-query';
import Table from '../../molecules/Table';
import { API } from '../../../shared/api';

export default function UsersList() {
  console.log('rendering UsersList');

  // async function getUsers(callback: (result: IUser[]) => void) {
  //   const data = await API.getUsers();
  //   callback(data);
  // }

  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: () => API.getUsers(),
    staleTime: 10000,
  });

  return (
    <div>
      <Table data={data ?? []}></Table>
    </div>
  );
}
