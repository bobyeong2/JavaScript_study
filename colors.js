var Link = {

    setColor: function(color){

        // var element_list = document.querySelectorAll('a');
        // var index = 0;
        // while(index < element_list.length){
        //   element_list[index].style.color = color;
        //   index +=1;
        // }
        $('a').css('color',color)
  }
}

  var Body = {
    setColor: function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color)
  },
    setBackgroundColor : function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color)
  }
}

  function nightDayHandler(self){
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day'


        Link.setColor('powderblue');
    }else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night'
        Link.setColor('Blue');
}
}