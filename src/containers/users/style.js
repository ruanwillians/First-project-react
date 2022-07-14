import styled from 'styled-components'
import Background from '../../assets/background.svg'

export const Container = styled.div`
    background: url(${Background});
    background-size: cover;
    display: flex;
    align-items: center;
    gap: 40px;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
`

export const Image = styled.img`
    margin-top: 30px;

`

export const Button = styled.button`
    width: 342px;
    height: 74px;
    left: 35px;
    top: 497px;
    border-radius: 14px;

    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 100px;
    border: 2px solid #FFFFFF;
    background: transparent;
    text-decoration: none;

    img{
     transform: rotateY(180deg);   
    }
    

    &:hover{
        opacity: 0.8
    }

    &:active{
        opacity: 0.5
    }

`

export const Users = styled.li` 
    display: flex;
    justify-content: space-around;
    height: 58px;
    align-items: center;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    margin-top: 20px;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    color: #FFFFFF;

    img{
        background: transparent;
        border: none;
        cursor: pointer;
        
    }
`

