import DataDrivenTable from '../../organisms/DataDrivenTable';
import { API } from '../../../shared/api';
import { IUser, IUserData } from '../../../shared/api/types';

export default function UsersList() {
  return (
    <DataDrivenTable<IUser>
      queryKey={['users']}
      queryFn={() => API.getUsers()}
      insertFn={(payload: { fieldsData: IUserData }) =>
        API.addUser(payload.fieldsData)
      }
      updateFn={(payload: { id: IUser['id']; fieldsData: IUserData }) =>
        API.updateUser(payload.id, payload.fieldsData)
      }
      deleteFn={(payload: { id: IUser['id'] }) => API.deleteUser(payload.id)}
      itemsPerPage={10}
    ></DataDrivenTable>
  );
}
