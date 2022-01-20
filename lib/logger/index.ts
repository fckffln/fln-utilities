/**
 *
 *************************************************
 *                                               *
 *                   log utils                   *
 *                                               *
 *************************************************
 *
 * Another type of logger in your feed :)
 *
 * Usage:
 *
 * You can just log some messages:
 * > log('some message');
 * > some message
 *
 * Also you can log messages with type description:
 * > logger('error', 'first error!');
 * > 🟥 [error]: first error!
 *
 * Okay, but what about styling? Look
 * > const msg = new LoggerMessage('hi', {color: white});
 * > log(msg);
 * > hi (there is style support here)
 *
 * or
 *
 * > const msg1 = new LoggerMessage();
 * > const msg2 = new LoggerMessage();
 * > msg1.message = 'hi'; msg1.style = {color: 'white'};
 * > msg2.message = 'guys'; msg2.style = {color: 'red'};
 * > log([msg1, ', ', msg2]);
 * > hi, guys (there is style support here too)
 *
 **/

export * from './logger';
export * from './loggerMessage';
