'use strict';

const EventEmitter = require('events');

class TestEvent extends EventEmitter {}
const TestEmitter = new TestEvent();
export default TestEmitter;
