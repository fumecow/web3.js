/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

"use strict";

var core = require('web3-core');
var Method = require('web3-core-method');
var utils = require('web3-utils');


var Net = function (provider) {
    var _this = this;

    // sets _requestmanager
    core.packageInit(this, arguments);


    methods().forEach(function(method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
    });

};

var methods = function () {

    var getListening = new Method({
        name: 'getListening',
        call: 'net_listening',
        params: 0
    });

    var getPeerCount = new Method({
        name: 'getPeerCount',
        call: 'net_peerCount',
        params: 0,
        outputFormatter: utils.toDecimal
    });


    return [
        getListening,
        getPeerCount
    ];
};


module.exports = Net;


