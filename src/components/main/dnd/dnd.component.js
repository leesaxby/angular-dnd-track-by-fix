import dnd from './dnd.html';
import styles from './dnd.scss';

export default {
    templateUrl: dnd,
    controller() {
        this.$onInit = () => {
            this.list = [
                {id: 1, label: 'one'},
                {id: 2, label: 'two'},
                {id: 3, label: 'three'}
            ];
        }
        
        this.moveItem = (movedIndex, movedItem) => {          
            this.list.splice(movedIndex, 0, movedItem);
            const oldIndex = this.list.findIndex((item, index) => item.id === movedItem.id && index !== movedIndex)
            this.list.splice(oldIndex, 1);
        } 
    }
};
