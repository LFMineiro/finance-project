import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem'
import * as C from './styles'

type Props = {
  currentMonth: string
  onMonthChange: (newMonth: string) => void
  income: number
  expense: number
}

export const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)

    currentDate.setMonth(currentDate.getMonth() - 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    const [year, month] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year), parseInt(month), 1)

    currentDate.setMonth(currentDate.getMonth() + 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()}`)
  }

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receita" value={income} />
        <ResumeItem title="Despesa" value={expense} />
        <ResumeItem
          title="Balanço"
          value={parseFloat((income - expense).toFixed(2))}
          color={income - expense < 0 ? 'red' : 'green'}
        />
      </C.ResumeArea>
    </C.Container>
  )
}
