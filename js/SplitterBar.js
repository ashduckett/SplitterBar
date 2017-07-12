/*
    Is this something that should be called on a containing div?

    Call it on a div and take up 100% of the width with the bar down the 
    middle.

    You then want a setLeftContent() and setRightContent() method.

    Would flexbox help here?

    // Let's grab draggable first.

*/


(function($) {

    // We should take in an argument for endDrag
    $.fn.SplitterBar = function (startDrag, endDrag, onMove) {
        $(this).css('display', 'flex');

        let leftSide = $(this).find('.left');

        $(this).find('.left').css('background-color', 'red');
        $(this).find('.left').css('width', '20px');

        $(this).find('.right').css('background-color', 'yellow');
        $(this).find('.right').css('flex', '1');

        // Inject splitter bar

        var splitterBar = $(document.createElement('div'));
        splitterBar.css('background-color', 'black');
        splitterBar.css('width', '12px');
        splitterBar.css('cursor', 'col-resize');
        
        $(this).find('.left').after(splitterBar);
   
       
        // What you want is a mousedown event and a mouse move event.
        // When the mouse goes down, take the coordinates relative to the bar
        // when it moves, enlarge or shrink the red div.
        
        let mouseDownX = 0
        let mouseDownY = 0

        let isDragging = false
        splitterBar.mousedown((event) => {
            console.log('mouse down on splitter');
            //mouseDownX = event.pageX
            //mouseDownY = event.pageY
            isDragging = true
            return false;
        });

        splitterBar.mouseup((event) => {
            console.log('mouse down on splitter');
            //mouseDownX = event.pageX
            //mouseDownY = event.pageY
            isDragging = false
            return false;
        });

        $(this).mousemove((event) => {
            if(isDragging) {
                leftSide.width(event.pageX - splitterBar.width() / 2);
            }
        });
    }
}(jQuery));