import styled, {css} from 'styled-components';

const Body = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background-color:rgb(241, 83, 255);
img{
    width:600px;
}
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
const Circle = styled.div`
width:60px;
height:60px;
background-color:black;
border-radius:80%;
position:absolute;
margin-right:90px;
margin-bottom:350px;
`

const cont = styled.div`
position:absolute;
width:100px;
height:130px;
transform:translate(90vw, 42vh);
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
div{
    width:27px;
    height:27px;
    border-radius:80%;
    border:2px solid white;
    background-color:yellow;
    :last-child{
        background-color:tomato;
    }
    :hover{
        border: 2px solid skyblue;
    }
}



a{
    color:white;
    font-size:1.5rem;
}

`

export{
    Body,
    menuBar,
    Circle,
    cont
}