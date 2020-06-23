import { Request } from "./../services/request.js"
import { FiltersQuery } from "../services/filters-query.js";
export class FiltersPopUp {
    availableFilters = new Map();
    filerOptions;
    selectedOption = "None";
    constructor() {
        const appplyButton = document.querySelector("send");
        appplyButton.addEventListener('click', () => { this.applyFilters(); });
    }
    async init() {
        const container = document.querySelector('select-container');
        if (container !== null)
            container.remove();
        this.insertSelect();
        this.insertSelected();
    }
    async initAvailableFilters() {
        const req = new Request("GET", `http://localhost:5000/accidents/available-filers`);
        const reqData = await req.getData();
        reqData.available_filters.forEach(filter => this.availableFilters.set(filter, []));
        this.availableFilters.set("None", []);
    }
    async initFilterOptions() {
        const req = new Request("GET", `http://localhost:5000/accidents/filter-options?filter=${this.selectedOption}`);
        const reqData = await req.getData();
        this.filerOptions = reqData.options;
        this.filerOptions = this.filerOptions.map(option => option.option);
    }
    async insertSelect() {
        const modal = document.querySelector('title-container');
        const container = document.createElement('select-container');
        let select = document.createElement('select');
        Array.from(this.availableFilters.keys()).forEach(filter => {
            const option = document.createElement('option');
            if (this.selectedOption === filter) {
                option.setAttribute('selected', 'selected');
            }
            option.setAttribute('value', filter);
            option.innerText = filter;
            select.appendChild(option);

        })
        select.addEventListener('change', (event) => {
            this.updateSelectedOption(event.target.value);
            this.init();
        });
        container.appendChild(select);

        if (this.selectedOption !== "None") {
            await this.initFilterOptions();
            select = document.createElement('select');
            this.filerOptions.forEach(filterOption => {
                const option = document.createElement('option');
                option.setAttribute('value', filterOption);
                option.innerText = filterOption;
                select.appendChild(option);

            })
            select.addEventListener('change', (event) => {
                this.addOption(event.target.value);
            });
            container.appendChild(select);
        }
        modal.insertAdjacentElement('afterend', container);
    }

    insertSelected() {
        const map = this.availableFilters;
        const modal = document.querySelector('select-container');
        const existentContainer = document.querySelector('selected-container');
        if (existentContainer !== null)
            existentContainer.remove();
        const container = document.createElement('selected-container');
        this.availableFilters.forEach((value, key) => {
            if (value.length !== 0) {
                const optionsContainer = document.createElement("options-container");
                const filter = document.createElement("p");
                filter.innerText = key + ": ";
                optionsContainer.appendChild(filter);
                value.forEach(option => {
                    const optionContainer = document.createElement("option-container");
                    const optionText = document.createElement("p");
                    optionText.innerText = option;
                    const xButton = document.createElement("close");
                    xButton.innerText = "x";
                    optionContainer.appendChild(optionText);
                    optionContainer.appendChild(xButton);
                    optionContainer.addEventListener('click', () => {
                        map.set(key, map.get(key).filter(element => element !== option));
                        optionContainer.remove();
                    })
                    optionsContainer.appendChild(optionContainer);
                })
                container.appendChild(optionsContainer);
            }
        })
        if (modal !== null)
            modal.insertAdjacentElement('afterend', container);
    }
    updateSelectedOption(option) {
        this.selectedOption = option;
    }

    addOption(option) {
        this.availableFilters.get(this.selectedOption).push(option);
        this.insertSelected();
    }
    applyFilters() {
        let multiselectObject = new Object();
        this.availableFilters.forEach((value, key) => {
            if (value.length > 0) {
                multiselectObject[key] = value;
            }
        });
        FiltersQuery.queryInstance.setMultiselect(multiselectObject);
    }
}