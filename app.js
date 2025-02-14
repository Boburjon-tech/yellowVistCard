// M<ain Div
const divWrapper = document.createElement("div");
divWrapper.setAttribute("class","MainDiv");
// Image
const img = document.createElement("img");
img.src='blogimage.svg';
img.width="336";
img.height="200";
// InnerFirstDiv
const aboutDivWrap = document.createElement("div");
aboutDivWrap.setAttribute("class","InnerFirstDiv");
// btn
const btn = document.createElement("a");
btn.setAttribute("class","btn");
btn.href = "#";
btn.textContent = "Learning";
// subtitle
const subtitle = document.createElement("p");
subtitle.textContent = "Published 21 Dec 2023";
subtitle.setAttribute("class","subtitle");
// Title
const title = document.createElement("h2");
title.textContent = "HTML & CSS foundations";
title.setAttribute("class","title");
// aboutText
const aboutText = document.createElement("p");
aboutText.textContent="These languages are the backbone of every  website, defining structure, content, and presentation.";
aboutText.setAttribute("class","aboutText");

const userDivWrap = document.createElement("div");
userDivWrap.setAttribute("class","userDivWrap");
const AvatarImg = document.createElement("img");
AvatarImg.setAttribute("class","AvatarImg");
AvatarImg.src="userpic.svg";
AvatarImg.width;
AvatarImg.height;

const userName = document.createElement("h4");
userName.textContent = "Greg Hooper";
userName.setAttribute("class","userName");

aboutDivWrap.append(btn, subtitle, title, aboutText);
userDivWrap.append(AvatarImg, userName);
divWrapper.append(img, aboutDivWrap, userDivWrap);

document.body.appendChild(divWrapper);

