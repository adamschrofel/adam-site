export function notFound(req, res, next) {
    res.status(404);
    return res.render("errors/404", {
        title: "404 - Not Found",
        url: req.originalUrl,
    });
}

export function errorHandler(err, req, res, next) {
    const status = res.statusCode ? res.statusCode : 500;
    console.error(err.stack || err);
    res.status(status);
    res.status(500).json({error: 'Internal server error!'});
    return res.render(view);
}
