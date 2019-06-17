const getErrorType = (message) => {
    //     200 - OK. The request was executed successfully.
    // 400 - Bad Request. The request was unacceptable, often due to a missing or misconfigured parameter.
    // 401 - Unauthorized. Your API key was missing from the request, or wasn't correct.
    // 429 - Too Many Requests. You made too many requests within a window of time and have been rate limited. Back off for a while.
    // 500 - Server Error. Something went wrong on our side.
    let newMessage = message;

    if (message.indexOf('400') !== -1) {
        newMessage = 'Bad Request. The request was unacceptable, often due to a missing or misconfigured parameter.';
    }
    else if (message.indexOf('401') !== -1) {
        newMessage = 'Unauthorized. Your API key was missing from the request, or wasn\'t correct.';
    }
    else if (message.indexOf('429') !== -1) {
        newMessage = 'Too Many Requests. You made too many requests within a window of time and have been rate limited. Back off for a while.';
    }
    else if (message.indexOf('500') !== -1) {
        newMessage = 'Server Error. Something went wrong on our side.';
    }

    return newMessage;
};

export default getErrorType;