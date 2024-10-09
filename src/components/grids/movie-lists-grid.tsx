import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ClientSideRowModelModule, ColDef } from 'ag-grid-community';
import { useSelector } from 'react-redux';
import { selectAgGridButtonStyle } from '../../store/selectors/goathouse.selectors';
import { MovieList } from '../../config/types';
import { placeholderMovieLists } from '../../config/consts';
import GridActions from './grid-actions/grid-actions';

interface MovieListsGridProps {
  readOnly?: boolean;
}

const MovieListsGrid: React.FC<MovieListsGridProps> = ({
  readOnly=false,
}) => {
  const gridRef = useRef<AgGridReact<MovieList>>(null);

  const agGridButtonStyle = useSelector(selectAgGridButtonStyle);

  const columnDefs: ColDef<MovieList>[] = [
    { field: 'name', headerName: 'List Name', flex: 1 },
    { field: 'owners', headerName: 'Owners', resizable: false, flex: 1 },
    {
      width: readOnly ? 75 : 125,
      cellStyle: agGridButtonStyle,
      resizable: false,
      cellRenderer: () => {
        return (
          <GridActions
            navigateTo='/movie-list'
            readOnly={readOnly}
          />
        )
      },
    },
  ];

  const defaultColDef: ColDef<MovieList> = {
    sortable: true,
  };

  return (
    <div className='movie-lists-grid'>
      <div className='ag-theme-quartz' style={{ height: 400 }}>
        <AgGridReact
          ref={gridRef}
          rowData={placeholderMovieLists}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          modules={[ClientSideRowModelModule]}
        />
      </div>
    </div>
  );
};

export default MovieListsGrid;
