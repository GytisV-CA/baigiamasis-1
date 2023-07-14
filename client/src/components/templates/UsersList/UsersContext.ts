import { IUser } from '../../../shared/api/types';
import {
  IDisplayValueFormatter,
  ITableField,
  ValidValueType,
} from '../../../shared/types';

export const fieldFormatters: {
  [index: string]: IDisplayValueFormatter<ValidValueType>;
} = {
  text: {
    align: 'left',
  },
};

export const getFieldsFromUserDataItem = (
  datum?: IUser
): ITableField<ValidValueType>[] => {
  return [
    {
      slug: 'firstName',
      displayTitle: 'Vardas',
      displayFormatter: fieldFormatters.text,
      value: datum?.firstName,
    },
    {
      slug: 'lastName',
      displayTitle: 'Pavardė',
      displayFormatter: fieldFormatters.text,
      value: datum?.lastName,
    },
    {
      slug: 'email',
      displayTitle: 'El. paštas',
      displayFormatter: fieldFormatters.text,
      value: datum?.email,
      inputType: 'email',
    },
    {
      slug: 'age',
      displayTitle: 'Amžius',
      displayFormatter: fieldFormatters.text,
      value: datum?.age,
      inputType: 'number',
    },
  ];
};

export const userSearchFunction = (
  datum: IUser,
  searchString: string
): boolean => {
  return (
    (datum.firstName + ' ' + datum.lastName)
      .toLowerCase()
      .includes(searchString.toLowerCase()) ||
    datum.email.toLowerCase().includes(searchString.toLowerCase())
  );
};

export const userCrudMessages = {
  success: {
    insertSingle: 'Vartotojas pridėtas sėkmingai',
    updateSingle: 'Vartotojas pakeistas sėkmingai',
    deleteSingle: 'Vartotojas ištrintas sėkmingai',
  },
  fail: {
    insertSingle: 'Nepavyko pridėti vartotojo',
    updateSingle: 'Nepavyko pakeisti vartotojo',
    deleteSingle: 'Nepavyko ištrinti vartotojo',
  },
};
