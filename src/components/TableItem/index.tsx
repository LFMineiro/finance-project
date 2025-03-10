import { categories } from '../../data/categories';
import { FormatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/item';

import * as C from './styles' 

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return(
      <C.TableLine>
          <C.TableColumn>{FormatDate(item.date)}</C.TableColumn>
          <C.TableColumn>
            <C.Category color={categories[item.category].color}>
                {categories[item.category].title}
            </C.Category>
            </C.TableColumn>
          <C.TableColumn>{item.title}</C.TableColumn>
          <C.TableColumn>
            <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
            R$ {item.value}
            </C.Value>
            </C.TableColumn>
    </C.TableLine>  

    );

}
