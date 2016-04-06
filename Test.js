/**
 * Created by Johnson on 4/1/16.
 */

var input = document.getElementById('firstName');
input.oninvalid = function(event) {
    event.target.setCustomValidity('Username should only contain lowercase letters. e.g. john');
};