
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  // 사이드바 - 스크롤 이벤트 & 클릭
  const sideMenuItems = document.querySelectorAll("#side-nav ul li");
  const sections = document.querySelectorAll("section");

  //클릭
  sideMenuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      const sectionTop = sections[index].offsetTop;

      if (index === 0) {
        window.scrollTo({
          top: sectionTop,
        });
      } else {
        window.scrollTo({
          top: sectionTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
  // 헤더
  const scrollText = document.querySelector(".scroll-text");
  scrollText.addEventListener("click", () => {
    window.scrollTo({
      top: sections[1].offsetTop,
      behavior: "smooth",
    });
  });
    const header = document.getElementById("header");
    let headerHeight = header.offsetHeight;

    window.addEventListener("scroll", () => {
      // let windowTop = window.scrollY || window.pageYOffset;
      let windowTop = window.scrollY ;
    
      if (windowTop >= headerHeight) {
        header.classList.add("drop");
      } else {
        header.classList.remove("drop");
      }
    });
  
  // 반응형 대비
  const resizeBar = document.querySelector(".fa-solid.fa-bars");
  const closeBar = document.querySelector(".fa-solid.fa-xmark");
  const resizeMenu = document.querySelector("#header > .wrapper > ul");

  resizeBar.addEventListener("click", () => {
    resizeBar.style.display = "none";
    closeBar.style.display = "block";
    resizeMenu.classList.add("active");
  });

  closeBar.addEventListener("click", () => {
    resizeBar.style.display = "block";
    closeBar.style.display = "none";
    resizeMenu.classList.remove("active");
  });

//스크롤 효과
let currentSectionIndex = 0;

window.addEventListener("scroll", () => {
  const positionY = window.scrollY;
  console.log(positionY);

  //추가
  const currentSection = sections[currentSectionIndex];
  const nextSection = sections[currentSectionIndex + 1];

  if (nextSection) {
    const sectionTop = currentSection.offsetTop;
    const sectionBottom = sectionTop + currentSection.scrollHeight;
    const nextSectionTop = nextSection.offsetTop;

    if (positionY >= sectionBottom) {
      window.scrollTo(0, nextSectionTop);
      currentSectionIndex++;
    }
        console.log(nextSection);
  }
  //추가마감
  // window.scrollTo(0, 914) 안찍힘

  //기존
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBtm = sectionTop + section.clientHeight;

    if (positionY >= sectionTop && positionY < sectionBtm) {
      sideMenuItems.forEach((item) => item.classList.remove("active"));
      sideMenuItems[index].classList.add("active");
    }
  });
});

  //더보기 버튼 부분
  const projectList = document.getElementById("project-list");
  const moreBtn = document.getElementById("moreButton");

  const projectItems = Array.from(projectList.querySelectorAll("li"));
  const hiddenItems = document.querySelectorAll(
    ".cont-menu li.project-item.hidden"
  );

  const maxScreenWidth = 768;
  function showFirstHiddenItem() {
    if (window.innerWidth < maxScreenWidth) {
      hiddenItems[0].classList.remove("hidden");
    } else {
      hiddenItems[0].classList.add("hidden");
    }
  }

  window.addEventListener("resize", showFirstHiddenItem);
  showFirstHiddenItem();

  moreBtn.addEventListener("click", () => {
    hiddenItems.forEach((item) => {
      item.style.display = "block";
    });
    moreBtn.style.display = "none";
  });




});











    // moreBtn.addEventListener("click", () => {
    //   const btmCont = document.querySelector(".btm_cont");
    //   const newDiv = document.createElement("div");
    //   newDiv.textContent = "dddd"
    //   btmCont.appendChild(newDiv);
    // });
    
    // document.addEventListener("DOMContentLoaded", function () {
    //     const moreButton = document.getElementById("moreButton   
    //     moreButton.addEventListener("click", function () {
    //         const contBtm = document.querySelector(".btm_cont");
    //         const newContent = document.createElement("p");
    //         newContent.textContent = "더보기 내  
    //         contBtm.appendChild(newContent);
    //     });
    // });    