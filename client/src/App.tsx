import { createContext } from 'react';
import { IDisplayValueFormatter, ITableField } from './shared/types.ts';

import './App.css';
import Button from './components/atoms-md/Button';
import TextField from './components/atoms-md/TextField';
import {
  fieldFormatters,
  getFieldsFromUserDataItem,
  userSearchFunction,
} from './components/templates/UsersList/UsersContext.ts';
import { IUser } from './shared/api/types.ts';
import Table from './components/molecules/Table/Table.tsx';
import UsersList from './components/templates/UsersList/UsersList.tsx';

//using context to pass through props to deeply nested components

interface IDataTypeContext {
  fieldFormatters: { [index: string]: IDisplayValueFormatter<any> };
  getFieldsFunction: <dataEntryType>(
    datum?: dataEntryType
  ) => ITableField<any>[];
  searchFunction: <dataEntryType>(
    datum: dataEntryType,
    searchString: string
  ) => boolean;
}

export const DataTypeContext = createContext<IDataTypeContext>({
  fieldFormatters: {},
  getFieldsFunction: () => [],
  searchFunction: () => false,
});

const UsersContext: IDataTypeContext = {
  fieldFormatters: fieldFormatters,
  getFieldsFunction: (datum) => getFieldsFromUserDataItem(datum as IUser),
  searchFunction: (datum, searchString) =>
    userSearchFunction(datum as IUser, searchString),
};

function App() {
  return (
    <div>
      <DataTypeContext.Provider value={UsersContext}>
        <UsersList></UsersList>
      </DataTypeContext.Provider>
    </div>
  );
}

export default App;
