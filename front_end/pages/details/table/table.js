import { Request } from "../../../services/request.js"

/*( ಠ _ ಠ )*/

export class Table {
    numberOfColumns;
    tableData;
    async initTableData() {
        const req = new Request("GET", "http://localhost:5000/accidents/details");
        const reqData = await req.getData();
        this.tableData = reqData.table_data;
    }

    async initTable() {
        await this.initTableData();
        const tableWrapper = document.querySelector("table-wrapper");
        const table = document.createElement("table");

        tableWrapper.appendChild(table);
        this.initHeader(table);
        this.insertRows(table);
    }
    initHeader(table) {
        const tableHeader = document.createElement("thead");
        const tableHeaderRow = document.createElement("tr")

        table.appendChild(tableHeader);
        tableHeader.appendChild(tableHeaderRow)
        this.tableData[0].header_info.forEach(column => {
            const headerColumn = document.createElement("th");
            headerColumn.innerText = column.title;
            tableHeaderRow.appendChild(headerColumn);
        })
        this.numberOfColumns = tableHeaderRow.children.length;
    }
    insertRows(table) {
        const tableObj=this;
        const tableBody = document.createElement("tbody");
        table.append(tableBody);
        this.tableData.forEach(row => {
            const tableRow = document.createElement("tr");
            tableBody.appendChild(tableRow);
            tableRow.addEventListener("click", function () {
                tableObj.expandOrShrink(this);
            });
            row.header_info.forEach(column => {
                const cell = document.createElement("td");
                cell.innerText = column.content;
                tableRow.appendChild(cell);
            })
        })
    }
    expandOrShrink(row) {
        if (row.nextSibling == null || row.nextSibling.className != "expanded-row") {
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
        else {
            row.nextSibling.remove();
        }
    }
    findRowData(row) {
        return this.tableData.find(element => {
            return element.header_info.find(field => {
                return field.title = "ID"
            }).content == row.children[0].innerText;
        });
    }
}
