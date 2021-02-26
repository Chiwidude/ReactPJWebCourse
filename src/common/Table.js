import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

let items = [];
const CustomTable = (props) => {
    const [selection, setSelection] = React.useState([]);
    const test = React.useRef({});
    const current = selections => {
        if(selection !== selections){
            setSelection(selections);
            items = selections;            
        }        
    }
    return (<div style={{height:props.height, width:props.width}}>
                   <DataGrid checkboxSelection onSelectionChange = {current}       
                    disableColumnMenu showCellRightBorder rowHeight={28} pagination autoPageSize rows = {props.rows} columns = {props.columns} >
                    </DataGrid>     
    </div>)
}

export const selection = () => {
    return items;
}

export default CustomTable;


