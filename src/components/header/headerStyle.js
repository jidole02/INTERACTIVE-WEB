import styled, {css} from 'styled-components';

const HeaderDiv = styled.div`
width:69vw;
padding:50px 12%;
display:flex;
justify-content:space-between;
position:absolute;
z-index:30;
a{
    margin-top:10px;
    font-size:1.6rem;
    color:white;    
    b{
        padding-left:10px;
    }
}
i{
    font-size:2rem;
    color:white;
}
div{
    display:flex;
    ul{
        display:flex;
        margin:none;
        li{
            list-style:none;
            margin-left:200px;
            font-weight:bold;
            letter-spacing:2px;
            font-size:18px;
            color:white;
            i{
                font-size:19px;
            }
            :hover{
                opacity:0.7;  
                cursor: pointer;
            }
        }
        li:nth-of-type(1){
            margin-left:0;
        }
        a{
            font-size:19px;
            i{
                font-size:19px;
            }
            :hover{
                opacity:0.7;  
                cursor: pointer;
            }
        }
    }
}
div{
    a{
        margin-left:10px;
    }
    i{
        font-size:1.7rem;
        margin-top:15px;    
        color:white;    
        :hover{
            opacity:0.7;
        }
    }
    i:nth-of-type(2){
        margin-left:10px;
    }
}
`

export{
HeaderDiv
}