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
}

export interface IIdentifiableItem {
  id: string;
}
