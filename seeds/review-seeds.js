const { Review } = require("../models");
const { faker } = require("@faker-js/faker");

const reviewdata = [];

for (let i = 0; i < 30; i++) {
  let createdReview = {
    title: faker.lorem.sentence(5),
    review_url: faker.lorem.paragraph(),
    user_id: faker.mersenne.rand(10, 1),
  };
  reviewdata.push(createdReview);
}
const seedReviews = () => Review.bulkCreate(reviewdata);

module.exports = seedReviews;
