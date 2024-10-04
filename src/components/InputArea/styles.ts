import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  display: flex;
`
export const Input = styled.input`
  padding: 0px 5px;
  height: 30px;
  width: 100%;
`
export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`
export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`
export const Select = styled.select`
  padding: 0 5px;
  height: 30px;
  width: 100%;
`

export const Button = styled.button`
  width: 100%;
  padding: 0 5px;
  height: 30px;
  background-color: lightblue;
  color: black;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid lightblue;
  &:hover {
    background-color: blue;
    color: white;
  }
`
