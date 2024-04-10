import React, { Component } from 'react';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, StackedColumnDirective, StackedColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar, ColumnChooser } from '@syncfusion/ej2-react-grids';
import { isNullOrUndefined, Internationalization } from '@syncfusion/ej2-base';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.data = [
            { Car: 'subaru', Year: 2008, Color: 'black' },
            { Car: 'toyota', Year: 2010, Color: 'red' },
        ];
        this.toolbar = ['ExcelExport', 'PdfExport', 'ColumnChooser'];
        this.toolbarClick = (args) => {
            if (this.grid && args.item.id === 'grid_excelexport') {
                this.grid.serverExcelExport("Home/ExcelExport");
            }
            if (this.grid && args.item.id === 'grid_pdfexport') {
                this.grid.serverPdfExport('Home/PdfExport');
            }
        }

        
    }
    
    render() {
        this.toolbarClick = this.toolbarClick.bind(this);
        return (
            <div>
                <GridComponent id='grid' dataSource={this.data} showColumnChooser={true} height={270} toolbar={this.toolbar} toolbarClick={this.toolbarClick} ref={g => this.grid = g}>
                    <ColumnsDirective>
                        <ColumnDirective type="checkbox" width="50" />
                        <ColumnDirective headerText={'Car Brand'}>
                            <StackedColumnsDirective>
                                <StackedColumnDirective field={'Car'} headerText={'Car'}></StackedColumnDirective>
                                <StackedColumnDirective field={'Year'} headerText={'Year'}></StackedColumnDirective>
                            </StackedColumnsDirective>
                        </ColumnDirective>
                        <ColumnDirective field={'Color'} headerText={'Color'}></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Toolbar, ColumnChooser]} />
                </GridComponent>
            </div>
        );
    }
}
