import { IUser } from '../../../shared/api/types';
import { IDisplayValueFormatter, ITableField } from '../../../shared/types';

export const fieldFormatters: { [index: string]: IDisplayValueFormatter<any> } =
  {
    text: {
      align: 'left',
    },
  };

export const getFieldsFromUserDataItem = (
  datum?: IUser
): ITableField<any>[] => {
  return [
    {
      slug: 'firstname',
      displayTitle: 'Vardas',
      displayFormatter: fieldFormatters.text,
      value: datum?.firstName,
    },
    {
      slug: 'lastname',
      displayTitle: 'Pavardė',
      displayFormatter: fieldFormatters.text,
      value: datum?.lastName,
    },
    {
      slug: 'email',
      displayTitle: 'El. paštas',
      displayFormatter: fieldFormatters.text,
      value: datum?.email,
    },
    {
      slug: 'age',
      displayTitle: 'Amžius',
      displayFormatter: fieldFormatters.text,
      value: datum?.age,
    },
  ];
};
