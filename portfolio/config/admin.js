module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a52243a0377de549a26b2365732d8771'),
  },
});
