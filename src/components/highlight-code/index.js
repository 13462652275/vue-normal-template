import highlightCode from './highlight-code.vue';

export default highlightCode;

const template = type => `<span class="${ type }"><slot /></span>`;

export const string = { template: template('string') };

export const number = { template: template('number') };

export const tag = { template: template('tag') };

export const operator = { template: template('operator') };

export const result = { template: template('result') };

export const func = { template: template('function') };

export const keyword = { template: template('keyword') };

export const method = { template: template('method') };

export const comment = { template: template('comment') };