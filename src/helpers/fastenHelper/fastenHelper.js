import {addUserNewsAction} from "../../store/slices/topNewsUa.slice";
import {addUserNewsUsActions} from "../../store/slices/topNewsUs.slice";
import {addUserNewsPLActions} from "../../store/slices/topNewsPl.slice";


export function fastenHelper(id, currentColor, country, isFasten, data, dispatch) {
    const newData = [...data];
    const itemIndex = newData.findIndex((item) => item.id === id);
    const selectedItem = newData.splice(itemIndex, 1);

    if (!isFasten && currentColor !== 'yellow') {
        newData.unshift(...selectedItem);

        if (country === 'Ukraine') {
            dispatch(addUserNewsAction.fastenUserNews(newData));
            dispatch(addUserNewsAction.changeIsFastenUa(1));
        }
        if (country === 'USA') {
            dispatch(addUserNewsUsActions.fastenUserNewsUs(newData));
            dispatch(addUserNewsUsActions.changeIsFastenUs(1));
        }
        if (country === 'Polish') {
            dispatch(addUserNewsPLActions.fastenUserNewsPL(newData));
            dispatch(addUserNewsPLActions.changeIsFastenPL(1));
        }

    } else {
        newData.push(...selectedItem);
        if (country === 'Ukraine') {
            dispatch(addUserNewsAction.fastenUserNews(newData));
            dispatch(addUserNewsAction.changeIsFastenUa(0));
        }
        if (country === 'USA') {
            dispatch(addUserNewsUsActions.fastenUserNewsUs(newData));
            dispatch(addUserNewsUsActions.changeIsFastenUs(0));
        }
        if (country === 'Polish') {
            dispatch(addUserNewsPLActions.fastenUserNewsPL(newData));
            dispatch(addUserNewsPLActions.changeIsFastenPL(0));
        }

    }
}