import { Request } from "../../../services/request.js"
import { FiltersQuery } from "./../../../services/filters-query.js"

/*( ಠ _ ಠ )*/

export class Table {
    numberOfColumns;
    tableData;
    page = 0;
    numberOfRecords = 1000;
    pageLimit = 10;
    async initTableData() {
        const req = new Request("GET", `http://localhost:5000/accidents/details?page=${this.page}&pageLimit=${this.pageLimit}&${FiltersQuery.queryInstance.getQueryString()}`);
        const reqData = await req.getData();
        this.tableData = reqData.table_data;
    }

    async initTable() {
        await this.initTableData();
        const tableContainer = document.querySelector("table-container");
        const clone = tableContainer.cloneNode(false);
        const table = document.createElement("table");
        clone.appendChild(table);
        this.initHeader(table);
        this.insertRows(table);
        this.insertPaginationButtons(clone);
        tableContainer.parentElement.replaceChild(clone, tableContainer);
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
        const tableObj = this;
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

    insertPaginationButtons(container) {
        const table = this;
        const paginationContainer = document.createElement('pagination-container');

        const select = document.createElement('select');
        pageLimitValues.forEach(limit => {
            const option = document.createElement('option');
            if (this.pageLimit === limit) {
                option.setAttribute('selected', 'selected');
            }
            option.setAttribute('value', limit);
            option.innerText = limit;
            select.appendChild(option);

        })
        select.addEventListener('change', (event) => {
            this.updatePageLimit(event.target.value);
            table.initTable();
        });

        paginationContainer.appendChild(select);

        const nextButton = document.createElement('next');
        nextButton.setAttribute('id', 'next-button');
        nextButton.innerText = 'Next page';
        paginationContainer.appendChild(nextButton);

        const previousButton = document.createElement('previous');
        previousButton.setAttribute('id', 'previous-button');
        previousButton.innerText = 'Previous page';
        paginationContainer.appendChild(previousButton);

        nextButton.addEventListener("click", () => { table.incrementPage(); table.initTable(); });
        previousButton.addEventListener("click", () => { table.decrementPage(); table.initTable(); })
        container.appendChild(paginationContainer);

    }
    updatePageLimit(limit) {
        this.pageLimit = parseInt(limit);
    }
    incrementPage() {
        if (this.page <= this.numberOfRecords / this.pageLimit)
            this.page++;
    }
    decrementPage() {
        if (this.page > 0)
            this.page--;
    }
}

const pageLimitValues = [10, 30, 50, 100, 500];