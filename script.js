const generateBtn= document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer') ;

generateBtn.addEventListener('click', () => {
    if (gridContainer.children.length >=30) {
        const confirmed=confirm('이미지가 30개 입니다. 모든 사진을 지우시겠습니까');
        if(confirmed) {
            gridContainer.innerHTML= ""; //모든 이미지 삭제
        }
    }

    else {
        const img =document.createElement('img');
        //img.src=imgUrl;
        
        img.src=`https://picsum.photos/500?random=${Math.floor(Math.random()*1000)+1}`
        gridContainer.appendChild(img);

    }
    //클릭 이벤트 발생 후 실행할 코드
    //const randomNumber = Math.floor(Math.random()*1000)+1;
    // const imgUrl= `https://picsum.photos/500?random=${randomNumber}`;


});