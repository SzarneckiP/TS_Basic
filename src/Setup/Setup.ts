import Exchanger from '../Exchanger/Exchanger';
import * as _ from 'lodash';

const initEventListener = () => {

    const btn: HTMLElement | null = document.getElementById('exchange');
    const resultText: HTMLElement | null = document.getElementById('result');


    const getValueInInput = (id: string): number => {

        const element: HTMLElement | null = document.querySelector(`.${id}`);

        if (element !== null && element instanceof HTMLInputElement) {
            return element.valueAsNumber;
        } else {
            throw new Error('Element HTML is null or wrong type');
        }
    }

    if (btn !== null) {
        if (btn instanceof HTMLButtonElement) {
            btn.addEventListener('click', (event: MouseEvent) => {
                event.preventDefault();
                const exchanger: Exchanger = new Exchanger(
                    getValueInInput('gold'),
                    getValueInInput('silver'),
                    getValueInInput('copper')
                );
                if (resultText !== null) {
                    resultText.innerText = _.padStart(`${exchanger.toCopper()}`, 5, '0');
                }
            });
        } else {
            throw new Error('Element HTML for exchange is not a button');
        }
    } else {
        throw new Error('Button for exchange not found');
    }
}

initEventListener();
