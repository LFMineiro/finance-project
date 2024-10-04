import { useState } from 'react'
import { Item } from '../../types/item'
import * as C from './styles'
import { categories } from '../../data/categories'
import { newDateAdjusted } from '../../helpers/dateFilter'
type Props = {
  onAdd: (item: Item) => void
}

export const InputArea = ({ onAdd }: Props) => {
  const [dateInput, setDateInput] = useState('')
  const [categoryInput, setCategoryInput] = useState('')
  const [titleInput, setTitleInput] = useState('')
  const [valueInput, setValueInput] = useState(0)

  const categoryKeys: string[] = Object.keys(categories)

  const handleAddEvent = () => {
    const errors: string[] = []

    if (isNaN(new Date(dateInput).getTime())) {
      errors.push('Data invalida')
    }

    if (titleInput === '') {
      errors.push('título invalido')
    }

    if (valueInput <= 0) {
      errors.push('Valor inválido!')
    }

    if (errors.length > 0) {
      alert(errors.join('\n'))
    }

    if (!categoryKeys.includes(categoryInput)) {
      errors.push('Categoria Invalida')
    } else {
      onAdd({
        date: newDateAdjusted(dateInput),
        category: categoryInput,
        title: titleInput,
        value: valueInput,
      })
    }
  }

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input
          type="date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
        ></C.Input>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
        >
          <option></option>
          {categoryKeys.map((key, index) => (
            <>
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            </>
          ))}
        </C.Select>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Titulo</C.InputTitle>
        <C.Input
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        ></C.Input>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input
          type="number"
          value={valueInput}
          onChange={(e) => setValueInput(parseFloat(e.target.value))}
        ></C.Input>
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  )
}
