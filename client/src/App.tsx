import { createContext } from 'react';
import {
  IDisplayValueFormatter,
  ITableField,
  ValidValueType,
} from './shared/types.ts';

import './App.css';
import {
  fieldFormatters,
  getFieldsFromUserDataItem,
  userSearchFunction,
  userCrudMessages,
} from './components/templates/UsersList/UsersContext.ts';
import { IUser } from './shared/api/types.ts';
import UsersList from './components/templates/UsersList/UsersList.tsx';
import Footer from './components/templates/Footer/Footer.tsx';

//using context to pass through props to deeply nested components

interface IDataTypeContext {
  fieldFormatters: {
    [index: string]: IDisplayValueFormatter<ValidValueType>;
  };
  getFieldsFunction: <dataEntryType>(
    datum?: dataEntryType
  ) => ITableField<ValidValueType>[];
  searchFunction: <dataEntryType>(
    datum: dataEntryType,
    searchString: string
  ) => boolean;
  crudMessages: { [index: string]: { [index: string]: string } };
}

export const DataTypeContext = createContext<IDataTypeContext>({
  fieldFormatters: {},
  getFieldsFunction: () => [],
  searchFunction: () => false,
  crudMessages: {},
});

const UsersContext: IDataTypeContext = {
  fieldFormatters: fieldFormatters,
  getFieldsFunction: (datum) => getFieldsFromUserDataItem(datum as IUser),
  searchFunction: (datum, searchString) =>
    userSearchFunction(datum as IUser, searchString),
  crudMessages: userCrudMessages,
};

function App() {
  return (
    <div className='page-wrapper'>
      <main>
        <DataTypeContext.Provider value={UsersContext}>
          <UsersList></UsersList>
        </DataTypeContext.Provider>
      </main>
      <Footer>{`© ${new Date().getFullYear()} Visos teisės saugomos`}</Footer>
    </div>
  );
}

export default App;
