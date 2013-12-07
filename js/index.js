/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$('#page1').bind('pageinit', function(event) {
    $('#alert').on('click', alertClick);
    $('#confirm').on('click', confirmClick);
    $('#prompt').on('click', promptClick);
    $('#beep').on('click', beepClick);
    $('#vibrate').on('click', vibrateClick);
});
function alertClick(){
	if(navigator.notification){
		navigator.notification.alert('Message &agrave; afficher', alertDismissed, 'Titre', 'Done');
	} else {
		alert("no navigation.notification");
	}
	
}
function alertDismissed() {
    alert('Message navigator KO');
}
function confirmClick(){
	navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
}
function onConfirm(buttonIndex){
	alert('You selected button ' + buttonIndex);
}
function promptClick(){
	navigator.notification.prompt('Prompt msg', promptConfirm, 'Prompt', ['Ok','Exit'], 'Default')
}
function promptConfirm(results){
	alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}
function beepClick(){
	navigator.notification.beep(2);
}
function vibrateClick(){
	navigator.notification.vibrate();
}




var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
