import styled from 'styled-components'
import Background1 from '../../assets/background1.svg'



export const Container = styled.div`
    background: url(${Background1});
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


export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-left: 25px;
    color: #EEEEEE;

`


export const Input = styled.input`
    width: 342px;
    height: 58px;
    left: 36px;
    top: 193px;
    padding-left: 25px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    margin-bottom: 56px ;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    color: #FFFFFF;


`

export const Button = styled.button`
    width: 342px;
    height: 74px;
    left: 35px;
    top: 497px;

    background: rgba(0, 0, 0, 0.8);
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
    text-decoration: none;

    &:hover{
        opacity: 0.8
    }

    &:active{
        opacity: 0.5
    }

`



