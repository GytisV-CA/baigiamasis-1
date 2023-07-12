import { IDisplayValueFormatter } from '../../../shared/types';
import { StyledDisplayField } from './styles';

interface IDataFieldDisplayProps<valueType> {
  value: valueType;
  formatter: IDisplayValueFormatter<valueType>;
}

export default function DataFieldDisplay<valueType>({
  value,
  formatter,
}: IDataFieldDisplayProps<valueType>) {
  return (
    <StyledDisplayField $align={formatter.align}>
      {formatter.textBefore?.length ? (
        <span>{formatter.textBefore}</span>
      ) : (
        <></>
      )}
      {formatter.toStringFn
        ? formatter.toStringFn(value)
        : (value as string | number | boolean)}
      {formatter.textAfter?.length ? <span>{formatter.textAfter}</span> : <></>}
    </StyledDisplayField>
  );
}
