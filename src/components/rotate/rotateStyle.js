import styled, {css} from 'styled-components';

const Body = styled.div`
height:100vh;
display:flex;
justify-content:space-between;
align-items:center;
background-color:coral;
overflow:hidden;
padding:0 15vw;
`

const menuBar = styled.div`
position:absolute;
width:100px;
height:200px;
transform:translate(5vw, 38vh);
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
i{
    color:white;
    font-size:1.8rem;
    :hover{
        transition:1s;
        opacity:0.7;
        margin-left:20px;
    }
}
`

const cont = styled.div`
position:absolute;
width:100px;
height:270px;
transform:translate(90vw, 34vh);
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
div{
    width:27px;
    height:27px;
    border-radius:80%;
    border:3px solid white;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-weight:bold;
    background-color:tomato;
    cursor: pointer;
    :first-child{
        background-color:black;
    }
    :last-child{
        background-color:red;
    }
    :hover{
        box-shadow:0px 0px 10px white;
    }
}
i{
    color:white;
    font-size:1.8rem;
    :hover{
        opacity:0.7;
    }
}
`

export{
    Body,
    menuBar,
    cont
}