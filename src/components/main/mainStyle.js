import styled from 'styled-components';

const ChoosePage = styled.div`
    padding-left: 70px;
    width: calc(30vw - 70px);
    padding: 50px;
    height:250px;
    border-radius: 15px;
    a:nth-of-type(1){
        position:absolute;
        transform:translate(205px, 123px);
        color:black;
        font-size:13px;
    }
    h4{
        color:black;
    }
    h1{
        color:white;
    }
    h5{
        color:black;
        font-weight:500;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        margin-left:0;
    }
    :hover{
        transform:rotateY(0deg);
    }
`

export {
    ChoosePage
}