export interface IDisplayValueFormatter<valueType> {
  toStringFn?: (value: valueType) => string;
  textBefore?: string | null;
  textAfter?: string | null;
  align?: 'left' | 'center' | 'right';
}

export interface ITableField<valueType> {
  slug: string;
  displayTitle: string;
  displayFormatter: IDisplayValueFormatter<valueType>;
  value: valueType;
  inputType?: 'text' | 'number' | 'email';
}

export type ValidValueType = string | number | undefined;

export interface IIdentifiableItem {
  id: string;
}

export interface IUpdatePayload<dataType> {
  id: IIdentifiableItem['id'];
  fieldsData: Omit<dataType, 'id'>;
}
