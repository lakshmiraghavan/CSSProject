/**
 * Created by lakshmi on 7/8/15.
 */
/**
 * @module MyModule
 * @description Ajax Utility Functions
 */

/**
 * @function makeAjaxCall
 * @description This will make an ajax call
 * @param url The url that you want to access
 * @param callback The callback or function that will be executed once the call is complete
 */
function makeAjaxCall(url, callback) {
    var xhr = new XMLHttpRequest;
    //console.log(xhr.readyState);
    xhr.addEventListener('readystatechange', function () {
        console.log(xhr.readyState);
        if (xhr.readyState === 4 && xhr.status === 200) {
            var obj = JSON.parse(xhr.responseText);
            callback(obj, xhr);
        }
    });
    xhr.open('get', url);
    xhr.send();
}
