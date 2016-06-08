export default class Ajax {
    static get(url) {
        const rootPath = "";
        if (!url.startsWith(rootPath)) {
            // Prepend the root path (e.g. /Hudde/)
            if (url.startsWith("/")) {
                url = rootPath.slice(0, -1) + url;
            } else {
                url = rootPath + url;
            }
        }

        // Return a new promise.
        return new Promise(function(resolve, reject) {
            // Do the usual XHR stuff
            var request = new XMLHttpRequest();
            request.open('GET', url);

            request.onload = function() {
                // This is called even on 404 etc
                // so check the status
                if (request.status == 200) {
                    // Resolve the promise with the response text as JSON.
                    var json = JSON.parse(request.response);
                    resolve(json);
                } else {
                    // Otherwise reject with the status text
                    // which will hopefully be a meaningful error
                    reject(Error(request.statusText));
                }
            };

            // Handle network errors
            request.onerror = function() {
                reject(Error("Network Error"));
            };

            // Make the request
            request.send();
        });
    }

    static post(url, data) {
        // Return a new promise.
        return new Promise(function(resolve, reject) {
            // Do the usual XHR stuff
            var request = new XMLHttpRequest();
            request.open('POST', url);

            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            if (data) {
                request.setRequestHeader("Content-length", data.length);
                request.setRequestHeader("Connection", "close");
            }

            request.onload = function() {
                // This is called even on 404 etc
                // so check the status
                if (request.status == 200) {
                    // Resolve the promise with the response text
                    var json = JSON.parse(request.response);
                    resolve(json);
                } else {
                    // Otherwise reject with the status text
                    // which will hopefully be a meaningful error
                    reject(Error(request.statusText));
                }
            };

            // Handle network errors
            request.onerror = function() {
                reject(Error("Network Error"));
            };

            // Make the request
            request.send(data);
        });
    }
}
