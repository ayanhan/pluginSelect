import {Select} from "./select/select";
import './select/styles.scss'

const select = new Select('#select', {
    placeholder: 'Please choose element',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'Next'},
        {id: '5', value: 'Nest'},
        {id: '6', value: 'React Native'}
    ]
})

window.s = select
