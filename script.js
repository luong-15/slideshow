
var imgFeature = document.querySelector('.img-feature')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')
const images = [
  "https://cf.shopee.vn/file/vn-50009109-e43e495616acf2bd9383373e474780ec_xxhdpi",
  "https://cf.shopee.vn/file/vn-50009109-a12358ec8482e680848e8764a4ccf933",
  "https://cf.shopee.vn/file/vn-50009109-f5bf73cb85da3b2b3d7ab7d2026ea07d",
  "https://cf.shopee.vn/file/vn-50009109-da96a75d740f3d931cbab55b6c8b57ef",
  "https://cf.shopee.vn/file/vn-50009109-fecd1c6f44555ca7f2cbe7abffaac4e5",
  "https://cf.shopee.vn/file/vn-50009109-bd184887b57e6c06b964db33ea72df84",
  "https://cf.shopee.vn/file/vn-50009109-9c94e6b73b52e20f21a6b56d74ea170d"
];

var currentIndex = 0;

function updateImageByIndex(index) {
  currentIndex = index
  imgFeature.src = images[index]
  images[index].parentElement.classList.add('active')
}

prevBtn.addEventListener('click', (e) => {
  if(currentIndex == 0) {
    currentIndex = images.length - 1
  }else{
    currentIndex--
  }
  
  updateImageByIndex(currentIndex)
})

nextBtn.addEventListener('click', e => {
  if(currentIndex == images.length - 1) {
    currentIndex = 0
  }else{
    currentIndex++
  }
  
  updateImageByIndex(currentIndex)
})