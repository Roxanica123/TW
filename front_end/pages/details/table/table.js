import { TableData } from "./table-data.js";

/*( ಠ _ ಠ )*/

export class Table {
    static numberOfColumns;
    static initTable() {
        const tableWrapper = document.querySelector("table-wrapper");
        const table = document.createElement("table");
        tableWrapper.appendChild(table);
        Table.initHeader(table);

        Table.insertRows(table);
    }
    static initHeader(table) {
        const tableHeader = document.createElement("thead");
        const tableHeaderRow = document.createElement("tr")
        table.appendChild(tableHeader);
        tableHeader.appendChild(tableHeaderRow)
        TableData[0].header_info.forEach(column => {
            const headerColumn = document.createElement("th");
            headerColumn.innerText = column.title;
            tableHeaderRow.appendChild(headerColumn);
        })
        this.numberOfColumns = tableHeaderRow.children.length;
    }
    static insertRows(table) {
        const tableBody = document.createElement("tbody");
        table.append(tableBody);
        TableData.forEach(row => {
            const tableRow = document.createElement("tr");
            tableBody.appendChild(tableRow);
            tableRow.addEventListener("click", function () {
                Table.expandOrShrink(this);
            });
            row.header_info.forEach(column => {
                const cell = document.createElement("td");
                cell.innerText = column.content;
                tableRow.appendChild(cell);
            })
        })
    }
    static expandOrShrink(row) {
        if (row.nextSibling==null || row.nextSibling.className != "expanded-row") {
            const expandedRowContainer = document.createElement("tr");
            expandedRowContainer.setAttribute("class", "expanded-row");
            row.insertAdjacentElement('afterend', expandedRowContainer);

            const cellContainer = document.createElement("td");
            cellContainer.setAttribute("class", "expanded-row-container");
            cellContainer.setAttribute("colspan", this.numberOfColumns);
            expandedRowContainer.appendChild(cellContainer);

            const rowData = this.findRowData(row);

            rowData.expand_info.forEach(item => {
                const expandRow = document.createElement("expand-row");
                cellContainer.appendChild(expandRow);
                const title = document.createElement("p");
                title.setAttribute("class", "title");
                const text = document.createElement("p");
                text.setAttribute("class", "text");
                expandRow.append(title);
                expandRow.append(text);
                title.innerText = item.title;
                text.innerText = item.content;
            });
        }
        else{
            row.nextSibling.remove();
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
