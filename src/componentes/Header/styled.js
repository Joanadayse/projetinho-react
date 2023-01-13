import styled from "styled-components";

export const Container = styled.header`
display: flex;
padding: 20px;
background-image: url("https://getwallpapers.com/wallpaper/full/b/d/5/557881.jpg")  ;
justify-content: space-between;
margin: 0 auto;


.cabecalho {
text-align:center;
color:#FFFFFF;
font-size: 50px;

   
}

.icone{
    margin-right:50px;
    margin-top: 25px;
    margin-bottom: 25px;
    background-color: #FFFFFF;
    padding: 20px;
    width: 20px;
    border-radius: 20%;
    cursor: pointer;
}

.span{  
display: flex;
justify-content: first baseline;
}

.contador{
    margin-right: -50px;
    margin-top: 30px;
    z-index: 10;
    font-weight: bold;
    list-style: none;
    font-size: 20px;
}




`