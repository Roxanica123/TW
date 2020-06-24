import { Request } from "./../services/request.js"
import { FiltersQuery } from "../services/filters-query.js";
export class FiltersPopUp {
    static availableFilters = new Map();
    static filerOptions;
    static selectedOption = "None";
    static async init() {
        const container = document.querySelector('select-container');
        if (container !== null)
            container.remove();
        FiltersPopUp.insertSelect();
        FiltersPopUp.insertSelected();
    }
    static async initAvailableFilters() {
        const req = new Request("GET", `http://localhost:5000/accidents/available-filers`);
        const reqData = await req.getData();
        reqData.available_filters.forEach(filter => FiltersPopUp.availableFilters.set(filter, []));
        FiltersPopUp.availableFilters.set("None", []);
    }
    static async initFilterOptions() {
        const req = new Request("GET", `http://localhost:5000/accidents/filter-options?filter=${FiltersPopUp.selectedOption}`);
        const reqData = await req.getData();
        FiltersPopUp.filerOptions = reqData.options;
        FiltersPopUp.filerOptions = FiltersPopUp.filerOptions.map(option => option.option);
    }
    static async insertSelect() {
        const modal = document.querySelector('title-container');
        const container = document.createElement('select-container');
        let select = document.createElement('select');
        Array.from(FiltersPopUp.availableFilters.keys()).forEach(filter => {
            const option = document.createElement('option');
            if (FiltersPopUp.selectedOption === filter) {
                option.setAttribute('selected', 'selected');
            }
            option.setAttribute('value', filter);
            option.innerText = filter;
            select.appendChild(option);

        })
        select.addEventListener('change', (event) => {
            FiltersPopUp.updateSelectedOption(event.target.value);
            FiltersPopUp.init();
        });
        container.appendChild(select);

        if (FiltersPopUp.selectedOption !== "None") {
            await FiltersPopUp.initFilterOptions();
            select = document.createElement('select');
            FiltersPopUp.filerOptions.forEach(filterOption => {
                const option = document.createElement('option');
                option.setAttribute('value', filterOption);
                option.innerText = filterOption;
                select.appendChild(option);

            })
            select.addEventListener('change', (event) => {
                FiltersPopUp.addOption(event.target.value);
            });
            container.appendChild(select);
        }
        modal.insertAdjacentElement('afterend', container);
    }

    static insertSelected() {
        const map = FiltersPopUp.availableFilters;
        const modal = document.querySelector('select-container');
        const existentContainer = document.querySelector('selected-container');
        if (existentContainer !== null)
            existentContainer.remove();
        const container = document.createElement('selected-container');
        FiltersPopUp.availableFilters.forEach((value, key) => {
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
    static updateSelectedOption(option) {
        FiltersPopUp.selectedOption = option;
    }

    static addOption(option) {
        FiltersPopUp.availableFilters.get(FiltersPopUp.selectedOption).push(option);
        FiltersPopUp.insertSelected();
    }
    static applyFilters() {
        let multiselectObject = new Object();
        FiltersPopUp.availableFilters.forEach((value, key) => {
            if (value.length > 0) {
                multiselectObject[key] = value;
            }
        });
        FiltersQuery.queryInstance.setMultiselect(multiselectObject);
    }
}