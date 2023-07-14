import { useContext, useEffect, useState } from 'react';
import { DataTypeContext } from '../../../App';
import Table from '../../molecules/Table';
import Pagination from '../../molecules/Pagination';
import Button from '../../atoms-md/Button';
import { IIdentifiableItem, IUpdatePayload } from '../../../shared/types';
import TextField from '../../atoms-md/TextField';
import { StyledTopBar } from './style';

interface IPagedSearchTableProps<dataType extends IIdentifiableItem> {
  data: dataType[];
  itemsPerPage?: number;
  isEditable?: boolean;
  onCreate?: () => void;
  editCallback?: (
    id: IUpdatePayload<dataType>['id'],
    fieldsData: IUpdatePayload<dataType>['fieldsData']
  ) => void;
  deleteCallback?: (id: dataType['id']) => void;
}

export default function PagedSearchTable<dataType extends IIdentifiableItem>({
  data,
  itemsPerPage = 10,
  isEditable = false,
  onCreate,
  editCallback,
  deleteCallback,
}: IPagedSearchTableProps<dataType>) {
  const { searchFunction } = useContext(DataTypeContext);

  const [displayData, setDisplayData] = useState<dataType[]>(data);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // searchValue state changes on user input; this change triggers effect which sets displayData state
  useEffect(() => {
    // console.log('useEffect Search');

    setCurrentPage(1);

    setDisplayData(
      searchValue
        ? data.filter((datum) => searchFunction<dataType>(datum, searchValue))
        : data
    );
  }, [searchValue, data, searchFunction]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <StyledTopBar>
        <TextField
          variant='filled'
          type='text'
          labelText='Paieška...'
          value={searchValue}
          onChange={searchHandler}
        />
        {isEditable && (
          <Button
            title='Pridėti naują'
            variant='fab'
            icon='add'
            action={onCreate && onCreate}
          />
        )}
      </StyledTopBar>
      <Table<dataType>
        displayData={
          displayData
            ? displayData.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
            : []
        }
        isEditable={isEditable}
        editCallback={editCallback}
        deleteCallback={deleteCallback}
        rowCount={itemsPerPage}
      ></Table>
      <Pagination
        setCurrentPage={setCurrentPage}
        displayDataLength={displayData.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}
