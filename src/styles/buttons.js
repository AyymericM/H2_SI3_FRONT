import styled from "styled-components"
import { colors, sizes } from './constants'
import { Link } from 'react-router-dom'

// Creating style of the component
const main = styled.button`
    min-width: 200px;
    border: none;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    border-radius: 3px;
    padding: 1% 3%;
    font-size: ${sizes.button};
    color: #FFFFFF;
    background: ${props => props.yellow ? colors.lightYellow : colors.lightPurple};
    box-shadow: 0 6px ${props => props.yellow ? colors.darkYellow : colors.darkPurple};
    position: relative;
    &:hover {
        box-shadow: 0 4px ${props => props.yellow ? colors.darkYellow : colors.darkPurple};
        top: 2px;
    }
    &:active {
        box-shadow: 0 0 ${props => props.yellow ? colors.darkYellow : colors.darkPurple};
        top: 6px;
    }
`
const link = styled(Link)`
    border: none;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    border-radius: 3px;
    padding: 1% 3%;
    width: 300px;
    text-align: center;
    font-size: ${sizes.button};
    color: #FFFFFF;
    background: ${props => props.primary ? colors.lightGreen : props.main};
    box-shadow: 0 6px ${props => props.primary ? colors.darkGreen : props.secondary};
    position: relative;
    &:hover {
        box-shadow: 0 4px ${props => props.primary ? colors.darkGreen : props.secondary};
        top: 2px;
    }
    &:active {
        box-shadow: 0 0 ${props => props.primary ? colors.darkGreen : props.secondary};
        top: 6px;
    }
`
const input = styled.div`
    border: none;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    text-align: center;
    border-radius: 3px;
    padding: 2% 3%;
    font-size: ${sizes.button};
    color: #FFFFFF;
    width: 300px;
    box-sizing: border-box;
    background: ${colors.lightGreen};
    box-shadow: 0 6px ${colors.darkGreen};
    margin-top: 2vh;
    position: relative;
    &:hover {
        box-shadow: 0 4px ${colors.darkGreen};
        top: 2px;
    }
    &:active {
        box-shadow: 0 0 ${colors.darkGreen};
        top: 6px;
    }
`

const arrow = styled(Link)`
    border: none;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    height: 100%;
    display: flex;
    position: absolute;
    left: 5%;
    top: 5px;
`
const cross = styled(Link)`
    border: none;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    height: 100%;
    display: flex;
`
const profil = styled(Link)`
    border: none;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    height: 100%;
    position: fixed;
    top: 10px;
    right: 10px;
`
const question = styled.button`
    border: none;
    cursor: pointer;
    outline: none;
    background: ${props => props.main || colors.grey};
    box-shadow: 0 6px ${props => props.secondary || colors.lightGrey};
    width: 40vw;
    height: 20vh;
    color: white;
    font-size: ${sizes.question}
    border-radius: 3px;
    position: relative;
    &:hover {
        box-shadow: 0 4px ${props => props.secondary || colors.lightGrey};
        top: 2px;
    }
    &:active {
        box-shadow: 0 0 ${props => props.secondary || colors.lightGrey};
        top: 6px;
    }
`

export {
    main,
    arrow,
    link,
    input,
    cross,
    question,
    profil
}