import styled from 'styled-components';

const Body = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
/* background-color:white; */
background-color:black;
overflow:hidden;
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
const circle = styled.div`
width:700px;
height:700px;
display:flex;
justify-content:center;
position:absolute;
opacity:0.9;
transition:5s;
div{
    width:80px;
    height:250px;
/*     background-color:yellow; */
    border-radius:10px;
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
    circle,
    cont
}