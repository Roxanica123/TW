import { TableData } from "./table-data.js";

/*( ಠ _ ಠ )*/

export class Table {
    static initTable() {
        const tableWrapper = document.querySelector("table-wrapper");
        const table = document.createElement("table");
        tableWrapper.appendChild(table);
        Table.initHeader(table);
        Table.insertRows(table);
    }
    static initHeader(table) {
        const tableHeader = document.createElement("table-header")
        table.appendChild(tableHeader);
        TableData[0].header_info.forEach(column => {
            const headerColumn = document.createElement("column");
            headerColumn.innerText = column.title;
            tableHeader.appendChild(headerColumn);
        })
    }
    static insertRows(table) {
        TableData.forEach(row => {
            const rowContainer = document.createElement("row-container");
            const tableRow = document.createElement("row");
            table.appendChild(rowContainer);
            rowContainer.appendChild(tableRow)
            rowContainer.addEventListener("click", function () {
                Table.expandOrShrink(this);
            });
            row.header_info.forEach(column => {
                const cell = document.createElement("cell");
                cell.innerText = column.content;
                tableRow.appendChild(cell);
            })
        })
    }
    static expandOrShrink(rowContainer) {
        if (rowContainer.children.length == 2) {
            rowContainer.removeChild(rowContainer.lastChild);
        }
        else {
            const expandedRowContainer = document.createElement("expanded-row-container");
            rowContainer.appendChild(expandedRowContainer);
            const rowData = this.findRowData(rowContainer.firstChild);
            rowData.expand_info.forEach(item => {
                const expandRow=document.createElement("expand-row");
                expandedRowContainer.appendChild(expandRow);
                const title=document.createElement("title");
                const text=document.createElement("p");
                expandRow.append(title);
                expandRow.append(text);
                title.innerText=item.title;
                text.innerText=item.content;
            });
        }
    }
    static findRowData(row) {
        return TableData.find(element => {
            return element.header_info.find(field => {
                return field.title = "ID"
            }).content == row.children[0].innerText;
        });
    }
}
