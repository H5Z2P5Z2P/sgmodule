// Minimal injection test: intercept /player and return HTTP 418
// If YouTube Music errors out when playing a song → script IS running
// If everything works fine → script is NOT loading at all

let url = $request.url || "";

if (url.includes("/player")) {
    // Return a 418 status with empty body
    $done({
        response: {
            status: 418,
            body: ""
        }
    });
} else {
    // Pass through everything else
    $done({});
}
