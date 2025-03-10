import * as C from './App.styles'
import { Item } from './types/item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { useEffect, useState } from 'react';
import { filterListbyMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import './App.css'
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(()=> {
    setFilteredList( filterListbyMonth(list, currentMonth));

  }, [list, currentMonth]);

  useEffect(() => {

    let incomeCount = 0
    let expenseCount = 0

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }

      setIncome(incomeCount)
      setExpense(expenseCount)
      
    }
    
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

    const handleAddItem = (item: Item) => {
      let newList = [...list]
      newList.push(item)
      setList(newList)
    }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>
          Sistema Finaceiro
        </C.HeaderText>
      </C.Header>

      <C.Body>

        {/* Área de Informação */}
        
        <InfoArea 
        currentMonth = {currentMonth} 
        onMonthChange = {handleMonthChange}
        income = {income}
        expense = {expense}
        />

        {/* Área de Inserção 
        Data 
        Categoria
        Titulo
        Adicionar
        */}

        <InputArea onAdd = {handleAddItem} />


        {/* Área de Itens */}
       
       <TableArea list = {filteredList} />
      </C.Body>




    </C.Container>


  );
}

export default App;