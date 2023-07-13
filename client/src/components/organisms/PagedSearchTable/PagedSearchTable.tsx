import { ReactNode, useContext, useEffect, useState } from 'react';
import { DataTypeContext } from '../../../App';
import Table from '../../molecules/Table';
import Pagination from '../../molecules/Pagination';

export interface ISearchableItem {
  id: string;
}

interface IPagedSearchTableProps<dataType extends ISearchableItem> {
  data: dataType[];
  itemsPerPage?: number;
  injectedComponent?: ReactNode;
  rowExtraComponent?: () => ReactNode;
}

export default function PagedSearchTable<dataType extends ISearchableItem>({
  data,
  itemsPerPage = 10,
  injectedComponent,
  rowExtraComponent,
}: IPagedSearchTableProps<dataType>) {
  const { searchFunction } = useContext(DataTypeContext);

  const [displayData, setDisplayData] = useState<dataType[]>(data);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // searchValue state changes on user input; this change triggers effect which sets displayData state
  useEffect(() => {
    console.log('useEffect Search');

    setDisplayData(
      searchValue
        ? data.filter((datum) => searchFunction<dataType>(datum, searchValue))
        : data
    );
  }, [searchValue, data, searchFunction]);

  return (
    <div>
      <div>
        <input
          type='text'
          value={searchValue}
          onChange={searchHandler}
          placeholder='Paieška...'
        />
        {injectedComponent && injectedComponent}
      </div>
      <Table<dataType>
        displayData={
          displayData
            ? displayData.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
            : []
        }
        rowExtraComponent={rowExtraComponent}
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
