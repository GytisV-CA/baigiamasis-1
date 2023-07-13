import { useQuery } from '@tanstack/react-query';
import DataDrivenTable from '../../organisms/DataDrivenTable';
import { API } from '../../../shared/api';
import { IUser } from '../../../shared/api/types';

export default function UsersList() {
  return (
    <DataDrivenTable<IUser>
      queryKey={['users']}
      queryFn={() => API.getUsers()}
      itemsPerPage={10}
    ></DataDrivenTable>
  );
}
