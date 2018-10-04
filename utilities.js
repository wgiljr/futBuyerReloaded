/**
 * Gets the desired element on the client page and clicks on it
 */

function goToActivityTab() {
    var activityTab = document.getElementsByClassName("btn-standard buyButton")[0];    

    activityTab.click();
}

function findMe(){
    var buyNow = document.getElementsByClassName("btn-standard buyButton");

    console.log(buyNow);

    //buyNow[0].click();

    console.log($(".btn-standard.buyButton"));
    console.log($(this).find(".btn-standard.buyButton"));
    
    try {
        setTimeout(() => {
            //const bronzePackButton = document.getElementsByClassName('currency call-to-action cCoins')[0];
            const buyNowButton = $(this).find(".btn-standard.buyButton");

            //tapElement(bronzePackButton);
            tapElement(buyNowButton);

            // setTimeout(() => {
            //     const okButton = document.getElementsByClassName('Dialog')[0].getElementsByClassName('btn-flat')[1];
            //     tapElement(okButton);
            // }, 50);
        }, 200);
    } catch (error) {
        log('Unable to do the buy now.', true /* isError */);
        return;
    }

}

function tapElement(element) {
    sendTouchEvent(element, 'touchstart');
    sendTouchEvent(element, 'touchend');
}

/**
 * Dispatches a touch event on the element.
 * https://stackoverflow.com/a/42447620
 *
 * @param {HTMLElement} element
 * @param {string} eventType
 */
function sendTouchEvent(element, eventType) {
    const touchObj = new Touch({
    identifier: 'Keyboard shortcuts should be supported natively without an extension!',
    target: element,
    clientX: 0,
    clientY: 0,
    radiusX: 2.5,
    radiusY: 2.5,
    rotationAngle: 10,
    force: 0.5
});

const touchEvent = new TouchEvent(eventType, {
    cancelable: true,
    bubbles: true,
    touches: [touchObj],
    targetTouches: [touchObj],
    changedTouches: [touchObj],
    shiftKey: true
});

element.dispatchEvent(touchEvent);
}

function simulateClick() {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window,
        0, 0, 0, 0, 0, false, false, false, false, 0, null);
    //var cb = document.getElementById("checkbox"); 
    //var canceled = !cb.dispatchEvent(evt);
    var btBuy = document.getElementsByClassName("btn-standard buyButton");
    try {
        btBuy[0].dispatchEvent(evt);
    } catch (error) {
        console.log('Unable to click.', true /* isError */);
        return;
    }
    
    // if(canceled) {
    //   // A handler called preventDefault
    //   alert("canceled");
    // } else {
    //   // None of the handlers called preventDefault
    //   alert("not canceled");
    // }
}

//goToActivityTab();
//$(document).ready(function() {
    //findMe();
    simulateClick();
//});

