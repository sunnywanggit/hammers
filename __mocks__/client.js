// mock document and window in jest
// https://stackoverflow.com/questions/46644563/mock-document-in-jest-test-file
import { JSDOM } from 'jsdom';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;
