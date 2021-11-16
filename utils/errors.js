class ValidationError extends Error {}
class NotFoundError extends Error {}
function handleError(err, req, res, next) {
  // console.error(err instanceof ValidationError);
  if (err instanceof NotFoundError) {
    res.status(404).render('error', { message: 'Brak klienta o takim ID.' });
    return;
  }

  res.status(err instanceof ValidationError ? 400 : 500);

  res.render('error', {
    message: err instanceof ValidationError ? err.message : 'Przepraszamy, spróbuj pózniej.',
  });
}

module.exports = {
  handleError,
  ValidationError,
  NotFoundError,
};
