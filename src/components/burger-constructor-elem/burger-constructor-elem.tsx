import styles from "./burger-constructor-elem.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useRef} from "react";
import {ETypesIngredient, Ingredient} from "../../store/actions/types";
import {decrement} from "../../store/actions/constructor-elements";
import {deleteIngredient, moveIngredient} from "../../store/actions/ingredients";
import {DropTargetMonitor, useDrag, useDrop, XYCoord} from "react-dnd";

interface IBurgerConstructorElemProps {
    ingredients: Ingredient[];
    elem: Ingredient;
    index: number;
    decrement: typeof decrement;
    deleteIngredient: typeof deleteIngredient,
    moveIngredient: typeof moveIngredient
}

export const BurgerConstructorElem = (props: IBurgerConstructorElemProps) => {
    const {ingredients, elem, index, decrement, deleteIngredient, moveIngredient} = props;

    const isLocked = (elem: Ingredient) => {
        return elem.type === ETypesIngredient.BUN;
    };
    const type = (elem: Ingredient): "top" | "bottom" | undefined => {
        if (ingredients[0].id === elem.id) {
            return 'top';
        }
        if (ingredients[ingredients.length - 1].id === elem.id) {
            return 'bottom';
        }
        return undefined;
    };

    const name = (elem: Ingredient): string => {
        if (ingredients[0].id === elem.id) {
            return elem.name + ' (верх)';
        }
        if (ingredients[ingredients.length - 1].id === elem.id) {
            return elem.name + ' (низ)';
        }
        return elem.name;
    };

    const ref = useRef<HTMLDivElement>(null)
    const [, drop] = useDrop({
        accept: 'constructor',
        hover(item: Ingredient, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return;
            }
            if (item.index === index || index === 0 || index === ingredients.length - 1) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();

            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
            if (item.index !== undefined && item.index < index && hoverClientY < hoverMiddleY) {
                return;
            }
            if (item.index !== undefined && item.index > index && hoverClientY > hoverMiddleY) {
                return;
            }
            item.index !== undefined && moveIngredient(item.index, index);
        },
    });

    const [, drag] = useDrag({
        type: 'constructor',
        item: elem,
        canDrag: index !== 0 && index !== ingredients.length - 1
    });

    drag(drop(ref));
    return (
        <div className={styles.item} ref={ref}>
            {index !== 0 && index !== ingredients.length - 1 &&
                <span className={styles.drag_icon}> <DragIcon type="primary"/></span>}
            <span className={styles.elem_list}
                  style={(index === 0 || index === ingredients.length - 1) ? {paddingLeft: '37.5px'} : {}}>
                            <ConstructorElement
                                type={type(elem)}
                                isLocked={isLocked(elem)}
                                text={name(elem)}
                                price={elem.price}
                                thumbnail={elem.image}
                                handleClose={() => {
                                    decrement(elem._id);
                                    deleteIngredient(elem)
                                }}
                            />
                    </span>
        </div>
    );
};