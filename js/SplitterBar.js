(function($) {

    // We should take in an argument for endDrag
    $.fn.SplitterBar = function() {
        $(this).css('display', 'flex');

        let leftSide = $(this).find('.left');
        let rightSide = $(this).find('.right');

        leftSide.css('background-color', 'red');
        leftSide.css('width', '20px');

        rightSide.css('background-color', 'yellow');
        rightSide.css('flex', '1');

        // Inject splitter bar
        let splitterBar = $(document.createElement('div'));
        splitterBar.css('background-color', 'black');
        splitterBar.css('width', '12px');
        splitterBar.css('cursor', 'col-resize');
        
        $(this).find('.left').after(splitterBar);
        
        let isDragging = false
        splitterBar.mousedown((event) => {
            isDragging = true
            return false;
        });

        splitterBar.mouseup((event) => {
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