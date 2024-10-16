const findStack = (err: any) => {
  const stopOnError = 0; //  quick toggle
  const depth = 5; //  all of the rest of the stack is Vue internals; usually only need one deep
  return !err.stack
    ? err
    : err.stack
        .split(' at ')
        .slice(0, depth + 1)
        .join('    at ');
};

export default class ErrorManager {
  constructor() {
    // this.initHandler();
  }

  static onError(error: any) {
    const response = error.response;
    const styles = [
      'color: #fff',
      'background-color: #444',
      'padding: 2px 4px',
      'border-radius: 2px',
    ].join(';');
    if (response && response.status >= 400 && response.status < 405) {
      // You can on this differently
      ErrorManager.consoleLog(error, styles);
    } else {
      ErrorManager.pusherLog(error);
    }
  }

  //  TODO:   decide what class of error should go to Pusher
  static onLayerError(error: any) {
    const response = error.response;
    const styles = [
      'color: orange',
      'background-color: #444',
      'padding: 2px 4px',
      'border-radius: 2px',
    ].join(';');
    if (response && response.status >= 400 && response.status < 405) {
      // You can on this differently
      ErrorManager.consoleLog(error, styles);
    } else {
      //  something odd happened
      ErrorManager.consoleLog(error);
    }
  }

  static onActionError(error: any) {
    const response = error.response;
    const styles = [
      'color: green',
      'background-color: #444',
      'padding: 2px 4px',
      'border-radius: 2px',
    ].join(';');
    if (response && response.status >= 400 && response.status < 405) {
      // You can on this differently
      ErrorManager.consoleLog(error, styles);
    } else {
      //  something odd happened
      ErrorManager.consoleLog(error);
    }
  }

  static onServiceError(error: any) {
    const response = error.response;
    const styles = [
      'color: red',
      'background-color: #444',
      'padding: 2px 4px',
      'border-radius: 2px',
    ].join(';');
    if (response && response.status >= 400 && response.status < 405) {
      // You can on this differently
      ErrorManager.consoleDirConfigResponse(error);
    } else {
      //  something odd happened
      ErrorManager.consoleDirConfigResponse(error);
    }
  }

  static onVueError(error: any) {
    const response = error.response;
    const styles = [
      'color: red',
      'background-color: #444',
      'padding: 2px 4px',
      'border-radius: 2px',
    ].join(';');
    if (response && response.status >= 400 && response.status < 405) {
      // You can on this differently
      ErrorManager.consoleLog(findStack(error), styles);
    } else {
      //  something odd happened
      ErrorManager.consoleLog(findStack(error));
    }
  }

  static onWarn(error: any) {
    // Send Error to Log Engine e.g LogRocket
    this.consoleLog(error);
  }

  static onInfo(error: any) {
    // You can on this differently
    this.consoleLog(error);
  }

  static onDebug(error: any) {
    const response = error.response;
    if (response && response.status >= 400 && response.status < 405) {
      ErrorManager.consoleLog(error);
      return false;
    }
    // Send Error to Log Engine e.g LogRocket
    ErrorManager.pusherLog(error);
  }

  static initHandler() {
    const scope = this;
    window.onerror = (message, url, lineNo, columnNo, error) => {
      console.log(error, 'test');
      if (error) {
        scope.onError(error);
        console.log(message, url, lineNo, columnNo, error);
      }
    };
  }

  static consoleDirConfigResponse(message: any) {
    console.dir({
      title: 'Error!',
      error: message.response?.data?.error,
      url: message.config?.url,
      config: message.config,
      response: message.response,
      icon: 'error',
    });
  }

  static pusherLog(error: any) {
    // Implement LogRocket Engine here
    console.log(error, 'pusherLog');
  }

  static consoleLog(error: any, styles?: any) {
    styles ? console.log(`%c${error}`, styles) : console.log(`${error}`);
  }
}
