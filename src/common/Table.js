import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
function customCheckbox(theme) {
    return {
      '& .MuiCheckbox-root svg': {
        width: 16,
        height: 16,
        backgroundColor: 'transparent',
        border: `1px solid ${
          theme.palette.type === 'light' ? '#c8c8c8' : 'rgb(67, 67, 67)'
        }`,
        borderRadius: 2,
      },
      '& .MuiCheckbox-root svg path': {
        display: 'none',
      },
      '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
        backgroundColor: '#001529',
        borderColor: '#001529',
      },
      '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
        position: 'absolute',
        display: 'table',
        border: '2px solid #fff',
        borderTop: 0,
        borderLeft: 0,
        transform: 'rotate(45deg) translate(-50%,-50%)',
        opacity: 1,
        transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
        content: '""',
        top: '50%',
        left: '39%',
        width: 5.71428571,
        height: 9.14285714,
      },
      '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
        width: 8,
        height: 8,
        backgroundColor: '#001529',
        transform: 'none',
        top: '39%',
        border: 0,
      },
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      border: 0,
      color:
        theme.palette.type === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
      WebkitFontSmoothing: 'auto',
      letterSpacing: 'normal',
      '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.type === 'light' ? '#aeaeae' : '#1d1d1d',
      },
      '& .MuiDataGrid-iconSeparator': {
        display: 'none',
      },
      '& .MuiDataGrid-colCell, .MuiDataGrid-cell': {
        borderRight: `1px solid ${
          theme.palette.type === 'light' ? '#cecece' : '#303030'
        }`,
      },
      '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${
          theme.palette.type === 'light' ? '#cecece' : '#303030'
        }`,
      },
      '& .MuiDataGrid-cell': {
        color:
          theme.palette.type === 'light'
            ? 'rgba(0,0,0,.85)'
            : 'rgba(255,255,255,0.65)',
      },
      '& .MuiPaginationItem-root': {
        borderRadius: 0,
      },
      ...customCheckbox(theme),
    },
  }));
const CustomTable = (props) => {    
    const handleSelection = (newSelection) =>{        
        props.parentCallBack(newSelection.selectionModel);        
    }
    const classes = useStyles();    
    return (<div style={{height:props.height, width:props.width}}>
                   <DataGrid className={classes.root} checkboxSelection  onSelectionModelChange = {handleSelection}       
                    disableColumnMenu showCellRightBorder rowHeight={28} pagination autoPageSize rows = {props.rows} columns = {props.columns} >
                    </DataGrid>     
    </div>)
}

export default CustomTable;


