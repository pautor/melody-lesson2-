$(document).ready(function () {
    var currentFloor = 2; //переменная, где хранится текущий этаж
    var floorPath = $(".home-image path"); //Каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); /*кнопка увеличение этажа */
    var counterDown = $(".counter-down"); /*Кнопка уменьшения этажа */
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");

    //Функция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
      floorPath.removeClass("current-floor");//Удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor");//Получаем значение текущего этажа
    $('.counter').text(currentFloor);//записываем значение этажа в счётчик справа
   });

   floorPath.on('click', toggleModal);//При клике на этаж, вызывает окно
   modalCloseButton.on('click', toggleModal);//Клик на кнопку закрыть убирает окно

    //отслеживаем клик по кнопки вверх
   counterUp.on("click", function () { 
      if (currentFloor < 18) {  //Проверяем значение этажа, оно не должно быть больше 18
        currentFloor++; //Прибавляем один этаж
        //Форматируем переменную с этажом, чтобы было 01 а не 1
        usCurrentFloor = currentFloor.toLocaleString("en-US" , { 
            minimumIntegerDigits: 2, useGroupping: false });  
        $(".counter").text(usCurrentFloor); //записываем значение этажа в счётчик справа
        floorPath.removeClass("current-floor"); //Удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //Подсвечиваем текущий этаж
      }
   });

   counterDown.on("click", function (){
     if (currentFloor > 2) {
       currentFloor--;
       usCurrentFloor = currentFloor.toLocaleString("en-US" , { 
        minimumIntegerDigits: 2, useGroupping: false });
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");

     }
   });
   function toggleModal() { //Функция открыть-закрыть окно
    modal.toggleClass('is-open');
   }
});