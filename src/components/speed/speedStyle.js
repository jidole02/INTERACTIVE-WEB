import styled, {css} from 'styled-components';

const Body = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background-color:rgb(240, 195, 49);
overflow:hidden;
img:first-child{
    width:750px;
}
img:last-child{
    width:400px;
    position:absolute;
}
`
const circle = styled.div`
width:400px;
height:400px;
border-radius:200px;
position:absolute;
box-shadow:0px 0px 40px skyblue;
transform:translate(39.6vw, 29.6vh);
`

const cont = styled.div`
position:absolute;
width:100px;
height:170px;
transform:translate(90vw, 39vh);
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
div{
    width:27px;
    height:27px;
}
i{
    color:white;
    font-size:1.8rem;
    :hover{
        opacity:0.7;
    }
}


a{
    color:white;
    font-size:1.5rem;
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

export{
Body,
circle,
cont,
menuBar,
}