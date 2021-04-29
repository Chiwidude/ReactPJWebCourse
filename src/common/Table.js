import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const CustomTable = (props) => {    
    const handleSelection = (newSelection) =>{        
        props.parentCallBack(newSelection.selectionModel);        
    }    
    return (<div style={{height:props.height, width:props.width}}>
                   <DataGrid checkboxSelection  onSelectionModelChange = {handleSelection}       
                    disableColumnMenu showCellRightBorder rowHeight={28} pagination autoPageSize rows = {props.rows} columns = {props.columns} >
                    </DataGrid>     
    </div>)
}

export default CustomTable;


