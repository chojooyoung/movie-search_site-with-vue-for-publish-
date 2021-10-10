<template>
  <div class="Home">
    <div class="Home-hearder">
      <h1>🎬welcome!</h1>
    </div>
    <div class="Home-title1">
      🥨예매 사이트🥤
    </div>
    <div class="Home-reserve">
      <div class="Home-reserve-mega">
        <a
          href="https://www.megabox.co.kr/"
          target="_blank">
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/ci/logo-white_new2.png"
            alt="megabox" />
        </a>
      </div>
      <div class="Home-reserve-lotte">
        <a
          href="https://www.lottecinema.co.kr/NLCHS"
          target="_blank">
          <img
            src="https://www.lottecinema.co.kr/NLCHS/Content/images/common/logo_wht.png"
            alt="lottecinema" />
        </a>
      </div>
      <div class="Home-reserve-cgv">
        <a
          href="https://www.cgv.co.kr/"
          target="_blank">
          <img
            src="https://img.cgv.co.kr/R2014/images/title/h1_cgv.png"
            alt="cgv" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1{
  width:100%;
  padding:20px;
  margin:0px;
  color:white;
  border-bottom: solid white ;
}
.Home-title1{
    width:100%;

  margin-top:50px;
  text-align: center;
  padding: 20px;;
  font-size:30px;
  color:white;
}
.Home-reserve{
  width:100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding:20px;
  .Home-reserve-mega{
    
    margin-right:100px;
  }
    .Home-reserve-lotte{
    margin-right:100px;
  }
    .Home-reserve-cgv{
  }
}

@media all and (max-width: 1020px) {
  .Home-reserve {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
      .Home-reserve-mega{
    
    margin-right:0px;
    margin-bottom:30px;
  }
    .Home-reserve-lotte{
    margin-right:0px;
    margin-bottom:30px;
  }
    .Home-reserve-cgv{
  }
  }
}
@media all and (min-width: 1021px) {
  .Home-reserve {
  width:100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding:20px;
  
  }
}
</style>